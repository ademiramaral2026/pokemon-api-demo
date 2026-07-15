# Manual de Julgamento de Pokémon Contests

Documento técnico sobre a perspectiva do **júri** nos Pokémon Contests: como a pontuação é
calculada, os bônus de combo, as penalidades de "nervosismo" e a premiação final.

![Glameow, Pokémon associado a performances Cute em Contests](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png)

## 1. Papel do júri

Cada Contest é avaliado por um painel (tipicamente 3 jurados fixos, incluindo Mr. Contesta,
Mr. Sukizo e mais um representante convidado). Os jurados não avaliam apenas "quem venceria
uma batalha" — eles pontuam três frentes independentes:

| Critério | O que é avaliado |
|---|---|
| Condição do Pokémon | Valor do stat de condição correspondente à categoria (Coolness, Beauty, Cuteness, Cleverness, Toughness) |
| Execução do Appeal | Golpe escolhido, timing de uso e adequação à categoria da competição |
| Reação da audiência | Nível de "empolgação" da plateia, que aumenta a pontuação de corações concedida |

> **Nota:** a condição do Pokémon define um "piso" de pontuação, mas mesmo um Pokémon com
> condição baixa pode pontuar bem em um único Appeal muito bem cronometrado — e o inverso
> também é verdade: condição alta não garante vitória se os Appeals forem mal encadeados.

## 2. Sistema de pontuação por corações (Hearts)

A cada turno de Appeal, o jurado concede uma quantidade de corações baseada em:

```
Pontuação do turno = Base do golpe (0-4 corações)
                    + Bônus de condição
                    + Bônus de combo (se aplicável)
                    + Bônus de audiência
                    - Penalidades (nervosismo, golpe repetido, etc.)
```

| Fonte de bônus/penalidade | Efeito típico |
|---|---|
| Golpe nunca usado antes na mesma rodada | Bônus de audiência (plateia reage melhor à novidade) |
| Golpe repetido consecutivamente | Penalidade (audiência perde interesse) |
| Combo de Appeals válido | Bônus extra de corações |
| Pokémon "startled" (assustado) | Perde a vez ou pontua com penalidade no turno seguinte |

## 3. Sistema de combos de Appeals

Alguns golpes têm uma relação de **combo**: usar um golpe "iniciador" em um turno e o golpe
"finalizador" correspondente no turno seguinte concede pontuação bônus, simulando uma
sequência coreografada.

| Golpe iniciador | Golpe finalizador | Lógica do combo |
|---|---|---|
| Attract | Golpes que "cativam" um Pokémon do sexo oposto (ex.: Sing, Charm) | O oponente "encantado" reage de forma exagerada, valorizando a performance |
| Defense Curl | Rollout | Golpes que fisicamente se encadeiam (encolher e depois rolar) |
| Sweet Scent | Golpes de aroma/perfume (ex.: Aromatherapy) | Reforça o tema olfativo da sequência |
| Mud Sport | Golpes de terra/lama (ex.: Mud-Slap) | Prepara o "ambiente" temático do Appeal |

> Usar **Attract** contra um Pokémon adversário de gênero oposto no Appeal Round faz esse
> Pokémon ficar "apaixonado" (smitten): ele fica mais vulnerável a ser "startled" (assustado)
> nos turnos seguintes, o que reduz sua pontuação — uma tática às vezes usada de forma
> defensiva/estratégica pelos treinadores.

## 4. Penalidade de nervosismo (Startled)

Alguns golpes causam o efeito de **assustar** (startle) os demais Pokémon no palco,
reduzindo a pontuação deles no turno seguinte:

| Golpe que causa Startle | Efeito |
|---|---|
| Stomp | Assusta todos os Pokémon que ainda não agiram no turno |
| Uproar | Assusta e reduz o bônus de audiência dos demais |
| Feint (em algumas iterações de Contest) | Interrompe a preparação de outro Pokémon |

Um Pokémon "startled" não perde o turno por completo, mas sua pontuação de Appeal cai
drasticamente, e ele fica mais suscetível a novas interrupções até se recuperar.

| Estado do Pokémon | Efeito na pontuação do próximo Appeal |
|---|---|
| Normal | Pontuação cheia, conforme condição + execução |
| Startled (assustado) | Redução severa de corações no próximo turno |
| Smitten (apaixonado, via Attract) | Chance elevada de ficar Startled nos turnos seguintes |

