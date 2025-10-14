<template>
  <Panel class="shadow-md mb-8" pt:content:class="flex flex-col gap-4">
    <template #header>
      <div class="flex justify-between items-center w-full">
        <span class="font-bold">Квартиры</span>
        <Button
          v-if="isOwner"
          severity="info"
          @click="showAddFlatDialog = true"
        >
          Добавить квартиру
        </Button>
      </div>
    </template>
    <template v-if="flats.length !== 0">
      <Card v-for="flat in flats" :key="flat.id">
        <template #header>
          <NuxtImg
            v-for="(image, index) in flat.images"
            :key="index"
            :src="image"
            class="w-full object-cover"
          />
        </template>
        <template #title>
          <div class="flex justify-between">
            <NuxtLink
              :to="`/category/flat/${flat.id}`"
              class="font-bold text-xl"
              >{{ flat.nickname }}</NuxtLink
            >
            <div v-if="isOwner" class="flex gap-2">
              <Button v-slot="slotProps" as-child>
                <NuxtLink :class="slotProps.class" :to="`/write/journals/flats/${flat.id}`">
                  Написать в бортжурнал
                </NuxtLink>
              </Button>
              <Button
                label="Редактировать"
                severity="info"
                @click="onEditFlat(flat.id)"
              />
            </div>
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
          v-if="isOwner"
          v-slot="slotProps"
          severity="info"
          size="small"
          as-child
        >
          <NuxtLink to="/write" :class="slotProps.class">
            Добавить статью
          </NuxtLink>
        </Button>
      </div>
    </template>
    <template v-if="blogArticles.length">
      <Card v-for="post in blogArticles" :key="post.id" class="overflow-hidden">
        <template #header>
          <NuxtImg
            v-if="post.previewImage"
            :src="post.previewImage"
            class="w-full object-cover"
          />
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
      <Button
        v-if="isOwner"
        v-slot="slotProps"
        severity="info"
        size="small"
        as-child
      >
        <NuxtLink to="/write" :class="slotProps.class">
          Добавить статью
        </NuxtLink>
      </Button>
    </div>
  </Panel>
  <AddFlatDialog
    v-if="showAddFlatDialog"
    v-model:visible="showAddFlatDialog"
    :flat="flatToEdit"
  />
</template>

<script setup lang="ts">
import type {
  FlatsRecord,
  UsersBlogPostsRecord,
} from "~/types/pocketbase-types";

const { blogArticles = [], flats } = defineProps<{
  flats: FlatsRecord[];
  isOwner: boolean;
  blogArticles?: (UsersBlogPostsRecord & {
    previewImage: string | undefined;
  })[];
}>();

const showAddFlatDialog = ref(false);

const flatToEdit = ref<FlatsRecord>();

const onEditFlat = (flatId: string) => {
  flatToEdit.value = flats.find((flat) => flat.id === flatId);
  showAddFlatDialog.value = true;
};

watchEffect(() => {
  if (showAddFlatDialog.value === false) {
    flatToEdit.value = undefined;
  }
});
</script>

