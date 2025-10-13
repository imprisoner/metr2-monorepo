<template>
  <div>
    <h1>{{ post.title }}</h1>
    <Panel>
      <div class="mb-8">
        <SmallContractorsInfoPlate :contractor="post.expand.contractor" class="mb-8"/>
      </div>
      <div class="content" v-html="post.content" />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { getOneContractorsPost } from "~/api/functions";

const route = useRoute();

const postId = route.params.id as string;

const post = await getOneContractorsPost(postId)
</script>

<style></style>

