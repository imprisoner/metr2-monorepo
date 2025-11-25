<template>
  <Editor
    v-model="richText"
    :name="formName"
    editor-style="height: 320px"
    @text-change="onTextChange"
  />
</template>

<script setup lang="ts">
import type { EditorTextChangeEvent } from "primevue/editor";

defineProps<{
  formName?: string;
}>();

const emit = defineEmits<{
  (e: "images-updated", value: string[]): void;
}>();

const richText = defineModel<string>();

const imgSources = ref<string[]>([]);

watch(imgSources, (newVal) => {
  emit("images-updated", newVal);
});

const onTextChange = (e: EditorTextChangeEvent) => {
  imgSources.value = extractImageSrcs(e.htmlValue);
};
</script>

