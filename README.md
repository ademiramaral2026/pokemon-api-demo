# Pokémon API Demo

Projeto de demonstração em Node.js com uma pequena "API" de dados de Pokémon em memória, incluindo funções utilitárias de busca e filtragem.

## Estrutura

```
pokemon-api-demo/
├── src/
│   ├── pokemon.js   # Lista de 10 pokémons (id, name, type, base_stats)
│   └── utils.js     # Funções utilitárias: getByType, getStrongest, searchByName
├── tests/
│   └── pokemon.test.js
├── docs/            # Documentação técnica completa (ver seção abaixo)
├── package.json
└── .gitignore
```

## Funções disponíveis (`src/utils.js`)

- `getByType(type)` — retorna todos os pokémons de um determinado tipo.
- `getStrongest()` — retorna o pokémon com a maior soma de `base_stats`.
- `searchByName(name)` — busca pokémons cujo nome contenha o termo informado (case-insensitive).

## Como rodar os testes

```bash
npm test
```

## Documentação

Documentação técnica completa em [`docs/`](./docs), organizada em quatro categorias:

### 📖 Wiki

- [Visão geral](./docs/wiki/overview.md) — o que é Pokémon, gerações, regiões
- [Tipos](./docs/wiki/types.md) — os 18 tipos com tabela de fraquezas/vantagens
- [Gerações](./docs/wiki/generations.md) — Gen I a Gen IX, regiões e starters

### 📘 Manuais

- [Manual do Treinador](./docs/manuals/trainer-guide.md) — capturar, evoluir, batalhar
- [Manual de Batalha](./docs/manuals/battle-manual.md) — stats, moves, priority, weather

### 🛠️ Work Instructions

- [WI-001 — Captura](./docs/work-instructions/WI-001-catching.md)
- [WI-002 — Evolução](./docs/work-instructions/WI-002-evolving.md)
- [WI-003 — Breeding](./docs/work-instructions/WI-003-breeding.md)

### ⚙️ System Docs

- [Referência da API](./docs/system-docs/api-reference.md) — endpoints, parâmetros, exemplos
- [Data Schema](./docs/system-docs/data-schema.md) — schema de `Pokemon`, `Move`, `Type`, `Stat`
- [Architecture](./docs/system-docs/architecture.md) — diagrama ASCII da arquitetura

### 📝 Changelog

- [CHANGELOG.md](./docs/changelogs/CHANGELOG.md) — release notes v1.0.0

## Requisitos

- Node.js 18+

<!-- teste change control -->

<!-- novo teste change control - 2026-07-16 -->

<!-- teste com novo user de integracao -->

Teste change control - 2026-07-22 08:49:08
