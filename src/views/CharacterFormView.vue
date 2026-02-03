<script setup>
</script>
<template>
   <div>
       <h1>Crearo nuevo personaje o editar</h1>
       <form>
           <div>
               <label for="name">Nombre:</label>
               <input type="text" id="name" name="name" class="border border-gray-400 p-2 rounded w-full"/>
           </div>
           <div class="mt-4">
               <label for="species">Especie:</label>
               <input type="text" id="species" name="species" class="border border-gray-400 p-2 rounded w-full"/>
           </div>
           <div class="mt-4">
               <button type="submit" class="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition">Crear</button>
           </div>
       </form>

    </div>
</template>