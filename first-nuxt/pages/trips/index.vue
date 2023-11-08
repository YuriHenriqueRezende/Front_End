<script setup>
    const { data: allimages } = await useFetch('http://localhost:8000/image');

</script>



<template>
    <div>
        <section>
            <h3>{{ allimages.results[0].title }}</h3>
            <img :src="allimages.results[0].lik">
        </section>
        <!---
        <NuxtLink to="/trips/1">
            <img src="https://static.vecteezy.com/ti/fotos-gratis/t2/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg" alt="">
        </NuxtLink>
        <NuxtLink to="/trips/2">
            <img src="https://static.vecteezy.com/ti/fotos-gratis/t2/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg" alt="">
        </NuxtLink>
        <NuxtLink to="trips/3">
            <img src="https://static.vecteezy.com/ti/fotos-gratis/t2/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg" alt="">
        </NuxtLink>
        -->
    </div>
</template>