import type { AuthRecord } from "pocketbase"
import { pb } from "~/api/pocketbase-client"

export const useAuthStore = defineStore('auth', () => {
  const isAuthorized = ref(false)

  const userInfo = ref<AuthRecord>()

  const logout = () => {
    pb.authStore.clear()
  }

  return {
    isAuthorized,
    userInfo,
    logout
  }
})