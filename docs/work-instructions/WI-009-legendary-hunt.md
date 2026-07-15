# WI-009 — Caça a Pokémon Lendário

| Campo | Valor |
|---|---|
| Código | WI-009 |
| Título | Enfraquecimento e captura segura de um Pokémon Lendário |
| Categoria | Work Instruction — Captura Especial |
| Versão | 1.0 |
| Relacionado | [Manual do Treinador](../manuals/trainer-guide.md) |

## Objetivo

Padronizar o procedimento de captura de um Pokémon Lendário sem nocauteá-lo (KO) durante o
enfraquecimento, considerando que, na grande maioria dos jogos, o encontro é **único e não
repetível** dentro do mesmo save — um erro que resulte no desmaio do Lendário pode significar a
perda definitiva daquela oportunidade de captura.

## Pré-requisitos

- Equipe de suporte com ao menos:
  - 1 Pokémon com o golpe **False Swipe** (nunca reduz o HP do alvo a zero, sempre deixa 1 HP).
  - 1 Pokémon com golpe de status de controle: **Sleep** (ex.: Spore, Hypnosis), **Paralysis**
    (ex.: Thunder Wave, Stun Spore) ou **Attract/Infatuation**, quando aplicável.
- Estoque de **Repels** para evitar encontros aleatórios no trajeto até o Lendário.
- Itens de cura da própria equipe: Full Heal (remove status negativos do próprio time),
  Potions/Full Restore (HP).
- Poké Balls variadas reservadas exclusivamente para a tentativa: **Ultra Ball**, **Timer
  Ball** e, se disponível, **Master Ball**.
- Jogo salvo imediatamente antes de entrar na área do encontro, como margem de segurança.

## Passos

### 1. Preparação antes do encontro

1. Equipe o Pokémon com **False Swipe** na equipe ativa.
2. Equipe o Pokémon com golpe de status de controle na equipe ativa.
3. Use Repels para atravessar a área até o ponto do encontro sem gastar PP ou arriscar
   desmaios em batalhas irrelevantes.
4. Salve o jogo antes de iniciar o encontro com o Lendário.

### 2. Enfraquecimento sem derrota

5. Inicie a batalha contra o Lendário. Diferente de Pokémon selvagens comuns, **a maioria dos
   Lendários não pode fugir da batalha** — isso reduz a pressão do tempo, mas não elimina o
   risco de acidentalmente nocauteá-lo.
6. Aplique um golpe de status de controle (Sleep ou Paralysis) o mais rápido possível, para
   reduzir a chance de o Lendário atacar seu time e para aumentar o multiplicador de captura.
   - **Atenção a imunidades de tipo:** Pokémon do tipo Electric são imunes a Paralysis; golpes
     baseados em pó (Spore, Sleep Powder, Stun Spore) não afetam tipo Grass.
7. Use **False Swipe** repetidamente até reduzir o HP do Lendário para a faixa mais baixa
   possível (idealmente 1 HP, já que o golpe nunca causa desmaio).
8. Cure o próprio time quando necessário (Potions, Full Heal) para sustentar a batalha por
   turnos suficientes.

### 3. Escolha da Poké Ball

9. Avalie o contexto da batalha para escolher a bola certa:
   - **Timer Ball** — multiplicador de captura aumenta a cada turno decorrido na batalha (ideal
     quando a batalha já se arrastou por vários turnos).
   - **Ultra Ball** — multiplicador fixo alto, boa escolha geral independentemente da duração
     da batalha.
   - **Master Ball** — garante 100% de captura; deve ser reservada para o Lendário mais difícil
     ou mais importante do playthrough, já que normalmente há apenas uma por jogo.
10. Arremesse a Ball assim que o HP estiver baixo e o status de controle estiver ativo.

### 4. Se a captura falhar

11. Repita o ciclo de cura + manutenção de status, sem usar golpes que possam causar dano
    excessivo (evite golpes super efetivos de alto poder).
12. Monitore o HP do próprio time constantemente — perder todos os Pokémon do time resulta em
    fuga automática da batalha e, em muitos jogos, na perda da chance de retomar o encontro no
    mesmo local imediatamente.

![Rayquaza, um dos Pokémon Lendários mais icônicos da franquia](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png)

*Rayquaza é capturável apenas uma vez por jogo em títulos como Ruby/Sapphire/Emerald, tornando
o preparo prévio essencial antes do confronto.*

## Checklist pré-encontro

