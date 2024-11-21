<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useCart } from '@/stores/Cart';
import axios from 'axios';

const cart = useCart();

const parts = reactive({
  frente: [] as any[],
  motor: [] as any[],
  rodaFrente: [] as any[],
  rodaTraseira: [] as any[],
});

const selectedParts = reactive({
  frente: null as any,
  motor: null as any,
  rodaFrente: null as any,
  rodaTraseira: null as any,
});

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

    selectedParts.frente = parts.frente[0];
    selectedParts.motor = parts.motor[0];
    selectedParts.rodaFrente = parts.rodaFrente[0];
    selectedParts.rodaTraseira = parts.rodaTraseira[0];
  } catch (error) {
    console.error('Erro ao carregar peças:', error);
  }
}

function changePart(part: string) {
  const partList = parts[part as keyof typeof parts];
  const currentIndex = partList.findIndex(
    (item) => item.id === selectedParts[part as keyof typeof selectedParts]?.id
  );
  selectedParts[part as keyof typeof selectedParts] =
    partList[(currentIndex + 1) % partList.length];
}

function addToCart() {
  const robot = {
    head: selectedParts.frente,
    torso: selectedParts.motor,
    base: selectedParts.rodaFrente,
    leftArm: selectedParts.rodaTraseira,
    rightArm: selectedParts.rodaTraseira,
    cost: selectedParts.motor?.price + selectedParts.rodaFrente?.price + selectedParts.rodaTraseira?.price,
  };
  cart.addItemToCart(robot);
}

function checkout() {
  const purchase = {
    date: new Date().toLocaleString(),
    items: cart.robots,
    total: cart.getTotalCost(),
  };
  cart.checkout();
  alert('Compra realizada com sucesso!');
}

onMounted(() => {
  loadParts();
});
</script>

<template>
  <div class="bike-builder">
    <div class="part frente">
      <img :src="selectedParts.frente?.url" alt="Frente" />
      <button @click="changePart('frente')">Trocar Frente</button>
    </div>

    <div class="part motor">
      <img :src="selectedParts.motor?.url" alt="Motor" />
      <button @click="changePart('motor')">Trocar Motor</button>
    </div>

    <div class="part roda-frente">
      <img :src="selectedParts.rodaFrente?.url" alt="Roda Frente" />
      <button @click="changePart('rodaFrente')">Trocar Roda Frente</button>
    </div>

    <div class="part roda-traseira">
      <img :src="selectedParts.rodaTraseira?.url" alt="Roda Traseira" />
      <button @click="changePart('rodaTraseira')">Trocar Roda Traseira</button>
    </div>

    <button @click="addToCart">Adicionar ao Carrinho</button>
    <button @click="checkout">Finalizar Compra</button>
  </div>
</template>

<style scoped>
/* Estilos semelhantes ao BikeBuilder */
</style>
