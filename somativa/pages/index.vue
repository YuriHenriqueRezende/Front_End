<script setup>
  import { ref } from 'vue';

  const { data: login } = await useFetch('http://localhost:8000/usuarios');
  const selectedUser = ref(null);

  const save = async () => {
    if (selectedUser.value) {
      // A lógica para lidar com o botão sendo clicado quando uma opção está selecionada
      console.log('Usuário selecionado:', selectedUser.value);
    } else {
      // A lógica para lidar com o botão sendo clicado sem nenhuma opção selecionada
      console.warn('Selecione um usuário antes de entrar.');
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
        <button @click="save" v-if="selectedUser">ENTRAR</button>
      </div>
    </div>
  </div>
</template>
