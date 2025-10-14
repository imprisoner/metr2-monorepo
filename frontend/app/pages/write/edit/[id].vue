<template>
  <div class="w-full">
    <BlogArticleCreateForm :article-id="articleId" :article-data="articleData" />
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";

const articleId = useRoute().params.id as string;

const authStore = useAuthStore()

const collection = authStore.userInfo!.collectionName === 'users' ? 'users_blog_posts' : 'contractors_blog_posts'

const articleRecord = await pb.collection(collection).getOne(articleId);

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

