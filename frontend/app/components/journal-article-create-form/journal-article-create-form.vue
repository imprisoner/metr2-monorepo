<template>
  <Panel :header="panelHeaderText" pt:content:class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <label class="font-semibold text-surface-500" for="title"
        >Заголовок записи</label
      >
      <InputText id="title" v-model="title" aria-describedby="title" />
    </div>
    <RichTextEditor
      v-model="content"
      @images-updated="onImagesUpdatedInTextEditor"
    />
    <div class="flex flex-col">
      <label
        for="previewImageIndex"
        class="font-semibold text-surface-500 mb-8"
      >
        Выберите фото для превью
      </label>
      <div class="flex gap-4">
        <img
          v-for="(image, index) in uploadedImages"
          :key="index"
          :src="image"
          class="w-[120px] h-[120px] object-cover rounded-lg"
          :class="{
            'border-4 border-blue-500': previewImageIndex === index,
            'cursor-pointer': true,
          }"
          @click="previewImageIndex = index"
        />
      </div>
    </div>
    <div class="flex justify-end gap-2">
      <ButtonLink
        button-size=""
        label="Отмена"
        button-severity="secondary"
        :to="cancelButtonLink"
      />
      <Button
        label="Сохранить"
        :loading="isLoading"
        :disabled="isLoading"
        @click="save"
      />
    </div>
  </Panel>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";

interface ArticleData {
  title: string;
  previewImageIndex: number;
  content: string;
  images: string[];
}

const {
  articleData = {
    title: "",
    previewImageIndex: 0,
    content: "",
    images: [],
  },
  articleId = undefined,
  flatId,
} = defineProps<{
  articleData?: ArticleData;
  articleId?: string;
  flatId: string;
}>();

const mode = computed(() => (articleId ? "edit" : "create"));

const panelHeaderText = computed(() =>
  mode.value === "create" ? "Создать запись" : "Редактировать запись"
);

const title = ref(articleData.title);
const previewImageIndex = ref(articleData.previewImageIndex);
const content = ref(articleData.content);

const uploadedImages = ref<string[]>(articleData.images);

const imageFiles = computed(() =>
  uploadedImages.value.map((str, i) => base64ToFile(str, `image_${i}.png`))
);

const onImagesUpdatedInTextEditor = (base64images: string[]) => {
  uploadedImages.value = base64images;
};

const authStore = useAuthStore();

const collection = "journals";
const authorFieldName = "user";

const body = computed(() => ({
  title: title.value || "Без названия",
  content: content.value,
  previewImageIndex: previewImageIndex.value || 0,
  images: imageFiles.value,
  [authorFieldName]: authStore.userInfo!.id,
  flat: flatId,
}));

const router = useRouter();

const isLoading = ref(false);

const save = async () => {
  let response;

  isLoading.value = true;

  if (mode.value === "create") {
    response = await pb.collection(collection).create(body.value);
  } else {
    response = await pb.collection(collection).update(articleId!, body.value);
  }

  const contentWithReplacedImages = replaceAllImageSrcs(
    content.value,
    (_, index) => {
      return getPocketbaseFilePath(response, response.images[index]!);
    }
  );

  await pb.collection(collection).update(response.id, {
    content: contentWithReplacedImages,
  });

  isLoading.value = false;

  router.push(`/category/flat/${flatId}`);
};

const cancelButtonLink =
  mode.value === "create"
    ? `/users/${authStore.userInfo?.hrid}`
    : `/journals/${articleId}`;
</script>

