<template>
  <ClientOnly>
      <FileUpload
        v-if="!base64Img"
        accept="image/*"
        name="user-avatar-uploader"
        custom-upload
        :file-limit="1"
        :show-upload-button="false"
        :show-cancel-button="false"
        :pt:root:class="CUSTOM_INPUT_CLASS"
        pt:header:class="hidden"
        @select="onFileUpload"
      >
        <template #empty>
          <div class="flex items-center justify-center flex-col pt-4">
            <i
              class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color mb-4"
            />
            <Button label="Выберите" icon="pi pi-upload" severity="info" class="mb-2" @click="onChooseFileClick"/>
            <p class="mt-6 mb-0 hidden md:block">или перетащите сюда картинку</p>
          </div>
        </template>
      </FileUpload>
      <ImageCropper
        v-if="showCropper"
        :img-source="base64Img"
        @crop="onCropHandler"
        @cancel="onCancelCrop"
      />
  </ClientOnly>
</template>

<script setup lang="ts">
import type { FileUploadSelectEvent } from "primevue/fileupload";
import { fileToBase64 } from "~~/shared/utils";
import ImageCropper from "../image-cropper/image-cropper.vue";
import { saveUserAvatar } from "~/api/functions";
import { MAX_FILE_SIZE_MB } from "~/constants";

const base64Img = ref("");
const showCropper = ref(false);
const onFileUpload = async (e: FileUploadSelectEvent) => {
  const image = await fileToBase64(e.files[0]);
  base64Img.value = image;
  showCropper.value = true;
};

const croppedBase64Image = ref<string>();

const onCropHandler = (base64String: string) => {
  console.log("Cropped Image Base64:", base64String.slice(0, 20));
  croppedBase64Image.value = base64String;

  saveAvatar()
};

const CUSTOM_INPUT_CLASS = 'custom-user-input-class'

const onChooseFileClick = () => {
  // implement custom file input click

  const fileInput = document.querySelector(
    `.${CUSTOM_INPUT_CLASS} input[type="file"]`
  ) as HTMLInputElement;
  fileInput.click();
};

const onCancelCrop = () => {
  showCropper.value = false;
  base64Img.value = "";
};

const authStore = useAuthStore();

const {$resizeImage} = useNuxtApp()

const saveAvatar = async () => {
  const file = base64ToFile(croppedBase64Image.value!, 'avatar.png');

  const resized = await $resizeImage(file, {
    maxSizeMB: MAX_FILE_SIZE_MB.avatar
  });

  await saveUserAvatar(authStore.userInfo!.id, authStore.userInfo!.collectionName, resized);
}
</script>

