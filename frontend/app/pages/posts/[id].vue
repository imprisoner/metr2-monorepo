<template>
  <div>
    <h1>{{ post.title }}</h1>
    <TwoSectionContainer>
      <template #left>
        <Panel>
          <template #header>
            <div class="flex justify-end items-center w-full">
              <ButtonLink
                v-if="isOwner"
                label="Редактировать статью"
                :to="`/write?edit=${post.id}`"
              />
            </div>
          </template>
          <div class="mb-8">
            <SmallUserInfoPlate :user-id="post.author" class="mb-8" />
          </div>
          <div class="content" v-html="post.content" />
        </Panel>
      </template>
      <template #right>
        <Panel class="shadow-md h-fit">
          <div class="flex flex-col gap-4">
            <div class="flex gap-2">
              <span class="text-gray-400">Статус: </span>
              <span class="font-semibold">{{
                postStatusMap[post.status]
              }}</span>
            </div>
            <div class="flex gap-2">
              <span class="text-gray-400">Тип статьи: </span>
              <span class="font-semibold">{{ postTypesMap[post.type] }}</span>
            </div>
            <div
              v-if="post.status === PostsStatusOptions.published && post.publishDate !== ''"
              class="flex gap-2"
            >
              <span class="text-gray-400">Опубликовано: </span>
              <span class="font-semibold">{{ new Date(post.publishDate) }}</span>
            </div>
            <ButtonLink
              v-if="isOwner"
              label="Редактировать статью"
              :to="`/write?edit=${post.id}`"
            />
          </div>
        </Panel>
      </template>
    </TwoSectionContainer>
  </div>
</template>

<script setup lang="ts">
import { getOnePost } from "~/api/functions";
import { PostsStatusOptions, PostsTypeOptions } from "~/types/pocketbase-types";

const route = useRoute();

const postId = route.params.id as string;

const post = await getOnePost(postId);

const authStore = useAuthStore();
const isOwner = post.author === authStore.userInfo?.id;

const postTypesMap: Record<PostsTypeOptions, string> = {
  [PostsTypeOptions.journal]: "Дневник",
  [PostsTypeOptions.blog]: "Блог",
  [PostsTypeOptions.portfolio]: "Портфолио",
};

const postStatusMap: Record<PostsStatusOptions, string> = {
  [PostsStatusOptions.draft]: "Черновик",
  [PostsStatusOptions.pending]: "Ожидает проверки",
  [PostsStatusOptions.published]: "Опубликовано",
};
</script>

