import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/userStore';

import Home from '../views/Home/Home.vue';
import Cart from '../views/Cart.vue';
import NotFound from '../views/NotFound.vue';

import Catalog from '../views/Catalog/Catalog.vue';
import Product from '../views/Product.vue';
import ProductCreate from '../views/ProductCreate.vue';
import ProductEdit from '../views/ProductEdit.vue';

import Blog from '../views/Blog/Blog.vue';
import Article from '../views/Article.vue';
import ArticleCreate from '../views/ArticleCreate.vue';
import ArticleEdit from '../views/ArticleEdit.vue';

import Login from '../views/user/Login.vue';
import Register from '../views/user/Register.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/coffee-catalog/create',
    component: ProductCreate,
    beforeEnter: () => {
      const userStore = useUserStore();
      if (!userStore.isAdmin && !userStore.isAuth) {
        return { path: '/login' };
      }
    },
  },
  { path: '/coffee-catalog', component: Catalog },
  {
    path: '/coffee-catalog/:id/edit',
    component: ProductEdit,
    beforeEnter: () => {
      const userStore = useUserStore();
      if (!userStore.isAdmin && !userStore.isAuth) {
        return { path: '/login' };
      }
    },
  },
  { path: '/coffee-catalog/:id', component: Product },
  {
    path: '/articles/create',
    component: ArticleCreate,
    beforeEnter: () => {
      const userStore = useUserStore();
      if (!userStore.isAdmin && !userStore.isAuth) {
        return { path: '/login' };
      }
    },
  },
  { path: '/articles', component: Blog },
  { path: '/articles/:id', component: Article },
  {
    path: '/articles/:id/edit',
    component: ArticleEdit,
    beforeEnter: () => {
      const userStore = useUserStore();
      if (!userStore.isAdmin && !userStore.isAuth) {
        return { path: '/login' };
      }
    },
  },
  {
    path: '/cart',
    component: Cart,
    beforeEnter: () => {
      const userStore = useUserStore();
      if (!userStore.isAuth) {
        return { path: '/login' };
      }
    },
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
