// import { ValuesController } from "./Controllers/ValuesController.js";
import { WildPokemonController } from "./Controllers/WildPokemonController.js";
import { CaughtPokemonController } from "./Controllers/CaughtPokemonController.js";

class App {
  // valuesController = new ValuesController();
  wildPokemonController = new WildPokemonController();
  caughtPokemonController = new CaughtPokemonController();
}

window["app"] = new App();
