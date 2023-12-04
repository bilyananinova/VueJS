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
    setPresisted() {
      const persisted = sessionStorage.getItem('user');
      this.profile = JSON.parse(persisted);
    },
    setAdmin(id) {
      if (id === 'QZlU90HIsffGKWXSzuQaKvQ5BD13') {
        this.isAdmin = true;
      }
    },
    clearStorage() {
      this.profile = null;
      this.isAdmin = false;
      this.isAuth = false;
      sessionStorage.removeItem('user');
      sessionStorage.clear();
    },
  },
});
