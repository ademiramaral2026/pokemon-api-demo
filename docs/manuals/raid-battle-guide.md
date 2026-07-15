# Guia de Raid Battles

Documento técnico sobre batalhas em grupo contra Pokémon fortalecidos: os **Max Raid
Battles** de *Sword/Shield* (Geração VIII) e, brevemente, as **Raids** de *Pokémon GO*.

![Dracovish, um dos Pokémon icônicos de raid em Galar](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png)

## 1. Dens (Covis de Raid) em Sword/Shield

Os **Pokémon Dens** são pilares de rocha espalhados pela Wild Area (e depois pelas áreas do
Isle of Armor e Crown Tundra) que, quando ativos, emitem um feixe de luz visível a distância.

| Cor do feixe | Significado observado |
|---|---|
| Vermelho | Den ativo com Pokémon comum (probabilidade maior de 1–3 estrelas) |
| Roxo/rosa | Den ativo com maior probabilidade de Pokémon raro ou de estrelas mais altas |
| Sem feixe | Den inativo (pode ser reativado após um tempo ou usando um Wishing Piece) |

> **Nota:** a cor do feixe é apenas um indicativo estatístico, não uma garantia. A raridade
> real só é confirmada quando o jogador se aproxima e vê o número de estrelas na tela de
> confirmação da batalha.

Dens inativos podem ser reativados imediatamente com o item **Wishing Piece**, obtido como
recompensa de outras raids ou comprado no Digging Duo (Isle of Armor).

## 2. Sistema de estrelas de dificuldade

| Estrelas | Faixa de nível aproximada | Disponibilidade |
|---|---|---|
| 1 estrela | Nível 15–30 | Jogo base |
| 2 estrelas | Nível 25–35 | Jogo base |
| 3 estrelas | Nível 35–45 | Jogo base |
| 4 estrelas | Nível 45–60 | Jogo base |
| 5 estrelas | Nível 60–80 | Jogo base |
| 6 estrelas | Nível 70–90 | Isle of Armor / Crown Tundra (DLC) |
| 7 estrelas | Nível 80–100+ | Crown Tundra (DLC), inclui raids de Pokémon lendários |

As raids de 6 e 7 estrelas foram introduzidas exclusivamente nas expansões *The Isle of
Armor* e *The Crown Tundra*, e são a principal forma de capturar diversos Pokémon lendários
na Crown Tundra (ex.: Regieleki, Regidrago, Kubfu/Urshifu e os lendários "emprestados" das
gerações anteriores, como Mewtwo e Zapdos).

## 3. Mecânica de batalha em grupo

- Até **4 treinadores** participam de cada Max Raid Battle (online, local wireless ou
  preenchendo vagas vazias com treinadores controlados por IA).
- Cada treinador escolhe **1 Pokémon** para entrar na batalha; não há troca de Pokémon
  durante a raid (se desmaiar, o treinador fica de fora até o próximo turno, sem perder o
  Pokémon permanentemente).
- Cada turno tem um cronômetro curto para escolha de ações; a ordem de turno segue a Speed
  normalmente, exceto pelo boss, que age em um momento fixo do turno.
- Jogadores podem usar o **Y-Comm** para pedir ou doar itens de recuperação (Potions, Full
  Restores) durante a batalha.

> **Aviso:** apenas o **host** (jogador que abriu a raid) pode Dynamax seu próprio Pokémon
> durante a batalha — os demais participantes batalham sem Dynamax, exceto o Pokémon do boss.

## 4. Dynamax do Pokémon raid (boss)

O Pokémon selvagem da Den entra em campo **já Dynamaxado**, com:

- Barra de HP segmentada (o boss possui múltiplas "barras" de vida visuais, não uma única).
- Duração do Dynamax fixa por um número determinado de turnos (geralmente 3, mais longo em
  raids de estrelas mais altas).
- Acesso a **Max Moves** (versões amplificadas de seus golpes, incluindo efeitos de campo
  como clima ou Terrain).
- Em determinados pontos de HP, o boss pode gerar **Dynamax Shields** (barreiras que reduzem
  drasticamente o dano recebido por alguns turnos) — a estratégia correta nesse momento é
  parar de atacar e usar golpes de status (buffs de stats, cura) até o escudo se dissipar.

## 5. Estratégias por tipo de Pokémon raid

| Tipo do boss | Fraquezas a explorar | Cuidado com |
|---|---|---|
| Fire | Water, Rock, Ground | Grass, Ice, Bug, Steel (resistem) |
| Water | Grass, Electric | Fire, Ice, Steel (resistem) |
| Grass | Fire, Ice, Flying, Poison, Bug | Water, Electric, Ground (resistem) |
| Electric | Ground | Flying, Steel (resistem) |
| Rock | Water, Grass, Fighting, Ground, Steel | Normal, Fire, Poison, Flying (resistem) |
| Dragon | Ice, Dragon, Fairy | Fire, Water, Grass, Electric (resistem) |

