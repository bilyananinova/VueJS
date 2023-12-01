<script>
export default {
  props: {
    errors: [],
  },
};
</script>

<template>
  <div class="container">
    <p v-for="error in errors" :key="`error-${error.lenght}`" class="warning">
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.container {
  background: #ff000093;
  text-align: center;
  display: inline-block;
  position: absolute;
  /* margin: auto; */
  right: 0;
  transform: translateX(-50%);
  border-radius: 0.3em;
  padding: 0.8em;
}

.warning {
  color: #fff;
}
</style>
