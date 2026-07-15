# Comportamento da IA de Batalha (Trainer AI)

Documentação técnica de referência sobre como a inteligência artificial de treinadores e de
Pokémon selvagens toma decisões em batalha nos jogos principais da franquia, com base em
comportamentos documentados pela comunidade de romhacking/decompilação (ex.: os projetos de
decompilação do `pret`, que expuseram publicamente scripts de IA reais de Ruby/Sapphire/
Emerald) e pela comunidade competitiva.

> **Nota de escopo:** este repositório não implementa nenhuma lógica de batalha ou IA —
> `src/utils.js` só expõe `getByType`, `getStrongest` e `searchByName` sobre um dataset
> estático (ver [`architecture.md`](./architecture.md)). Este documento é referência
> conceitual sobre a mecânica real dos jogos.

## Evolução geral por geração

| Geração | Jogos (exemplo) | Nível de sofisticação | Características |
|---|---|---|---|
| I | Red/Blue/Yellow | Simplista | Seleção de golpe fortemente aleatória entre os 4 slots disponíveis; pouca ou nenhuma avaliação de efetividade de tipo |
| II | Gold/Silver/Crystal | Levemente melhorada | Ajustes pontuais, mantém forte aleatoriedade |
| III–V | Ruby/Sapphire/Emerald, Diamond/Pearl, Black/White | Baseada em scripts/flags | IA orientada por "flags" por treinador (ex.: `AI_SCRIPT_TRY_TO_FAINT`, `AI_SCRIPT_PREFER_STRONGEST_MOVE`) documentados via decompilação; a maioria dos treinadores comuns usa poucas flags |
| VI–VII | X/Y, Sun/Moon | Mais contextual | Passa a considerar melhor HP restante, ameaças de tipo e, em alguns casos, previsão de troca |
| VIII–IX | Sword/Shield, Scarlet/Violet | Refinada, ainda script-based | Mantém o modelo de flags por treinador, com mais combinações habilitadas por padrão em treinadores de destaque (líderes de ginásio, rivais) |

> **Nota histórica:** boa parte do que se sabe com precisão sobre a lógica interna da IA
> anterior à Geração VI vem de projetos de decompilação do código-fonte de jogos como
> Pokémon Emerald, que tornaram públicas as constantes e scripts de decisão de IA usados
> pelo jogo — antes disso, o comportamento era inferido apenas por observação empírica da
> comunidade competitiva.

## Modelo de "flags" de IA por treinador (Gen III–V, documentado via decompilação)

Cada treinador no jogo tem um conjunto de flags de IA ativadas, que determinam quais
heurísticas seu(s) Pokémon usa(m) ao escolher um golpe. Exemplos reais documentados:

| Flag (nome usado na decompilação) | Efeito na decisão |
|---|---|
| `AI_SCRIPT_CHECK_BAD_MOVE` | Evita golpes claramente ruins no contexto atual (ex.: sem efeito) |
| `AI_SCRIPT_TRY_TO_FAINT` | Prioriza o golpe com maior chance de desmaiar o oponente |
| `AI_SCRIPT_CHECK_VIABILITY` | Pontua golpes por viabilidade geral, considerando efetividade de tipo |
| `AI_SCRIPT_SETUP_FIRST_TURN` | Pode usar golpes de setup (ex.: stat-boosting) no primeiro turno |
| `AI_SCRIPT_PREFER_STRONGEST_MOVE` | Tende a escolher o golpe de maior poder disponível |
| `AI_SCRIPT_PREFER_BATTLE_ITEM` | Habilita uso proativo de itens de batalha (X Attack, etc.) |
| `AI_SCRIPT_STATUS_ENEMY` | Habilita uso deliberado de golpes de status (paralisia, sono, etc.) contra o oponente |
| `AI_SCRIPT_RISKY` | Permite escolhas mais arriscadas (ex.: golpes de recuo/high-risk) |

Treinadores comuns (NPCs genéricos) costumam ter poucas flags habilitadas — muitas vezes
resultando em decisões próximas do aleatório entre os golpes "não obviamente ruins". Líderes
de Ginásio, membros da Elite Four e rivais tendem a ter combinações mais completas de flags.

