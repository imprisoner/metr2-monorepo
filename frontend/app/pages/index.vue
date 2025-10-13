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
      <Panel pt:content:class="grid grid-cols-3 gap-4 grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-4">
        <JournalCard
          v-for="journal in journals"
          :key="journal.id"
          :journal="journal"
        />
      </Panel>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getJournalsResponse } from "~/api/functions";
import type { UsersRecord } from "~/types/pocketbase-types";

interface Expand {
  user: UsersRecord;
}

const journalsList = await getJournalsResponse<Expand>({
  isShortContent: true,
  page: 1,
  perPage: 9,
  expand: ['user']
});


const journals = journalsList.items;
</script>

