<script setup>
import { useStarWarsStore } from '@/stores/starwars';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const starWarsStore = useStarWarsStore();
const route = useRoute();

watch(
    () => route.params.id, 
    async (newId) => {
        await starWarsStore.fetchCharacterDetails(newId);
    }
);

onMounted(async () => {
    const characterId = route.params.id;
    await starWarsStore.fetchCharacterDetails(characterId);
});

</script>

<template>
    <div class="p-4 bg-gray-800 text-yellow-400 rounded">
        <h1 class="text-2xl font-bold">Detalle del personaje</h1>
        <div v-if="starWarsStore.characterDetails">
            <p class="text-yellow-200">{{ starWarsStore.characterDetails.name }}</p>
            <p>{{ starWarsStore.characterDetails.height }}</p>
            <p>{{ starWarsStore.characterDetails.mass }}</p>
            <div class="flex justify-between">
                <button class="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition">Editar</button>
                <button class="bg-red-600 text-white p-2 rounded hover:bg-red-500 transition" @click="starWarsStore.deleteCharacter(starWarsStore.characterDetails.id)">Eliminar</button>
            </div>
        </div>
        <div v-else>
            <p v-if="starWarsStore.loading">Cargando detalles del personaje...</p>
            <p v-else>Selecciona un personaje.</p>
        </div>
    </div>
</template>