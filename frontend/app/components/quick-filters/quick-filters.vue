<template>
  <Panel :header="heading" class="mb-8" pt:content:class="flex flex-wrap gap-4 shadow-md">
    <NuxtLink v-for="(chip, index) in chips" :key="index" :to="chip.to">
      <Chip :label="chip.label" />
    </NuxtLink>
  </Panel>
</template>

<script setup lang="ts">
defineProps<{
  heading?: string;
}>();

const chips = [
  {
    label: "2-комн",
    to: {
      path: "/category/flat/all",
      query: { flatType: "dt3y40t5uzioswa" },
    },
  },
  {
    label: "30-45 м2",
    to: {
      path: "/category/flat/all",
      query: { squareM2: "wps0klzmu4o7jox" },
    },
  },
  {
    label: "косметика",
    to: {
      path: "/category/flat/all",
      query: { finishing: "vqup1sh3orsr38k" },
    },
  },
];
</script>

<style></style>

