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

## Estrutura de documentação do repositório

A pasta `docs/` é organizada por audiência e tipo de conteúdo, não por feature. Isso mantém
material de referência de mecânica de jogo (`wiki/`) separado de material processual
(`work-instructions/`) e de material técnico sobre o próprio código (`system-docs/`).

| Pasta | Público-alvo | Tipo de conteúdo |
|---|---|---|
| `docs/wiki/` | Jogadores / consulta geral | Referência de mecânicas do jogo (tipos, abilities, status, clima, etc.) |
| `docs/manuals/` | Jogadores avançados | Guias extensos de sistemas complexos (batalha, contests, raids) |
| `docs/work-instructions/` | Qualquer usuário | Procedimentos passo a passo (`WI-00X`), formato objetivo e numerado |
| `docs/system-docs/` | Desenvolvedores | Documentação técnica do código e da infraestrutura do projeto |
| `docs/changelogs/` | Desenvolvedores | Histórico de mudanças do repositório |

![Pikachu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)

> **Nota de manutenção:** ao adicionar um novo Work Instruction, siga a numeração sequencial
> `WI-00X-nome-descritivo.md` (não reutilize números de WIs existentes) e sempre referencie o
> manual relacionado na tabela de metadados do topo do arquivo, para manter a navegabilidade
> cruzada entre `manuals/` e `work-instructions/`.

## Ver também

- [Data Schema](./data-schema.md)
- [API Reference](./api-reference.md)
