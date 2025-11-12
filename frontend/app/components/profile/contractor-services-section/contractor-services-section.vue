<template>
  <Panel class="shadow-md mb-8">
    <template #header>
      <PanelHeaderWithControls
        text="Услуги"
        button-label="Добавить услугу"
        :controls-show-condition="!!(isOwner && services?.length)"
        @button-click="onAddServiceClick"
      />
    </template>
    <ul v-if="services">
      <li v-for="service in services" :key="service.id" class="mb-4">
        <ContractorsServiceCard
          :name="service.expand.specialtyService.name"
          :description="service.description"
          :price-min="service.priceMin"
          :price-max="service.priceMax"
          :is-owner="isOwner"
          @edit="onEditContractorsService(service.id)"
        />
      </li>
    </ul>
    <NoItemsSection
      v-else
      text="У подрядчика нет добавленных услуг"
      button-label="Добавить услугу"
      :controls-show-condition="!!isOwner"
      @button-click="showAddServiceDialog = true"
    />
  </Panel>
  <AddContractorServiceDialog
    v-if="showAddServiceDialog"
    v-model:visible="showAddServiceDialog"
    :contractors-service="serviceToEdit"
    :all-services-ids="services?.map((item) => item.specialtyService)"
    @save="onServiceSaved"
  />
</template>

<script setup lang="ts">
import { getContractorServices } from "~/api/functions";
import type {
  ContractorsServicesResponse,
  DictSpecialtyServicesRecord,
} from "~/types/pocketbase-types";

const { userId } = defineProps<{
  isOwner?: boolean;
  userId: string;
}>();

const services = ref(await getContractorServices(userId))

const showAddServiceDialog = ref(false);

const onServiceSaved = async () => {
  showAddServiceDialog.value = false;
  services.value = await getContractorServices(userId)
};

const serviceToEdit = ref<
  | ContractorsServicesResponse<{
      specialtyService: DictSpecialtyServicesRecord;
    }>
  | undefined
>();

const onEditContractorsService = (serviceId: string) => {
  serviceToEdit.value = services.value?.find((service) => service.id === serviceId);
  showAddServiceDialog.value = true;
};

const onAddServiceClick = () => {
  serviceToEdit.value = undefined;
  showAddServiceDialog.value = true;
};
</script>

