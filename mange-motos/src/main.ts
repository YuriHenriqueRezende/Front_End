import '@/assets/style/global.scss';

import { createApp } from 'vue'
import piniaPlugin from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';


const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPlugin)

app.use(pinia);

app.use(router)

app.mount('#app')
