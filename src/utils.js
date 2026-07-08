const pokemons = require('./pokemon');

function sumStats(baseStats) {
  return Object.values(baseStats).reduce((total, value) => total + value, 0);
}

function getByType(type) {
  return pokemons.filter(
    (pokemon) => pokemon.type.toLowerCase() === String(type).toLowerCase()
  );
}

function getStrongest() {
  return pokemons.reduce((strongest, current) =>
    sumStats(current.base_stats) > sumStats(strongest.base_stats)
      ? current
      : strongest
  );
}

function searchByName(name) {
  const term = String(name).toLowerCase();
  return pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(term)
  );
}

module.exports = { getByType, getStrongest, searchByName };
