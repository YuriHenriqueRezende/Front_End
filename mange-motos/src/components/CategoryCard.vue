<script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "CategoryCard",
    props: {
      title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  });
  </script>

<template>
  <div class="category-card">
    <h2>{{ title }}</h2>
    <img :src="image" :alt="`Imagem da categoria ${title}`" />
  </div>
</template>

  <style lang="scss" scoped>
  .category-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    max-width: 250px;
    background-color: #fff;
  
    img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  }
  </style>
  