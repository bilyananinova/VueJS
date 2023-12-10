<script>
import { deleteProduct, getProductsCollection } from '../../services/products';
import CatalogProductCard from './CatalogProductCard.vue';

export default {
  components: { CatalogProductCard },
  data() {
    return {
      products: [],
      startParam: undefined,
      endParam: 0,
      sortBy: 'sortDefault',
    };
  },
  computed: {
    filteredList() {
      let tempProducts = this.products;
      if (this.startParam !== undefined) {
        tempProducts = tempProducts.filter(prod => prod.price >= this.startParam && prod.price <= this.endParam);
      }

      if (this.sortBy === 'sortDefault') {
        tempProducts = tempProducts.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
      };

      if (this.sortBy === 'sortToHightPrice') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }

      if (this.sortBy === 'sortToLowPrice') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }

      if (this.sortBy === 'sortAZ') {
        tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (this.sortBy === 'sortZA') {
        tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      return tempProducts;
    },
  },
  watch: {
    filteredList() { },
    products() { },
  },
  async created() {
    this.products = await getProductsCollection();
  },
  methods: {
    async deleteProd(productId) {
      await deleteProduct(productId);
      await this.updateCatalogProduct();
    },
    async updateCatalogProduct() {
      this.products = await getProductsCollection();
    },
    filter(from, to) {
      this.startParam = from;
      this.endParam = to;
    },
  },
};
</script>

<template>
  <h3>Our Coffee</h3>
  <section class="products-wrapper">
    <aside class="products-aside">
      <div class="sort-div">
        <label for="sort">Sort By</label>
        <select id="sort" v-model="sortBy" name="sortBy">
          <option value="sortDefault">
            Default
          </option>
          <option value="sortToHightPrice">
            Sort by price: low to high
          </option>
          <option value="sortToLowPrice">
            Sort by price: high to low
          </option>
          <option value="sortAZ">
            Name: A-Z
          </option>
          <option value="sortZA">
            Name: Z-A
          </option>
        </select>
      </div>
      <div class="filter-div">
        <span>Filter By Price</span>
        <button @click="filter(0, 20)">
          0 - 20$
        </button>
        <button @click="filter(20, 40)">
          20$ - 40$
        </button>
        <button @click="filter(40, 60)">
          40$ - 60$
        </button>
        <button @click="filter()">
          All Price
        </button>
      </div>
    </aside>
    <section class="products-list">
      <CatalogProductCard
        v-for="product in filteredList"
        :key="product.id"
        :product="product"
        @remove="deleteProd($event, id)"
      />
    </section>
  </section>
</template>

<style  scoped>
.products-wrapper {
  width: 70%;
  margin: auto;
  display: flex;
}

.products-list {
  margin-left: 1em;
  flex: 1 1 75%;
}

.products-aside {
  display: flex;
  flex: 1 1 25%;
  flex-direction: column;
  margin-bottom: 1em;
  color: var(--main-font-color);

}

#sort {
  padding: 0.5em 0.8em;
  font-family: var(--main-font-family-headings);
  border-radius: 0.3em;
  font-size: 1.1em;
  border-color: var(--main-background);
}

.sort-div,
.filter-div {
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  padding: 1.5em;
}

.sort-div label,
.filter-div span {
  font-size: 1.3em;
  font-family: var(--main-font-family-headings);
  padding-bottom: 0.3em;
}

.filter-div button {
  padding: 0.5em 0.8em;
  margin: 0.2em 0;
  border: 1px solid var(--main-background);
  border-radius: 0.3em;
  background: transparent;
}

#sort:hover,
.filter-div button:hover {
  background: #fff;
  border-color: var(--main-background);
  box-shadow: 0px -1px 10px 0px var(--main-background);
}
</style>
