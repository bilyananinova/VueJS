<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    RouterView,
  },
};
</script>

<template>
  <AppHeader />
  <main class="site-main">
    <RouterView />
  </main>
  <AppFooter />
</template>
