import { defineStore } from 'pinia';
import { getUserCart } from '../services/cart';
import { useUserStore } from './userStore';

export const useCartStore = defineStore('cart', {
  state: () => ({
    productsCount: 0,
    products: [],
  }),
  getters: {
    getCount: (state) => {
      return state.productsCount = state.products.length;
    },
  },
  actions: {
    async setCart() {
      const userStore = useUserStore();
      this.products = await getUserCart(userStore.profile?.id);
    },
  },
});
