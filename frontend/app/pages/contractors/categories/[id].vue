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
import { getOneServiceCategoryWithSpecialties } from "~/api/functions";

const categoryId = useRoute().params.id as string;

const category = await getOneServiceCategoryWithSpecialties(categoryId);

const categoryName = capitalizeFirstLetter(category.name);
const contractorsPanelHeader = `Все подрядчики в категории "${categoryName}"`;

const contractorsFilter = `contractors_services_via_contractor.specialtyService.specialty.serviceCategory?="${categoryId}"`;

const { contractors, isLastPage, next, onPageChange } =
  useContractorsList(contractorsFilter);

await onPageChange({ currentPage: 1 });
</script>

