<template>
  <Card class="overflow-hidden">
    <template #header>
      <NuxtImg
        v-if="post.previewImage"
        :src="post.previewImage"
        class="w-full object-cover"
      />
    </template>
    <template #title>
      <div class="flex justify-between">
        <NuxtLink :to="link" class="font-bold text-xl">{{
          post.title
        }}</NuxtLink>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { ContractorsBlogPostsRecord, UsersBlogPostsRecord } from "~/types/pocketbase-types";

defineProps<{
  post: (UsersBlogPostsRecord | ContractorsBlogPostsRecord) & {
    previewImage: string | undefined;
  };
  link: string;
}>();
</script>
