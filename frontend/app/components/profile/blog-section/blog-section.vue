<template>
  <Panel class="shadow-md" pt:content:class="flex flex-col gap-4">
    <template #header>
      <PanelHeaderWithControls
        text="Блог"
        :controls-show-condition="isOwner && !!blogArticles.length"
        button-label="Добавить статью"
        button-link="/write"
      />
    </template>
    <template v-if="blogArticles.length">
      <BlogArticleCard
        v-for="post in blogArticles"
        :key="post.id"
        :post="post"
        :link="getPostLink(post.id)"
      />
    </template>
    <NoItemsSection
      v-else
      text="Здесь ещё нет статей"
      button-label="Добавить статью"
      button-link="/write"
      :controls-show-condition="isOwner"
    />
  </Panel>
</template>

<script setup lang="ts">
import { getBlogPosts } from "~/api/functions";

const {  userId } = defineProps<{
  userId: string;
  isOwner: boolean;
}>();

const getPostLink = (id: string) => `/users/blog/${id}`

const blogArticles = await getBlogPosts(userId)
</script>

