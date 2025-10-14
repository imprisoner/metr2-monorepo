<template>
  <div class="flex flex-col gap-4">
    <FileUpload
      name="images"
      accept="image/*"
      :max-file-size="1000000"
      custom-upload
      @remove="onRemoveUploadedFile"
      @select="onSelectFile"
    >
      <template #empty>
        <span>Drag and drop files to here to upload.</span>
      </template>
    </FileUpload>
    <div v-if="images.length" class="flex gap-4">
      <DeletableImage
        v-for="(src, index) in images"
        :key="index"
        :src="src"
        :is-deleted="imagesToDelete.includes(src)"
        @delete="onDeleteImage"
        @cancel-delete="onCancelDeleteImage"
      />
      <!-- <div
        v-for="(src, index) in images"
        :key="index"
        class="relative w-[160px] h-[160px] rounded-lg overflow-hidden"
        :class="{ 'opacity-50': imagesToDelete.includes(src) }"
      >
        <i
          v-if="imagesToDelete.includes(src)"
          class="pi pi-times absolute top-4 right-4 cursor-pointer text-white"
          @click="
            imagesToDelete = imagesToDelete.filter((item) => item !== src)
          "
        />
        <i
          v-if="!imagesToDelete.includes(src)"
          class="pi pi-trash absolute top-4 right-4 cursor-pointer text-white"
          @click="imagesToDelete.push(src)"
        />
        <NuxtImg :src="src" class="w-full h-full object-cover" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  FileUploadRemoveEvent,
  FileUploadSelectEvent,
} from "primevue/fileupload";

defineProps<{
  images: string[];
}>();

const emit = defineEmits<{
  (e: "select-file", value: FileUploadSelectEvent): void;
  (e: "remove-file", value: FileUploadRemoveEvent): void;
  (e: "delete-image", value: string[]): void;
}>();

const onSelectFile = (e: FileUploadSelectEvent) => {
  emit("select-file", e);
};

const onRemoveUploadedFile = (e: FileUploadRemoveEvent) => {
  emit("remove-file", e);
};

const imagesToDelete = defineModel<string[]>("deleted-images", {
  default: reactive([]),
});

const onDeleteImage = (src: string) => {
  imagesToDelete.value.push(src);
};

const onCancelDeleteImage = (src: string) => {
  imagesToDelete.value = imagesToDelete.value.filter((item) => item !== src);
};
</script>

