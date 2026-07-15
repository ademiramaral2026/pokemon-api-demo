# Funcionalidades Online (Network Features)

Documentação técnica de referência sobre as funcionalidades online dos jogos principais da
franquia Pokémon — troca, batalha e infraestrutura de conectividade — desde a era Nintendo
Wi-Fi Connection (DS) até o Nintendo Switch Online.

> **Nota de escopo:** este repositório não possui nenhuma camada de rede — `src/utils.js`
> opera inteiramente em memória local, sem I/O de rede (ver [`architecture.md`](./architecture.md),
> seção "Evolução futura", para uma eventual camada HTTP hipotética). Este documento trata
> exclusivamente da mecânica real dos jogos.

## Linha do tempo de funcionalidades online por geração

| Geração | Jogos (exemplo) | Infraestrutura online | Funcionalidades principais |
|---|---|---|---|
| III | Ruby/Sapphire/Emerald | Sem conexão à internet; Wireless Adapter (local) | Trocas e batalhas locais via acessório sem fio |
| IV | Diamond/Pearl/Platinum, HG/SS | Nintendo Wi-Fi Connection (NWFC) | GTS (introduzida aqui), batalhas/trocas via Wi-Fi |
| V | Black/White, B2W2 | Nintendo Wi-Fi Connection + Pokémon Global Link (site) | GTS, C-Gear Wi-Fi Club, estatísticas via PGL |
| VI | X/Y, OR/AS | Nintendo Network | Wonder Trade (introduzida aqui), Battle Spot (ranked) |
| VII | Sun/Moon, US/UM | Nintendo Network | Wonder Trade, GTS, Battle Spot/Battle Tree |
| VIII | Sword/Shield | Nintendo Switch Online (assinatura paga) | Wonder Trade, GTS renovada, Ranked Battles/Battle Stadium |
| IX | Scarlet/Violet | Nintendo Switch Online (assinatura paga) | Wonder Trade, GTS, Battle Stadium, batalha/troca via link local ou online |

## Wonder Trade (a partir da Geração VI)

Introduzida em Pokémon X/Y (2013). Permite depositar um Pokémon para troca **aleatória**
contra qualquer outro jogador conectado no mundo, sem escolha de espécie por nenhuma das
partes — o resultado só é revelado após a troca ser concluída.

- Não há critério de seleção: o sistema pareia jogadores aleatoriamente.
- Existe um mecanismo de desincentivo a abuso automatizado (tempo de espera progressivo
  entre trocas sucessivas em curto intervalo), documentado pela comunidade desde o
  lançamento da funcionalidade.
- Tornou-se popular na comunidade como forma de distribuir eventos, shinies e Pokémon
  específicos por meio de "Wonder Trade giveaways" coordenados.

> **Nota:** por ser uma troca sem critério de seleção, o Wonder Trade nunca garante receber
> algo equivalente ao que foi enviado — é, por design, um sistema de sorte pura.

## GTS — Global Trade Station (a partir da Geração IV)

Introduzida em Pokémon Diamond/Pearl (2006/2007), operando sobre a Nintendo Wi-Fi
Connection. Diferente do Wonder Trade, o GTS permite **trocas com critérios específicos**:

1. O jogador deposita um Pokémon e define o que deseja em troca (espécie, gênero e faixa de
   nível desejados).
2. O anúncio fica listado no sistema, disponível globalmente.
3. Qualquer outro jogador que tenha o Pokémon pedido (dentro dos critérios) pode concluir a
   troca — **de forma assíncrona**, sem que as duas partes precisem estar online ao mesmo
   tempo.

| Aspecto | Wonder Trade | GTS |
|---|---|---|
| Escolha de espécie recebida | Nenhuma (aleatório) | Definida pelo depositante via critério |
| Sincronia necessária | Momentânea (pareamento em tempo real) | Assíncrona (like um quadro de anúncios global) |
| Geração de introdução | VI | IV |
| Uso comum na comunidade | Distribuição aleatória/eventos | Buscar espécies específicas não disponíveis na própria região do jogo |

> **Nota histórica:** o GTS é conhecido na comunidade por anúncios "impossíveis" feitos por
> jogadores como piada (ex.: pedir um Pokémon de nível 1 em troca de uma lendária de nível
> 100) — como o sistema não valida se o pedido é razoável, esses anúncios simplesmente nunca
> são atendidos.

## Battle Spot, Link Battles e Ranked Battles

- **Link Battle:** termo histórico para uma batalha direta entre dois jogos conectados,
  seja localmente (cabo/wireless local) ou pela internet.
- **Battle Spot:** introduzida na Geração VI (X/Y) sobre a Nintendo Network, substituindo o
  modelo de "Wi-Fi Club" usado na Geração V. Oferecia batalhas livres, batalhas avaliativas
  (ranked) e formatos especiais de evento, servindo de base para a competição organizada
  (VGC) daquele período.
- **Battle Stadium / Ranked Battles (Gen VIII+):** com a migração para o Nintendo Switch,
  a marca "Battle Spot" foi descontinuada; batalhas online ranqueadas passaram a operar sob
  o nome "Ranked Battles"/"Battle Stadium", exigindo assinatura do Nintendo Switch Online.

## Requisitos de conexão por geração

