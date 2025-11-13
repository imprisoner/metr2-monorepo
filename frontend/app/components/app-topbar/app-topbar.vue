<template>
  <div class="layout-topbar">
    <div class="layout-topbar-logo-container">
      <button
        class="layout-menu-button layout-topbar-action"
        @click="toggleMenu"
      >
        <i class="pi pi-bars" />
      </button>
      <NuxtLink to="/" class="layout-topbar-logo">
        <img src="/images/logo.png" width="40" height="40" />
        <span class="font-semibold">МЕТР2</span>
      </NuxtLink>
    </div>

    <div class="layout-topbar-actions">
      <Button
        v-if="!store.isAuthorized"
        label="Войти"
        variant="text"
        severity="contrast"
        @click="showLoginDialog = true"
      />
      <template v-else>
        <Button v-slot="slotProps" as-child variant="text">
          <NuxtLink
            :to="profileLink"
            :class="slotProps.class"
            class="layout-topbar-action"
          >
            <i class="pi pi-user" />
            <span>Профиль</span>
          </NuxtLink>
        </Button>
        <Button variant="text" severity="contrast" class="ms-2" @click="logout"
          >Выйти</Button
        >
      </template>
      <!-- <div class="layout-topbar-menu">
        <div class="layout-topbar-menu-content">
          <Button
            v-if="!store.isAuthorized"
            label="Войти"
            variant="text"
            severity="contrast"
            @click="showLoginDialog = true"
          />
          <template v-else>
            <Button v-slot="slotProps" as-child variant="text">
              <NuxtLink
                :to="profileLink"
                :class="slotProps.class"
                class="layout-topbar-action"
              >
                <i class="pi pi-user" />
                <span>Профиль</span>
              </NuxtLink>
            </Button>
            <Button
              variant="text"
              severity="contrast"
              class="ms-2"
              @click="logout"
              >Выйти</Button
            >
          </template>
        </div>
      </div> -->
    </div>
  </div>
  <LoginDialog v-model:visible="showLoginDialog" />
</template>

<script setup lang="ts">
const { toggleMenu } = useLayout();

const store = useAuthStore();

const logout = () => {
  store.logout();
  navigateTo("/");
};

const showLoginDialog = ref(false);

const profileLink = computed(() => {
  return `/users/${store.userInfo?.username}`;
});
</script>

