<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue';

export default {
  components: {
    Header,
    Home,
    Footer,
    Home
  }
}
</script>

<template>
  <Header />
  <main class="site-main">
    <Home />
  </main>
  <Footer />
</template>

<style>
.site-main {
  /* min-height: 70vh; */
}
</style>
