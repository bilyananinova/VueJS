<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue';
import Register from './views/user/Register.vue';

export default {
  components: {
    Header,
    Home,
    Register,
    Footer,
  }
}
</script>

<template>
  <Header />
  <main class="site-main">
    <!-- <Home /> -->
    <Register />
  </main>
  <Footer />
</template>

<style>
.site-main {
  /* min-height: 70vh; */
}
</style>
