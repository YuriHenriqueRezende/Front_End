<script setup lang="ts">
import { useCart } from '@/stores/Cart';

const cart = useCart(); // Acessando o store Cart
</script>

<template>
  <div class="account-page">
    <h1>Minha Conta</h1>

    <section class="historico">
      <h2>Histórico de Compras</h2>
      <table v-if="cart.purchaseHistory.length > 0">
        <thead>
          <tr>
            <th>Data</th>
            <th>Itens</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(purchase, index) in cart.purchaseHistory" :key="index">
            <td>{{ purchase.date }}</td>
            <td>
              <ul>
                <li v-for="(item, itemIndex) in purchase.items" :key="itemIndex">
                  {{ item.head.title }} - {{ item.torso.title }} - {{ item.base.title }}
                </li>
              </ul>
            </td>
            <td>R${{ purchase.total.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>

      <p v-else>Nenhuma compra realizada ainda.</p>
    </section>
  </div>
</template>

<style scoped>
.account-page {
  padding: 20px;
}

h1 {
  text-align: center;
}

section.historico {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
