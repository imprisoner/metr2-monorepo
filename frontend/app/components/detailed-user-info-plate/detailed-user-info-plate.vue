<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 relative">
      <Avatar :label="name[0]" shape="circle" :src="avatar" size="xlarge" />
      <div class="flex flex-col gap-0.5">
        <span class="text-base font-semibold">{{ name }}</span>
        <span class="text-xs text-gray-400">Был {{ lastSeen }} назад</span>
        <span class="text-xs text-gray-400">{{ location }}</span>
      </div>
    </div>
    <ul class="flex flex-col gap-2">
      <li><b>21</b> подписчик</li>
      <li><b>7</b> квартир читает</li>
      <li><b>7</b> подписчиков</li>
    </ul>
    <div class="flex gap-4">
      <Button
        v-if="isOwner"
        size="small"
        severity="success"
        label="Редактировать профиль"
        @click="emit('edit-profile')"
      />
      <template v-else>
        <Button size="small" severity="info" label="Подписаться" />
        <Button size="small" severity="info" label="Сообщение" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  name,
  avatar,
  location,
  lastSeen = "2 часа",
  isOwner = false,
} = defineProps<{
  name: string;
  avatar: string;
  location: string | undefined;
  lastSeen?: string;
  isOwner?: boolean;
}>();

const emit = defineEmits<{
  (e: 'edit-profile'): void
}>()
</script>

<style></style>

