# Z-Moves

Z-Moves são golpes especiais introduzidos na **Geração VII** (*Sun/Moon*, 2016), como sucessores
temáticos da Mega Evolução naquela geração. Diferente de mudar a forma do Pokémon, o Z-Move
transforma um único golpe do moveset em uma versão extremamente poderosa por **um único uso na
batalha**.

## Como usar um Z-Move

Requisitos:

1. O treinador precisa portar um **Z-Ring** (ou Z-Power Ring em *Ultra Sun/Ultra Moon*) no
   pulso.
2. O Pokémon precisa estar equipado com o **Z-Crystal** correspondente ao tipo do golpe que se
   quer potencializar (held item).
3. O Pokémon precisa conhecer pelo menos um golpe do tipo daquele Z-Crystal.
4. Uso limitado a **uma vez por Pokémon, por batalha** (não uma vez por treinador — cada
   Pokémon do time pode usar seu próprio Z-Move na mesma partida, desde que tenha seu Z-Crystal).

> **Nota:** diferente da Mega Evolução, usar um Z-Move não consome o turno de forma diferente —
> o Pokémon simplesmente executa o golpe escolhido em sua versão amplificada, com uma animação
> exclusiva antes do impacto.

## Z-Crystals genéricos por tipo

Cada tipo elemental tem um Z-Crystal genérico, que transforma **qualquer golpe daquele tipo**
conhecido pelo Pokémon no Z-Move genérico correspondente.

| Z-Crystal | Tipo | Z-Move genérico |
|---|---|---|
| Normalium Z | Normal | Breakneck Blitz |
| Firium Z | Fire | Inferno Overdrive |
| Waterium Z | Water | Hydro Vortex |
| Electrium Z | Electric | Gigavolt Havoc |
| Grassium Z | Grass | Bloom Doom |
| Icium Z | Ice | Subzero Slammer |
| Fightinium Z | Fighting | All-Out Pummeling |
| Poisonium Z | Poison | Acid Downpour |
| Groundium Z | Ground | Tectonic Rage |
| Flyinium Z | Flying | Supersonic Skystrike |
| Psychium Z | Psychic | Shattered Psyche |
| Buginium Z | Bug | Savage Spin-Out |
| Rockium Z | Rock | Continental Crush |
| Ghostium Z | Ghost | Never-Ending Nightmare |
| Dragonium Z | Dragon | Devastating Drake |
| Darkinium Z | Dark | Black Hole Eclipse |
| Steelium Z | Steel | Corkscrew Crash |
| Fairium Z | Fairy | Twinkle Tackle |

## Z-Moves exclusivos de espécie

Certos Pokémon (geralmente icônicos ou assinatura) possuem Z-Crystals **exclusivos**, que só
funcionam com um golpe específico daquela espécie, gerando um Z-Move único e nomeado.

| Imagem | Pokémon | Z-Crystal exclusivo | Move base | Z-Move exclusivo |
|---|---|---|---|---|
| ![Pikachu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png) | Pikachu | Pikanium Z | Volt Tackle | Catastropika |
| ![Eevee](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png) | Eevee | Eevium Z | Last Resort | Extreme Evoboost (aumenta todos os stats em +1, não causa dano) |
| ![Snorlax](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png) | Snorlax | Snorlaxium Z | Giga Impact | Pulverizing Pancake |
| ![Mewtwo](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png) | Mewtwo | Mewtwonite Z (via Psychium especial) | Psystrike | Genesis Supernova |
| ![Decidueye](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png) | Decidueye | Decidium Z | Spirit Shackle | Sinister Arrow Raid |
| ![Incineroar](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png) | Incineroar | Incinium Z | Darkest Lariat | Malicious Moonsault |
| ![Primarina](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png) | Primarina | Primarium Z | Sparkling Aria | Oceanic Operetta |
| ![Lycanroc](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png) | Lycanroc | Lycanium Z | Stone Edge | Splintered Stormshards |

## Fórmula de dano do Z-Move

O poder base de um Z-Move (para golpes de dano) é calculado a partir do **poder do golpe
original** que foi transformado, seguindo uma tabela de conversão. Quanto maior o poder base
original, proporcionalmente menor o multiplicador aplicado:

| Poder base do move original | Poder base do Z-Move resultante |
|---|---|
| 1–55 | 100 |
| 60–65 | 120 |
| 70–75 | 140 |
| 80–85 | 160 |
| 90–95 | 175 |
| 100–110 | 190 |
| 111–125 | 195 |
| 130+ | 200 |

Z-Moves exclusivos de espécie e alguns genéricos têm poder fixo, definido individualmente (por
exemplo, Catastropika tem poder base fixo de 210, superando a tabela padrão).

## Z-Moves de status

