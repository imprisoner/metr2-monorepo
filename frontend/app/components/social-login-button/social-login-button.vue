<template>
  <Button variant="text" raised rounded>
    <img :src="icon" width="32" height="32"/>
  </Button>
</template>

<script setup lang="ts">

const { provider } = defineProps<{
  provider: "google" | "yandex" | "vk";
}>();

const iconMap: Record<typeof provider, string> = {
  google: '/google_logo.svg',
  yandex: '/yandex_logo.svg',
  vk: '/vk_logo.svg',
};

const icon = iconMap[provider];
</script>

