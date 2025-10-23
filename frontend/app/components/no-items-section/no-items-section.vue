<template>
  <div class="flex flex-col items-center justify-center py-8">
    <span class="text-gray-500 mb-2">{{ text }}</span>
    <template v-if="controlsShowCondition">
      <ButtonLink
        v-if="buttonLink && buttonLabel"
        :label="buttonLabel"
        :to="buttonLink"
        :button-size="buttonSize"
      />
      <Button
        v-else
        :label="buttonLabel"
        severity="info"
        @click="$emit('button-click')"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from "primevue/button";

withDefaults(
  defineProps<{
    text: string;
    controlsShowCondition: boolean;
    buttonLabel?: string;
    buttonLink?: string;
    buttonSize?: ButtonProps["size"];
  }>(),
  {
    buttonSize: "small",
    buttonLink: undefined,
    buttonLabel: undefined
  }
);

defineEmits<{
  (e: "button-click"): void;
}>();
</script>

