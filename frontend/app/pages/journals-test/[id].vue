<template>
  <div>
    <h1>{{ journal.title }}</h1>
    <Panel>
      <!-- <div class="mb-8">
        <SmallUserInfoPlate :user-id="journal.user" class="mb-8"/>
      </div> -->
      <div class="content" v-html="journal.content" />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { pb } from '~/api/pocketbase-client';

const getOneTestJournal = async (id: string) => {
  const record = await pb
    .collection("journals_test")
    .getOne(id);
  return record;
};

const route = useRoute();

const journalId = route.params.id as string;

const journal = await getOneTestJournal(journalId)
</script>

<style></style>

