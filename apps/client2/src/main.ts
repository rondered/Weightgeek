import { createApp } from "vue";
import { router } from './router';
import { createPinia } from "pinia";
import 'virtual:windi.css'
import './style.css'

import App from "./App.vue";

const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(createPinia());
vueApp.mount("#app");
