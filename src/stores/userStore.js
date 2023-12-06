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
      sessionStorage.setItem('user', JSON.stringify(this.profile));
    },
    setPersistedProfile() {
      const persisted = sessionStorage.getItem('user');
      if (persisted) {
        this.profile = JSON.parse(persisted);
        this.isAuth = true;
        this.isAdmin = this.setAdmin(this.profile.id);
      }
    },
    setAdmin(id) {
      if (id === 'QZlU90HIsffGKWXSzuQaKvQ5BD13') {
        return this.isAdmin = true;
      }
      return this.isAdmin = false;
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
