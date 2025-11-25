<template>
  <div class="w-full">
    <ArticleCreateForm v-if="article" :post="article" />
  </div>
</template>

<script setup lang="ts">
import { ClientResponseError } from "pocketbase";
import { pb } from "~/api/pocketbase-client";
import { PostsTypeOptions, type PostsRecord } from "~/types/pocketbase-types";

definePageMeta({
  middleware: ["auth"],
});

const { edit: editId, type } = useRoute().query as {
  edit?: string;
  type?: PostsTypeOptions;
};

const postType = type ?? PostsTypeOptions.blog

const authStore = useAuthStore();

const userId = authStore.userInfo!.id

const article = ref<PostsRecord>();

if (!editId) {
  tryFetchDraftOrCreateOne();
} else {
  tryToFindPostOrRedirect();
}

async function tryToFindPostOrRedirect() {
  try {
    const post = await pb
      .collection("posts")
      .getFirstListItem(
        `author = "${userId}" && id = "${editId}"`
      );

    const imageSources = extractImageSrcs(post.content);

    const base64ImageSources = await Promise.all(
      imageSources.map(imageUrlToBase64Client)
    );

    const contentWithReplacedImages = replaceAllImageSrcs(
      post.content,
      (_, index) => {
        return base64ImageSources[index]!;
      }
    );

    article.value = {
      ...post,
      images: base64ImageSources,
      content: contentWithReplacedImages,
    };
  } catch (e) {
    console.error(e);

    if (e instanceof ClientResponseError && e.status === 404) {
      return navigateTo("/");
    }

    throw e;
  }
}

async function tryFetchDraftOrCreateOne() {
  try {
    const currentDraft = await pb
      .collection("posts")
      .getFirstListItem(
        `author = "${userId}" && status = "draft" && type = "${postType}"`
      );
    article.value = currentDraft;
  } catch (e) {
    if (e instanceof ClientResponseError) {
      const currentDraft = await pb.collection("posts").create({
        status: "draft",
        type: postType,
        author: userId
      });

      article.value = currentDraft;
      return;
    }

    throw e;
  }
}
</script>

