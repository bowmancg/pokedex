export class wildPokemon {
    constructor(name, url) {
        this.name = name,
        this.url = url
    }

    static listTemplate() {
        return `
            <div class="row align-items-center">
            <img class="img-fluid" src="${wildPokemon.url}" alt="">
            <div class="col-4 fw-bold selectable my-1 py-1" onclick="app.wildPokemonController.getWildPokemon()">${wildPokemon.name}</div>
            </div>
            `
    }

}