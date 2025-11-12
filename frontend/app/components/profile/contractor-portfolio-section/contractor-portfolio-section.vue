<template>
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
</template>

<script setup lang="ts">
import { getContractorPortfolio } from "~/api/functions";

const { userId } = defineProps<{
  isOwner?: boolean;
  userId: string;
}>();

const portfolio = await getContractorPortfolio(userId);
</script>

