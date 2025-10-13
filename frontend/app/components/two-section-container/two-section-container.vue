<template>
  <div class="main-container max-xl:flex-col-reverse flex gap-4">
    <div class="flex-1">
      <slot name="left" />
    </div>
    <div class="flex flex-col gap-4 flex-[0.5]">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
