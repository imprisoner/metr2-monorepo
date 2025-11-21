<template>
  <Panel class="shadow-md" pt:content:class="flex flex-col gap-4">
    <template #header>
      <PanelHeaderWithControls
        text="Посты"
        :controls-show-condition="isOwner && !!posts.length"
        button-label="Добавить статью"
        button-link="/write"
      />
      <Select v-model="postsType" :options="postsTypeOptions" option-label="label" option-value="value"/>
    </template>
    <template v-if="posts.length">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </template>
    <NoItemsSection
      v-else
      text="Здесь ещё нет статей"
      button-label="Добавить статью"
      button-link="/write"
      :controls-show-condition="isOwner"
    />
  </Panel>
</template>

<script setup lang="ts">
import { getPostsList } from "~/api/functions";
import { PostsTypeOptions, type PostsRecord } from "~/types/pocketbase-types";

const { userId, userRole } = defineProps<{
  userId: string;
  isOwner: boolean;
  userRole: "owner" | "contractor";
}>();

const postsTypeOptions = [
  {
    label: "Бортжурнал",
    value: PostsTypeOptions.journal,
  },
  {
    label: "Блог",
    value: PostsTypeOptions.blog,
  },
];

if (userRole === "contractor") {
  postsTypeOptions.unshift({
    label: "Портфолио",
    value: PostsTypeOptions.portfolio,
  });
}

const defaultTypeValue =
  userRole === "contractor"
    ? PostsTypeOptions.portfolio
    : PostsTypeOptions.journal;

const postsType = ref<PostsTypeOptions>(defaultTypeValue);

const fetchPosts = async () => {
  const { items } = await getPostsList({
    page: 1,
    perPage: 100,
    filter: `type="${postsType.value}" && author="${userId}"`,
    isShortContent: true
  });

  return items;
};

const posts = ref<PostsRecord[]>(await fetchPosts());

watch(
  () => postsType.value,
  async () => {
    posts.value = await fetchPosts();
  }
);
</script>

