# WI-001 — Captura de Pokémon

| Campo | Valor |
|---|---|
| Código | WI-001 |
| Título | Captura de Pokémon selvagem |
| Categoria | Work Instruction — Campo |
| Versão | 1.0 |
| Relacionado | [Manual do Treinador](../manuals/trainer-guide.md) |

## Objetivo

Descrever o procedimento padrão para capturar com sucesso um Pokémon selvagem durante um
encontro em campo, maximizando a taxa de sucesso e minimizando o risco de o Pokémon fugir
ou desmaiar.

## Pré-requisitos

- Ao menos 1 Poké Ball (ou variante) no inventário.
- Ao menos 1 Pokémon na equipe capaz de batalhar (não desmaiado).
- Encontro em andamento com um Pokémon selvagem (não é possível capturar Pokémon de outros treinadores).
- Conhecimento do tipo do Pokémon alvo (ver [`../wiki/types.md`](../wiki/types.md)) para escolher o golpe de enfraquecimento adequado.

## Passos

1. **Identificar o alvo.** Verifique espécie, tipo(s) e, se possível, o `capture_rate` da espécie (dado exposto pela PokeAPI em `/pokemon-species/{id}`).
2. **Reduzir o HP do alvo** para uma faixa baixa (idealmente abaixo de 1/3 do HP máximo), usando golpes que **não** causem desmaio (KO). Evite golpes super efetivos em excesso — o objetivo é enfraquecer, não derrotar.
3. **Aplicar uma condição de status**, se possível (Sleep ou Paralysis são as mais eficazes para captura). Isso aumenta o multiplicador de captura.
4. **Selecionar a Poké Ball adequada ao contexto:**
   - Use `Net Ball` se o alvo for tipo Water ou Bug.
   - Use `Dusk Ball` se estiver em caverna ou for noite.
   - Use `Quick Ball` apenas no primeiro turno do encontro.
   - Use `Ultra Ball` como opção geral de alta taxa.
5. **Arremessar a Ball** (selecionar a ação "Ball" no menu de batalha).
6. **Aguardar o resultado da animação de shakes (tremidas):**
   - 0 shakes → o Pokémon escapou imediatamente.
   - 1–2 shakes → escapou.
   - 3 shakes → **capturado com sucesso**.
7. **Se a captura falhar**, repetir a partir do passo 2, atentando para o HP do próprio time (o Pokémon selvagem pode continuar atacando).
8. **Após o sucesso**, o Pokémon capturado é adicionado à equipe (se houver vaga) ou enviado ao PC de armazenamento.

## Resultado esperado

O Pokémon selvagem passa a pertencer ao treinador, é registrado na Pokédex (se for a primeira
captura da espécie) e fica disponível para uso em batalhas, evolução ou breeding.

## Observações

- `capture_rate` varia de **3** (ex.: Mewtwo, extremamente difícil) a **255** (ex.: Caterpie, muito fácil).
- A `Master Ball` ignora todos os cálculos de probabilidade e garante 100% de sucesso — deve ser reservada para encontros lendários/únicos.
- Não é possível capturar Pokémon enquanto todos os Pokémon do treinador estiverem desmaiados.
