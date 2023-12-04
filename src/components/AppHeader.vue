<script>
import { RouterLink } from 'vue-router';
import { logout } from '../services/auth';
import { useUserStore } from '../stores/userStore';

export default {
  components: { RouterLink },
  setup() {
    return {
      userStore: useUserStore(),
    };
  },
  methods: {
    async logoutUser() {
      await logout();
      this.userStore.clearStorage();
    },
  },
};
</script>

<template>
  <header class="site-header">
    <section class="header-logo">
      <h1>
        <RouterLink to="/">
          Coffee Shop
        </RouterLink>
      </h1>

      <p>VueJS</p>
    </section>

    <section>
      <ul class="header-contacts">
        <li><strong>Phone:</strong>+359 888 000 000</li>
        <li><strong>Email:</strong>email@mail.bg</li>

        <li class="cart">
          <RouterLink to="/cart">
            <i class="fas fa-shopping-bag" />
            <span v-if="userStore.isAuth" class="cart-count">2</span>
          </RouterLink>
        </li>
      </ul>
    </section>
  </header>

  <nav class="mainav">
    <div>
      <RouterLink to="/">
        Home
      </RouterLink>

      <RouterLink to="/coffee-catalog">
        Shop
      </RouterLink>

      <RouterLink to="/articles">
        Blog
      </RouterLink>

      <RouterLink v-if="userStore.isAdmin" to="/coffee-catalog/create">
        Create product
      </RouterLink>

      <RouterLink v-if="userStore.isAdmin" to="/articles/create">
        Create article
      </RouterLink>
    </div>

    <div v-if="userStore.profile" class="user">
      <RouterLink :to="`/user/${userStore.profile.id}`">
        Welcome, {{ userStore.profile.name }}!
      </RouterLink>

      <RouterLink to="/" @click="logoutUser">
        Logout
      </RouterLink>
    </div>

    <div v-else class="guest">
      <RouterLink to="/login">
        Login
      </RouterLink>

      <RouterLink to="/register">
        Register
      </RouterLink>
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
  font-size: 2.5em;
  color: #58DF55;
  text-shadow: 1px 1px 1px #000000;
}

.header-logo p {
  opacity: 0.7;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-left: 3em;
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
  justify-content: center;
  margin: auto;
}
</style>
