<script setup>
    const route = useRoute();

    const {data: tripFound} = 
    await useFetch(`http://localhost:8000/trip/${route.params.id}`,{
        key: 'tripRequest'
    });

    const {data: availabilities} = 
    await useFetch(`http://localhost:8000/availability?tripFK=${route.params.id}&onlyAvailable=true`,{
        key: 'availableRequest'
    });

    //no javascript existem basicamente 3 formas de
    //criar uma variável: 'const', 'let' our 'var'
    //const--> variável fixa não muda seu valor
    //let --> variável que muda valor no escopo onde ela foi criada
    //var---> variável que muda valor em toda a aplicação
    let showForm = false;
    const setShowForm = () => {
        //alert("Cliquei no botão!")
        showForm = true;
        refreshNuxtData()
    }   

    //criando as variáveis que vão armazenar os dados do formulario html
    let startDate;
    let endDate;
    let peopleAmount;
    let hasPet;
    //função chamada quando o usuario clicar para enviar o formulario
    const saveTrip = async () => {
        //imprimindo no console do navegador APENAS PARA TESTE
        console.log("startDate", startDate);
        console.log("endDate", endDate);
        console.log("peopleAmount", peopleAmount);
        console.log("hasPet", hasPet);

       await useFetch('http://localhost:8000/booking/',{
            method: 'POST',
            //lado esquerdo é o mesmo do backend,
            //lado direito é a variável do front
            body: {  
                customUserFK: 1, //usuario está fixo pois não temos autenticação de usuarios ainda
                tripFK: route.params.id, //trip que foi selecionada 
                startDate: startDate,
                endDate: endDate,
                people: peopleAmount,
                hasPet: hasPet
            },
            key: 'bookingPost'            
        });

        alert("Booking saved!");
    }

        

    /*let dynamicImage = [
    'https://cf.bstatic.com/xdata/images/hotel/square200/438794734.webp?k=39395abd8a4d31dff2a9a7addf21f922ed1ca609e73442d5645ca834de6e35f8&o=',
    'https://cf.bstatic.com/xdata/images/hotel/square200/295787269.webp?k=9446d3203db1d1988381bb113c9f49726f844a16c4abcc8e8ec0e19e1c56be6a&o=',
    'https://cf.bstatic.com/xdata/images/hotel/square200/499805594.webp?k=836bcafc226388b95ae5396c84d9355fd4965586c886f64ebcc9549e32301a50&o='
    ];*/
        
    //acessamos o mecanismo de rotas do NUXT
    // if(route.params.id == 1){
    //     dynamicImage = 'https://cf.bstatic.com/xdata/images/hotel/square200/438794734.webp?k=39395abd8a4d31dff2a9a7addf21f922ed1ca609e73442d5645ca834de6e35f8&o=';
    // }
    // else if(route.params.id == 2){
    //     dynamicImage = 'https://cf.bstatic.com/xdata/images/hotel/square200/295787269.webp?k=9446d3203db1d1988381bb113c9f49726f844a16c4abcc8e8ec0e19e1c56be6a&o=';
    // }
    // else if(route.params.id == 3){
    //     dynamicImage = 'https://cf.bstatic.com/xdata/images/hotel/square200/499805594.webp?k=836bcafc226388b95ae5396c84d9355fd4965586c886f64ebcc9549e32301a50&o=';
    // }
</script>

<template>
    <div>       
        <!-- <p :class="variavelAtributo" > {{ variavelConteudo }} </p> -->
        <!-- <img :src="dynamicImage[route.params.id - 1]"> -->
        <h1>Welcome to trip: {{ tripFound.title }} </h1>
        <p> {{ tripFound.description }} </p>
        <p> Daily: US${{ tripFound.daily }} </p>
        <p> Address: {{ tripFound.address }} </p>

        <br><br>

        <button @click="setShowForm">
            Reserve já!        
        </button>

        <br><br>
        <section v-if="showForm === true">
           <!-- <div>
                <label for="">Data Inicial:</label> <input type="date" v-model="startDate"> <br>
           </div>
           <div>
                <label for="">Data Final:</label> <input type="date" v-model="endDate"> <br>
           </div> -->
           <div>
                <label for="">Data Inicial:</label> 
                <select v-model="startDate">
                    <!-- availableDate: variavel que é criada dentro do for cada vez que repete 
                         availabilities.results: variavel que foi criada no script p/ receber dados do back
                         value: valor que será selecionado em cada opção
                         {{ availableDate.date }} : o que será exibido em cada opção
                    -->
                    <option v-for="availableDate in availabilities.results" 
                    :key="availableDate.id" :value="availableDate.date"> 
                        {{ availableDate.date }}
                    </option>                    
                </select>
                <br>
           </div>
           <div>
                <label for="">Data Final:</label> 
                <select v-model="endDate">
                    <!-- availableDate: variavel que é criada dentro do for cada vez que repete 
                         availabilities.results: variavel que foi criada no script p/ receber dados do back
                         value: valor que será selecionado em cada opção
                         {{ availableDate.date }} : o que será exibido em cada opção
                    -->
                    <option v-for="availableDate in availabilities.results" 
                    :key="availableDate.id" :value="availableDate.date"> 
                        {{ availableDate.date }}
                    </option>                    
                </select>
                <br>
           </div>
           <div>
                <label for="">Qtd. Pessoas:</label> <input type="number" v-model="peopleAmount"> <br>
           </div>
           <div>
                <label for="">Tem Pet?</label> <input type="checkbox" v-model="hasPet"> <br>
           </div>
           <br>
           <button @click="saveTrip">Realizar Reserva</button>
        </section>

    </div>
</template>