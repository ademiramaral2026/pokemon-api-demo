# Architecture

Diagrama textual (ASCII) da arquitetura atual do `pokemon-api-demo` e proposta de evolução.

## Arquitetura atual (estado real do repositório)

```
pokemon-api-demo/
│
├── src/
│   │
│   │   ┌────────────────────┐
│   │   │   pokemon.js        │   Dataset estático em memória
│   │   │   (10 Pokémon,      │   (module.exports = array)
│   │   │    Gen I)           │
│   │   └─────────┬──────────┘
│   │              │ require('./pokemon')
│   │              v
│   │   ┌────────────────────┐
│   │   │   utils.js          │   Camada de funções puras
│   │   │  - getByType()      │   (filter/reduce sobre o array)
│   │   │  - getStrongest()   │
│   │   │  - searchByName()   │
│   │   └─────────┬──────────┘
│   │              │ require('../src/utils')
│   │              v
│   └── (consumido por)
│
├── tests/
│   └── pokemon.test.js   ── node:test + node:assert/strict
│
└── docs/                 ── esta documentação
```

## Fluxo de dados

```
┌───────────┐    require    ┌───────────┐    require    ┌────────────────┐
│ pokemon.js│ ─────────────>│ utils.js  │ ─────────────> │ pokemon.test.js│
│ (dataset) │               │ (lógica)  │                │ (consumidor)   │
└───────────┘               └───────────┘                └────────────────┘
```

- **`pokemon.js`** não depende de nada — é a fonte única de dados (single source of truth).
- **`utils.js`** depende apenas de `pokemon.js` — nenhuma função tem efeito colateral (são puras).
- **`pokemon.test.js`** depende apenas de `utils.js` — os testes não acessam `pokemon.js` diretamente.

## Características da arquitetura

| Característica | Descrição |
|---|---|
| Estilo | Módulo Node.js CommonJS (sem framework) |
| Persistência | Nenhuma — dataset em memória, hardcoded em `pokemon.js` |
| Runtime alvo | Node.js 18+ |
| Testes | `node:test` (test runner nativo do Node), sem dependências externas |
| Estado | Stateless — todas as funções de `utils.js` são puras (mesma entrada → mesma saída) |

## Evolução futura (proposta, não implementada)

Caso o projeto evolua para expor os dados via HTTP (ver contratos hipotéticos em
[`api-reference.md`](./api-reference.md)):

```
┌────────────┐      ┌───────────────┐      ┌───────────┐      ┌───────────┐
│  Cliente   │ ---> │  HTTP Server   │ ---> │ utils.js  │ ---> │ pokemon.js│
│ (browser/  │ <--- │ (ex.: Express) │ <--- │ (lógica)  │ <--- │ (dataset) │
│  curl)     │      └───────────────┘      └───────────┘      └───────────┘
└────────────┘
      │
      v
 JSON response
```

Passos sugeridos para essa evolução:

1. Adicionar `express` (ou framework equivalente) como dependência em `package.json`.
2. Criar `src/server.js` com as três rotas descritas em [`api-reference.md`](./api-reference.md).
3. Reaproveitar `src/utils.js` sem alterações — a lógica de negócio já está isolada e é
   framework-agnostic.
4. Adicionar testes de integração HTTP (ex.: com `supertest`) sem remover os testes unitários
   existentes em `tests/pokemon.test.js`.

## Ver também

- [Data Schema](./data-schema.md)
- [API Reference](./api-reference.md)
