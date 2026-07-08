# Data Schema

Schema dos objetos de domínio usados neste projeto (`src/pokemon.js` e `src/utils.js`).

## Objeto `Pokemon`

```ts
type Pokemon = {
  id: number;            // identificador sequencial local (1-10 neste dataset)
  name: string;           // nome da espécie
  type: string;            // um único tipo elemental (ver Nota de simplificação abaixo)
  base_stats: BaseStats;
};

type BaseStats = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};
```

### Exemplo real (do dataset `src/pokemon.js`)

```json
{
  "id": 5,
  "name": "Charizard",
  "type": "fire",
  "base_stats": { "hp": 78, "attack": 84, "defense": 78, "speed": 100 }
}
```

## Nota de simplificação em relação à Pokédex real

Este dataset é uma amostra didática de 10 Pokémon da Geração I e simplifica dois aspectos do
modelo real de dados (comparado à [PokeAPI](https://pokeapi.co/api/v2/pokemon/)):

| Aspecto | Neste projeto | Na Pokédex real (PokeAPI) |
|---|---|---|
| Tipos | 1 campo `type` (string) | Array `types[]` com até 2 tipos |
| Stats | 4 stats (`hp, attack, defense, speed`) | 6 stats (+ `special-attack`, `special-defense`) |
| Identificação | `id` local (1–10) | `id` = National Pokédex number real |

### Comparação de tipos: dataset local vs. Pokédex real

| Pokémon | `type` neste projeto | Tipo(s) real(is) |
|---|---|---|
| Bulbasaur | grass | Grass / Poison |
| Charmander | fire | Fire |
| Squirtle | water | Water |
| Pikachu | electric | Electric |
| Charizard | fire | Fire / Flying |
| Blastoise | water | Water |
| Venusaur | grass | Grass / Poison |
| Jigglypuff | fairy | Normal / Fairy |
| Gengar | ghost | Ghost / Poison |
| Mewtwo | psychic | Psychic |

## Objeto `Move` (referência conceitual — não implementado no dataset atual)

Usado como referência para eventual extensão futura (ver [`architecture.md`](./architecture.md)):

```ts
type Move = {
  name: string;
  type: string;         // tipo do golpe, usado para efetividade (ver docs/wiki/types.md)
  category: 'physical' | 'special' | 'status';
  power: number | null;  // null para golpes de status
  accuracy: number;      // 0-100
  pp: number;
};
```

## Objeto `Type` (referência conceitual)

```ts
type Type = {
  name: string;                 // ex.: "fire"
  double_damage_to: string[];   // tipos em que este tipo é super efetivo
  half_damage_to: string[];     // tipos em que este tipo é pouco efetivo
  no_damage_to: string[];       // tipos em que este tipo não tem efeito
};
```

Fonte de referência para os 18 tipos e suas relações: [`../wiki/types.md`](../wiki/types.md).

## Funções e seus contratos (`src/utils.js`)

| Função | Entrada | Saída | Comportamento |
|---|---|---|---|
| `getByType(type)` | `string` | `Pokemon[]` | Filtro case-insensitive por `type` exato |
| `getStrongest()` | — | `Pokemon` | Retorna o Pokémon com maior soma de `base_stats` |
| `searchByName(name)` | `string` | `Pokemon[]` | Filtro case-insensitive por substring em `name` |

Veja exemplos de request/response equivalentes em [`api-reference.md`](./api-reference.md).
