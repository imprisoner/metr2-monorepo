<template>
  <Card
    class="hover:shadow-xl transition-all duration-300"
    pt:content:class="flex justify-between items-start gap-8 flex-wrap"
    pt:footer:class="flex gap-2 flex-wrap"
  >
    <template #content>
      <div class="flex gap-2">
        <Avatar
          :label="contractorInfo.name[0]"
          shape="circle"
          :src="contractorInfo.avatar"
          size="xlarge"
        />
        <div class="flex flex-col gap-0.5">
          <div class="flex gap-2 items-baseline">
            <NuxtLink
              :to="`/contractors/${contractorInfo.id}`"
              class="text-base font-semibold"
              >{{ contractorInfo.name }}</NuxtLink
            >
            <span class="text-xs text-gray-400">Был {{ lastSeen }} назад</span>
          </div>
          <!-- <span class="text-xs text-gray-400">{{ userInfo.location }}</span> -->
        </div>
      </div>
      <div class="flex gap-4">
        <Button size="small" severity="info" label="Подписаться" />
        <Button size="small" severity="info" label="Сообщение" />
      </div>
    </template>
    <template v-if="services" #footer>
      <Tag
        v-for="service in services"
        :key="service.id"
        severity="success"
        :value="service.expand.specialtyService.name"
        class="text-xs font-normal"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
import type {
  ContractorsRecord,
  ContractorsServicesResponse,
  DictSpecialtyServicesRecord,
} from "~/types/pocketbase-types";

const lastSeen = "2 часа";

defineProps<{
  contractorInfo: ContractorsRecord;
  services?: ContractorsServicesResponse<{
    specialtyService: DictSpecialtyServicesRecord;
  }>[];
}>();
</script>

<style></style>

