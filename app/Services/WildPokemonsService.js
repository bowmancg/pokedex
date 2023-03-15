import { appState } from "../AppState.js";
import { wildPokemon } from "../Models/WildPokemon.js";

export const pokeApi = new axios.create ({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 8000
})

class WildPokemonsService {
    async getWildPokemon() {
        const res = await pokeApi.get('wildPokemon')
        console.log('[wild pokemon]', res.data);
        appState.wildPokemon = res.data.results
    }
}

export const wildPokemonsService = new WildPokemonsService()