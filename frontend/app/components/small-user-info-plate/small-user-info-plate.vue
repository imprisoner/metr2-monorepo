<template>
  <div class="flex justify-between items-start gap-8 flex-wrap">
    <div class="flex gap-2">
      <Avatar
        :label="userInfo.name[0]"
        shape="circle"
        :src="userInfo.avatar"
        size="xlarge"
      />
      <div class="flex flex-col gap-0.5">
        <div class="flex gap-2 items-baseline">
          <NuxtLink
            :to="`/users/${userInfo.id}`"
            class="text-base font-semibold"
            >{{ userInfo.name }}</NuxtLink
          >
          <span class="text-xs text-gray-400">Был {{ lastSeen }} назад</span>
        </div>
        <p v-if="flatLinks.length" class="text-sm">
          Я живу в
          <NuxtLink
            v-for="link in flatLinks"
            :key="link.id"
            :to="`/category/flat/${link.id}`"
            class="font-semibold"
            >{{ link.nickname }}</NuxtLink
          >
        </p>
        <span class="text-xs text-gray-400">{{ userInfo.location }}</span>
      </div>
    </div>
    <div v-if="!isOwner" class="flex gap-4">
      <Button size="small" severity="info" label="Подписаться" />
      <Button size="small" severity="info" label="Сообщение" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getOneUser } from "~/api/functions";
import type { FlatsRecord } from "~/types/pocketbase-types";

const lastSeen = "2 часа";

const { userId } = defineProps<{ userId: string }>();

interface Expand {
  flats_via_user: FlatsRecord[] | undefined;
}

const userInfo = await getOneUser<Expand>(userId);

const flats = userInfo.expand.flats_via_user;

let flatLinks: { nickname: string; id: string }[] = [];

if (flats) {
  flatLinks = flats.map((flat) => ({
    nickname: flat.nickname,
    id: flat.id,
  }));
}

const authStore = useAuthStore()

const isOwner = userInfo.id === authStore.userInfo?.id

</script>
