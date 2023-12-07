<script>
import { RouterLink, useRoute } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import { deleteProduct, getSingleProduct } from '../services/products';
import { addCart } from '../services/cart';
import { dislike, like } from '../services/likes';
import { useUserStore } from '../stores/userStore';
import { useCartStore } from '../stores/cartStore';

export default {
  components: { RouterLink },
  setup() {
    return { route: useRoute() };
  },
  data() {
    return {
      product: {},
      id: this.$route.params.id,
      productLikes: 0,
      productDislikes: 0,
    };
  },
  computed: {
    ...mapState(useUserStore, ['isAuth', 'profile', 'isAdmin']),
  },
  async created() {
    this.product = (await getSingleProduct(this.id)).data();
    this.product.id = this.id;
    this.productLikes = this.product.likes?.length;
    this.productDislikes = this.product.dislikes?.length;
  },
  methods: {
    ...mapActions(useCartStore, ['setCart']),
    async deleteProd(id) {
      await deleteProduct(id);
      this.$router.go(-1);
    },
    async addToCart() {
      await addCart(this.product, this.profile.id);
      this.setCart();
    },
    async likeProduct(id) {
      await like(id, this.profile.id);
      this.productLikes = (await getSingleProduct(this.id)).data().likes?.length;
      this.productDislikes = (await getSingleProduct(this.id)).data().dislikes?.length;
    },
    async dislikeProduct(id) {
      await dislike(id, this.profile.id);
      this.productLikes = (await getSingleProduct(this.id)).data().likes?.length;
      this.productDislikes = (await getSingleProduct(this.id)).data().dislikes?.length;
    },
  },
};
</script>

<template>
  <section class="details-wrapper">
    <section class="details-img">
      <img :src="product.img" :alt="product.name">
    </section>
    <section>
      <div class="details">
        <header class="details-header">
          <h5>{{ product.name }}</h5>
        </header>

        <span class="details-price">{{ product.price }}$</span>
        <p>{{ product.description }}</p>

        <div v-if="isAuth" class="details-action">
          <button class="like-btn" @click="likeProduct(id)">
            <i class="fas fa-thumbs-up" /><span>{{ productLikes }}</span>
          </button>
          <button class="dislike-btn" @click="dislikeProduct(id)">
            <i class="fas fa-thumbs-down" /><span>{{ productDislikes }}</span>
          </button>
          <button class="add-btn" @click="addToCart">
            <i class="fas fa-shopping-cart" />
            add to cart
          </button>
        </div>

        <template v-if="isAdmin">
          <RouterLink :to="`/coffee-catalog/${id}/edit`" class="edit-btn">
            <i class="fas fa-edit" />
            edit
          </RouterLink>

          <button class="delete-btn" @click="deleteProd(id)">
            <i class="fas fa-trash-alt" />
            delete
          </button>
        </template>
      </div>
    </section>
  </section>
</template>

<style scoped>
.details-wrapper {
  display: flex;
  width: 60%;
  margin: 3em auto;
  padding: 1.5em;
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.75);
}

.details-img {
  flex: 0 0 30%;
  position: relative;
  overflow: hidden;
}

.details-img img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%;
  position: absolute;
  display: block;
}

.details-img::before {
  display: block;
  content: '';
  padding-top: 56.25%;
}

.details-img::after {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.3em;
}

.details {
  text-align: left;
  padding-left: 2em;
}

.details header::after {
  display: block;
  content: '';
  background: var(--main-background);
  width: 6em;
  height: 0.1em;
  margin: 1em 0;
}

.details-price {
  color: var(--price-font-color);
  font-size: 1.2em;
  font-weight: 600;
  display: block;
  padding-bottom: 1em;
}

.details-header h5 {
  margin-left: 0;
}

.details-header p {
  opacity: 0.6;
}

.details-action {
  margin: 0.5em 0;
}

.details-action i {
  padding-right: 0.5em;
}

.details-action button,
.edit-btn,
.delete-btn {
  margin: 0 0.8em;
  color: var(--main-font-color);
  background: var(--main-background);
  border: 1px solid var(--main-background);
  padding: 0.5em 0.8em;
  border-radius: 0.3em;
  text-transform: uppercase;
  font-family: inherit;
}

.details-action .add-btn:hover {
  border-color: var(--main-background);
  background: #ffffff;
  box-shadow: 0px 0px 5px 1px var(--main-background);
}

.details-action .like-btn:hover,
.details-action .dislike-btn:hover {
  cursor: pointer;
}

.edit-btn:hover {
  border-color: var(--main-background);
  background: #ffe600;
  box-shadow: 0px 0px 5px 1px var(--main-background);
}

.delete-btn:hover {
  border-color: var(--main-background);
  color: #ffffff;
  background: #ff0000;
  box-shadow: 0px 0px 5px 1px var(--main-background);
}
</style>
