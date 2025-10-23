<template>
  <div class="w-full">
    <h1>Подрядчики</h1>
    <ContractorsServiceCategoriesCards class="mb-8" />
    <Panel
      header="Топ подрядчиков недели"
      class="shadow-md"
      :pt="{ content: { class: 'flex flex-col gap-4' } }"
    >
      <ContractorCard
        v-for="contractor in contractors"
        :key="contractor.id"
        :contractor-info="contractor"
        :services="contractor.expand.contractors_services_via_contractor"
        class="mb-8"
      />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type { ContractorWithUserInfoAndServices } from "~/types/api.types";
import { Collections } from "~/types/pocketbase-types";

const authStore = useAuthStore();
const currentUserId = authStore.userInfo?.id;

const getCurrentUserLocation = async () => {
  if (!currentUserId) return;

  try {
    const userInfo = await pb
      .collection("users_info")
      .getFirstListItem(`user = "${currentUserId}"`);
  
    return userInfo.location;
  } catch {
    return ""
  }
};

const location = ref(await getCurrentUserLocation());

const locationQuery = (cityId: string) => {
  return `contractors_cities_via_contractor.city = "${cityId}"`;
};

const getContractorsList = async () => {
  const response = await pb
    .collection(Collections.Contractors)
    .getFullList<ContractorWithUserInfoAndServices>({
      expand: "contractors_services_via_contractor.specialtyService",
      filter: `${locationQuery(location.value || "")}`,
    });

  return response;
};

const contractors = ref<Awaited<ReturnType<typeof getContractorsList>>>(
  await getContractorsList()
);
</script>
