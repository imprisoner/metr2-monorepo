<template>
  <Form v-slot="$form" :resolver @submit="onFormSubmit">
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
    <div class="flex flex-col gap-1 mb-2">
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
    <div class="flex flex-col gap-1 mb-2">
      <label
        class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
        >Повторите пароль</label
      >
      <Password
        name="passwordConfirm"
        placeholder="Пароль"
        :toggle-mask="true"
        class="mb-4"
        fluid
        :feedback="false"
      />
      <Message
        v-if="$form.passwordConfirm?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form.passwordConfirm.error?.message }}</Message
      >
    </div>
    <div class="flex flex-col gap-1">
      <label
        class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
        >Ваше имя</label
      >
      <InputText
        name="name"
        placeholder="Введите имя"
        :toggle-mask="true"
        class="mb-4"
        fluid
        :feedback="false"
      />
      <Message
        v-if="$form.name?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form.name.error?.message }}</Message
      >
    </div>

    <div class="flex flex-col gap-4 items-center">
      <Button
        label="Зарегистрироваться"
        class="w-full"
        severity="secondary"
        type="submit"
      />
    </div>
  </Form>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@primevue/forms/form";
import type { ClientResponseError } from "pocketbase";
import {
  authenticateWithEmail,
  registerWithEmailAndPassword,
} from "~/api/functions";
import {
  registerFormResolver as resolver,
  type RegisterSchema,
} from "~/schemas";

const { collection } = defineProps<{
  collection: "contractors" | "users";
}>();

const emit = defineEmits<{
  (e: "success"): void;
  (e: "error", error: ClientResponseError): void;
}>();

const onFormSubmit = async ({ valid, values }: FormSubmitEvent) => {
  if (!valid) return;

  const data = values as RegisterSchema;

  try {
    await registerWithEmailAndPassword(collection, data);
    await authenticateWithEmail(collection, {
      email: data.email,
      password: data.password,
    });

    emit("success");
  } catch (error) {
    emit("error", error as ClientResponseError);
  }
};
</script>

