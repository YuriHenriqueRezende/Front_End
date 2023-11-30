<script setup>
    const route = useRoute();

const {data: tarefa} = 
await useFetch(`http://localhost:8000/tarefas/${route.params.id}`,{
    key: 'tarefaRequest'
});

const {data: tarefaCom} = 
await useFetch(`http://localhost:8000/tarefasUsuarios?tarefa=${route.params.id}`,{
});

  console.log(tarefa);
  console.log(tarefaCom);

</script>

<template>
    
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
            <br><br>
            <section v-for="tarefas in tarefaCom.data" :key="tarefa.id">
                <p>Responsaveis: {{ tarefas.idUsuarioFK.nome }}</p>
                <img :src="tarefas.idUsuarioFK.image" alt="solicitante">
            </section>


</template>