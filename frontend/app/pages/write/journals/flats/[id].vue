<template>
  <JournalArticleCreateForm :flat-id="flatId" />
</template>

<script setup lang="ts">
const route = useRoute();

const flatId = route.params.id as string;
</script>

