<script setup>

</script>

<template>
  <header class="site-header">
    <section class="header-logo">
      <h1>
        <a href="/">Coffe Shop</a>
      </h1>
      <p>VueJS</p>
    </section>
    <section>
      <ul class="header-contacts">
        <li><strong>Phone:</strong>+359 888 000 000</li>
        <li><strong>Email:</strong>email@mail.bg</li>

        <li class="cart">
          <a href="/cart">
            <i class="fas fa-shopping-bag"></i>
            <span class="cart-count">2</span>
          </a>
        </li>

      </ul>
    </section>

  </header>

  <nav class="mainav">
    <div>
      <a href="/">Home</a>
      <a href="/coffe-catalog">Shop</a>
      <a href="/articles">Blog</a>

      <a href="/coffe-catalog/create">Create product</a>
      <a href="/articles/create">Create article</a>
    </div>
    <div class="user">
      <a href="/user/#">Welcome, Pesho!</a>
      <a href="/logout">Logout</a>
    </div>
    <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>

  </nav>
</template>

<style scoped>
.site-header {
  display: flex;
  margin: 1em auto;
  align-items: center;
  justify-content: space-between;
  width: 70%;
}

.header-logo {
  line-height: 1;
  text-align: left;
}

.header-logo h1 {
  margin-bottom: 0;
  font-size: 24px;
}

.header-logo p {
  opacity: 0.7;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.header-logo h1 a {
  color: inherit;
}

.header-contacts {
  display: flex;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.header-contacts li {
  position: relative;
  margin: 0 1em;
}

.header-contacts li:last-child {
  margin-right: 0;
}

.header-contacts strong {
  display: block;
  padding: 0;
  font-size: 0.9rem;
  text-align: left;
}

.cart .cart-count {
  position: absolute;
  top: -0.02em;
  right: -1em;
  border-radius: 50%;
  background-color: var(--main-font-color);
  z-index: 2;
  text-align: center;
  width: 1.6em;
}

.fa-shopping-bag {
  font-size: 2em;
}

.cart a {
  color: var(--main-background);
}

.mainav {
  background: var(--main-background);
  border-radius: 0.8em;
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mainav a {
  display: flex;
  color: var(--main-font-color);
  text-transform: uppercase;
  padding: 1em;
}

.mainav .active a,
.mainav a:hover,
.mainav li:hover>a {
  color: var(--main-font-color-hover);
  background-color: inherit;
}

.mainav div,
.user,
.guest {
  display: flex;
  align-items: center;
}
</style>
