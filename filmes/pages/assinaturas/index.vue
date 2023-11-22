<script setup>
    const { data: subscriptions } = await useFetch('http://localhost:8000/assinatura');

    console.log(subscriptions.value)
</script>


<template>
    <div>
        <h1>Assinaturas Disponiveis</h1>

        <section v-for="assinatura in subscriptions" 
        :key="assinatura" >
            <span>{{ assinatura.nome }}: R$ </span>
            <span>{{ assinatura.valor }} </span>
        </section>   
    </div>
</template>