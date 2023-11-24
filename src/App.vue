<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue';
import Register from './views/user/Register.vue';
import Login from './views/user/Login.vue';

export default {
  components: {
    Header,
    Home,
    Register,
    Login,
    Footer,
  }
}
</script>

<template>
  <Header />
  <main class="site-main">
    <Home />
    <!-- <Register /> -->
    <!-- <Login /> -->
  </main>
  <Footer />
</template>

