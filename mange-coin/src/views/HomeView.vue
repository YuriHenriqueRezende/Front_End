<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>


<template>
  <div class="home">
    <img src="@/assets/images/tela.png" alt="Casino Not Found" class="background-image" />
    <div class="message">SEJA BEM VINDO AO CASINO MANGE COIN</div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.5;
}

.message {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
</style>
