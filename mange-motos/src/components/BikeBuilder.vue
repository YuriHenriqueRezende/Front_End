<template>
    <div class="bike-builder">
      <!-- Partes da moto -->
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
  
      <!-- Botão para ir para a tela de resumo -->
      <button @click="goToSummary">Ver Resumo</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  
  export default defineComponent({
    name: "BikeBuilder",
    setup() {
      const router = useRouter();
  
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
        const frente = await axios.get("http://localhost:3000/frente");
        const motor = await axios.get("http://localhost:3000/motores");
        const rodaFrente = await axios.get("http://localhost:3000/roda-frente");
        const rodaTraseira = await axios.get("http://localhost:3000/roda_traseira");
  
        parts.frente = frente.data;
        parts.motor = motor.data;
        parts.rodaFrente = rodaFrente.data;
        parts.rodaTraseira = rodaTraseira.data;
  
        selectedParts.frente = parts.frente[0];
        selectedParts.motor = parts.motor[0];
        selectedParts.rodaFrente = parts.rodaFrente[0];
        selectedParts.rodaTraseira = parts.rodaTraseira[0];
      }
  
      function changePart(part: string) {
        const partList = parts[part as keyof typeof parts];
        const currentIndex = partList.findIndex(
          (item) => item.id === selectedParts[part as keyof typeof selectedParts]?.id
        );
        selectedParts[part as keyof typeof selectedParts] =
          partList[(currentIndex + 1) % partList.length];
      }
  
      function goToSummary() {
        router.push({ name: "Summary", state: { selectedParts } });
      }
  
      loadParts();
  
      return { parts, selectedParts, changePart, goToSummary };
    },
  });
  </script>
  