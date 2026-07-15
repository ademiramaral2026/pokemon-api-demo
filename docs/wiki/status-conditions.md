# Status Conditions (Condições de Status)

Condições de status são efeitos duradouros que afetam um Pokémon durante a batalha (e, em
alguns casos, fora dela). Elas se dividem em duas categorias: **status primários** (não-voláteis),
dos quais um Pokémon só pode sofrer um por vez, e **status voláteis**, que podem se acumular
junto com um status primário.

> **Nota:** um Pokémon só pode ter **um status primário ativo por vez**. Por exemplo, um
> Pokémon paralisado não pode também estar queimado — para aplicar Burn nele, o Paralysis
> precisaria ser curado primeiro.

## Status Primários (não-voláteis)

### Burn (Queimadura)

| Aspecto | Detalhe |
|---|---|
| Efeito em batalha | Perde 1/16 do HP máximo ao final de cada turno (1/8 antes da Gen VII) |
| Efeito adicional | Reduz o **Attack físico** para 50% do valor normal |
| Cura | Item *Burn Heal*, *Full Heal*, *Full Restore*; moves *Refresh*, *Aromatherapy*, *Heal Bell*; abilities *Natural Cure*, *Shed Skin* (chance) |
| Imunidade | Pokémon do tipo **Fire** não podem ser queimados |
| Ability relevante | *Water Veil* e *Water Bubble* impedem Burn |
| Move causador | Will-O-Wisp (75% chance de burn, sem dano), Scald/Steam Eruption (30% chance) |

### Freeze (Congelamento)

| Aspecto | Detalhe |
|---|---|
| Efeito em batalha | Impede totalmente a ação do Pokémon |
| Chance de cura natural | ~20% por turno (descongela automaticamente) |
| Cura garantida | Item *Ice Heal*, *Full Heal*, *Full Restore*; move *Sacred Fire*, *Scald*, *Burn Up* (ao acertar um Pokémon congelado); troca de clima para Sun em algumas gerações |
| Imunidade | Pokémon do tipo **Ice** não podem ser congelados |
| Ability relevante | *Magma Armor* impede Freeze |
| Curiosidade | A partir da Gen VI, congelamento é curado automaticamente ao usar certos golpes de tipo Fire no Pokémon congelado |

### Paralysis (Paralisia)

| Aspecto | Detalhe |
|---|---|
| Efeito em batalha | 25% de chance de não conseguir agir no turno (antes da Gen VII era exibido como "está paralisado, não pode se mover!") |
| Efeito adicional | Reduz o **Speed** para 50% do valor (25% antes da Gen VII, quando a redução era de 75%) |
| Cura | Item *Parlyz Heal*, *Full Heal*, *Full Restore*; moves *Refresh*, *Heal Bell*; ability *Natural Cure* |
| Imunidade | Pokémon do tipo **Electric** não podem ser paralisados |
| Ability relevante | *Limber* impede Paralysis |
| Move causador | Thunder Wave (100% chance quando acerta), Stun Spore, Body Slam (30% chance) |

### Poison (Envenenamento) e Badly Poisoned

| Aspecto | Detalhe |
|---|---|
| Efeito em batalha (Poison normal) | Perde 1/8 do HP máximo ao final de cada turno |
| Efeito em batalha (Badly Poisoned / Toxic) | Dano crescente: 1/16, depois 2/16, 3/16... do HP máximo por turno, resetando ao trocar de Pokémon (na maioria dos jogos) |
| Cura | Item *Antidote*, *Full Heal*, *Full Restore*; moves *Refresh*, *Aromatherapy*, *Heal Bell*; ability *Natural Cure*, *Shed Skin* |
| Imunidade | Pokémon dos tipos **Poison** e **Steel** não podem ser envenenados (com exceções via moves específicos) |
| Ability relevante | *Immunity* impede Poison; *Poison Heal* transforma o dano de veneno em cura de 1/8 do HP por turno (ex.: Gliscor) |
| Move causador | Toxic (badly poisoned, 100% chance quando acerta), Poison Powder, Sludge Bomb (30% chance) |

### Sleep (Sono)

| Aspecto | Detalhe |
|---|---|
| Efeito em batalha | Não pode agir por 1 a 3 turnos (Gen III+); alguns moves só podem ser usados dormindo (*Sleep Talk*, *Snore*) |
| Cura | Item *Awakening*, *Full Heal*, *Full Restore*; moves *Refresh*, *Heal Bell*; ability *Natural Cure*, *Shed Skin*, *Early Bird* (acorda mais rápido) |
| Imunidade | Nenhum tipo é imune por padrão; ability *Insomnia* e *Vital Spirit* impedem Sleep |
| Move causador | Spore (100% de acerto e altíssima prioridade de uso competitivo), Sleep Powder, Hypnosis |
| Regra especial | *Sleep Clause* em competitivo (Smogon): geralmente só é permitido um Pokémon adormecido por vez por lado |

## Status Voláteis (podem coexistir com um status primário)

