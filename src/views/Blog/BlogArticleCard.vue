<script>
export default {
  props: {
    article: {
      type: Object,
      requred: true,
      title: String,
      id: String,
      content: String,
      img: String,
    },
  },
};
</script>

<template>
  <article class="blog-article-card">
    <div class="blog-article-card-image">
      <router-link :to="`/articles/${article.id}`">
        <img :src="article.img" :alt="article.title">
      </router-link>
    </div>
    <header class="blog-article-card-header">
      <h6 class="blog-article-card-title">
        <router-link :to="`/articles/${article.id}`">
          {{ article.title }}
        </router-link>
      </h6>
    </header>
    <div class="blog-article-card-body">
      <p>
        {{ article.content.substring(0, 250) }}...
      </p>
    </div>
    <footer class="blog-article-card-footer">
      <router-link :to="`/articles/${article.id}`" class="read-more">
        read more
      </router-link>
    </footer>
  </article>
</template>

<style scoped>
.blog-article-card {
  border-radius: 0.5em;
  background: var(--main-cards-background);
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.9);
  width: 18em;
  flex: 0 0 30%;
  margin-bottom: 3em;
}

.blog-article-card-image {
  width: 100%;
  height: 10em;
  display: block;
  position: relative;
  overflow: hidden;
  margin: auto;
  border-radius: 0.5em;
}

.blog-article-card-image img {
  display: block;
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.blog-article-card-image img::after {
  padding-top: 100%;
  content: '';
  display: block;
}

.blog-article-card-title a {
  color: inherit;
}

.blog-article-card-body {
  padding: 1em 1em 0 1em;
}

.blog-article-card-footer a {
  display: block;
  padding: 1.5em;
  text-align: center;
  text-transform: uppercase;
  color: var(--main-background);
  text-shadow: 1px 1px 1px #000000;
  font-weight: 700;
}
</style>
