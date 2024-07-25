<script setup>
    //funçao useFetch vai chamar o backend como se fosse o Insomnia
    const { data: allImages } = await useFetch('http://localhost:8000/image');

</script>

<template>
    <div>
        <!-- <section v-for="(image,id) in allImages.results" 
         :key="id"> -->
        <section v-for="image in allImages.results" 
        :key="image.id">
            <h3>{{ image.tripFk }} - {{ image.title }}</h3>
            <!-- <NuxtLink :to="'/trips/' + image.tripFk"></NuxtLink> -->
            <NuxtLink :to="`/trips/${image.tripFk}`">
                <img :src="image.link" alt="Imagem viagem">
            </NuxtLink>
        </section>   

        <!--<NuxtLink to="/trips/1">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/438794734.webp?k=39395abd8a4d31dff2a9a7addf21f922ed1ca609e73442d5645ca834de6e35f8&o=" >
        </NuxtLink>
        <NuxtLink to="/trips/2">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/295787269.webp?k=9446d3203db1d1988381bb113c9f49726f844a16c4abcc8e8ec0e19e1c56be6a&o=" >
        </NuxtLink>
        <NuxtLink to="/trips/3">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/499805594.webp?k=836bcafc226388b95ae5396c84d9355fd4965586c886f64ebcc9549e32301a50&o=" >
        </NuxtLink>
        -->
    </div>
</template>