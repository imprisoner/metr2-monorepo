<template>
  <div class="w-full flex flex-col gap-4">
    <h1>{{ flat.nickname }}</h1>
    <img :src="titleImageUrl" class="w-full object-cover rounded-md" />
    <Panel header="Секция со счётчиками" class="shadow-md" />
    <Panel header="Альбом" class="shadow-md" />
    <Panel class="shadow-md">
      <SmallUserInfoPlate :user-id="flat.user" />
    </Panel>
    <Panel header="Про мою квартиру" class="shadow-md">
      <p class="mb-4">
        {{ flat.description }}
      </p>
      <ul class="flex flex-col gap-2">
        <li class="flex gap-2 items-center">
          <i class="pi pi-chevron-circle-right" />
          {{ flat.expand.houseSeries!.name }}
        </li>
        <li class="flex gap-2 items-center">
          <i class="pi pi-chevron-circle-right" />
          {{ flat.expand.flatType!.name }}
        </li>
        <li class="flex gap-2 items-center">
          <i class="pi pi-chevron-circle-right" />
          {{ flat.expand.squareM2!.name }} м2
        </li>
        <li class="flex gap-2 items-center">
          <i class="pi pi-chevron-circle-right" />
          {{ flat.expand.finishing!.name }}
        </li>
      </ul>
    </Panel>
    <Panel pt:content:class="flex flex-col gap-4">
      <template #header>
        <PanelHeaderWithControls
          text="Бортжурналы"
          button-label="Добавить статью"
          button-link="/write"
          :controls-show-condition="!!(isOwner && journals.length)"
        />
      </template>
      <template v-if="journals.length">
        <JournalCard
          v-for="journal in journals"
          :key="journal.id"
          :journal="journal"
        />
      </template>
      <NoItemsSection
        v-else
        class="col-span-3"
        text="Здесь ещё нет статей"
        :controls-show-condition="isOwner"
        button-label="Добавить статью"
        :button-link="`/write/journals/flats/${flat.id}`"
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
import {
  Collections,
  type DictFinishingRecord,
  type DictFlatTypeRecord,
  type DictHouseSeriesRecord,
  type DictSquareM2Record,
  type FlatsResponse,
  type JournalsRecord,
  type UsersRecord,
} from "~/types/pocketbase-types";

const route = useRoute();

interface Expand {
  user: UsersRecord;
  houseSeries: DictHouseSeriesRecord;
  flatType: DictFlatTypeRecord;
  finishing: DictFinishingRecord;
  squareM2: DictSquareM2Record;
  journals_via_flat?: JournalsRecord[] | undefined;
}

const flat = await pb
  .collection(Collections.Flats)
  .getOne<FlatsResponse<Expand>>(route.params.id as string, {
    expand: "user,houseSeries,flatType,finishing,squareM2,journals_via_flat",
  });

const images = flat.images.map((filename) => {
  return getPocketbaseFilePath(flat, filename);
});

const titleImageUrl = images[0];

const { journals, isLastPage, next, onPageChange } = useJournalsList(`flat="${flat.id}"`);
await onPageChange({currentPage: 1})

const authStore = useAuthStore();

const isOwner = authStore.userInfo?.id === flat.user;
</script>

