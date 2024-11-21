<template>
    <div class="part-card">
      <img :src="part.url" :alt="part.name" />
      <h3>{{ part.name }}</h3>
      <p>Preço: R$ {{ part.price }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from "vue";
  
  export default defineComponent({
    name: "PartCard",
    props: {
      part: {
        type: Object as PropType<{ id: number; name: string; price: number; url: string }>,
        required: true,
      },
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .part-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    max-width: 150px;
    img {
      max-width: 100%;
      border-radius: 4px;
    }
    h3 {
      font-size: 1rem;
      margin: 10px 0;
    }
    p {
      font-size: 0.9rem;
      color: #555;
    }
  }
  </style>
  