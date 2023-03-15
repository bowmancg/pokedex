import { appState } from "../AppState.js";
import { caughtPokemon } from "../Models/CaughtPokemon.js";

export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/chandler/pokemon',
    timeout: 8000
})

class CaughtPokemonsService {

}

export const caughtPokemonsService = new CaughtPokemonsService()