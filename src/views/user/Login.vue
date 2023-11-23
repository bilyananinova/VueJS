<script>
export default {

}
</script>

<template>
    <h3>Login Page</h3>
    <div class="form-wrapper">

        <section class="form-img">
            <img src="../../assets/brigitte-tohm-yRH0JI2S2KA-unsplash.jpg"
                alt="" />
        </section>

        <section class="form-section">

            <form class="login-form">
                <label htmlFor="login-email">Email address<span class="required">*</span></label>
                <input type="email" class="form-input" id="login-email" name="email" placeholder="ivan@mail.bg" />

                <label htmlFor="login-password">Password <span class="required">*</span></label>
                <input type="password" class="form-input" id="login-password" name="password" placeholder="******" />

                <button type="submit" class="login-button">Login</button>

                <p>Don't have an account?
                    <a href="/register">Register</a> now.
                </p>
            </form>
            
        </section>
    </div>
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

.login-form {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50%;
    margin: 3em auto;
}

.login-form p {
    font-family: var(--main-font-family-headings);
}

.login-form label {
    opacity: 0.9;
    margin: 1.2em 0 0.5em;
}

.login-button {
    margin: 2em 0 1em;
    padding: 0.5em;
    font-size: 1.1em;
    color: var(--main-font-color);
    border: none;
    border-radius: 0.5em;
    background: var(--main-background);
}

.login-button:hover,
.login-button:focus {
    cursor: pointer;
}

.login-form input {
    border: none;
    border: 1px solid var(--main-background);
    border-radius: 0.5em;
    padding: 1em;
}

.login-form input:focus,
.login-form input:hover {
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