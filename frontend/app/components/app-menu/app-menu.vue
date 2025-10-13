<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <AppMenuItem v-if="!item.separator" :item="item" :index="i" />
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const model = ref([
  {
    items: [
      { label: "Лента", icon: "pi pi-fw pi-home", to: "/" },
      {
        label: "Квартиры",
        icon: "pi pi-fw pi-id-card",
        to: "/category/flat",
      },
      {
        label: "Частные дома",
        icon: "pi pi-fw pi-table",
      },
      {
        label: "Бортжурналы",
        icon: "pi pi-fw pi-table",
      },
      {
        label: "Сообщества",
        icon: "pi pi-fw pi-list",
      },
      {
        label: "Подрядчики",
        to: "/contractors",
        icon: "pi pi-fw pi-bars",
      },
      {
        label: "Барахолка",
        icon: "pi pi-fw pi-file",
      },
      {
        label: "Квартира/ремонт дня",
        icon: "pi pi-fw pi-briefcase",
      },
    ],
  },
]);
</script>

