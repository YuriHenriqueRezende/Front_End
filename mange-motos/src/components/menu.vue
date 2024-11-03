<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/Conta">Conta</RouterLink>
    <RouterLink to="/Roleta">Roleta</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #555;
}

nav a.router-link-active {
  background-color: #007bff;
  color: white;
}
</style>
