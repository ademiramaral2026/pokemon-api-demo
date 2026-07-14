# WI-004 — Troca de Pokémon (Trade)

| Campo | Valor |
|---|---|
| Código | WI-004 |
| Título | Troca de Pokémon entre treinadores (Link Trade, GTS ou troca local) |
| Categoria | Work Instruction — Troca |
| Versão | 1.0 |
| Relacionado | [Manual do Treinador](../manuals/trainer-guide.md), [WI-002 — Evolução](./WI-002-evolving.md) |

## Objetivo

Padronizar o procedimento de troca de Pokémon entre treinadores, cobrindo tanto trocas
simples quanto trocas que desencadeiam evolução (com ou sem item segurado).

## Pré-requisitos

- Conexão ativa (local, Wi-Fi ou Nintendo Switch Online, dependendo do jogo).
- Pokémon elegível e não bloqueado para troca (verificar restrições de eventos ou torneios).
- Para evoluções por troca com item: o Pokémon deve estar segurando o item correto antes de
  iniciar a troca.
- Concordância mútua dos dois treinadores sobre os Pokémon a serem trocados.

## Passos

1. Abrir o menu de comunicação/troca do jogo e escolher o método: **Link Trade** (código de
   sala), **GTS/Surpresa Trade** (assíncrono, global) ou **troca local** (mesma rede/console).
2. Selecionar o Pokémon a ser oferecido na troca.
3. Confirmar a oferta e aguardar a confirmação do outro treinador (ou o pareamento do sistema,
   em trocas assíncronas).
4. Revisar os dados do Pokémon recebido (nível, natureza, IVs, moves) antes da confirmação final.
5. Confirmar a troca — a animação de troca é executada e ambos os Pokémon mudam de treinador.
6. Se o Pokémon trocado atende a uma condição de evolução por troca, a sequência de evolução
   é disparada automaticamente ao final da animação.

![Processo de troca (evolução por troca — Kadabra)](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png)

*Kadabra é um dos exemplos clássicos de Pokémon que evolui automaticamente ao ser trocado.*

## Tabela de Pokémon que evoluem por troca

| Pokémon | Item segurado (se houver) | Evolui para |
|---|---|---|
| Kadabra | — | Alakazam |
| Machoke | — | Machamp |
| Graveler | — | Golem |
| Haunter | — | Gengar |
| Boldore | — | Gigalith |
| Phantump | — | Trevenant |
| Onix | Metal Coat | Steelix |
| Scyther | Metal Coat | Scizor |
| Poliwhirl | King's Rock | Politoed |
| Clamperl | DeepSeaTooth | Huntail |
| Clamperl | DeepSeaScale | Gorebyss |
| Porygon | Up-Grade | Porygon2 |
| Karrablast | (trocado por um Shelmet) | Escavalier |

## Resultado esperado

Os Pokémon trocados passam a pertencer ao novo treinador, com o histórico de origem (`OT` —
Original Trainer) preservado nos metadados. Quando aplicável, a evolução por troca é
concluída e refletida imediatamente na Pokédex e na equipe do novo treinador.

> **Nota de atenção:** Pokémon trocados internacionalmente podem ter o idioma do jogo de
> origem preservado, o que afeta a nomenclatura de exibição em alguns títulos.

> **Nota de atenção:** trocas via GTS/Surpresa Trade são **irreversíveis** — não há
> confirmação adicional após o pareamento ser concluído pelo sistema.
