<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 relative">
      <UserAvatar
        :name="name"
        :avatar="avatar"
        :editable="isOwner"
        @edit-avatar="onEditAvatarClick"
      />
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
      <template v-if="isOwner">
        <Button
          size="small"
          severity="success"
          label="Редактировать профиль"
          @click="emit('edit-profile')"
        />
        <Button
          v-if="role === 'owner'"
          size="small"
          severity="info"
          label="Стать подрядчиком"
          @click="emit('become-contractor')"
        />
      </template>
      <template v-else>
        <Button size="small" severity="info" label="Подписаться" />
        <Button size="small" severity="info" label="Сообщение" />
      </template>
    </div>
  </div>
  <AddAvatarDialog
    v-if="isOwner && showAddAvatarDialog"
    v-model:visible="showAddAvatarDialog"
    @save="onAvatarSave"
  />
</template>

<script setup lang="ts">
import type { UsersRoleOptions } from '~/types/pocketbase-types';

const {
  name,
  avatar = undefined,
  location,
  lastSeen = "2 часа",
  isOwner = false,
} = defineProps<{
  name: string;
  avatar?: string;
  location: string | undefined;
  lastSeen?: string;
  isOwner?: boolean;
  role: UsersRoleOptions;
}>();

const emit = defineEmits<{
  (e: "edit-profile" | "save-avatar" | "become-contractor"): void;
}>();

const showAddAvatarDialog = ref(false);

const onEditAvatarClick = () => {
  showAddAvatarDialog.value = true;
};

const onAvatarSave = () => {
  emit("save-avatar");
  showAddAvatarDialog.value = false;
};
</script>

