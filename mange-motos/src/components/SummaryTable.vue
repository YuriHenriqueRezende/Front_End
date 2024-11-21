<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "SummaryPage",
  setup() {
    const route = useRoute();

    // Dados recebidos
    const selectedParts = reactive(JSON.parse(route.params.selectedParts || "{}"));

    // Soma dos preços
    const totalPrice = computed(() => {
      return (
        (selectedParts.frente?.price || 0) +
        (selectedParts.motor?.price || 0) +
        (selectedParts.rodaFrente?.price || 0) +
        (selectedParts.rodaTraseira?.price || 0)
      );
    });

    return { selectedParts, totalPrice };
  },
});
</script>

<template>
  <div class="summary-page">
    <h1>Resumo das Peças Selecionadas</h1>
    <table>
      <thead>
        <tr>
          <th>Peça</th>
          <th>Nome</th>
          <th>Preço (R$)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frente</td>
          <td>{{ selectedParts.frente?.name }}</td>
          <td>{{ selectedParts.frente?.price || 0 }}</td>
        </tr>
        <tr>
          <td>Motor</td>
          <td>{{ selectedParts.motor?.name }}</td>
          <td>{{ selectedParts.motor?.price || 0 }}</td>
        </tr>
        <tr>
          <td>Roda Frente</td>
          <td>{{ selectedParts.rodaFrente?.name }}</td>
          <td>{{ selectedParts.rodaFrente?.price || 0 }}</td>
        </tr>
        <tr>
          <td>Roda Traseira</td>
          <td>{{ selectedParts.rodaTraseira?.name }}</td>
          <td>{{ selectedParts.rodaTraseira?.price || 0 }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">Total</td>
          <td>{{ totalPrice }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
.summary-page {
  text-align: center;
}
table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 80%;
}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
tfoot td {
  font-weight: bold;
}
</style>
