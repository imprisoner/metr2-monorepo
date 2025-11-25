<template>
  <Panel header="Редактировать запись" pt:content:class="flex flex-col gap-8">
    <Form
      v-slot="$form"
      class="flex flex-col gap-4 w-full"
      :initial-values
      :resolver
      @submit="onFormSubmit"
    >
      <!-- Flat select -->
      <ArticleCreateFormFlatSelect
        v-if="isJournal"
        class="flex flex-col gap-1"
        :field-state="$form.flat"
      />

      <!--  -->
      <ArticleCreateFormServicesSelect
        v-if="isPortfolio"
        :field-state="$form.services"
      />

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
import type { FormSubmitEvent } from "@primevue/forms/form";
import { ClientResponseError } from "pocketbase";
import { pb } from "~/api/pocketbase-client";
import { articleResolver } from "~/schemas";
import { PostsTypeOptions, type PostsRecord } from "~/types/pocketbase-types";

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
      relatedInitialValues = {};
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
      relatedInitialValues = {};
    }
  }
}

const initialValues = reactive({
  title: title.value,
  content: content.value,
  images: imageFiles.value ?? [],
  ...relatedInitialValues,
});
const resolver = articleResolver(post.type!);

const router = useRouter();

const isLoading = ref(false);

const onFormSubmit = async ({ valid, values }: FormSubmitEvent) => {
  if (!valid) {
    return;
  }

  const { title, content, images, flat, services } = values as {
    title: string;
    content: string;
    images: File[];
    flat?: string;
    services?: string[];
  };

  isLoading.value = true;

  if (isJournal) {
    createOrUpdatePostFlatsRecord(flat!)
  }

  if (isPortfolio) {
    createOrUpdatePostServicesRecord(services!)
  }

  const response = await updatePostContent({title, content, images})

  const contentWithReplacedImages = replaceAllImageSrcs(content, (_, index) => {
    return getPocketbaseFilePath(response, response.images[index]!);
  });

  await pb.collection("posts").update(response.id, {
    content: contentWithReplacedImages,
  });

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
  const response = await pb
    .collection("posts")
    .update(post.id, data);

  return response;
}


</script>

