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
      display="chip"
    >
      <template #option="slotProps">
        <div :class="{ 'text-gray-300': slotProps.option.deleted }">
          {{ slotProps.option.name }}
        </div>
      </template>
    </MultiSelect>
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
import { getContractorServices, getServicesByIds } from "~/api/functions";

const { fieldState } = defineProps<{
  fieldState: FormFieldState | undefined;
}>();

const isLoading = ref(false);

const authStore = useAuthStore();

const userId = authStore.userInfo!.id;

const getOptions = async () => {
  isLoading.value = true;

  const response = await getContractorServices(userId);

  isLoading.value = false;

  const options = response.map((item) => ({
    ...item.expand.specialtyService,
    deleted: false,
  }));

  return options;
};

const options = ref(await getOptions());

watch(() => fieldState?.value, async (newValue, oldValue) => {
  if (oldValue || !newValue) {
    return;
  }
  
  const deletedServicesIds = fieldState?.value.filter((id: string) => {
    return !options.value.find(
      (item) => item.id === id
    )
  }) ?? [];
  
  if (deletedServicesIds.length > 0) {
    const deleted = (await getServicesByIds(deletedServicesIds)).map(
      (item) => ({
        ...item,
        deleted: true,
      })
    );

    options.value = [...options.value, ...deleted];
  }
}, { immediate: true });
</script>

