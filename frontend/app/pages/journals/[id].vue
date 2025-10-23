<template>
  <div>
    <h1>{{ journal.title }}</h1>
    <Panel>
      <template #header>
        <div class="flex justify-end items-center w-full">
          <ButtonLink
            v-if="isOwner"
            label="Редактировать статью"
            :to="`/write/journals/flats/edit/${journalId}`"
          />
        </div>
      </template>
      <div class="mb-8">
        <SmallUserInfoPlate :user-id="journal.user" class="mb-8" />
      </div>
      <div class="content" v-html="journal.content" />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { getOneJournal } from "~/api/functions";

const route = useRoute();

const journalId = route.params.id as string;

const journal = await getOneJournal(journalId);

const authStore = useAuthStore();

const isOwner = journal.user === authStore.userInfo?.id;
</script>