- [ ] Pokémon com False Swipe presente e com PP suficiente para múltiplos usos.
- [ ] Pokémon com golpe de status de controle presente e com PP suficiente.
- [ ] Estoque de Repels suficiente para o trajeto de ida até o ponto de encontro.
- [ ] Full Heals e Potions/Full Restore no inventário.
- [ ] Poké Balls variadas reservadas: Ultra Ball, Timer Ball e Master Ball (se disponível).
- [ ] Jogo salvo imediatamente antes de entrar na área do encontro.

## Imunidades de tipo relevantes para golpes de status

| Golpe de status | Tipo imune | Observação |
|---|---|---|
| Thunder Wave / Stun Spore (Paralysis) | Electric | Imunidade total desde a introdução do tipo |
| Spore / Sleep Powder / Stun Spore (pó) | Grass | Imune a golpes baseados em pó desde a Gen VI |
| Toxic / Poison Powder (Poison) | Poison, Steel | Não podem ser envenenados |
| Will-O-Wisp (Burn) | Fire | Imune a queimadura |
| Attract (Infatuation) | — | Só funciona entre Pokémon de sexos opostos definidos |

- Antes de escolher o golpe de controle, confirme o tipo do Lendário-alvo na Pokédex para
  evitar desperdiçar um turno com um golpe que simplesmente não terá efeito algum.

## Resultado esperado

O Pokémon Lendário é capturado com sucesso, sem ter sido nocauteado durante o processo, e é
adicionado à equipe ou ao PC do treinador. O evento de captura costuma ser marcado como único
no save, impedindo nova tentativa com o mesmo indivíduo específico.

## Observações

| Pokémon Lendário | `capture_rate` aproximado | Observação de encontro |
|---|---|---|
| Mewtwo | 3 | Encontro único (Cave/Sala especial) |
| Articuno / Zapdos / Moltres | 3 | Encontro único por Aves Lendárias |
| Mew | 45 | Geralmente via evento/distribuição |
| Lugia / Ho-Oh | 3 | Encontro único, capa de jogo (Gen II) |
| Kyogre / Groudon | 5 | Encontro único (Gen III) |
| Rayquaza | 45 | Encontro único, Sky Pillar (Gen III) |
| Dialga / Palkia / Giratina | 3 | Encontro único (Gen IV) |
| Regirock / Regice / Registeel | 3 | Exigem puzzle de acesso ao santuário |

- Valores de `capture_rate` próximos de **3** indicam Pokémon extremamente difíceis de
  capturar mesmo com HP baixo e status aplicado — priorize sempre Timer Ball/Ultra Ball ou
  Master Ball nesses casos.
- Alguns Lendários (ex.: Regigigas, certas formas de Legendary Birds galarianas) têm
  habilidades ou imunidades específicas que bloqueiam determinados golpes de status —
  pesquise a habilidade do alvo antes do confronto.
- Em jogos mais recentes (Legends: Arceus, Scarlet/Violet), alguns Lendários podem ser
  reencontrados após a primeira captura sob condições especiais, mas isso é exceção, não regra.

> **Nota de atenção:** nunca use golpes de alto dano contra um Lendário sem antes reduzir o HP
> com False Swipe — um golpe crítico inesperado pode nocauteá-lo mesmo com HP moderado,
> encerrando a chance de captura naquele save.

> **Nota:** Repels são essenciais em rotas longas até santuários de Lendários — encontros
> aleatórios no caminho podem desgastar PP e HP da equipe de suporte antes mesmo do confronto
> principal começar.

## Diferença entre Lendários "de rota única" e "reencontráveis"

- A maioria dos Lendários de trio (Aves Lendárias, Beasts, Regis, Titans) permite apenas **um**
  encontro por save — se o Pokémon desmaiar por acidente, ele simplesmente desaparece daquele
  local para sempre naquele arquivo de save.
- Alguns Lendários "de capa" de jogo (Rayquaza, Groudon/Kyogre, Dialga/Palkia) seguem a mesma
  regra de encontro único, tornando o preparo prévio ainda mais crítico, já que geralmente são
  também os Lendários com maior relevância na história principal.
- Jogos mais recentes eventualmente introduzem eventos de redistribuição ou missões secundárias
  que permitem obter um segundo indivíduo da mesma espécie por meios alternativos (troca,
  distribuição via Mystery Gift), mas isso não deve ser assumido como garantido ao planejar a
  captura original.
- Sempre trate o primeiro encontro com um Lendário de rota única como se fosse a única
  oportunidade real dentro daquele save, e planeje toda a preparação com essa premissa em
  mente.
