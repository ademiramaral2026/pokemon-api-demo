# Compatibilidade entre Versões (Trades e Transfers)

Documentação de referência sobre como Pokémon podem (ou não) ser movidos entre jogos de
gerações diferentes, incluindo os métodos históricos e o papel do Pokémon Bank/HOME.

## Tabela de compatibilidade entre gerações

| Jogo de origem | Destino possível | Método | Restrições |
|---|---|---|---|
| Red/Blue/Yellow (Gen I) | Gold/Silver/Crystal (Gen II) | Time Capsule | Apenas Pokémon/movesets existentes na Gen I; sem itens seguráveis |
| Gold/Silver/Crystal (Gen II) | Ruby/Sapphire/Emerald (Gen III) | — | **Não suportado** — não há caminho direto de transferência entre Gen II e Gen III |
| Ruby/Sapphire/Emerald/FireRed/LeafGreen (Gen III) | Diamond/Pearl/Platinum (Gen IV) | Pal Park (via Pokémon Ranch/conexão) | Limite diário de transferências; requer National Dex desbloqueada no jogo de destino |
| Diamond/Pearl/Platinum/HG/SS (Gen IV) | Black/White (Gen V) | Poké Transfer | Pokémon entram em "quarentena" temporária; alguns movesets/itens são removidos |
| Black/White/B2W2 (Gen V) | X/Y (Gen VI) | Poké Transporter + Pokémon Bank | Requer assinatura do Pokémon Bank (serviço pago, hoje descontinuado) |
| X/Y/OR/AS (Gen VI) | Sun/Moon (Gen VII) | Pokémon Bank | Compatível diretamente via nuvem |
| Sun/Moon/US/UM (Gen VII) | Sword/Shield (Gen VIII) | Pokémon Bank → Pokémon HOME | Sujeito à Galar Pokédex (nem toda espécie é aceita sem DLC) |
| Sword/Shield + DLC (Gen VIII) | Scarlet/Violet (Gen IX) | Pokémon HOME | Sujeito à Paldea Pokédex; algumas formas exigem atualização de jogo/HOME |
| Let's Go Pikachu/Eevee (Gen VII spin-off) | Sword/Shield (Gen VIII) | Pokémon HOME (via GO Transporter/Pokémon GO em alguns fluxos) | Fluxo especial, não idêntico ao transporte padrão entre gerações principais |

> **Nota histórica:** a transição entre Geração II e III é o único "buraco" real na cadeia de
> compatibilidade da franquia — Pokémon capturados apenas em Gold/Silver/Crystal que não
> existiam na Gen I não podem ser levados adiante sem primeiro serem recriados/obtidos
> novamente em um jogo posterior compatível.

## Pokémon Bank e Pokémon HOME

### Pokémon Bank (legado, Gen VI/VII)

Serviço de armazenamento em nuvem pago, lançado com X/Y, que permitia guardar até 3000
Pokémon e servia como ponte obrigatória para transferir Pokémon de Gen V (via Poké
Transporter) para Gen VI/VII. Foi descontinuado com o lançamento de Pokémon HOME.

### Pokémon HOME (atual, desde Gen VIII)

Serviço de armazenamento em nuvem com camada gratuita (limite de Pokémon reduzido) e camada
paga (Premium Plan, até 6000 Pokémon). Funciona como hub central:

- Recebe Pokémon do Pokémon Bank (migração única).
- Conecta-se diretamente a Sword/Shield, Scarlet/Violet e a jogos mobile (Pokémon GO, Pokémon
  Café ReMix).
- Aplica as restrições de Pokédex regional de cada jogo conectado — um Pokémon só pode ser
  **retirado** de HOME para um jogo se a espécie constar na Pokédex daquele jogo (Home Dex
  amplia essa checagem, mas cada jogo mantém sua própria dex jogável).

```
Gen V ──(Poké Transporter)──> Pokémon Bank ──(migração)──> Pokémon HOME
                                                                 │
Gen VI/VII (X/Y, Sun/Moon, etc.) ───────────────────────────────┤
                                                                 │
Gen VIII (Sword/Shield) ────────────────────────────────────────┤
                                                                 │
Gen IX (Scarlet/Violet) ────────────────────────────────────────┤
                                                                 │
Pokémon GO ──────────────────────────────────────────────────────┘
```

> **Nota de atenção:** mover um Pokémon de Pokémon HOME para dentro de um jogo é uma
> **operação de mão única por sessão** dentro daquele jogo — uma vez transferido para dentro
> do save do jogo, retirá-lo de volta ao HOME e trazê-lo de volta pode exigir passos
> adicionais dependendo da versão do jogo e do HOME.
