<script>
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '../../stores/cartStore';
import { useUserStore } from '../../stores/userStore';
import { updateCart } from '../../services/cart';

export default {
  props: {
    product: {
      type: Object,
      requered: true,
      id: String,
      name: String,
      description: String,
      img: String,
      price: Number,
      comments: Array,
      qty: Number,
    },
  },
  emits: ['onClick'],
  data() {
    return {
      tempObj: this.product,
    };
  },
  computed: {
    ...mapState(useUserStore, ['profile']),
  },
  methods: {
    ...mapActions(useCartStore, ['setCart']),
    onClick(id) {
      this.$emit('onClick', id);
    },
    async increment() {
      this.tempObj.qty += 1;
      await updateCart(this.product.id, this.profile.id, this.tempObj);
    },
    async decrement() {
      this.tempObj.qty -= 1;
      await updateCart(this.product.id, this.profile.id, this.tempObj);

      if (this.product.qty === 0) {
        this.$emit('onClick', this.product.id);
      }
    },
  },
};
</script>

<template>
  <section v-if="product.qty" class="order-card">
    <div class="order-image">
      <img :src="product.img" :alt="product.name">
    </div>

    <div class="order-details">
      <header class="order-header">
        <h5>{{ product.name }}</h5>
      </header>

      <span class="order-price">{{ (product.price * product.qty).toFixed(2) }} $</span>

      <div class="order-action">
        <p class="btn-minus">
          <i class="fas fa-minus" name="qty" @click="decrement()" />
        </p>

        <span class="product-qty"> {{ product.qty }} </span>

        <p class="btn-plus">
          <i class="fas fa-plus" name="qty" @click="increment()" />
        </p>

        <button @click="onClick(product.id)">
          Delete
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.order-card {
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 0.3em;
  display: flex;
  position: relative;
  margin: 2em 0;
}

.order-image {
  flex: 0 0 20%;
  margin: 1em;
  display: block;
  position: relative;
  overflow: hidden;
}

.order-image img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%;
  position: absolute;
}

.order-image img::after {
  padding-top: 100%;
  content: '';
  display: block;
}

.order-details {
  text-align: left;
  margin: 0;
  padding: 0 2em;
}

.order-header {
  margin: 0.5em 0;
}

.order-header h5 {
  margin-left: 0;
}

.order-header p {
  opacity: 0.6;
}

.order-price {
  color: var(--price-color);
  font-weight: 600;
}

.order-action {
  margin: 1.5em 0;
  display: flex;
}

.order-action .product-qty {
  padding: 0 0.5em;
}

.btn-minus .fa-minus,
.btn-plus .fa-plus {
  cursor: pointer;
}

.order-action button {
  border: 1px solid var(--main-background);
  padding: 0.5em 0.8em;
  border-radius: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  background: var(--main-background);
  margin: 0 1em;
}

.order-action button:hover {
  border-color: (--main-background);
  color: var(--main-background);
  background: #ffffff;
  box-shadow: 0px 0px 5px 1px var(--main-background);
}
</style>
