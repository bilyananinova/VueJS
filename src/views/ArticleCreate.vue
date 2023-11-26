<script>
export default {

};
</script>

<template>
  <h3>Create New Article</h3>
  <div class="form-wrapper create-article">
    <section class="form-section create-article-section">
      <form class="create-article-form">
        <label for="article-title">Title<span class="required">*</span></label>
        <input
          id="article-title"
          type="text"
          class="form-input"
          name="title"
        >
        <label for="article-content">Content<span class="required">*</span></label>
        <textarea
          id="article-content"
          cols="50"
          rows="15"
          name="content"
        />
        <label for="article-img">Image<span class="required">*</span></label>
        <input
          id="article-img"
          type="text"
          class="form-input"
          name="image"
        >
        <button type="submit" class="create-article-button">
          Create
        </button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.create-article {
    box-shadow: 0px -1px 7px 0px rgba(0, 0, 0, 0.9);
    width: 50%;
}

.create-article-section {
    margin: auto;
    padding: 3em 1em;
}

.create-article-form {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.create-article-form label {
    font-size: 1.2em;
    font-weight: 700;
    padding: 1em 0 0.3em;
}

.create-article-form input,
.create-article-form textarea {
    border: none;
    border: 1px solid var(--main-background);
    border-radius: 0.5em;
    padding: 0.5em;
}

.create-article-form input:focus,
.create-article-form input:hover,
.create-article-form textarea:focus,
.create-article-form textarea:hover {
    box-shadow: 0px 0px 5px 1px var(--main-shadow-hover);
    outline: none;
}

.create-article-button {
    margin: 2em 0 0.5em;
    padding: 0.5em;
    font-size: 1.1em;
    color: var(--main-font-color);
    font-weight: 700;;
    border: none;
    border-radius: 0.5em;
    background: var(--main-background);
}

.create-article-button:hover,
.create-article-button:focus {
    cursor: pointer;
}
</style>
