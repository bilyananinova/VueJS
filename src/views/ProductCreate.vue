<script>
import { createProduct } from '../services/products';

export default {
  props: {
    initial: {
      type: Object,
      required: true,
      name: '',
      description: '',
      price: 0,
      img: '',
      createdAt: '',
    },
  },
  emits: ['onSubmit'],
  data() {
    return {
      formData: { ...this.initial },
    };
  },
  methods: {
    async handleSubmit() {
      this.$emit('onSubmit', this.formData);
      await createProduct(this.formData)
        .then(() =>
          this.$router.push({ path: '/coffee-catalog' }));
    },
  },
};
</script>

<template>
  <h3>Create New Coffee</h3>
  <div class="form-wrapper create-product">
    <section class="form-section create-product-section">
      <form class="create-product-form" @submit.prevent="handleSubmit">
        <label for="coffee-name">Name<span class="required">*</span></label>
        <input
          id="coffee-name"
          v-model="formData.name"
          type="text"
          class="form-input"
          name="name"
        >
        <label for="coffee-description">Description<span class="required">*</span></label>
        <textarea
          id="coffee-description"
          v-model="formData.description"
          cols="50"
          rows="5"
          name="description"
        />
        <label for="coffee-price">Price<span class="required">*</span></label>
        <input
          id="coffee-price"
          v-model="formData.price"
          type="text"
          class="form-input"
          name="price"
        >
        <label for="coffee-img">Image<span class="required">*</span></label>
        <input
          id="coffee-img"
          v-model="formData.img"
          type="text"
          class="form-input"
          name="img"
        >
        <button type="submit" class="create-product-button">
          Create
        </button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.create-product {
  box-shadow: 0px -1px 7px 0px rgba(0, 0, 0, 0.9);
  width: 50%;
}

.create-product-section {
  margin: auto;
  padding: 3em 1em;
}

.create-product-form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.create-product-form label {
  font-size: 1.2em;
  font-weight: 700;
  padding: 1em 0 0.3em;

}

.create-product-form input,
.create-product-form textarea {
  border: none;
  border: 1px solid var(--main-background);
  border-radius: 0.5em;
  padding: 0.5em;
}

.create-product-form input:focus,
.create-product-form input:hover,
.create-product-form textarea:focus,
.create-product-form textarea:hover {
  box-shadow: 0px 0px 5px 1px var(--main-shadow-hover);
  outline: none;
}

.create-product-button {
  margin: 2em 0 0.5em;
  padding: 0.5em;
  font-size: 1.1em;
  color: var(--main-font-color);
  font-weight: 700;
  ;
  border: none;
  border-radius: 0.5em;
  background: var(--main-background);
}

.create-product-button:hover,
.create-product-button:focus {
  cursor: pointer;
}
</style>
