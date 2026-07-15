# Manual de Batalha Competitiva

Guia de referência para construção e otimização de times competitivos, cobrindo os pilares
técnicos (IVs, EVs, Naturezas) e a organização por tiers de formato (Smogon-style).

## IVs (Individual Values)

Cada Pokémon possui 6 IVs (um por stat: HP, Attack, Defense, Special Attack, Special Defense,
Speed), valores fixos de 0 a 31 gerados aleatoriamente na captura/eclosão, e que permanecem
constantes pela vida do Pokémon. Um IV de 31 em um stat é chamado de **"perfect IV"** naquele
stat. A partir da Gen VI, IVs podem ser maximizados via **Hyper Training** (item Bottle Cap),
mas apenas para Pokémon de nível 100.

## EVs (Effort Values)

EVs são pontos ganhos ao derrotar Pokémon (ou usar itens específicos), que incrementam stats
gradualmente. Regras principais:

- Máximo de **510 EVs totais** por Pokémon.
- Máximo de **252 EVs por stat individual**.
- A cada 4 EVs investidos, o stat final ganha +1 ponto (em nível 100).

Veja o procedimento operacional completo em
[`../work-instructions/WI-005-ev-training.md`](../work-instructions/WI-005-ev-training.md).

## Naturezas (Natures)

Cada Pokémon possui uma de 25 naturezas, que aumenta um stat em 10% e reduz outro em 10%
(exceto 5 naturezas neutras, sem efeito).

| Natureza | Stat aumentado | Stat diminuído |
|---|---|---|
| Adamant | Attack | Special Attack |
| Modest | Special Attack | Attack |
| Jolly | Speed | Special Attack |
| Timid | Speed | Attack |
| Bold | Defense | Attack |
| Calm | Special Defense | Attack |
| Careful | Special Defense | Special Attack |
| Impish | Defense | Special Attack |
| Naive | Speed | Special Defense |
| Hasty | Speed | Defense |
| Lonely | Attack | Defense |
| Mild | Special Attack | Defense |
| Rash | Special Attack | Special Defense |
| Naughty | Attack | Special Defense |
| Gentle | Special Defense | Defense |
| Sassy | Special Defense | Speed |
| Brave | Attack | Speed |
| Quiet | Special Attack | Speed |
| Relaxed | Defense | Speed |
| Lax | Defense | Special Defense |
| Hardy / Docile / Serious / Bashful / Quirky | — (neutra) | — (neutra) |

## Tiers (formato Smogon)

| Tier | Descrição |
|---|---|
| **Uber** | Pokémon considerados fortes demais para competir de forma equilibrada em OU (lendários de destaque, ex.: Arceus, Mewtwo, Kyogre) |
| **OU (OverUsed)** | Tier padrão principal, com o maior volume de uso competitivo |
| **UU (UnderUsed)** | Pokémon abaixo do threshold de uso em OU, formam seu próprio metagame |
| **RU (RarelyUsed)** | Abaixo de UU em popularidade/poder |
| **NU (NeverUsed)** | Abaixo de RU |
| **PU** | Tier mais baixo antes de "Zero Used" (ZU, não oficial) |

> **Nota:** os tiers são recalculados periodicamente pela comunidade Smogon com base em
> estatísticas reais de uso em batalhas ranqueadas — não são fixos entre gerações.

## Team Building

Princípios gerais para montar um time competitivo balanceado:

1. **Papéis complementares** — combine sweepers (ofensivos), walls (defensivos) e suporte
   (hazards, cura, status).
2. **Cobertura de tipos** — evite que múltiplos membros compartilhem as mesmas fraquezas.
3. **Speed control** — inclua ao menos uma fonte de prioridade ou Choice Scarf para lidar
   com sweepers rápidos do oponente.
4. **Hazard control** — Stealth Rock/Spikes de um lado, e Rapid Spin/Defog do outro.
5. **Win conditions claras** — pelo menos um membro capaz de "fechar" a partida sozinho
   em determinadas condições de jogo.

### Exemplo de time competitivo (arquétipo Balance, estilo OU)

| Imagem | Pokémon | Papel no time |
|---|---|---|
| ![Garchomp](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png) | Garchomp | Sweeper físico / wallbreaker |
| ![Rotom](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png) | Rotom-Wash | Pivô defensivo, resistente a Electric/Water |
| ![Ferrothorn](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png) | Ferrothorn | Setter de hazards (Stealth Rock/Spikes), wall físico |
| ![Heatran](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png) | Heatran | Check especial, resistente a Steel/Fire |
| ![Clefable](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png) | Clefable | Wall com Magic Guard, cleric (Wish) |
| ![Toxapex](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png) | Toxapex | Wall especial com Regenerator, controla status (Toxic) |

Este arquétipo cobre ofensa física (Garchomp), controle de hazards (Ferrothorn), e três
paredes complementares (Rotom, Heatran, Toxapex) com Clefable como suporte de recuperação.
