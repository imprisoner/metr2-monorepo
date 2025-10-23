<template>
  <JournalCard
    v-for="journal in journals"
    :key="journal.id"
    :journal="journal"
  />
  <p
    v-if="!isLastPage"
    class="col-span-3 text-center text-blue-600 font-semibold cursor-pointer max-sm:grid-span-1 max-lg:grid-span-2 mt-8"
    @click="next()"
  >
    Показать ещё
  </p>
</template>

<script setup lang="ts">
import { useOffsetPagination } from "@vueuse/core";
import { getJournalsResponse } from "~/api/functions";
import type { JournalsRecord, UsersRecord } from "~/types/pocketbase-types";

const { filter = undefined, sortBy = undefined } = defineProps<{
  filter?: string;
  sortBy?: string[];
}>();

const PAGE_SIZE = 3;

const fetchJournals = async (page: number) => {
  return await getJournalsResponse<{
    user: UsersRecord;
  }>({
    isShortContent: true,
    page: page,
    perPage: PAGE_SIZE,
    filter,
    sortBy: sortBy ?? ["-created"],
    expand: ["user"],
  });
};

const journalsList = ref<Awaited<ReturnType<typeof fetchJournals>>>({
  items: [],
  page: 1,
  perPage: PAGE_SIZE,
  totalItems: -1,
  totalPages: -1,
});

const total = computed(() => journalsList.value?.totalItems);

const journals = ref<JournalsRecord[]>([]);

const onPageChange = async ({ currentPage }: { currentPage: number }) => {
  journalsList.value = await fetchJournals(currentPage);
  journals.value = [...journals.value, ...journalsList.value.items];
};

await onPageChange({ currentPage: 1 });

const { next, isLastPage } = useOffsetPagination({
  total: total.value,
  page: 1,
  pageSize: PAGE_SIZE,
  onPageChange,
});
</script>

