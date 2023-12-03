import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      profile: null,
      isAuth: false,
      isAdmin: false,
    };
  },
  actions: {
    setProfile(data) {
      this.profile = data;
      this.isAuth = true;
      sessionStorage.setItem('user', JSON.stringify(data));
    },
    setAdmin(id) {
      if (id === 'QZlU90HIsffGKWXSzuQaKvQ5BD13') {
        this.isAdmin = true;
      }
    },
  },
});
