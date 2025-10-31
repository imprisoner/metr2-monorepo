<template>
  <Dialog v-model:visible="visible" modal>
    <div class="flex flex-col items-center justify-center">
      <div
        class="w-full bg-surface-0 dark:bg-surface-900 p-8 sm:px-20"
        style="border-radius: 53px"
      >
        <SelectButton
          v-model="userType"
          :options="userTypeOptions"
          class="mb-8"
        />
        <template v-if="!showRegister">
          <LoginForm
            :collection="collection"
            @success="onSuccess"
            @error="onError('Не удалось аутентифицироваться', $event)"
          />
          <span class="d-block mx-auto my-2">или</span>
          <Button
            label="Зарегистрироваться"
            class="w-full"
            severity="secondary"
            @click="showRegister = true"
          />
          <LoginOauthForm
            :collection="collection"
            @success="onSuccess"
            @error="onError('Не удалось аутентифицироваться', $event)"
          />
        </template>
        <template v-else>
          <RegisterForm
            :collection="collection"
            @success="onSuccess"
            @error="onError('Не удалось зарегистрироваться', $event)"
          />
        </template>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import type { ClientResponseError } from "pocketbase";

const visible = defineModel<boolean>("visible", { required: true });

const userType = ref("Я владелец");
const userTypeOptions = ref(["Я владелец", "Я подрядчик"]);

const collection = computed(() => {
  return userType.value === "Я владелец" ? "users" : "contractors";
});

const toast = useToast();

const onSuccess = () => {
  visible.value = false;
};

const onError = (message: string, err: ClientResponseError) => {
  console.error(err);
  toast.add({
    severity: "error",
    summary: message,
    life: 3000,
  });
};

watch(
  () => visible.value,
  () => {
    showRegister.value = false;
  }
);

const showRegister = ref(false);
</script>

