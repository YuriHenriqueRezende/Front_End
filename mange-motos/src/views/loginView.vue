<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "LoginView",
  setup() {
    const email = ref("");
    const senha = ref("");
    const mensagem = ref("");
    const sucesso = ref(false);

    const fazerLogin = async () => {
      try {
        const resposta = await axios.get("http://localhost:3000/login", {
          params: { email: email.value, senha: senha.value },
        });

        const usuario = resposta.data.find(
          (user: any) =>
            user.email === email.value && user.senha === senha.value
        );

        if (usuario) {
          mensagem.value = "Login realizado com sucesso!";
          sucesso.value = true;
        } else {
          mensagem.value = "Credenciais inválidas. Tente novamente.";
          sucesso.value = false;
        }
      } catch (error) {
        mensagem.value = "Erro ao conectar ao servidor.";
        sucesso.value = false;
        console.error(error);
      }
    };

    return {
      email,
      senha,
      mensagem,
      sucesso,
      fazerLogin,
    };
  },
});
</script>

<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="fazerLogin">
      <div>
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div>
        <label for="senha">Senha:</label>
        <input v-model="senha" type="password" id="senha" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
    <p v-if="mensagem" :class="{ success: sucesso, error: !sucesso }">
      {{ mensagem }}
    </p>
  </div>
</template>

<style scoped>
.login-container {
  width: 300px;
  margin: auto;
  text-align: center;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>
