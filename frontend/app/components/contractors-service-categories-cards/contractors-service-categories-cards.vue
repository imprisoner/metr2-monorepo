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
        <NuxtImg
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
      <!-- <NuxtImg
        :src="card.image"
        class="w-12 h-12 ms-auto absolute right-2 bottom-2"
      /> -->
    </div>
    <AllSpecialtiesDialog
      v-model:visible="showModal"
      :categories-with-specialties="categoriesWithSpecialties"
    />
  </div>
  <!-- <Panel
    header="Категории услуг"
    class="shadow-md"
    pt:content:class="flex flex-wrap gap-2"
  >
    <NuxtLink
      v-for="card in categoriesWithSpecialties"
      :key="card.id"
      :to="`/contractors/categories/${card.id}`"
    >
      <div class="flex relative h-24 shadow-md p-2 flex-1/3 min-w-[180px] hover:bg-cyan-50 transition-colors">
        <span class="text-sm">
          {{ capitalizeFirstLetter(card.name) }}
        </span>
        <NuxtImg
          :src="card.image"
          class="w-12 h-12 ms-auto absolute right-2 bottom-2"
        />
      </div>
    </NuxtLink>
    <Card
      pt:title:class="text-sm"
      class="shadow-md cursor-pointer"
      @click="showModal = true"
    >
      <template #title>смотреть все услуги</template>
    </Card>
    <AllSpecialtiesDialog
      v-model:visible="showModal"
      :categories-with-specialties="categoriesWithSpecialties"
    />
  </Panel> -->
</template>

<script setup lang="ts">
import { getAllContractorsServicesCategoriesWithSpecialties } from "~/api/functions";

const categoriesWithSpecialties =
  await getAllContractorsServicesCategoriesWithSpecialties();

const showModal = ref(false);
</script>

<style scoped></style>

