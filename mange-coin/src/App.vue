<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/menu.vue';
</script>

<template>
  <header>
    <Menu />

  </header>
  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
