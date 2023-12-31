import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../stores/userStore';

import Home from '../views/Home/Home.vue';
import Cart from '../views/Cart/Cart.vue';
import NotFound from '../views/NotFound.vue';

import Catalog from '../views/Catalog/Catalog.vue';
import ProductDetails from '../views/DetailsPage/ProductDetails.vue';
import ProductCreate from '../views/ProductCreate.vue';
import ProductEdit from '../views/ProductEdit.vue';

import Blog from '../views/Blog/Blog.vue';
import ArticleDetails from '../views/ArticleDetails.vue';
import ArticleCreate from '../views/ArticleCreate.vue';
import ArticleEdit from '../views/ArticleEdit.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';

function validateIsAdminAndRedirect() {
  const userStore = useUserStore();

  console.log(userStore.isAdmin);
  console.log(userStore.isAuth);
  if (userStore.isAdmin === false) {
    return { path: '/' };
  }
}

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/coffee-catalog/create', component: ProductCreate, beforeEnter: validateIsAdminAndRedirect },
  { path: '/coffee-catalog', component: Catalog },
  { path: '/coffee-catalog/:id/edit', component: ProductEdit, beforeEnter: validateIsAdminAndRedirect },
  { path: '/coffee-catalog/:id', component: ProductDetails },
  { path: '/articles/create', component: ArticleCreate, beforeEnter: validateIsAdminAndRedirect },
  { path: '/articles', component: Blog },
  { path: '/articles/:id', component: ArticleDetails },
  { path: '/articles/:id/edit', component: ArticleEdit, beforeEnter: validateIsAdminAndRedirect },
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
  { path: '/user/:id', component: Profile },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
