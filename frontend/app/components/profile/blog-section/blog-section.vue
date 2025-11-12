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
import { getContractorsBlogPosts, getUsersBlogPosts } from "~/api/functions";
import type { UsersRecord } from "~/types/pocketbase-types";

const { role, userId } = defineProps<{
  userId: string;
  role: UsersRecord['role'] 
  isOwner: boolean;
}>();

const getPostLink = (id: string) => role == 'owner' ? `/users/blog/${id}` : `/contractors/blog/${id}`

const blogArticles = await (role === 'owner' ? getUsersBlogPosts(userId) : getContractorsBlogPosts(userId))
</script>

