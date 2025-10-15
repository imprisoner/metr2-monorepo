<template>
  <div class="flex justify-between items-center w-full">
    <span class="font-bold">{{ text }}</span>
    <ButtonLink
      v-if="controlsShowCondition && buttonLink"
      :label="buttonLabel"
      :to="buttonLink"
    />
    <Button v-else :label="buttonLabel" @click="$emit('button-click')" />
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

