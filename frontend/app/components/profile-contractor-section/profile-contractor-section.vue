<template>
  <Panel header="О подрядчике" class="shadow-md mb-8">
    <!-- {{ contractorInfo.experienceYears }} лет опыта -->
  </Panel>
  <Panel class="shadow-md mb-8">
    <template #header>
      <PanelHeaderWithControls
        text="Услуги"
        button-label="Добавить услугу"
        :controls-show-condition="!!(isOwner && services?.length)"
        @button-click="onAddServiceClick"
      />
    </template>
    <ul v-if="services">
      <li
        v-for="service in services"
        :key="service.id"
        class="flex justify-between gap-8"
      >
        <div class="flex-1 flex justify-between">
          <span>
            {{ capitalizeFirstLetter(service.expand.specialtyService.name) }}
          </span>
          <span class="font-bold">
            <template v-if="service.priceMin">
              от {{ service.priceMin }} ₽
            </template>
            <template v-else>по договорённости</template>
          </span>
        </div>
        <i
          class="pi pi-pencil cursor-pointer"
          @click="onEditContractorsService(service.id)"
        />
      </li>
    </ul>
    <NoItemsSection
      v-else
      text="У подярдчика нет добавленных услуг"
      button-label="Добавить услугу"
      :controls-show-condition="!!isOwner"
      @button-click="showAddServiceDialog = true"
    />
  </Panel>
  <!--  -->
  <Panel class="shadow-md mb-8" pt:content:class="flex flex-col gap-4">
    <template #header>
      <PanelHeaderWithControls
        text="Портфолио"
        button-label="Добавить статью в портфолио"
        button-link="/write/portfolio"
        :controls-show-condition="!!(isOwner && portfolio.length)"
      />
    </template>
    <template v-if="portfolio.length">
      <ContractorPostCard
        v-for="post in portfolio"
        :key="post.id"
        :image="post.previewImage || ''"
        :post-id="post.id"
        :title="post.title"
        :likes="0"
        :comments="0"
        :text="post.content"
        :publish-date="new Date(post.created).toLocaleDateString()"
      />
    </template>
    <NoItemsSection
      v-else
      text="У подрядчика нет портфолио"
      button-label="Добавить статью"
      button-link="/write/portfolio"
      button-size=""
      :controls-show-condition="!!isOwner"
    />
  </Panel>
  <!--  -->
  <Panel class="shadow-md">
    <template #header>
      <PanelHeaderWithControls
        text="Блог"
        button-label="Добавить статью"
        button-link="/write"
        :controls-show-condition="!!isOwner"
      />
    </template>
    <template v-if="blogArticles.length">
      <BlogArticleCard
        v-for="post in blogArticles"
        :key="post.id"
        :post="post"
        :link="`/contractors/blog/${post.id}`"
      />
    </template>
    <NoItemsSection
      v-else
      text="Здесь ещё нет статей"
      button-label="Добавить статью"
      button-link="/write"
      :controls-show-condition="!!isOwner"
    />
  </Panel>
  <AddContractorServiceDialog
    v-if="showAddServiceDialog"
    v-model:visible="showAddServiceDialog"
    :contractors-service="serviceToEdit"
    @save="onServiceSaved"
  />
</template>

<script setup lang="ts">
import type { ContractorsPostsResponseWithExpand } from "~/types/api.types";
import type {
  ContractorsBlogPostsRecord,
  ContractorsInfoRecord,
  ContractorsServicesResponse,
  DictSpecialtyServicesRecord,
} from "~/types/pocketbase-types";

const { services } = defineProps<{
  isOwner?: boolean;
  services:
    | ContractorsServicesResponse<{
        specialtyService: DictSpecialtyServicesRecord;
      }>[]
    | undefined;
  portfolio: (ContractorsPostsResponseWithExpand & {
    previewImage: string | undefined;
  })[];
  contractorInfo: ContractorsInfoRecord | undefined;
  blogArticles: (ContractorsBlogPostsRecord & {
    previewImage: string | undefined;
  })[];
}>();

const showAddServiceDialog = ref(false);

const emit = defineEmits<{
  (e: "service-saved"): void;
}>();

const onServiceSaved = async () => {
  showAddServiceDialog.value = false;
  emit("service-saved");
};

const serviceToEdit = ref<
  | ContractorsServicesResponse<{
      specialtyService: DictSpecialtyServicesRecord;
    }>
  | undefined
>();

const onEditContractorsService = (serviceId: string) => {
  serviceToEdit.value = services?.find((service) => service.id === serviceId);
  showAddServiceDialog.value = true;
};

const onAddServiceClick = () => {
  serviceToEdit.value = undefined
  showAddServiceDialog.value = true
}
</script>

