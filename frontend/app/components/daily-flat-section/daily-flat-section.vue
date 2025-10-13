<template>
  <div class="flex gap-4">
    <div class="flex flex-col gap-1">
      <img
        v-for="imageUrl in images" 
        :src="imageUrl" 
        alt=""
      >
    </div>
    <div v-html="flat.description" class="short-description">
    </div>
  </div>
</template>

<script setup lang="ts">
  import { pb } from "~/api/pocketbase-client";
  import { subWeeks } from 'date-fns';


  const today = new Date();
  const oneWeekAgo = subWeeks(today, 1);

  const flat = await pb.collection("flats").getFirstListItem(`created>="${oneWeekAgo.toISOString()}"`);

  const images = flat.images.slice(0, 2).map((path) => {
    const imageUrl = `http://localhost:8090/api/files/Flat/${flat.id}/${path}`
    return imageUrl
  })
</script>

<style>
  .short-description p {
    line-clamp: 3;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
  }
</style>