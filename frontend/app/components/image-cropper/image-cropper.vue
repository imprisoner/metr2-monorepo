<template>
  <ClientOnly>
    <div class="cropper">
      <div class="flex-col lg:flex-row max-w-full">
        <Cropper
          class="max-h-[500px]! mx-auto"
          :src="imgSource"
          :stencil-component="CircleStencil"
          :resize-image="false"
          :debounce="false"
          image-restriction="fit-area"
          @change="handleCropChange"
        />
        <div class="p-4">
          <div
            class="flex w-[120px] h-[120px] bg-black rounded-full overflow-hidden mt-4 mx-auto"
          >
            <preview
              v-if="result"
              :width="120"
              :height="120"
              :image="result.image"
              :coordinates="result.coordinates"
            />
            <ProgressSpinner v-if="showSpinner && result" class="m-auto" />
          </div>
        </div>
      </div>
      <div class="flex gap-2 mt-4 justify-end">
        <Button label="Назад" severity="secondary" @click="$emit('cancel')" />
        <Button label="Сохранить" @click="onCropConfirm" :loading="isLoading" />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import {
  Cropper,
  CircleStencil,
  Preview,
  type CropperResult,
} from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { canvasToBase64 } from "~~/shared/utils";

const { imgSource } = defineProps<{
  imgSource: string;
}>();

const emit = defineEmits<{
  (e: "crop", value: string): void;
  (e: "cancel"): void;
}>();

const result = ref<CropperResult>();

const showSpinner = ref(false);

const handleCropChange = async (e: CropperResult) => {
  result.value = e;
};

const isLoading = ref(false);

const onCropConfirm = () => {
  if (result.value) {
    isLoading.value = true;
    emit("crop", canvasToBase64(result.value.canvas!));
  }
};
</script>

