import { defineStore } from 'pinia';
import api from '../services/apiService';

export const useStarWarsStore = defineStore('starWars', {
    state: () => ({
       characters: [], 
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
        }
    }
})