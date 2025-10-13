<template>
  <Dialog
    v-model:visible="visible"
    closable
    modal
    header="Все услуги"
    class="overflow-auto"
    pt:content:class="flex flex-wrap flex-col max-h-[520px] overflow-auto gap-y-8 gap-x-4"
  >
    <div 
      v-for="category in categoriesWithSpecialties" :key="category.id" 
      class="flex flex-col gap-1"
    >
      <h5 class="font-bold text-sm">
        <NuxtLink :to="`/contractors/categories/${category.id}`">{{
          capitalizeFirstLetter(category.name)
        }}&nbsp; ></NuxtLink>
      </h5>
      <p
        v-for="specialty in category.expand
          .dict_specialties_via_serviceCategory"
        :key="specialty.id"
      >
        <NuxtLink :to="`/contractors/specialties/${specialty.id}`" class="text-sm">{{
          capitalizeFirstLetter(specialty.name!)
        }}</NuxtLink>
      </p>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import type { ServiceCategorysWithSpecialties } from "~/types/api.types";

defineProps<{
  categoriesWithSpecialties: ServiceCategorysWithSpecialties[];
}>();

const visible = defineModel<boolean>("visible", { required: true });
</script>

<style scoped></style>

