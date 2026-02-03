<script setup>
import { useStarWarsStore } from '@/stores/starwars';
import { onMounted, ref, computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router'


const store = useStarWarsStore();
const searchQuery = ref('');

const filteredCharacters = computed(() => {
    if (!searchQuery.value) {
        return store.characters;
    }
    return store.characters.filter(char => 
        char.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

onMounted( () => {
    store.fetchCharacters();
});

</script>

<template>
    <div class="flex justify-between p-3 bg-black">
        <h1 class="text-3xl font-bold text-yellow-400 p-3">Personajes</h1>
        <RouterLink :to="{ name:'character-create'}" class="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition mt-4 inline-block mb-4">
            Crear nuevo personaje
        </RouterLink> 
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gray-900 text-yellow-500 p-4 rounded">
            <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Buscar personaje..." 
                class="w-full p-2 mt-4 mb-4 rounded bg-gray-800 text-yellow-400 border border-yellow-400"
            />
            <p class="text-gray-500 text-sm">{{ filteredCharacters.length }} encontrados de {{ store.characters.length }} personaje</p>
            <div v-for="char in filteredCharacters" :key="char.id" class="text-xl mt-5">
                <RouterLink :to="{ name: 'character-detail', params: { id: char.id } }" class="hover:text-yellow-300">
                    <h3>{{ char.name }}</h3>
                </RouterLink>
                <p class="text-sm text-gray-400">Especie: {{ char.species }}</p>
            </div>
        </div>
        <div>
            <RouterView />
        </div>
    </div>
</template>
