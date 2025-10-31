<template>
  <Dialog v-model:visible="visible" closable modal header="Все услуги">
    <div class="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-wrap md:flex-col md:max-h-[520px] gap-y-8 gap-x-8 p-4">
      <div
        v-for="category in categoriesWithSpecialties"
        :key="category.id"
        class="flex flex-col gap-2"
      >
        <h6 class="font-bold text-sm mb-1! hover:text-blue-500!">
          <NuxtLink :to="`/contractors/categories/${category.id}`"
            >{{ capitalizeFirstLetter(category.name) }} <small>></small></NuxtLink
          >
        </h6>
        <p
          v-for="specialty in category.expand
            .dict_specialties_via_serviceCategory"
          :key="specialty.id"
          class="hover:text-blue-500 mb-0!"
        >
          <NuxtLink
            :to="`/contractors/specialties/${specialty.id}`"
            class="text-sm"
            >{{ capitalizeFirstLetter(specialty.name!) }}</NuxtLink
          >
        </p>
      </div>
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

