<script setup lang="ts">
import type { StyledText } from '~/types/common.types';

defineProps<{
  content: StyledText[];
}>();
</script>

<template>
  <span>
    <template v-for="(segment, index) in content" :key="index">
      <component
        :is="segment.type === 'link' ? 'a' : 'span'"
        :href="segment.href"
        :target="segment.type === 'link' ? '_blank' : undefined"
        :class="{
          'font-bold': segment.styles?.bold,
          italic: segment.styles?.italic,
          underline: segment.styles?.underline,
          'line-through': segment.styles?.strike,
          'bg-gray-200 rounded px-1 font-mono text-sm': segment.styles?.code,
        }"
        :style="{
          color: segment.styles?.textColor,
          backgroundColor: segment.styles?.backgroundColor,
        }"
      >
        {{ segment.text }}
      </component>
    </template>
  </span>
</template>

<style scoped>
/* Add tailwind classes or standard CSS here */
.font-bold {
  font-weight: bold;
}
.italic {
  font-style: italic;
}
.underline {
  text-decoration: underline;
}
.line-through {
  text-decoration: line-through;
}
</style>

