<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/menu.vue';
</script>

<template>
  <main id="home-app">
    <div id="content-app">
      <header>
        <nav>
          <Menu />
        </nav>
      </header>
      <RouterView />
    </div>
    <footer class="flex flex-row align-items-end justify-content-end">

    </footer>
  </main>
</template>

<style scoped lang="scss">
#home-app{
  height: 90%;
  width: 80%;
  background-color: var(--app-card-background);
  border-radius: 1.5rem;
}
footer{
  width: 100%;
  height: 20%;
  background-color: var(--app-footer-background);
  border-radius: 0 0 1.5rem 1.5rem;
}

</style>
