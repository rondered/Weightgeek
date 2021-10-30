import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { createPinia } from "pinia";

import App from "./App.vue";

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes
});

const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(createPinia());
vueApp.mount("#app");
