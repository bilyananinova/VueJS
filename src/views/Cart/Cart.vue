<script>
import { mapState } from 'pinia';
import { useUserStore } from '../../stores/userStore';
import { deleteFromCart, getUserCart } from '../../services/cart';
import CartProduct from './CartProduct.vue';

export default {
  components: { CartProduct },
  data() {
    return {
      cartList: [],
      isVisible: true,
    };
  },
  computed: {
    ...mapState(useUserStore, ['profile']),
    totalQty() {
      let total = 0;
      this.cartList.forEach((prod) => {
        total += prod.qty;
      });
      return total;
    },
    totalSum() {
      let total = 0;
      this.cartList.forEach((prod) => {
        total += prod.qty * prod.price;
      });
      return total;
    },
  },
  watch: {
    cartList() { },
  },
  async created() {
    this.cartList = await getUserCart(this.profile.id);
  },
  methods: {
    async removeProduct(productId) {
      await deleteFromCart(this.profile.id, productId);
      this.cartList = await getUserCart(this.profile.id);
    },
    clearCart() {
      this.cartList.forEach((prod) => {
        this.removeProduct(prod.id);
      });
      this.isVisible = true;
      this.cartList.length = 0;
    },
  },
};
</script>

<template>
  <h3>Shopping Cart</h3>
  <template v-if="isVisible">
    <section class="cart-wrapper">
      <h3 v-show="!cartList.length" class="no-content">
        Your shopping cart is empty
      </h3>

      <CartProduct
        v-for="product in cartList"
        :key="product.id"
        :product="product"
        @on-click="removeProduct"
      />
    </section>
    <section class="summary-box">
      <h4>Cart Summary</h4>
      <p>Total Products: <span>{{ totalQty }}</span></p>
      <p>Total Price to Pay: <span>{{ totalSum.toFixed(2) }} $</span></p>

      <button @click="isVisible = !isVisible">
        Continue
      </button>
    </section>
  </template>

  <section v-else class="checkout-box">
    <h4>Checkout</h4>
    <div class="personal-info">
      <label for="phone">Phone <span class="required">*</span></label>
      <input
        id="phone"
        type="text"
        class="checkout-input"
        name="phone"
        placeholder="+359 888 000 000"
      >
      <label for="address">Address <span class="required">*</span></label>
      <input
        id="address"
        type="text"
        class="checkout-input"
        name="address"
        placeholder="Street Name & Number, Town, Postcode/Zip"
      >
    </div>
    <p>Total Products: <span>{{ totalQty }}</span></p>
    <p>Total Price to Pay: <span>{{ totalSum.toFixed(2) }} $</span></p>

    <button @click="clearCart">
      Submit
    </button>
  </section>
</template>

<style scoped>
.cart-wrapper {
  margin: 3em auto;
  width: 60%;
  padding: 2em;
}

.summary-box,
.checkout-box {
  width: 30%;
  margin: 3em auto;
  border-radius: 0.3em;
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.9);
}

.summary-box h4,
.summary-box div,
.checkout-box h4,
.checkout-box div {
  padding: 0.8em 0 0;
  margin: auto;
}

.summary-box span,
.checkout-box span {
  font-weight: 600;
}

.summary-box button,
.checkout-box button {
  width: 80%;
  border: 1px solid var(--main-background);
  padding: 1em 1.5em;
  border-radius: 0.3em;
  text-transform: uppercase;
  color: #ffffff;
  background: var(--main-background);
  margin: 1.5em;
}

.summary-box button:hover,
.checkout-box button:hover {
  border-color: var(--main-background);
  color: var(--main-background);
  background: #ffffff;
  box-shadow: 0px 0px 5px 1px var(--main-background);
  cursor: pointer;
}

.personal-info {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
}

.personal-info input {
  border: none;
  border: 1px solid var(--main-background);
  border-radius: 0.5em;
  padding: 1em;
  margin-bottom: 1.5em;
}

.personal-info input:hover,
.personal-info input:focus {
  box-shadow: 0px 0px 5px 1px var(--main-background);
  outline: none;
}
</style>