## Padrões de decisão conhecidos

- **Priorizar golpes super efetivos:** quando a IA avalia viabilidade (flag de checagem de
  efetividade ativa), golpes com multiplicador 2x/4x recebem pontuação mais alta.
- **Evitar golpes resistidos ou sem efeito:** a checagem básica de "golpe ruim" tende a
  eliminar golpes com efetividade 0x e penalizar golpes 0.5x, quando essa flag está ativa —
  mas em treinadores sem essa flag, a IA pode escolher esses golpes mesmo assim.
- **Considerar o HP restante do alvo:** com `AI_SCRIPT_TRY_TO_FAINT` ativa, a IA privilegia o
  golpe com maior probabilidade de reduzir o HP do oponente a zero no turno atual.
- **Uso de troca (switching) quando em desvantagem:** historicamente raro em treinadores
  comuns antes da Geração VI — muitos treinadores de Gen I–V simplesmente mantêm o Pokémon
  ativo até desmaiar, mesmo em matchup de tipo desfavorável. A partir da Geração VI/VII, jogos
  passaram a incorporar avaliação de troca com mais frequência em treinadores selecionados.
- **Uso de itens em batalha:** restrito a treinadores com a flag correspondente habilitada
  (ex.: Potion/X Attack); a maioria dos treinadores regulares não usa itens.

## Trainer battles vs. Pokémon selvagens

| Aspecto | Batalha contra Treinador | Batalha contra Pokémon selvagem |
|---|---|---|
| Troca de Pokémon | Possível (dependendo das flags e do número de Pokémon na equipe do treinador) | Não se aplica — só há um Pokémon selvagem na batalha |
| Uso de itens | Possível se a flag correspondente estiver ativa | Nunca — Pokémon selvagens não usam itens de batalha |
| Fuga do combate | Treinador nunca "foge" — a batalha só termina por vitória/derrota/captura (se aplicável) | O jogador pode tentar fugir; o Pokémon selvagem, em geral, não inicia fuga por iniciativa própria |
| Repertório de golpes | Definido no time do treinador, fixo | Definido pelo nível/tabela de encontro da espécie na localização |
| Objetivo implícito da IA | Vencer a batalha | Nenhum objetivo estratégico — foco é apenas gerar uma ameaça proporcional ao encontro |

> **Nota:** a ausência de troca e de uso de itens em Pokémon selvagens não é uma limitação
> de IA — é uma regra fixa do sistema de batalha selvagem, já que só existe um Pokémon
> selvagem em jogo por vez (exceto em encontros duplos específicos de certas gerações).

## Exploits e comportamentos conhecidos documentados pela comunidade competitiva

- A IA da Geração I é conhecida por **não escolher consistentemente o golpe estatisticamente
  ótimo**, favorecendo uma distribuição bastante aleatória entre os golpes disponíveis — o
  que, paradoxalmente, tornava certas estratégias (como stall com golpes de status) mais
  arriscadas de prever, mas também permitia a jogadores competitivos explorar padrões
  observados empiricamente em treinadores específicos do jogo.
- Antes da Geração VI, é comum a IA **raramente empregar certas categorias de golpes de
  status de forma otimizada** (setup moves como Swords Dance, ou golpes de controle como
  Toxic/Thunder Wave) a menos que o treinador específico tenha a flag correspondente
  habilitada — resultando em muitos NPCs que praticamente só usam golpes de dano direto.
- A falta de avaliação robusta de troca em gerações antigas é frequentemente citada pela
  comunidade competitiva como o motivo pelo qual batalhas contra a maioria dos treinadores do
  jogo principal (fora de facilidades de batalha como o Battle Tower/Battle Tree) são
  consideravelmente mais fáceis do que batalhas PvP equivalentes.

## IA de facilidades de batalha (Battle Tower / Battle Frontier / Battle Tree)

