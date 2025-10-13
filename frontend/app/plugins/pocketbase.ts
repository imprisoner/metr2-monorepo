import type AuthRecord from "pocketbase";
import { pb } from "~/api/pocketbase-client";
import { useAuthStore } from "~/stores/auth";
// import type { TypedPocketBase } from "~/types/pocketbase-types";

export default defineNuxtPlugin(async () => {
  // const pb = new PocketBase("http://127.0.0.1:8090") as TypedPocketBase;

  const cookie = useCookie<{ token: string; record: AuthRecord }>("pb_auth", {
    path: "/",
    secure: true,
    sameSite: "strict",
    httpOnly: false, // change to "true" if you want only server-side access
    maxAge: 604800,
  });

  // load the store data from the cookie value
  pb.authStore.save(cookie.value?.token, cookie.value?.record);

  // send back the default 'pb_auth' cookie to the client with the latest store state

  const authStore = useAuthStore()

  pb.authStore.onChange(() => {
    cookie.value = {
      token: pb.authStore.token,
      record: pb.authStore.record,
    };

    authStore.isAuthorized = pb.authStore.isValid
    authStore.userInfo = pb.authStore.record
  });

  try {
    if (pb.authStore.isValid) {
      await pb.collection(pb.authStore.record!.collectionName).authRefresh();
    }
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
  } catch {
    // clear the auth store on failed refresh
    pb.authStore.clear();
  }

  // return {
  //   provide: { pb },
  // };
});

