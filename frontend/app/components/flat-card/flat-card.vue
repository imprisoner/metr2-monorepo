<template>
  <Card>
    <template #header>
      <div class="overflow-hidden rounded-t-lg">
        <img
          v-if="flat.images.length"
          :src="flat.images[0]"
          class="w-full object-cover"
        />
        <DefaultPostThumbnail v-else/>
      </div>
    </template>
    <template #title>
      <div class=" flex-col flex md:flex-row justify-between gap-2">
        <NuxtLink :to="`/category/flat/${flat.id}`" class="font-bold text-xl">{{
          flat.nickname
        }}</NuxtLink>
        <div v-if="isOwner" class="flex gap-2 flex-col sm:flex-row">
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

