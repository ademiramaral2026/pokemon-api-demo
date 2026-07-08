# Visão Geral — O que é Pokémon

## Conceito

**Pokémon** ("Pocket Monsters") é uma franquia de mídia criada por Satoshi Tajiri e Ken Sugimori,
lançada pela Game Freak, Creatures Inc. e Nintendo em **27 de fevereiro de 1996**, com os jogos
*Pocket Monsters Red and Green* para o Game Boy.

No universo do jogo, treinadores capturam criaturas chamadas Pokémon usando **Poké Balls**,
treinam-nas, fazem-nas evoluir e as utilizam em batalhas por turnos contra outros treinadores
ou Pokémon selvagens. O objetivo clássico é completar a **Pokédex** (o registro de todas as
espécies existentes) e se tornar o **Campeão** de uma Liga Pokémon regional.

## Dados de referência

| Item | Valor |
|---|---|
| Fonte de dados canônica usada nesta doc | [PokeAPI](https://pokeapi.co/api/v2/) |
| Total de gerações (até 2024) | 9 |
| Total de espécies na National Pokédex | 1025+ (Gen I–IX) |
| Total de tipos elementais | 18 |
| Primeiro jogo | Pokémon Red/Green (Japão, 1996) |
| Empresa desenvolvedora | Game Freak |
| Publicadora | Nintendo / The Pokémon Company |

## Gerações e Regiões

Cada **geração** introduz uma nova **região** com uma nova Pokédex regional, novos Pokémon,
tipos (em alguns casos) e mecânicas de jogo. Veja o detalhamento completo em
[`generations.md`](./generations.md).

| Geração | Região | Jogos principais |
|---|---|---|
| I | Kanto | Red, Green, Blue, Yellow |
| II | Johto | Gold, Silver, Crystal |
| III | Hoenn | Ruby, Sapphire, Emerald |
| IV | Sinnoh | Diamond, Pearl, Platinum |
| V | Unova | Black, White, Black 2, White 2 |
| VI | Kalos | X, Y |
| VII | Alola | Sun, Moon, Ultra Sun, Ultra Moon |
| VIII | Galar | Sword, Shield |
| IX | Paldea | Scarlet, Violet |

## Tipos

Todo Pokémon possui um ou dois **tipos** (ex.: Fire, Water, Grass), que determinam suas
vantagens e fraquezas em batalha. Veja a tabela completa de efetividade em
[`types.md`](./types.md).

## Como este projeto usa esses conceitos

Este repositório (`pokemon-api-demo`) implementa uma pequena "API" em memória
(`src/pokemon.js` + `src/utils.js`) com 10 Pokémon reais da Geração I, usados como dataset de
demonstração para as funções `getByType`, `getStrongest` e `searchByName`. Veja
[`../system-docs/data-schema.md`](../system-docs/data-schema.md) para o schema completo dos dados.

## Ver também

- [Manual do Treinador](../manuals/trainer-guide.md)
- [Manual de Batalha](../manuals/battle-manual.md)
- [Referência da API](../system-docs/api-reference.md)
