<script>
import { email, helpers, minLength, required, sameAs } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { getUser, register } from '../../services/auth';
import { useUserStore } from '../../stores/userStore';
import Error from '../../components/Error.vue';

function minLengthHelpers(number) {
  return helpers.withMessage(`Password must be ${number} characters long!`, minLength(number));
}

function sameAsHelpers(password) {
  return helpers.withMessage('Password missmatch!', sameAs(password));
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
        name: '',
        email: '',
        password: '',
        repeatPass: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      if (await this.v$.$validate()) {
        const { name, email, password } = this.formData;
        const userId = await register(name, email, password);
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
        name: { required: helpers.withMessage('Name is required!', required) },
        email: {
          required: helpers.withMessage('Email is required!', required),
          email: helpers.withMessage('Email must be a valid email address!', email),
        },
        password: {
          required: helpers.withMessage('Password is required!', required),
          minLength: minLengthHelpers(6),
        },
        repeatPass: {
          required: helpers.withMessage('Repeat password is required!', required),
          sameAs: sameAsHelpers(this.formData.password),
        },
      },
    };
  },
};
</script>

<template>
  <Error v-if="errors.length > 0" :errors="errors" />
  <h3>Registration Page</h3>
  <section class="form-wrapper">
    <section class="form-section">
      <form class="register-form" @submit.prevent="onSubmit">
        <label for="register-name">Name <span class="required">*</span></label>
        <input
          id="register-name"
          v-model="formData.name"
          type="text"
          class="form-input"
          name="name"
          placeholder="Ivan Ivanov"
        >

        <label for="register-email">Email address<span class="required">*</span></label>
        <input
          id="register-email"
          v-model="formData.email"
          type="email"
          class="form-input"
          name="email"
          placeholder="ivan@mail.bg"
        >

        <label for="register-password">Password <span class="required">*</span></label>
        <input
          id="register-password"
          v-model="formData.password"
          type="password"
          class="form-input"
          name="password"
          placeholder="******"
        >

        <label for="register-repeat-password">Repeat Password <span class="required">*</span></label>
        <input
          id="register-repeat-password"
          v-model="formData.repeatPass"
          type="password"
          class="form-input"
          name="rePassword"
          placeholder="******"
        >

        <button type="submit" class="register-button">
          Register
        </button>

        <p>
          Already have an account...
          <router-link to="/login">
            Login
          </router-link> now.
        </p>
      </form>
    </section>

    <section class="form-img">
      <img src="../../assets/register.jpg" alt="">
    </section>
  </section>
</template>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
  margin: 3em auto;
}

.register-form p {
  font-family: var(--main-font-family-headings);
}

.register-form label {
  opacity: 0.9;
  margin: 1.2em 0 0.5em;
}

.register-button {
  margin: 2em 0 1em;
  padding: 0.5em;
  font-size: 1.1em;
  color: var(--main-font-color);
  border: none;
  border-radius: 0.5em;
  background: var(--main-background);
}

.register-button:hover,
.register-button:focus {
  cursor: pointer;
}

.register-form input {
  border: none;
  border: 1px solid var(--main-background);
  border-radius: 0.5em;
  padding: 1em;
}

.register-form input:focus,
.register-form input:hover {
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
