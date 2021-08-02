export function criarCard(pokemon) {
    return `
      <div class="card">
          <p class="pokemon-name">${pokemon.name}</p>
          <img
              class="pokemon-img"
              src="${pokemon.img}"
              alt="${pokemon.name}"
          />
          <ul>
          <li class="type">Tipo: ${pokemon.type}</li>
          <li class="resistant">Resistência: ${pokemon.resistant}</li>
          <li class="weaknesses">Deficiências: ${pokemon.weaknesses}</li>
          <li class="rarity">Pokémon Raridade: ${pokemon["pokemon-rarity"]}</li>
          </ul>
        </div>
      `;
  }
 