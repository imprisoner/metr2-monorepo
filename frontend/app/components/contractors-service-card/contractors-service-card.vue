<template>
  <Fieldset
    :legend="capitalizeFirstLetter(name)"
    toggleable
    :collapsed="true"
    class="w-full"
    pt:content:class="relative pt-2"
  >
    <span class="font-bold mb-4 block">Цена - {{ computedPrice }}</span>
    <p v-if="description" class="m-0 text-gray-500">
      {{ description }}
    </p>
    <div v-if="isOwner" class="flex absolute top-0 right-0">
      <Button
        icon="pi pi-pencil"
        title="Редактировать"
        @click="$emit('edit')"
      />
    </div>
  </Fieldset>
</template>

<script setup lang="ts">
const {
  description = "",
  priceMin,
  priceMax,
  isOwner = false,
} = defineProps<{
  name: string;
  description?: string;
  priceMin: number;
  priceMax: number;
  isOwner?: boolean;
}>();

defineEmits<{
  (e: "edit"): void;
}>();

const computedPrice = computed(() => {
  if (priceMin === 0 && priceMax === 0) {
    return "по договорённости";
  }

  if (priceMin !== 0 && priceMax !== 0) {
    return `от ${priceMin} до ${priceMax}`;
  }

  if (priceMin !== 0) {
    return `от ${priceMin}`;
  }

  return `до ${priceMax}`
});
</script>

