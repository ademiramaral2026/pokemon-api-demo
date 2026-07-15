# Estrutura de Dados de Save

Documentação técnica de referência sobre como os jogos principais da franquia Pokémon
armazenam o progresso do jogador — da era Game Boy (SRAM com bateria) até a era Nintendo
Switch (armazenamento digital). O foco é a estrutura conceitual dos dados e os mecanismos de
proteção contra corrupção, não a engenharia reversa byte a byte de um jogo específico.

> **Nota de escopo:** este repositório (`pokemon-api-demo`) não implementa persistência —
> `src/pokemon.js` é um dataset estático em memória e `src/utils.js` só expõe funções puras de
> leitura (ver [`architecture.md`](./architecture.md)). Este documento descreve a mecânica
> real dos jogos, não uma feature implementada aqui.

## Visão geral do conceito de save

Diferente de muitos RPGs que oferecem múltiplos slots de save escolhidos pelo jogador, os
jogos principais de Pokémon historicamente usam **um único slot de save por cartucho/cópia
digital**, com uma cópia de segurança interna (backup) mantida pelo próprio jogo para
proteção contra corrupção — não para o jogador alternar entre partidas.

```
┌───────────────────────────────────────────────────────────┐
│                     Mídia de armazenamento                 │
│                                                              │
│   ┌────────────────────┐        ┌────────────────────┐     │
│   │  Save "principal"   │        │  Save "backup"      │     │
│   │  (última gravação   │        │  (cópia anterior     │     │
│   │   completa válida)  │        │   válida conhecida)  │     │
│   └────────────────────┘        └────────────────────┘     │
│                                                              │
│   Checksum valida qual cópia é íntegra no boot do jogo      │
└───────────────────────────────────────────────────────────┘
```

## O que é armazenado tipicamente

### Dados do treinador

| Campo | Descrição |
|---|---|
| Trainer ID (TID) | Identificador numérico do jogador (16 bits) |
| Secret ID (SID) | Identificador oculto, existe a partir da Geração III, usado para calcular shiny e OT completo |
| Nome do treinador | String em charset proprietário (varia por região/geração) |
| Gênero/avatar | A partir da Geração II (Crystal) e consolidado da Geração IV em diante |
| Dinheiro (Pokédollars) | Inteiro, com limite máximo (ex.: 999.999 na maioria dos jogos) |
| Badges/insígnias | Bitflags de progresso de Ginásio |
| Tempo de jogo | Horas/minutos/segundos acumulados |
| Local de save | Mapa e posição para onde o jogador retorna ao carregar |

### Pokédex — flags de "visto" e "capturado"

Armazenada como dois bitmaps separados (um bit por espécie): `seen` (visto em batalha/na
área) e `caught` (efetivamente capturado/obtido). O tamanho do bitmap cresce a cada geração
conforme a Pokédex Nacional se expande (151 na Gen I até 1025+ atualmente).

### PC Boxes (armazenamento de Pokémon)

| Geração | Pokémon por box | Boxes disponíveis (aprox.) |
|---|---|---|
| I–II | 20 | 8–14 |
| III–V | 30 | 14–24 |
| VI+ | 30 | 32 (expansível para 33 com Wonder Box em alguns jogos) |

Cada slot de box armazena a mesma estrutura de dados de um Pokémon do time (ver seção
abaixo), já que não há diferença de "formato" entre um Pokémon na equipe e um Pokémon
guardado — apenas o local de referência muda.

### Inventário

Itens são normalmente organizados em "pockets" (bolsos) por categoria (itens gerais,
Poké Bolas, TMs/HMs, berries, itens-chave), cada slot guardando um par `(item_id,
quantidade)`. Itens-chave de progresso geralmente não têm limite de quantidade (é
implicitamente 1) e não podem ser descartados.

### Flags de progresso do jogo

Bitmask genérica de eventos de história — flags como "derrotou o rival na Rota X",
"recebeu o starter", "Ginásio Y liberado" — permitem que o jogo saiba o que já ocorreu sem
precisar re-simular a narrativa.

### Pokémon na equipe/PC — estrutura completa (inclui dados ocultos da UI)

| Campo | Visível ao jogador? | Observação |
|---|---|---|
| Espécie | Sim | Índice interno da espécie |
| Nível | Sim | Derivado da EXP armazenada |
| Apelido (nickname) | Sim | String, pode ser igual ao nome padrão |
| OT (Original Trainer) nome/ID/SID | Parcial | Usado para calcular *trade evolutions* e elegibilidade de shiny |
| Golpes conhecidos + PP atual | Sim | Até 4 slots de golpe |
| EXP acumulada | Não (só o nível derivado) | Valor bruto, não o nível |
| IVs (Individual Values) | Não | Gen I/II: "DVs" (Determinant Values, 0–15 por stat, 2 bits por valor menos granulares); Gen III+: IVs de 0–31 por stat |
| EVs (Effort Values) / Stat Experience | Não | Gen I/II: "Stat Experience" (0–65535 por stat); Gen III+: EVs (0–252 por stat, máx. 510 no total) |
| Nature | Não | Existe a partir da Gen III, derivada do PID (`PID mod 25`) |
| Ability slot | Não | A partir da Gen III, um bit/índice escondido escolhe entre as habilidades possíveis da espécie |
| PID (Personality Value) | Não | 32 bits, existe a partir da Gen III; determina nature, gênero, shiny e forma do Unown |
| Amizade/Friendship (happiness) | Não | Afeta evoluções por amizade e alguns golpes (Return/Frustration) |
| Held item | Sim | Item equipado |
| Bola de captura, local e nível de captura | Parcial | Usado por Pokétch/registro de memórias em jogos mais recentes |
| Ribbons/fitas | Sim (em menu específico) | Marcadores cosméticos de conquistas |