| Status volátil | Efeito |
|---|---|
| Confusion (confusão) | 33% (1/3) de chance de o Pokémon se atacar sozinho no lugar de executar o move escolhido; dura 1–4 turnos; curada com *Persim Berry* ou trocando de Pokémon |
| Flinch (recuo) | Impede a ação **apenas no turno em que é aplicado**; causado por moves de prioridade como Fake Out ou pela ability *Stench*/*King's Rock* |
| Infatuation (atração) | 50% de chance de não conseguir agir; ocorre quando afetado por *Attract* e o Pokémon é do gênero oposto ao usuário; curado ao trocar de Pokémon ou com ability *Oblivious* |
| Taunt (provocação) | Impede o uso de golpes de status por alguns turnos |
| Leech Seed | Rouba 1/8 do HP máximo do alvo por turno, transferindo para quem usou o golpe |

## Interações relevantes com tipos e abilities

| Tipo/Ability | Interação |
|---|---|
| Fire | Imune a Burn |
| Electric | Imune a Paralysis |
| Ice | Imune a Freeze |
| Poison / Steel | Imunes a Poison |
| Grass (com *Overcoat* ou similares) | Não é diretamente imune a status, mas imune a Leech Seed |
| *Natural Cure* | Cura qualquer status primário ao trocar o Pokémon de campo |
| *Guts* | Ganha bônus de Attack quando afetado por qualquer status primário (inclusive aumenta dano mesmo estando queimado, sem sofrer a penalidade normal de Attack do Burn) |
| *Flame Body* / *Static* / *Poison Point* | Chance de aplicar Burn/Paralysis/Poison ao atacante em contato físico |
| *Synchronize* | Reflete Burn, Paralysis e Poison recebidos de volta ao Pokémon que os causou |

> **Curiosidade:** a ability **Guts**, presente em Pokémon como Machamp e Conkeldurr, é uma das
> poucas que se beneficia de estar queimado — o bônus de Attack (+50%) supera a penalidade do
> Burn em golpes físicos, tornando "auto-queimar" com Flame Orb uma estratégia competitiva comum.

## Tabela-resumo de cura universal

| Método | Cura quais status |
|---|---|
| Full Restore / Full Heal | Todos os status primários |
| Chansey/Nurse no Centro Pokémon | Todos os status e HP |
| Aromatherapy / Heal Bell | Todos os status primários do time inteiro |
| Berries (Cheri, Pecha, Rawst, Chesto, Aspear, Persim) | Cura específica por status (Paralysis, Poison, Burn, Sleep, Freeze, Confusion respectivamente) |
| Ability Natural Cure | Cura ao trocar de Pokémon (Gen III+) |

## Berries de cura específica

| Imagem | Berry | Status curado |
|---|---|---|
| ![Chansey](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png) | Cheri Berry | Paralysis |
| ![Oddish](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png) | Pecha Berry | Poison |
| ![Growlithe](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png) | Rawst Berry | Burn |
| ![Snorlax](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png) | Chesto Berry | Sleep |
| ![Jynx](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png) | Aspear Berry | Freeze |
| ![Slowpoke](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png) | Persim Berry | Confusion |
| ![Miltank](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png) | Lum Berry | Qualquer status primário e Confusion (berry "universal") |

## Toxic Spikes e Poison Spikes de entrada

Além dos status aplicados diretamente por golpes, existem **golpes de armadilha** (entry
hazards) que aplicam status ao adversário no momento em que ele entra em campo:

| Golpe de entrada | Efeito |
|---|---|
| Toxic Spikes (1 camada) | Envenena (Poison normal) o Pokémon que entra em campo |
| Toxic Spikes (2 camadas) | Aplica Badly Poisoned em vez de Poison normal |
| Spikes | Não aplica status, mas causa dano direto proporcional ao HP máximo |
| Sticky Web | Não aplica status, mas reduz Speed em -1 estágio |

> **Nota:** Toxic Spikes não afeta Pokémon do tipo Poison (que na verdade **remove** as
> camadas ao entrar em campo) nem Pokémon do tipo Steel, seguindo a mesma imunidade de Poison
> comum. Pokémon voadores (Flying) que estão levitando também escapam de hazards de entrada
> baseados em contato com o solo.

## Diferenças históricas entre gerações

| Geração | Mudança relevante em status |
|---|---|
| Gen I | Freeze nunca era curado naturalmente (bug conhecido); Burn e Poison causavam 1/16 do HP |
| Gen II | Introdução de Badly Poisoned (Toxic) e Pokémon fêmea/macho para breeding |
| Gen III | Introdução das abilities que interagem com status (Natural Cure, Immunity, Limber, etc.) |
| Gen VI | Ajuste na penalidade de Speed do Paralysis (de -75% para -50%) |
| Gen VII | Ajuste no dano por turno do Burn (de 1/8 para 1/16 do HP máximo) |

## Status e a IA de Pokémon selvagens/treinadores

Em jogos com dificuldade elevada (ex.: Nuzlocke, modos hard rom hacks), a IA tende a priorizar
o uso de status incapacitantes como Sleep e Freeze no início da batalha, já que eles têm o maior
potencial de remover um Pokémon do jogo por vários turnos sem gastar recursos adicionais.

## Ver também

- [Manual de Batalha](../manuals/battle-manual.md)
- [Abilities](./abilities.md)
- [Climas de Batalha](./weather-effects.md)
- [Regras de Nuzlocke](../manuals/nuzlocke-rules.md)
