<script>
import { mapActions, mapState } from 'pinia';
import { deleteProduct } from '../../services/products';
import { addCart } from '../../services/cart';
import { useUserStore } from '../../stores/userStore';
import { useCartStore } from '../../stores/cartStore';

export default {
  props: {
    product: {
      type: Object,
      requered: true,
      id: String,
      name: String,
      description: String,
      img: String,
      likes: [],
      dislikes: [],
      price: Number,
    },
  },
  computed: {
    ...mapState(useUserStore, ['isAdmin', 'profile', 'isAuth']),
  },
  methods: {
    ...mapActions(useCartStore, ['setCart']),
    async deleteProd(id) {
      await deleteProduct(id);
      this.$router.go(0);
    },
    async addToCart() {
      await addCart(this.product, this.profile.id);
      this.setCart();
    },
  },
};
</script>

<template>
  <section class="product-card">
    <div class="product-image">
      <img :src="product.img" :alt="product.name">
    </div>
    <div class="product-details">
      <header class="product-header">
        <h5>{{ product.name }}</h5>
      </header>

      <span class="product-price">{{ product.price }} $</span>

      <p>
        {{ product.description.substring(0, 350) }}...
      </p>

      <div class="product-action">
        <RouterLink :to="`/coffee-catalog/${product.id}`" class="details-btn">
          <i class="fas fa-solid fa-mug-hot" />
          details
        </RouterLink>

        <template v-if="isAuth">
          <button class="add-btn" @click="addToCart">
            <i class="fas fa-shopping-cart" />add to cart
          </button>
        </template>

        <template v-if="isAdmin">
          <RouterLink :to="`/coffee-catalog/${product.id}/edit`" class="edit-btn">
            <i class="fas fa-edit" />edit
          </RouterLink>

          <button class="delete-btn" @click="deleteProd(product.id)">
            <i class="fas fa-trash-alt" />delete
          </button>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-card {
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.9);
  border-radius: 0.3em;
  display: flex;
  position: relative;
  margin: 2em 0;
}

.product-image {
  flex: 0 0 20%;
  margin: 1em;
  display: block;
  position: relative;
  overflow: hidden;
}

.product-image img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%;
  position: absolute;
}

.product-image img::after {
  padding-top: 100%;
  content: '';
  display: block;
}

.product-header h5 {
  margin-left: 0;
  margin-bottom: 0;
}

.product-details {
  text-align: left;
  margin: 0;
}

.product-details p {
  padding: 0.5em 2em 0.5em 0;
}

.product-price {
  color: var(--price-font-color);
  font-weight: 600;
}

.product-action {
  margin: 1.5em 0;
}

.product-action i {
  padding-right: 0.5em;
}

.product-action button,
.product-action a {
  border: 1px solid var(--main-background);
  padding: 0.5em 0.8em;
  border-radius: 0.3em;
  text-transform: uppercase;
  color: var(--main-font-color);
  background: var(--main-background);
  margin-right: 0.8em;
}

.product-action button:hover,
.product-action a:hover {
  color: var(--main-font-color);
  background: #fff;
  box-shadow: 0px 0px 5px 1px var(--main-shadow-hover);
}

.product-action .edit-btn:hover {
  border-color: var(--main-background);
  background: #ffe600;
  box-shadow: 0px 0px 5px 1px var(--main-background);
}

.product-action .delete-btn:hover {
  border-color: var(--main-background);
  color: #ffffff;
  background: #ff0000;
  box-shadow: 0px 0px 5px 1px var(--main-background);
}

.add-btn,
.delete-btn {
  font-family: Verdana, Geneva, sans-serif;
}
</style>
