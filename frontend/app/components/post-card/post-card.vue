<template>
  <Card
    class="w-full mx-auto shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <!-- Header slot: Image -->
    <template #header>
      <div class="relative overflow-hidden h-[200px] rounded-t-lg flex">
        <template v-if="coverImageUrl">
          <img
            :src="coverImageUrl"
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

    <!-- Title slot -->
    <template #title>
      <h6 class="font-bold text-base/5 line-clamp-2 h-10">
        {{ post.title }}
      </h6>
    </template>

    <!-- Content slot -->
    <template #content>
      <p class="text-gray-700 text-sm relative">
        <span class="line-clamp-4">
          {{ post.content }}
        </span>
        <NuxtLink
          :to="`/posts/${post.id}`"
          class="text-blue-600 font-medium cursor-pointer flex w-fit ms-auto"
        >
          Читать дальше
        </NuxtLink>
      </p>
    </template>

    <!-- Footer slot -->
    <template #footer>
      <div class="flex justify-between items-center text-sm text-gray-600 mb-2">
        <div class="flex gap-4 items-center">
          <div class="flex items-center gap-1">
            <i class="pi pi-heart" />
            <span>{{ likes }}</span>
          </div>
          <div class="flex items-center gap-1">
            <i class="pi pi-comments" />
            <span>{{ comments }}</span>
          </div>
        </div>
        <span
          v-if="post.status !== PostsStatusOptions.draft && post.publishDate !== ''"
          class="text-gray-400 text-xs"
          >{{ new Date(post.publishDate).toLocaleDateString('ru-RU') }}</span
        >
        <Badge v-else value="Черновик" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { PostsStatusOptions, type PostsRecord } from "~/types/pocketbase-types";

const { post } = defineProps<{ post: PostsRecord }>();

const likes = 0;
const comments = 0;

let coverImageUrl = undefined;

const imageCount = post.images?.length ?? 0;

if (imageCount > 0) {
  coverImageUrl = getPocketbaseFilePath(post, post.images![0]!);
}
</script>

