import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from '@/router/router'
import i18n from "@/i18n";

const pinia = createPinia(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia).use(router).use(i18n).mount('#app');
