<template>
  <div class="">
    <h1>Все квартиры</h1>

    <FlatFilters
      class="mb-8 shadow-md"
      :initial-filter="initialFilter"
      @filters-updated="onFiltersUpdated"
    />
 <!--   -->
    <Panel
      header="Бортжурналы"
      pt:content:class="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2"
      class="shadow-md"
    >
      <JournalCard
        v-for="journal in journals"
        :key="journal.id"
        :journal="journal"
      />
      <template #footer>
        <p
          v-if="totalPages > currentPage"
          class="col-span-3 text-center text-blue-600 font-semibold cursor-pointer max-sm:grid-span-1 max-lg:grid-span-2"
          @click="onShowMoreClick"
        >
          Показать ещё
        </p>
      </template>
    </Panel>
  </div>
</template>

<script setup lang="ts">
import type { ListResult } from "pocketbase";
import { getJournalsResponse } from "~/api/functions";
import type { JournalsResponse } from "~/types/pocketbase-types";
import type { FlatDictionaryFields } from "~/types/common.types";

const route = useRoute();

const [entry] = Object.entries(route.query);

const typedEntry = entry as [FlatDictionaryFields, string];

const initialFilter = {
  field: typedEntry[0],
  value: typedEntry[1],
};

const journalsList = ref<ListResult<JournalsResponse>>();
const journals = ref<JournalsResponse[]>([]);

const totalPages = computed(() => journalsList.value?.totalPages ?? 0)

const currentPage = ref(1);
const filter = ref(`${initialFilter.field}=${initialFilter.value}`);

const fetchJournals = async () => {
  journalsList.value = await getJournalsResponse({
    isShortContent: true,
    page: currentPage.value,
    perPage: 6,
    sortBy: ["-created"],
    filter: filter.value,
  });

  journals.value = [...journals.value, ...journalsList.value.items]
};

const onFiltersUpdated = async (filterString: string) => {
  currentPage.value = 1;
  filter.value = filterString;
  journals.value = []
  await fetchJournals();
};

const onShowMoreClick = async () => {
  currentPage.value += 1;
  await fetchJournals();
};
</script>

<style></style>

