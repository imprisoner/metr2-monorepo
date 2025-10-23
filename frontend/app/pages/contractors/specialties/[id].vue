<template>
  <div>
    <h1>
      {{ capitalizeFirstLetter(specialtyRecord.name) }}
    </h1>
    <Panel header="Фильтры" class="mb-8">
      <div class="grid grid-cols-3 items-center gap-x-8 gap-y-2">
        <div v-for="service in services" :key="service.id" class="flex gap-2">
          <Checkbox v-model="chosenFilters" :value="service.id" />
          <label class="text-sm">{{
            capitalizeFirstLetter(service.name)
          }}</label>
        </div>
      </div>
    </Panel>
    <Panel header="Подрядчики" pt:content:class="flex flex-col gap-4">
      <template v-if="contractors.length">
        <ContractorCard
          v-for="contractor in contractors"
          :key="contractor.id"
          :contractor-info="contractor"
          :services="contractor.expand.contractors_services_via_contractor"
          class="mb-8"
        />
      </template>
      <NoItemsSection
        v-else
        :controls-show-condition="false"
        text="Пока здесь ничего нет"
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
import { getOneSpecialtyWithServices } from "~/api/functions";
import ContractorCard from "~/components/contractor-card/contractor-card.vue";

const specialtyId = useRoute().params.id as string;

const specialtyRecord = await getOneSpecialtyWithServices(specialtyId);

const services = specialtyRecord.expand.dict_specialty_services_via_specialty;

const chosenFilters = ref<string[]>([]);

const initialFilter = `contractors_services_via_contractor.specialtyService.specialty?="${specialtyId}"`;

const filterString = computed(() => {
  if (chosenFilters.value.length === 0) {
    return initialFilter;
  }

  return chosenFilters.value
    .map((serviceId) => {
      return `contractors_services_via_contractor.specialtyService ?= "${serviceId}"`;
    })
    .join(" || ");
});

const { contractors, isLastPage, next, onPageChange, updateFilters } =
  useContractorsList(initialFilter);

await onPageChange({ currentPage: 1 });

watch(
  () => filterString.value,
  () => {
    updateFilters(filterString.value);
  }
);
</script>

