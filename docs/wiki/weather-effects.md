# Weather Effects (Climas de Batalha)

O sistema de clima em batalha foi introduzido na **Geração III** (*Ruby/Sapphire*) e se tornou
um dos pilares do jogo competitivo, criando arquétipos de time inteiros ("Rain Team", "Sun
Team", "Sand Team"). Um clima ativo altera dano por tipo, aciona abilities específicas e pode
causar dano passivo por turno.

> **Nota:** a partir da Gen VI, apenas **um clima pode estar ativo por vez** — se dois efeitos de
> clima diferentes forem acionados em sequência, o mais recente substitui o anterior
> imediatamente.

## Tabela de climas e efeitos

| Clima | Nome do move | Efeito em dano | Dano passivo por turno | Duração (move) | Duração (ability) |
|---|---|---|---|---|---|
| Sol forte (Harsh Sunlight) | Sunny Day | Fire +50%, Water -50% | — | 5 turnos (8 com Heat Rock) | Permanente enquanto a ability estiver em campo |
| Chuva (Rain) | Rain Dance | Water +50%, Fire -50% | — | 5 turnos (8 com Damp Rock) | Permanente enquanto a ability estiver em campo |
| Sandstorm (areia) | Sandstorm | Nenhum bônus direto de dano | 1/16 do HP máx. em tipos que não sejam Rock/Ground/Steel | 5 turnos (8 com Smooth Rock) | Permanente enquanto a ability estiver em campo |
| Hail / Snow | Hail (até Gen VIII) / Snowscape (Gen IX) | Nenhum bônus direto de dano | 1/16 do HP máx. em tipos que não sejam Ice (Hail); Snow na Gen IX não causa dano | 5 turnos (8 com Icy Rock) | Permanente enquanto a ability estiver em campo |

### Bônus adicionais por clima

| Clima | Bônus passivo extra |
|---|---|
| Sandstorm | Pokémon do tipo **Rock** recebem +50% de Special Defense |
| Snow (Gen IX) | Pokémon do tipo **Ice** recebem +50% de Defense |
| Sol forte | Ability *Solar Power* aumenta Special Attack em 50%, mas causa dano de 1/8 do HP por turno |
| Chuva | Move *Thunder* e *Hurricane* nunca erram sob chuva |
| Sol forte | Move *Thunder* e *Hurricane* têm precisão reduzida para 50% |
| Sol forte | *Solar Beam*/*Solar Blade* são usados em 1 turno em vez de 2 |
| Chuva | *Solar Beam*/*Solar Blade* têm poder reduzido para 50% |

## Abilities que invocam clima automaticamente

Estas abilities, chamadas de "clima assinatura", ativam o clima correspondente **ao entrar em
campo**, sem gastar um turno ou PP — diferente de usar o move diretamente.

| Imagem | Ability | Clima invocado | Pokémon notáveis |
|---|---|---|---|
| ![Kyogre](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png) | Drizzle | Chuva | Kyogre (assinatura), Pelipper |
| ![Groudon](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png) | Drought | Sol forte | Groudon (assinatura), Ninetales (regional Alola) |
| ![Tyranitar](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png) | Sand Stream | Sandstorm | Tyranitar, Hippowdon, Gigalith |
| ![Abomasnow](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png) | Snow Warning | Hail/Snow | Abomasnow, Alolan Ninetales |

> **Aviso:** desde a Gen VI, o clima invocado por essas abilities dura **permanentemente**
> enquanto o Pokémon estiver em campo — antes disso, tinha duração fixa de alguns turnos, o que
> tornava "Weather Wars" (trocar Pokémon com abilities climáticas opostas repetidamente) uma
> estratégia relevante em gerações antigas.

## Abilities que se beneficiam do clima

| Imagem | Ability | Clima necessário | Efeito | Pokémon notáveis |
|---|---|---|---|---|
| ![Venusaur](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png) | Chlorophyll | Sol forte | Dobra o Speed | Venusaur, Victreebel, Exeggutor |
| ![Kingdra](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png) | Swift Swim | Chuva | Dobra o Speed | Kingdra, Ludicolo, Kabutops |
| ![Excadrill](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png) | Sand Rush | Sandstorm | Dobra o Speed | Excadrill, Lycanroc (Midnight) |
| ![Abomasnow](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png) | Slush Rush | Hail/Snow | Dobra o Speed | Abomasnow, Cubchoo |
| ![Gliscor](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png) | Sand Veil | Sandstorm | +25% de evasão (Accuracy do oponente reduzida) | Gliscor, Cacturne |
| ![Froslass](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png) | Snow Cloak | Hail/Snow | +25% de evasão | Froslass, Sneasel |
| ![Torkoal](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png) | Solar Power | Sol forte | +50% Special Attack, mas perde 1/8 HP por turno | Torkoal, Ninetales (Alolan) |
| ![Cradily](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png) | Rain Dish | Chuva | Recupera 1/16 do HP máx. por turno | Cradily, Ludicolo |

## Moves que criam clima manualmente

| Move | Clima criado | Tipo do move |
|---|---|---|
| Sunny Day | Sol forte | Fire |
| Rain Dance | Chuva | Water |
| Sandstorm | Sandstorm | Rock |
| Hail | Hail (pré-Gen IX) | Ice |
| Snowscape | Snow (Gen IX) | Ice |
| Chilly Reception | Snow (Gen IX) | Ice |

## Interações e imunidades

| Clima | Quem é imune ao dano passivo |
|---|---|
| Sandstorm | Tipos Rock, Ground e Steel; abilities *Sand Veil*, *Sand Force*, *Sand Rush*, *Overcoat*; item *Safety Goggles* |
| Hail | Tipo Ice; abilities *Ice Body* (na verdade cura), *Snow Cloak*, *Overcoat*; item *Safety Goggles* |
| Ambos | Pokémon dentro de *Safeguard* não sofrem certos efeitos secundários, mas o dano de clima em si não é bloqueado por Safeguard |

### Ability especial: Ice Body

Diferente da maioria, **Ice Body** transforma o clima de Hail de prejudicial em benéfico:
recupera 1/16 do HP máximo do próprio Pokémon a cada turno de Hail, em vez de sofrer o dano
padrão.

## Terrains (relacionados, mas distintos de clima)

A partir da Gen VI, foi introduzido um sistema paralelo chamado **Terrain**, que afeta apenas
Pokémon com os pés no solo (não afeta Flying nem quem usa Levitate/Magnet Rise) e pode coexistir
com um clima ativo, já que ocupam "camadas" diferentes do campo de batalha.

| Terrain | Move que cria | Efeito principal |
|---|---|---|
| Electric Terrain | Electric Terrain | Golpes Electric +30%; impede Sleep em Pokémon no solo |
| Grassy Terrain | Grassy Terrain | Golpes Grass +30%; recupera 1/16 do HP máx. por turno de quem está no solo |
| Misty Terrain | Misty Terrain | Reduz dano de golpes Dragon em 50%; impede status primários em quem está no solo |
| Psychic Terrain | Psychic Terrain | Golpes Psychic +30%; bloqueia golpes de prioridade contra quem está no solo |

## Duração comparada: clima vs Terrain

| Efeito de campo | Duração padrão (move) | Duração com item de extensão |
|---|---|---|
| Clima (Sun/Rain/Sand/Hail) | 5 turnos | 8 turnos (Heat Rock, Damp Rock, Smooth Rock, Icy Rock) |
| Terrain | 5 turnos | 8 turnos (Terrain Extender) |
| Clima via ability assinatura | Permanente enquanto o Pokémon estiver em campo | Não aplicável |

## Estratégias de time por clima

> **Curiosidade:** o arquétipo competitivo "Rain Team" liderado por **Kyogre com Drizzle** foi
> tão dominante nas gerações V e VI que motivou mudanças de regras — a partir da Gen VII, as
> abilities climáticas assinatura de Kyogre, Groudon e outros perderam a duração permanente
> quando o próprio Pokémon deixa o campo, controlando o poder das chamadas "Weather Wars".

| Arquétipo | Clima usado | Peças-chave |
|---|---|---|
| Rain Team | Chuva | Pelipper/Kyogre (Drizzle) + Swift Swim (Kingdra, Barraskewda) |
| Sun Team | Sol forte | Torkoal/Groudon (Drought) + Chlorophyll (Venusaur, Lilligant) |
| Sand Team | Sandstorm | Tyranitar/Hippowdon (Sand Stream) + Sand Rush (Excadrill) |
| Hail/Snow Team | Hail/Snow | Abomasnow (Snow Warning) + Slush Rush (Arctozolt) |

## Clima extremo: Desolate Land, Primordial Sea e Delta Stream

Além dos climas convencionais, a Gen VI introduziu três climas "extremos" ligados às Primal
Reversions de Kyogre/Groudon e à Mega Evolução de Rayquaza. Eles funcionam como versões
reforçadas dos climas normais, com uma trava especial:

| Clima extremo | Ativado por | Efeito extra sobre o clima normal |
|---|---|---|
| Desolate Land | Primal Groudon (ability) | Sol forte que **anula golpes Water completamente** (não apenas reduz o dano) |
| Primordial Sea | Primal Kyogre (ability) | Chuva que **anula golpes Fire completamente** |
| Delta Stream | Mega Rayquaza (ability) | Remove as fraquezas do tipo Flying a Rock, Electric e Ice, e impede a formação de outros climas |

> **Nota:** esses climas extremos só podem ser substituídos pela entrada de outro Pokémon com
> uma ability de clima extremo diferente — moves comuns como Rain Dance ou Sunny Day não
> conseguem sobrepor um clima extremo ativo.

## Clima e itens held relacionados

| Item | Efeito relacionado a clima |
|---|---|
| Utility Umbrella | Anula os efeitos de Sol forte e Chuva no Pokémon que o porta (Gen VIII+) |
| Safety Goggles | Protege contra dano de Sandstorm/Hail e pólen de moves como Spore |
| Heat Rock / Damp Rock / Smooth Rock / Icy Rock | Estendem a duração do clima criado por move de 5 para 8 turnos |
| Weakness Policy | Não é climático, mas frequentemente combinado com times de clima para punir ataques super efetivos |

## Ver também

- [Manual de Batalha](../manuals/battle-manual.md)
- [Abilities](./abilities.md)
- [Condições de Status](./status-conditions.md)
- [Tipos de Pokémon](./types.md)
- [Guia Competitivo](../manuals/competitive-guide.md)
