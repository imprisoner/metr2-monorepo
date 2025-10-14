<template>
  <Dialog
    v-model:visible="visible"
    closable
    modal
    header="Добавить квартиру"
    class="w-[600px]"
    pt:content:class="flex flex-wrap flex-col overflow-auto gap-y-8 gap-x-4"
  >
    <Form
      v-slot="$form"
      class="flex flex-col gap-4 w-full"
      :initial-values
      :resolver
      @submit="onFormSubmit"
    >
      <div class="flex flex-col gap-1">
        <InputText
          name="nickname"
          type="text"
          placeholder="Никнейм квартиры"
          fluid
        />
        <Message
          v-if="$form.nickname?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.nickname.error?.message }}</Message
        >
      </div>
      <div class="flex flex-col gap-1">
        <Textarea
          name="description"
          type="text"
          placeholder="Описание квартиры"
          fluid
        />
        <Message
          v-if="$form.description?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.description.error?.message }}</Message
        >
      </div>

      <!--  -->

      <div
        v-for="filter in flatFilters"
        :key="filter.field"
        class="flex flex-col gap-1"
      >
        <Select
          :name="filter.field"
          :placeholder="selectPlaceholdersByField[filter.field]"
          fluid
          :options="filter.values"
          option-label="name"
          option-value="id"
        />
        <Message
          v-if="$form[filter.field]?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form[filter.field]?.error?.message }}</Message
        >
      </div>

      <!--  -->

      <ImagesUploadComponent
        v-model:deleted-images="imagesToDelete"
        :images="flat?.images ?? []"
        @select-file="onSelectFile"
        @remove-file="onRemoveFile"
      />

      <Button type="submit" severity="secondary" label="Сохранить" />
    </Form>
  </Dialog>
</template>

<script setup lang="ts">
import type { FlatsRecord } from "~/types/pocketbase-types";
import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import type { FormSubmitEvent } from "@primevue/forms/form";
import { getFlatFilters } from "~/api/functions";
import { pb } from "~/api/pocketbase-client";
import type {
  FileUploadRemoveEvent,
  FileUploadSelectEvent,
} from "primevue/fileupload";

const { flat } = defineProps<{
  flat: FlatsRecord | undefined;
}>();

const visible = defineModel<boolean>("visible", { required: true });

const toast = useToast();

type FormFields = Pick<
  FlatsRecord,
  | "nickname"
  | "description"
  | "houseSeries"
  | "flatType"
  | "squareM2"
  | "finishing"
  | "objectStatus"
  | "buildingCategory"
>;

const initialValues = ref<FormFields>({
  nickname: flat?.nickname ?? "",
  description: flat?.description ?? "",
  houseSeries: flat?.houseSeries ?? "",
  flatType: flat?.flatType ?? "",
  squareM2: flat?.squareM2 ?? "",
  finishing: flat?.finishing ?? "",
  objectStatus: flat?.objectStatus ?? "",
  buildingCategory: flat?.buildingCategory ?? "",
});

const resolver = zodResolver(
  z.object({
    nickname: z.string().min(1, { message: "Никнейм квартиры обязателен" }),
    description: z
      .string()
      .nonempty({ message: "Описание квартиры обязательно" }),
    houseSeries: z.string().nonempty({ message: "Серия дома обязательна" }),
    flatType: z.string().nonempty({ message: "Тип квартиры обязателен" }),
    squareM2: z.string().nonempty({ message: "Площадь квартиры обязательна" }),
    finishing: z.string().nonempty({ message: "Отделка квартиры обязательна" }),
    objectStatus: z.string().nonempty({ message: "Статус объекта обязателен" }),
    buildingCategory: z.string().nonempty({ message: "Тип здания обязателен" }),
  })
);

const authStore = useAuthStore();

const newImages = ref<File[]>([]);

const onSelectFile = (e: FileUploadSelectEvent) => {
  newImages.value = e.files;
};

const onRemoveFile = (e: FileUploadRemoveEvent) => {
  newImages.value = e.files;
};

const flatFilters = await getFlatFilters();

const selectPlaceholdersByField: Record<string, string> = {
  houseSeries: "Серия дома",
  flatType: "Тип квартиры",
  squareM2: "Площадь",
  finishing: "Тип отделки",
  buildingCategory: "Тип здания",
  objectStatus: "Статус объекта",
};

const imagesToDelete = ref<string[]>([]);

const createNewFlat = async (values: FormFields) => {
  await pb.collection("flats").create({
    ...values,
    "images-": imagesToDelete.value.map((item) => {
      const arr = item.split("/");
      return arr[arr.length - 1];
    }),
    "images+": newImages.value,
    user: authStore.userInfo?.id,
  });
};

const editFlat = async (id: string, values: FormFields) => {
  await pb.collection("flats").update(id, {
    ...values,
    "images-": imagesToDelete.value.map((item) => {
      const arr = item.split("/");
      return arr[arr.length - 1];
    }),
    "images+": newImages.value,
    user: authStore.userInfo?.id,
  });
};

const onFormSubmit = async ({ valid, values }: FormSubmitEvent) => {
  if (!valid) return;

  if (flat?.id) {
    editFlat(flat.id, values as FormFields)
  } else {
    createNewFlat(values as FormFields)
  }

  toast.add({
    severity: "success",
    summary: "Form is submitted.",
    life: 3000,
  });
};
</script>

