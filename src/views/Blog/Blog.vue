<script>
import { articles } from '../../constants/articles';
import BlogArticleCard from './BlogArticleCard.vue';

export default {
  components: { BlogArticleCard },
  data() {
    return {
      articles,
    };
  },
};
</script>

<template>
  <h3>From the blog</h3>
  <section class="blog-wrapper">
    <div class="blog">
      <BlogArticleCard v-for="article in articles" :key="article.id" :article="article" />
    </div>
  </section>
</template>

<style scoped>
.blog-wrapper {
    margin: 3em auto 1em;
    width: 70%;
}

.blog {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
