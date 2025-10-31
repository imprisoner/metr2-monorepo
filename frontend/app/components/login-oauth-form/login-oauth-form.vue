<template>
  <div class="flex flex-col items-center justify-center mt-8 gap-8">
    <span>Авторизоваться с</span>
    <div class="flex gap-4 justify-center">
      <SocialLoginButton
        v-for="provider in OAUTH_PROVIDERS"
        :key="provider"
        :provider="provider"
        @click="signInWithProvider(provider)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ClientResponseError } from "pocketbase";
import { authenticateWithProvider } from "~/api/functions";
import { OAUTH_PROVIDERS } from "~/constants";

const { collection } = defineProps<{
  collection: "contractors" | "users";
}>();

const emit = defineEmits<{
  (e: "success"): void;
  (e: "error", error: ClientResponseError): void;
}>();

const signInWithProvider = async (
  provider: (typeof OAUTH_PROVIDERS)[number]
) => {
  try {
    authenticateWithProvider(collection, provider);
    emit("success");
  } catch (error) {
    emit("error", error as ClientResponseError);
  }
};
</script>

