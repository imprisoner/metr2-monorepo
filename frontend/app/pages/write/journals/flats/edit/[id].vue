<template>
  <JournalArticleCreateForm
    :flat-id="articleRecord.flat"
    :article-id="articleId"
    :article-data="articleData"
  />
</template>

<script setup lang="ts">
import { getOneJournal } from "~/api/functions";

const articleId = useRoute().params.id as string;

const articleRecord = await getOneJournal(articleId);

const imageSources = extractImageSrcs(articleRecord.content);

const base64ImageSources = await Promise.all(
  imageSources.map(imageUrlToBase64Client)
);

const contentWithReplacedImages = replaceAllImageSrcs(
  articleRecord.content,
  (_, index) => {
    return base64ImageSources[index]!;
  }
);

const articleData = {
  title: articleRecord.title,
  previewImageIndex: articleRecord.previewImageIndex,
  content: contentWithReplacedImages,
  images: base64ImageSources,
};
</script>
