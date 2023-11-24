<script>
export default {

};
</script>

<template>
    <section class="home-wrapper">
        <h3>From Our Blog</h3>
        <section class="last-articles">

            <a href="#">
                <section class="home-article-card">
                    <section class="home-article-image">
                        <img src="../assets/janko-ferlic-h9Iq22JJlGk-unsplash.jpg" alt="title" />
                    </section>
                    <header class="home-article-header">
                        <h6>Title</h6>
                    </header>
                    <section class="home-article-content">
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quisquam impedit repudiandae
                            praesentium vero sunt sequi voluptate quibusdam quas, numquam harum beatae porro accusamus
                            rerum.</p>
                    </section>
                </section>
            </a>

            <a href="#">
                <section class="home-article-card">
                    <section class="home-article-image">
                        <img src="../assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg" alt="title" />
                    </section>
                    <header class="home-article-header">
                        <h6>Title</h6>
                    </header>
                    <section class="home-article-content">
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quisquam impedit repudiandae
                            praesentium vero sunt sequi voluptate quibusdam quas, numquam harum beatae porro accusamus
                            rerum.</p>
                    </section>
                </section>
            </a>

            <a href="#">
                <section class="home-article-card">
                    <section class="home-article-image">
                        <img src="../assets/tina-guina-obV_LM0KjxY-unsplash.jpg" alt="title" />
                    </section>
                    <header class="home-article-header">
                        <h6>Title</h6>
                    </header>
                    <section class="home-article-content">
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quisquam impedit repudiandae
                            praesentium vero sunt sequi voluptate quibusdam quas, numquam harum beatae porro accusamus
                            rerum.</p>
                    </section>
                </section>
            </a>
        </section>

        <h3>From Our Shop</h3>
        <section class="last-products">
            <a href="#">
                <section class="home-coffee-card">
                    <section class="home-coffee-image">
                        <img src="../assets/janko-ferlic-h9Iq22JJlGk-unsplash.jpg" alt="title" />
                    </section>
                    <header class="home-coffee-header">
                        <h6>Title</h6>
                    </header>
                    <section class="home-coffee-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam ducimus esse perspiciatis
                            quae veritatis vel, itaque beatae, deleniti aliquid officia eum ex et cumque asperiores minima.
                        </p>
                    </section>
                </section>
            </a>

            <a href="#">
                <section class="home-coffee-card">
                    <section class="home-coffee-image">
                        <img src="../assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg" alt="title" />
                    </section>
                    <header class="home-coffee-header">
                        <h6>Title</h6>
                    </header>
                    <section class="home-coffee-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam ducimus esse perspiciatis
                            quae veritatis vel, itaque beatae, deleniti aliquid officia eum ex et cumque asperiores minima.
                        </p>
                    </section>
                </section>
            </a>

            <a href="#">
                <section class="home-coffee-card">
                    <section class="home-coffee-image">
                        <img src="../assets/tina-guina-obV_LM0KjxY-unsplash.jpg" alt="title" />
                    </section>
                    <header class="home-coffee-header">
                        <h6>Title</h6>
                    </header>
                    <section class="home-coffee-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam ducimus esse perspiciatis
                            quae veritatis vel, itaque beatae, deleniti aliquid officia eum ex et cumque asperiores minima.
                        </p>
                    </section>
                </section>
            </a>

        </section>
    </section>
</template>

<style scoped>
.home-wrapper {
    background: linear-gradient(rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.5)), url('../assets/home.jpg') no-repeat;
    background-size: cover;
    padding: 0.5em;
}

.home-wrapper h3 {
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 1);
}

.last-articles,
.last-products {
    margin: 2em auto 5em;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
}

.home-article-card,
.home-coffee-card {
    width: 18em;
    height: auto;
    padding: 0.5em;
    border-radius: 0.5em;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.9);
    color: black;
    background-color: #ffffff;
}

.home-article-image,
.home-coffee-image {
    position: relative;
    width: 100%;
    margin: 0.5em auto;
    border-radius: 0.5em;
    overflow: hidden;
}

.home-article-image::before,
.home-coffee-image::before {
    display: block;
    content: '';
    padding-top: 56.25%;
}

.home-article-image img,
.home-coffee-image img {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.home-article h6,
.home-coffee h6 {
    margin: 1em 0 0.5em;
}
</style>