<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const rounter = useRouter();

const goToBuild = ()=> rounter.push('/build');

</script>

<template>
  <div class="flex flex-row align-items-center justify-content-evenly">
    <section class="flex flex-column align-items-center">
        <h1>{{ $t('HOME.TITLE') }}</h1>
        <button class="mt-4 app-dark-button" @click="goToBuild" id="order">{{ $t('HOME.ORDER') }}</button>
    </section>
    <section>
      <img src="/big-bot.png" alt="robot">
    </section>
  </div>
</template>

<style scoped lang="scss">
  h1{
    font-size: 5rem;
    width: 25rem;
    text-align: center;
  }
  #order{
    height: 3.2rem;
    width: 20rem;
    border-radius: 2.5rem;
  }
</style>