<template>
    <section>
      <h2>{{ title }}</h2>
      <div class="part-list">
        <PartCard v-for="part in parts" :key="part.id" :part="part" />
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
import PartCard from "./PartCard.vue";
  
  export default defineComponent({
    name: "PartList",
    components: { PartCard },
    props: {
      title: {
        type: String,
        required: true,
      },
      endpoint: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const parts = ref<any[]>([]);
  
      // Fetch data from the API
      const fetchParts = async () => {
        try {
          const response = await fetch(props.endpoint);
          parts.value = await response.json();
        } catch (error) {
          console.error("Erro ao buscar peças:", error);
        }
      };
  
      onMounted(fetchParts);
  
      return { parts };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .part-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>
  