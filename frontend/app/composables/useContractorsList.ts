import { getContractorsResponse } from "~/api/functions";

const PAGE_SIZE = 3;

export const useContractorsList = (initialFilters?: string) => {
  const filters = ref<string | undefined>(initialFilters);

  const fetchContractors = async (page: number) => {
    return await getContractorsResponse({
      page: page,
      perPage: PAGE_SIZE,
      filter: filters.value,
    });
  };

  const contractorsList = ref<Awaited<ReturnType<typeof fetchContractors>>>({
    items: [],
    page: 1,
    perPage: PAGE_SIZE,
    totalItems: -1,
    totalPages: -1,
  });

  const contractors = ref<(typeof contractorsList.value)["items"]>([]);

  const onPageChange = async ({ currentPage }: { currentPage: number }) => {
    contractorsList.value = await fetchContractors(currentPage);
    contractors.value = [...contractors.value, ...contractorsList.value.items];
  };

  const currentPage = ref(1);

  const next = async () => {
    currentPage.value += 1;
    await onPageChange({ currentPage: currentPage.value });
  };

  const updateFilters = async (filterString: string) => {
    filters.value = filterString;
    contractors.value = [];
    currentPage.value = 1;
    await onPageChange({ currentPage: 1 });
  };

  const isLastPage = computed(
    () => contractorsList.value.page >= contractorsList.value.totalPages
  );

  return {
    contractors,
    isLastPage,
    next,
    updateFilters,
    onPageChange,
  };
};

