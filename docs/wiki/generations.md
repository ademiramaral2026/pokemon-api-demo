# Gerações — Gen I a Gen IX

Cada geração corresponde a um conjunto de jogos principais lançados em uma nova região,
introduzindo uma nova Pokédex regional. Dados de contagem de espécies conforme a
National Pokédex ([PokeAPI `/generation`](https://pokeapi.co/api/v2/generation/)).

## Geração I — Kanto (1996)

- **Jogos:** Red, Green, Blue, Yellow
- **Pokémon introduzidos:** 151 (#1 Bulbasaur a #151 Mew)
- **Starters:** Bulbasaur (Grass), Charmander (Fire), Squirtle (Water)
- **Pokémon lendário/mítico:** Articuno, Zapdos, Moltres, Mewtwo, Mew
- **Destaque:** primeira geração; introduziu 15 dos 18 tipos (faltavam Dark, Steel e Fairy)

## Geração II — Johto (1999/2000)

- **Jogos:** Gold, Silver, Crystal
- **Pokémon introduzidos:** 100 (#152 Chikorita a #251 Celebi)
- **Starters:** Chikorita (Grass), Cyndaquil (Fire), Totodile (Water)
- **Novidades:** tipos Dark e Steel, sistema de breeding com ovos, hora do dia, dois gêneros por espécie

## Geração III — Hoenn (2002/2003)

- **Jogos:** Ruby, Sapphire, Emerald, FireRed, LeafGreen
- **Pokémon introduzidos:** 135 (#252 Treecko a #386 Deoxys)
- **Starters:** Treecko (Grass), Torchic (Fire), Mudkip (Water)
- **Novidades:** Abilities (habilidades), Natures (naturezas), contests, clima em batalha

## Geração IV — Sinnoh (2006/2007)

- **Jogos:** Diamond, Pearl, Platinum, HeartGold, SoulSilver
- **Pokémon introduzidos:** 107 (#387 Turtwig a #493 Arceus)
- **Starters:** Turtwig (Grass), Chimchar (Fire), Piplup (Water)
- **Novidades:** divisão de moves físico/especial por golpe (não mais por tipo), Wi-Fi battles

## Geração V — Unova (2010/2011)

- **Jogos:** Black, White, Black 2, White 2
- **Pokémon introduzidos:** 156 (#494 Victini a #649 Genesect)
- **Starters:** Snivy (Grass), Tepig (Fire), Oshawott (Water)
- **Destaque:** maior leva de novos Pokémon de uma geração até então; região inspirada em Nova York

## Geração VI — Kalos (2013)

- **Jogos:** X, Y
- **Pokémon introduzidos:** 72 (#650 Chespin a #721 Volcanion)
- **Starters:** Chespin (Grass), Fennekin (Fire), Froakie (Water)
- **Novidades:** tipo Fairy, Mega Evolution, gráficos 3D completos, região inspirada na França

## Geração VII — Alola (2016/2017)

- **Jogos:** Sun, Moon, Ultra Sun, Ultra Moon
- **Pokémon introduzidos:** 88 (#722 Rowlet a #809 Melmetal)
- **Starters:** Rowlet (Grass/Flying), Litten (Fire), Popplio (Water)
- **Novidades:** Z-Moves, formas regionais (Alolan forms), sem sistema de Ginásios tradicional (Trials)

## Geração VIII — Galar (2019)

- **Jogos:** Sword, Shield (+ DLC Isle of Armor, Crown Tundra)
- **Pokémon introduzidos:** 89 (#810 Grookey a #898 Calyrex), mais formas regionais Galarian
- **Starters:** Grookey (Grass), Scorbunny (Fire), Sobble (Water)
- **Novidades:** Dynamax/Gigantamax, região inspirada no Reino Unido

## Geração IX — Paldea (2022)

- **Jogos:** Scarlet, Violet (+ DLC The Teal Mask, The Indigo Disk)
- **Pokémon introduzidos:** ~120 (#906 Sprigatito em diante)
- **Starters:** Sprigatito (Grass), Fuecoco (Fire), Quaxly (Water)
- **Novidades:** mundo totalmente aberto, Terastallization, região inspirada na Espanha/Portugal

## Resumo tabular

| Geração | Região | Ano | Starters | Pokémon novos |
|---|---|---|---|---|
| I | Kanto | 1996 | Bulbasaur / Charmander / Squirtle | 151 |
| II | Johto | 1999 | Chikorita / Cyndaquil / Totodile | 100 |
| III | Hoenn | 2002 | Treecko / Torchic / Mudkip | 135 |
| IV | Sinnoh | 2006 | Turtwig / Chimchar / Piplup | 107 |
| V | Unova | 2010 | Snivy / Tepig / Oshawott | 156 |
| VI | Kalos | 2013 | Chespin / Fennekin / Froakie | 72 |
| VII | Alola | 2016 | Rowlet / Litten / Popplio | 88 |
| VIII | Galar | 2019 | Grookey / Scorbunny / Sobble | 89 |
| IX | Paldea | 2022 | Sprigatito / Fuecoco / Quaxly | ~120 |

> Todos os 10 Pokémon usados no dataset deste projeto (`src/pokemon.js`) pertencem à
> **Geração I (Kanto)**.

## Mecânicas de batalha assinatura por geração

Cada geração, a partir da III, introduziu uma mecânica de batalha "gimmick" que passou a
diferenciar aquele conjunto de jogos. Várias delas têm documentação dedicada nesta wiki.

| Geração | Mecânica assinatura | Ainda ativa nos jogos atuais? | Documentação |
|---|---|---|---|
| III | Abilities, Natures, Contests | Sim (Abilities/Natures) | [`abilities.md`](./abilities.md) |
| VI | Mega Evolution | Não (removida na prática desde Gen VIII, exceto Let's Go/spin-offs) | [`mega-evolution.md`](./mega-evolution.md) |
| VII | Z-Moves | Não (substituída por Dynamax na Gen VIII) | [`z-moves.md`](./z-moves.md) |
| VIII | Dynamax / Gigantamax | Não (removida na Gen IX) | [`dynamax-gigantamax.md`](./dynamax-gigantamax.md) |
| IX | Terastallization | Sim (mecânica atual, Scarlet/Violet) | — |

![Charizard](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png)

> Charizard é um exemplo raro de Pokémon que teve variações em praticamente todas essas
> mecânicas assinatura: duas Mega Evoluções (X e Y), um Z-Move compatível (Fire-type Z-Moves)
> e uma forma Gigantamax própria (G-Max Wildfire). Veja
> [`mega-evolution.md`](./mega-evolution.md) e [`dynamax-gigantamax.md`](./dynamax-gigantamax.md).
