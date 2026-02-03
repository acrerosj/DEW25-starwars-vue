<script setup>
import { useStarWarsStore } from '@/stores/starwars';
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'


const store = useStarWarsStore();

onMounted( () => {
    store.fetchCharacters();
});

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gray-900 text-yellow-500 p-4 rounded">
            <h1 class="text-2xl font-bold">Personajes</h1>
            <div v-for="char in store.characters" :key="char.id" class="text-xl mt-5">
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
