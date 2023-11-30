<script setup>
    const route = useRoute();

const {data: tarefa} = 
await useFetch(`http://localhost:8000/tarefas/${route.params.id}`,{
    key: 'tarefaRequest'
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
            <p> Tarefa: {{ tarefa.data.nome }}</p>
            <p> Status: {{ tarefa.data.idStatusFK.nome }}</p>
            <p> Ambiente: {{ tarefa.data.idAmbienteFK.nome }}</p>
            <p> Prazo: {{ tarefa.data.prazo }}</p>
            <p> Inicio: {{ tarefa.data.dataInicio }}</p>
            <p> Fim: {{ tarefa.data.dataFim }}</p>
            <p>Descrição: {{ tarefa.data.descricao }}</p>
            <p>Solicitação: {{ tarefa.data.idSolicitanteFK.nome }}</p>
            <img :src="tarefa.data.idSolicitanteFK.image" alt="solicitante">

</template>