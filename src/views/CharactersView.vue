<script setup>
import { useStarWarsStore } from '@/stores/starwars';
import { onMounted } from 'vue';


const store = useStarWarsStore();

onMounted( () => {
    store.fetchCharacters();
});

</script>

<template>
    <h1>Personajes</h1>
    <div v-for="char in store.characters" :key="char.id">
        <RouterLink :to="`/character/${char.id}`">
            <h3>{{ char.name }}</h3>
        </RouterLink>
        <p>Especie: {{ char.species }}</p>
    </div>
</template>
