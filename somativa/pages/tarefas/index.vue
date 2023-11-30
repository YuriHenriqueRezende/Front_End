<script setup>
  const { data: tarefa } = await useFetch('http://localhost:8000/tarefas?all');
  console.log(tarefa);
</script>

<template>
    <h1>Tarefas</h1>
    <section v-for="taref in tarefa.data" 
        :key="taref.nome">
            <p>{{ taref.nome }}:</p>
            <p> Status: {{ taref.idStatusFK.nome }}</p>
            <p> Ambiente: {{ taref.idAmbienteFK.nome }}</p>
            <p> Prazo.: {{ taref.prazo }}</p>
            <NuxtLink :to="`/tarefas/${taref.id}`">
                <button>Detalhes</button>
            </NuxtLink>
            <br><br>
        </section>   
</template>