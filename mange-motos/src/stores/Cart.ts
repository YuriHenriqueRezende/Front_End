import { defineStore } from 'pinia';

export const useCart = defineStore('cart', {
  state: () => ({
    robots: [] as Array<any>, 
    purchaseHistory: [] as Array<any>,  
  }),

  actions: {
    addItemToCart(item: any) {
      this.robots.push(item);  
    },

    removeCart(index: number) {
      this.robots.splice(index, 1); 
    },

    checkout() {
      const purchase = {
        date: new Date().toLocaleString(),
        items: [...this.robots],  
        total: this.getTotalCost(),
      };
      this.purchaseHistory.push(purchase);
      this.robots = []; 
    },

    getTotalCost() {
      return this.robots.reduce((total, robot) => total + robot.cost, 0);  
    },
  },
});
