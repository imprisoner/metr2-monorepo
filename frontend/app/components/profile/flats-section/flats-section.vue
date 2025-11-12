<template>
  <Panel class="shadow-md mb-8" pt:content:class="flex flex-col gap-4">
    <template #header>
      <PanelHeaderWithControls
        text="Квартиры"
        button-label="Добавить квартиру"
        :controls-show-condition="isOwner && !!flats.length"
        @button-click="showAddFlatDialog = true"
      />
    </template>
    <template v-if="flats.length !== 0">
      <FlatCard
        v-for="flat in flats"
        :key="flat.id"
        :flat="flat"
        :is-owner="isOwner"
        @edit="onEditFlat"
      />
    </template>
    <NoItemsSection
      v-else
      text="У пользователя нет добавленных квартир"
      button-label="Добавить квартиру"
      :controls-show-condition="isOwner"
      @button-click="showAddFlatDialog = true"
    />
  </Panel>
  <AddFlatDialog
    v-if="showAddFlatDialog"
    v-model:visible="showAddFlatDialog"
    :flat="flatToEdit"
    @save="onFlatSave"
  />
</template>

<script setup lang="ts">
import { getFlatsByUser } from "~/api/functions";
import type { FlatsRecord } from "~/types/pocketbase-types";

const { userId } = defineProps<{
  userId: string;
  isOwner: boolean;
}>();

const flats = ref(await getFlatsByUser(userId));

const showAddFlatDialog = ref(false);

const flatToEdit = ref<FlatsRecord>();

watchEffect(() => {
  if (showAddFlatDialog.value === false) {
    flatToEdit.value = undefined;
  }
});

const onEditFlat = (flatId: string) => {
  flatToEdit.value = flats.value.find((flat) => flat.id === flatId);
  showAddFlatDialog.value = true;
};

const onFlatSave = async () => {
  flats.value = await getFlatsByUser(userId)
  showAddFlatDialog.value = false;
};
</script>

