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
          <li class="type">Type: ${pokemon.type}</li>
          <li class="resistant">Resistant: ${pokemon.resistant}</li>
          <li class="weaknesses">Weakness: ${pokemon.weaknesses}</li>
          <li class="rarity">Rarity: ${pokemon["pokemon-rarity"]}</li>
          </ul>
        </div>
      `;
}
