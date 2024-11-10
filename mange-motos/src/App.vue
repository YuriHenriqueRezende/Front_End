<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/menu.vue';
import info from './components/info.vue';
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
      <div class="footer-motos flex flex-row justify-content-evenly">
        <info img="todas.png" text="test"/>
        <info img="" text=""/>
        <info img="" text=""/>
      </div>
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
#content-app{
  height: calc(100% - 10rem);
}
footer{
  width: 100%;
  height: 20%;
  max-height: 10rem;
  background-color: var(--app-footer-background);
  border-radius: 0 0 1.5rem 1.5rem;
}

.footer-motos{
    width: 80%;
    margin: auto;
  }

@media (max-height: 880px){
  #content-app{
    height: 80%;
  }
}

</style>
