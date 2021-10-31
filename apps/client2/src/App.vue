<script setup lang="ts">
import getMe from "@/features/Authentication/endpoints/me";
import { useAuthenticationStore } from "@/features/Authentication/stores";

const authStore = useAuthenticationStore();

onMounted(async () => {
  try {
    await getMe();
    authStore.setIsLogged(true);
  } catch {
    authStore.setIsLogged(false);
  }
});
</script>

<template>
  <router-view />
</template>
