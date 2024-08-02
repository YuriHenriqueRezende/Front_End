<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main id="card-app">
    <div id="content-app">
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cart">cart</RouterLink>
        <RouterLink to="/build">build</RouterLink>
      </nav>
  </header>
      <RouterView />
    </div>
    <footer>

    </footer>
  </main>
</template>

<style scoped>

</style>
