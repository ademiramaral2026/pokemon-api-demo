# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [1.0.0] — 2026-07-08

### Added

- **Dataset inicial** (`src/pokemon.js`): 10 Pokémon reais da Geração I (Kanto) — Bulbasaur,
  Charmander, Squirtle, Pikachu, Charizard, Blastoise, Venusaur, Jigglypuff, Gengar e Mewtwo —
  cada um com `id`, `name`, `type` e `base_stats` (`hp`, `attack`, `defense`, `speed`).
- **Funções utilitárias** (`src/utils.js`):
  - `getByType(type)` — filtra pokémons por tipo elemental.
  - `getStrongest()` — retorna o pokémon com maior soma de `base_stats`.
  - `searchByName(name)` — busca por substring no nome (case-insensitive).
- **Suíte de testes** (`tests/pokemon.test.js`) com 6 casos usando `node:test` nativo,
  cobrindo os três utilitários, incluindo casos de borda (tipo inexistente, busca sem
  correspondência, case-insensitivity).
- **Configuração de projeto**: `package.json` (Node.js) e `.gitignore` padrão para Node.
- **Documentação técnica completa** (`docs/`):
  - `wiki/` — visão geral do universo Pokémon, os 18 tipos com tabela de efetividade completa,
    e as 9 gerações com regiões e starters reais.
  - `manuals/` — Manual do Treinador e Manual de Batalha (stats, moves, priority, weather).
  - `work-instructions/` — WI-001 (captura), WI-002 (evolução), WI-003 (breeding/IVs/nature),
    todas no formato padrão Objetivo / Pré-requisitos / Passos / Resultado esperado.
  - `system-docs/` — schema de dados, referência de API (contratos de request/response) e
    arquitetura do sistema em diagrama ASCII.
- Repositório público criado no GitHub: `pokemon-api-demo`.

### Notes

- Dados de tipos, gerações e stats reais consultados/validados contra a
  [PokeAPI](https://pokeapi.co/api/v2/).
- O dataset local (`src/pokemon.js`) simplifica o modelo real da Pokédex (1 tipo em vez de até
  2, e 4 stats em vez de 6) — detalhes da simplificação documentados em
  [`../system-docs/data-schema.md`](../system-docs/data-schema.md).
