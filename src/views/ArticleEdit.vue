<script>
import { useVuelidate } from '@vuelidate/core';
import { helpers, required, url } from '@vuelidate/validators';
import Error from '../components/Error.vue';
import { getSingleArticle, updateArticle } from '../services/articles';

export default {
  components: { Error },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      article: {},
      errors: [],
      id: this.$route.params.id,
    };
  },
  async created() {
    this.article = (await getSingleArticle(this.id)).data();
  },
  methods: {
    async onSubmit() {
      if (await this.v$.$validate()) {
        await updateArticle(this.id, this.article.title, this.article.content, this.article.img);
        this.$router.push({ path: `/articles/${this.id}` });
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
      article: {
        title: {
          required: helpers.withMessage('Title is requred!', required),
        },
        content: {
          required: helpers.withMessage('Content is requred!', required),
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
  <h3>Edit Article</h3>
  <div class="form-wrapper edit-article">
    <section class="form-section edit-article-section" @submit.prevent="onSubmit">
      <form class="edit-article-form">
        <label for="article-title">Title<span class="required">*</span></label>
        <input
          id="article-title"
          v-model="article.title"
          type="text"
          class="form-input"
          name="title"
        >
        <label for="article-content">Content<span class="required">*</span></label>
        <textarea
          id="article-content"
          v-model="article.content"
          cols="50"
          rows="15"
          name="content"
        />
        <label for="article-img">Image<span class="required">*</span></label>
        <input
          id="article-img"
          v-model="article.img"
          type="text"
          class="form-input"
          name="image"
        >
        <button type="submit" class="edit-article-button">
          Edit
        </button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.edit-article {
  box-shadow: 0px -1px 7px 0px rgba(0, 0, 0, 0.9);
  width: 50%;
}

.edit-article-section {
  margin: 1em auto;
  padding: 3em 0;
}

.edit-article-form {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.edit-article-form label {
  padding: 1em 0 0.3em;
  font-size: 1.2em;
  font-weight: 700;
}

.edit-article-form input,
.edit-article-form textarea {
  border: none;
  border: 1px solid var(--main-background);
  border-radius: 0.5em;
  padding: 0.5em;
}

.edit-article-form input:focus,
.edit-article-form input:hover,
.edit-article-form textarea:focus,
.edit-article-form textarea:hover {
  box-shadow: 0px 0px 5px 1px var(--main-shadow-hover);
  outline: none;
}

.edit-article-button {
  margin: 2em 0 0.5em;
  padding: 0.5em;
  font-size: 1.1em;
  color: var(--main-font-color);
  font-weight: 700;
  border: none;
  border-radius: 0.5em;
  background: var(--main-background);
}

.edit-article-button:hover,
.edit-article-button:focus {
  cursor: pointer;
}
</style>
