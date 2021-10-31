import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { useAuthenticationStore } from '@/features/Authentication/stores'

const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

    const authStore = useAuthenticationStore();

    if (to.meta.layout == "authorized") {
      if (!authStore.isLogged) {
        next('/login')
      }
    }
    next();
});
