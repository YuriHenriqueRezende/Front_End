<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useCart } from '@/stores/Cart';
import axios from 'axios';

// Usando o store para carrinho
const cart = useCart();

// Peças carregadas do servidor
const parts = reactive({
  frente: [] as any[],
  motor: [] as any[],
  rodaFrente: [] as any[],
  rodaTraseira: [] as any[],
});

// Peças selecionadas
const selectedParts = reactive({
  frente: null as any,
  motor: null as any,
  rodaFrente: null as any,
  rodaTraseira: null as any,
});

// Função para carregar dados do JSON Server
async function loadParts() {
  try {
    const frente = await axios.get('http://localhost:3000/frente');
    const motor = await axios.get('http://localhost:3000/motores');
    const rodaFrente = await axios.get('http://localhost:3000/roda-frente');
    const rodaTraseira = await axios.get('http://localhost:3000/roda_traseira');

    parts.frente = frente.data;
    parts.motor = motor.data;
    parts.rodaFrente = rodaFrente.data;
    parts.rodaTraseira = rodaTraseira.data;

    // Definir peças iniciais
    selectedParts.frente = parts.frente[0];
    selectedParts.motor = parts.motor[0];
    selectedParts.rodaFrente = parts.rodaFrente[0];
    selectedParts.rodaTraseira = parts.rodaTraseira[0];
  } catch (error) {
    console.error('Erro ao carregar peças:', error);
  }
}

// Trocar peça atual
function changePart(part: string) {
  const partList = parts[part as keyof typeof parts];
  const currentIndex = partList.findIndex(
    (item) => item.id === selectedParts[part as keyof typeof selectedParts]?.id
  );
  selectedParts[part as keyof typeof selectedParts] =
    partList[(currentIndex + 1) % partList.length];
}

// Adicionar ao carrinho
function addToCart() {
  const robot = {
    head: selectedParts.frente,
    torso: selectedParts.motor,
    base: selectedParts.rodaFrente,
    leftArm: selectedParts.rodaTraseira,
    rightArm: selectedParts.rodaTraseira,
    cost: selectedParts.motor?.price + selectedParts.rodaFrente?.price + selectedParts.rodaTraseira?.price,
  };
  cart.addItemToCart(robot); // Adiciona o item ao carrinho
  console.log(cart); // Verifique o conteúdo do carrinho
}

// Carregar peças ao montar o componente
onMounted(() => {
  loadParts();
});
</script>

<template>
  <div class="bike-builder">
    <!-- Frente -->
    <div class="part frente">
      <img :src="selectedParts.frente?.url" alt="Frente" />
      <button @click="changePart('frente')">Trocar Frente</button>
    </div>

    <!-- Motor -->
    <div class="part motor">
      <img :src="selectedParts.motor?.url" alt="Motor" />
      <button @click="changePart('motor')">Trocar Motor</button>
    </div>

    <!-- Roda da Frente -->
    <div class="part roda-frente">
      <img :src="selectedParts.rodaFrente?.url" alt="Roda Frente" />
      <button @click="changePart('rodaFrente')">Trocar Roda Frente</button>
    </div>

    <!-- Roda Traseira -->
    <div class="part roda-traseira">
      <img :src="selectedParts.rodaTraseira?.url" alt="Roda Traseira" />
      <button @click="changePart('rodaTraseira')">Trocar Roda Traseira</button>
    </div>

    <!-- Adicionar ao carrinho -->
    <button @click="addToCart">Adicionar ao Carrinho</button>
  </div>
</template>

<style scoped>
.bike-builder {
  display: grid;
  grid-template-areas:
    "frente motor"
    "roda-frente roda-traseira";
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.part {
  text-align: center;
}

.frente {
  grid-area: frente;
}

.motor {
  grid-area: motor;
}

.roda-frente {
  grid-area: roda-frente;
}

.roda-traseira {
  grid-area: roda-traseira;
}

img {
  max-width: 100px;
  display: block;
  margin: 0 auto 10px;
}
</style>
