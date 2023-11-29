<script setup>
  const { data: cargos } = await useFetch('http://localhost:8000/cargos');
  console.log(cargos)

</script>

<template>
    <div>
        <NuxtLink to="/">login</NuxtLink> <br>
        <NuxtLink to="/tarefas">tarefas</NuxtLink> <br>
        <NuxtLink to="/ambientes">ambientes</NuxtLink> <br>
        <NuxtLink to="/cargos">cargos</NuxtLink> <br>
    </div>
    <h1>CARGOS:</h1>
    <section v-for="cargo in cargos.data" 
        :key="cargo.nome">
            <p>{{ cargo.nome }}:</p>
            <p>{{ cargo.nivelAcesso }}</p>
            <br><br>
        </section>   
</template>