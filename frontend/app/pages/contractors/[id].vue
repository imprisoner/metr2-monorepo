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
          :blog-articles="blogArticles"
          @service-saved="onServiceSaved"
        />
      </template>
      <template #right>
        <Panel class="shadow-md h-fit">
          <DetailedUserInfoPlate
            :avatar="contractorResponse.avatar"
            :location="contractorInfo?.location"
            :name="contractorResponse.name"
            :is-owner="isOwner"
            @edit-profile="onEditProfile"
          />
        </Panel>
        <Panel toggleable header="Обо мне">
          Я люблю путешествовать и открывать новые места в свободное время
        </Panel>
      </template>
    </TwoSectionContainer>
    <EditContractorsProfileDialog
      v-if="isOwner"
      v-model:visible="isEditProfileDialogVisible"
      :contractor-info="contractorInfo"
    />
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type { ContractorsPostsResponseWithExpand } from "~/types/api.types";
import {
  Collections,
  type ContractorsBlogPostsResponse,
  type ContractorsInfoRecord,
  type ContractorsRecord,
  type ContractorsResponse,
  type ContractorsServicesResponse,
  type DictSpecialtyServicesRecord,
} from "~/types/pocketbase-types";

const contractorId = useRoute().params.id as string;

interface ExpandServices {
  specialtyService: DictSpecialtyServicesRecord;
}

interface ExpandContractor {
  contractors_info_via_contractor: ContractorsInfoRecord | undefined;
  contractors_services_via_contractor:
    | ContractorsServicesResponse<ExpandServices>[]
    | undefined;
}

const getContractorInfoAndServices = async (id: string) => {
  const response = await pb
    .collection(Collections.Contractors)
    .getOne<ContractorsResponse<ExpandContractor>>(id, {
      expand:
        "contractors_info_via_contractor,contractors_services_via_contractor,contractors_services_via_contractor.specialtyService",
    });

  return response;
};

const contractorResponse = ref(
  await getContractorInfoAndServices(contractorId)
);

const services = computed(
  () => contractorResponse.value.expand.contractors_services_via_contractor
);
const contractorInfo = computed(
  () => contractorResponse.value.expand.contractors_info_via_contractor
);

const getContractorPortfolio = async (contractorId: string) => {
  const response = await pb
    .collection(Collections.ContractorsPosts)
    .getList<ContractorsPostsResponseWithExpand>(1, 10, {
      filter: `contractor="${contractorId}"`,
      expand: "contractorServices,contractorServices.specialtyService",
      fields: "*,content:excerpt(100,true)",
    });

  const withPreviewImages = response.items.map((article) => {
    let previewImage;

    if (article.images) {
      previewImage = pb.files.getURL(article, article.images[article.previewImageIndex]!);
    }

    return {
      ...article,
      previewImage,
    };
  });

  return withPreviewImages;
};

const portfolio = await getContractorPortfolio(contractorId);

const authStore = useAuthStore();

const isOwner = computed(() => {
  if (authStore.userInfo?.collectionName === "contractors") {
    return authStore.userInfo.id === contractorId;
  }

  return false;
});

const isEditProfileDialogVisible = ref(false);

const onEditProfile = async () => {
  isEditProfileDialogVisible.value = true;
};

const onServiceSaved = async () => {
  console.log("onServiceSaved");
  contractorResponse.value = await getContractorInfoAndServices(contractorId);
};

const getContractorsBlogPosts = async () => {
  const response = await pb
    .collection("contractors_blog_posts")
    .getFullList<ContractorsBlogPostsResponse<ContractorsRecord>>({
      expand: "contractors_via_contractor",
      filter: `contractor="${contractorId}"`,
    });

  const withPreviewImages = response.map((article) => {
    let previewImage;

    if (article.images) {
      previewImage = pb.files.getURL(article, article.images[article.previewImageIndex]!);
    }

    return {
      ...article,
      previewImage,
    };
  });

  return withPreviewImages;
};

const blogArticles = await getContractorsBlogPosts();
</script>

