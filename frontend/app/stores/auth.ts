import { pb } from "~/api/pocketbase-client";
import type { DictCitiesRecord, UsersResponse } from "~/types/pocketbase-types";

export const useAuthStore = defineStore("auth", () => {
  const isAuthorized = ref(false);

  const userInfo = ref<UsersResponse<{ location: DictCitiesRecord }>>();

  const logout = () => {
    pb.authStore.clear();
  };

  return {
    isAuthorized,
    userInfo,
    logout,
  };
});
