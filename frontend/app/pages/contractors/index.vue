<template>
  <div class="w-full">
    <h1>Подрядчики</h1>
    <ContractorsServiceCategoriesCards class="mb-8" />
    <Panel
      header="Топ подрядчиков недели"
      class="shadow-md"
      :pt="{ content: { class: 'flex flex-col gap-4' } }"
    >
      <ContractorCard
        v-for="contractor in contractors"
        :key="contractor.id"
        :contractor-info="contractor"
        :services="contractor.expand.contractors_services_via_contractor"
        class="mb-8"
      />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type { ContractorWithUserInfoAndServices } from "~/types/api.types";
import { Collections } from "~/types/pocketbase-types";

const contractors = await pb
  .collection(Collections.Contractors)
  .getFullList<ContractorWithUserInfoAndServices>({
    expand: "contractors_services_via_contractor.specialtyService",
  });
</script>

<style scoped></style>

