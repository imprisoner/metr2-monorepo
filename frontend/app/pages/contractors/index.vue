<template>
  <div class="w-full">
    <h1>Подрядчики</h1>
    <ContractorsServiceCategoriesCards class="mb-8" />
    <Panel class="shadow-md" pt:content:class="flex flex-col gap-4">
      <template #header>
        <div class="flex justify-between w-full">
          <span class="font-bold block">Топ подрядчиков недели</span>
          <SelectButton v-if="location" v-model="switchValue" :options="switchOptions" />
        </div>
      </template>
      <template v-if="contractors.length">
        <ContractorCard
          v-for="contractor in contractors"
          :key="contractor.id"
          :contractor-info="contractor"
          :services="contractor.expand.contractors_services_via_contractor"
          class="mb-8"
        />
      </template>
      <NoItemsSection
        v-else
        text="Здесь ещё нет подрядчиков"
        :controls-show-condition="false"
      />
      <template #footer>
        <p
          v-if="!isLastPage"
          class="col-span-3 text-center text-blue-600 font-semibold cursor-pointer max-sm:grid-span-1 max-lg:grid-span-2 mt-8"
          @click="next()"
        >
          Показать ещё
        </p>
      </template>
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type {
  DictCitiesRecord,
  UsersInfoResponse,
} from "~/types/pocketbase-types";

const authStore = useAuthStore();
const currentUserId = authStore.userInfo?.id;

const getCurrentUserLocation = async () => {
  if (!currentUserId) return;

  try {
    const userInfo = await pb
      .collection("users_info")
      .getFirstListItem<UsersInfoResponse<{ location: DictCitiesRecord }>>(
        `user = "${currentUserId}"`,
        { expand: "location" }
      );

    return userInfo.expand.location;
  } catch {
    return undefined;
  }
};

const location = ref(await getCurrentUserLocation());

watch(
  () => location.value,
  () => {
    updateFilters(locationQuery(location.value?.id ?? ""));
  }
);

const locationQuery = (cityId: string) => {
  return `contractors_cities_via_contractor.city = "${cityId}"`;
};

const { contractors, isLastPage, next, onPageChange, updateFilters } =
  useContractorsList(locationQuery(location.value?.id ?? ""));

await onPageChange({ currentPage: 1 });

// TODO experimental stuff just to show filtering by location works

const switchOptions = ref([location.value?.name, 'Все'])
const switchValue = ref(switchOptions.value[0])

watch(() => switchValue.value, (nv) => {
  const filter = nv === 'Все' ? "" : locationQuery(location.value?.id ?? "")

  updateFilters(filter)
})
</script>
