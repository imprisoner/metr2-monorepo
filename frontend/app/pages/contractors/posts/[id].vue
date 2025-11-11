<template>
  <div>
    <h1>{{ post.title }}</h1>
    <Panel>
      <template #header>
        <div class="flex justify-end items-center w-full">
          <ButtonLink
            v-if="isOwner"
            label="Редактировать статью"
            :to="`/write/portfolio/edit/${postId}`"
          />
        </div>
      </template>
      <div class="mb-8">
        <SmallContractorsInfoPlate :contractor="post.expand.user" class="mb-8"/>
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

const authStore = useAuthStore();

const isOwner = post.contractor === authStore.userInfo?.id;
</script>
