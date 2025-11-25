<template>
  <Panel header="Редактировать запись" pt:content:class="flex flex-col gap-8">
    <Form
      ref="articleForm"
      v-slot="$form"
      class="flex flex-col gap-4 w-full"
      :initial-values
      :resolver
      @submit="onFormSubmit"
    >
      <!-- Flat select -->
      <div v-if="isJournal" class="flex flex-col gap-2">
        <label class="font-semibold text-surface-500" for="title"
          >Выберите квартиру</label
        >
        <ArticleCreateFormFlatSelect
          class="flex flex-col gap-1"
          :field-state="$form.flat"
        />
      </div>
      <!--  -->
      <div v-if="isPortfolio" class="flex flex-col gap-2">
        <label class="font-semibold text-surface-500" for="title"
          >Выберите связанные услуги</label
        >
        <ArticleCreateFormServicesSelect :field-state="$form.services" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="font-semibold text-surface-500" for="title"
          >Заголовок записи</label
        >
        <InputText name="title" aria-describedby="title" />
      </div>
      <div class="flex flex-col gap-1">
        <RichTextEditor
          form-name="content"
          @images-updated="onImagesUpdatedInTextEditor"
        />
      </div>
      <div class="flex justify-end gap-2">
        <ButtonLink
          button-size=""
          label="Отмена"
          button-severity="secondary"
          :to="cancelButtonLink"
        />
        <Button
          label="Опубликовать"
          :loading="isLoading"
          :disabled="isLoading"
          type="submit"
        />
      </div>
    </Form>
  </Panel>
</template>

<script setup lang="ts">
import type { FormInstance } from "@primevue/forms";
import type { FormSubmitEvent } from "@primevue/forms/form";
import { ClientResponseError } from "pocketbase";
import { pb } from "~/api/pocketbase-client";
import { articleResolver } from "~/schemas";
import {
  PostsStatusOptions,
  PostsTypeOptions,
  type PostsRecord,
} from "~/types/pocketbase-types";
import { throttle } from "~~/shared/utils";

const { post } = defineProps<{
  post: PostsRecord;
}>();

const isJournal = post.type === PostsTypeOptions.journal;
const isPortfolio = post.type === PostsTypeOptions.portfolio;

const title = ref(post.title);
const content = ref(post.content);

const uploadedImages = ref<string[]>(post.images ?? []);

const imageFiles = computed(() =>
  uploadedImages.value.map((str, i) => base64ToFile(str, `image_${i}.png`))
);

const onImagesUpdatedInTextEditor = (base64images: string[]) => {
  uploadedImages.value = base64images;
};

const authStore = useAuthStore();

let relatedInitialValues;

let postFlatRecordId: string | undefined = undefined;
let postServiceRecordId: string | undefined = undefined;

if (isJournal) {
  try {
    const { flat, id } = await pb
      .collection("post_flats")
      .getFirstListItem(`post = "${post.id}"`);
    postFlatRecordId = id;
    relatedInitialValues = { flat };
  } catch (e) {
    console.error("Error fetching related flat:", e);

    if (e instanceof ClientResponseError && e.status === 404) {
      relatedInitialValues = { flat: undefined };
    }
  }
}

if (isPortfolio) {
  try {
    const { services, id } = await pb
      .collection("post_services")
      .getFirstListItem(`post = "${post.id}"`);
    postServiceRecordId = id;
    relatedInitialValues = { services };
  } catch (e) {
    console.error("Error fetching related services:", e);

    if (e instanceof ClientResponseError && e.status === 404) {
      console.log("here we go");
      relatedInitialValues = { services: [] };
    }
  }
}

const initialValues = reactive({
  title: title.value,
  content: content.value,
  ...relatedInitialValues,
});

const resolver = articleResolver(post.type!);

const router = useRouter();

const isLoading = ref(false);

interface ArticleData {
  title: string;
  content: string;
  flat?: string;
  services?: string[];
}

const onFormSubmit = async ({ valid, values }: FormSubmitEvent) => {
  if (!valid) {
    return;
  }

  const { title, content, flat, services } = values as ArticleData;

  isLoading.value = true;

  saveFullPostWithRelatedEntities(
    {
      title,
      content,
      flat,
      services,
    },
    true
  );

  isLoading.value = false;
  router.push(`/users/${authStore.userInfo!.username}`);
};

const cancelButtonLink = `/posts/${post.id}`;

async function createOrUpdatePostFlatsRecord(flatId: string) {
  if (postFlatRecordId) {
    await pb.collection("post_flats").update(postFlatRecordId, {
      flat: flatId,
    });
  } else {
    await pb.collection("post_flats").create({
      post: post.id,
      flat: flatId,
    });
  }
}

async function createOrUpdatePostServicesRecord(servicesIds: string[]) {
  if (postServiceRecordId) {
    await pb.collection("post_services").update(postServiceRecordId, {
      services: servicesIds,
    });
  } else {
    await pb.collection("post_services").create({
      post: post.id,
      services: servicesIds,
    });
  }
}

async function updatePostContent(data: Record<string, unknown>) {
  const response = await pb.collection("posts").update(post.id, data);

  return response;
}

async function saveFullPostWithRelatedEntities(
  { content, title, flat, services }: ArticleData,
  shouldPublish: boolean = false
) {
  if (isJournal) {
    createOrUpdatePostFlatsRecord(flat!);
  }

  if (isPortfolio) {
    createOrUpdatePostServicesRecord(services!);
  }

  const response = await updatePostContent({
    title,
    content,
    images: imageFiles.value,
  });

  const contentWithReplacedImages = replaceAllImageSrcs(content, (_, index) => {
    return getPocketbaseFilePath(response, response.images[index]!);
  });

  await updatePostContent({
    content: contentWithReplacedImages,
    status: shouldPublish
      ? PostsStatusOptions.published
      : PostsStatusOptions.draft,
  });
}

const articleForm = ref<FormInstance>();

const autosave = throttle(async (states) => {
  await saveFullPostWithRelatedEntities(states);
}, 5000);

watch(
  () => articleForm.value?.states,
  () => {
    if (articleForm.value === undefined) return;

    const data = Object.keys(articleForm.value.states).reduce(
      (acc, key: string) => {
        acc[key as keyof ArticleData] = articleForm.value!.states[key]!.value;
        return acc;
      },
      {} as ArticleData
    );

    autosave({...data, images: imageFiles.value});
  },
  { deep: true }
);

// setInterval(() => {
//   console.log('submit')
//   console.log(articleForm.value?.states)
// }, 5000)
</script>

