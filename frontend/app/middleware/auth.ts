import { pb } from "~/api/pocketbase-client"

export default defineNuxtRouteMiddleware(async () => {
  if (!pb.authStore.isValid) {
    return navigateTo("/")
  }

  try {
    if (pb.authStore.isValid) {
      await pb.collection("users").authRefresh();
    }
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
  } catch {
    // clear the auth store on failed refresh
    pb.authStore.clear();
    return navigateTo("/")
  }
})