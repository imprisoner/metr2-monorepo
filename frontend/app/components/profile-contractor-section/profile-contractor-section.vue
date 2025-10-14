<template>
  <Panel header="О подрядчике" class="shadow-md mb-8">
    <!-- {{ contractorInfo.experienceYears }} лет опыта -->
  </Panel>
  <Panel class="shadow-md mb-8">
    <template #header>
      <div class="flex justify-between items-center w-full">
        <span class="font-bold">Услуги</span>
        <Button
          v-if="isOwner && services?.length"
          severity="info"
          size="small"
          @click="showAddServiceDialog = true"
        >
          Добавить услугу
        </Button>
      </div>
    </template>
    <ul v-if="services">
      <li
        v-for="service in services"
        :key="service.id"
        class="flex justify-between"
      >
        <span>
          {{ capitalizeFirstLetter(service.expand.specialtyService.name) }}
        </span>
        <span class="font-bold">
          <template v-if="service.priceMin">
            от {{ service.priceMin }} ₽
          </template>
          <template v-else>по договорённости</template>
        </span>
      </li>
    </ul>
    <div v-else class="flex flex-col items-center justify-center py-8">
      <span class="text-gray-500 mb-2">У подярдчика нет добавленных услуг</span>
      <Button
        v-if="isOwner"
        severity="info"
        @click="showAddServiceDialog = true"
      >
        Добавить услугу
      </Button>
    </div>
  </Panel>
  <Panel class="shadow-md mb-8" pt:content:class="flex flex-col gap-4">
    <template #header>
      <div class="flex justify-between items-center w-full">
        <span class="font-bold">Портфолио</span>
        <Button
          v-if="isOwner && portfolio.length"
          severity="info"
          @click="showAddPortfolioDialog = true"
        >
          Добавить статью в портфолио
        </Button>
      </div>
    </template>
    <template v-if="portfolio.length">
      <ContractorPostCard
        v-for="post in portfolio"
        :key="post.id"
        :post-id="post.id"
        :title="post.title"
        :likes="0"
        :comments="0"
        :text="post.content"
        :publish-date="new Date(post.created).toLocaleDateString()"
      />
    </template>
    <div v-else class="flex flex-col items-center justify-center py-8">
      <span class="text-gray-500 mb-2">У пользователя нет портфолио</span>
      <Button
        v-if="isOwner"
        severity="info"
        @click="showAddPortfolioDialog = true"
      >
        Добавить статью в портфолио
      </Button>
    </div>
  </Panel>
  <!--  -->
  <Panel class="shadow-md">
    <template #header>
      <div class="flex justify-between items-center w-full">
        <span class="font-bold">Блог</span>
        <Button
          v-if="isOwner"
          v-slot="slotProps"
          severity="info"
          size="small"
          as-child
        >
          <NuxtLink to="/write" :class="slotProps.class">
            Добавить статью
          </NuxtLink>
        </Button>
      </div>
    </template>
    <template v-if="blogArticles.length">
      <Card v-for="post in blogArticles" :key="post.id" class="overflow-hidden">
        <template #header>
          <NuxtImg
            v-if="post.previewImage"
            :src="post.previewImage"
            class="w-full object-cover"
          />
        </template>
        <template #title>
          <div class="flex justify-between">
            <NuxtLink
              :to="`/contractors/blog/${post.id}`"
              class="font-bold text-xl"
              >{{ post.title }}</NuxtLink
            >
          </div>
        </template>
      </Card>
    </template>
    <div v-else class="flex flex-col items-center justify-center py-8">
      <span class="text-gray-500 mb-2">Здесь ещё нет статей</span>
      <Button
        v-if="isOwner"
        v-slot="slotProps"
        severity="info"
        size="small"
        as-child
      >
        <NuxtLink to="/write" :class="slotProps.class">
          Добавить статью
        </NuxtLink>
      </Button>
    </div>
  </Panel>
  <AddContractorServiceDialog
    v-model:visible="showAddServiceDialog"
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

defineProps<{
  isOwner?: boolean;
  services:
    | ContractorsServicesResponse<{
        specialtyService: DictSpecialtyServicesRecord;
      }>[]
    | undefined;
  portfolio: ContractorsPostsResponseWithExpand[];
  contractorInfo: ContractorsInfoRecord | undefined;
  blogArticles: (ContractorsBlogPostsRecord & {
    previewImage: string | undefined;
  })[];
}>();

const showAddServiceDialog = ref(false);
const showAddPortfolioDialog = ref(false);

const emit = defineEmits<{
  (e: "service-saved"): void;
}>();

const onServiceSaved = async () => {
  showAddServiceDialog.value = false;
  emit("service-saved");
};
</script>

