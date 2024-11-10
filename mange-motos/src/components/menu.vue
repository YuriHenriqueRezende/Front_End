<script setup lang="ts">
</script>

<template>
  <header class="flex flex-row align-items-center justify-content-start">
    <img src="/logo.png" alt="moto">
    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Conta">Conta</RouterLink>
    <RouterLink to="/Motos">Motos</RouterLink>
  </nav>
  </header>
</template>

<style scoped lang="scss">
header{
  height: 5rem;
}

</style>
