import type {
  AutoCompleteCompleteEvent,
} from "primevue/autocomplete";
import { pb } from "~/api/pocketbase-client";
import type { DictCitiesRecord } from "~/types/pocketbase-types";

export const useCitiesAutocompleteSearch = () => {
  const suggestions = ref<DictCitiesRecord[]>([]);

  const isLoading = ref(false);

  const search = async (e: AutoCompleteCompleteEvent) => {
    const nameQuery = capitalizeFirstLetter(e.query);

    isLoading.value = true;

    const response = await pb
      .collection("dict_cities")
      .getFullList<DictCitiesRecord>({
        filter: `name ~ "${nameQuery}"`,
        sort: "name",
      });

    isLoading.value = false;

    suggestions.value = response;
  };

  return {
    suggestions,
    isLoading,
    search
  }
};
