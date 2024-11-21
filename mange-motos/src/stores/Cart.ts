// src/stores/Cart.ts
import { defineStore } from 'pinia';

export const useCart = defineStore('cart', {
  state: () => ({
    robots: [] as Array<any>,  // Carrinho atual
    purchaseHistory: [] as Array<any>,  // Histórico de compras
  }),

  actions: {
    addItemToCart(item: any) {
      this.robots.push(item);  // Adiciona item ao carrinho
    },

    removeCart(index: number) {
      this.robots.splice(index, 1);  // Remove item do carrinho
    },

    checkout() {
      // Ao finalizar a compra, move o conteúdo do carrinho para o histórico
      const purchase = {
        date: new Date().toLocaleString(),
        items: [...this.robots],  // Clona os itens
        total: this.getTotalCost(),
      };
      this.purchaseHistory.push(purchase);
      this.robots = [];  // Limpa o carrinho
    },

    getTotalCost() {
      return this.robots.reduce((total, robot) => total + robot.cost, 0);  // Calcula o custo total
    },
  },
});
