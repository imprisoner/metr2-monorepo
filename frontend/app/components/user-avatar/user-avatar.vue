<template>
  <Avatar
    v-if="!editable"
    :label="label"
    shape="circle"
    :image="avatarUrl"
    size="xlarge"
  />
  <div v-else class="relative">
    <Button
      icon="pi pi-pencil"
      severity="info"
      rounded
      size="small"
      class="absolute -top-2 -right-2"
      @click="$emit('edit-avatar')"
    />
    <Avatar :label shape="circle" :image="avatarUrl" size="xlarge" />
  </div>
</template>

<script setup lang="ts">
const {
  name,
  avatar = undefined,
  editable = false,
} = defineProps<{
  name: string;
  avatar?: string;
  editable?: boolean;
}>();

defineEmits<{
  (e: "edit-avatar"): void;
}>();

const label = computed<string | undefined>(() => {
  if (avatar) {
    return undefined;
  }
  return name[0];
});

const avatarUrl = computed<string | undefined>(() => {
  if (avatar !== "") {
    return avatar;
  }
  return undefined;
});
</script>

