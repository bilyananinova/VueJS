<script>
import { getLastProducts } from '../../services/products';
import { getLastArticles } from '../../services/articles';
import ProductCard from './ProductCard.vue';
import ArticleCard from './ArticleCard.vue';

export default {
  components: { ProductCard, ArticleCard },
  data() {
    return {
      products: [],
      articles: [],
    };
  },

  async created() {
    this.products = await getLastProducts();
    this.articles = await getLastArticles();
  },
};
</script>

<template>
  <section class="home-wrapper">
    <h3>From Our Blog</h3>
    <section class="last-articles">
      <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
    </section>

    <h3>From Our Shop</h3>
    <section class="last-products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </section>
  </section>
</template>

<style scoped>
.home-wrapper {
  background: linear-gradient(rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)), url('../../assets/home.jpg') no-repeat;
  background-size: cover;
  padding: 0.5em;
}

.home-wrapper h3 {
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
}

.last-articles,
.last-products {
  margin: 2em auto 5em;
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: auto;
}

.last-articles {
  justify-content: space-evenly;
}
</style>
