<script>
export default {

};
</script>

<template>
  <section class="error-wrapper">
    <div>
      <h1 class="error-status">
        404
      </h1>
      <h4 class="error-heading">
        OOPS... PAGE IS NOT FOUND!
      </h4>
      <p class="error-content">
        Don't worry! Just follow the link bellow to back home page
      </p>
      <RouterLink class="error-link" to="/">
        Home
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.error-wrapper {
    border-radius: 0.3em;
    text-transform: uppercase;
    background: linear-gradient(
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.8)
      ), url('../assets/notFound.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
    padding: 4.5em;
}

.error-wrapper div::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    transform: translate(-50%, -50%);
}

.error-heading,
.error-content,
.error-status {
    color: #ffffff;
    text-shadow: 2px 2px 2px #000000;
    text-align: center;
}

.error-content {
    font-size: 1.3em;
    margin-bottom: 2em;
    padding: 2em;
}

.error-status {
    font-size: 5em;
}

.error-link {
    padding: 0.8em 1.8em;
    border-radius: 0.5em;
    color: #000000;
    background-color: #ffffff;
    margin: 2em;
}

.error-link:hover {
    padding: 0.8em 1.8em;
    border-radius: 0.5em;
    color: #000000;
    background-color: #ffffff;
}
</style>