Além dos treinadores do enredo principal, cada geração desde a III oferece uma facilidade de
batalha opcional (Battle Tower em Gen III/IV, Battle Frontier em Emerald/Platinum, Battle
Subway em Gen V, Battle Maison em Gen VI, Battle Tree em Gen VII, Battle Stadium em Gen VIII/IX)
cujos oponentes usam, historicamente, **combinações de flags de IA mais completas e
consistentes** do que os treinadores comuns do mapa. Isso é um dos motivos pelos quais essas
facilidades são consideradas, pela comunidade, o teste mais próximo de uma batalha PvP
disponível no modo single-player.

| Facilidade | Geração | Observação sobre a IA |
|---|---|---|
| Battle Tower | III–IV | Oponentes com times gerados aleatoriamente dentro de regras (BST/nível), IA mais consistente que NPCs comuns |
| Battle Frontier | III (Emerald) / IV (Platinum) | Múltiplas instalações com regras de batalha distintas (ex.: Battle Palace usa IA que decide a ação sem input do jogador, baseada na "personalidade" do Pokémon) |
| Battle Subway | V | Sucessora direta do Battle Tower, mesmo princípio de IA mais robusta |
| Battle Maison | VI | Introduzida junto com o Battle Spot; times de oponentes competitivos |
| Battle Tree | VII | Inclui aparições de personagens icônicos como oponentes com times otimizados |
| Battle Stadium | VIII–IX | Modo local/online de facilidade de batalha na era Switch |

> **Nota curiosa:** o Battle Palace (Gen III) e o Battle Arena usam um modelo de decisão
> diferente do padrão — o jogador não escolhe diretamente o golpe; a IA decide a ação do
> próprio Pokémon do jogador com base em uma "personalidade" (natureza combinada a um
> perfil de agressividade), o que é um caso raro de IA de batalha atuando também no lado do
> jogador, e não apenas no lado do oponente.

## Padrões de seleção de golpe em Pokémon selvagens

Embora Pokémon selvagens nunca troquem ou usem itens, a escolha de golpe entre eles também
segue heurísticas (quando existentes) documentadas pela comunidade:

- Em várias gerações, encontros selvagens de baixo nível tendem a ter uma seleção de golpe
  próxima da aleatória entre os golpes conhecidos, sem avaliação de efetividade de tipo.
- Algumas espécies selvagens em áreas de história (ex.: guardiões de rota, encontros
  scriptados) podem ter comportamento ligeiramente mais dirigido, mas isso é exceção, não
  regra geral.
- Golpes de fuga (Whirlwind, Roar, Teleport) usados por um selvagem afetam apenas o **oponente**
  (o jogador) ou, no caso de Teleport, permitem ao próprio selvagem escapar da batalha —
  comportamento historicamente mais associado a decisões de baixa prioridade da IA do que a
  uma "escolha estratégica" no sentido competitivo.

## Comparação entre dificuldade de treinador e uso de flags

| Categoria de treinador | Flags de IA tipicamente habilitadas | Nível de desafio relativo |
|---|---|---|
| NPC genérico (ex.: "Youngster", "Lass") | Poucas ou nenhuma | Baixo |
| Treinador de rota temático (ex.: "Bug Catcher" com time reduzido) | Poucas, focadas no tipo temático | Baixo–médio |
| Líder de Ginásio | Combinação moderada a alta | Médio–alto |
| Elite Four / Champion | Combinação alta | Alto |
| Rival (recorrente ao longo do jogo) | Cresce a cada reencontro em algumas gerações | Progressivo |
| Oponente de facilidade de batalha (Battle Tower e sucessores) | Alta, mais consistente | Alto |

![Gengar](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png)

Gengar (#94 na Pokédex Nacional), presente no dataset deste repositório (ver
[`data-schema.md`](./data-schema.md)), é um Pokémon historicamente associado a estratégias
de batalha que dependem de previsão de troca do oponente (ex.: combinações com Destiny Bond
ou Perish Song) — justamente o tipo de decisão que a IA de treinadores comuns, anterior à
Geração VI, tem mais dificuldade de responder de forma otimizada.

## Ver também

- [Game Mechanics](./game-mechanics.md)
- [Move Mechanics](./move-mechanics.md)
- [RNG (Random Number Generation)](./random-number-generation.md)
- [Architecture](./architecture.md)
