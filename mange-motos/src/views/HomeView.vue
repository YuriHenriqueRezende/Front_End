<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>


<template>
  <div class="flex flex-row align-items-center justify-content-evenly">
    <section class="flex flex-column align-items-center">
      <h1>Monte sua moto!</h1>
      <button>Quero montar</button>
      <section>
        <img src="/moto.png" alt="">
      </section>
    </section>
  </div>
</template>

<style scoped>

</style>
