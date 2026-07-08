const test = require('node:test');
const assert = require('node:assert/strict');
const { getByType, getStrongest, searchByName } = require('../src/utils');

test('getByType retorna apenas pokémons do tipo informado', () => {
  const fireTypes = getByType('fire');
  assert.equal(fireTypes.length, 2);
  assert.ok(fireTypes.every((pokemon) => pokemon.type === 'fire'));
});

test('getByType é case-insensitive', () => {
  const waterTypes = getByType('WATER');
  assert.equal(waterTypes.length, 2);
});

test('getByType retorna array vazio para tipo inexistente', () => {
  assert.deepEqual(getByType('dragon'), []);
});

test('getStrongest retorna o pokémon com maior soma de base_stats', () => {
  const strongest = getStrongest();
  assert.equal(strongest.name, 'Mewtwo');
});

test('searchByName encontra pokémon por nome parcial', () => {
  const results = searchByName('char');
  const names = results.map((pokemon) => pokemon.name);
  assert.ok(names.includes('Charmander'));
  assert.ok(names.includes('Charizard'));
});

test('searchByName retorna array vazio quando não há correspondência', () => {
  assert.deepEqual(searchByName('zzz'), []);
});