Golpes de status também podem ser transformados em Z-Moves, mas em vez de causar dano, eles
concedem um **efeito de batalha garantido**, geralmente aumentando stats do usuário em +1 ou +2
estágios, independente do efeito original do golpe de status.

| Exemplo de move de status | Z-Move de status resultante | Efeito garantido |
|---|---|---|
| Qualquer move de status + Normalium Z | Z-Move de status genérico | Efeito varia por categoria do move original (cura, boost de stat, etc.) |
| Growth + Grassium Z | — | Aumenta Attack e Special Attack em +1 cada, mais o efeito Z de +1 estágio extra |
| Splash + qualquer Z-Crystal | — | Splash normalmente não faz nada, mas como Z-Move concede +1 em todos os stats |

> **Curiosidade:** o uso de Z-Moves de status em golpes normalmente "inúteis" como *Splash*
> tornou-se uma piada recorrente da comunidade competitiva, já que transformava o pior move do
> jogo em um boost completo de stats.

## Z-Moves e a Elite Four / Battle Tree

Z-Moves só podem ser usados em batalhas onde o sistema é habilitado (majoritariamente
*Sun/Moon* e *Ultra Sun/Ultra Moon*). A partir da Gen VIII, a mecânica foi **removida** do jogo
principal (substituída por Dynamax/Gigantamax), embora ainda apareça em conteúdos retrospectivos
como o Battle Tree ou em formatos de torneio especiais no Nintendo Switch Online.

## Mais Z-Crystals exclusivos de espécie

Além dos citados acima, diversas outras espécies receberam Z-Moves exclusivos ao longo de
*Sun/Moon* e *Ultra Sun/Ultra Moon*, geralmente ligadas a Pokémon icônicos de capa ou starters
regionais.

| Imagem | Pokémon | Z-Crystal exclusivo | Move base | Z-Move exclusivo |
|---|---|---|---|---|
| ![Raichu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png) | Raichu (forma Alolan) | Aloraichium Z | Thunderbolt | Stoked Sparksurfer |
| ![Marshadow](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png) | Marshadow | Marshadium Z | Spectral Thief | Soul-Stealing 7-Star Strike |
| ![Lunala](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png) | Lunala | Lunalium Z | Moongeist Beam | Menacing Moonraze Maelstrom |
| ![Solgaleo](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png) | Solgaleo | Solganium Z | Sunsteel Strike | Searing Sunraze Smash |
| ![Necrozma](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png) | Necrozma (Ultra) | Ultranecrozium Z | Photon Geyser | Light That Burns the Sky |
| ![Mimikyu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png) | Mimikyu | Mimikium Z | Play Rough | Let's Snuggle Forever |
| ![Tapu Koko](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png) | Tapu Koko | Tapunium Z | Nature's Madness | Guardian of Alola |

## Onde obter os Z-Crystals

| Método | Detalhe |
|---|---|
| Trials e Totem Pokémon | Cada Trial Captain concede um Z-Crystal genérico ao final do desafio da ilha correspondente |
| Loja de Konikoni City / Royal Avenue | Vende Z-Crystals genéricos já obtidos anteriormente |
| Eventos e NPCs específicos | Z-Crystals exclusivos de espécie (Pikanium Z, Snorlaxium Z, etc.) geralmente vêm de eventos ou NPCs em pontos fixos da história |
| Ultra Sun/Ultra Moon | Adicionou novos Z-Crystals exclusivos ausentes em Sun/Moon original (ex.: Marshadium Z, Mimikium Z) |

## Z-Moves em batalhas Double e Multi

Em formatos com mais de um Pokémon em campo por lado, o uso de um Z-Move de status pode afetar
apenas o usuário (na maioria dos casos de boost de stat) ou o time inteiro, dependendo do golpe
de status convertido — por exemplo, um Z-Move originado de um golpe de suporte como *Aromatic
Mist* pode conceder o boost a todos os aliados em campo, não apenas a quem o usou.

> **Curiosidade:** apesar de cada Pokémon poder usar seu próprio Z-Move uma vez por batalha, na
> prática times competitivos de Sun/Moon (VGC 2017/2018) costumavam levar **apenas um portador
> de Z-Crystal por time**, dado que o Z-Ring é do treinador mas o item held (Z-Crystal) ocupa o
> slot de item de apenas um Pokémon por vez — tecnicamente múltiplos Pokémon do time podem
> carregar Z-Crystals diferentes, mas isso compete com outros held items valiosos como Leftovers
> ou Choice Band.

## Ver também

- [Mega Evolution](./mega-evolution.md)
- [Dynamax e Gigantamax](./dynamax-gigantamax.md)
- [Guia Competitivo](../manuals/competitive-guide.md)
