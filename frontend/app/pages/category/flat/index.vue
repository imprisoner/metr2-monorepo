<template>
  <div class="w-full">
    <h1>Квартиры</h1>
    <p class="text-lg mb-4">
      Выберите тип дома, чтобы найти похожие квартиры и истории ремонтов
    </p>
    <Panel class="mb-8 shadow-md" pt:content:class="text-center ">
      <div class="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 mb-8">
        <NuxtLink
          v-for="card in houseSeriesCards"
          :key="card.id"
          :to="{
            path: '/category/flat/series',
            query: { series: card.houseSeries, category: card.id },
          }"
        >
          <Card
            class="overflow-hidden h-48 w-full"
            pt:header:class="relative flex justify-center items-center h-full"
            pt:body:class="hidden!"
          >
            <template #header>
              <NuxtImg
                :src="card.image"
                class="flex absolute object-cover w-full h-full brightness-80"
              />
              <span class="text-xl font-bold text-white uppercase z-10">{{
                card.expand.houseSeries.name
              }}</span>
            </template>
          </Card>
        </NuxtLink>
      </div>
      <NuxtLink class="font-semibold">Не нашёл свой дом</NuxtLink>
    </Panel>
    <QuickFilters
      heading="Если тип дома Вам не важен, то выберите фильтры ниже"
    />
  </div>
</template>

<script setup lang="ts">
import { getAllHouseSeriesCards } from "~/api/functions";

const houseSeriesCards = await getAllHouseSeriesCards();
</script>

<style></style>