> **Nota técnica:** na Geração I não existe PID nem Nature — o "shiny" nem existia como
> conceito (foi introduzido na Geração II, calculado a partir de combinações específicas dos
> DVs de Speed, Defense e Special). A ausência de PID em Gen I/II é uma das razões estruturais
> pelas quais um save daquelas gerações não pode simplesmente ser "convertido" para o formato
> usado a partir da Geração III.

## Diferenças de compatibilidade entre gerações

Um save de Pokémon Red/Blue (Gen I) não é compatível com Pokémon Sword/Shield (Gen VIII) por
uma combinação de motivos estruturais, não apenas "hardware diferente":

| Fator | Gen I | Gen VIII |
|---|---|---|
| Mídia de armazenamento | SRAM com bateria de moeda no cartucho | Armazenamento digital (cartucho flash / eShop) |
| Estrutura de stats ocultos | DVs (4 bits, sem PID) | IVs de 31 + PID de 32 bits |
| Sistema de tipos/stats | Special único (não dividido) | Sp. Atk/Sp. Def separados desde Gen II |
| Charset de texto | Codificação proprietária de 8 bits específica da Gen I | Unicode/charset moderno |
| Tamanho da Pokédex referenciada | 151 espécies | 1000+ espécies |
| Presença de Ability/Nature/held item moderno | Não existe | Existe |

> **Nota:** por isso a franquia sempre dependeu de ferramentas de transferência dedicadas
> (Time Capsule, Pal Park, Poké Transporter, Pokémon Bank, Pokémon HOME) que **recriam** o
> Pokémon no formato de destino a partir dos dados equivalentes disponíveis, em vez de copiar
> o save bruto. Detalhes de cada rota de transferência estão documentados em
> [`version-compatibility.md`](./version-compatibility.md).

## Checksum e proteção contra corrupção

- **Gen I/II (SRAM com bateria):** o jogo mantém verificação de checksum (soma de
  verificação) sobre a região de dados salvos; se o cálculo não corresponder ao valor
  armazenado, o jogo pode se recusar a carregar aquele bloco e recorrer à cópia de backup
  interna mantida para essa finalidade, minimizando o risco de perda total do progresso.
- **Gen III (memória flash):** a introdução de memória flash no cartucho trouxe uma
  restrição nova — flash tem um número limitado de ciclos de escrita por setor. Por isso, o
  jogo passou a **alternar entre dois slots de save internos** a cada gravação (não visíveis
  ao jogador como opções), cada um dividido em seções (dados do treinador, time/itens,
  estado do jogo, dados diversos, buffers do PC) com **checksum individual por seção**. Se
  uma gravação for interrompida (ex.: queda de energia), a cópia alternativa preservada
  ainda é válida.
- **Gen IV/V:** mantêm o esquema de dois blocos de save com checksums, adaptado ao
  armazenamento flash do cartucho DS.
- **Era digital (3DS/Switch):** o princípio de cópia primária + cópia de segurança
  persiste, somado a camadas do próprio sistema operacional (áreas reservadas de save,
  autosave, e — a partir do Switch — sincronização com a nuvem condicionada à assinatura do
  Nintendo Switch Online).

## Tamanho aproximado dos saves por geração

Valores aproximados, conforme documentado pela comunidade de preservação/edição de save
(ex.: ferramentas como PKHeX para dumps digitais); variam conforme o método de extração
(save bruto do jogo vs. contêiner do emulador/homebrew):

| Geração | Jogos (exemplo) | Mídia | Tamanho aproximado do save |
|---|---|---|---|
| I–II | Red/Blue/Yellow, Gold/Silver/Crystal | SRAM com bateria (cartucho) | Dezenas de KB de espaço endereçável de SRAM (dados úteis bem menores) |
| III | Ruby/Sapphire/Emerald/FireRed/LeafGreen | Flash no cartucho | ~128 KB de área de flash reservada, dividida em dois slots alternados |
| IV–V | Diamond/Pearl/Platinum, Black/White | Flash no cartucho DS | Da ordem de algumas centenas de KB por dump `.sav` |
| VI–VII | X/Y, Sun/Moon | Cartucho 3DS / eShop | Save bruto na faixa de algumas centenas de KB; contêineres de extração (extdata) podem ser maiores |
| VIII–IX | Sword/Shield, Scarlet/Violet | Digital (Switch, cartucho ou eShop) | Contêiner de save pode chegar a dezenas de MB, mas o payload de estado de jogo relevante é uma fração menor disso |

![Mewtwo](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png)

> Mewtwo (#150 na Pokédex Nacional) é o Pokémon com maior soma de stats base no dataset
> deste repositório (`getStrongest()`, ver [`api-reference.md`](./api-reference.md)). Em um
> save real a partir da Geração III, o registro desse Pokémon incluiria PID, IVs, EVs,
> Nature e ability slot — nenhum desses campos existe no objeto `Pokemon` simplificado usado
> aqui (ver [`data-schema.md`](./data-schema.md)).

## Ver também

- [Data Schema](./data-schema.md)
- [Architecture](./architecture.md)
- [Compatibilidade entre Versões](./version-compatibility.md)
- [RNG (Random Number Generation)](./random-number-generation.md)
