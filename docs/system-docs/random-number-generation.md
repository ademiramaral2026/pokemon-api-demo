# RNG (Random Number Generation) nos jogos Pokémon

Documentação técnica de referência sobre o gerador de números pseudoaleatórios (PRNG) usado
pelos jogos principais da franquia, os métodos de manipulação de RNG documentados pela
comunidade competitiva/speedrunning, e onde o RNG é efetivamente consultado durante uma
batalha. Complementa [`game-mechanics.md`](./game-mechanics.md), que documenta a fórmula de
dano onde o fator aleatório aparece.

> **Nota de escopo:** este repositório não implementa batalhas nem qualquer lógica
> dependente de aleatoriedade — `src/utils.js` é composto de funções puras e determinísticas
> (ver [`architecture.md`](./architecture.md)). Este documento é referência conceitual sobre
> a mecânica real dos jogos.

## Conceito de seed e frames

- **Seed:** valor inicial de 32 bits que inicializa a sequência do PRNG. Historicamente
  derivado de fontes como o relógio interno do console, o tempo decorrido desde a
  inicialização, ou contadores de frame — não de uma fonte de entropia criptográfica.
- **Frame:** um "tick" discreto do laço interno do jogo. Em consoles como o Game Boy Advance
  e o Nintendo DS, a comunidade de manipulação de RNG documentou que o estado do PRNG avança
  uma vez por frame de execução (a uma taxa próxima da atualização de tela do hardware),
  o que tornou viável prever, com prática, exatamente qual seed estaria "ativa" em um dado
  instante de input do jogador (ex.: soltar o botão A em um frame específico).

```
Ligar o jogo ──> Seed inicial ──> [frame 0] ──> [frame 1] ──> [frame 2] ──> ...
                                      │              │              │
                                 estado PRNG    estado PRNG    estado PRNG
                                  (chamada 0)    (chamada 1)    (chamada 2)
```

## PRNG usado nas gerações mais antigas: LCG de 32 bits (Gen III–V)

Da Geração III à Geração V, o PRNG documentado pela comunidade é um **gerador congruente
linear (LCG) de 32 bits**, com a seguinte relação de recorrência:

```
seed(n+1) = (seed(n) * 0x41C64E6D + 0x6073) mod 2^32
```

Esse LCG é reaproveitado tanto para decisões de batalha (crítico, dano, efeitos
secundários) quanto para geração de encontros — incluindo a determinação do **PID
(Personality Value)** de um Pokémon (Gen III) e de seus **IVs**, historicamente obtidos a
partir de chamadas consecutivas do gerador (cada chamada de 16 bits fornecendo valores
parciais empacotados em grupos de 5 bits por stat).

| Geração | PRNG documentado | Observação |
|---|---|---|
| I–II | Gerador simples de 8/16 bits, distinto do LCG de Gen III+ | Menos documentado publicamente que o de Gen III+ |
| III–V | LCG de 32 bits (`seed * 0x41C64E6D + 0x6073`) | Base para toda a manipulação clássica de RNG |
| VI+ | Gerador substituído por um sistema mais complexo | Dificultou significativamente as técnicas clássicas de manipulação |

## Manipulação de RNG (RNG abuse), Gen III–V

A comunidade competitiva e de *breeding* documentou, ao longo de anos, técnicas de
**manipulação de RNG** para obter IVs e Natures específicas sem depender puramente de sorte,
aproveitando o fato de que o LCG de 32 bits é determinístico e sensível ao frame exato em que
uma ação (soltar um botão, entrar em uma área, iniciar uma batalha) ocorre:

- **PID/IV manipulation:** sincronizar a ação do jogador com um frame específico da sequência
  do LCG para obter um PID (e consequentemente Nature/gênero/shininess) e IVs desejados em
  encontros estáticos, selvagens ou de ovos.
- **Ferramentas da comunidade:** utilitários como calculadoras e "frame finders" (ex.: RNG
  Reporter, amplamente citado em guias de RNG abuse de Gen IV/V) permitiam calcular, a partir
  da seed detectada, quantos frames de espera eram necessários para alcançar o resultado
  desejado.
- **Pokéradar chaining:** mecânica de encontro em cadeia (Gen IV/V) frequentemente combinada
  com manipulação de RNG para aumentar a taxa de encontro de Pokémon shiny.

> **Nota histórica:** a partir da Geração VI (X/Y), o sistema de geração de números
> aleatórios foi alterado para um esquema mais complexo, o que é amplamente reportado pela
> comunidade como o motivo pelo qual as técnicas clássicas de manipulação "frame-perfect"
> deixaram de funcionar de forma prática — a comunidade migrou para outras estratégias
> (como chain fishing e uso de Friend Safari) para influenciar resultados desejados, sem o
> mesmo nível de controle determinístico que existia em Gen III–V.

## Uso de RNG em cálculos de batalha

