<template>
  <Panel header="Фильтры для уточнения" toggleable>
    <div class="flex flex-col justify-center gap-8 pt-8">
      <div v-for="filter in finalFilters" :key="filter.field">
        <p class="font-semibold mb-2">{{ filterTitlesMap[filter.field] }}</p>
        <div class="flex flex-wrap items-center gap-4">
          <div
            v-for="filterValue in filter.values"
            :key="filterValue.id"
            class="flex gap-2"
          >
            <Checkbox
              v-model="chosenFilters[filter.field]"
              :value="filterValue.id"
            />
            <label class="text-sm">{{ filterValue.name }}</label>
          </div>
        </div>
      </div>
    </div>
  </Panel>
</template>

<script setup lang="ts">
import { getFlatFilters } from "~/api/functions";
import type { FlatDictionaryFields } from "~/types/common.types";

const { excludeField = null, initialFilter = null } = defineProps<{
  excludeField?: FlatDictionaryFields;
  initialFilter?: {
    field: FlatDictionaryFields;
    value: string;
  };
}>();

const filtersResponse = await getFlatFilters()

const finalFilters = filtersResponse.filter(
  (flatFilter) => flatFilter.field != excludeField
);

const chosenFilters: Record<FlatDictionaryFields, string[]> = reactive({
  finishing: [],
  houseSeries: [],
  flatType: [],
  squareM2: [],
});

const filterTitlesMap = {
  finishing: "Отделка",
  houseSeries: "Серия дома",
  flatType: "Тип квартиры",
  squareM2: "Площадь, м²",
};

if (initialFilter) {
  chosenFilters[initialFilter.field].push(initialFilter.value);
}

const filterString = computed(() => {
  return Object.entries(chosenFilters)
    .map(([field, values]) => {
      if (values.length === 0) return null;
      const orConditions = values
        .map((value) => `post_flats_via_post.flat.${field}="${value}"`)
        .join(" || ");
      return `(${orConditions})`;
    })
    .filter((condition) => condition !== null)
    .join(" && ");
});

const emit = defineEmits<{
  (e: "filters-updated", value: string): void;
}>();

watch(
  chosenFilters,
  () => {
    emit("filters-updated", filterString.value);
  },
  { deep: true, immediate: true }
);
</script>
