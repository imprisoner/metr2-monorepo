<template>
  <Panel class="shadow-md mb-8" pt:content:class="flex flex-col gap-4">
    <template #header>
      <PanelHeaderWithControls
        text="Квартиры"
        button-label="Добавить квартиру"
        :controls-show-condition="isOwner && !!flats.length"
        @button-click="showAddFlatDialog = true"
      />
    </template>
    <template v-if="flats.length !== 0">
      <FlatCard
        v-for="flat in flats"
        :key="flat.id"
        :flat="flat"
        :is-owner="isOwner"
        @edit="onEditFlat"
      />
    </template>
    <NoItemsSection
      v-else
      text="У пользователя нет добавленных квартир"
      button-label="Добавить квартиру"
      :controls-show-condition="isOwner"
      @button-click="showAddFlatDialog = true"
    />
  </Panel>
  <!--  -->
  <Panel class="shadow-md">
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

