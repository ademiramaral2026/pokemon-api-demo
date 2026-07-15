# Egg Groups (Grupos de Ovos)

Egg Groups são categorias introduzidas na **Geração II** (*Gold/Silver*) junto com o sistema de
**Breeding** (reprodução) no Day Care. Cada espécie de Pokémon pertence a um ou dois Egg Groups,
e esses grupos determinam **quais espécies podem cruzar entre si** para gerar um ovo. Sem esse
sistema, geração de ovos seria puramente aleatória — os Egg Groups dão previsibilidade estratégica
para quem quer criar Pokémon com IVs, natures e moves específicos (Egg Moves).

> **Nota:** Egg Groups não têm relação nenhuma com o tipo elemental do Pokémon. Um Pokémon do
> tipo Water pode estar no grupo Field, e um tipo Dragon pode estar no grupo Water 1. A lógica é
> baseada na forma/anatomia da espécie, não na tipagem de batalha.

## Como funciona a compatibilidade

Dois Pokémon depositados no Day Care (ou Nursery, dependendo do jogo) podem gerar um ovo se:

1. **Compartilham pelo menos um Egg Group** — Pokémon com dois grupos (ex.: Eevee é Field/Ditto
   only... na prática Eevee é apenas Field) só precisam de overlap em um dos grupos.
2. **São de gêneros opostos** (macho + fêmea) — regra padrão desde a Gen II.
3. **Ditto pode cruzar com quase qualquer Pokémon** que tenha gênero definido, agindo como
   substituto universal de parceiro reprodutivo — únicas exceções são Pokémon do grupo
   **Undiscovered** e o próprio Ditto.
4. Pokémon **sem gênero** (genderless) que não sejam Ditto só podem cruzar com Ditto.
5. A partir da Gen VI, Pokémon-lendários geralmente pertencem ao grupo **Undiscovered** e não
   podem reproduzir de forma alguma (mesmo com Ditto).
6. O ovo resultante é sempre da espécie da **mãe** (fêmea) — exceção: se um dos pais for Ditto,
   o ovo segue a espécie do parceiro não-Ditto, seja ele macho ou fêmea.

## Os Egg Groups oficiais

