<template>
  <div>
    <h1>{{ blogPost.title }}</h1>
    <Panel class="mb-8">
      <SmallUserInfoPlate :user-id="blogPost.user" class="mb-8" />
    </Panel>
    <Panel>
      <template #header>
        <div class="flex justify-end items-center w-full">
          <ButtonLink
            v-if="isOwner"
            label="Редактировать статью"
            :to="`/write/edit/${blogPostId}`"
          />
        </div>
      </template>
      <div class="content" v-html="blogPost.content" />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type {
  UsersBlogPostsResponse,
  UsersRecord,
} from "~/types/pocketbase-types";

const route = useRoute();

const blogPostId = route.params.id as string;

const getOneBlogPost = async (id: string) => {
  const response = await pb
    .collection("users_blog_posts")
    .getOne<UsersBlogPostsResponse<UsersRecord>>(id, {
      expand: "user",
    });
  return response;
};

const blogPost = await getOneBlogPost(blogPostId);

const authStore = useAuthStore();

const isOwner = blogPost.user === authStore.userInfo?.id;
</script>
