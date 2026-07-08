# WI-003 — Breeding, IVs e Natureza

| Campo | Valor |
|---|---|
| Código | WI-003 |
| Título | Criação (breeding) de Pokémon com IVs e natureza controladas |
| Categoria | Work Instruction — Genética |
| Versão | 1.0 |
| Relacionado | [Manual do Treinador](../manuals/trainer-guide.md), [Manual de Batalha](../manuals/battle-manual.md) |

## Objetivo

Descrever o procedimento para gerar ovos de Pokémon (breeding) com **IVs (Individual Values)**
altos e **Nature (natureza)** desejada, otimizando o Pokémon resultante para uso competitivo.

## Conceitos-chave

| Termo | Definição |
|---|---|
| **IV** (Individual Value) | Valor individual de 0 a 31 por stat, definido aleatoriamente ao nascer/capturar. Funciona como uma "genética" fixa do indivíduo. |
| **EV** (Effort Value) | Valor ganho por treino/batalha (até 252 por stat, 510 no total). Não é definido no breeding, mas depois. |
| **Nature** (natureza) | Uma de 25 naturezas possíveis; cada uma aumenta um stat em 10% e reduz outro em 10% (ou é neutra). |
| **Egg Group** (grupo de ovo) | Categoria de compatibilidade reprodutiva. Dois Pokémon só produzem ovo se compartilharem ao menos um Egg Group (ou um deles for Ditto). |

## Pré-requisitos

- Um Pokémon Fêmea (ou Ditto) e um Macho compatíveis em Egg Group, deixados em um Day Care/Nursery.
- Itens recomendados para controle de IV/Nature (opcionais, mas fortemente recomendados):
  - `Destiny Knot` (herda 5 IVs dos pais em vez de 3) — segurar em um dos pais.
  - `Everstone` (garante herança da Nature do portador) — segurar em um dos pais.
  - Pokémon "Ditto" com IVs 31/31/31/31/31/31 ("Ditto perfeito"), amplamente usado como parceiro universal.

## Passos

1. **Selecionar os pais** com base em Egg Group compatível (consultar `egg_groups` na
   `/pokemon-species/{id}` da PokeAPI).
2. **Equipar o `Everstone`** no pai/mãe que possuir a Nature desejada, para garantir a
   herança determinística dessa Nature no ovo.
3. **Equipar o `Destiny Knot`** no outro progenitor, para herdar 5 dos 6 IVs (aleatoriamente
   escolhidos entre os IVs combinados dos dois pais) em vez de apenas 3.
4. **Depositar ambos os Pokémon** no Day Care / Pokémon Nursery.
5. **Caminhar ou avançar passos no jogo** até que o casal produza um ovo (indicado por uma
   mensagem do atendente do Day Care).
6. **Coletar o ovo** e adicioná-lo ao time (é necessário ter espaço na equipe).
7. **Chocar o ovo**, andando o número de passos exigido pela espécie (varia de ~2.560 a ~10.240 passos, conforme `hatch_counter`).
8. **Verificar os IVs do filhote** resultante (via app de status detalhado, ou ferramenta externa/IV Checker no jogo, a partir da Geração VIII).
9. **Repetir o processo** (passos 4–8) até obter um filhote com os IVs desejados
   (idealmente 31 em todos os stats relevantes, ou "6IV").

## Resultado esperado

Um ovo choca e produz um Pokémon recém-nascido no nível 1 (ou nível mínimo da espécie), com:

- Nature herdada de forma determinística (se `Everstone` foi usado).
- 5 IVs herdados dos pais (se `Destiny Knot` foi usado) + 1 IV aleatório.
- Espécie base da linha evolutiva mais baixa (ex.: criar com Charizard produz um ovo de Charmander).
- Golpes de ovo (Egg Moves) herdados do pai, se aplicável.

## Observações

- Um Pokémon Shiny tem probabilidade base de 1/4096 (mecânica moderna) por ovo chocado;
  métodos como "Masuda Method" (pais de idiomas de jogo diferentes) elevam essa chance para
  aproximadamente 1/512.
- Não é possível fazer breeding com Pokémon do grupo de ovo **Undiscovered** (ex.: a maioria
  dos lendários/míticos, como Mewtwo), exceto via Ditto em raras exceções especiais.
