<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Conta">Conta</RouterLink>
        <RouterLink to="/Roleta">Roleta</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
