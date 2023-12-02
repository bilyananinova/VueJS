<script>
import { useVuelidate } from '@vuelidate/core';
import { decimal, helpers, required, url } from '@vuelidate/validators';
import { getSingleProduct, updateProduct } from '../services/products';
import Error from '../components/Error.vue';

export default {
  components: { Error },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      product: {},
      id: '',
      errors: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;
    this.product = (await getSingleProduct(this.id)).data();
  },
  methods: {
    async onSubmit() {
      if (await this.v$.$validate()) {
        await updateProduct(this.id, this.product.name, this.product.description, this.product.price, this.product.img)
          .then(() =>
            this.$router.push({ path: `/coffee-catalog/${this.id}` }));
      }
      else {
        this.errors = [];
        this.v$.$errors.forEach((element) => {
          this.errors.push(element.$message);
        });
        console.log(this.errors);
      }
    },
  },
  validations() {
    return {
      product: {
        name: {
          required: helpers.withMessage('Name is required!', required),
        },
        description: {
          required: helpers.withMessage('Description is required!', required),
        },
        price: {
          required: helpers.withMessage('Price is required!', required),
          decimal: helpers.withMessage('Price must be a decimal value!', decimal),
        },
        img: {
          required: helpers.withMessage('Image is required!', required),
          url: helpers.withMessage('Image must be a valid URL address!', url),
        },
      },
    };
  },
};
</script>

<template>
  <Error v-if="errors.length" :errors="errors" />
  <h3>Edit Coffee</h3>
  <div class="form-wrapper edit-product">
    <section class="form-section edit-product-section">
      <form class="edit-product-form" @submit.prevent="onSubmit">
        <label for="coffee-name">Name<span class="required">*</span></label>
        <input
          id="coffe-name"
          v-model="product.name"
          type="text"
          class="form-input"
          name="name"
        >
        <label for="coffee-description">Description<span class="required">*</span></label>
        <textarea
          id="coffee-description"
          v-model="product.description"
          cols="50"
          rows="5"
          name="description"
        />
        <label for="coffee-price">Price<span class="required">*</span></label>
        <input
          id="coffee-price"
          v-model="product.price"
          type="text"
          class="form-input"
          name="price"
        >
        <label for="coffee-img">Image<span class="required">*</span></label>
        <input
          id="coffee-img"
          v-model="product.img"
          type="text"
          class="form-input"
          name="image"
        >
        <button type="submit" class="edit-product-button">
          Edit
        </button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.edit-product {
  box-shadow: 0px -1px 7px 0px rgba(0, 0, 0, 0.9);
  width: 50%;
}

.edit-product-section {
  margin: 1em auto;
  padding: 3em 0;
}

.edit-product-form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.edit-product-form label {
  font-size: 1.2em;
  font-weight: 700;
  padding: 1em 0 0.3em;
}

.edit-product-form input,
.edit-product-form textarea {
  border: none;
  border: 1px solid var(--main-background);
  border-radius: 0.5em;
  padding: 0.5em;
}

.edit-product-form input:focus,
.edit-product-form input:hover,
.edit-product-form textarea:focus,
.edit-product-form textarea:hover {
  box-shadow: 0px 0px 5px 1px var(--main-shadow-hover);
  outline: none;
}

.edit-product-button {
  margin: 2em 0 0.5em;
  padding: 0.5em;
  font-size: 1.1em;
  color: var(--main-font-color);
  font-weight: 700;
  border: none;
  border-radius: 0.5em;
  background: var(--main-background);
}

.edit-product-button:hover,
.edit-product-button:focus {
  cursor: pointer;
}
</style>
