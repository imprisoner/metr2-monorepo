<template>
  <Panel header="Специализация">
    <!-- <div class="flex flex-col justify-center gap-8">
      <div v-for="filter in filters" :key="filter.field">
        <h3 class="font-bold mb-2">{{ filterTitlesMap[filter.field] }}</h3>
        <div class="flex flex-wrap items-center gap-4">
          <div
            v-for="filterValue in filter.values"
            :key="filterValue.id"
            class="flex gap-2"
          >
            <Checkbox
              v-model="chosenFilters[filter.field]"
              :value="filterValue.id"
            />
            <label class="text-sm">{{ filterValue.name }}</label>
          </div>
        </div>
      </div>
    </div> -->
  </Panel>
</template>

<script setup lang="ts">
  // const filters = [
  //   {
  //     field: ""
  //   }
  // ]
</script>