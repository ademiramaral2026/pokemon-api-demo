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

## Requisitos

- Node.js 18+
