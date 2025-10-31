<template>
  <Dialog
    ref="dialog"
    v-model:visible="visible"
    closable
    close-on-escape
    header="Добавить аватар"
    modal
    maximizable
    :pt="{
      pcMaximizeButton: {
        root: {
          class: 'hidden'
        }
      }
    }"
    @show="maximize"
  >
    <div class="lg:w-[50vw] w-full mx-auto">
      <UserAvatarUploadForm @save="$emit('save')"/>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';

defineEmits<{
  (e: 'save'): void
}>();

const dialog = ref<InstanceType<typeof Dialog> | null>(null);
const visible = defineModel<boolean>("visible");

const maximize = () => {
  // @ts-expect-error workaround to force maximized view
  // forcing method to be invoked
  dialog.value!.maximize()
};
</script>

