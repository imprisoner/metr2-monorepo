<template>
  <div>
    <div class="flex items-center gap-8">
      <h1>{{ userResponse.name }}</h1>
    </div>
    <TwoSectionContainer>
      <template #left>
        <template v-if="userResponse.role === 'contractor'">
          <ProfileContractorCitiesSection
            :user-id="userResponse.id"
            :is-owner="isOwner"
          />
          <!--  -->
          <ProfileContractorServicesSection
            :user-id="userResponse.id"
            :is-owner="isOwner"
          />
        </template>
        <!--  -->
        <ProfileFlatsSection :user-id="userResponse.id" :is-owner="isOwner" />
        <ProfilePostsSection
          :user-id="userResponse.id"
          :is-owner="isOwner"
          :user-role="userResponse.role"
        />
      </template>
      <template #right>
        <Panel class="shadow-md h-fit">
          <DetailedUserInfoPlate
            :avatar="userResponse.avatar"
            :location="userProfile.location?.name || 'Нет локации'"
            :name="userResponse.name"
            :is-owner="isOwner"
            :role="userResponse.role"
            @edit-profile="showEditProfileDialog"
            @save-avatar="onNewData"
            @become-contractor="onBecomeContractor"
          />
        </Panel>
        <Panel toggleable header="Обо мне" class="shadow-md">
          {{ userProfile?.about }}
        </Panel>
      </template>
    </TwoSectionContainer>
    <EditUserProfileDialog
      v-if="editProfileDialogVisibility"
      v-model:visible="editProfileDialogVisibility"
      :user-info="userProfile"
      @save="onNewData"
    />
  </div>
</template>

<script setup lang="ts">
import { getUserProfile, tryToRefreshToken, updateUser } from "~/api/functions";
import { UsersRoleOptions } from "~/types/pocketbase-types";

const username = useRoute().params.id as string;

const userResponse = ref(await getUserProfile(username));

const userProfile = computed(() => ({
  username: userResponse.value.username,
  name: userResponse.value.name,
  ...userResponse.value.expand.user_profiles_via_user,
  location: userResponse.value.expand.location,
}));

const authStore = useAuthStore();

const isOwner = computed(() => {
  if (authStore.isAuthorized) {
    return authStore.userInfo!.username === username;
  }

  return false;
});

const editProfileDialogVisibility = ref(false);

const showEditProfileDialog = () => {
  editProfileDialogVisibility.value = true;
};

const { push } = useRouter();

const onNewData = async () => {
  userResponse.value = await getUserProfile(authStore.userInfo!.username);
  // redirect if username has changed
  if (userResponse.value.username !== username) {
    push(`/users/${userResponse.value.username}`);
  }
};

const onBecomeContractor = async () => {
  await updateUser(authStore.userInfo!.id, {
    role: UsersRoleOptions.contractor,
  });
  await tryToRefreshToken();
  window.location.reload();
};
</script>

