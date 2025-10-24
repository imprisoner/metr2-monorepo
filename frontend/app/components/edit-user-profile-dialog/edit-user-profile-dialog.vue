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
                <InputText type="text" name="displayName" />
                <Message
                  v-if="$form.displayName?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  >{{ $form.displayName.error?.message }}</Message
                >
              </label>
              <label class="flex flex-wrap gap-2 w-full">
                <span>Никнейм</span>
                <InputText name="nickname" type="text" />
                <Message
                  v-if="$form.nickname?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  >{{ $form.nickname.error?.message }}</Message
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
                <Select
                  id="state"
                  name="location"
                  :options="locationOptions"
                  option-label="name"
                  option-value="value"
                  placeholder="Ваш город"
                  class="w-full"
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
import { getAllCities } from "~/api/functions";
import { pb } from "~/api/pocketbase-client";
import type {
  ContractorsInfoRecord,
  UsersInfoRecord,
} from "~/types/pocketbase-types";
import type { FormSubmitEvent } from "@primevue/forms/form";
import { getProfileInfoResolver } from "~/schemas";

const visible = defineModel<boolean>("visible");

const { userInfo } = defineProps<{
  userInfo: UsersInfoRecord | ContractorsInfoRecord | undefined;
}>();

const emit = defineEmits<{
  (e: "save"): void;
}>();

const citiesResponse = await getAllCities();
const locationOptions = citiesResponse.map((city) => ({
  name: city.name,
  value: city.id,
}));

const genderOptions = [
  { label: "мужской", value: "male" },
  { label: "женский", value: "female" },
];

const initialValues = reactive({
  displayName: userInfo?.displayName || "",
  nickname: userInfo?.nickname || "",
  about: userInfo?.about || "",
  location: userInfo?.location || "",
  gender: userInfo?.gender || "",
  age: userInfo?.age,
});

const save = async ({ valid, states }: FormSubmitEvent) => {
  if (!valid) return;

  const newValues = Object.keys(states).reduce((acc, field) => {
    if (states[field]?.dirty) {
      acc[field] = states[field].value;
    }

    return acc
  }, {} as Record<string, unknown>);

  await pb.collection("users_info").update(userInfo!.id, { ...newValues });

  emit("save");
};

const resolver = getProfileInfoResolver("users");
</script>

