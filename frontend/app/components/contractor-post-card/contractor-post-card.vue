<template>
  <Card
    class="mx-auto shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <!-- Header slot: Image -->
    <template #header>
      <div class="relative">
        <img :src="image" alt="post image" class="w-full rounded-t-lg" />
        <div
          v-if="imageCount"
          class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded-md"
        >
          {{ imageCount }} фото
        </div>
      </div>
    </template>

    <!-- Title slot -->
    <template #title>
      <NuxtLink :to="`/contractors/posts/${postId}`">
        <h2 class="font-bold text-base/5 line-clamp-2 h-[40px]">
          {{ title }}
        </h2>
      </NuxtLink>
    </template>

    <!-- Content slot -->
    <template #content>
      <p v-if="text" class="text-gray-700 text-sm relative">
        <span class="line-clamp-4">
          {{ text }}
        </span>
        <NuxtLink
          :to="`/contractors/posts/${postId}`"
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
        <span class="text-gray-400 text-xs">{{ publishDate }}</span>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
interface ContractorPostCardProps {
  image: string;
  postId: string;
  imageCount?: number;
  title: string;
  text?: string;
  likes: number;
  comments: number;
  publishDate: string;
}

defineProps<ContractorPostCardProps>();
</script>

