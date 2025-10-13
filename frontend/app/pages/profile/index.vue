<template>
  <div>
    <h1>Профиль</h1>
    <pre>
      {{ userInfo }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";

const userInfo = pb.authStore.record;

definePageMeta({
  middleware: ["auth"],
});
</script>

