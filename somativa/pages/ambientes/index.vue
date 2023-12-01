<script setup>
  const { data: ambientes } = await useFetch('http://localhost:8000/ambientes');
  console.log(ambientes)

    let name;

  const save = async () => {
    await useFetch('http://localhost:8000/ambientes/', {
        method: 'POST',
        body: [{
            nome: name,
        }],
        key: 'post'
    });
    alert("Salvo ambiente");
    window.location.reload()
  }

</script>

<template>
    <div>
        <h1>Cadastro de Ambientes:</h1>
        <p>Nome: </p>
        <input type="text" v-model="name">
        <button @click="save">Adicionar</button>
        
        <section v-if="show === true">


        </section>

        
        <h1>Ambientes:</h1>
        <section v-for="ambiente in ambientes.data" 
        :key="ambiente.nome">
            <p>-{{ ambiente.nome }}</p>
        </section> 

    </div>

</template>