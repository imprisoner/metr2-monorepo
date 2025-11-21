import { getPostsList } from "~/api/functions";
import type { CollectionName } from "~/types/common.types";
import type { PostsRecord, UsersRecord } from "~/types/pocketbase-types";

const PAGE_SIZE = 3;

type ExpandableRelations = "post_flats_via_post" | "post_services_via_post" | "post_flats_via_post.flat" | "post_services_via_post.services"

export const usePostsList = (
  type?: "journal" | "blog" | "portfolio",
  initialFilters?: string,
  expand: (CollectionName | ExpandableRelations)[] = []
) => {
  const filters = ref<string | undefined>(initialFilters);

  const computedFilters = computed(() => {
    const typeFilter = type ? `type = "${type}"` : "";
    const restFilters = filters.value ? ` && (${filters.value})` : "";

    return typeFilter + restFilters;
  });

  const fetchPosts = async (page: number) => {
    return await getPostsList<{ author: UsersRecord }>({
      isShortContent: true,
      page: page,
      perPage: PAGE_SIZE,
      expand: ["author", ...expand],
      filter: computedFilters.value,
    });
  };

  const postsList = ref<Awaited<ReturnType<typeof fetchPosts>>>({
    items: [],
    page: 1,
    perPage: PAGE_SIZE,
    totalItems: -1,
    totalPages: -1,
  });

  const posts = ref<PostsRecord[]>([]);

  const onPageChange = async ({ currentPage }: { currentPage: number }) => {
    postsList.value = await fetchPosts(currentPage);
    posts.value = [...posts.value, ...postsList.value.items];
  };

  const currentPage = ref(1);

  const next = async () => {
    currentPage.value += 1;
    await onPageChange({ currentPage: currentPage.value });
  };

  const updateFilters = async (filterString: string) => {
    filters.value = filterString;
    posts.value = [];
    currentPage.value = 1;
    await onPageChange({ currentPage: 1 });
  };

  const isLastPage = computed(
    () => postsList.value.page >= postsList.value.totalPages
  );

  return {
    posts,
    isLastPage,
    next,
    updateFilters,
    onPageChange,
  };
};

