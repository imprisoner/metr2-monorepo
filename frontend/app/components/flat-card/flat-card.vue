<template>
  <Card>
    <template #header>
      <NuxtImg
        v-for="(image, index) in flat.images"
        :key="index"
        :src="image"
        class="w-full object-cover"
      />
    </template>
    <template #title>
      <div class="flex justify-between">
        <NuxtLink :to="`/category/flat/${flat.id}`" class="font-bold text-xl">{{
          flat.nickname
        }}</NuxtLink>
        <div v-if="isOwner" class="flex gap-2">
          <Button v-slot="slotProps" as-child>
            <NuxtLink
              :class="slotProps.class"
              :to="`/write/journals/flats/${flat.id}`"
            >
              Написать в бортжурнал
            </NuxtLink>
          </Button>
          <Button
            label="Редактировать"
            severity="info"
            @click="$emit('edit', flat.id)"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { FlatsRecord } from "~/types/pocketbase-types";

defineProps<{ flat: FlatsRecord; isOwner: boolean }>();

defineEmits<{
  (e: "edit", id: string): void;
}>();
</script>

