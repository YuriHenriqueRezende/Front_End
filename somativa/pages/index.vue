<script setup>
    definePageMeta({
        layout: "layout-login"
    });
  import { ref } from 'vue';

  const { data: login } = await useFetch('http://localhost:8000/usuarios');
  
  const selectedUser = ref(null);

  const save = async () => {
    if (selectedUser.value) {
      console.log('Usuário selecionado:', selectedUser.value);
    } else {
      console.warn('falha.');
    }
  };
</script>

<template>
  <div>
    <h1>FAÇA LOGIN</h1>
    <div>
      <div>
        <label for="">Selecione o usuário:</label>
        <select v-model="selectedUser">
          <option v-for="logon in login.data" :key="logon.id" :value="logon.email">
            {{ logon.email }}
          </option>
        </select>
        <br><br>
        <NuxtLink :to="'/Tarefas'">
        <button @click="save" v-if="selectedUser">ENTRAR</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
