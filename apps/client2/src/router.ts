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

router.beforeResolve;

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthenticationStore();

  try {
    await getMe();
    authStore.setIsLogged(true);
  } catch {
    authStore.setIsLogged(false);
  }

  if (to.meta.layout == "authorized") {
    if (!authStore.isLogged) {
      console.log(authStore.isLogged);
      next("/login");
    }
    next();
  }
  next();
});
