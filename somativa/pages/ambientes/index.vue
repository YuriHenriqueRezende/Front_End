<script setup>
  const { data: ambientes } = await useFetch('http://localhost:8000/ambientes');
  console.log(ambientes)

  let show = false;
    const setbutton = () => {
        //alert("Cliquei no botão!")
        show = true;
        refreshNuxtData()
    } 

</script>

<template>
    <div>
        <h1>Cadastro de Ambientes:</h1>
        <p>Nome: </p>
        <input type="text">
        <button @click="setbutton">Adicionar</button>
        
        <section v-if="show === true">
            

        </section>

        
        <h1>Ambientes:</h1>
        <section v-for="ambiente in ambientes.data" 
        :key="ambiente.nome">
            <p>-{{ ambiente.nome }}</p>
        </section> 

    </div>

</template>