<script setup>
    let imagem = '';
    const route = useRoute();

    if(route.params.id == 1){
        imagem = 'https://static.vecteezy.com/ti/fotos-gratis/t2/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg';
    }
    else if(route.params.id == 2){
        imagem = 'https://static.vecteezy.com/ti/fotos-gratis/t2/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg';
    }
    else if(route.params.id == 3){
        imagem = 'https://static.vecteezy.com/ti/fotos-gratis/t2/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg';
    }
</script>
<template>
    <div>
        <h1>Welcome to the mato {{ $route.params.id }}</h1>
        <img :src="imagem">
    </div>
</template>