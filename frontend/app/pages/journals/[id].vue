<template>
  <div>
    <h1>{{ journal.title }}</h1>
    <Panel>
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
</script>

<style></style>

