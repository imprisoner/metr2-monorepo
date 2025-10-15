<template>
  <Button v-slot="slotProps" severity="info" :size="buttonSize" as-child>
    <NuxtLink :to="to" :class="slotProps.class">
      <template v-if="label">
        {{ label }}
      </template>
      <slot v-else />
    </NuxtLink>
  </Button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "primevue/button";

interface ButtonLinkProps {
  to: string;
  label: string;
  buttonSize?: ButtonProps["size"];
}

withDefaults(defineProps<ButtonLinkProps>(), {
  buttonSize: "small",
});
</script>

