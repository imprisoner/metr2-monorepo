<template>
  <Dialog v-model:visible="visible" header="Редактирование профиля" modal>
    <Form
      v-slot="$form"
      class="flex flex-col gap-4 w-full"
      :initial-values
      :resolver
      @submit="save"
    >
      <Fluid>
        <div class="flex">
          <div class="card flex flex-col gap-4 w-full">
            <div class="flex flex-col md:flex-row gap-4">
              <label class="flex flex-wrap gap-2 w-full">
                <span>Имя</span>
                <InputText type="text" name="name" />
                <Message
                  v-if="$form.name?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  >{{ $form.name.error?.message }}</Message
                >
              </label>
              <label class="flex flex-wrap gap-2 w-full">
                <span>Никнейм</span>
                <InputText name="username" type="text" />
                <Message
                  v-if="$form.username?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  >{{ $form.username.error?.message }}</Message
                >
              </label>
            </div>

            <label class="flex flex-wrap">
              <span>О себе</span>
              <Textarea name="about" rows="4" />
            </label>

            <div class="flex flex-col md:flex-row gap-4">
              <label class="flex flex-wrap gap-2 w-full">
                <span>Город</span>
                <CitySearchSingle
                  :initial-city="userInfo?.location"
                  @change="onCityChange"
                />
              </label>
              <label class="flex flex-col gap-2 w-full">
                <span>Пол</span>
                <SelectButton
                  name="gender"
                  :options="genderOptions"
                  option-label="label"
                  option-value="value"
                  fluid
                />
              </label>
              <label class="flex flex-wrap gap-2 w-full">
                <span>Возраст</span>
                <InputNumber name="age" :min="18" :max="100" />
              </label>
            </div>

            <div class="flex justify-end mt-8">
              <Button class="ms-auto w-fit" label="Сохранить" type="submit" />
            </div>
          </div>
        </div>
      </Fluid>
    </Form>
  </Dialog>
</template>

<script setup lang="ts">
import { SelectButton } from "#components";
import { pb } from "~/api/pocketbase-client";
import type {
  DictCitiesRecord,
  UserProfilesRecord,
} from "~/types/pocketbase-types";
import type { FormSubmitEvent } from "@primevue/forms/form";
import { getProfileInfoResolver } from "~/schemas";
import { updateUser } from "~/api/functions";

const visible = defineModel<boolean>("visible");

const { userInfo } = defineProps<{
  userInfo: UserProfilesRecord & {
    username: string;
    name: string;
    location: DictCitiesRecord | undefined;
  };
}>();

const emit = defineEmits<{
  (e: "save"): void;
}>();

const genderOptions = [
  { label: "мужской", value: "male" },
  { label: "женский", value: "female" },
];

const initialValues = reactive({
  about: userInfo.about || "",
  gender: userInfo.gender || "",
  age: userInfo.age,
  name: userInfo.name || "",
  username: userInfo.username || "",
});

const cityId = ref<string>(userInfo?.location?.id ?? "");

const onCityChange = (id: string) => {
  cityId.value = id;
};

const accountFields = ["username", "name", "location"];

const save = async ({ valid, states }: FormSubmitEvent) => {
  if (!valid) return;

  const newValues = Object.keys(states).reduce(
    (acc, field) => {
      if (!states[field]?.dirty) {
        return acc;
      }

      if (accountFields.includes(field)) {
        acc.accountData[field] = states[field].value;
      } else {
        acc.profileData[field] = states[field].value;
      }

      return acc;
    },
    { accountData: {}, profileData: {} } as {
      accountData: Record<string, unknown>;
      profileData: Record<string, unknown>;
    }
  );

  const { accountData, profileData } = newValues;
  
  if (cityId.value !== userInfo.location?.id) {
    accountData.location = cityId.value
  }

  if (Object.keys(accountData).length !== 0) {
    await updateUser(userInfo.user, accountData)
  }

  if (Object.keys(profileData).length !== 0) {
    await pb
      .collection("user_profiles")
      .update(userInfo!.id, { ...profileData, location: cityId.value });
  }

  emit("save");
  visible.value = false;
};

const resolver = getProfileInfoResolver("users");
</script>

