# WI-008 — Transferência de Pokémon entre jogos (Pokémon HOME / Pokémon Bank)

| Campo | Valor |
|---|---|
| Código | WI-008 |
| Título | Transferência de Pokémon entre jogos via Pokémon HOME e Pokémon Bank |
| Categoria | Work Instruction — Colecionismo / Serviços Online |
| Versão | 1.0 |
| Relacionado | [Manual da Pokédex](../manuals/pokedex-manual.md) |

## Objetivo

Padronizar o procedimento de transferência de Pokémon entre diferentes títulos da franquia
usando os serviços em nuvem **Pokémon Bank** (Gen VI–VII) e **Pokémon HOME** (Gen VIII em
diante), cobrindo as restrições de direção de transferência, os custos envolvidos e os
cuidados necessários para evitar perda de acesso a um Pokémon.

## Pré-requisitos

- Conta Nintendo (para Pokémon HOME) ou Nintendo Network ID (para Pokémon Bank, em consoles
  Nintendo 3DS/2DS) ativa e vinculada ao dispositivo.
- Jogo de origem já instalado e com os Pokémon a serem transferidos disponíveis no PC de
  armazenamento (não é possível transferir um Pokémon que esteja na equipe ativa sem antes
  depositá-lo no PC).
- Conexão à internet estável durante todo o processo de depósito/retirada.
- Assinatura ativa do serviço correspondente, quando exigida (ver seção de custos abaixo).
- Espaço disponível nas caixas de destino (tanto no aplicativo Bank/HOME quanto no jogo de
  destino).

## Passos

### 1. Depositar no jogo de origem

1. Abra o menu do PC de armazenamento no jogo de origem.
2. Selecione o(s) Pokémon a serem transferidos e mova-os para uma caixa dedicada (recomendado
   para facilitar a localização durante a sincronização).
3. Salve o jogo antes de encerrar essa etapa.

### 2. Sincronizar com o serviço em nuvem correto

