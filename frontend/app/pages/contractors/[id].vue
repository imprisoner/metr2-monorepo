<template>
  <div>
    <div class="flex items-center gap-8">
      <h1>{{ contractorResponse.name }}</h1>
      <Tag severity="success" value="Подрядчик" />
    </div>
    <TwoSectionContainer>
      <template #left>
        <ProfileContractorSection
          :is-owner="isOwner"
          :portfolio="portfolio"
          :services="services"
          :contractor-info="contractorInfo"
          :contractor-cities="contractorCities"
          :blog-articles="blogArticles"
          @new-data-saved="refreshPageData"
        />
      </template>
      <template #right>
        <Panel class="shadow-md h-fit">
          <DetailedUserInfoPlate
            :avatar="contractorResponse.avatar"
            :location="contractorInfo?.expand.location?.name ||
              'Нет локации'"
            :name="contractorResponse.name"
            :is-owner="isOwner"
            @edit-profile="onEditProfile"
            @save-avatar="onSaveAvatar"
          />
        </Panel>
        <Panel toggleable header="Обо мне">
          {{ contractorInfo?.about }}
        </Panel>
      </template>
    </TwoSectionContainer>
    <EditContractorsProfileDialog
      v-if="isOwner"
      v-model:visible="editProfileDialogVisibility"
      :contractor-info="contractorInfo"
      @save="onSaveProfile"
    />
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type { ContractorsPostsResponseWithExpand } from "~/types/api.types";
import {
  Collections,
  type ContractorsBlogPostsResponse,
  type ContractorsCitiesResponse,
  type ContractorsServicesResponse,
  type DictCitiesRecord,
  type DictSpecialtyServicesRecord,
  type UserProfilesResponse,
  type UsersRecord,
  type UsersResponse,
} from "~/types/pocketbase-types";

const username = useRoute().params.id as string;

const authStore = useAuthStore();

const isOwner = computed(() => {
  if (authStore.isAuthorized) {
    return authStore.userInfo?.username === username;
  }

  return false;
});

interface ExpandContractor {
  user_profiles_via_user: UserProfilesResponse<{
    location: DictCitiesRecord | undefined
  }> | undefined;
  contractors_services_via_user:
    | ContractorsServicesResponse<{
        specialtyService: DictSpecialtyServicesRecord;
      }>[]
    | undefined;
  contractors_cities_via_user: ContractorsCitiesResponse<{
    city: DictCitiesRecord;
  }>[];
}

const getContractorInfoAndServices = async (username: string) => {
  const expand = [
    "user_profiles_via_user.location",
    "contractors_services_via_user.specialtyService",
    "contractors_cities_via_user.city",
  ].join(",");

  const response = await pb
    .collection(Collections.Users)
    .getFirstListItem<UsersResponse<ExpandContractor>>(`username = "${username}"`, {
      expand,
    });

  if (response.avatar !== "") {
    response.avatar = getPocketbaseFilePath(response, response.avatar);
  }
  return response;
};

const contractorResponse = ref(
  await getContractorInfoAndServices(username)
);

const services = computed(
  () => contractorResponse.value.expand.contractors_services_via_user
);
const contractorInfo = computed(
  () => contractorResponse.value.expand.user_profiles_via_user
);

const contractorCities = computed(
  () => contractorResponse.value.expand.contractors_cities_via_user
)

const getContractorPortfolio = async (id: string) => {
  const response = await pb
    .collection(Collections.ContractorsPosts)
    .getList<ContractorsPostsResponseWithExpand>(1, 10, {
      filter: `user="${id}"`,
      expand: "contractorServices",
      fields: "*,content:excerpt(100,true)",
    });

  const withPreviewImages = response.items.map((article) => {
    let previewImage;

    if (article.images) {
      previewImage = getPocketbaseFilePath(
        article,
        article.images[article.previewImageIndex]!
      );
    }

    return {
      ...article,
      previewImage,
    };
  });

  return withPreviewImages;
};

const portfolio: (ContractorsPostsResponseWithExpand & {
  previewImage: string | undefined;
})[] = await getContractorPortfolio(contractorResponse.value.id);

const editProfileDialogVisibility = ref(false);

const onEditProfile = async () => {
  editProfileDialogVisibility.value = true;
};

const refreshPageData = async () => {
  contractorResponse.value = await getContractorInfoAndServices(username);
};

const getContractorsBlogPosts = async (id: string) => {
  const response = await pb
    .collection("contractors_blog_posts")
    .getFullList<ContractorsBlogPostsResponse<UsersRecord>>({
      expand: "users_via_user",
      filter: `user="${id}"`,
    });

  const withPreviewImages = response.map((article) => {
    let previewImage;

    if (article.images) {
      previewImage = getPocketbaseFilePath(
        article,
        article.images[article.previewImageIndex]!
      );
    }

    return {
      ...article,
      previewImage,
    };
  });

  return withPreviewImages;
};

const blogArticles = await getContractorsBlogPosts(contractorResponse.value.id);

const onSaveProfile = async () => {
  editProfileDialogVisibility.value = false;
  contractorResponse.value = await getContractorInfoAndServices(username)
};

const onSaveAvatar = async () => {
  contractorResponse.value = await getContractorInfoAndServices(username)
}
</script>

