<script setup>
import { onMounted } from 'vue';
import { useStarWarsStore } from '@/stores/starwars';

const starWarsStore = useStarWarsStore();

onMounted(async () => {
    if (starWarsStore.planets.length === 0) {
        await starWarsStore.fetchPlanets();
    }
});
</script>

<template>
    <div>
        <h1>Página de planetas</h1>
        <ul>
            <li v-for="planet in starWarsStore.planets" :key="planet.id">
                {{ planet.name }}
            </li>
        </ul>
    </div>
</template>