4. Identifique qual serviço é compatível com o jogo de origem:
   - **Pokémon Bank** — compatível com jogos de **Geração VI** (X/Y, Omega Ruby/Alpha
     Sapphire) e **Geração VII** (Sun/Moon, Ultra Sun/Ultra Moon, Let's Go Pikachu/Eevee),
     rodando em Nintendo 3DS/2DS.
   - **Pokémon HOME** — compatível com **Geração VIII em diante** (Sword/Shield, Let's Go
     Pikachu/Eevee, Brilliant Diamond/Shining Pearl, Legends: Arceus, Scarlet/Violet) e também
     com **Pokémon GO**, rodando em Nintendo Switch ou dispositivo móvel.
5. Abra o aplicativo correspondente e conecte-se ao jogo de origem através do menu de
   comunicação do próprio jogo (opção "Conectar ao Pokémon Bank" ou "Conectar ao Pokémon HOME").
6. Selecione os Pokémon na caixa do jogo e confirme o depósito na nuvem.

### 3. Mover de Pokémon Bank para Pokémon HOME (quando aplicável)

7. Dentro do aplicativo Pokémon Bank, acesse o menu de transferência única "Mover para o
   Pokémon HOME".
8. Essa operação é **unidirecional**: uma vez movido, o Pokémon não pode retornar ao Pokémon
   Bank.
9. Confirme a operação e aguarde a sincronização completa antes de fechar o aplicativo.

### 4. Retirar no jogo de destino

10. No jogo de destino (por exemplo, Pokémon Scarlet/Violet), acesse o menu de comunicação e
    conecte-se ao Pokémon HOME.
11. Verifique a compatibilidade do Pokémon com a Pokédex do jogo de destino — Pokémon fora da
    Pokédex regional/nacional disponível não podem ser retirados até que o jogo seja atualizado
    (via DLC ou patch) ou até que outro título compatível seja conectado.
12. Selecione o Pokémon desejado na caixa do HOME e mova-o para uma caixa do PC do jogo de
    destino.
13. Salve o jogo imediatamente após a retirada.

### 5. Casos de transferência a partir de gerações anteriores

14. Para trazer Pokémon de **Geração V** (Black/White, Black 2/White 2) até o Pokémon Bank, é
    necessário usar o aplicativo auxiliar **Poké Transporter**, também de mão única — o
    Pokémon não pode retornar à Geração V depois de transferido.
15. Pokémon capturados no **Pokémon GO** só podem ser enviados ao Pokémon HOME através do
    **GO Transporter** (dentro do próprio app GO); essa transferência também é unidirecional —
    o Pokémon não pode retornar ao Pokémon GO após ser movido para o HOME.

![Porygon, o Pokémon projetado para viajar através do ciberespaço](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png)

*Porygon é o Pokémon cuja lore de origem — criado artificialmente para navegar em sistemas
digitais — o torna um símbolo apropriado para o próprio conceito de transferência entre jogos.*

## Checklist de transferência segura

- [ ] Pokémon depositado no PC do jogo de origem (nunca na equipe ativa) antes de conectar ao
      serviço em nuvem.
- [ ] Jogo salvo imediatamente antes e depois de qualquer depósito/retirada.
- [ ] Confirmação de que a operação desejada (Bank → HOME, Poké Transporter, GO Transporter) é
      unidirecional antes de confirmar.
- [ ] Espaço disponível verificado tanto na caixa de origem/nuvem quanto na caixa de destino.
- [ ] Assinatura do serviço (Bank ou HOME Premium) ativa, se a transferência depender de plano
      pago.
- [ ] Conexão à internet estável durante toda a operação, sem previsão de queda de energia ou
      de Wi-Fi.

## Erros comuns e como evitá-los

| Erro comum | Consequência | Como evitar |
|---|---|---|
| Tentar mover Pokémon direto da equipe ativa | Sistema não permite a operação | Depositar no PC antes de conectar ao serviço |
| Confundir direção de transferência (HOME → Bank) | Operação bloqueada pelo sistema | Lembrar que o fluxo é sempre "para frente" nas gerações |
| Ignorar limite de caixas do plano gratuito do HOME | Pokémon retido sem espaço de destino | Verificar espaço disponível antes de iniciar |
| Encerrar o aplicativo durante a sincronização | Risco de inconsistência de dados | Aguardar confirmação explícita de conclusão na tela |
| Tentar retirar Pokémon fora da Pokédex do jogo de destino | Retirada bloqueada | Verificar compatibilidade regional/nacional antes |

## Resultado esperado

O Pokémon transferido passa a estar disponível no PC de armazenamento do jogo de destino,
preservando nível, IVs, natureza, golpes conhecidos (quando compatíveis) e histórico de
Original Trainer (OT). Golpes ou formas incompatíveis com o jogo de destino podem ser
ajustados ou bloqueados automaticamente pelo sistema durante a transferência.

## Observações

| Serviço | Gerações suportadas | Plataforma | Modelo de custo |
|---|---|---|---|
| Poké Transporter | Gen V → Bank | Nintendo 3DS/2DS | Gratuito |
| Pokémon Bank | Gen VI e Gen VII | Nintendo 3DS/2DS | Assinatura anual paga |
| Pokémon HOME (plano gratuito) | Gen VIII+ e GO | Switch / móvel | Gratuito, com limite de caixas e de retiradas mensais |
| Pokémon HOME (plano Premium) | Gen VIII+ e GO | Switch / móvel | Assinatura mensal, trimestral ou anual paga |
| GO Transporter | Pokémon GO → HOME | Móvel | Gratuito (integrado ao app GO) |

- O plano gratuito do Pokémon HOME permite armazenar um número limitado de Pokémon (uma caixa
  de 30 espaços) e restringe a quantidade de retiradas/depósitos entre jogos por mês; o plano
  Premium expande significativamente o número de caixas disponíveis.
- **Regra de não retorno entre gerações:** um Pokémon que já entrou em um jogo de Geração VIII
  (Sword/Shield ou posterior) não pode mais ser transferido de volta para jogos de Geração VII
  (Sun/Moon, Ultra Sun/Ultra Moon, Let's Go Pikachu/Eevee) através do Pokémon HOME.
- Pokémon com formas ou golpes exclusivos de um jogo específico (ex.: certas Formas Alolan,
  golpes de evento) podem perder acesso a esses golpes ao serem movidos para um jogo que não os
  suporta, embora normalmente os recuperem se retornarem a um jogo compatível.
- Sempre verifique se o Pokémon está registrado como "elegível para transferência" — Pokémon
  obtidos de forma irregular ou marcados por eventos especiais podem ter bloqueios adicionais.

> **Nota de atenção:** antes de iniciar qualquer transferência unidirecional (Bank → HOME,
> Poké Transporter, GO Transporter), confirme que realmente deseja mover o Pokémon
> permanentemente para a plataforma de destino — não existe operação de "desfazer" após a
> confirmação.

> **Nota:** o Nintendo 3DS/2DS teve o encerramento gradual dos serviços online da Nintendo
> Network, o que tornou o Pokémon HOME o caminho recomendado atualmente para consolidar
> coleções antigas antes que o acesso ao Pokémon Bank fique ainda mais limitado.

- Mantenha um registro pessoal (planilha ou anotação) de quais Pokémon já foram movidos de
  forma unidirecional, para evitar tentar repetir uma operação que o sistema já bloqueará.
- Ao planejar consolidar uma coleção antiga, priorize primeiro os Pokémon de maior valor
  sentimental ou raridade (eventos encerrados, formas exclusivas), já que a paciência da
  fila de transferência é limitada pelo plano gratuito do HOME.
