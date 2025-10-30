<template>
  <div class="flex flex-wrap gap-2">
    <NuxtLink
      v-for="card in categoriesWithSpecialties"
      :key="card.id"
      :to="`/contractors/categories/${card.id}`"
    >
      <div
        class="flex relative h-24 shadow-md p-2 min-w-[180px] hover:bg-cyan-50 hover:shadow-lg transition-colors rounded-lg border-1 border-amber-100"
      >
        <span class="text-sm font-semibold">
          {{ capitalizeFirstLetter(card.name) }}
        </span>
        <img
          :src="card.image"
          class="w-12 h-12 ms-auto absolute right-2 bottom-2"
        />
      </div>
    </NuxtLink>
    <div
      class="flex relative h-24 shadow-md p-2 min-w-[180px] hover:bg-cyan-50 hover:shadow-lg transition-colors cursor-pointer"
      @click="showModal = true"
    >
      <span class="text-sm font-semibold">
        Все услуги
      </span>
      <!-- <img
        :src="card.image"
        class="w-12 h-12 ms-auto absolute right-2 bottom-2"
      /> -->
    </div>
    <AllSpecialtiesDialog
      v-model:visible="showModal"
      :categories-with-specialties="categoriesWithSpecialties"
    />
  </div>
</template>

<script setup lang="ts">
import { getAllContractorsServicesCategoriesWithSpecialties } from "~/api/functions";

const categoriesWithSpecialties =
  await getAllContractorsServicesCategoriesWithSpecialties();

const showModal = ref(false);
</script>
