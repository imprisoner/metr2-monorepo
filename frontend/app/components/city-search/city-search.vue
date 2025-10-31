<template>
  <AutoComplete
    v-model="cities"
    :suggestions="suggestions"
    option-label="name"
    :loading="isLoading"
    fluid
    :multiple="multiple"
    placeholder="Введите название города"
    empty-search-message="Ничего не найдено"
    @complete="search"
    @option-select="onOptionSelect"
    @option-unselect="onOptionUnselect"
  />
</template>

<script setup lang="ts">
import type { AutoCompleteCompleteEvent, AutoCompleteOptionSelectEvent, AutoCompleteOptionUnselectEvent } from "primevue/autocomplete";
import { pb } from "~/api/pocketbase-client";
import type { DictCitiesRecord } from "~/types/pocketbase-types";

const { initialCities = [] } = defineProps<{
  initialCities?: DictCitiesRecord[];
  multiple: boolean;
}>();

const emit = defineEmits<{
  (e: "change", value: string[]): void;
}>();

const suggestions = ref<DictCitiesRecord[]>([]);

const isLoading = ref(false);

const search = async (e: AutoCompleteCompleteEvent) => {
  const nameQuery = capitalizeFirstLetter(e.query);

  isLoading.value = true;

  const response = await pb
    .collection("dict_cities")
    .getFullList<DictCitiesRecord>({
      filter: `name ~ "${nameQuery}"`,
      sort: "name",
    });

  isLoading.value = false;

  suggestions.value = response;
};

const cities = ref<DictCitiesRecord[]>(initialCities);

watch(
  () => cities.value,
  () => {
    const value = cities.value.map((item) => item.id)
    emit("change", value);
  }
);

const citiesToDelete = ref<DictCitiesRecord[]>([]);

const onOptionSelect = (e: AutoCompleteOptionSelectEvent) => {
  const city = e.value as DictCitiesRecord

  citiesToDelete.value = citiesToDelete.value.filter((item) => item.id !== city.id)
}

const onOptionUnselect = (e: AutoCompleteOptionUnselectEvent) => {
  const city = e.value as DictCitiesRecord

  const isFromInitialCities = initialCities.some((item) => item.id === city.id)

  if (isFromInitialCities) {
    citiesToDelete.value.push(city)
  }
}
</script>

