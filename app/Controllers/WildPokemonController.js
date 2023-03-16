import { appState } from "../AppState.js";
import { wildPokemon } from "../Models/WildPokemon.js";
import { wildPokemonsService } from "../Services/WildPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText} from "../Utils/Writer.js"

function _drawWildPokemon() {
    let pokemon = appState.wildPokemon
    let template = ''
    pokemon.forEach(p => template += wildPokemon.listTemplate(p))
    setHTML('wild-pokemon', template)
}

export class WildPokemonController {
    constructor() {
        console.log('construct');
        this._drawWildPokemon()
        appState.on('wildPokemon', _drawWildPokemon())
    }

    async getWildPokemon() {
        try {
            await wildPokemonsService.getWildPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}