Existem 15 Egg Groups no total (contando **Undiscovered**, que na prática é "sem grupo
reprodutivo").

### Monster

Grupo de Pokémon com corpo robusto, geralmente répteis ou "monstros" clássicos.

| Imagem | Pokémon | Observação |
|---|---|---|
| ![Charmander](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png) | Charmander | Também está apenas no grupo Dragon (dual) em algumas gerações |
| ![Nidoran](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png) | Nidoran (M/F) | Monster + Field |
| ![Larvitar](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png) | Larvitar | Monster (único) |

### Water 1, Water 2 e Water 3

Divididos em três subgrupos por formato corporal:

| Subgrupo | Exemplos | Perfil corporal |
|---|---|---|
| Water 1 | Squirtle, Poliwag, Horsea | Anfíbios/répteis aquáticos |
| Water 2 | Magikarp, Goldeen, Feebas | Peixes |
| Water 3 | Krabby, Shellder, Omanyte | Moluscos e crustáceos |

### Bug

| Imagem | Pokémon |
|---|---|
| ![Caterpie](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png) | Caterpie, Weedle, Scyther, Pinsir |

### Flying

Aves e Pokémon voadores; muitos têm dual Egg Group com Field ou Water.

| Pokémon | Grupos |
|---|---|
| Pidgey | Flying |
| Spearow | Flying |
| Zubat | Flying |

### Field

Um dos grupos mais populosos, cobre a maioria dos mamíferos terrestres.

| Imagem | Pokémon |
|---|---|
| ![Eevee](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png) | Eevee, Growlithe, Rattata, Meowth |

### Fairy

| Pokémon | Observação |
|---|---|
| Clefairy | Fairy (único) |
| Jigglypuff | Fairy (único) |
| Snubbull | Fairy + Field |

### Grass

| Imagem | Pokémon |
|---|---|
| ![Bulbasaur](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png) | Bulbasaur (Grass + Monster), Oddish, Bellsprout |

### Human-Like

Pokémon com estrutura bípede humanoide.

| Pokémon | Observação |
|---|---|
| Machop | Human-Like |
| Mr. Mime | Human-Like + Fairy |
| Hitmonlee/Hitmonchan | Human-Like (únicos) |

### Mineral

Pokémon feitos de rocha, cristal ou metal.

| Pokémon |
|---|
| Geodude, Onix, Magnemite, Nosepass |

### Amorphous

Formas sem estrutura corporal fixa — gases, líquidos, energias.

| Pokémon |
|---|
| Ditto (grupo próprio, ver abaixo), Gastly, Grimer, Muk |

### Ditto

Ditto tecnicamente tem seu próprio grupo, mas sua regra especial de compatibilidade universal
o torna funcionalmente diferente de todos os outros grupos (ver seção de regras acima).

### Dragon

| Imagem | Pokémon |
|---|---|
| ![Dratini](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png) | Dratini, Vibrava, Bagon |

### Undiscovered

Pokémon que **não podem reproduzir**: a maioria dos lendários e míticos (Mewtwo, Articuno,
Zapdos, Moltres, Lugia, Ho-Oh, Kyogre, Groudon, etc.) e a maioria dos Pokémon bebês antes de
evoluírem em algumas classificações internas do jogo.

## Tabela-resumo: Grupo → Exemplos

| Egg Group | Exemplos de Pokémon | Pode cruzar com Ditto? |
|---|---|---|
| Monster | Charmander, Nidoran, Larvitar, Gyarados | Sim |
| Water 1 | Squirtle, Poliwag, Horsea, Wooper | Sim |
| Water 2 | Magikarp, Goldeen, Feebas | Sim |
| Water 3 | Krabby, Shellder, Omanyte, Tirtouga | Sim |
| Bug | Caterpie, Weedle, Scyther, Pinsir | Sim |
| Flying | Pidgey, Spearow, Zubat, Farfetch'd | Sim |
| Field | Eevee, Growlithe, Rattata, Meowth | Sim |
| Fairy | Clefairy, Jigglypuff, Snubbull | Sim |
| Grass | Bulbasaur, Oddish, Bellsprout, Sunkern | Sim |
| Human-Like | Machop, Mr. Mime, Hitmonlee | Sim |
| Mineral | Geodude, Onix, Magnemite | Sim |
| Amorphous | Gastly, Grimer, Muk, Koffing | Sim |
| Ditto | Ditto | — (não cruza com outro Ditto) |
| Dragon | Dratini, Vibrava, Bagon, Gible | Sim |
| Undiscovered | Mewtwo, Articuno, Kyogre, Groudon, bebês | **Não** |

## Egg Moves

Um dos principais motivos para usar Egg Groups estrategicamente é obter **Egg Moves** — golpes
que uma espécie só pode aprender via breeding, herdados do pai (macho) ou, em jogos mais
recentes, de qualquer um dos pais/Ditto. Exemplo clássico: Vaporeon aprendendo *Wish*, herdado
de um Pokémon do grupo Field/Fairy que conheça o move.

### Passos típicos de uma criação (breeding chain) competitiva

1. Escolher a espécie base (mãe) que se quer reproduzir.
2. Encontrar um Pokémon do mesmo Egg Group que já saiba o Egg Move desejado.
3. Cruzar essa espécie "doadora" com um Ditto de nature/IVs bons para "estabilizar" a linhagem.
4. Cruzar o filho resultante com a mãe-alvo para transferir o Egg Move.
5. Repetir com Everstone (item que impede evolução acidental) e Destiny Knot (herda IVs) para
   otimizar o resultado final.

## Ver também

- [Manual do Treinador](../manuals/trainer-guide.md)
- [Tipos de Pokémon](./types.md)
- [Pokémon Lendários](./legendary-pokemon.md)
