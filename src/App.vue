<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <Header />
  <main class="site-main">

  </main>
  <Footer />
</template>

<style>
.site-main {
  min-height: 70vh;
}
</style>
