<template>
  <div class="w-full">
    <h1>{{ categoryName }}</h1>
    <ContractorsSpecialtiesCards
      :specialties="category.expand.dict_specialties_via_serviceCategory"
      class="mb-8"
    />
    <Panel
      :header="contractorsPanelHeader"
      class="shadow-md"
      :pt="{ content: { class: 'flex flex-col gap-4' } }"
    >
      <ContractorCard
        v-for="contractor in contractorsResponse.items"
        :key="contractor.id"
        :contractorsInfo="contractor.expand.user"
        :contractor-info="contractor"
        :services="contractor.expand.contractors_services_via_contractor"
        class="mb-8"
      />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import {
  getFilteredContractorsList,
  getOneServiceCategoryWithSpecialties,
} from "~/api/functions";

const categoryId = useRoute().params.id as string;

const category = await getOneServiceCategoryWithSpecialties(categoryId);

const categoryName = capitalizeFirstLetter(category.name);
const contractorsPanelHeader = `Все подрядчики в категории "${categoryName}"`;

const contractorsFilter = `contractors_services_via_contractor.specialtyService.specialty.serviceCategory?="${categoryId}"`;

const contractorsResponse = await getFilteredContractorsList(contractorsFilter);
</script>

<style scoped></style>

