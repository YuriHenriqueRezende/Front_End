<script setup>
  const { data: tarefa } = await useFetch('http://localhost:8000/tarefas');
  console.log(tarefa);
</script>




<template>
    <div>
        <NuxtLink to="/">login</NuxtLink> <br>
        <NuxtLink to="/tarefas">tarefas</NuxtLink> <br>
        <NuxtLink to="/detalhado">detalhado</NuxtLink> <br>
        <NuxtLink to="/ambientes">ambientes</NuxtLink> <br>
        <NuxtLink to="/cargos">cargos</NuxtLink> <br>
    </div>
    <h1>Tarefas</h1>
    <section v-for="taref in tarefa.data" 
        :key="taref.nome">
            <p>{{ taref.nome }}:</p>
            <br><br>
        </section>   
</template>