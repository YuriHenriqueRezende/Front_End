<script setup>
  const { data: cargos } = await useFetch('http://localhost:8000/cargos');
  console.log(cargos)

</script>

<template>
    <h1>CARGOS:</h1>
    <section v-for="cargo in cargos.data" 
        :key="cargo.nome">
            <p>{{ cargo.nome }}:</p>
            <p>nivelAcesso:{{ cargo.nivelAcesso }}</p>
            <br><br>
        </section>   
</template>