## 5. Ranking final e prêmios

Ao término das rodadas de Appeal (e, em Emerald, também de uma fase eliminatória tipo torneio),
os jurados somam a pontuação total de cada participante.

| Posição final | Prêmio |
|---|---|
| 1º lugar | Ribbon da categoria e Rank disputados + item exclusivo (varia por edição) |
| 2º e 3º lugar | Reconhecimento, sem Ribbon |
| Demais posições | Sem prêmio, podem tentar novamente |

| Ribbon (exemplos) | Categoria | Rank mínimo para essa fita específica |
|---|---|---|
| Cool Ribbon | Cool | Normal Rank |
| Beauty Ribbon | Beauty | Normal Rank |
| Cute Ribbon | Cute | Normal Rank |
| Smart Ribbon | Smart | Normal Rank |
| Tough Ribbon | Tough | Normal Rank |
| Versões "Super/Hyper/Master" de cada Ribbon | Mesma categoria | Rank correspondente vencido |

> **Curiosidade:** os Ribbons ficam permanentemente registrados no resumo do Pokémon
> (aba Ribbons) e, em alguns jogos, um Pokémon com muitas fitas pode ser exibido em locais
> especiais, como o Ribbon Syndicate/Trophy Garden de certas edições.

## 6. O papel do Sheen na percepção do júri

Embora o Sheen (ou "Feel", dependendo da tradução) não seja diretamente visível aos jurados,
ele influencia indiretamente a disposição do Pokémon durante a apresentação: Pokémon com
Sheen muito alto (que recusaram comida repetidamente antes da competição) tendem a ter
performances mais "erráticas" na simulação do jogo, o que se reflete em variações maiores de
pontuação entre turnos.

| Nível de Sheen | Efeito indireto na apresentação |
|---|---|
| Baixo | Performance estável, previsível |
| Médio | Boa receptividade a novos Pokéblocks/Poffins antes da próxima competição |
| Alto | Pokémon recusa mais comida; maior variância de resultado |

## 7. Jurados fixos e convidados

| Jurado | Papel |
|---|---|
| Mr. Contesta | Jurado fixo, presente em praticamente todos os Contests de Hoenn |
| Mr. Sukizo | Jurado fixo, conhecido por comentários sobre a "impressionante" performance |
| Jurado convidado | Varia por edição/evento; em algumas versões é um NPC ligado à história local |

## 8. Mais exemplos de combos válidos

| Golpe iniciador | Golpe finalizador | Categoria beneficiada |
|---|---|---|
| Growl | Golpes que reduzem stats ou intimidam (ex.: Leer) | Tough |
| Sing | Golpes que se aproveitam de um alvo "sonolento" (ex.: Dream Eater tematicamente) | Beauty |
| Rain Dance | Golpes de água (ex.: Water Pulse, Surf) | Beauty/Cool |
| Sunny Day | Golpes de fogo (ex.: Flamethrower, Solar Beam) | Cool/Tough |

> **Nota final:** o sistema de combos recompensa planejamento prévio — treinadores competitivos
> em Contests normalmente decoram pares fixos de golpes e treinam a ordem de uso antes mesmo
> de entrar na sala de competição, similar a uma coreografia ensaiada.

## 9. Diferenças de julgamento entre Ranks

Conforme o Rank da competição sobe, o rigor do júri (representado pela IA dos concorrentes e
pelos limiares de pontuação necessários para avançar) aumenta proporcionalmente:

| Rank | Exigência de condição | Tolerância a erros de combo |
|---|---|---|
| Normal | Baixa | Alta — poucos concorrentes exploram combos |
| Super | Moderada | Moderada |
| Hyper | Alta | Baixa — concorrentes de IA já usam combos com frequência |
| Master | Muito alta | Muito baixa — qualquer Startled mal calculado pode custar a vitória |

> **Aviso final:** no Master Rank, mesmo um Pokémon com condição máxima pode perder para um
> concorrente com condição mais baixa, mas execução impecável de combos — reforçando que
> aparência sozinha nunca é suficiente para vencer nos Ranks mais altos.

## Ver também

- [Manual de Pokémon Contests](./pokemon-contest-manual.md)
- [Manual do Treinador](./trainer-guide.md)
- [Manual de Batalha](./battle-manual.md)
