import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home/Home.vue';

import Catalog from '../views/Catalog/Catalog.vue';
import Product from '../views/Product.vue';
import ProductCreate from '../views/ProductCreate.vue';

import Blog from '../views/Blog/Blog.vue';
import Article from '../views/Article.vue';
import ArticleCreate from '../views/ArticleCreate.vue';

import Login from '../views/user/Login.vue';
import Register from '../views/user/Register.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/coffee-catalog', component: Catalog },
  { path: '/coffee-catalog/:id', component: Product },
  { path: '/coffee-catalog/create', component: ProductCreate },
  { path: '/articles', component: Blog },
  { path: '/articles/:id', component: Article },
  { path: '/articles/create', component: ArticleCreate },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
