<script>
import { mapState } from 'pinia';
import { helpers, required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
import { useUserStore } from '../../stores/userStore';

export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['onSubmit'],
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      errorMsg: '',
      content: '',
    };
  },
  computed: {
    ...mapState(useUserStore, ['isAuth', 'profile']),
  },
  validations() {
    return {
      content: {
        required: helpers.withMessage('Content is required!', required),
      },
    };
  },
  methods: {
    async onSubmit() {
      if (await this.v$.$validate()) {
        this.$emit('onSubmit', this.content);
        this.content = '';
      }
      else {
        this.errorMsg = this.v$?.$errors[0].$message;
      }
    },
  },
};
</script>

<template>
  <div>
    <section class="commentSection">
      <h5>Comments</h5>
      <template v-if="comments.length">
        <div v-for="comment in comments" :key="comment.createdAt" class="comment">
          <p>
            <span class="author">{{ comment.author }}</span> - <span class="date">{{ new
              Date(comment.createdAt).toLocaleString() }}</span>
          </p>
          <p class="comment-content">
            {{ comment.content }}
          </p>
        </div>
      </template>
      <div v-else class="comment">
        <p class="comment-content">
          No comments yet...
        </p>
      </div>
    </section>

    <form v-if="isAuth" class="commentForm" @submit.prevent="onSubmit">
      <h5>Add a review</h5>
      <label for="author">From:</label>
      <input
        id="author"
        type="text"
        name="author"
        :value="profile?.name"
        disabled
      >
      <label class="content">Comment:</label>
      <textarea
        id="content"
        v-model="content"
        name="content"
        placeholder="Leave a comment..."
        cols="5"
        rows="2"
      />
      <span v-if="errorMsg">{{ errorMsg }}</span>
      <input type="submit">
    </form>
  </div>
</template>

<style scoped>
.commentSection {
  width: 60em;
  margin: 2em auto;
  background-color: #eef2f5;
  padding: 1em 0;
}

.commentSection .comment {
  background-color: #fff;
  margin: 1em;
  padding: 0.3em;
  text-align: left;
}

.commentSection .author {
  color: inherit;
  font-weight: 700;
}

.commentSection .date {
  font-weight: 100;
  font-size: 12px;
  opacity: 0.7;
}

.commentForm {
  background-color: #eef2f5;
  margin: 3em auto;
  padding-left: 1em;
  display: flex;
  width: 60em;
  flex-direction: column;
}

.commentForm input,
.commentForm label,
.commentForm textarea {
  align-self: start;
  padding: 0.5em;
}

.commentForm input,
.commentForm textarea {
  border: 1px solid var(--main-background);
  border-radius: 0.5em;
}

.commentForm input:is(:hover, :focus),
.commentForm textarea:is(:hover, :focus) {
  outline: none;
  box-shadow: 0px 0px 5px 1px var(--main-background);
}

.commentForm textarea {
  width: 95%;
}

.commentForm input[type="submit"] {
  margin: 1em 0;
  border: 1px solid var(--main-background);
  padding: 0.5em 0.8em;
  border-radius: 0.3em;
  text-transform: uppercase;
  color: var(--main-font-color);
  background: var(--main-background);
}

input[type="submit"]:is(:hover, :focus) {
  border-color: var(--main-background);
  background: #ffffff;
  box-shadow: 0px 0px 5px 1px var(--main-background);
}

.commentForm span {
  color: #ff0000;
  align-self: flex-start;
}
</style>
