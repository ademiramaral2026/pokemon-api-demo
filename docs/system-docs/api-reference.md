# API Reference

> **Nota de escopo:** a implementação atual (`src/utils.js`) expõe as funções como um módulo
> Node.js local (`require('./utils')`), sem um servidor HTTP. Esta referência documenta o
> contrato de cada função **como se fosse consumida via uma API REST local**, para fins de
> especificação técnica e para orientar uma futura camada HTTP (ver
> [`architecture.md`](./architecture.md), seção "Evolução futura").

## Base

```
Módulo: src/utils.js
Dataset: src/pokemon.js (10 Pokémon da Geração I)
```

---

## `GET /pokemon/type/:type`

Equivalente a `getByType(type)`. Retorna todos os pokémons de um tipo específico
(comparação case-insensitive).

**Parâmetros de path**

| Nome | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `type` | string | sim | Nome do tipo elemental (ex.: `fire`, `water`) |

**Exemplo de request**

```
GET /pokemon/type/fire
```

**Exemplo de response (200 OK)** — dados reais de `src/pokemon.js`:

```json
[
  {
    "id": 2,
    "name": "Charmander",
    "type": "fire",
    "base_stats": { "hp": 39, "attack": 52, "defense": 43, "speed": 65 }
  },
  {
    "id": 5,
    "name": "Charizard",
    "type": "fire",
    "base_stats": { "hp": 78, "attack": 84, "defense": 78, "speed": 100 }
  }
]
```

**Response para tipo inexistente no dataset (200 OK, array vazio)**

```
GET /pokemon/type/dragon
```
```json
[]
```

---

## `GET /pokemon/strongest`

Equivalente a `getStrongest()`. Retorna o Pokémon com a maior soma de `base_stats`
(`hp + attack + defense + speed`) em todo o dataset.

**Exemplo de request**

```
GET /pokemon/strongest
```

**Exemplo de response (200 OK)**

```json
{
  "id": 10,
  "name": "Mewtwo",
  "type": "psychic",
  "base_stats": { "hp": 106, "attack": 110, "defense": 90, "speed": 130 }
}
```

> Soma de stats do Mewtwo neste dataset: `106 + 110 + 90 + 130 = 436` — a maior entre os 10 registros.

---

## `GET /pokemon/search?name=:name`

Equivalente a `searchByName(name)`. Retorna todos os pokémons cujo nome contenha o termo
informado (substring, case-insensitive).

**Parâmetros de query**

| Nome | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `name` | string | sim | Termo de busca parcial do nome |

**Exemplo de request**

```
GET /pokemon/search?name=char
```

**Exemplo de response (200 OK)**

```json
[
  {
    "id": 2,
    "name": "Charmander",
    "type": "fire",
    "base_stats": { "hp": 39, "attack": 52, "defense": 43, "speed": 65 }
  },
  {
    "id": 5,
    "name": "Charizard",
    "type": "fire",
    "base_stats": { "hp": 78, "attack": 84, "defense": 78, "speed": 100 }
  }
]
```

**Response sem correspondência (200 OK, array vazio)**

```
GET /pokemon/search?name=zzz
```
```json
[]
```

---

## Códigos de status (referência para futura camada HTTP)

| Código | Significado |
|---|---|
| 200 | Sucesso — inclusive quando o resultado é um array vazio |
| 400 | Parâmetro obrigatório ausente ou inválido (ex.: `name` vazio) |
| 500 | Erro interno inesperado |

## Ver também

- [Data Schema](./data-schema.md)
- [Architecture](./architecture.md)
- [Tipos de Pokémon](../wiki/types.md)
