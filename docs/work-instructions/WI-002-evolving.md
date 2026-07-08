# WI-002 — Evolução de Pokémon

| Campo | Valor |
|---|---|
| Código | WI-002 |
| Título | Evolução por nível, pedra ou troca |
| Categoria | Work Instruction — Progressão |
| Versão | 1.0 |
| Relacionado | [Manual do Treinador](../manuals/trainer-guide.md) |

## Objetivo

Padronizar o procedimento para evoluir um Pokémon através dos três métodos suportados:
**level-up**, **pedra evolutiva** e **troca (trade)**, garantindo que as condições
específicas de cada espécie sejam atendidas antes da tentativa.

## Pré-requisitos

- Pokémon elegível para evolução (possui uma cadeia evolutiva com próximo estágio, dado
  `evolution_chain` na PokeAPI).
- Conhecimento do método de evolução exigido pela espécie (consultar `/evolution-chain/{id}`).
- Para evolução por pedra: possuir o item específico no inventário.
- Para evolução por troca: acesso a outro treinador (local ou online) disposto a trocar.

## Passos

### A. Evolução por nível (level-up)

1. Verificar o nível mínimo exigido pela espécie (ex.: Charmander evolui para Charmeleon no nível 16).
2. Fazer o Pokémon ganhar experiência (batalhas, Rare Candy, Exp. Share) até atingir o nível-alvo.
3. Ao final da batalha em que o nível é atingido, o jogo dispara automaticamente a sequência de evolução.
4. Confirmar a evolução (ou cancelar, pressionando o botão B/cancelar, se disponível) quando solicitado.
5. Verificar se novos golpes ficaram disponíveis para aprendizado após a evolução.

**Exemplo real:** Charmander (nível 1–15) → Charmeleon (nível 16–35) → Charizard (nível 36+).

### B. Evolução por pedra evolutiva

1. Confirmar qual pedra é exigida pela espécie (ex.: `Fire Stone`, `Water Stone`, `Thunder Stone`, `Leaf Stone`, `Moon Stone`, `Sun Stone`, `Shiny Stone`, `Dusk Stone`, `Dawn Stone`, `Ice Stone`).
2. Abrir o inventário (Bag) e selecionar o item correspondente.
3. Selecionar "Usar" (Use) e escolher o Pokémon alvo.
4. Confirmar o uso do item — a sequência de evolução é disparada imediatamente, sem necessidade de batalha.

**Exemplo real:** Eevee + Water Stone → Vaporeon | Eevee + Thunder Stone → Jolteon | Eevee + Fire Stone → Flareon.

### C. Evolução por troca (trade)

1. Confirmar que a espécie evolui por troca (algumas exigem também um item segurado — ex.: `King's Rock`).
2. Iniciar uma sessão de troca (Link Trade, GTS ou troca local) com outro treinador.
3. Oferecer o Pokémon elegível para troca.
4. Completar a troca — a evolução ocorre automaticamente assim que o Pokémon chega ao console/jogo do outro treinador.
5. (Se aplicável) repetir a troca de volta, caso o objetivo seja recuperar o Pokémon já evoluído.

**Exemplo real:** Machoke → Machamp (troca simples) | Haunter → Gengar (troca simples) | Onix segurando Metal Coat → Steelix (troca com item).

## Resultado esperado

O Pokémon assume sua nova forma evolutiva, com stats base recalculados para a nova espécie,
possível mudança de tipo, novos golpes disponíveis e atualização do registro na Pokédex.

## Observações

- Algumas evoluções exigem condições adicionais: felicidade alta (Golbat → Crobat), hora do
  dia (Eevee + Moss Rock de dia → Leafeon), local específico (Magneton em Mt. Coronet → Magnezone).
- Segurar o item `Everstone` **impede** a evolução por nível — útil para preservar uma forma específica.
