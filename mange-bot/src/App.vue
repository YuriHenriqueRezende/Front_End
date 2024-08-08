<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import footerBot from './components/footerBot.vue';
</script>

<template>   
  <main id="card-app">
    <div id="content-app">
      <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/cart">Cart</RouterLink>
          <RouterLink to="/build">Build</RouterLink>
        </nav>
      </header>

      <RouterView /> 
    </div>
    <footer class="flex flex-row align-items-end justify-content-end">
      <div class="footer-bots flex flex-row justify-content-evenly">
        <footerBot img="bot0.png" text="robo feliz"/>
        <footerBot img="bot1.png" text="robo do amor"/>
        <footerBot img="bot2.png" text="robo do radio"/>
      </div>

    </footer>
  </main>

</template>

<style scoped lang="scss">
#card-app{
  height: 90%;
  width: 80%;
  background-color: var(--app-card-background);
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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

@media (max-height: 880px){
  #content-app{
    height: 80%;
  }
}


</style>
