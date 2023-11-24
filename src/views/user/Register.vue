<script>
export default {

};
</script>

<template>
  <h3>Registration Page</h3>
  <section class="form-wrapper">
    <section class="form-section">
      <form class="register-form">
        <label for="register-name">Name <span class="required">*</span></label>
        <input
          id="register-name"
          type="text"
          class="form-input"
          name="name"
          placeholder="Ivan Ivanov"
        >

        <label for="register-email">Email address<span class="required">*</span></label>
        <input
          id="register-email"
          type="email"
          class="form-input"
          name="email"
          placeholder="ivan@mail.bg"
        >

        <label for="register-password">Password <span class="required">*</span></label>
        <input
          id="register-password"
          type="password"
          class="form-input"
          name="password"
          placeholder="******"
        >

        <label for="register-repeat-password">Repeat Password <span class="required">*</span></label>
        <input
          id="register-repeat-password"
          type="password"
          class="form-input"
          name="rePassword"
          placeholder="******"
        >

        <button type="submit" class="register-button">
          Register
        </button>

        <p>
          Already have an account...
          <router-link to="/login">
            Login
          </router-link> now.
        </p>
      </form>
    </section>

    <section class="form-img">
      <img src="../../assets/register.jpg" alt="">
    </section>
  </section>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  box-shadow: 0px -1px 37px 0px rgba(0, 0, 0, 0.75);
  width: 60%;
  margin: 3em auto 5em;
}

.form-section {
  flex: 0 0 50%;
  position: relative;
}

.register-form {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
  margin: 3em auto;
}

.register-form p {
  font-family: var(--main-font-family-headings);
}

.register-form label {
  opacity: 0.9;
  margin: 1.2em 0 0.5em;
}

.register-button {
  margin: 2em 0 1em;
  padding: 0.5em;
  font-size: 1.1em;
  color: var(--main-font-color);
  border: none;
  border-radius: 0.5em;
  background: var(--main-background);
}

.register-button:hover,
.register-button:focus {
  cursor: pointer;
}

.register-form input {
  border: none;
  border: 1px solid var(--main-background);
  border-radius: 0.5em;
  padding: 1em;
}

.register-form input:focus,
.register-form input:hover {
  box-shadow: 0px 0px 5px 1px var(--main-background-shadow);
  outline: none;
}

.form-img {
  display: block;
  position: relative;
  overflow: hidden;
  flex: 0 0 50%;
}

.form-img img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  position: absolute;
}

.form-img img:after {
  padding-top: 100%;
  content: '';
  display: block;
}
</style>
