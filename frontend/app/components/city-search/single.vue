<template>
  <AutoComplete
    :suggestions="suggestions"
    option-label="name"
    :default-value="initialCity"
    :loading="isLoading"
    fluid
    placeholder="Введите название города"
    empty-search-message="Ничего не найдено"
    @complete="search"
    @option-select="onOptionSelect"
  />
</template>

<script setup lang="ts">
import type { AutoCompleteOptionSelectEvent } from "primevue/autocomplete";
import type { DictCitiesRecord } from "~/types/pocketbase-types";

const { initialCity = undefined } = defineProps<{
  initialCity?: DictCitiesRecord;
}>();

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

const { isLoading, search, suggestions } = useCitiesAutocompleteSearch();

const onOptionSelect = (e: AutoCompleteOptionSelectEvent) => {
  const city = e.value as DictCitiesRecord

  emit('change', city.id)
}
</script>

