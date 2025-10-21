<template>
  <Card class="w-md mx-auto shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
    <template #header>
      <div class="relative overflow-hidden h-[200px] rounded-t-lg flex">
        <template v-if="post.previewImage">
          <NuxtImg
            :src="post.previewImage"
            alt="post image"
            class="w-full object-cover"
          />
          <Tag
            v-if="imageCount"
            class="absolute bottom-2 right-2"
            severity="info"
          >
            {{ imageCount }} фото
          </Tag>
        </template>
        <DefaultPostThumbnail v-else />
      </div>
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
import type {
  ContractorsBlogPostsRecord,
  UsersBlogPostsRecord,
} from "~/types/pocketbase-types";

const { post } = defineProps<{
  post: (UsersBlogPostsRecord | ContractorsBlogPostsRecord) & {
    previewImage: string | undefined;
  };
  link: string;
}>();

const imageCount = post.images?.length;
</script>

