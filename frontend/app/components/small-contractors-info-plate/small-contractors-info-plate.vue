<template>
  <div class="flex justify-between items-start gap-8 flex-wrap">
    <div class="flex gap-2">
      <Avatar
        :label="contractor.name[0]"
        shape="circle"
        :src="contractor.avatar"
        size="xlarge"
      />
      <div class="flex flex-col gap-0.5">
        <div class="flex gap-2 items-baseline">
          <NuxtLink
            :to="`/users/${contractor.id}`"
            class="text-base font-semibold"
            >{{ contractor.name }}</NuxtLink
          >
          <span class="text-xs text-gray-400">Был {{ lastSeen }} назад</span>
        </div>
        <span class="text-xs text-gray-400">{{ location }}</span>
      </div>
    </div>
    <div class="flex gap-4">
      <Button size="small" severity="info" label="Подписаться" />
      <Button size="small" severity="info" label="Сообщение" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type { ContractorsRecord } from "~/types/pocketbase-types";

const lastSeen = "2 часа";

const { contractor } = defineProps<{ contractor: ContractorsRecord }>();


const location = 'Локация не указана'

</script>

<style></style>

