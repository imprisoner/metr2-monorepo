<script setup lang="ts">
// Define the Block interface based on BlockNote structure
import type { Block } from "blocknotejs-vue-rte";
import type { StyledText } from "~/types/common.types";

defineProps<{
  block: Block;
}>();
// Helper to check if content exists
const hasContent = (b: Record<string, unknown>) => b.content && (b.content as StyledText[]).length > 0;
</script>

<template>
  <div class="block-wrapper" :data-id="block.id">
    <!-- Paragraph -->
    <p v-if="block.type === 'paragraph'" class="mb-2">
      <InlineContent v-if="hasContent(block)" :content="block.content as StyledText[]" />
      <br v-else />
      <!-- Handle empty lines -->
    </p>

    <!-- Headings -->
    <h1
      v-else-if="block.type === 'heading' && block.props?.level === 1"
      class="text-3xl font-bold mt-4 mb-2"
    >
      <InlineContent :content="block.content as StyledText[]" />
    </h1>
    <h2
      v-else-if="block.type === 'heading' && block.props?.level === 2"
      class="text-2xl font-bold mt-3 mb-2"
    >
      <InlineContent :content="block.content as StyledText[]" />
    </h2>
    <h3
      v-else-if="block.type === 'heading' && block.props?.level === 3"
      class="text-xl font-bold mt-2 mb-1"
    >
      <InlineContent :content="block.content as StyledText[]" />
    </h3>

    <!-- Lists -->
    <!-- Note: BlockNote doesn't wrap lists in <ul> automatically in JSON, 
         so we render items individually with CSS display: list-item -->
    <div
      v-else-if="block.type === 'bulletListItem'"
      class="list-item ml-4 list-disc"
    >
      <InlineContent :content="block.content as StyledText[]" />
    </div>
    <div
      v-else-if="block.type === 'numberedListItem'"
      class="list-item ml-4 list-decimal"
    >
      <InlineContent :content="block.content as StyledText[]" />
    </div>

    <!-- Image -->
    <figure v-else-if="block.type === 'image'" class="my-4">
      <img
        :src="block.props?.url"
        :alt="block.props?.caption || ''"
        class="max-w-full h-auto rounded"
      />
      <figcaption
        v-if="block.props?.caption"
        class="text-center text-gray-500 text-sm mt-1"
      >
        {{ block.props?.caption }}
      </figcaption>
    </figure>

    <figure v-else-if="block.type === 'video'" class="my-4">
      <video
        :src="block.props?.url"
        :alt="block.props?.caption || ''"
        controls
        class="max-w-full h-auto rounded"
      />
      <figcaption
        v-if="block.props?.caption"
        class="text-center text-gray-500 text-sm mt-1"
      >
        {{ block.props?.caption }}
      </figcaption>
    </figure>

    <hr v-else-if="block.type === 'divider'" class="my-4" />

    <!-- Fallback for unknown blocks -->
    <div v-else class="text-red-500">
      [Unknown Block Type: {{ block.type }}]
    </div>

    <!-- Recursive Children (Indented) -->
    <!-- <div
      v-if="block.children && block.children.length > 0"
      class="pl-6 border-l-2 border-gray-100 ml-1"
    >
      <BlockRenderer
        v-for="child in block.children"
        :key="child.id"
        :block="child"
      />
    </div> -->
  </div>
</template>

<style scoped>
/* Basic utility classes if not using Tailwind */
.mb-2 {
  margin-bottom: 0.5rem;
}
.mt-4 {
  margin-top: 1rem;
}
.ml-4 {
  margin-left: 1rem;
}
.pl-6 {
  padding-left: 1.5rem;
}
.text-3xl {
  font-size: 1.875rem;
}
.font-bold {
  font-weight: 700;
}
.list-disc {
  list-style-type: disc;
  display: list-item;
}
.list-decimal {
  list-style-type: decimal;
  display: list-item;
}
</style>