| Geração/console | Serviço exigido | Custo | Status atual |
|---|---|---|---|
| III (GBA) | Nenhum (apenas link local via acessório) | — | Não depende de internet |
| IV–V (DS/DSi) | Nintendo Wi-Fi Connection (NWFC) | Gratuito | **Descontinuado em 20 de maio de 2014** — recurso online destas gerações não funciona mais |
| VI–VII (3DS) | Nintendo Network | Gratuito | **Descontinuado em 8 de abril de 2024**, quando a Nintendo encerrou os serviços online do 3DS/Wii U |
| VIII–IX (Switch) | Nintendo Switch Online | Assinatura paga | Ativo |

> **Nota:** o encerramento dos serviços online de gerações mais antigas (NWFC em 2014 e
> Nintendo Network para 3DS/Wii U em 2024) significa que funcionalidades como GTS e Wonder
> Trade daquelas gerações específicas deixaram de funcionar — os jogos continuam jogáveis
> offline, mas sem as camadas de rede originais.

## Arquitetura em alto nível (conceitual)

Os protocolos exatos usados pela Nintendo/Game Freak não são publicamente documentados; o
que segue é uma descrição conceitual de arquitetura cliente-servidor compatível com o
comportamento observável dessas funcionalidades, sem inventar detalhes de protocolo:

```
┌──────────┐        ┌───────────────────────────┐        ┌──────────┐
│ Cliente A │ <----> │  Servidores de matchmaking  │ <----> │ Cliente B │
│ (console) │        │  / relay / listagem (GTS)   │        │ (console) │
└──────────┘        └───────────────────────────┘        └──────────┘
```

- **Trocas assíncronas (GTS):** modelo próximo de um serviço de listagem — o cliente envia
  um Pokémon depositado junto com os critérios desejados; o servidor mantém esse registro e
  faz o pareamento quando outro cliente satisfaz os critérios, sem exigir presença
  simultânea das duas partes.
- **Trocas/batalhas em tempo real (Wonder Trade, Link Battles, Ranked):** modelo de sessão
  sincronizada — o servidor faz o pareamento momentâneo entre dois clientes e intermedia (ou
  relaya) a troca de estados de jogo (ações escolhidas por turno, resultado da troca) para
  manter os dois lados consistentes.
- **Autoridade de simulação:** por ser um jogo com regras deterministas dado um conjunto de
  entradas (ver [`random-number-generation.md`](./random-number-generation.md) para o papel
  do RNG), o processamento de resultado de batalha historicamente ocorre nos próprios
  clientes, com o papel do servidor concentrado em parear, sincronizar e transportar as
  ações — não em recalcular o resultado da batalha de forma independente.

![Charizard](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png)

Charizard (#6 na Pokédex Nacional), presente no dataset deste repositório (ver
[`data-schema.md`](./data-schema.md)), é um dos Pokémon mais comumente citados em trocas via
GTS por jogadores buscando completar a Pokédex sem acesso à sua forma evoluída regional.

## Batalhas locais vs. batalhas online

| Aspecto | Batalha local (link/wireless) | Batalha online |
|---|---|---|
| Necessidade de internet | Não | Sim |
| Alcance | Mesma sala/curta distância (ou cabo) | Global |
| Geração de suporte | Todas, desde Gen I (Game Link Cable) | A partir de Gen IV (Wi-Fi) |
| Uso competitivo típico | Torneios presenciais, jogo casual entre amigos | Ranked ladders, VGC online, Wonder Trade/GTS |
| Dependência de assinatura paga | Não | Sim, a partir da Geração VIII (Nintendo Switch Online) |

## Restrições comuns em trocas e batalhas online

Independentemente da geração, algumas restrições se repetem historicamente nos sistemas de
troca/batalha online da franquia:

- **Restrições de espécie:** Pokémon obtidos de forma considerada "ilegítima" (editados fora
  das regras do jogo) podem ser bloqueados de trocas online por sistemas de validação do
  próprio jogo/serviço.
- **Restrição de Mythicals/eventos:** Pokémon de distribuição de evento (Mythical) costumam
  ter uma flag especial que impede certas trocas irrestritas em alguns sistemas (ex.:
  Wonder Trade), dependendo da geração.
- **Regras de formato em batalhas ranqueadas:** cada temporada de Ranked Battle define regras
  próprias (cláusulas de espécie única, banimento de certos Pokémon/itens, formato Singles
  vs. Doubles), análogas às regras de formato usadas em torneios VGC oficiais.
- **Limite de Pokémon por depósito simultâneo:** sistemas como o GTS tradicionalmente limitam
  a um Pokémon por anúncio ativo por vez, por conta salva.

## Evolução da marca de competição online (visão geral)

```
Gen IV/V:  Pokémon Global Link (site) + Wi-Fi Club  ─┐
                                                        ├──> estatísticas e histórico de batalha
Gen VI/VII: Battle Spot (Nintendo Network)           ─┘     centralizados fora do jogo

Gen VIII/IX: Ranked Battles / Battle Stadium (Switch, via Nintendo Switch Online)
             integrado mais diretamente ao próprio jogo, sem site externo dedicado
             equivalente ao Pokémon Global Link
```

> **Nota:** o Pokémon Global Link (PGL), usado na era Gen V, era um site oficial onde
> jogadores podiam consultar estatísticas de uso, participar de torneios online oficiais e
> gerenciar aspectos da conta Wi-Fi — um modelo de "companion website" que a franquia não
> manteve da mesma forma nas gerações seguintes.

## Ver também

- [Compatibilidade entre Versões](./version-compatibility.md)
- [Save Data Structure](./save-data-structure.md)
- [Architecture](./architecture.md)
- [Data Schema](./data-schema.md)
