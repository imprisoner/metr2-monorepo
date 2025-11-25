<template>
  <div class="flex flex-col gap-1">
    <MultiSelect
      name="services"
      :options="options"
      option-value="id"
      option-label="name"
      :loading="isLoading"
      fluid
      placeholder="Выберите услуги"
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
import { getContractorServices } from "~/api/functions";

defineProps<{
  fieldState?: FormFieldState;
}>();

const isLoading = ref(false);

const authStore = useAuthStore();

const userId = authStore.userInfo!.id;

const getOptions = async () => {
  isLoading.value = true;

  const response = await getContractorServices(userId);

  isLoading.value = false;
  return response.map((item) => item.expand.specialtyService);
};

const options = await getOptions();
</script>

