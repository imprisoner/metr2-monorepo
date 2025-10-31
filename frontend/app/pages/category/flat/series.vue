<template>
  <div class="w-full">
    <h1>{{ capitalizeFirstLetter(seriesCard.title) }}</h1>

    <Panel v-if="seriesCard.description" class="mb-8 shadow-md">
      {{ seriesCard.description }}
    </Panel>

    <FlatFilters
      class="mb-8 shadow-md"
      exclude-field="houseSeries"
      :initial-filter="initialFilter"
      @filters-updated="updateFilters"
    />

    <Panel
      header="Бортжурналы"
      class="shadow-md"
      pt:content:class="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-4"
    >
      <template v-if="journals.length">
        <JournalCard
          v-for="journal in journals"
          :key="journal.id"
          :journal="journal"
        />
      </template>
      <NoItemsSection
        v-else
        class="col-span-3"
        text="Здесь ещё нет статей"
        :controls-show-condition="false"
      />
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
import type { LocationQuery } from "vue-router";
import { getOneHouseSeriesCard } from "~/api/functions";
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

const { isLastPage, journals, next, onPageChange, updateFilters } =
  useJournalsList(`flat.${initialFilter.field}="${initialFilter.value}"`);

await onPageChange({ currentPage: 1 });
</script>

