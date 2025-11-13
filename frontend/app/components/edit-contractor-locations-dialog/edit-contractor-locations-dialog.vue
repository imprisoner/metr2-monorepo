<template>
  <Dialog
    v-model:visible="visible"
    closable
    close-on-escape
    header="Редактировать локации"
    modal
    :style="{ width: '600px' }"
  >
    <div class="flex flex-col gap- mb-8">
      <CitySearchMultiple
        :initial-cities="contractorCities?.map((item) => item.expand.city)"
        multiple
        @change="onCitiesChange"
      />
    </div>
    <div class="flex gap-2 ms-auto w-fit">
      <Button label="Отмена" severity="secondary" @click="visible = false" />
      <Button label="Сохранить" @click="save" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type {
  ContractorsCitiesResponse,
  DictCitiesRecord,
} from "~/types/pocketbase-types";

const visible = defineModel<boolean>("visible");

const { contractorCities } = defineProps<{
  contractorCities:
    | ContractorsCitiesResponse<{
        city: DictCitiesRecord;
      }>[]
    | undefined;
}>();

const emit = defineEmits<{
  (e: 'save'): void
}>();

const initialCitiesIds = computed(() => {
  return contractorCities?.map((item) => item.city) ?? [];
});

const newCitiesIds = ref<string[]>();
const recordsToDeleteIds = ref<string[]>();

const onCitiesChange = (citiesIds: string[]) => {
  newCitiesIds.value = citiesIds.filter(
    (id) => !initialCitiesIds.value.includes(id)
  );

  const citiesToDeleteIds = initialCitiesIds.value.filter(
    (id) => !citiesIds.includes(id)
  );

  recordsToDeleteIds.value = contractorCities
    ?.filter((item) => citiesToDeleteIds.includes(item.city))
    .map((item) => item.id);
};

const authStore = useAuthStore()

const save = async () => {
  const coll = "contractors_cities"
  const batch = pb.createBatch()
  
  // create new records
  newCitiesIds.value?.forEach((cityId) => {
    batch.collection(coll).create({
      city: cityId,
      user: authStore.userInfo?.id
    })
  })

  recordsToDeleteIds.value?.forEach((id) => {
    batch.collection(coll).delete(id)
  })

  await batch.send()

  emit("save")
};
</script>

