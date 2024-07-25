<template class="main">
      <main class="painel login_main">
        <div>
          <h1 class="painel letra">EXERCICIOS:</h1>
          <div class="letra">
            <NuxtLink to="/" style="color: #dedede">Pagina Inicial</NuxtLink>&nbsp;
            <NuxtLink to="/ex1" style="color: #dedede">Exercicio 1</NuxtLink>&nbsp;
            <NuxtLink to="/ex2" style="color: #dedede">Exercicio 2</NuxtLink>&nbsp;
            <NuxtLink to="/ex3" style="color: #dedede">Exercicio 3</NuxtLink>&nbsp;
            <NuxtLink to="/ex4" style="color: #dedede">Exercicio 4</NuxtLink>
          </div>
        </div>
      </main>

  </template>

<style scoped lang="scss">
    .painel {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .login_main{
      background-color: rgb(145, 22, 22);
    }
    .letra{
      color: var(--light-background-color);
    }


</style>