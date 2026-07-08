# Manual do Treinador

Guia de referência para as três atividades centrais de um Treinador Pokémon: **capturar**,
**evoluir** e **batalhar**.

## 1. Capturar Pokémon

### Ferramentas

| Item | Efeito |
|---|---|
| Poké Ball | Taxa de captura padrão (1x) |
| Great Ball | Taxa de captura 1.5x |
| Ultra Ball | Taxa de captura 2x |
| Master Ball | Captura garantida (100%) |
| Net Ball | 3x contra tipos Water/Bug |
| Dusk Ball | 3x à noite ou em cavernas |
| Quick Ball | 5x no primeiro turno da batalha |

### Fatores que afetam a captura

1. **HP restante do Pokémon selvagem** — quanto menor, maior a chance de captura.
2. **Status alterado** — Sleep e Freeze dão bônus maior; Paralysis, Poison e Burn dão bônus menor.
3. **Taxa de captura base da espécie** (`capture_rate` na PokeAPI) — varia de 3 (lendários, ex.: Mewtwo) a 255 (comuns, ex.: Caterpie).
4. **Tipo da Ball usada** em relação ao contexto (local, tipo do alvo, turno).

Veja o passo a passo operacional completo em
[`../work-instructions/WI-001-catching.md`](../work-instructions/WI-001-catching.md).

## 2. Evoluir Pokémon

Existem três métodos principais:

- **Por nível (level-up)** — ex.: Charmander → Charmeleon (nível 16) → Charizard (nível 36).
- **Por pedra evolutiva (evolution stone)** — ex.: Water Stone em Poliwhirl → Poliwrath.
- **Por troca (trade)** — ex.: Machoke → Machamp ao ser trocado com outro treinador.

Alguns casos combinam condições extras (felicidade, hora do dia, item segurado, localização).
Veja o passo a passo completo em
[`../work-instructions/WI-002-evolving.md`](../work-instructions/WI-002-evolving.md).

## 3. Batalhar

Uma batalha Pokémon é disputada por turnos. Em cada turno:

1. Ambos os treinadores escolhem uma ação (usar um golpe, trocar de Pokémon, usar um item ou fugir).
2. A ordem de execução é decida por **prioridade do golpe** e depois por **Speed** (velocidade).
3. O dano é calculado considerando poder do golpe, Attack/Special Attack do atacante,
   Defense/Special Defense do defensor, STAB, efetividade de tipo e fatores aleatórios.

Veja a mecânica completa de batalha em
[`battle-manual.md`](./battle-manual.md).

## 4. Breeding (criação)

Para produzir ovos com IVs e naturezas desejadas, veja
[`../work-instructions/WI-003-breeding.md`](../work-instructions/WI-003-breeding.md).

## Fluxo resumido do treinador

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Encontrar  │ --> │  Capturar   │ --> │   Treinar   │ --> │   Evoluir   │
│  Pokémon    │     │ (WI-001)    │     │ (batalhas)  │     │ (WI-002)    │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                                                                     │
                                                                     v
                                                            ┌─────────────┐
                                                            │  Competir   │
                                                            │  (Liga)     │
                                                            └─────────────┘
```
