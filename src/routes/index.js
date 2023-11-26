import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Home.vue';
import Catalog from '../views/Catalog/Catalog.vue';
import Blog from '../views/Blog/Blog.vue';
import Login from '../views/user/Login.vue';
import Register from '../views/user/Register.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/coffe-catalog', component: Catalog },
  { path: '/articles', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
