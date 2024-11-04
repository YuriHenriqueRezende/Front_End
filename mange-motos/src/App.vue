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
    <footer>
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

</style>
