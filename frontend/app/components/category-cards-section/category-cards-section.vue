<template>
  <section class="flex gap-4 mb-8 max-lg:flex-col">
    <Card class="category-card shadow-md">
      <template #header>
        <img
          src="~/assets/images/mkd.jpg"
          alt=""
          class="category-card__image"
        />
      </template>
      <template #title>
        <NuxtLink :to="`/category/flat`">
          <div class="text-center">Квартиры</div>
        </NuxtLink>
      </template>
    </Card>
    <Card class="category-card shadow-md">
      <template #header>
        <img
          src="~/assets/images/chd.jpg"
          alt=""
          class="category-card__image"
        />
      </template>
      <template #title>
        <NuxtLink :to="`/category/house`">
          <div class="text-center">Частные дома</div>
        </NuxtLink>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.categories {
  display: flex;
  gap: 20px;
}

.category-card {
  overflow: hidden;
  cursor: pointer;
  flex: 1;
}

.category-card__image {
  display: flex;
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>

