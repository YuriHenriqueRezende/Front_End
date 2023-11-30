<script setup>
  const { data: ambientes } = await useFetch('http://localhost:8000/ambientes');
  console.log(ambientes)

</script>


<template>
    <div>
        <h1>Cadastro de Ambientes:</h1>

        <h1>Ambientes:</h1>
        <section v-for="ambiente in ambientes.data" 
        :key="ambiente.nome">
            <p>-{{ ambiente.nome }}</p>
        </section> 

    </div>

</template>