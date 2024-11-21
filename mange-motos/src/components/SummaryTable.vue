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
