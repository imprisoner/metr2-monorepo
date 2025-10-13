<template>
  <Panel header="Квартиры" class="shadow-md mb-8">
    <template v-if="flats.length !== 0">
      <Card v-for="flat in flats" :key="flat.id">
        <template #header>
          <NuxtImg :src="flat.image" class="w-full object-cover" />
        </template>
        <template #title>
          <div class="flex justify-between">
            <NuxtLink
              :to="`/category/flat/${flat.id}`"
              class="font-bold text-xl"
              >{{ flat.nickname }}</NuxtLink
            >
            <Button v-if="isOwner" v-slot="slotProps" as-child>
              <NuxtLink :class="slotProps.class"
                >Написать в бортжурнал</NuxtLink
              >
            </Button>
          </div>
        </template>
      </Card>
    </template>
    <div v-else class="flex flex-col items-center justify-center py-8">
      <span class="text-gray-500 mb-2"
        >У пользователя нет добавленных квартир</span
      >
      <Button v-if="isOwner" severity="info" @click="showAddFlatDialog = true">
        Добавить квартиру
      </Button>
    </div>
  </Panel>
  <!--  -->
  <Panel class="shadow-md">
    <template #header>
      <div class="flex justify-between items-center w-full">
        <span class="font-bold">Блог</span>
        <Button
          v-if="isOwner && blogArticles?.length"
          severity="info"
          size="small"
          @click="router.push('/write')"
        >
          Добавить статью
        </Button>
      </div>
    </template>
    <template v-if="blogArticles.length">
      <Card v-for="post in blogArticles" :key="post.id" class="overflow-hidden">
        <template #header>
          <NuxtImg v-if="post.previewImage" :src="post.previewImage" class="w-full object-cover" />
        </template>
        <template #title>
          <div class="flex justify-between">
            <NuxtLink
              :to="`/users/blog/${post.id}`"
              class="font-bold text-xl"
              >{{ post.title }}</NuxtLink
            >
          </div>
        </template>
      </Card>
    </template>
    <div v-else class="flex flex-col items-center justify-center py-8">
      <span class="text-gray-500 mb-2">Здесь ещё нет статей</span>
      <Button v-if="isOwner" severity="info" @click="router.push('/write')">
        Добавить статью
      </Button>
    </div>
  </Panel>
</template>

<script setup lang="ts">
import type {
  FlatsRecord,
  UsersBlogPostsRecord,
} from "~/types/pocketbase-types";

const { blogArticles = [] } = defineProps<{
  flats: FlatsRecord[];
  isOwner: boolean;
  blogArticles?: (UsersBlogPostsRecord & { previewImage: string | undefined})[];
}>();

const showAddFlatDialog = ref(false);

const router = useRouter();
</script>

