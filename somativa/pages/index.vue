<script setup>

    const { data: login } = await useFetch('http://localhost:8000/usuarios');
    let fazerlogin;

    const save = async () => {
        
    }

</script>

<template>
        <h1>FAÇA LOGIN</h1>
    <div>        

  <div>
    <label for="">Selecione o usuário:</label>
    <select v-model="fazerlogin">
            <option v-for="logon in login.data" :key="logon.id" :value="logon.email">
                {{ logon.email }} 
            </option>                    
    </select>
    <br><br>
    
    <button @click="save">ENTRAR</button>

  </div>
    </div>
</template>