> Ver tabela completa de efetividade em [`../wiki/types.md`](../wiki/types.md).

Recomenda-se levar um Pokémon com ability de suporte como **Intimidate** (reduz o Attack do
boss ao entrar em campo) ou golpes de status em grupo (Helping Hand, Follow Me) quando
jogando com uma equipe coordenada.

## 6. Itens obtidos

| Recompensa | Frequência |
|---|---|
| Watts (moeda da Wild Area) | Sempre |
| Ability Capsule / Ability Patch | Raro, mais comum em raids de estrelas altas |
| Exp. Candy (S, M, L, XL) | Comum |
| TRs (Technical Records) | Comum |
| Bottle Caps | Raro |
| Berries raras | Comum |
| O próprio Pokémon da raid | Após a vitória, com alta taxa de captura |

> **Curiosidade:** diferente de encontros normais, o Pokémon capturado ao final de uma raid
> vitoriosa tem sua natureza, IVs e possibilidade de ser Shiny sorteados no momento em que a
> Den é gerada, então recarregar o jogo (soft reset) antes de entrar pode gerar um Pokémon
> diferente ("Den reset").

## 7. Raids no Pokémon GO (breve panorama)

Embora o conceito seja semelhante — grupos de jogadores enfrentando um Pokémon fortalecido —
as Raids de *Pokémon GO* usam um sistema distinto, baseado em Ginásios do mundo real.

| Elemento | Descrição |
|---|---|
| Raid Egg | Ovo que aparece sobre um Ginásio anunciando uma raid futura |
| Níveis 1–5 | Tiers de dificuldade crescente; nível 5 é reservado a Pokémon lendários |
| Mega Raids | Raids contra Pokémon em Mega Evolução (introduzidas em 2020) |
| Legendary Raids | Raids de nível 5 (ou Mega) contra lendários como Mewtwo, Kyogre, Groudon |
| Raid Pass | Item gratuito (1 por dia, obtido girando o disco do Ginásio) para participar presencialmente |
| Premium Raid Pass | Versão paga que permite entrar em qualquer raid ativa |
| Remote Raid Pass | Permite participar remotamente, sem estar fisicamente no Ginásio |

> **Nota:** o Remote Raid Pass, criado durante a pandemia de 2020, teve seu preço e limite
> diário de uso reduzidos pela Niantic em 2023 (limitado a 5 por dia), gerando forte reação
> negativa da comunidade de jogadores.

## 8. Gigantamax vs. Dynamax em raids

Algumas Dens específicas ("Gigantamax Dens", identificáveis por um feixe de luz mais alto e
brilhante) têm chance de gerar um Pokémon capaz de **Gigantamax** em vez de apenas Dynamax.

| Aspecto | Dynamax | Gigantamax |
|---|---|---|
| Alteração visual | Aumento de tamanho | Aumento de tamanho + mudança de forma (exclusivo de certas espécies) |
| Espécies elegíveis | Qualquer Pokémon | Apenas espécies específicas (ex.: Corviknight, Drednaw, Centiskorch) |
| Golpes especiais | Max Moves | G-Max Moves (efeitos exclusivos por espécie, ex.: G-Max Wildfire causa dano contínuo ao campo) |
| Disponibilidade | Toda Den ativa | Apenas Dens marcadas como Gigantamax naquele momento |

## 9. Erros comuns de jogadores novatos

1. **Focar em atacar durante um Dynamax Shield:** desperdiça turnos, já que o dano é
   drasticamente reduzido enquanto o escudo está ativo.
2. **Levar apenas Pokémon do mesmo tipo:** raids exigem cobertura contra o boss específico;
   um time muito especializado falha se a estratégia primária for resistida.
3. **Ignorar o timer de turno:** cada ação tem um tempo limite; demorar demais pode resultar
   em o Pokémon "não agir" naquele turno.
4. **Gastar a única Dynamax do host cedo demais:** como Dynamax dura poucos turnos, usá-lo no
   início contra um boss ainda com HP alto costuma ser menos eficiente do que guardá-lo para
   o momento de maior pressão do encontro.

> **Dica:** golpes de suporte como Helping Hand (que aumenta o dano do próximo aliado a agir)
> são frequentemente subestimados em raids, mas podem ser decisivos contra bosses de 5 estrelas
> ou superiores, onde a margem de turnos é curta.

## Ver também

- [Manual de Batalha](./battle-manual.md)
- [Guia Competitivo](./competitive-guide.md)
- [Tipos de Pokémon](../wiki/types.md)
- [Pokémon Lendários](../wiki/legendary-pokemon.md)
- [Manual dos Gym Challenges](./gym-challenge-manual.md)
