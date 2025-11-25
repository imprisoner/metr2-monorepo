<template>
  <div class="flex justify-between items-center w-full">
    <span class="font-bold">{{ text }}</span>
    <div class="flex gap-2">
      <template v-if="controlsShowCondition">
        <ButtonLink
          v-if="buttonLink"
          :label="buttonLabel"
          :to="buttonLink"
          :button-size="buttonSize"
        />
        <Button
          v-else
          :label="buttonLabel"
          severity="info"
          size="small"
          @click="$emit('button-click')"
        />
      </template>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from "primevue/button";

withDefaults(
  defineProps<{
    text: string;
    controlsShowCondition: boolean;
    buttonLabel: string;
    buttonLink?: string;
    buttonSize?: ButtonProps["size"];
  }>(),
  {
    buttonSize: "small",
    buttonLink: undefined,
  }
);

defineEmits<{
  (e: "button-click"): void;
}>();
</script>

