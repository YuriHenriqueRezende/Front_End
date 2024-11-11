<script setup lang="ts">
</script>

<template>
  <header class="flex flex-row align-items-center justify-content-start">
    <img src="/logo.png" alt="moto">
    <nav class="ml-5">
      <a href="ml-5"></a>
    <RouterLink class="m-4" to="/">Home</RouterLink>
    <RouterLink class="m-4"to="/Conta">Conta</RouterLink>
    <RouterLink class="m-4" to="/Motos">Motos</RouterLink>
  </nav>
  </header>
</template>

<style scoped lang="scss">
header{
  height: 5rem;
  width: 40rem;
  img{
    margin-left: 4rem;
    height: 4rem;
  }
  a{
    text-decoration: none;
    font-size: 1.5rem;
    color: var(--app-dark-text-color);
  }
  .router-link-exact-active{
    font-weight: bold;
  }
}

</style>
