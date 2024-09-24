<script setup lang="ts">
import { defineComponent } from 'vue';

</script>

<template>
  <main>
    <div class="fullscreen-image">
        <h1>Tela Nao Encontrada</h1>
        <img src="@/assets/images/tela.png" alt="">
    </div>
  </main>
</template>

<style scoped>
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1; /* Coloca a imagem atrás de outros elementos, se necessário */
}

.fullscreen-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Faz a imagem ocupar toda a tela sem distorcer */
  object-position: center; /* Centraliza a imagem caso seja cortada */
}
</style>
