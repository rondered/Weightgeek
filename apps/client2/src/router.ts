import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { useAuthenticationStore } from "@/features/Authentication/stores";
import getMe from "@/features/Authentication/endpoints/me";

const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthenticationStore();

  try {
    await getMe();
    authStore.setIsLogged(true);
  } catch {
    authStore.setIsLogged(false);
  }

  switch (to?.meta?.layout) {
    case "authorized": {
      if (!authStore.isLogged) {
        next("/login");
      } else {
        next();
      }
    }
    case "unauthorized": {
      if (!authStore.isLogged) {
        next();
      } else {
        next("/");
      }
    }
  }
});
