import { pb } from "~/api/pocketbase-client";

export default defineNuxtRouteMiddleware(async () => {
  if (pb.authStore.record!.role !== "contractor") {
    return navigateTo('/')
  }
});

