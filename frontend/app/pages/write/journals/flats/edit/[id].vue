<template>
  <JournalArticleCreateForm
    :flat-id="articleRecord.flat"
    :article-id="articleId"
    :article-data="articleData"
  />
</template>

<script setup lang="ts">
import type { ClientResponseError } from "pocketbase";
import { getOneJournal } from "~/api/functions";
import type { JournalsRecord } from "~/types/pocketbase-types";

definePageMeta({
  middleware: ['auth'],
})

const articleId = useRoute().params.id as string;

let articleRecord: JournalsRecord

try {
  articleRecord = await getOneJournal(articleId);
} catch (err) {
  throw showError(err as ClientResponseError);
}

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
  previewImageIndex: articleRecord.previewImageIndex ?? 0,
  content: contentWithReplacedImages,
  images: base64ImageSources,
};
</script>
