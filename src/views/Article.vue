<script>
import { useRoute } from 'vue-router';
import { getSingleArticle } from '../services/articles';

export default {
  setup() {
    const route = useRoute();
    console.log(route);
  },
  data() {
    return {
      article: {},
    };
  },
  async created() {
    this.article = (await getSingleArticle(this.$route.params.id)).data();
  },
};
</script>

<template>
  <article class="blog-article">
    <header class="blog-article-title">
      <h3>{{ article.title }}</h3>
    </header>

    <section class="content">
      <section class="blog-article-media">
        <img :src="article.img" :alt="article.title">
      </section>
      <section class="blog-article-content">
        {{ article.content }}
      </section>

      <section class="article-actions">
        <router-link :to="`/articles/${article.id}/edit`" class="edit-article-btn">
          <i class="fas fa-edit" />
          edit
        </router-link>
        <button class="delete-article-btn">
          <i class="fas fa-trash-alt" />
          delete
        </button>
      </section>
    </section>
  </article>
</template>

<style scoped>
.blog-article {
    width: 70%;
    margin: 3em auto;
}

.blog-article-title {
    margin-bottom: 1em;
}

.content {
    width: 100%;
    text-align: justify;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.9);
    overflow: hidden;
    padding: 2em;
}

.blog-article-media {
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 0.5em;
    width: 50%;
    float: left;
    margin-right: 2em;
}

.blog-article-media img {
    display: block;
    width: auto;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.blog-article-media::after {
    padding-top: 56.25%;
    display: block;
    content: '';
}

.article-actions {
    display: flex;
    justify-content: flex-end;
}

.article-actions a,
.article-actions button {
    margin: 1em 0.8em 0;
    color: var(--main-font-color);
    background:var(--main-background);
    border: 1px solid var(--main-background);
    padding: 0.5em 0.8em;
    border-radius: 0.3em;
    text-transform: uppercase;
    font-family: inherit;
}

.article-actions .delete-article-btn:hover {
    border-color: var(--main-background);
    color: #ffffff;
    background: #ff0000;
    box-shadow: 0px 0px 5px 1px var(--main-background);
}

.article-actions .edit-article-btn:hover {
    border-color:var(--main-background);
    background: #ffe600;
    box-shadow: 0px 0px 5px 1px #9d0551b4;
}
</style>
