<script>
export default {

};
</script>

<template>
  <h3>Our Coffee</h3>
  <section class="products-wrapper">
    <section class="products-list">
      <section class="product-card">
        <div class="product-image">
          <img src="../assets/janko-ferlic-h9Iq22JJlGk-unsplash.jpg" alt="title">
        </div>
        <div class="product-details">
          <header class="product-header">
            <h5>Title</h5>
          </header>

          <span class="product-price">20.20$</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, iste esse! Eligendi sunt neque
            perspiciatis ex, doloremque excepturi totam dolore facilis odio voluptatibus minima ea eaque
            architecto quaerat ducimus recusandae!
          </p>

          <div class="product-action">
            <router-link to="details" class="details-btn">
              <i class="fas fa-wine-bottle" />
              details
            </router-link>

            <button class="like-btn">
              <i class="fas fa-thumbs-up" /><span>5</span>
            </button>

            <button class="dislike-btn">
              <i class="fas fa-thumbs-down" /><span>2</span>
            </button>

            <button class="add-btn">
              <i class="fas fa-shopping-cart" />add to cart
            </button>

            <router-link to="edit" class-name="edit-btn">
              <i class="fas fa-edit" />edit
            </router-link>
            <button class="delete-btn">
              <i class="fas fa-trash-alt" />delete
            </button>
          </div>
        </div>
      </section>
      <section class="product-card">
        <div class="product-image">
          <img src="../assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg" alt="title">
        </div>
        <div class="product-details">
          <header class="product-header">
            <h5>Title</h5>
          </header>

          <span class="product-price">20.20$</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, iste esse! Eligendi sunt
            neque
            perspiciatis ex, doloremque excepturi totam dolore facilis odio voluptatibus minima ea eaque
            architecto quaerat ducimus recusandae!
          </p>

          <div class="product-action">
            <router-link to="details" class="details-btn">
              <i class="fas fa-wine-bottle" />
              details
            </router-link>

            <button class="like-btn">
              <i class="fas fa-thumbs-up" /><span>5</span>
            </button>

            <button class="dislike-btn">
              <i class="fas fa-thumbs-down" /><span>2</span>
            </button>

            <button class="add-btn">
              <i class="fas fa-shopping-cart" />add to cart
            </button>

            <router-link to="edit" class-name="edit-btn">
              <i class="fas fa-edit" />edit
            </router-link>
            <button class="delete-btn">
              <i class="fas fa-trash-alt" />delete
            </button>
          </div>
        </div>
      </section>
      <section class="product-card">
        <div class="product-image">
          <img src="../assets/tina-guina-obV_LM0KjxY-unsplash.jpg" alt="title">
        </div>
        <div class="product-details">
          <header class="product-header">
            <h5>Title</h5>
          </header>

          <span class="product-price">20.20$</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, iste esse! Eligendi sunt
            neque
            perspiciatis ex, doloremque excepturi totam dolore facilis odio voluptatibus minima ea eaque
            architecto quaerat ducimus recusandae!
          </p>

          <div class="product-action">
            <router-link to="details" class="details-btn">
              <i class="fas fa-wine-bottle" />
              details
            </router-link>

            <button class="like-btn">
              <i class="fas fa-thumbs-up" /><span>5</span>
            </button>

            <button class="dislike-btn">
              <i class="fas fa-thumbs-down" /><span>2</span>
            </button>

            <button class="add-btn">
              <i class="fas fa-shopping-cart" />add to cart
            </button>

            <router-link to="edit" class-name="edit-btn">
              <i class="fas fa-edit" />edit
            </router-link>
            <button class="delete-btn">
              <i class="fas fa-trash-alt" />delete
            </button>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<style  scoped>
.products-wrapper {
    display: flex;
    width: 65%;
    margin: auto;
}

.products-list {
    padding-left: 2em;
    margin: auto;
}

.product-card {
    box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 0.3em;
    display: flex;
    position: relative;
    margin: 2em 0;
}

.product-image {
    flex: 0 0 20%;
    margin: 1em;
    display: block;
    position: relative;
    overflow: hidden;
}

.product-image img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 100%;
    position: absolute;
}

.product-image img::after {
    padding-top: 100%;
    content: '';
    display: block;
}

.product-details {
    text-align: left;
    margin: 0;
    padding: 0 2em;
}

.product-header {
    margin: 0.5em 0;
}

.product-header p {
    opacity: 0.6;
}

.product-price {
    color: var(--price-font-color);
    font-weight: 600;
}

.product-action {
    margin: 1.5em 0;
}

.product-action i {
    padding-right: 0.5em;
}

.product-action button,
.product-action a {
    border: none;
    padding: 0.5em 0.8em;
    border-radius: 0.3em;
    text-transform: uppercase;
    color: var(--main-font-color);
    background: var(--main-background);
    margin-right: 0.8em;
}

.product-action button:hover,
.product-action a:hover {
    border-color: var(--main-background-shadow);
    color: var(--main-font-color);
    background: #ffffff;
    box-shadow: 0px 0px 5px 1px var(--main-background-shadow);
}

.like-btn span,
.dislike-btn span,
.add-btn,
.delete-btn {
    font-family: Verdana, Geneva, sans-serif;
}
</style>
