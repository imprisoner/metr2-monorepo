<template>
  <AutoComplete
    v-model="cities"
    :suggestions="suggestions"
    option-label="name"
    :loading="isLoading"
    fluid
    :multiple="true"
    placeholder="Введите название города"
    empty-search-message="Ничего не найдено"
    @complete="search"
    @option-select="onOptionSelect"
    @option-unselect="onOptionUnselect"
  />
</template>

<script setup lang="ts">
import type {
  AutoCompleteOptionSelectEvent,
  AutoCompleteOptionUnselectEvent,
} from "primevue/autocomplete";
import type { DictCitiesRecord } from "~/types/pocketbase-types";

const { initialCities = [] } = defineProps<{
  initialCities?: DictCitiesRecord[];
}>();

const emit = defineEmits<{
  (e: "change", value: string[]): void;
}>();

const { isLoading, search, suggestions } = useCitiesAutocompleteSearch();

const cities = ref<DictCitiesRecord[]>(initialCities);

watch(
  () => cities.value,
  () => {
    const value = cities.value.map((item) => item.id);
    emit("change", value);
  }
);

const citiesToDelete = ref<DictCitiesRecord[]>([]);

const onOptionSelect = (e: AutoCompleteOptionSelectEvent) => {
  const city = e.value as DictCitiesRecord;

  citiesToDelete.value = citiesToDelete.value.filter(
    (item) => item.id !== city.id
  );
};

const onOptionUnselect = (e: AutoCompleteOptionUnselectEvent) => {
  const city = e.value as DictCitiesRecord;

  const isFromInitialCities = initialCities.some((item) => item.id === city.id);

  if (isFromInitialCities) {
    citiesToDelete.value.push(city);
  }
};
</script>

