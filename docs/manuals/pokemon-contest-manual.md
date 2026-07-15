# Manual de Pokémon Contests

Documento técnico sobre os **Pokémon Contests**, modo de competição de beleza e performance
introduzido na Geração III (*Ruby/Sapphire*, expandido em *Emerald*), reintroduzido em
*Omega Ruby/Alpha Sapphire* (Geração VI).

![Milotic, um dos Pokémon mais associados à categoria Beauty](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png)

## 1. Visão geral

Diferente das batalhas tradicionais, um Pokémon Contest avalia **aparência e performance**,
não poder de combate. Cada Pokémon é julgado com base em sua condição (Condition) e na
qualidade dos golpes (Appeals) que executa diante de um júri e de uma audiência.

> **Nota histórica:** os Contests só existem nos jogos de Hoenn (Ruby/Sapphire/Emerald,
> Omega Ruby/Alpha Sapphire). Eles não aparecem em Diamond/Pearl/Platinum, que usam o sistema
> similar porém distinto de **Super Contests**.

## 2. As 5 categorias

| Categoria | Stat de condição associado | Tipo de golpe valorizado |
|---|---|---|
| Cool (Legal) | Coolness | Golpes marcantes/impactantes (ex.: Flamethrower, Dragon Claw) |
| Beauty (Beleza) | Beauty | Golpes relacionados a brilho, luz, elegância (ex.: Moonlight, Water Pulse) |
| Cute (Fofura) | Cuteness | Golpes carismáticos/gentis (ex.: Charm, Sweet Kiss) |
| Smart (Inteligência) | Cleverness | Golpes técnicos/estratégicos (ex.: Psychic, Reflect) |
| Tough (Resistência) | Toughness | Golpes de força física bruta (ex.: Rock Slide, Superpower) |

Cada categoria tem sua própria progressão de Ranks e seus próprios Ribbons (ver
[`./pokemon-contests-judging.md`](./pokemon-contests-judging.md)).

## 3. Ranks (Ranques) de competição

| Rank | Nível de dificuldade | Observação |
|---|---|---|
| Normal Rank | Iniciante | Aberto a qualquer Pokémon, sem pré-requisito |
| Super Rank | Intermediário | Requer ter vencido o Normal Rank na mesma categoria |
| Hyper Rank | Avançado | Requer ter vencido o Super Rank |
| Master Rank | Elite | Rank máximo; concorrentes controlados por IA são bem mais fortes |

A cada Rank vencido, o Pokémon recebe uma fita (**Ribbon**) correspondente à categoria e ao
Rank, que fica registrada permanentemente em seu resumo (Summary).

## 4. Fase de Appeals (aparência/performance)

A fase de Appeals é dividida, de forma geral, em:

1. **Rodada de Visual (Dress Up/Introdução):** o Pokémon é avaliado por acessórios e pose
   (mais relevante em Contests com estilo Pokéblock Case/acessórios, disponível a partir de
   certas versões).
2. **Rodada de golpes (Appeal Round):** cada Pokémon participante executa golpes de status ou
   com efeitos visuais em turnos alternados; o júri distribui "corações" (hearts) de acordo
   com a condição do Pokémon, o golpe escolhido e a reação da audiência.

> A pontuação final da fase de Appeals é o que determina quais Pokémon avançam para a rodada
> seguinte (em Emerald, existe fase eliminatória; em Ruby/Sapphire, é uma pontuação única
> acumulada).

## 5. Condição do Pokémon (5 stats de condição)

Assim como stats de batalha, cada Pokémon possui 5 estatísticas de condição, todas com valor
inicial baixo e que podem ser aumentadas por Pokéblocks/Poffins:

| Stat de condição | Categoria associada | Sabor de Berry correspondente |
|---|---|---|
| Coolness | Cool | Spicy (picante) |
| Beauty | Beauty | Dry (seco/adstringente) |
| Cuteness | Cute | Sweet (doce) |
| Cleverness (Smartness) | Smart | Bitter (amargo) |
| Toughness | Tough | Sour (ácido) |

Além dessas 5, existe um sexto valor oculto chamado **Sheen (Feel)**, que aumenta a cada
Pokéblock/Poffin consumido e limita quantos podem ser dados antes do Pokémon "recusar" mais
comida (ficar "enjoado"). Sheen é resetado ao usar itens como Fluffy Tail ou ao viajar.

## 6. Pokéblocks

