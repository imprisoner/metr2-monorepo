<template>
  <div class="w-full">
    <section>
      <h1>Выбери свою квартиру</h1>
      <QuickFilters />
    </section>
    <CategoryCardsSection />
    <section>
      <Panel
        pt:content:class="xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-4"
      >
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
        <template #footer>
          <p
            v-if="!isLastPage"
            class="col-span-3 text-center text-blue-600 font-semibold cursor-pointer max-sm:grid-span-1 max-lg:grid-span-2"
            @click="next()"
          >
            Показать ещё
          </p>
        </template>
      </Panel>
    </section>
  </div>
</template>

<script setup lang="ts">
const { isLastPage, posts, next, onPageChange } = usePostsList();

await onPageChange({ currentPage: 1 });
</script>

