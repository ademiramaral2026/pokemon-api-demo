# Tipos de Pokémon

Existem **18 tipos elementais**. Cada Pokémon tem 1 ou 2 tipos, e cada golpe (move) também
possui um tipo, que é comparado contra o(s) tipo(s) do defensor para calcular o multiplicador
de dano (`2x` super efetivo, `0.5x` não muito efetivo, `0x` sem efeito). Dados de efetividade
conforme [PokeAPI `/type`](https://pokeapi.co/api/v2/type/).

## Lista dos 18 tipos

| # | Tipo | Cor/Símbolo | Introduzido em |
|---|---|---|---|
| 1 | Normal | ⚪ | Gen I |
| 2 | Fire | 🔥 | Gen I |
| 3 | Water | 💧 | Gen I |
| 4 | Electric | ⚡ | Gen I |
| 5 | Grass | 🌿 | Gen I |
| 6 | Ice | ❄️ | Gen I |
| 7 | Fighting | 🥊 | Gen I |
| 8 | Poison | ☠️ | Gen I |
| 9 | Ground | 🌍 | Gen I |
| 10 | Flying | 🕊️ | Gen I |
| 11 | Psychic | 🔮 | Gen I |
| 12 | Bug | 🐛 | Gen I |
| 13 | Rock | 🪨 | Gen I |
| 14 | Ghost | 👻 | Gen I |
| 15 | Dragon | 🐉 | Gen I |
| 16 | Dark | 🌑 | Gen II |
| 17 | Steel | ⚙️ | Gen II |
| 18 | Fairy | ✨ | Gen VI |

> **Nota histórica:** os tipos Dark e Steel só existiram a partir da Geração II (1999/2000),
> criados justamente para equilibrar o domínio do tipo Psychic na Gen I. O tipo Fairy foi
> adicionado na Geração VI (2013) e retroativamente atribuído a Pokémon existentes (ex.:
> Jigglypuff passou a ser Normal/Fairy).

## Tabela de efetividade (ataque → defesa)

| Tipo atacante | Super efetivo contra (2x) | Pouco efetivo contra (0.5x) | Sem efeito (0x) |
|---|---|---|---|
| Normal | — | Rock, Steel | Ghost |
| Fire | Grass, Ice, Bug, Steel | Fire, Water, Rock, Dragon | — |
| Water | Fire, Ground, Rock | Water, Grass, Dragon | — |
| Electric | Water, Flying | Electric, Grass, Dragon | Ground |
| Grass | Water, Ground, Rock | Fire, Grass, Poison, Flying, Bug, Dragon, Steel | — |
| Ice | Grass, Ground, Flying, Dragon | Fire, Water, Ice, Steel | — |
| Fighting | Normal, Ice, Rock, Dark, Steel | Poison, Flying, Psychic, Bug, Fairy | Ghost |
| Poison | Grass, Fairy | Poison, Ground, Rock, Ghost | Steel |
| Ground | Fire, Electric, Poison, Rock, Steel | Grass, Bug | Flying |
| Flying | Grass, Fighting, Bug | Electric, Rock, Steel | — |
| Psychic | Fighting, Poison | Psychic, Steel | Dark |
| Bug | Grass, Psychic, Dark | Fire, Fighting, Poison, Flying, Ghost, Steel, Fairy | — |
| Rock | Fire, Ice, Flying, Bug | Fighting, Ground, Steel | — |
| Ghost | Ghost, Psychic | Dark | Normal |
| Dragon | Dragon | Steel | Fairy |
| Dark | Ghost, Psychic | Fighting, Dark, Fairy | — |
| Steel | Ice, Rock, Fairy | Fire, Water, Electric, Steel | — |
| Fairy | Fighting, Dragon, Dark | Fire, Poison, Steel | — |

## Exemplo prático com os Pokémon deste projeto (`src/pokemon.js`)

| Pokémon | Tipo (neste dataset) | Fraquezas principais | Resistências principais |
|---|---|---|---|
| Bulbasaur | Grass | Fire, Ice, Flying, Psychic, Bug | Water, Grass, Electric, Ground |
| Charmander | Fire | Water, Ground, Rock | Fire, Grass, Ice, Bug, Steel, Fairy |
| Squirtle | Water | Grass, Electric | Fire, Water, Ice, Steel |
| Pikachu | Electric | Ground | Electric, Flying, Steel |
| Charizard | Fire | Water, Rock (x2 real: também Electric) | Fire, Grass, Bug, Steel, Fairy |
| Blastoise | Water | Grass, Electric | Fire, Water, Ice, Steel |
| Venusaur | Grass | Fire, Ice, Flying, Psychic, Bug | Water, Grass, Electric, Ground |
| Jigglypuff | Fairy | Poison, Steel | Fighting, Bug, Dark, Dragon |
| Gengar | Ghost | Ghost, Dark | Normal, Fighting, Poison, Bug |
| Mewtwo | Psychic | Bug, Ghost, Dark | Fighting, Psychic |

> **Nota de modelagem:** o dataset em `src/pokemon.js` usa um único campo `type` por
> simplificação didática. Na Pokédex real, várias dessas espécies têm **dois tipos**
> (ex.: Charizard é Fire/Flying, Venusaur é Grass/Poison, Gengar é Ghost/Poison). Veja
> [`../system-docs/data-schema.md`](../system-docs/data-schema.md) para a discussão completa
> dessa simplificação.
