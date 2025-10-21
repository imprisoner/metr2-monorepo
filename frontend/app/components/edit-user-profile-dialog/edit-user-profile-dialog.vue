<template>
  <Dialog v-model:visible="visible" header="Редактирование профиля" modal>
    <Fluid>
      <div class="flex">
        <div class="card flex flex-col gap-4 w-full">
          <div class="flex flex-col md:flex-row gap-4">
            <label class="flex flex-wrap gap-2 w-full">
              <span>Имя</span>
              <InputText v-model="form.displayName" type="text" />
            </label>
            <label class="flex flex-wrap gap-2 w-full">
              <span>Никнейм</span>
              <InputText v-model="form.nickname" type="text" />
            </label>
          </div>

          <label class="flex flex-wrap">
            <span>О себе</span>
            <Textarea v-model="form.about" rows="4" />
          </label>

          <div class="flex flex-col md:flex-row gap-4">
            <label class="flex flex-wrap gap-2 w-full">
              <span>Город</span>
              <Select
                id="state"
                v-model="form.location"
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
                v-model="form.gender"
                :options="genderOptions"
                option-label="label"
                option-value="value"
              />
            </label>
            <label class="flex flex-wrap gap-2 w-full">
              <span>Возраст</span>
              <InputNumber v-model.number="form.age" :min="18" :max="100" />
            </label>
          </div>

          <div class="flex justify-end mt-8">
            <Button class="ms-auto w-fit" label="Сохранить" @click="save" />
          </div>
        </div>
      </div>
    </Fluid>
  </Dialog>
</template>

<script setup lang="ts">
import { SelectButton } from "#components";
import { getAllCities } from "~/api/functions";
import { pb } from "~/api/pocketbase-client";
import type { UsersInfoRecord } from "~/types/pocketbase-types";

const visible = defineModel<boolean>("visible");

const { userInfo } =
  defineProps<{userInfo: UsersInfoRecord | undefined}>();

const emit = defineEmits<{
  (e: "save"): void;
}>();

const citiesResponse = await getAllCities()
const locationOptions = citiesResponse.map((city) => ({ name: city.name, value: city.id }))

const genderOptions = [
  { label: "мужской", value: "male" },
  { label: "женский", value: "female" },
];

const form = reactive({
  displayName: userInfo?.displayName || "",
  nickname: userInfo?.nickname || "",
  about: userInfo?.about || "",
  location: userInfo?.location || "",
  gender: userInfo?.gender || "",
  age: userInfo?.age || 18,
});

const save = async () => {
  if (userInfo) {
    await pb
      .collection("users_info")
      .update(userInfo.id, { ...form });
  } else {
    await pb
      .collection("users_info")
      .create({ ...form, user: useAuthStore().userInfo!.id });
  }

  emit("save");
};

</script>
