<template>
  <div class="w-full">
    <h1>{{ capitalizeFirstLetter(seriesCard.title) }}</h1>

    <Panel class="mb-8 shadow-md">
      {{ seriesCard.description }}
    </Panel>

    <FlatFilters
      class="mb-8 shadow-md"
      exclude-field="houseSeries"
      :initial-filter="initialFilter"
      @filters-updated="onFiltersUpdated"
    />

    <Panel
      header="Бортжурналы"
      pt:content:class="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-4"
      class="shadow-md"
    >
      <JournalCard
        v-for="journal in journals"
        :key="journal.id"
        :journal="journal"
      />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import type { ListResult } from "pocketbase";
import type { LocationQuery } from "vue-router";
import { getJournalsResponse, getOneHouseSeriesCard } from "~/api/functions";
import type { JournalsResponse } from "~/types/pocketbase-types";
import type { FlatDictionaryFields } from "~/types/common.types";

interface ILocalQueryParams extends LocationQuery {
  series: string;
  category: string;
}

const queryParams = useRoute().query as ILocalQueryParams;

const initialFilter: {
  field: FlatDictionaryFields;
  value: string;
} = {
  field: "houseSeries",
  value: queryParams.series,
};

const houseSeriesCardResponse = await getOneHouseSeriesCard(
  queryParams.category
);

const seriesCard = {
  ...houseSeriesCardResponse,
  title: houseSeriesCardResponse.expand.houseSeries.name,
};

const journalsList = ref<ListResult<JournalsResponse>>();

const journals = computed(() => journalsList.value?.items);

const onFiltersUpdated = async (filterString: string) => {
  journalsList.value = await getJournalsResponse({
    isShortContent: true,
    page: 1,
    perPage: 10,
    sortBy: ["-created"],
    filter: filterString,
  });
};
</script>

<style></style>

