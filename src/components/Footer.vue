<template>
    <footer class="site-footer">
        <section class="footer-wrapper">
            <section class="contacts">
                <h6 class="footer-title">Contacts</h6>
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
                <h6 class="footer-title">Links</h6>
                <ul>
                    <li>
                        <a href="/">Help & FAQs</a>
                    </li>
                    <li>
                        <a href="/">Terms and Condition</a>
                    </li>
                    <li>
                        <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/">Delivery</a>
                    </li>
                    <li>
                        <a href="/">Refer a Friend</a>
                    </li>
                </ul>
            </section>

            <section class="social-media">
                <h6 class="footer-title">Social media</h6>
                <ul>
                    <li>
                        <a href="/"><i class="fab fa-facebook-square"></i></a>
                    </li>
                    <li>
                        <a href="/"><i class="fab fa-twitter-square"></i></a>
                    </li>
                    <li>
                        <a href="/"><i class="fab fa-instagram"></i></a>
                    </li>
                </ul>
            </section>
        </section>
    </footer>
    <section class="copyright">
        <p>Copyright &copy; 2023 - All Rights Reserved -
            <a href="/">Coffe Shop VueJS</a>
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
    position: relative;
}

.site-footer section {
    text-align: left;
    margin-bottom: 1em;
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