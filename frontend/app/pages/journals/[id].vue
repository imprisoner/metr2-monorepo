<template>
  <div>
    <h1>{{ journal.title }}</h1>
    <Panel>
      <template #header>
        <div class="flex justify-end items-center w-full">
          <Button
            v-if="isOwner"
            v-slot="slotProps"
            severity="info"
            size="small"
            as-child
          >
            <NuxtLink
              :to="`/write/journals/flats/edit/${journalId}`"
              :class="slotProps.class"
            >
              Редактировать статью
            </NuxtLink>
          </Button>
        </div>
      </template>
      <div class="mb-8">
        <SmallUserInfoPlate :user-id="journal.user" class="mb-8"/>
      </div>
      <div class="content" v-html="journal.content" />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { getOneJournal } from "~/api/functions";

const route = useRoute();

const journalId = route.params.id as string;

const journal = await getOneJournal(journalId)

const authStore = useAuthStore()

const isOwner = journal.user === authStore.userInfo?.id
</script>

<style></style>

