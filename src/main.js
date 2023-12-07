import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useUserStore } from './stores/userStore';
import { useCartStore } from './stores/cartStore';
import App from './App.vue';
import router from './routes/index';
import './style.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

const userStore = useUserStore();
const cartStore = useCartStore();
userStore.setPersistedProfile();
cartStore.setCart();
app.mount('#app');
