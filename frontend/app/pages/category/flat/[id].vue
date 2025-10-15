<template>
  <div class="w-full flex flex-col gap-4">
    <h1>{{ flat.nickname }}</h1>
    <NuxtImg :src="titleImageUrl" class="w-full object-cover rounded-md" />
    <Panel header="Секция со счётчиками" class="shadow-md"></Panel>
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
        <div class="flex justify-between items-center w-full">
          <span class="font-bold">Бортжурналы</span>
          <Button
            v-if="isOwner && journals.length"
            v-slot="slotProps"
            severity="info"
            size="small"
            as-child
          >
            <NuxtLink to="/write" :class="slotProps.class">
              Добавить статью
            </NuxtLink>
          </Button>
        </div>
      </template>
      <template v-if="journals.length">
        <JournalCard
          v-for="journal in journals"
          :key="journal.id"
          :journal="journal"
        />
      </template>
      <div v-else class="flex flex-col items-center justify-center py-8">
        <span class="text-gray-500 mb-2">Здесь ещё нет статей</span>
        <Button
          v-if="isOwner"
          v-slot="slotProps"
          severity="info"
          size="small"
          as-child
        >
          <NuxtLink :to="`/write/journals/flats/${flat.id}`" :class="slotProps.class">
            Добавить статью
          </NuxtLink>
        </Button>
      </div>
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { getJournalsResponse } from "~/api/functions";
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
  return pb.files.getURL(flat, filename);
});

const titleImageUrl = images[0];

const journalsResponse = await getJournalsResponse({
  filter: `flat="${flat.id}"`,
  sortBy: ["-created"],
  expand: ["user"],
  isShortContent: true,
});

const journals = journalsResponse.items;

const authStore = useAuthStore();

const isOwner = authStore.userInfo?.id === flat.user;
</script>

