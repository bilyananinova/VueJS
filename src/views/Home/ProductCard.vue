<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
  props: {
    product: {
      type: Object,
      requered: true,
      name: String,
      img: String,
      price: Number,
      description: String,
      id: String,
    },
  },
};
</script>

<template>
  <RouterLink :to="`/coffee-catalog/${product.id}`">
    <section class="home-coffee-card">
      <section class="home-coffee-image">
        <img :src="product.img" :alt="product.name">
      </section>
      <header class="home-coffee-header">
        <h6>{{ product.name }}</h6>
      </header>
      <section class="home-coffee-price">
        <p>
          {{ product.price }} $
        </p>
      </section>
    </section>
  </RouterLink>
</template>

<style scoped>
.home-coffee-card {
  width: 18em;
  height: 30em;
  padding: 2em;
  border-radius: 0.5em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.9);
  color: var(--main-font-color);
  background: var(--main-cards-background);
}

.home-coffee-image {
  position: relative;
  width: 100%;
  height: 18em;
  margin: 0.5em auto;
  border-radius: 0.5em;
  overflow: hidden;
}

.home-coffee-image::before {
  display: block;
  content: '';
  padding-top: 166.67%;
}

.home-coffee-image img {
  display: block;
  width: auto;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.home-coffee-price {
  color: var(--price-font-color);
  font-weight: 600;

}
</style>
