<script setup>
import { useStarWarsStore } from '@/stores/starwars';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const starWarsStore = useStarWarsStore();
const route = useRoute();

onMounted(async () => {
    const characterId = route.params.id;
    await starWarsStore.fetchCharacterDetails(characterId);
});

</script>

<template>
    <div>
        <h1>Detalle del personaje</h1>
        <div v-if="starWarsStore.characterDetails">
            <p>{{ starWarsStore.characterDetails.name }}</p>
            <p>{{ starWarsStore.characterDetails.height }}</p>
        </div>
    </div>
</template>