<script setup>
import { useStarWarsStore } from '@/stores/starwars';


const store = useStarWarsStore();
</script>

<template>
    <h1>Número de personajes {{ store.characters.length }}</h1>
</template>