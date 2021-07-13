import { example } from "./data.js";
import pokemon from "./data/pokemon/pokemon.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';
let todosOsPokemons = data.pokemon;
let allCards = document.getElementById("all-cards");


function criarCard(pokemon) {
  return `
    <div class="card">
        <p class="pokemon-name">${pokemon.name}</p>
        <img
            class="pokemon-img"
            src="${pokemon.img}"
            alt="${pokemon.name}"
        />
        <p class="type">Type:${pokemon.type}</p>
        <p class="about">
            About:${pokemon.about}
        </p>
        <p class="resistant">
            Resistant: ${pokemon.resistant}
        </p>
    </div>
    `;
}

let pokemonsList = ``;
for (let index = 0; index < todosOsPokemons.length; index++) {
  pokemonsList += criarCard(todosOsPokemons[index]);
}
console.log(pokemonsList);

allCards.innerHTML = pokemonsList;
