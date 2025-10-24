<template>
  <div>
    <div class="flex items-center gap-8">
      <h1>{{ userData.name }}</h1>
    </div>
    <TwoSectionContainer>
      <template #left>
        <ProfileUserSection
          :flats="flats"
          :is-owner="isOwner"
          :blog-articles="blogArticles"
        />
      </template>
      <template #right>
        <Panel class="shadow-md h-fit">
          <DetailedUserInfoPlate
            :avatar="userData.avatar"
            :location="
              userData.expand.users_info_via_user?.expand.location?.name ||
              'Нет локации'
            "
            :name="userData.name"
            :is-owner="isOwner"
            @edit-profile="showEditProfileDialog"
          />
        </Panel>
        <Panel toggleable header="Обо мне" class="shadow-md">
          {{ userData.expand.users_info_via_user?.about }}
        </Panel>
      </template>
    </TwoSectionContainer>
    <EditUserProfileDialog
      v-if="editProfileDialogVisibility"
      v-model:visible="editProfileDialogVisibility"
      :user-info="userData.expand.users_info_via_user"
      @save="onSaveProfile"
    />
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import {
  Collections,
  type DictCitiesRecord,
  type FlatsRecord,
  type UsersBlogPostsRecord,
  type UsersInfoResponse,
  type UsersResponse,
} from "~/types/pocketbase-types";

const userId = useRoute().params.id as string;

interface Expand {
  flats_via_user: FlatsRecord[] | undefined;
  users_info_via_user:
    | UsersInfoResponse<{
        location: DictCitiesRecord | undefined;
      }>
    | undefined;
  users_blog_posts_via_user: UsersBlogPostsRecord[] | undefined;
}

const getUserPageData = async () => {
  const expand = [
    "flats_via_user",
    "users_info_via_user",
    "users_blog_posts_via_user",
    "users_info_via_user.location",
  ].join(",");

  const userData = await pb
    .collection(Collections.Users)
    .getFirstListItem<UsersResponse<Expand>>(`hrid = "${userId}"`, {
      expand,
    });

  if (userData.avatar !== "") {
    userData.avatar = pb.files.getURL(userData, userData.avatar);
  }

  let flats: FlatsRecord[] = [];
  if (userData.expand.flats_via_user) {
    flats = userData.expand.flats_via_user.map((flat) => ({
      ...flat,
      images: flat.images.map((filename) => pb.files.getURL(flat, filename)),
    }));
  }

  let blogArticles: (UsersBlogPostsRecord & {
    previewImage: string | undefined;
  })[] = [];

  if (userData.expand.users_blog_posts_via_user) {
    blogArticles = userData.expand.users_blog_posts_via_user.map((article) => {
      let previewImage;

      if (article.images) {
        previewImage = pb.files.getURL(article, article.images[0]!);
      }

      return {
        ...article,
        previewImage,
      };
    });
  }

  return { userData, flats, blogArticles };
};

const userPageData = ref(await getUserPageData());

const userData = computed(() => userPageData.value.userData);
const flats = computed(() => userPageData.value.flats);
const blogArticles = computed(() => userPageData.value.blogArticles);

const authStore = useAuthStore();

const isOwner = computed(() => {
  if (authStore.userInfo?.collectionName === "users") {
    return authStore.userInfo.hrid === userId;
  }

  return false;
});

const editProfileDialogVisibility = ref(false);

const showEditProfileDialog = () => {
  editProfileDialogVisibility.value = true;
};

const onSaveProfile = async () => {
  editProfileDialogVisibility.value = false;
  userPageData.value = await getUserPageData();
};
</script>

