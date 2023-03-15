import { appState } from "../AppState.js";
import { wildPokemon } from "../Models/WildPokemon.js";
import { pokeApi } from "./AxiosService.js";


class WildPokemonsService {
    async getWildPokemon() {
        const res = await pokeApi.get('wildPokemon')
        console.log('[wild pokemon]', res.data);
        appState.wildPokemon = res.data.results
    }
}

export const wildPokemonsService = new WildPokemonsService()