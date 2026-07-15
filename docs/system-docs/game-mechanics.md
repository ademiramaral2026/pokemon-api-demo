# Game Mechanics (Mecânicas Técnicas)

Documentação técnica de referência para os cálculos centrais do motor de batalha: stats,
dano, prioridade e ordem de turno. Complementa [`move-mechanics.md`](./move-mechanics.md) e
[`data-schema.md`](./data-schema.md).

## Fórmula de cálculo de stats (Gen III+)

```
HP    = floor(((2 * Base + IV + floor(EV / 4)) * Level) / 100) + Level + 10

Outros stats (Attack, Defense, Sp.Atk, Sp.Def, Speed):

Stat  = floor((floor(((2 * Base + IV + floor(EV / 4)) * Level) / 100) + 5) * Nature)

onde:
  Base   = stat base da espécie
  IV     = Individual Value do stat (0-31)
  EV     = Effort Value investido no stat (0-252, máx. 510 no total)
  Level  = nível do Pokémon
  Nature = 1.1 (aumentado), 0.9 (diminuído) ou 1.0 (neutro)
```

## Fórmula de dano

```
Damage = ((((2 * Level / 5 + 2) * Power * A / D) / 50) + 2) * Modifier

Modifier = Targets * Weather * Critical * STAB * Type * Random * Other

  A        = Attack ou Special Attack do atacante (conforme categoria do golpe)
  D        = Defense ou Special Defense do defensor (conforme categoria do golpe)
  STAB     = 1.5 se o golpe é do mesmo tipo do atacante, senão 1.0
  Type     = multiplicador de efetividade (2x, 1x, 0.5x, 0x)
  Critical = 1.5x em acerto crítico (2x em Gen I-V)
  Random   = fator aleatório entre 0.85 e 1.00
```

## Speed tiers

"Speed tier" é o conceito de agrupar Pokémon competitivos pelo seu Speed máximo em nível 100,
usado para prever quem age primeiro em um turno sem golpes de prioridade.

| Speed base (aprox.) | Categoria | Exemplos |
|---|---|---|
| 130+ | Muito rápido | Deoxys-Speed, Ninjask, Regieleki |
| 100–129 | Rápido | Garchomp, Greninja, Weavile |
| 70–99 | Médio | Heatran, Landorus |
| 40–69 | Lento | Ferrothorn, Toxapex |
| <40 | Muito lento | Trick Room abusers (ex.: Bronzong, Torkoal) |

> **Nota:** times construídos ao redor de *Trick Room* invertem a ordem normal de turno,
> favorecendo propositalmente Pokémon com Speed muito baixo.

## Tabela de prioridade de golpes

| Prioridade | Exemplos de golpes |
|---|---|
| +5 | Helping Hand |
| +4 | Magic Coat, Snatch |
| +3 | Detect, Protect, Endure |
| +2 | Fake Out, Follow Me, Rage Powder, Quick Guard, Wide Guard |
| +1 | Extreme Speed, Quick Attack, Aqua Jet, Bullet Punch, Mach Punch, Ice Shard, Sucker Punch |
| 0 | Golpes regulares (grande maioria) |
| -1 | Vital Throw |
| -4 | Avalanche, Revenge |
| -5 | Counter, Mirror Coat |
| -6 | Circle Throw, Dragon Tail |
| -7 | Roar, Whirlwind |
| -8 | Trick Room |

Golpes de prioridade igual são desempatados pelo Speed dos Pokémon envolvidos (e, em caso de
Speed igual, aleatoriamente).

## Diagrama do ciclo de turno de batalha

```
┌──────────────────────────────────────────────────────────────┐
│ 1. Seleção de ação (simultânea, oculta): Move / Troca /        │
│    Item / Fuga                                                  │
└───────────────────────────┬──────────────────────────────────┘
                             v
┌──────────────────────────────────────────────────────────────┐
│ 2. Ordenação das ações:                                          │
│    Trocas de Pokémon > Prioridade do golpe > Speed (com         │
│    desempate aleatório em caso de empate exato)                  │
└───────────────────────────┬──────────────────────────────────┘
                             v
┌──────────────────────────────────────────────────────────────┐
│ 3. Execução, ação por ação, na ordem definida:                   │
│    a) Verificação de precisão (accuracy)                          │
│    b) Cálculo e aplicação de dano (se houver)                    │
│    c) Aplicação de efeitos secundários (status, stat change)     │
│    d) Checagem de fainted (KO) imediatamente após cada ação      │
└───────────────────────────┬──────────────────────────────────┘
                             v
┌──────────────────────────────────────────────────────────────┐
│ 4. Fim de turno: dano de status (Poison/Burn), clima,            │
│    Leftovers/Life Orb, contagem de golpes com contador           │
│    (Encore, Perish Song, Toxic counter, etc.)                    │
└──────────────────────────────────────────────────────────────┘
```
