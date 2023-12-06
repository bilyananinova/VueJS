<script>
import { mapState } from 'pinia';
import { getLikes } from '../../services/likes';
import { useUserStore } from '../../stores/userStore';

export default {
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapState(useUserStore, ['profile']),
  },
  async created() {
    this.products = await getLikes(this.profile.id);
  },

};
</script>

<template>
  <h3>Your Likes</h3>
  <section class="products-wrapper">
    <section class="products-list">
      <template v-if="products.length">
        <section v-for="product in products" :key="product.id" class="user-product-card">
          <div class="user-product-image">
            <img :src="product.img" :alt="product.name">
          </div>
          <div class="user-product-details">
            <header class="user-product-header">
              <h5>{{ product.name }}</h5>
            </header>

            <span class="user-product-price">{{ product.price }}$</span>

            <p>{{ product.description.substring(0, 150) }}...</p>

            <div class="user-product-action">
              <RouterLink :to="`/coffee-catalog/${product.id}/details`" class="details-btn">
                <i class="fas fa-solid fa-mug-hot" />
                details
              </RouterLink>
            </div>
          </div>
        </section>
      </template>

      <h1 v-else class="no-content">
        Check our
        <RouterLink to="/coffee-catalog">
          catalog
        </RouterLink> and find your wine...
      </h1>
    </section>
  </section>
</template>

<style scoped>
.products-list {
    width: 60%;
    margin: auto;
}

.user-product-card {
    box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.9);
    border-radius: 0.3em;
    display: flex;
    position: relative;
    margin: 2em 0;
}

.user-product-image {
    flex: 0 0 20%;
    margin: 1em;
    display: block;
    position: relative;
    overflow: hidden;
}

.user-product-image img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 100%;
    position: absolute;
}

.user-product-image img::after {
    padding-top: 100%;
    content: '';
    display: block;
}

.user-product-details {
    text-align: left;
    margin: 0;
    padding: 0 2em;
}

.user-product-header {
    margin: 0.5em 0;
}

.user-product-header p {
    opacity: 0.6;
}

.user-product-price {
    color: var(--price-font-color);
    font-weight: 600;
}

.user-product-action {
    margin: 1.5em 0;
}

.user-product-action i {
    padding-right: 0.5em;
}

.user-product-action a {
    border: 1px solid var(--main-background);
    padding: 0.5em 0.8em;
    border-radius: 0.3em;
    text-transform: uppercase;
    color: var(--main-font-color);
    background: var(--main-background);
    margin-right: 0.8em;
}

.user-product-action a:hover {
    color: var(--main-font-color);
    background: #fff;
    box-shadow: 0px 0px 5px 1px var(--main-shadow-hover);
}
</style>
