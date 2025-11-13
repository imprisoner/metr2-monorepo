<template>
  <JournalArticleCreateForm :flat-id="flatId" />
</template>

<script setup lang="ts">
import type { ClientResponseError } from 'pocketbase';
import { pb } from '~/api/pocketbase-client';

const route = useRoute();

definePageMeta({
  middleware: ['auth'],
})

const flatId = route.params.id as string;

try {
  await pb.collection("flats").getOne(flatId)
} catch (err) {
  showError(err as ClientResponseError)
}

</script>

