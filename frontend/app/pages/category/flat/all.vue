<template>
  <div class="">
    <h1>Все квартиры</h1>

    <FlatFilters
      class="mb-8 shadow-md"
      :initial-filter="initialFilter"
      @filters-updated="updateFilters"
    />
    <!--   -->
    <Panel
      header="Бортжурналы"
      pt:content:class="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2"
      class="shadow-md"
    >
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
      <template #footer>
        <p
          v-if="!isLastPage"
          class="col-span-3 text-center text-blue-600 font-semibold cursor-pointer max-sm:grid-span-1 max-lg:grid-span-2 mt-8"
          @click="next()"
        >
          Показать ещё
        </p>
      </template>
    </Panel>
  </div>
</template>

<script setup lang="ts">
import type { FlatDictionaryFields } from "~/types/common.types";

const route = useRoute();

const [entry] = Object.entries(route.query);

const typedEntry = entry as [FlatDictionaryFields, string];

const initialFilter = {
  field: typedEntry[0],
  value: typedEntry[1],
};

const { posts, isLastPage, next, updateFilters, onPageChange } = usePostsList(
  "journal",
  `post_flats_via_post.flat.${initialFilter.field}="${initialFilter.value}"`
);

await onPageChange({ currentPage: 1 });
</script>

