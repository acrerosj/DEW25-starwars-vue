import { defineStore } from 'pinia';
import api from '../services/apiService';

export const useStarWarsStore = defineStore('starWars', {
    state: () => ({
        loading: false,
        characters: [], 
        planets: [],
        characterDetails: null,
    }),
    actions: {
        async fetchCharacters() {
            this.loading = true;
            try {
                const { data } = await api.getCharacters();
                this.characters = data;
            } catch {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        async fetchPlanets() {
            this.loading = true;
            try {
                const { data } = await api.getPlanets();
                this.planets = data;
            } catch {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        async fetchCharacterDetails(id) {
            this.loading = true;
            try {
                const { data } = await api.getCharacterDetails(id);
                this.characterDetails = data;
            } catch {
                console.error(error);
            } finally {
                this.loading = false;
            }
        }
    }
})