<template>
  <Card class="max-w-md mx-auto shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
    <!-- Header slot: Image -->
    <template v-if="coverImageUrl" #header>
      <div class="relative">
        <NuxtImg :src="coverImageUrl" alt="post image" class="w-full rounded-t-lg h-[200px] object-cover" />
        <Tag
          v-if="imageCount"
          class="absolute bottom-2 right-2"
          severity="info"
        >
          {{ imageCount }} фото
        </Tag>
      </div>
    </template>

    <!-- Title slot -->
    <template #title>
      <h2 class="font-bold text-base/5 line-clamp-2 h-[40px]">
        {{ journal.title }}
      </h2>
    </template>

    <!-- Content slot -->
    <template #content>
      <p class="text-gray-700 text-sm relative">
        <span class="line-clamp-4">
          {{ journal.content }}
        </span>
        <NuxtLink :to="`/journals/${journal.id}`" class="text-blue-600 font-medium cursor-pointer flex w-fit ms-auto">
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
import { pb } from '~/api/pocketbase-client';
import type { JournalsRecord } from '~/types/pocketbase-types';

interface JournalCardProps {
  journal: JournalsRecord
}

const {journal} = defineProps<JournalCardProps>();

const publishDate = new Date(journal.created).toLocaleDateString()

let coverImageUrl = undefined

if (journal.images && journal.images[0]) {
  coverImageUrl = pb.files.getURL(journal, journal.images[0])
}

const imageCount = journal.images?.length ?? 0

const likes = 0
const comments = 0
</script>
