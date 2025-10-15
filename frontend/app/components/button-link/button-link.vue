<template>
  <Button v-slot="slotProps" severity="info" size="small" as-child>
    <NuxtLink :to="to" :class="slotProps.class">
      <template v-if="label">
        {{ label }}
      </template>
      <slot v-else />
    </NuxtLink>
  </Button>
</template>

<script setup lang="ts">
interface ButtonLinkProps {
  to: string;
  label: string;
}

defineProps<ButtonLinkProps>();
</script>

