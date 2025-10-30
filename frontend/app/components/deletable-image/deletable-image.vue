<template>
  <div
    class="relative w-[160px] h-[160px] rounded-lg overflow-hidden"
    :class="{ 'opacity-50': isDeleted }"
  >
    <i
      v-if="isDeleted"
      class="pi pi-times absolute top-4 right-4 cursor-pointer text-white"
      @click="$emit('cancel-delete', src)"
    />
    <i
      v-if="!isDeleted"
      class="pi pi-trash absolute top-4 right-4 cursor-pointer text-white"
      @click="$emit('delete', src)"
    />
    <img :src="src" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  isDeleted: boolean;
}>();

defineEmits<{
  (e: "delete" | "cancel-delete", src: string): void;
}>();
</script>