| Uso do RNG | Faixa/regra | Observação |
|---|---|---|
| Chance de acerto crítico (base, Gen I) | `floor(BaseSpeed / 2) / 256` | Golpes de alta taxa crítica (Slash, Razor Leaf, Crabhammer, Karate Chop) multiplicam a base por 8 antes da divisão |
| Chance de acerto crítico (base, Gen III–V) | 1/16 (6,25%) | Golpes de alta taxa crítica: 1/8 (12,5%) |
| Chance de acerto crítico (base, Gen VI+) | 1/24 (~4,17%) | Estágios: +1 = 1/8; +2 = 1/2; +3 ou mais = 100% (sempre crítico) |
| Variação de dano | Multiplicador aleatório inteiro entre 85 e 100, dividido por 100 | Aplicado em toda geração; ver `Random` na fórmula de dano em [`game-mechanics.md`](./game-mechanics.md) |
| Chance de efeito secundário de status | Roll percentual comparado ao valor fixo do golpe (ex.: 10% de queimadura em Flamethrower) | Um sorteio por uso do golpe |
| Shake check de captura (Gen III+) | Até 4 sorteios sequenciais de 16 bits comparados a um limiar derivado do HP restante, catch rate da espécie e bônus da bola | Falhar em qualquer sorteio libera o Pokémon imediatamente; passar nos 4 resulta em captura |

> **Nota técnica (bug histórico real):** em Pokémon Red/Blue/Yellow (Gen I), o golpe
> **Focus Energy** tinha o efeito de aumentar a chance de acerto crítico na descrição, mas
> devido a um erro de implementação no cálculo, o efeito real **reduzia** a chance de
> crítico do usuário em vez de aumentá-la — um dos bugs mais citados pela comunidade ao
> discutir a Geração I.

### Shake check de captura — visão conceitual (Gen III+)

```
a = ((3 * MaxHP - 2 * HP_atual) * CatchRate * BônusDaBola) / (3 * MaxHP)
    [ajustado por bônus de status, então limitado a no máximo 255]

Se a >= 255:
    captura garantida (4 "shakes" automáticos)
Senão:
    b = limiar derivado de "a" (quanto maior "a", maior "b")
    repetir 4 vezes:
        sortear inteiro aleatório de 16 bits (0–65535)
        se aleatório >= b: Pokémon escapa imediatamente
        senão: continua para o próximo shake
    se passar nos 4 sorteios: Pokémon é capturado
```

![Pikachu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)

Pikachu (#25 na Pokédex Nacional), presente no dataset deste repositório (ver
[`data-schema.md`](./data-schema.md)), é frequentemente citado em guias de shiny hunting da
comunidade justamente por ilustrar como o resultado "shiny" depende inteiramente do PID
gerado pelo RNG no momento do encontro — algo que não existe no objeto `Pokemon` simplificado
usado neste projeto.

## Estágios de crítico — tabela completa por era

| Estágio de crítico | Gen I (base variável por Speed) | Gen III–V | Gen VI+ |
|---|---|---|---|
| 0 (padrão) | `BaseSpeed/2 / 256` | 1/16 (6,25%) | 1/24 (~4,17%) |
| +1 (ex.: Focus Energy correto, Scope Lens) | ×8 (golpe de alta taxa) | 1/8 (12,5%) | 1/8 (12,5%) |
| +2 | — | 1/4 (25%) | 1/2 (50%) |
| +3 ou mais | — | 1/3 (~33,3%) | 100% (sempre crítico) |

> **Nota:** a tabela de Gen I não usa "estágios" no mesmo sentido das gerações seguintes —
> o cálculo depende diretamente do stat base de Speed da espécie, o que fazia com que
> Pokémon rápidos (ex.: Persian, Electrode) tivessem taxa crítica naturalmente mais alta,
> independentemente de qualquer efeito de batalha.

## Diferenças entre RNG de encontro e RNG de batalha

É útil distinguir dois contextos de uso do PRNG, já que a comunidade de manipulação de RNG
historicamente tratou cada um com técnicas diferentes:

| Contexto | O que o RNG determina | Momento do cálculo |
|---|---|---|
| Geração de encontro (selvagem/estático/ovo) | PID, IVs, (a partir de certas gerações) shininess derivado do PID | No instante em que o encontro é gerado (entrada na área, eclosão do ovo, etc.) |
| Batalha em andamento | Crítico, variação de dano 85–100%, chance de efeito secundário, shake checks de captura, ordem de ação em caso de Speed igual | A cada ação/turno relevante da batalha |

Cada chamada ao PRNG consome um "avanço" da sequência — por isso, ações do jogador antes de
um encontro (como andar, abrir menus, ou mesmo esperar parado) podem alterar qual seed estará
ativa no momento exato do encontro, o que é a base conceitual de toda manipulação de RNG
documentada pela comunidade em Gen III–V.

## Ver também

- [Game Mechanics](./game-mechanics.md)
- [Move Mechanics](./move-mechanics.md)
- [Save Data Structure](./save-data-structure.md)
- [Data Schema](./data-schema.md)
