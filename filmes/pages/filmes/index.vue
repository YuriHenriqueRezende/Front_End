<script setup>
    const { data: film } = await useFetch('http://localhost:8000/filmes');

    console.log(film)
</script>

<template>
    <div>
        <h1>Filmes Disponiveis</h1>
        <section v-for="filmes in film" 
        :key="filmes">
            <h3>{{ filmes.nome }}</h3>
            <NuxtLink :to="`/filmes/${filmes.id}`">
                <img :src="'http://localhost:8000' + filmes.foto" alt="Imagem do Filme">
            </NuxtLink>
        </section>   
    </div>
</template>