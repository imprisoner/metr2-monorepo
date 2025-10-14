<template>
  <div>
    <h1>{{ blogPost.title }}</h1>
    <Panel class="mb-8">
      <SmallContractorsInfoPlate
        :contractor="blogPost.expand.contractor"
        class="mb-8"
      />
    </Panel>
    <Panel>
      <template #header>
        <div class="flex justify-end items-center w-full">
          <Button
            v-if="isOwner"
            v-slot="slotProps"
            severity="info"
            size="small"
            as-child
          >
            <NuxtLink
              :to="`/write/edit/${blogPostId}`"
              :class="slotProps.class"
            >
              Редактировать статью
            </NuxtLink>
          </Button>
        </div>
      </template>
      <div class="content" v-html="blogPost.content" />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type {
  ContractorsBlogPostsResponse,
  ContractorsRecord,
} from "~/types/pocketbase-types";

const route = useRoute();

const blogPostId = route.params.id as string;

const getOneBlogPost = async (id: string) => {
  const response = await pb.collection("contractors_blog_posts").getOne<
    ContractorsBlogPostsResponse<{
      contractor: ContractorsRecord;
    }>
  >(id, {
    expand: "contractor",
  });
  console.log(response);
  return response;
};

const blogPost = await getOneBlogPost(blogPostId);

const authStore = useAuthStore();

const isOwner = blogPost.contractor === authStore.userInfo?.id;
</script>
