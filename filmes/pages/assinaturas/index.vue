<script setup>
    const { data: subscriptions } = await useFetch('http://localhost:8000/assinatura');

    console.log(subscriptions.value)
</script>




<template>
    <div>
        <h1>Assinaturas Disponiveis</h1>

        <section v-for="assinatura in subscriptions" 
        :key="assinatura.id">
            <p>{{ assinatura.id }}</p>
        </section>   
    </div>
</template>