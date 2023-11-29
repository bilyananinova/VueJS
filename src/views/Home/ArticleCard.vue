<script>
export default {
  props: {
    article: {
      type: Object,
      requered: true,
      id: String,
      title: String,
      content: String,
      img: String,
    },
  },
};
</script>

<template>
  <router-link :to="`/articles/${article.id}`">
    <section class="home-article-card">
      <section class="home-article-image">
        <img :src="article.img" :alt="article.title">
      </section>
      <header class="home-article-header">
        <h6>{{ article.title }}</h6>
      </header>
      <section class="home-article-content">
        <p>
          {{ article.content.substring(0, 150) }}...
        </p>
      </section>
    </section>
  </router-link>
</template>

<style scoped>
.home-article-card {
    width: 22em;
    height: auto;
    padding: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.9);
    color: var(--main-font-color);
    background: var(--main-cards-background);
}

.home-article-image {
    position: relative;
    width: 100%;
    margin: 0.5em auto;
    border-radius: 0.5em;
    overflow: hidden;
}

.home-article-image::before {
    display: block;
    content: '';
    padding-top: 56.25%;
}

.home-article-image img {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.home-article-content p {
    padding-bottom: 1em;
}
</style>
