<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="bg-gray-100 dark:bg-gray-900">
  <header class="bg-black text-yellow-400 text-center border-b-2 border-yellow-400 p-4 flex justify-between items-center">
    <div>
      <h1 class="text-5xl font-bold">Star Wars</h1>
    </div>
    <nav class="flex flex-row gap-4">
      <RouterLink 
        to="/"
        class="hover:bg-gray-800 p-4 rounded hover:text-yellow-400 transition"
      >Home</RouterLink>
      <RouterLink to="/characters"
        class="hover:bg-gray-800 p-4 rounded hover:text-yellow-400 transition"
      >Personajes</RouterLink>
      <RouterLink to="/planets"
        class="hover:bg-gray-800 p-4 rounded hover:text-yellow-400 transition"
      >Planetas</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView />
    
  </main>
  <footer>
    <p>© 2024 Star Wars Fan Page</p>
  </footer>
</div>
</template>

<style scoped>

</style>
