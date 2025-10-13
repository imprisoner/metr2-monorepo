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
    <Panel
      header="Подрядчики"
      :pt="{ content: { class: 'flex flex-col gap-4' } }"
    >
      <template v-if="contractorsResponse && contractorsResponse.items.length">
        <ContractorCard
          v-for="contractor in contractorsResponse.items"
          :key="contractor.id"
          :contractor-info="contractor"
          :services="contractor.expand.contractors_services_via_contractor"
          class="mb-8"
        />
      </template>
      <template v-else>
        <p>Пока здесь ничего нет</p>
      </template>
    </Panel>
  </div>
</template>

<script setup lang="ts">
import {
  getFilteredContractorsList,
  getOneSpecialtyWithServices,
} from "~/api/functions";
import ContractorCard from "~/components/contractor-card/contractor-card.vue";

const specialtyId = useRoute().params.id as string;

const specialtyRecord = await getOneSpecialtyWithServices(specialtyId);

const services = specialtyRecord.expand.dict_specialty_services_via_specialty;

const chosenFilters = ref<string[]>([]);

const filterString = computed(() => {
  if (chosenFilters.value.length === 0) {
    return `contractors_services_via_contractor.specialtyService.specialty?="${specialtyId}"`;
  }

  return chosenFilters.value
    .map((serviceId) => {
      return `contractors_services_via_contractor.specialtyService ?= "${serviceId}"`;
    })
    .join(" || ");
});

type FilteredContractorsResponseType = Awaited<
  ReturnType<typeof getFilteredContractorsList>
>;

const contractorsResponse = ref<FilteredContractorsResponseType>();

watchEffect(async () => {
  contractorsResponse.value = await getFilteredContractorsList(
    filterString.value
  );
});
</script>

<style scoped></style>

