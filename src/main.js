import { filterData, sortByName, sortByReverse, calcType } from "./data.js";
import data from "./data/pokemon/pokemon.js";
import { criarCard } from "./criarCard.js";

const todosOsPokemons = data.pokemon;
let pokemonsFiltrados = todosOsPokemons;
const allCards = document.getElementById("all-cards");

function mostrarCards(arrayPokemons) {
  let pokemonsList = ``;
  for (let index = 0; index < arrayPokemons.length; index++) {
    pokemonsList += criarCard(arrayPokemons[index]);
  }
  allCards.innerHTML = pokemonsList;
}

mostrarCards(todosOsPokemons);

//Filtros (Type, Resistant, Weaknesses)

function filterPokemons() {
  const filtersObj = {
    type: typeFilter,
    resistant: resistantFilter,
    weaknesses: weaknessesFilter,
  };
  /*
  Pegar valor do campo pelo evento
  console.log(event.target.value);
  Pegar valor direto pela variável do elemento
  console.log(typeFilter.value);
  */
  const selectedFilterByType = filtersObj.type.value;
  const selectedFilterByResistant = filtersObj.resistant.value;
  const selectedFilterByWeaknesses = filtersObj.weaknesses.value;
  //  console.log(
  //     selectedFilterByType,
  //     selectedFilterByResistant,
  //     selectedFilterByWeaknesses
  //   );
  pokemonsFiltrados = todosOsPokemons;
  if (selectedFilterByType) {
    pokemonsFiltrados = filterData(
      pokemonsFiltrados,
      selectedFilterByType,
      "type"
    );
  }
  if (selectedFilterByResistant) {
    pokemonsFiltrados = filterData(
      pokemonsFiltrados,
      selectedFilterByResistant,
      "resistant"
    );
  }
  if (selectedFilterByWeaknesses) {
    pokemonsFiltrados = filterData(
      pokemonsFiltrados,
      selectedFilterByWeaknesses,
      "weaknesses"
    );
  }

  mostrarCards(pokemonsFiltrados);
  
  //executar a função de calculo agregado
  document.getElementById("calculo-agregado").innerText = "";
  if (selectedFilterByType != "") resultCalc();
}

const typeFilter = document.getElementById("type-filter");
typeFilter.addEventListener("change", filterPokemons);

const resistantFilter = document.getElementById("resistant-filter");
resistantFilter.addEventListener("change", filterPokemons);

const weaknessesFilter = document.getElementById("weaknesses-filter");
weaknessesFilter.addEventListener("change", filterPokemons);

//Colocar em ordem alfabética

const btnPokemonAZ = document.querySelector(".order-AZ");
btnPokemonAZ.addEventListener("click", function () {
  pokemonsFiltrados = sortByName(pokemonsFiltrados);

  mostrarCards(pokemonsFiltrados);
});

const btnPokemonZA = document.querySelector(".order-ZA");
btnPokemonZA.addEventListener("click", function () {
  pokemonsFiltrados = sortByReverse(pokemonsFiltrados);

  mostrarCards(pokemonsFiltrados);
});

//Calculo Agregado

function resultCalc() {
  
  const printCalc = typeFilter.value;
  let result = calcType(data.pokemon, printCalc);
  document.getElementById(
    "calculo-agregado"
  ).innerText = `${result}% dos Pokemóns são do tipo ${printCalc}.`;
}
