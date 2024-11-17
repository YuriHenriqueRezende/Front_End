<script setup lang="ts">
  import { getParts } from '@/services/part.services';
  import { type Ref, ref, reactive } from 'vue';
  import { Part, PartsResponse } from '@/models/Parts';
  import { useCart } from '@/stores/Cart';
  import PartSelector from '@/components/PartSelector.vue';
  import { ItemCart } from '@/models/Cart';
  
  //cria variavel e inicializa vazia
  const availableParts: Ref<PartsResponse> = ref(new PartsResponse());

  //chama backend e armazena na variavel
  getParts()
    .then((response)=>availableParts.value = response);
  
  const itemCart = new ItemCart();  
  const selectedParts = reactive<ItemCart>(itemCart);
  
  const addCart = ()=> {
    console.log("selected: ", selectedParts);

    selectedParts.updateCost();
    useCart().addCart(selectedParts)
  }
</script>

<template>
  <main id="build-page">
    <section class="top-row flex justify-content-around">
      <PartSelector :parts="availableParts.frente" 
      position="top" v-model="selectedParts.frente" />
    </section>

    <section class="middle-row flex justify-content-center">
      <PartSelector :parts="availableParts.motor" 
      position="left" v-model="selectedParts.motor" />

      <PartSelector :parts="availableParts.roda_frente" 
      position="center" v-model="selectedParts.roda_frente" />

      <PartSelector :parts="availableParts.roda_traseira" 
      position="right" v-model="selectedParts.roda_traseira" />
    </section>

    <section class="bottom-row flex justify-content-around">
      <PartSelector :parts="availableParts.roda_traseira" 
      position="bottom" v-model="selectedParts.base"/>
    </section>
    <div class="flex flex-row align-items-center justify-content-center">
      <button @click="" id="add-cart" class="mt-4 app-dark-button p-3">
      </button>
    </div>
  </main>
</template>
