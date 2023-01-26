import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App);

app.use(createPinia(piniaPluginPersistedstate)).use(router).mount('#app');
