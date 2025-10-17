<template>
  <div class="flex flex-col">
    <label class="font-semibold text-surface-500 mb-8" for="title">
      Старые услуги
    </label>
    <div class="flex gap-4">
      <Chip
        v-for="service in records"
        :key="service.id"
        :label="service.name"
        removable
        @remove="$emit('remove-service', service.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";

const { services } = defineProps<{
  services: string[];
}>();

const buildFilter = () => {
  return services
    .map((serviceId) => {
      return `id = "${serviceId}"`;
    })
    .join(" || ");
};

const getDeletedServicesRecords = async () => {
  const response = await pb.collection("dict_specialty_services").getFullList({
    filter: buildFilter(),
  });
  return response;
};

const records = await getDeletedServicesRecords();

defineEmits<{
  (e: "remove-service", id: string): void;
}>();
</script>

