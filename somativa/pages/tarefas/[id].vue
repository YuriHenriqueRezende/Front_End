<script setup>
    const route = useRoute();

const {data: tarefa} = 
await useFetch(`http://localhost:8000/tarefas/${route.params.id}`,{
    key: 'tarefa'
});
  console.log(tarefa);
</script>

<template>
    <div>
        <NuxtLink to="/">login</NuxtLink> <br>
        <NuxtLink to="/tarefas">tarefas</NuxtLink> <br>
        <NuxtLink to="/detalhado">detalhado</NuxtLink> <br>
        <NuxtLink to="/cargos">cargos</NuxtLink> <br>
    </div>
    
    <h1>Detalhes:</h1>
            <p>{{ tarefa.data.nome }}</p>
</template>