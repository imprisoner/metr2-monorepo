<template>
  <div class="grid grid-cols-6 gap-1">
    <NuxtLink
      v-for="card in specialties"
      :key="card.id"
      :to="{
        path: `/contractors/specialties/${card.id}`,
      }"
      class="flex overflow-hidden rounded-xl relative h-20 p-2 bg-green-200 hover:bg-green-300"
    >
      <!-- <NuxtImg
      :src="card.image"
      class="w-full h-full object-cover brightness-70 absolute top-0 right-0 left-0 bottom-0"
    /> -->
      <span class="z-1 text-[13px] font-semibold">
        {{ capitalizeFirstLetter(card.name) }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { DictSpecialtiesRecord } from "~/types/pocketbase-types";

defineProps<{ specialties: DictSpecialtiesRecord[] }>();
</script>

<style scoped></style>

