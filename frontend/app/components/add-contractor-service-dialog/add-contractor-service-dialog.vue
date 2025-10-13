<template>
  <Dialog
    v-model:visible="visible"
    closable
    close-on-escape
    header="Добавьте услугу"
    modal
    :style="{ width: '600px' }"
  >
    <CascadeSelect
      v-model="selectedSpecialty"
      :options="options"
      option-label="sname"
      option-group-label="name"
      option-group-children="expand.dict_specialties_via_serviceCategory"
      fluid
      placeholder="Выберите специализацию"
      class="mb-8"
      @update:model-value="onUpdateSpecialty"
    />
    <div class="flex gap-8">
      <Listbox
        v-model="selectedService"
        :options="servicesResponse"
        option-label="name"
        class="w-full md:w-56 min-h-[150px]"
        :disabled="servicesResponse.length === 0"
      />
      <div class="flex flex-col gap-4">
        <label class="flex flex-col gap-2 w-full">
          <span>Минимальная цена</span>
          <InputNumber v-model="priceMin" :disabled="!selectedService" />
        </label>
        <label class="flex flex-col gap-2 w-full">
          <span>Максимальная цена</span>
          <InputNumber v-model="priceMax" :disabled="!selectedService" />
        </label>
      </div>
    </div>
    <div class="mt-8">
      <Button
        label="Сохранить"
        fluid
        :disabled="!selectedService"
        @click="save"
      />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type {
  ContractorsServicesRecord,
  DictServiceCategoriesResponse,
  DictSpecialtiesRecord,
  DictSpecialtyServicesRecord,
} from "~/types/pocketbase-types";

const emit = defineEmits<{
  (e: "save"): void;
}>();

const visible = defineModel<boolean>("visible");

const selectedSpecialty = ref<DictSpecialtiesRecord>();

const response = await pb.collection("dict_service_categories").getFullList<
  DictServiceCategoriesResponse<{
    dict_specialties_via_serviceCategory: DictSpecialtiesRecord[] | undefined;
  }>
>({
  expand: "dict_specialties_via_serviceCategory",
});

const options = response.map((item) => {
  const newItem = structuredClone(item);

  if (newItem.expand.dict_specialties_via_serviceCategory) {
    newItem.expand.dict_specialties_via_serviceCategory =
      newItem.expand.dict_specialties_via_serviceCategory.map((specialty) => {
        return {
          ...specialty,
          sname: capitalizeFirstLetter(specialty.name),
        };
      });
  }

  return {
    ...newItem,
    name: capitalizeFirstLetter(newItem.name),
  };
});

const selectedService = ref<ContractorsServicesRecord>();

const servicesResponse = ref<DictSpecialtyServicesRecord[]>([]);

const onUpdateSpecialty = async (specialty: DictSpecialtiesRecord) => {
  const response = await pb.collection("dict_specialty_services").getFullList({
    filter: `specialty="${specialty.id}"`,
  });

  servicesResponse.value = response.map((item) => ({
    ...item,
    name: capitalizeFirstLetter(item.name),
  }));

  selectedService.value = undefined;
};

const priceMin = ref(0);
const priceMax = ref(0);

const authStore = useAuthStore();

const save = async () => {
  if (!selectedService.value) return;

  const body: Omit<ContractorsServicesRecord, "id" | "created" | "updated"> = {
    specialtyService: selectedService.value.id,
    contractor: authStore.userInfo!.id,
    priceMax: priceMax.value,
    priceMin: priceMin.value,
  };

  await pb.collection("contractors_services").create(body);

  emit("save");
};
</script>

