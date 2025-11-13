<template>
  <Dialog
    v-model:visible="visible"
    closable
    close-on-escape
    :header="dialogHeader"
    modal
    :style="{ width: '600px' }"
  >
    <CascadeSelect
      v-if="!contractorsService"
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
    <div class="flex gap-8 mb-8">
      <Listbox
        v-if="!contractorsService"
        v-model="selectedService"
        :options="servicesResponse"
        option-label="name"
        class="w-full md:w-56 min-h-[150px]"
        :disabled="servicesResponse.length === 0"
      />
      <div class="flex flex-col gap-4">
        <label class="flex flex-col gap-2 w-full">
          <span>Минимальная цена</span>
          <InputNumber v-model="priceMin" :disabled="disableFields" />
        </label>
        <label class="flex flex-col gap-2 w-full">
          <span>Максимальная цена</span>
          <InputNumber v-model="priceMax" :disabled="disableFields" />
        </label>
      </div>
    </div>
    <div class="flex">
      <label class="flex flex-col gap-2 w-full">
        <span>Описание услуги</span>
        <TextArea
          v-model="description"
          :disabled="disableFields"
          maxlength="300"
        />
      </label>
    </div>
    <div class="mt-8 flex gap-2 justify-end">
      <Button
        v-if="mode === 'edit'"
        severity="danger"
        label="Удалить"
        @click="remove"
      />
      <Button label="Сохранить" :disabled="disableFields" @click="save" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type {
  ContractorsServicesRecord,
  ContractorsServicesResponse,
  DictServiceCategoriesResponse,
  DictSpecialtiesRecord,
  DictSpecialtyServicesRecord,
} from "~/types/pocketbase-types";

const { contractorsService = undefined, allServicesIds = [] } = defineProps<{
  contractorsService?: ContractorsServicesResponse<{
    specialtyService: DictSpecialtyServicesRecord;
  }>;
  allServicesIds?: string[];
}>();

const mode = computed(() => (contractorsService ? "edit" : "create"));
const dialogHeader = computed(() =>
  mode.value === "create"
    ? "Добавить услугу"
    : `Редактировать услугу - ${
        contractorsService!.expand.specialtyService.name
      }`
);

const disableFields = computed(
  () => mode.value === "create" && !selectedService.value
);

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

  servicesResponse.value = response
    .filter((item) => !allServicesIds.includes(item.id))
    .map((item) => ({
      ...item,
      name: capitalizeFirstLetter(item.name),
    }));

  selectedService.value = undefined;
};

const priceMin = ref(contractorsService?.priceMin ?? 0);
const priceMax = ref(contractorsService?.priceMax ?? 0);
const description = ref(contractorsService?.description ?? "");

const authStore = useAuthStore();

const save = async () => {
  if (disableFields.value) return;

  const body: {
    specialtyService?: string;
    user?: string;
    priceMin: number;
    priceMax: number;
    description: string;
  } = {
    specialtyService:
      selectedService.value?.id ?? contractorsService?.specialtyService,
    user: authStore.userInfo!.id,
    priceMax: priceMax.value,
    priceMin: priceMin.value,
    description: description.value,
  };

  if (mode.value === "create") {
    await pb.collection("contractors_services").create(body);
  } else {
    await pb
      .collection("contractors_services")
      .update(contractorsService!.id, body);
  }

  emit("save");
};

const remove = async () => {
  await pb.collection("contractors_services").delete(contractorsService!.id);

  emit("save");
};
</script>

