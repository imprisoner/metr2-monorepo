<template>
  <Button
    label="Добавить статью"
    severity="info"
    size="small"
    :model="items"
    @click="toggle"
  />
  <Menu ref="menu" :model="items" :popup="true" />
</template>

<script setup lang="ts">
const authStore = useAuthStore();

const menu = ref<InstanceType<typeof import("primevue/menu").default>>();

const items = [
  {
    label: "Бортжурнал",
    command: () => {
      navigateTo("/write?type=journal");
    },
  },
  {
    label: "Блог",
    command: () => {
      navigateTo("/write?type=blog");
    },
  },
];

if (authStore.userInfo!.role === "contractor") {
  items.unshift({
    label: "Портфолио",
    command: () => {
      navigateTo("/write?type=portfolio");
    },
  });
}

const toggle = (event: PointerEvent) => {
  if (!menu.value) {
    throw new Error("Menu component is not initialized");
  }

  menu.value.toggle(event);
};
</script>

