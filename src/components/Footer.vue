<template>
  <footer class="site-footer">
    <section class="footer-wrapper">
      <section class="contacts">
        <h6 class="footer-title">
          Contacts
        </h6>
        <ul>
          <li>
            <address>
              Street Name &amp; Number, Town, Postcode/Zip
            </address>
          </li>
          <li>+359 888 000 000</li>
          <li>email@mail.bg</li>
        </ul>
      </section>

      <section class="links">
        <h6 class="footer-title">
          Links
        </h6>
        <ul>
          <li>
            <router-link to="/">
              Help & FAQs
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Terms and Condition
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Privacy Policy
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Delivery
            </router-link>
          </li>
          <li>
            <router-link to="/">
              Refer a Friend
            </router-link>
          </li>
        </ul>
      </section>

      <section class="social-media">
        <h6 class="footer-title">
          Social media
        </h6>
        <ul>
          <li>
            <router-link to="/">
              <i class="fab fa-facebook-square" />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fab fa-twitter-square" />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="fab fa-instagram" />
            </router-link>
          </li>
        </ul>
      </section>
    </section>
  </footer>
  <section class="copyright">
    <p>
      Copyright &copy; 2023 - All Rights Reserved -
      <router-link to="/">
        Coffe Shop VueJS
      </router-link>
    </p>
  </section>
</template>

<style scoped>
.footer-wrapper {
    width: 80%;
    display: flex;
    margin: 2em auto;
    justify-content: space-evenly;
}

.site-footer {
    display: flex;
    background: var(--main-background);
    color: var(--main-font-color-footer);
    text-shadow: 1px 2px 3px #302f2f;
    position: relative;
}

.site-footer section {
    text-align: left;
    margin-bottom: 1em;
}

.site-footer .links li,
.site-footer .social-media li {
    text-shadow: none;
}

.footer-title {
    padding-bottom: 0.5em;
}

.site-footer ul {
    padding: 0;
    margin-bottom: 0.3em;
}

.site-footer ul li {
    padding: 0.5em 0;
}

.social-media ul li {
    display: inline;
    padding-right: 1em;
    font-size: 1.5em;
}

.site-footer ul li a {
    color: var(--main-font-color);
}

.copyright {
    background: var(--main-copyright-background);
    color: var(--main-font-color-footer);
}

.copyright p {
    padding: 1.5em;
    margin: 0;
}

.copyright a {
    color: var(--main-font-color);
}
</style>
