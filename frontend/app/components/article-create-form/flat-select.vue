<template>
  <div class="flex flex-col gap-1">
    <Select
      name="flat"
      type="text"
      placeholder="Никнейм квартиры"
      fluid
      :options="options"
      option-label="nickname"
      option-value="id"
    />
    <Message
      v-if="fieldState && fieldState.invalid"
      severity="error"
      size="small"
      variant="simple"
      >{{ fieldState.error?.message }}</Message
    >
  </div>
</template>

<script setup lang="ts">
import type { FormFieldState } from "@primevue/forms/form";
import { getFlatsByUser } from "~/api/functions";

defineProps<{
  fieldState?: FormFieldState;
}>();

const authStore = useAuthStore();

const options = await getFlatsByUser(authStore.userInfo!.id);
</script>

