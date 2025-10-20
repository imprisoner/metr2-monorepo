<template>
  <div>
    <PortfolioArticleCreateForm />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth', 'is-contractor'],
})
</script>
