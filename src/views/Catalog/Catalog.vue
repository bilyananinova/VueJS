<script>
import { products } from '../../constants/products';
import CatalogProductCard from './CatalogProductCard.vue';

export default {
  components: { CatalogProductCard },
  data() {
    return {
      products,
    };
  },
};
</script>

<template>
  <h3>Our Coffee</h3>
  <section class="products-wrapper">
    <section class="products-list">
      <CatalogProductCard v-for="product in products" :key="product.id" :product="product" />
    </section>
  </section>
</template>

<style  scoped>
.products-wrapper {
  display: flex;
  width: 65%;
  margin: auto;
}

.products-list {
  padding-left: 2em;
  margin: auto;
}
</style>
