<template>
  <Dialog v-model:visible="visible" modal>
    <div class="flex flex-col items-center justify-center">
      <template v-if="!showRegister">
        <div
          class="w-full bg-surface-0 dark:bg-surface-900 p-8 sm:px-20"
          style="border-radius: 53px"
        >
          <div>
            <SelectButton
              v-model="userType"
              :options="userTypeOptions"
              class="mb-8"
            />
            <label
              for="email1"
              class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
              >Ваш E-mail</label
            >
            <InputText
              id="email1"
              v-model="email"
              type="text"
              placeholder="Почта"
              class="w-full md:w-[30rem] mb-8"
            />

            <label
              for="password1"
              class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
              >Пароль</label
            >
            <Password
              id="password1"
              v-model="password"
              placeholder="Пароль"
              :toggle-mask="true"
              class="mb-4"
              fluid
              :feedback="false"
            />

            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
              <div class="flex items-center">
                <Checkbox
                  id="rememberme1"
                  v-model="checked"
                  binary
                  class="mr-2"
                />
                <label for="rememberme1">Запомнить меня</label>
              </div>
              <span
                class="font-medium no-underline ml-2 text-right cursor-pointer text-primary"
                >Забыли пароль?</span
              >
            </div>

            <div class="flex flex-col gap-4 items-center">
              <Button label="Войти" class="w-full" @click="authenticate" />
              <span>или</span>
              <Button
                label="Зарегистрироваться"
                class="w-full"
                severity="secondary"
                @click="showRegister = true"
              />
            </div>

            <div class="flex flex-col items-center justify-center mt-8 gap-8">
              <span>Авторизоваться с</span>
              <div class="flex gap-4 justify-center">
                <SocialLoginButton
                  v-for="provider in providers"
                  :key="provider"
                  :provider="provider"
                  @click="authenticateWithProvider(provider)"
                />
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div
          class="w-full bg-surface-0 dark:bg-surface-900 p-8 sm:px-20"
          style="border-radius: 53px"
        >
          <SelectButton
            v-model="userType"
            :options="userTypeOptions"
            class="mb-8"
          />

          <label
            for="email1"
            class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
            >Ваш E-mail</label
          >
          <InputText
            id="email1"
            v-model="email"
            type="text"
            placeholder="Почта"
            class="w-full md:w-[30rem] mb-8"
          />

          <label
            for="password1"
            class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
            >Пароль</label
          >
          <Password
            id="password1"
            v-model="password"
            placeholder="Пароль"
            :toggle-mask="true"
            class="mb-4"
            fluid
            :feedback="false"
          />

          <label
            class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
            >Повторите пароль</label
          >
          <Password
            v-model="passwordConfirm"
            placeholder="Пароль"
            :toggle-mask="true"
            class="mb-4"
            fluid
            :feedback="false"
          />

          <label
            class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
            >Ваше имя</label
          >
          <InputText
            v-model="name"
            placeholder="Введите имя"
            :toggle-mask="true"
            class="mb-4"
            fluid
            :feedback="false"
          />

          <div class="flex flex-col gap-4 items-center">
            <Button
              label="Зарегистрироваться"
              class="w-full"
              severity="secondary"
              @click="registerWithEmailAndPassword"
            />
          </div>
        </div>
      </template>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";

const visible = defineModel<boolean>("visible", { required: true });

const email = ref("");
const password = ref("");
const checked = ref(false);

const userType = ref("Я владелец");
const userTypeOptions = ref(["Я владелец", "Я подрядчик"]);

const collection = computed(() => {
  return userType.value === "Я владелец" ? "users" : "contractors";
});

const authenticate = async () => {
  try {
    await pb
      .collection(collection.value)
      .authWithPassword(email.value, password.value);
    visible.value = false;
  } catch {
    alert("не удалось аутентифицироваться");
  }
};

const providers = ["google", "yandex", "vk"] as const;

const authenticateWithProvider = async (
  provider: (typeof providers)[number]
) => {
  try {
    await pb.collection(collection.value).authWithOAuth2({
      provider,
    });
    visible.value = false;
  } catch (error) {
    console.error("OAuth2 authentication failed:", error);
    alert("не удалось аутентифицироваться через Google");
  }
};

const passwordConfirm = ref("");
const name = ref("");

const showRegister = ref(false);

const registerWithEmailAndPassword = async () => {
  if (passwordConfirm.value !== password.value) alert("Пароли не совпадают");

  await pb.collection(collection.value).create({
    email: email.value,
    name: name.value,
    password: password.value,
    passwordConfirm: passwordConfirm.value
  })

  await authenticate()

  visible.value = false
};

watch(() => visible.value, () => {
  showRegister.value = false
})
</script>

