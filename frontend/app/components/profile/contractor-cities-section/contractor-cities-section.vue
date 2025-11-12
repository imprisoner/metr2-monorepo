<template>
  <Panel class="shadow-md mb-8" pt:content:class="flex gap-4">
    <template #header>
      <PanelHeaderWithControls
        text="Локации"
        button-label="Редактировать локации"
        :controls-show-condition="!!(isOwner && contractorCities?.length)"
        @button-click="showEditLocationsDialog = true"
      />
    </template>
    <template v-if="contractorCities">
      <Chip
        v-for="location in contractorCities"
        :key="location.id"
        :label="location.expand.city.name"
      />
    </template>
    <NoItemsSection
      v-else
      text="У подрядчика нет добавленных локаций"
      button-label="Добавить локацию"
      class="mx-auto"
      :controls-show-condition="!!isOwner"
      @button-click="showEditLocationsDialog = true"
    />
  </Panel>
  <EditContractorLocationsDialog
    v-if="showEditLocationsDialog"
    v-model:visible="showEditLocationsDialog"
    :contractor-cities="contractorCities"
    @save="onLocationsSaved"
  />
</template>

<script setup lang="ts">
import { getContractorCities } from "~/api/functions";

const { userId } = defineProps<{
  isOwner?: boolean;
  userId: string;
}>();

const contractorCities = ref(await getContractorCities(userId));

const showEditLocationsDialog = ref(false);

const onLocationsSaved = async () => {
  contractorCities.value = await getContractorCities(userId)
  showEditLocationsDialog.value = false;
};
</script>

