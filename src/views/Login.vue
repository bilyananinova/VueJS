<script>
import { email, helpers, minLength, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { getUser, login } from '../services/auth';
import { useUserStore } from '../stores/userStore';
import Error from '../components/Error.vue';

function minLengthHelpers(number) {
  return helpers.withMessage(`Password must be ${number} characters long!`, minLength(number));
}

export default {
  components: { Error },
  setup() {
    return {
      v$: useVuelidate(),
      userStore: useUserStore(),
    };
  },
  data() {
    return {
      errors: [],
      formData: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    async onSubmit() {
      if (await this.v$.$validate()) {
        const { email, password } = this.formData;
        const userId = await login(email, password);
        const user = await getUser(userId);

        if (user) {
          this.userStore.setAdmin(userId);
          this.userStore.setProfile({ ...user, id: userId });
          this.$router.push({ path: '/' });
        }
      }
      else {
        this.errors = [];
        this.v$.$errors.forEach((element) => {
          this.errors.push(element.$message);
        });
      }
    },
  },
  validations() {
    return {
      formData: {
        email: {
          required: helpers.withMessage('Email is required!', required),
          email: helpers.withMessage('Email must be a valid email address!', email),
        },
        password: {
          required: helpers.withMessage('Password is required!', required),
          minLength: minLengthHelpers(6),
        },
      },
    };
  },
};
</script>

<template>
  <Error v-if="errors.length > 0" :errors="errors" />

  <h3>Login Page</h3>
  <div class="form-wrapper">
    <section class="form-img">
      <img src="../assets/login.jpg" alt="">
    </section>

    <section class="form-section">
      <form class="login-form" @submit.prevent="onSubmit">
        <label for="login-email">Email address<span class="required">*</span></label>
        <input
          id="login-email"
          v-model="formData.email"
          type="email"
          class="form-input"
          name="email"
          placeholder="ivan@mail.bg"
        >

        <label for="login-password">Password <span class="required">*</span></label>
        <input
          id="login-password"
          v-model="formData.password"
          type="password"
          class="form-input"
          name="password"
          placeholder="******"
        >

        <button type="submit" class="login-button">
          Login
        </button>

        <p>
          Don't have an account?
          <router-link to="/register">
            Register
          </router-link> now.
        </p>
      </form>
    </section>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
  margin: 3em auto;
}

.login-form p {
  font-family: var(--main-font-family-headings);
}

.login-form label {
  opacity: 0.9;
  margin: 1.2em 0 0.5em;
}

.login-button {
  margin: 2em 0 1em;
  padding: 0.5em;
  font-size: 1.1em;
  color: var(--main-font-color);
  border: none;
  border-radius: 0.5em;
  background: var(--main-background);
}

.login-button:hover,
.login-button:focus {
  cursor: pointer;
}

.login-form input {
  border: 1px solid var(--main-background);
  border-radius: 0.5em;
  padding: 1em;
}

.login-form input:focus,
.login-form input:hover {
  box-shadow: 0px 0px 5px 1px var(--main-shadow-hover);
  outline: none;
}

.form-img {
  display: block;
  position: relative;
  overflow: hidden;
  flex: 0 0 50%;
}

.form-img img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  position: absolute;
}

.form-img img:after {
  padding-top: 100%;
  content: '';
  display: block;
}
</style>
