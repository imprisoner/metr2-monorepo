<template>
  <Form
    v-slot="$form"
    :resolver
    style="border-radius: 53px"
    @submit="onFormSubmit"
  >
    <div class="flex flex-col gap-1 mb-2">
      <label
        for="email"
        class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
        >Ваш E-mail</label
      >
      <InputText name="email" type="text" placeholder="Почта" fluid />
      <Message
        v-if="$form.email?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form.email.error?.message }}</Message
      >
    </div>
    <div class="flex flex-col gap-1">
      <label
        for="password"
        class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
        >Пароль</label
      >
      <Password
        name="password"
        placeholder="Пароль"
        :toggle-mask="true"
        fluid
        :feedback="false"
      />
      <Message
        v-if="$form.password?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form.password.error?.message }}</Message
      >
    </div>

    <div class="flex items-center justify-between mt-2 mb-8 gap-8">
      <div class="flex items-center">
        <Checkbox id="rememberme1" v-model="checked" binary class="mr-2" />
        <label for="rememberme1">Запомнить меня</label>
      </div>
      <span
        class="font-medium no-underline ml-2 text-right cursor-pointer text-primary"
        >Забыли пароль?</span
      >
    </div>

    <!-- <div class="flex flex-col gap-4 items-center"> -->
    <Button label="Войти" class="w-full" type="submit" />
    <!-- <span>или</span>
      <Button
        label="Зарегистрироваться"
        class="w-full"
        severity="secondary"
      />
    </div> -->
  </Form>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@primevue/forms/form";
import type { ClientResponseError } from "pocketbase";
import { authenticateWithEmail } from "~/api/functions";
import { loginFormResolver as resolver, type LoginSchema } from "~/schemas";

const checked = ref(false);

const { collection } = defineProps<{
  collection: "contractors" | "users";
}>();

const emit = defineEmits<{
  (e: "success"): void;
  (e: "error", error: ClientResponseError): void;
}>();

const onFormSubmit = async ({ valid, values }: FormSubmitEvent) => {
  if (!valid) return;
  try {
    await authenticateWithEmail(collection, values as LoginSchema);
    emit("success");
  } catch (error) {
    emit("error", error as ClientResponseError);
  }
};
</script>

