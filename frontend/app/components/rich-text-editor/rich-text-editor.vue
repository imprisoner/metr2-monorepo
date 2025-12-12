<template>
  <RichTextEditorVueComponent
    :key="1"
    theme="light"
    locale="ru"
    :read-only="false"
    :initial-blocks="blocks"
    :upload-file="getFileLink"
    @blocks-change="onBlocksChange"
  />
</template>

<script setup lang="ts">
import RichTextEditorVueComponent, { type Block } from "blocknotejs-vue-rte";
import "blocknotejs-vue-rte/style.css";
import { pb } from "~/api/pocketbase-client";

const blocks = defineModel<Block[]>("blocks");

const { postId } = defineProps<{
  postId: string;
}>();

type AllowedMediaTypes = "video" | "image";

const onBlocksChange = async (newBlocks: Block[]) => {
  const [deletedBlock] =
    blocks.value?.filter((block) => {
      return !newBlocks.some((newBlock) => newBlock.id === block.id);
    }) ?? [];

  if (deletedBlock && ["image", "video"].includes(deletedBlock.type)) {
    const fileName = deletedBlock.props.url.split("/").pop() as string;
    await deleteFile(fileName, deletedBlock.type as AllowedMediaTypes);
  }

  blocks.value = newBlocks;
};

const deleteFile = async (fileName: string, type: AllowedMediaTypes) => {
  const fieldName = type === "image" ? "images" : "videos";

  await pb.collection("posts").update(postId, {
    [`${fieldName}-`]: [fileName],
  });
};

const toast = useToast();

const showErrorToast = () => {
  toast.add({
    severity: "error",
    summary: "Размер файла слишком большой",
    life: 3000,
  });
};

const checkVideoForAllowedSize = (size: number) => {
  if (size / 1024 / 1024 > 400) {
    showErrorToast();
    throw Error("too big");
  }
};

const getFileLink = async (file: File) => {
  const type = file.type.split("/")[0] as AllowedMediaTypes;

  if (type === "video") {
    checkVideoForAllowedSize(file.size);
  }

  const fieldName = type === "image" ? "images" : "videos";

  try {
    const response = await pb.collection("posts").update(postId, {
      [`${fieldName}+`]: file,
    });
    return getPocketbaseFilePath(response, response[fieldName].at(-1)!);
  } catch (e) {
    console.error(e);
    showErrorToast();
    throw e;
  }
};
</script>

