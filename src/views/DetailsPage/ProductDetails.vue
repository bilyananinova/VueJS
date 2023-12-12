<script>
import { RouterLink, useRoute } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import { deleteProduct, getSingleProduct } from '../../services/products';
import { addCart } from '../../services/cart';
import { useUserStore } from '../../stores/userStore';
import { useCartStore } from '../../stores/cartStore';
import { useLikeStore } from '../../stores/likeStore';
import { createComment } from '../../services/comments';
import Comments from './Comments.vue';

export default {
  components: { RouterLink, Comments },
  setup() {
    return { route: useRoute() };
  },
  data() {
    return {
      product: {},
      id: this.$route.params.id,
      comments: [],
    };
  },
  computed: {
    ...mapState(useUserStore, ['isAuth', 'profile', 'isAdmin']),
    ...mapState(useLikeStore, ['likes', 'dislikes']),
  },
  async created() {
    this.product = (await getSingleProduct(this.id)).data();
    this.product.id = this.id;
    this.comments = this.product.comments;
    this.getProduct(this.id);
  },
  methods: {
    ...mapActions(useCartStore, ['setCart']),
    ...mapActions(useLikeStore, ['getProduct', 'setLike', 'setDislike']),
    async deleteProd(id) {
      await deleteProduct(id);
      this.$router.push({ path: '/coffee-catalog' });
    },
    async addToCart() {
      await addCart(this.product, this.profile.id);
      this.setCart();
    },
    likeProduct(id) {
      this.setLike(id, this.profile.id);
    },
    dislikeProduct(id) {
      this.setDislike(id, this.profile.id);
    },
    async onSubmit(content) {
      await createComment(this.id, this.profile.name, content);
      this.comments = (await getSingleProduct(this.id)).data().comments;
    },
  },
};
</script>

<template>
  <section class="details-wrapper">
    <section class="details-img">
      <img :src="product.img" :alt="product.name">
    </section>
    <div class="details">
      <header class="details-header">
        <h5>{{ product.name }}</h5>
      </header>

      <span class="details-price">{{ product.price }}$</span>
      <p>{{ product.description }}</p>

      <div v-if="isAuth" class="details-action">
        <button class="like-btn" @click="likeProduct(id)">
          <i class="fas fa-thumbs-up" /><span>{{ likes }}</span>
        </button>
        <button class="dislike-btn" @click="dislikeProduct(id)">
          <i class="fas fa-thumbs-down" /><span>{{ dislikes }}</span>
        </button>
        <button class="add-btn" @click="addToCart">
          <i class="fas fa-shopping-cart" />
          add to cart
        </button>

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
    </div>
  </section>

  <Comments :comments="comments" @on-submit="onSubmit($event, content)" />
</template>

<style scoped>
.details-wrapper {
  width: 40%;
  margin: 3em auto;
  padding: 1.5em;
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.9);
}

.details-img {
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
  text-align: justify;
}

.details p {
  white-space: pre-wrap;
}

.details header::after {
  display: block;
  content: '';
  background: var(--main-background);
  width: 6em;
  height: 0.1em;
  margin: 1em auto;
}

.details-price {
  color: var(--price-font-color);
  font-size: 1.2em;
  font-weight: 600;
  display: block;
  padding-bottom: 1em;
}

.details-price,
.details-header h5 {
  text-align: center;
}

.details-action {
  display: flex;
  flex-direction: row;
  justify-content: end;
}

.details-action i {
  padding-right: 0.5em;
}

.details-action button,
.edit-btn,
.delete-btn {
  margin: 0.5em;
  color: var(--main-font-color);
  background: var(--main-background);
  border: 1px solid var(--main-background);
  padding: 0.5em 0.8em;
  border-radius: 0.3em;
  font-family: inherit;
  text-transform: uppercase;
}

.details-action .add-btn:hover,
.details-action .like-btn:hover,
.details-action .dislike-btn:hover {
  border-color: var(--main-background);
  background: #ffffff;
  box-shadow: 0px 0px 5px 1px var(--main-background);
  cursor: pointer;
}

.edit-btn:is(:hover, :focus) {
  background: #ffe600;
}

.delete-btn:is(:hover, :focus) {
  color: #ffffff;
  background: #ff0000;
}
</style>
