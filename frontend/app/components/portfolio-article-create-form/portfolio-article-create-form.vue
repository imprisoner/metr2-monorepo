<template>
  <Panel :header="panelHeaderText" pt:content:class="flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <label class="font-semibold text-surface-500" for="title">
        Заголовок записи
      </label>
      <InputText id="title" v-model="title" aria-describedby="title" />
    </div>
    <RichTextEditor
      v-model="content"
      @images-updated="onImagesUpdatedInTextEditor"
    />
    <div class="flex flex-col">
      <label class="font-semibold text-surface-500 mb-8"
        >Выберите фото для превью</label
      >
      <div class="flex gap-4">
        <img
          v-for="(image, index) in uploadedImages"
          :key="index"
          :src="image"
          class="w-[120px] h-[120px] object-cover rounded-lg"
          :class="{
            'border-4 border-blue-500': previewImageIndex === index,
            'cursor-pointer': true,
          }"
          @click="previewImageIndex = index"
        />
      </div>
    </div>
    <!--  -->
    <div class="flex flex-col">
      <label class="font-semibold text-surface-500 mb-8">Выберите услуги</label>
      <MultiSelect
        v-model="selectedServices"
        :options="contractorsServicesOptions"
        option-label="name"
        option-value="id"
        filter
        :show-toggle-all="contractorsServicesOptions.length > 5"
      />
    </div>
    <!-- Удалённые услуги  -->
    <PortfolioArticleFormDeletedServices
      v-if="deletedServices?.length"
      :services="deletedServices!"
      @remove-service="onRemoveDeletedService"
    />
    <!--  -->
    <div class="flex justify-end gap-2">
      <ButtonLink
        button-size=""
        label="Отмена"
        button-severity="secondary"
        :to="cancelButtonLink"
      />
      <Button label="Сохранить" @click="save" />
    </div>
  </Panel>
</template>

<script setup lang="ts">
import { pb } from "~/api/pocketbase-client";
import type {
  ContractorsServicesResponse,
  DictSpecialtyServicesRecord,
} from "~/types/pocketbase-types";

interface ArticleData {
  title: string;
  previewImageIndex: number;
  content: string;
  images: string[];
  contractorServices: string[];
}

const {
  articleData = {
    title: "",
    previewImageIndex: 0,
    content: "",
    images: [],
    contractorServices: [],
  },
  articleId = undefined,
} = defineProps<{
  articleData?: ArticleData;
  articleId?: string;
}>();

const mode = computed(() => (articleId ? "edit" : "create"));

const panelHeaderText = computed(() =>
  mode.value === "create" ? "Создать запись" : "Редактировать запись"
);

const title = ref(articleData.title);
const previewImageIndex = ref(articleData.previewImageIndex);
const content = ref(articleData.content);

const uploadedImages = ref<string[]>(articleData.images);

const imageFiles = computed(() =>
  uploadedImages.value.map((str, i) => base64ToFile(str, `image_${i}.png`))
);

const onImagesUpdatedInTextEditor = (base64images: string[]) => {
  uploadedImages.value = base64images;
};

const authStore = useAuthStore();

const collection = "contractors_posts";
const authorFieldName = "contractor";

const body = computed(() => ({
  title: title.value || "Без названия",
  content: content.value,
  previewImageIndex: previewImageIndex.value || 0,
  images: imageFiles.value,
  [authorFieldName]: authStore.userInfo!.id,
  contractorServices: selectedServices.value,
}));

const router = useRouter();

const save = async () => {
  let response;

  if (mode.value === "create") {
    response = await pb.collection(collection).create(body.value);
  } else {
    response = await pb.collection(collection).update(articleId!, body.value);
  }

  const contentWithReplacedImages = replaceAllImageSrcs(
    content.value,
    (_, index) => {
      return pb.files.getURL(response, response.images[index]!);
    }
  );

  await pb.collection(collection).update(response.id, {
    content: contentWithReplacedImages,
  });

  router.push(`/contractors/${authStore.userInfo!.hrid}`);
};

const getAvailableContractorsServicesOptions = async () => {
  const contractorsServicesResponse = await pb
    .collection("contractors_services")
    .getFullList<
      ContractorsServicesResponse<{
        specialtyService: DictSpecialtyServicesRecord;
      }>
    >({
      filter: `contractor="${authStore.userInfo!.id}"`,
      expand: "specialtyService",
    });

  const availableServices = contractorsServicesResponse.map((item) => {
    return item.expand.specialtyService;
  });

  return availableServices;
};

const contractorsServicesOptions =
  await getAvailableContractorsServicesOptions();

const removeDeletedServicesFromInitialData = () => {
  const actual: string[] = [];
  const deleted: string[] = [];

  articleData.contractorServices.forEach((serviceId) => {
    const existingServicesIds = contractorsServicesOptions.map(
      (item) => item.id
    );

    if (existingServicesIds.includes(serviceId)) {
      actual.push(serviceId);
    } else {
      deleted.push(serviceId);
    }
  });

  return [actual, deleted];
};

const [actualServices, deletedServices] =
  removeDeletedServicesFromInitialData();

const selectedServices = ref<string[]>(actualServices || []);
const selectedDeletedServices = ref<string[]>(deletedServices || []);

const onRemoveDeletedService = (id: string) => {
  selectedDeletedServices.value = selectedDeletedServices.value.filter(
    (serviceId) => serviceId !== id
  );
};

const cancelButtonLink =
  mode.value === "create"
    ? `/contractors/${authStore.userInfo?.hrid}`
    : `/contractors/posts/${articleId}`;
</script>

