//Filtros (Type, Resistant, Weaknesses)
export function filterData(pokemonList, filterValue, property) {
  //console.log(pokemonList, filterValue, property);
  const pokemonsFiltrados = pokemonList.filter(function (pokemon) {
    if (pokemon[property].includes(filterValue)) {
      return pokemon;
    }
  });
  return pokemonsFiltrados;
}
//Ordenar de A-Z
export function sortByName(array) {
  return array.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (b.name > a.name) {
      return -1;
    }
    return 0;
  });
}
//Ordenar de Z-A
export function sortByReverse(array) {
  //console.log(array);
  const sortAZ = sortByName(array);
  //console.log(sortAZ);
  const sortZA = sortAZ.reverse();
  //console.log(sortZA);
  return sortZA;
}

//Cálculo Agregado
export function calcType (data, filterCalc) {
  const calcPokemon = data.filter((pokemon) =>
    pokemon.type.includes(filterCalc)
  );
  return Math.round((calcPokemon.length / data.length) * 100);
}
