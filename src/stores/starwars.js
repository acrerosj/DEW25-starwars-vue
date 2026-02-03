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
            this.characterDetails = null;
            try {
                const { data } = await api.getCharacterDetails(id);
                this.characterDetails = data;
            } catch {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        async createCharacter(characterData) {
            this.loading = true;
            try {
                const { data } = await api.createCharacter(characterData);
                this.characters.push(data);
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        async updateCharacter(id, characterData) {
            this.loading = true;
            try {
                const { data } = await api.updateCharacter(id, characterData);
                const index = this.characters.findIndex(c => c.id === id);
                if (index !== -1) {
                    this.characters[index] = data;
                }
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        async deleteCharacter(id) {
            this.loading = true;
            try {
                await api.deleteCharacter(id);
                this.characters = this.characters.filter(c => c.id !== id);
                this.characterDetails = null;
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        }
    }
})