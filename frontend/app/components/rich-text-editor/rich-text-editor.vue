<template>
  <Editor
    v-model="richText"
    editor-style="height: 320px"
    @text-change="onTextChange"
  />
  <!-- @load="onEditorModulesLoaded" -->
</template>

<script setup lang="ts">
import type { EditorTextChangeEvent } from 'primevue/editor';

// import type { EditorLoadEvent } from "primevue/editor";
// import type Quill from "quill";
// import type Toolbar from "quill/modules/toolbar";
const emit = defineEmits<{
  (e: "images-updated", value: string[]): void;
}>();

const richText = defineModel<string>();

const imgSources = ref<string[]>([])

watch(imgSources, (newVal) => {
  emit("images-updated", newVal);
});

const onTextChange = (e: EditorTextChangeEvent) => {
  imgSources.value = extractImageSrcs(e.htmlValue);
};
// function imageHandler(instance: Quill) {
//   return () => {
//     const input = document.createElement("input");
//     input.setAttribute("type", "file");
//     input.setAttribute("accept", "image/*");
//     input.click();

//     input.onchange = async function () {
//       if (input.files === null) return;

//       const file = input.files[0];

//       if (!file) return;

//       const formData = new FormData();
//       formData.append("image", file);

//       try {
//         // Replace with your actual upload endpoint
//         const response = await fetch("/api/upload-image", {
//           method: "POST",
//           body: formData,
//         });
//         const data = await response.json();
//         const imageUrl = data.url; // Assuming your server returns a URL
//         // Get the current Quill instance
//         const range = instance.getSelection(true);
//         instance.insertEmbed(range.index, "image", imageUrl);
//       } catch (error) {
//         console.error("Image upload failed:", error);
//       }
//     };
//   };
// }

// const onEditorModulesLoaded = (e: EditorLoadEvent) => {
//   const { instance }: { instance: Quill } = e;

//   (instance.getModule("toolbar") as Toolbar).addHandler(
//     "image",
//     imageHandler(instance)
//   );
// };
</script>

