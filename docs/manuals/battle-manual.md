# Manual de Batalha

Documento técnico sobre a mecânica de combate por turnos do sistema Pokémon.

## 1. Stats (atributos)

Cada Pokémon tem 6 stats base, definidos por espécie (dados reais via
[PokeAPI `/pokemon/{id}`](https://pokeapi.co/api/v2/pokemon/)):

| Stat | Sigla | Papel |
|---|---|---|
| HP | Hit Points | Quantidade de dano que pode receber antes de desmaiar |
| Attack | Atk | Poder de golpes físicos |
| Defense | Def | Redução de dano de golpes físicos recebidos |
| Special Attack | SpA | Poder de golpes especiais |
| Special Defense | SpD | Redução de dano de golpes especiais recebidos |
| Speed | Spe | Determina ordem de turno (maior Speed age primeiro) |

### Exemplo com dados reais (PokeAPI)

| Pokémon | HP | Atk | Def | SpA | SpD | Spe | Total |
|---|---|---|---|---|---|---|---|
| Pikachu (#25) | 35 | 55 | 40 | 50 | 50 | 90 | 320 |
| Charizard (#6) | 78 | 84 | 78 | 109 | 85 | 100 | 534 |
| Mewtwo (#150) | 106 | 110 | 90 | 154 | 90 | 130 | 680 |

> O dataset simplificado deste projeto (`src/pokemon.js`) usa apenas 4 stats
> (`hp, attack, defense, speed`), omitindo Special Attack/Special Defense por simplicidade.
> Veja [`../system-docs/data-schema.md`](../system-docs/data-schema.md).

## 2. Moves (golpes)

Cada golpe tem:

- **Type** (tipo) — usado para calcular efetividade (ver [`../wiki/types.md`](../wiki/types.md)).
- **Category** — Physical, Special ou Status.
- **Power** — poder base do dano (0 para golpes de status).
- **Accuracy** — chance de acerto (%).
- **PP** (Power Points) — número de usos disponíveis.
- **Priority** — modificador de ordem de turno (ver seção 4).

## 3. Fórmula de dano (simplificada, mecânica Gen III+)

```
Dano = (((2 * Level / 5 + 2) * Power * A/D) / 50 + 2) * Modificadores

onde:
  A = Attack (físico) ou Special Attack (especial) do atacante
  D = Defense (físico) ou Special Defense (especial) do defensor
  Modificadores = STAB * Efetividade_de_Tipo * Critical * Random(0.85–1.0) * ...
```

- **STAB** (Same Type Attack Bonus): `1.5x` se o golpe é do mesmo tipo do Pokémon atacante.
- **Efetividade de tipo**: `2x`, `4x`, `1x`, `0.5x`, `0.25x` ou `0x` (ver tabela em `types.md`).
- **Critical hit**: golpes críticos aplicam `1.5x` de dano adicional (mecânica Gen VI+).

## 4. Prioridade (Priority)

A ordem dos turnos é decidida por:

1. **Priority bracket do golpe** (de -7 a +5). Exemplos:
   - `+1`: Quick Attack, Extreme Speed (+2), Aqua Jet
   - `0`: maioria dos golpes
   - `-6`: Trick Room (efeito, não dano)
   - `-7`: Roar, Whirlwind (troca forçada)
2. Dentro do mesmo bracket, **Speed** decide quem age primeiro.
3. Em caso de empate exato de Speed, a ordem é aleatória.

## 5. Weather (clima em batalha)

| Clima | Efeito principal |
|---|---|
| Sunny Day (sol forte) | Fire +50% dano, Water -50% dano |
| Rain Dance (chuva) | Water +50% dano, Fire -50% dano |
| Sandstorm | Dano por turno em tipos não Rock/Ground/Steel; Rock ganha +50% SpD |
| Hail / Snow | Dano por turno em tipos não Ice; (Snow, Gen IX, dá +50% Def a tipo Ice) |

## 6. Status conditions (condições de status)

| Status | Efeito |
|---|---|
| Burn (queimadura) | Dano por turno + Attack físico reduzido pela metade |
| Paralysis (paralisia) | 25% de chance de não agir no turno; Speed reduzida |
| Poison / Badly Poisoned | Dano por turno (crescente no badly poisoned) |
| Sleep (sono) | Não pode agir por 1–3 turnos |
| Freeze (congelamento) | Não pode agir até descongelar (20% de chance por turno) |

## Ver também

- [Manual do Treinador](./trainer-guide.md)
- [Tipos de Pokémon](../wiki/types.md)
- [Schema de dados](../system-docs/data-schema.md)
