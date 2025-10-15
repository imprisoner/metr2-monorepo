<template>
  <div class="flex flex-col items-center justify-center py-8">
    <span class="text-gray-500 mb-2">{{ text }}</span>
    <template v-if="controlsShowCondition">
      <ButtonLink v-if="buttonLink" :label="buttonLabel" :to="buttonLink" />
      <Button v-else :label="buttonLabel" severity="info" @click="$emit('button-click')" />
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  controlsShowCondition: boolean;
  buttonLabel: string;
  buttonLink?: string;
}>();

defineEmits<{
  (e: "button-click"): void;
}>();
</script>

