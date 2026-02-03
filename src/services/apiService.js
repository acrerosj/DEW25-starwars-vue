import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default {
    // Métodos de personajes
    getCharacters() {
        return apiClient.get('/characters');
    },
    getPlanets() {
        return apiClient.get('/planets');
    },
    getCharacterDetails(id) {
        return apiClient.get(`/characters/${id}`);
    },
    createCharacter(characterData) {
        return apiClient.post('/characters', characterData);
    },
    updateCharacter(id, characterData) {
        return apiClient.put(`/characters/${id}`, characterData);
    },
    deleteCharacter(id) {
        return apiClient.delete(`/characters/${id}`);
    }
    
};