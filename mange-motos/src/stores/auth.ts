import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as { username: string } | null,
  }),
  actions: {
    async login(username: string, password: string): Promise<boolean> {
      if (username === 'admin' && password === 'password123') {
        this.isAuthenticated = true;
        this.user = { username };
        return true;
      }
      return false;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
