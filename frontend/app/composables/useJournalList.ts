import { getJournalsResponse } from "~/api/functions";
import type { JournalsRecord, UsersRecord } from "~/types/pocketbase-types";

const PAGE_SIZE = 3;

export const useJournalsList = (initialFilters?: string) => {
  const filters = ref<string | undefined>(initialFilters);

  const fetchJournals = async (page: number) => {
    return await getJournalsResponse<{ user: UsersRecord }>({
      isShortContent: true,
      page: page,
      perPage: PAGE_SIZE,
      expand: ["user"],
      filter: filters.value,
    });
  };

  const journalsList = ref<Awaited<ReturnType<typeof fetchJournals>>>({
    items: [],
    page: 1,
    perPage: PAGE_SIZE,
    totalItems: -1,
    totalPages: -1,
  });

  const journals = ref<JournalsRecord[]>([]);

  const onPageChange = async ({ currentPage }: { currentPage: number }) => {
    journalsList.value = await fetchJournals(currentPage);
    journals.value = [...journals.value, ...journalsList.value.items];
  };

  const currentPage = ref(1);

  const next = async () => {
    currentPage.value += 1;
    await onPageChange({ currentPage: currentPage.value });
  };

  const updateFilters = async (filterString: string) => {
    filters.value = filterString;
    journals.value = [];
    currentPage.value = 1;
    await onPageChange({ currentPage: 1 });
  };

  const isLastPage = computed(
    () => journalsList.value.page >= journalsList.value.totalPages
  );

  return {
    journals,
    isLastPage,
    next,
    updateFilters,
    onPageChange,
  };
};

