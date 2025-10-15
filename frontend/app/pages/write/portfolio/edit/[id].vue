<template>
  <div>
    <PortfolioArticleCreateForm :article-id="articleId" :article-data="articleData" />
  </div>
</template>

<script setup lang="ts">
import { pb } from '~/api/pocketbase-client';

const route = useRoute();

const articleId = route.params["id"] as string;

const getOnePortfolioArticle = async () => {
  const response = await pb.collection("contractors_posts").getOne(articleId)

  return response
}

const articleData = await getOnePortfolioArticle()
</script>

