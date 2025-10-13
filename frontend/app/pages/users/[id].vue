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
        <!-- <ProfileContractorSection
          v-else
          :contractor-id="userData.expand.contractors_via_user![0]!.id"
        /> -->
      </template>
      <template #right>
        <Panel class="shadow-md h-fit">
          <DetailedUserInfoPlate
            :avatar="userData.avatar"
            :location="
              userData.expand.users_info_via_user?.location || 'Нет локации'
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
      v-model:visible="editProfileDialogVisibility"
      :user-info="userData.expand.users_info_via_user"
      @save="onSaveProfile"
    />
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import EditUserProfileDialog from "~/components/edit-user-profile-dialog/edit-user-profile-dialog.vue";
import {
  Collections,
  type FlatsRecord,
  type UsersBlogPostsRecord,
  type UsersInfoRecord,
  type UsersResponse,
} from "~/types/pocketbase-types";

const userId = useRoute().params.id as string;

interface Expand {
  flats_via_user: FlatsRecord[] | undefined;
  users_info_via_user: UsersInfoRecord | undefined;
  users_blog_posts_via_user: UsersBlogPostsRecord[] | undefined;
}

const getUserPageData = async () => {
  const userData = await pb
    .collection(Collections.Users)
    .getOne<UsersResponse<Expand>>(userId, {
      expand: "flats_via_user,users_info_via_user,users_blog_posts_via_user",
    });

  let flats: FlatsRecord[] = [];
  if (userData.expand.flats_via_user) {
    flats = userData.expand.flats_via_user.map((flat) => ({
      ...flat,
      image: pb.files.getURL(flat, flat.image),
    }));
  }

  let blogArticles: (UsersBlogPostsRecord & { previewImage: string | undefined })[] = [];

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

const userPageData = await getUserPageData();

const userData = ref(userPageData.userData);
const flats = ref(userPageData.flats);
const blogArticles = ref(userPageData.blogArticles);

const authStore = useAuthStore();

const isOwner = computed(() => authStore.userInfo?.id === userId);

const editProfileDialogVisibility = ref(false);

const showEditProfileDialog = () => {
  editProfileDialogVisibility.value = true;
};

const onSaveProfile = async () => {
  editProfileDialogVisibility.value = false;
  userData.value = (await getUserPageData()).userData;
  flats.value = (await getUserPageData()).flats;
};
</script>

