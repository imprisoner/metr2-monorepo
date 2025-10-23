<template>
  <div class="w-full">
    <section>
      <h1>Выбери свою квартиру</h1>
      <QuickFilters />
    </section>
    <CategoryCardsSection />
    <!-- <section>
      <h3 class="text-lg font-bold">Квартира дня</h3>
      <DailyFlat />
    </section> -->
    <section>
      <Panel
        pt:content:class="grid grid-cols-3 gap-4 grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-4"
      >
        <JournalCard
          v-for="journal in journals"
          :key="journal.id"
          :journal="journal"
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
const { isLastPage, journals, next, onPageChange } = useJournalsList();

onPageChange({currentPage: 1})
</script>

