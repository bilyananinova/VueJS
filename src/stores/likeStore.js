import { defineStore } from 'pinia';
import { getSingleProduct } from '../services/products';
import { dislike, like } from '../services/likes';

export const useLikeStore = defineStore('like', {
  state: () => ({
    likes: 0,
    dislikes: 0,
    product: null,
  }),
  getters: {

  },
  actions: {
    async getProduct(id) {
      this.product = (await getSingleProduct(id)).data();
      this.likes = this.product.likes.length;
      this.dislikes = this.product.dislikes.length;
    },
    async setLike(productId, userId) {
      await like(productId, userId);
      this.getProduct(productId);
    },
    async setDislike(productId, userId) {
      await dislike(productId, userId);
      this.getProduct(productId);
    },
  },
});
