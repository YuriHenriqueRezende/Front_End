<script setup>
    const route = useRoute();

    const {data: filmFound} = 
    await useFetch(`http://localhost:8000/filmes/${route.params.id}`,{
    key: 'tripRequest'
});
</script>


<template>
    <div>
        <h1> Nome do Filme: {{ filmFound.nome }} </h1>
        <p> Categoria: {{ filmFound.idCategoriaFK.nome }} </p>
        <p> Descrição: {{ filmFound.descricao }} </p>
        <img :src="'http://localhost:8000' + filmFound.banner" alt="Imagem do Filme">
    </div>
</template>