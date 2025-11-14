<template>
  <div class="w-full">
    <BlogArticleCreateForm
      :article-id="articleId"
      :article-data="articleData"
    />
  </div>
</template>

<script setup lang="ts">
import type { ClientResponseError } from "pocketbase";
import { pb } from "~/api/pocketbase-client";
import type { BlogPostsRecord } from "~/types/pocketbase-types";

definePageMeta({
  middleware: ["auth"],
});

const articleId = useRoute().params.id as string;

let articleRecord: BlogPostsRecord;

try {
  articleRecord = await pb.collection("blog_posts").getOne(articleId);
} catch (err) {
  throw createError(err as ClientResponseError);
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

