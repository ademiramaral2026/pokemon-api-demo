# Mecânica de Moves

Documento de referência sobre como um golpe (*move*) é processado dentro de um turno de
batalha, desde a seleção até a aplicação do dano e de efeitos secundários.

## Diagrama do ciclo de batalha

```
                         ┌───────────────────────────┐
                         │   Início do turno          │
                         └─────────────┬──────────────┘
                                        v
                         ┌───────────────────────────┐
                         │ Ambos escolhem ação:        │
                         │ Move / Troca / Item / Fuga  │
                         └─────────────┬──────────────┘
                                        v
                         ┌───────────────────────────┐
                         │ Ordem de execução definida  │
                         │ por: Prioridade > Speed     │
                         └─────────────┬──────────────┘
                                        v
                    ┌───────────────────────────────────┐
                    │ Para cada ação, na ordem:            │
                    │  1. Checar precisão (accuracy)       │
                    │  2. Calcular dano (se aplicável)     │
                    │  3. Aplicar efeitos secundários       │
                    │     (status, stat change, etc.)       │
                    └─────────────────┬─────────────────┘
                                       v
                         ┌───────────────────────────┐
                         │ Efeitos de fim de turno:    │
                         │ Poison, Burn, Weather, etc.  │
                         └─────────────┬──────────────┘
                                        v
                         ┌───────────────────────────┐
                         │   Fim do turno              │
                         └───────────────────────────┘
```

## Categorias de golpes

| Categoria | Stat de ataque usado | Stat de defesa usado | Exemplo de golpe | Efeito típico |
|---|---|---|---|---|
| Physical | Attack | Defense | Tackle, Earthquake | Dano por contato físico |
| Special | Special Attack | Special Defense | Flamethrower, Thunderbolt | Dano por energia elemental |
| Status | — | — | Growl, Toxic, Thunder Wave | Não causa dano direto; altera stats ou aplica condições |

## Exemplo de batalha

| Charizard (atacante) | Blastoise (defensor) |
|---|---|
| ![Charizard](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png) | ![Blastoise](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png) |

Neste exemplo, Charizard (Fire/Flying) usando um golpe do tipo Fire contra Blastoise
(Water) resultaria em dano **pouco efetivo (0.5x)**, conforme a tabela de efetividade em
[`../wiki/types.md`](../wiki/types.md).

## Fórmula de dano

Fórmula simplificada de dano (baseada na mecânica principal da série, Gen III em diante):

```
Damage = ((((2 * Level / 5 + 2) * Power * A / D) / 50) + 2) * Modifier

onde:
  Level    = nível do Pokémon atacante
  Power    = poder base do golpe
  A        = Attack (physical) ou Special Attack (special) do atacante
  D        = Defense (physical) ou Special Defense (special) do defensor
  Modifier = Targets * Weather * Critical * STAB * Type * Random * Other

  STAB     = 1.5 se o golpe é do mesmo tipo do Pokémon atacante, senão 1.0
  Type     = multiplicador de efetividade de tipo (2x, 1x, 0.5x ou 0x)
  Critical = 1.5 (ou 2x em jogos mais antigos) em caso de acerto crítico
  Random   = fator aleatório entre 0.85 e 1.00
```

Veja a tabela completa de efetividade de tipos em [`../wiki/types.md`](../wiki/types.md) e o
contrato de dados de `Move` em [`data-schema.md`](./data-schema.md).
