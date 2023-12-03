<script>
export default {

};
</script>

<template>
  <h3>Shopping Cart</h3>
  <section class="cart-wrapper">
    <section class="order-card">
      <div class="order-image">
        <img src="image" alt="name">
      </div>
      <div class="order-details">
        <header class="order-header">
          <h5>Name</h5>
        </header>

        <span class="order-price">20.0 $</span>

        <div class="order-action">
          <p class="btn-minus">
            <i class="fas fa-minus" />
          </p>
          <span class="product-qty"> 2 </span>
          <p class="btn-plus">
            <i class="fas fa-plus" />
          </p>

          <button> Delete </button>
        </div>
      </div>
    </section>
    <h3 class="no-content">
      Your shopping cart is empty
    </h3>
  </section>
  <section class="summary-box">
    <h4>Cart Summary</h4>
    <p>Total Products: <span>2</span></p>
    <p>Total Price to Pay: <span>20 $</span></p>

    <button> Continue </button>
  </section>

  <section class="checkout-box">
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
    <p>Total Products: <span>2</span></p>
    <p>Total Price to Pay: <span>20 $</span></p>

    <button> Submit </button>
  </section>
</template>

<style scoped>
.cart-wrapper {
    margin: 3em auto;
    width: 60%;
    padding: 2em;
}

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