Introduzidos em *Ruby/Sapphire/Emerald* (e trazidos de volta em *Omega Ruby/Alpha Sapphire*),
os **Pokéblocks** são doces feitos misturando Berries em uma máquina chamada **Berry Blender**
(jogado sozinho ou multiplayer via Link Cable/conexão local).

| Berry usada | Sabor dominante | Stat de condição elevado |
|---|---|---|
| Cheri Berry | Spicy | Coolness |
| Chesto Berry | Dry | Beauty |
| Pecha Berry | Sweet | Cuteness |
| Rawst Berry | Bitter | Cleverness |
| Aspear Berry | Sour | Toughness |
| Razz Berry | Spicy (leve) | Coolness (Pokéblock básico) |

A intensidade e o sabor combinado do Pokéblock dependem de quantas Berries e de quais tipos
foram misturadas — combinações com sabores contrastantes tendem a gerar Pokéblocks mais fortes,
porém podem reduzir outros stats de condição como efeito colateral.

## 7. Poffins

Introduzidos na Geração IV (*Diamond/Pearl/Platinum*) para os Super Contests, os **Poffins**
substituem os Pokéblocks nesses jogos, sendo cozidos em um caldeirão (Poffin House, em
Hearthome City) em vez de misturados em uma máquina.

| Aspecto | Pokéblock (Gen III / ORAS) | Poffin (Gen IV) |
|---|---|---|
| Método de preparo | Berry Blender (mistura) | Caldeirão (cozimento, requer agitar em tempo certo) |
| Local | Lilycove City (Hoenn) | Hearthome City (Sinnoh) |
| Consumo pelo Pokémon | Pode causar desagrado (Sheen alto) | Também gera Sheen, além de nível de "Smoothness" |

> **Curiosidade:** cozinhar um Poffin em excesso (deixar o caldeirão em fogo alto por muito
> tempo) faz a mistura queimar, resultando em um Poffin de baixa qualidade — o oposto de
> mexer no ritmo certo, que produz Poffins raros como o "Rich Poffin".

## 8. Fluxo resumido de uma competição

1. Treinador aumenta as condições do Pokémon com Pokéblocks/Poffins antes de inscrevê-lo.
2. Inscrição em uma categoria e Rank específicos no prédio de Contests (Lilycove City em
   Hoenn).
3. Fase de Appeals: pontuação acumulada de corações.
4. Anúncio dos resultados e, para o vencedor, entrega do Ribbon correspondente.

## 9. Diferenças entre Ruby/Sapphire e Emerald

*Emerald* reformulou significativamente o formato dos Contests em relação a *Ruby/Sapphire*:

| Aspecto | Ruby/Sapphire | Emerald |
|---|---|---|
| Estrutura das rodadas | Pontuação acumulada única | Fase eliminatória (estilo torneio) após os Appeals |
| Reações da audiência | Mais simples, menos variação visual | Painel de audiência mais elaborado, com "Attention" |
| Sistema de combos | Não existe formalmente | Introduzido; recompensa sequências de golpes |
| Contest Hall | Apenas Lilycove City | Lilycove City (mantido), com mudanças na apresentação |

## 10. Preparação recomendada antes de inscrever um Pokémon

1. Verificar a categoria desejada e aumentar o stat de condição correspondente com
   Pokéblocks/Poffins até próximo do máximo (255 em muitos jogos).
2. Escolher golpes com boa pontuação base para a categoria, evitando repetição excessiva do
   mesmo golpe na mesma rodada (gera penalidade de audiência).
3. Ensinar ao menos um golpe de combo compatível, caso o formato do jogo utilize o sistema de
   combos (ver [`./pokemon-contests-judging.md`](./pokemon-contests-judging.md)).
4. Evitar alimentar Pokéblocks/Poffins em excesso pouco antes da competição, já que o Sheen
   alto pode fazer o Pokémon recusar comida e não ter reforço de última hora.

> **Dica:** treinadores experientes costumam manter um Pokémon "dedicado" a cada categoria,
> já que maximizar as 5 condições em um único Pokémon é lento e raramente compensa em
> comparação a especializar 5 Pokémon diferentes.

## Ver também

- [Manual de julgamento de Contests](./pokemon-contests-judging.md)
- [Manual do Treinador](./trainer-guide.md)
- [Tipos de Pokémon](../wiki/types.md)
- [Gerações Pokémon](../wiki/generations.md)
