---
name: "apple-liquid-glass"
description: "Sistema de design Apple Liquid Glass completo (iOS/macOS 26+): material, cores, tipografia SF, layout, componentes, APIs SwiftUI/UIKit/AppKit e receita web (CSS). Use ao criar ou revisar UI no padrão Liquid Glass."
---

# Apple Liquid Glass — Sistema de Design Completo

Referência mapeada da documentação oficial da Apple (developer.apple.com: "Adopting Liquid Glass", "Applying Liquid Glass to custom views", Landmarks sample, páginas de API SwiftUI/UIKit/AppKit e Human Interface Guidelines: Materials, Color, Dark Mode, Accessibility, Motion, Typography, SF Symbols, Layout, App Icons e ~25 páginas de componentes). Leitura feita em out/2026 (era iOS/macOS 26–27).

## Como usar esta skill

1. Identifique a plataforma-alvo:
   - **Nativo Apple** (SwiftUI / UIKit / AppKit) → seções 1–9 e 10 (APIs).
   - **Web / React / HTML** → seções 1–9 para as regras e a seção 11 (receita CSS) para implementar.
2. Siga sempre as **Regras de ouro** (seção 1). Elas valem mais do que qualquer efeito visual.
3. Use os tokens exatos (cores, tipografia, medidas) das tabelas. Não invente valores quando existir um oficial.
4. Antes de entregar, rode o **Checklist** (seção 12).

---

## 1. Regras de ouro (o que define Liquid Glass)

- **Liquid Glass é uma camada funcional, não decoração.** Ele forma uma camada distinta para **controles e navegação** (tab bars, toolbars, sidebars, sheets, popovers, menus) que **flutua acima da camada de conteúdo**. O conteúdo rola e "espia" por baixo.
- **NUNCA use Liquid Glass na camada de conteúdo.** Fundos de app, cards de conteúdo e listas usam **materiais padrão** (ultraThin/thin/regular/thick) ou cores de fundo do sistema.
  - Exceção: controles com elemento interativo transitório (**sliders e toggles**). O knob vira vidro **apenas enquanto a pessoa interage**.
- **Use com parcimônia.** Componentes padrão ganham o vidro automaticamente. Em controles customizados, limite aos elementos funcionais mais importantes. Excesso distrai do conteúdo.
- **Não empilhe vidro sobre vidro** e evite aglomerar controles de vidro.
- **Vidro não tem cor própria.** Ele herda as cores do conteúdo atrás dele. A cor fica reservada para ênfase (ação primária, status).
- **Remova fundos customizados** de barras, toolbars, tab bars, split views, sheets e popovers. Deixe o sistema decidir. Em vez de colocar uma cor sólida ou semi-opaca atrás dos controles, use um **scroll edge effect**.
- **Formas concêntricas.** A curvatura do hardware define a curvatura de janelas, sheets, popovers e controles. Os cantos internos devem ser concêntricos aos do contêiner (raio interno = raio externo − padding).
- **Fluidez.** Os controles "ganham vida" ao toque: botões **se transformam (morph)** em menus e popovers, e formas de vidro próximas **se fundem**.
- **Adaptação obrigatória** a light, dark, increased contrast, Reduce Transparency, Reduce Motion e ao visual de vidro escolhido pelo usuário.

---

## 2. O material

### 2.1 Variantes de Liquid Glass

| Variante | Comportamento | Quando usar |
|---|---|---|
| **Regular** (padrão) | Desfoca o fundo e ajusta a luminosidade para manter a legibilidade. Usada pela maioria dos componentes do sistema. | Sempre que o fundo puder prejudicar a legibilidade, ou o componente tiver muito texto (alerts, sidebars, popovers). |
| **Clear** | Altamente translúcida. | **Somente** sobre fundos visualmente ricos (fotos, vídeo, mídia). |
| **Identity** (API) | Sem efeito, como se não houvesse vidro. | Ligar e desligar o efeito condicionalmente. |

- **Clear sobre conteúdo claro:** adicione uma **camada de escurecimento preta de 35% de opacidade** atrás. Dispense-a se o conteúdo já for escuro o suficiente ou se você usar os controles de reprodução do AVKit. O exemplo de API da Apple usa `.black.opacity(0.3)`.
- **Elementos pequenos** (toolbars, tab bars) alternam entre aparência clara e escura conforme o conteúdo abaixo. Símbolos e texto são **monocromáticos**: mais escuros sobre conteúdo claro, mais claros sobre conteúdo escuro.
- **Elementos grandes** (sidebars) são **mais opacos**, para preservar a legibilidade.
- **Sheets:** o half sheet fica inset das bordas e translúcido. Ao expandir para altura total, fica **mais opaco**.
- **Física do material:** desfoca o que está atrás, **refrata**, reflete cor e luz do entorno, tem **realces especulares (specular highlights)** nas bordas e reage ao toque e ao ponteiro em tempo real. Ao toque direto a resposta é mais enfática; no trackpad é mais sutil.

### 2.2 Materiais padrão (camada de conteúdo)

- **iOS/iPadOS:** `ultraThin`, `thin`, `regular` (padrão) e `thick`.
  - Mais grosso = mais opaco = melhor contraste para texto fino.
  - Mais fino = mais translúcido = preserva o contexto.
- **Escolha pelo significado semântico**, não pela cor aparente.
- **Use cores vibrantes sobre materiais.**
  - Labels: `label`, `secondaryLabel`, `tertiaryLabel`, `quaternaryLabel`.
  - Fills: `fill`, `secondaryFill`, `tertiaryFill`.
  - `separator`.
  - **Evite `quaternaryLabel` sobre thin e ultraThin** (contraste baixo demais).
- **macOS:** materiais por finalidade (`NSVisualEffectView.Material`), com blending *behind window* ou *within window*.
- **tvOS:**
  - ultraThin: telas cheias em esquema claro.
  - thin: overlays em esquema claro.
  - regular: overlays.
  - thick: overlays em esquema escuro.
  - Botões e imagens viram vidro ao receber foco (Apple TV 4K 2ª geração ou mais nova).
- **visionOS:** as janelas têm um "glass" do sistema que não pode ser alterado e não existe Dark Mode.
  - thin: elementos interativos e selecionados.
  - regular: separar seções.
  - thick: elemento escuro sobre regular.
- **watchOS:** não remova nem substitua o material padrão de modal sheets.

### 2.3 Scroll edge effect

É a transição desfocada entre o conteúdo que rola e uma área de controles flutuante.

- **Estilos:**
  - **automatic** (preferido). É mais opaco quando há toolbar cheia, texto fora do vidro ou headers fixos.
  - **hard**: borda linear, quase opaca, bem definida, com linha divisória.
  - **soft**: borda sutil e desfocada. Teste a legibilidade.
- **Não é decorativo.** Use somente quando houver scroll view atrás de UI flutuante. Ele não bloqueia nem escurece como um overlay.
- **Um por view.** Em split views, mantenha alturas consistentes entre os painéis.

### 2.4 Background extension effect

- Espelha e desfoca o conteúdo adjacente sob sidebars e inspectors, criando um visual de ponta a ponta (ideal para hero images).
- Aplique **somente à imagem de fundo**. Coloque o overlay de texto e botões **depois** do modificador.
- A view não pode ter padding lateral.

---

## 3. Cor

### 3.1 Regras de cor no Liquid Glass

- **Aplique cor com parcimônia**, tanto no vidro quanto nos símbolos e texto sobre ele. Reserve-a para **indicadores de status e ações primárias**.
- **Para enfatizar a ação primária, colore o FUNDO (tint do vidro), não o símbolo ou o texto.** O sistema aplica a accent color ao fundo dos botões proeminentes (ex.: Done).
- **Não colore o fundo de vários controles** (no máximo 1–2 botões proeminentes por view).
- **Fundo colorido no app?** Prefira toolbars e tab bars **monocromáticas**, ou uma accent color claramente diferente do conteúdo. Apps de conteúdo majoritariamente monocromático funcionam bem com uma accent de marca.
- **Evite cores parecidas** entre os labels dos controles e o conteúdo abaixo. O estado em repouso (topo do scroll) precisa ser legível.
- **Toda cor customizada precisa de 4 variantes:** light, dark, light com increased contrast e dark com increased contrast. "Even if your app ships in a single appearance mode, provide both light and dark colors to support Liquid Glass adaptivity."
- **Não fixe (hard-code) valores do sistema.** Use as APIs (`Color.red`, `UIColor.systemRed`), porque os valores mudam entre releases. **Não redefina significados** (separator não é cor de texto).
- **Nunca dependa só da cor.** Use também texto, forma ou ícone.
- **Gestão de cor:** use sRGB na maioria dos casos. Para wide color, Display P3 com 16 bits por canal, em PNG.

### 3.2 Cores do sistema (tabela unificada atual da HIG, iOS 26+)

| Nome | Light | Dark | Light (alto contraste) | Dark (alto contraste) |
|---|---|---|---|---|
| Red | `#FF383C` | `#FF4245` | `#E9152D` | `#FF6165` |
| Orange | `#FF8D28` | `#FF9230` | `#C55300` | `#FFA056` |
| Yellow | `#FFCC00` | `#FFD600` | `#A16A00` | `#FEDF43` |
| Green | `#34C759` | `#30D158` | `#008932` | `#4AD968` |
| Mint | `#00C8B3` | `#00DAC3` | `#008575` | `#54DFCB` |
| Teal | `#00C3D0` | `#00D2E0` | `#008198` | `#3BDDEC` |
| Cyan | `#00C0E8` | `#3CD3FE` | `#007EAE` | `#6DD9FF` |
| **Blue** (accent padrão) | `#0088FF` | `#0091FF` | `#1E6EF4` | `#5CB8FF` |
| Indigo | `#6155F5` | `#6D7CFF` | `#564ADE` | `#A7AAFF` |
| Purple | `#CB30E0` | `#DB34F2` | `#B02FC2` | `#EA8DFF` |
| Pink | `#FF2D55` | `#FF375F` | `#E7124D` | `#FF8AC4` |
| Brown | `#AC7F5E` | `#B78A66` | `#956D51` | `#DBA679` |

> O azul da era Liquid Glass é **#0088FF / #0091FF**, não o antigo #007AFF.

### 3.3 Cinzas do sistema (iOS/iPadOS)

| Nome | Light | Dark | Light AC | Dark AC |
|---|---|---|---|---|
| systemGray | `#8E8E93` | `#8E8E93` | `#6C6C70` | `#AEAEB2` |
| systemGray2 | `#AEAEB2` | `#636366` | `#8E8E93` | `#7C7C80` |
| systemGray3 | `#C7C7CC` | `#48484A` | `#AEAEB2` | `#545456` |
| systemGray4 | `#D1D1D6` | `#3A3A3C` | `#BCBCC0` | `#444446` |
| systemGray5 | `#E5E5EA` | `#2C2C2E` | `#D8D8DC` | `#363638` |
| systemGray6 | `#F2F2F7` | `#1C1C1E` | `#EBEBF0` | `#242426` |

### 3.4 Cores semânticas (labels, fundos, fills)

A HIG atual lista só os nomes. Os valores abaixo são os valores de referência históricos do UIKit; confirme no Xcode ou no UI Kit oficial antes de usar em produção.

| Token | Light | Dark |
|---|---|---|
| label | `#000000` | `#FFFFFF` |
| secondaryLabel | `rgba(60,60,67,.60)` | `rgba(235,235,245,.60)` |
| tertiaryLabel / placeholderText | `rgba(60,60,67,.30)` | `rgba(235,235,245,.30)` |
| quaternaryLabel | `rgba(60,60,67,.18)` | `rgba(235,235,245,.16)` |
| separator | `rgba(60,60,67,.29)` | `rgba(84,84,88,.60)` |
| opaqueSeparator | `#C6C6C8` | `#38383A` |
| systemBackground | `#FFFFFF` | `#000000` (elevated `#1C1C1E`) |
| secondarySystemBackground | `#F2F2F7` | `#1C1C1E` (elev. `#2C2C2E`) |
| tertiarySystemBackground | `#FFFFFF` | `#2C2C2E` (elev. `#3A3A3C`) |
| systemGroupedBackground | `#F2F2F7` | `#000000` (elev. `#1C1C1E`) |
| secondarySystemGroupedBackground | `#FFFFFF` | `#1C1C1E` (elev. `#2C2C2E`) |
| tertiarySystemGroupedBackground | `#F2F2F7` | `#2C2C2E` (elev. `#3A3A3C`) |
| systemFill | `rgba(120,120,128,.20)` | `rgba(120,120,128,.36)` |
| secondarySystemFill | `rgba(120,120,128,.16)` | `rgba(120,120,128,.32)` |
| tertiarySystemFill | `rgba(118,118,128,.12)` | `rgba(118,118,128,.24)` |
| quaternarySystemFill | `rgba(116,116,128,.08)` | `rgba(118,118,128,.18)` |

- **Hierarquia de fundos:** *primary* para a view inteira, *secondary* para agrupar dentro dela, *tertiary* para agrupar dentro do secondary. Use o conjunto *grouped* em listas e tabelas agrupadas.
- **Dark mode — base vs elevated:**
  - Base é mais escuro e recua.
  - Elevated é mais claro, para popovers, sheets e multitarefa.
  - O dark mode não é uma inversão: fundos mais escuros, foregrounds mais claros.
- Não ofereça um seletor de tema próprio no app. Respeite o sistema (inclusive Auto).

---

## 4. Tipografia

### 4.1 Famílias

- **SF Pro**: iOS, iPadOS, macOS, tvOS e visionOS.
- **SF Compact**: watchOS. As complicações usam SF Compact Rounded.
- **SF Mono**: código.
- **New York (NY)**: serifada, combina com SF. Disponível em iOS, tvOS e watchOS; no macOS só em Catalyst.
- Todas, exceto SF Mono, têm versão **Rounded**.
- São **fontes variáveis com tamanho óptico dinâmico**: Text e Display se fundem num só design contínuo. Só use os cortes discretos se a sua ferramenta não suportar fontes variáveis.
- **Pesos:** de Ultralight a Black. **Prefira Regular, Medium, Semibold e Bold.** Evite Ultralight, Thin e Light em texto pequeno.
- No código use `Font.Design` (`.default` = SF, `.serif` = NY, `.rounded`, `.monospaced`). Não embuta as fontes do sistema no app.
- Use o menor número possível de famílias tipográficas.

### 4.2 Tamanhos padrão e mínimos

| Plataforma | Padrão | Mínimo |
|---|---|---|
| iOS/iPadOS | 17 pt | 11 pt |
| macOS | 13 pt | 10 pt |
| tvOS | 29 pt | 23 pt |
| visionOS | 17 pt | 12 pt |
| watchOS | 16 pt | 12 pt |

### 4.3 Dynamic Type — iOS/iPadOS (tamanho/entrelinha em pt; **Large** é o padrão)

| Estilo | Peso | Ênfase | xS | S | M | **L** | xL | xxL | xxxL |
|---|---|---|---|---|---|---|---|---|---|
| Large Title | Regular | Bold | 31/38 | 32/39 | 33/40 | **34/41** | 36/43 | 38/46 | 40/48 |
| Title 1 | Regular | Bold | 25/31 | 26/32 | 27/33 | **28/34** | 30/37 | 32/39 | 34/41 |
| Title 2 | Regular | Bold | 19/24 | 20/25 | 21/26 | **22/28** | 24/30 | 26/32 | 28/34 |
| Title 3 | Regular | Semibold | 17/22 | 18/23 | 19/24 | **20/25** | 22/28 | 24/30 | 26/32 |
| Headline | Semibold | Semibold | 14/19 | 15/20 | 16/21 | **17/22** | 19/24 | 21/26 | 23/29 |
| Body | Regular | Semibold | 14/19 | 15/20 | 16/21 | **17/22** | 19/24 | 21/26 | 23/29 |
| Callout | Regular | Semibold | 13/18 | 14/19 | 15/20 | **16/21** | 18/23 | 20/25 | 22/28 |
| Subhead | Regular | Semibold | 12/16 | 13/18 | 14/19 | **15/20** | 17/22 | 19/24 | 21/28 |
| Footnote | Regular | Semibold | 12/16 | 12/16 | 12/16 | **13/18** | 15/20 | 17/22 | 19/24 |
| Caption 1 | Regular | Semibold | 11/13 | 11/13 | 11/13 | **12/16** | 14/19 | 16/21 | 18/23 |
| Caption 2 | Regular | Semibold | 11/13 | 11/13 | 11/13 | **11/13** | 13/18 | 15/20 | 17/22 |

**Tamanhos de acessibilidade (iOS):**

| Estilo | AX1 | AX2 | AX3 | AX4 | AX5 |
|---|---|---|---|---|---|
| Large Title | 44/52 | 48/57 | 52/61 | 56/66 | 60/70 |
| Title 1 | 38/46 | 43/51 | 48/57 | 53/62 | 58/68 |
| Title 2 | 34/41 | 39/47 | 44/52 | 50/59 | 56/66 |
| Title 3 | 31/38 | 37/44 | 43/51 | 49/58 | 55/65 |
| Headline / Body | 28/34 | 33/40 | 40/48 | 47/56 | 53/62 |
| Callout | 26/32 | 32/39 | 38/46 | 44/52 | 51/60 |
| Subhead | 25/31 | 30/37 | 36/43 | 42/50 | 49/58 |
| Footnote | 23/29 | 27/33 | 33/40 | 38/46 | 44/52 |
| Caption 1 | 22/28 | 26/32 | 32/39 | 37/44 | 43/51 |
| Caption 2 | 20/25 | 24/30 | 29/35 | 34/41 | 40/48 |

Ênfase: `.bold()` no SwiftUI ou `traitBold` no UIKit.

### 4.4 macOS (sem Dynamic Type)

| Estilo | Peso | Tamanho/linha | Ênfase |
|---|---|---|---|
| Large Title | Regular | 26/32 | Bold |
| Title 1 | Regular | 22/26 | Bold |
| Title 2 | Regular | 17/22 | Bold |
| Title 3 | Regular | 15/20 | Semibold |
| Headline | **Bold** | 13/16 | Heavy |
| Body | Regular | 13/16 | Semibold |
| Callout | Regular | 12/15 | Semibold |
| Subheadline | Regular | 11/14 | Semibold |
| Footnote | Regular | 10/13 | Semibold |
| Caption 1 | Regular | 10/13 | Medium |
| Caption 2 | Medium | 10/13 | Semibold |

### 4.5 tvOS

| Estilo | Peso | Tamanho/entrelinha | Ênfase |
|---|---|---|---|
| Title 1 | Medium | 76/96 | Bold |
| Title 2 | Medium | 57/66 | Bold |
| Title 3 | Medium | 48/56 | Bold |
| Headline | Medium | 38/46 | Bold |
| Subtitle 1 | Regular | 38/46 | Medium |
| Callout | Medium | 31/38 | Bold |
| Body | Medium | 29/36 | Bold |
| Caption 1 | Medium | 25/32 | Bold |
| Caption 2 | Medium | 23/30 | Bold |

### 4.6 watchOS (tamanho Large padrão)

| Estilo | Tamanho/entrelinha |
|---|---|
| Large Title | 36/38.5 |
| Title 1 | 34/36.5 |
| Title 2 | 28/30.5 |
| Title 3 | 19/21.5 |
| Headline | 16/18.5 |
| Body | 16/18.5 |
| Caption 1 | 15/17.5 |
| Caption 2 | 14/16.5 |
| Footnote 1 | 13/15.5 |
| Footnote 2 | 12/14.5 |

### 4.7 Tracking (SF Pro: tamanho em pt → tracking em pt)

Os apps nativos aplicam o tracking automaticamente. Use esta tabela em mockups e na web (`letter-spacing`).

| pt | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 22 | 24 | 28 | 32 | 34 | 40 | 48 | 56 | 64 | 72 | 80+ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| tracking | +0.12 | +0.06 | 0 | −0.08 | −0.15 | −0.23 | −0.31 | **−0.43** | −0.44 | −0.45 | −0.45 | −0.26 | +0.07 | +0.38 | +0.41 | +0.40 | +0.37 | +0.35 | +0.30 | +0.22 | +0.14 | 0 |

- Em `em` (para CSS): 13px → −0.006em, 15 → −0.016em, **17 → −0.026em**, 20 → −0.023em, 22 → −0.012em, 28 → +0.014em, 34 → +0.012em.
- **New York** vai de +0.12 em 11pt a −0.45 em 34pt (sempre mais apertado nos tamanhos grandes).
- Leading: com 3 ou mais linhas, evite leading apertado.

### 4.8 Regras de Dynamic Type

- Suporte até pelo menos **200%** de aumento (140% no watchOS).
- Em tamanhos de acessibilidade, **empilhe o que estava lado a lado** e reduza colunas.
- Minimize o truncamento.
- Escale ícones junto com o texto (SF Symbols fazem isso sozinhos).
- Mantenha a hierarquia em todos os tamanhos.
- **Headers de seção** de listas e formulários usam **Title Case**, não CAIXA ALTA.

### 4.9 SF Symbols (v7+, v8 em 2026)

- **Renderização:**
  - Monochrome.
  - Hierarchical (uma cor com opacidades por camada).
  - Palette (2 ou mais cores).
  - Multicolor.
  - Gradiente (SF Symbols 7+).
- **9 pesos** iguais aos da SF. **3 escalas**: small, medium (padrão) e large.
- **Variantes:**
  - Outline em toolbars e listas.
  - **Fill em tab bars**, swipe actions e seleção.
  - Enclosed para tamanhos pequenos.
- **Animações:** appear/disappear, bounce, scale, pulse, variable color, replace/Magic Replace, wiggle, breathe, rotate e Draw On/Off. Use cada uma com propósito.
- **Variable color** comunica mudança, não profundidade.
- Em toolbars, prefira **símbolos sem borda**: a seção de vidro já é o contêiner.
- **Sempre forneça um accessibility label** para cada ícone.

---

## 5. Layout, forma e espaçamento

- **Hierarquia:** o mais importante vai no topo e à esquerda (leading). Agrupe com espaço negativo, formas de contêiner ou separadores.
- **Separe o conteúdo da navegação.** A navegação fica na camada de vidro, acima do conteúdo.
- **Conteúdo de ponta a ponta:** estenda o fundo sob sidebars, toolbars e tab bars. Use o background extension effect quando a UI cobriria partes importantes.
- **Size classes, não tipo de dispositivo.** Considere compact × regular nos dois eixos. Suporte janelas de tamanho arbitrário (o iPadOS redimensiona continuamente).
- **Safe areas e layout guides** sempre, incluindo a readable width.
- **Concentricidade:**
  - Cantos internos devem compartilhar o centro com o canto do contêiner: `raio_interno = raio_externo − padding`.
  - Botões, campos, headers e footers em barras já são concêntricos aos cantos da barra.
  - Use `ConcentricRectangle`, `.rect(corners: .concentric)` ou `UICornerConfiguration.containerConcentric()`.
- **Formas por tamanho:**
  - Capsule para botões e pequenos controles (é o padrão do vidro).
  - Rounded rect para componentes maiores.
  - Círculo para botões só com ícone.
- **Alvos de toque:**

| Plataforma | Padrão | Mínimo |
|---|---|---|
| iOS/iPadOS | 44×44 pt | 28×28 pt |
| macOS | 28×28 pt | 20×20 pt |
| tvOS | 66×66 pt | 56×56 pt |
| visionOS | 60×60 pt | 28×28 pt |
| watchOS | 44×44 pt | 28×28 pt |

- **Espaçamento:** cerca de **12 pt** em volta de elementos com bezel e **24 pt** em volta de elementos sem bezel.
- Prefira as métricas padrão do sistema; não fixe medidas.
- **tvOS:** safe area de 60 pt (topo/base) e 80 pt (laterais). Grid com espaçamento horizontal de 40 pt.
- **visionOS:**
  - Centros de botões a pelo menos 60 pt de distância.
  - Janela padrão de 1280×720 pt.
- **Widgets:**
  - Margem de 16 pt (11 pt em agrupamentos).
  - Use `ContainerRelativeShape`.
  - Texto com no mínimo 11 pt.
  - Na aparência clear, o widget é dessaturado e recebe o material Liquid Glass.
- **Listas e formulários** têm linhas mais altas, mais padding e seções com raio de canto maior.

### Medidas de referência para mockups

São aproximações observadas no iOS 26, não publicadas pela HIG. Use-as só quando precisar de números.

| Item | Valor aproximado |
|---|---|
| Tab bar flutuante (iPhone) | cápsula de ~62 pt de altura, inset ~16–20 pt das bordas, base ~8 pt acima da home indicator |
| Botões de toolbar | círculo ou cápsula de 44 pt |
| Raio de cards e seções agrupadas | ~26 pt (iPhone) |
| Raio de sheets | ~34–38 pt (concêntrico ao display) |
| Raio de alerts e popovers | ~26–34 pt |
| Espaçamento entre grupos de vidro | 8–12 pt |
| Padding de conteúdo dentro do vidro | 12–16 pt |

---

## 6. Componentes

### Botões

- Hit region de **pelo menos 44×44** (60×60 no visionOS). **Sempre com estado pressionado.**
- **Estilos:**
  - `glass`: vidro padrão, monocromático.
  - `glassProminent`: vidro tingido com a accent. É a ação principal.
  - Use no máximo **1–2 botões proeminentes por view**.
- **Diferencie a opção preferida por estilo, não por tamanho.**
- **Roles:**
  - normal.
  - primary (accent; responde ao Return).
  - cancel.
  - destructive (systemRed). **Nunca torne destrutivo o botão primário.**
- **Conteúdo:**
  - Prefira SF Symbols conhecidos.
  - Texto em Title Case começando com verbo ("Adicionar ao Carrinho").
  - Labels monocromáticos por padrão.
- **Tamanhos:** existe agora o tamanho **extra-large** para mais espaço em labels.
  - visionOS: 28 / 32 / 44 / 52 / 64 pt.
- Durante carregamento, o botão pode mostrar um indicador e um label alternativo ("Finalizar" → "Finalizando…").

### Toolbars (inclui as antigas navigation bars)

- **Áreas:**
  - Leading: voltar, título, sidebar.
  - Centro: controles comuns; colapsam no menu de overflow.
  - Trailing: ações importantes, busca, More e **ação primária**.
- Agrupe itens relacionados num **fundo de vidro compartilhado**, com no máximo cerca de **3 grupos**.
  - Separe os grupos com `ToolbarSpacer(.fixed)`.
  - Ações críticas (Done, Close, Save) ficam num grupo próprio.
- **Não misture texto e ícone** no mesmo fundo compartilhado. Prefira ícones.
- **Uma única ação primária**, com estilo `.prominent`, no lado trailing.
- **Sem fundos customizados nem tint** na barra. Deixe o conteúdo informar a cor e use o scroll edge effect.
- **Títulos:**
  - Menos de 15 caracteres.
  - Não use o nome do app como título.
  - Use os símbolos padrão de Back e Close, não as palavras.
  - O large title colapsa no scroll.
- **Para esconder**, esconda o item inteiro, não a view dentro dele.

### Tab bars

- **iOS:**
  - **Flutua acima do conteúdo** na parte inferior, sobre vidro.
  - Pode **minimizar ao rolar** (`.onScrollDown`).
  - Aceita um **acessório inferior** (ex.: MiniPlayer), que fica inline quando a barra minimiza.
  - **Aba de busca dedicada** na extremidade trailing (`Tab(role: .search)`).
- Abas servem para **navegação, nunca para ações**.
  - Nunca desabilite nem esconda abas.
  - Labels de uma palavra.
  - **Símbolos fill**.
- **Cor:**
  - Monocromático, ou accent bem diferenciada do conteúdo.
  - Badges vermelhos com texto branco, só para informação crítica.
- **iPadOS:**
  - A barra fica no topo e pode se adaptar em sidebar (`sidebarAdaptable`).
  - Use 5 abas ou menos.
- **tvOS:** altura de 68 pt, a 46 pt do topo.
- **visionOS:** vertical, na lateral leading.

### Sidebars e split views

- Flutuam na camada de vidro (iOS, iPadOS, macOS).
- **Use `backgroundExtensionEffect`** ou scroll horizontal para o conteúdo passar por baixo.
- No máximo 2 níveis de hierarquia. Pode ser ocultada, mas não comece oculta.
- Ícones na accent color.
- Inspector: `inspector(isPresented:)`.
- Mantenha a seleção destacada em cada painel.

### Sheets, popovers, alerts e action sheets

- **Sheets:**
  - Raio de canto maior.
  - O **half sheet (detent medium) fica inset das bordas** e translúcido; ao expandir para large fica mais opaco.
  - Mostre o grabber quando a sheet for redimensionável.
  - Botões: Cancel/Close à esquerda e Done à direita. **Nunca mostre Cancel, Done e Back juntos.**
  - Uma sheet por vez.
- **Remova os fundos customizados** (visual effect views) de sheets e popovers.
- **Popovers:**
  - Vidro regular, para pouca informação.
  - A seta aponta para a origem.
  - Um por vez.
  - No iPhone compacto, use sheet em vez de popover.
- **Alerts:**
  - Vidro regular.
  - Título de no máximo 2 linhas e até 3 botões.
  - O botão padrão fica à direita ou no topo. Cancel nunca é o padrão.
- **Action sheets:**
  - **Agora nascem do elemento que as aciona**, não da borda inferior.
  - Defina a source view.
  - Destrutivo no topo e Cancel embaixo.

### Menus e context menus

- Itens de ações padrão (Cut, Copy, Paste…) ganham ícone automaticamente via seletores padrão.
- Ícones com propósito: num grupo, todos os itens têm ícone ou nenhum tem.
- **As ações do topo do context menu devem bater com as swipe actions.**
- Use verbos em Title Case. Coloque reticências quando a ação pedir mais input.
- Submenu com 1 nível.
- Context menu: cerca de 3 grupos, com o destrutivo por último em vermelho.
- **Layouts no iOS:**
  - small: 4 ícones no topo.
  - medium: 3 ícones com label.
  - large: lista (padrão).
- Os botões se transformam (morph) no menu que abrem.

### Controles

- **Toggle:**
  - No iOS, só dentro de linha de lista.
  - Verde ou accent com contraste suficiente.
  - O knob vira vidro ao arrastar.
- **Slider:**
  - Mínimo à esquerda.
  - O knob vira vidro durante a interação.
  - Não use para volume.
- **Segmented control:**
  - Segmentos de largura igual, cerca de 5 no iPhone.
  - Não misture texto com imagem.
  - Use substantivos em Title Case.
- **Stepper:** ao lado de um valor visível.
- **Picker:**
  - Intervalos de minutos que dividam 60.
  - Estilo compact mostra o valor na accent color.
- **Text field:**
  - Placeholder mais um label separado.
  - Botão de limpar no lado trailing.
  - Use o tipo de teclado correto.
- **Search:**
  - No iPhone fica na base (toolbar ou aba), sobe com o teclado e é buscável enquanto se digita.
  - No iPad e no Mac fica no lado trailing da toolbar ou no topo da sidebar.
- **Page control:**
  - Até cerca de 10 pontos.
  - Fundo em retângulo arredondado translúcido.
  - Estilos automatic, prominent e minimal.

### Ícones de app

- **Camadas:** fundo mais 1 ou mais camadas de frente. O sistema aplica **specular highlights, refração, translucidez, sombra e blur**. Não inclua esses efeitos na arte.
- **Formas:**
  - Formas simples, sólidas e preenchidas, com sobreposições semitransparentes.
  - Bordas nítidas.
  - Evite linhas finas, texto e fotos.
- **Aparências:**
  - Default, dark, clear (light e dark) e tinted (light e dark).
  - Se você não fornecer uma variante, o sistema a gera.
  - Mantenha os mesmos elementos em todas.
- **Arte:**
  - iOS, iPadOS e macOS: **1024×1024 px** quadrado, sem máscara. A máscara de cantos arredondados é do sistema.
  - watchOS: 1088×1088 px, circular.
  - tvOS: 800×480 px, de 2 a 5 camadas com parallax.
- Monte e pré-visualize no **Icon Composer** (incluso no Xcode).
- Use arte vetorial (SVG ou PDF). Use PNG para gradientes de malha.

---

## 7. Movimento

- A resposta ao toque direto é **mais enfática**; no trackpad, mais sutil.
- **Morphing:** formas de vidro próximas se fundem como gotas. Botões se transformam em menus e popovers.
  - Mantenha o morphing coerente: `matchedGeometry` para elementos próximos e `materialize` para elementos distantes.
- **Use movimento só com propósito.**
  - Nunca como único portador de informação.
  - Breve, interrompível e seguindo o gesto (dispense na direção de onde veio).
  - Evite movimento em interações muito frequentes.
- **Reduce Motion:**
  - Molas mais firmes (sem bounce).
  - **Substitua transições x/y/z por fades.**
  - **Não anime entrada e saída de blur.**
  - Evite zoom e profundidade em z.
- Use springs (sem curvas lineares). No SwiftUI use `withAnimation` ou `.spring`. Na web, cubic-bezier com overshoot leve, ou spring via JS.

---

## 8. Acessibilidade

- **Contraste:**
  - Mínimo de **4.5:1** para texto de até 17 pt.
  - **3:1** para texto de 18 pt ou mais, ou em bold.
  - Busque **7:1** em cores customizadas, sobretudo em texto pequeno.
- **Teste todas as combinações:**
  - Light e dark.
  - Increased Contrast.
  - **Reduce Transparency** (o vidro fica fosco ou opaco).
  - Reduce Motion.
  - O visual de vidro preferido pelo usuário ("Clear" ou "Tinted" nos Ajustes).
  - Todos os tamanhos de Dynamic Type, até AX5.
- **Labels de acessibilidade** em todo ícone.
- Não dependa só de cor; atenção aos pares vermelho/verde e azul/laranja.
- Ofereça gestos alternativos (botão de apagar além do swipe).
- Suporte VoiceOver, Voice Control, Full Keyboard Access e Switch Control.

---

## 9. Plataformas

- **iOS/iPadOS:**
  - Tab bar flutuante e minimizável.
  - Busca na base.
  - Sheets inset.
  - No iPad: janelas redimensionáveis com controles de janela no lado leading da toolbar e barra de menus.
- **macOS:**
  - Toolbar sem bezel nos itens.
  - Todo item de toolbar também precisa existir como comando na barra de menus.
  - Cantos de janela mais arredondados.
  - Sidebars flutuantes.
  - Nada crítico na base da janela.
- **watchOS:**
  - Mudanças mínimas.
  - Use as APIs de toolbar e estilos de botão do watchOS 10+; os botões da toolbar ganham vidro.
- **tvOS:**
  - Controles viram vidro **ao receber foco**.
  - Use as APIs de foco (`focusable`, `isFocused`).
  - Requer Apple TV 4K de 2ª geração ou mais nova.
- **visionOS:**
  - Glass próprio do sistema.
  - Não remova o fundo de vidro da janela.

---

## 10. APIs nativas

### 10.1 SwiftUI (iOS, iPadOS, macOS, tvOS e watchOS 26+)

```swift
// Básico — variante regular, forma Capsule (DefaultGlassEffectShape)
Text("Hello, World!").font(.title).padding().glassEffect()

// Forma customizada (componentes maiores)
Text("Hello").padding().glassEffect(in: .rect(cornerRadius: 16.0))

// Tint (proeminência) + interativo (reage ao toque como botão)
Text("Hello").padding().glassEffect(.regular.tint(.orange).interactive())

// Clear sobre mídia — sempre com escurecimento
Label("Flag", systemImage: "flag.fill")
    .padding()
    .glassEffect(.clear)
    .background(.black.opacity(0.3))

// Desligar condicionalmente
.glassEffect(isOn ? .regular : .identity)
```

- **Assinatura:** `func glassEffect(_ glass: Glass = .regular, in shape: some Shape = DefaultGlassEffectShape()) -> some View`
- **`Glass`:** `.regular`, `.clear`, `.identity`, mais `.tint(Color?)` e `.interactive(Bool = true)`.
- **Regra:** aplique `.glassEffect` **depois** dos outros modificadores de aparência. O vidro preenche todo o frame, padding incluído.

**Container, fusão e morphing:**

```swift
@State private var isExpanded = false
@Namespace private var namespace

GlassEffectContainer(spacing: 40.0) {          // maior spacing = funde mais cedo
    HStack(spacing: 40.0) {
        Image(systemName: "scribble.variable")
            .frame(width: 80, height: 80).font(.system(size: 36))
            .glassEffect()
            .glassEffectID("pencil", in: namespace)
        if isExpanded {
            Image(systemName: "eraser.fill")
                .frame(width: 80, height: 80).font(.system(size: 36))
                .glassEffect()
                .glassEffectID("eraser", in: namespace)
                .glassEffectTransition(.matchedGeometry) // ou .materialize / .identity
        }
    }
}
Button("Toggle") { withAnimation { isExpanded.toggle() } }
    .buttonStyle(.glass)
```

- **`GlassEffectContainer(spacing:content:)`:** sempre que houver vários vidros. Melhora a performance e permite fusão e morphing. Se o spacing do container for maior que o do stack, os vidros já ficam fundidos em repouso.
- **`glassEffectUnion(id:namespace:)`:** une num só formato os vidros com a mesma forma, variante e id, mesmo em repouso.
  - Exemplo: `.glassEffectUnion(id: item < 2 ? "1" : "2", namespace: namespace)`.
- **`GlassEffectTransition`:**
  - `.matchedGeometry` (padrão, para elementos dentro do spacing).
  - `.materialize` (fade mais o vidro animando; para elementos distantes).
  - `.identity`.
- **Performance:** limite o número de vidros na tela. Containers demais, ou vidros fora de container, degradam a performance.

**Botões:**

```swift
Button("Salvar") {}.buttonStyle(.glass)
Button("Concluir") {}.buttonStyle(.glassProminent)   // accent no fundo
Button("Button") {}.buttonStyle(.glass(.clear))      // 26.1+: GlassButtonStyle(_ glass:)
Button("Grande") {}.buttonStyle(.glass).controlSize(.extraLarge)
```

**Formas concêntricas:**

```swift
ConcentricRectangle()                                  // concêntrico em todos os cantos
ConcentricRectangle(corners: .concentric(minimum: 12), isUniform: true)
ConcentricRectangle(uniformTopCorners: .fixed(24), uniformBottomCorners: .concentric)
.rect(corners: .concentric, isUniform: false)          // onde um Shape é esperado
.containerShape(RoundedRectangle(cornerRadius: 32))    // define o contêiner de referência
```

`Edge.Corner.Style` pode ser `.concentric`, `.concentric(minimum:)` ou `.fixed(CGFloat)`, e aceita literal numérico.

**Navegação, barras e scroll:**

```swift
TabView {
    Tab("Início", systemImage: "house") { HomeView() }
    Tab("Alertas", systemImage: "bell") { AlertsView() }
    Tab(role: .search) { SearchView() }               // aba de busca semântica (trailing)
}
.tabViewStyle(.sidebarAdaptable)                     // tab bar ↔ sidebar no iPad
.tabBarMinimizeBehavior(.onScrollDown)               // .automatic .never .onScrollDown .onScrollUp (iPhone)
.tabViewBottomAccessory { NowPlayingView() }         // ler \.tabViewBottomAccessoryPlacement: .expanded / .inline

NavigationSplitView { Sidebar() } detail: {
    Hero().backgroundExtensionEffect()               // espelha+desfoca sob sidebar/inspector
        .overlay(alignment: .bottom) { HeroText() }  // overlay DEPOIS
}
.inspector(isPresented: $showInspector) { Inspector() }

.toolbar {
    ToolbarItem { ShareLink(item: x) }
    ToolbarSpacer(.fixed)                            // separa grupos de vidro
    ToolbarItemGroup { FavoriteButton(); CollectionsMenu() }
    ToolbarSpacer(.flexible)
    ToolbarItem { Button("Info", systemImage: "info") {} }
    ToolbarItem(placement: .principal) { Status() }.sharedBackgroundVisibility(.hidden)
}

ScrollView { … }.scrollEdgeEffectStyle(.soft, for: .top)   // .automatic .hard .soft
ScrollView { … }.scrollEdgeEffectHidden()
CustomBar().safeAreaBar(edge: .bottom) { … }          // como safeAreaInset + estende o scroll edge effect
.confirmationDialog("…", isPresented: $show) { … }    // action sheet ancorada na origem
```

### 10.2 UIKit (iOS, iPadOS, Mac Catalyst e tvOS 26+)

```swift
let glass = UIGlassEffect(style: .regular)          // .regular / .clear
glass.tintColor = .systemBlue
glass.isInteractive = true
let glassView = UIVisualEffectView(effect: glass)
glassView.cornerConfiguration = .capsule()           // ou .corners(radius: .containerConcentric())

let container = UIVisualEffectView(effect: UIGlassContainerEffect()) // .spacing = distância de fusão
container.contentView.addSubview(glassView)

var config = UIButton.Configuration.glass()          // .prominentGlass() .clearGlass() .prominentClearGlass()

scrollView.topEdgeEffect.style = .soft               // .automatic .hard .soft ; .isHidden
let i = UIScrollEdgeElementContainerInteraction(); i.scrollView = scrollView; i.edge = .bottom
buttonContainer.addInteraction(i)

tabBarController.tabBarMinimizeBehavior = .onScrollDown
tabBarController.bottomAccessory = UITabAccessory(contentView: miniPlayer)
tabBarController.mode = .tabSidebar
barButtonItem.hidesSharedBackground = true           // tira do grupo de vidro
UIBarButtonItem.fixedSpace(0)                        // separa grupos
let ext = UIBackgroundExtensionView(); ext.contentView = heroImageView
```

### 10.3 AppKit (macOS 26+)

```swift
let g = NSGlassEffectView()
g.contentView = content        // só contentView é garantido dentro do vidro
g.style = .regular             // .clear
g.cornerRadius = 16
g.tintColor = .controlAccentColor
g.effectIsInteractive = true   // macOS 27+

let c = NSGlassEffectContainerView(); c.spacing = 0; c.contentView = stackOfGlassViews
button.bezelStyle = .glass
let ext = NSBackgroundExtensionView()
```

### 10.4 Compatibilidade

- A chave `UIDesignRequiresCompatibility = YES` no Info.plist mantém o visual antigo.
- É **temporária** e é **ignorada ao compilar com SDK 27+**.

---

## 11. Receita para Web (HTML/CSS/React)

A Apple não publica CSS. Esta é uma tradução fiel dos princípios acima para a web, usando os tokens oficiais.

### 11.1 Fontes

```css
:root{
  --font-text: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", system-ui, "Inter", "Segoe UI", Roboto, sans-serif;
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", system-ui, "Inter", sans-serif;
  --font-rounded: ui-rounded, "SF Pro Rounded", -apple-system, system-ui, sans-serif;
  --font-serif: ui-serif, "New York", Georgia, serif;
  --font-mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
}
```

- **Não hospede os arquivos da SF** em sites que não sejam da Apple (restrição de licença). Use a stack do sistema; o **Inter** é o fallback mais próximo.
- **Escala de tipo (iOS, tamanho Large):**

| Classe | Tamanho/entrelinha | Peso |
|---|---|---|
| `.large-title` | 34/41 | 700 (variante bold) |
| `.title1` | 28/34 | — |
| `.title2` | 22/28 | — |
| `.title3` | 20/25 | 600 |
| `.headline` | 17/22 | 600 |
| `.body` | 17/22 | 400 |
| `.callout` | 16/21 | — |
| `.subhead` | 15/20 | — |
| `.footnote` | 13/18 | — |
| `.caption1` | 12/16 | — |
| `.caption2` | 11/13 | — |

- Use o letter-spacing da tabela 4.7 (body 17px → `-0.026em`). Use `rem` para respeitar o zoom do usuário.

### 11.2 Tokens

```css
:root{
  color-scheme: light dark;
  --accent:#0088FF; --red:#FF383C; --orange:#FF8D28; --yellow:#FFCC00; --green:#34C759;
  --mint:#00C8B3; --teal:#00C3D0; --cyan:#00C0E8; --indigo:#6155F5; --purple:#CB30E0; --pink:#FF2D55; --brown:#AC7F5E;
  --label:#000; --label-2:rgba(60,60,67,.6); --label-3:rgba(60,60,67,.3); --label-4:rgba(60,60,67,.18);
  --bg:#FFFFFF; --bg-2:#F2F2F7; --bg-grouped:#F2F2F7; --bg-grouped-2:#FFFFFF;
  --fill:rgba(120,120,128,.2); --separator:rgba(60,60,67,.29);
  /* vidro */
  --glass-tint: rgba(255,255,255,.22);
  --glass-border: rgba(255,255,255,.55);
  --glass-shadow: 0 8px 32px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.06);
  --glass-blur: 16px; --glass-sat: 180%;
  --radius-control: 999px; --radius-card: 26px; --radius-sheet: 36px;
  --ease-spring: cubic-bezier(.34,1.36,.64,1);
}
@media (prefers-color-scheme: dark){
  :root{
    --accent:#0091FF; --red:#FF4245; --orange:#FF9230; --yellow:#FFD600; --green:#30D158;
    --mint:#00DAC3; --teal:#00D2E0; --cyan:#3CD3FE; --indigo:#6D7CFF; --purple:#DB34F2; --pink:#FF375F; --brown:#B78A66;
    --label:#FFF; --label-2:rgba(235,235,245,.6); --label-3:rgba(235,235,245,.3); --label-4:rgba(235,235,245,.16);
    --bg:#000; --bg-2:#1C1C1E; --bg-grouped:#000; --bg-grouped-2:#1C1C1E;
    --fill:rgba(120,120,128,.36); --separator:rgba(84,84,88,.6);
    --glass-tint: rgba(40,40,44,.30); --glass-border: rgba(255,255,255,.18);
    --glass-shadow: 0 8px 32px rgba(0,0,0,.45);
  }
}
@media (prefers-contrast: more){
  :root{ --accent:#1E6EF4; --red:#E9152D; --green:#008932; /* …demais valores AC da tabela 3.2 */ }
}
@media (prefers-contrast: more) and (prefers-color-scheme: dark){
  :root{ --accent:#5CB8FF; --red:#FF6165; --green:#4AD968; }
}
```

### 11.3 O material de vidro

```css
.glass{
  position:relative; isolation:isolate;
  background: var(--glass-tint);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));
          backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-sat));
  border-radius: var(--radius-control);
  box-shadow:
    var(--glass-shadow),
    inset 0 1px 0 0 var(--glass-border),          /* realce especular superior */
    inset 0 -1px 0 0 rgba(255,255,255,.08),        /* borda inferior suave */
    inset 0 0 0 .5px rgba(255,255,255,.25);        /* aro fino */
  color: var(--label);
}
.glass::before{                                    /* brilho especular (luz vindo do topo-esquerda) */
  content:""; position:absolute; inset:0; border-radius:inherit; pointer-events:none; z-index:-1;
  background: linear-gradient(135deg, rgba(255,255,255,.35) 0%, rgba(255,255,255,0) 40%,
                              rgba(255,255,255,0) 60%, rgba(255,255,255,.12) 100%);
  mix-blend-mode: overlay;
}
.glass--clear{ --glass-tint: rgba(255,255,255,.06); --glass-blur: 6px; }
.glass--clear.on-bright::after{ content:""; position:absolute; inset:0; border-radius:inherit;
  background: rgba(0,0,0,.35); z-index:-2; }      /* camada de escurecimento de 35% da HIG */
.glass--tinted{ background: color-mix(in srgb, var(--accent) 78%, transparent); color:#fff; }  /* prominent */
.glass--interactive{ transition: transform .35s var(--ease-spring), box-shadow .35s; }
.glass--interactive:active{ transform: scale(1.06); }                 /* "incha" ao toque */
.glass--interactive:focus-visible{ outline: 2px solid var(--accent); outline-offset: 3px; }

/* Refração opcional (Chromium): SVG displacement no backdrop */
.glass--refract{ backdrop-filter: url(#lg-refract) blur(var(--glass-blur)) saturate(var(--glass-sat)); }
```

```html
<svg width="0" height="0" style="position:absolute">
  <filter id="lg-refract" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="3" result="n"/>
    <feGaussianBlur in="n" stdDeviation="2" result="nb"/>
    <feDisplacementMap in="SourceGraphic" in2="nb" scale="24" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</svg>
```

- A refração via `url()` no `backdrop-filter` só funciona no Chromium. Trate-a como progressive enhancement: o blur com saturate continua sendo a base.

### 11.4 Acessibilidade obrigatória na web

```css
@media (prefers-reduced-transparency: reduce){
  .glass{ -webkit-backdrop-filter:none; backdrop-filter:none;
          background: color-mix(in srgb, var(--bg-2) 96%, transparent); }
}
@media (prefers-contrast: more){
  .glass{ background: color-mix(in srgb, var(--bg) 88%, transparent);
          box-shadow: inset 0 0 0 1.5px var(--label); }
}
@media (prefers-reduced-motion: reduce){
  *{ transition-duration:.01ms !important; animation-duration:.01ms !important; }
  .glass--interactive:active{ transform:none; }
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))){
  .glass{ background: color-mix(in srgb, var(--bg-2) 92%, transparent); }
}
```

### 11.5 Padrões de componente (web)

- **Tab bar flutuante:**
  - `position:fixed; bottom: max(8px, env(safe-area-inset-bottom)); left:16px; right:16px; height:62px;` com `.glass` em cápsula.
  - Itens com ícone fill e label caption2.
  - O item selecionado tem uma pílula interna `var(--fill)` e cor `--accent`.
  - Minimize no scroll down (altura cerca de 44px, só ícones).
- **Toolbar:**
  - Barra transparente no topo, com grupos `.glass` em cápsula de 44px de altura e gap de 8px entre grupos.
  - Botões circulares de 44px.
  - Uma ação primária `.glass--tinted` à direita.
- **Scroll edge effect:** no topo, um pseudo-elemento fixo com `backdrop-filter: blur(8px)` e máscara `mask-image: linear-gradient(to bottom, #000 40%, transparent)`, com cerca de 60–100px de altura.
- **Sheet:**
  - `border-radius: var(--radius-sheet)`, inset de 8px das bordas no estado half.
  - Ao expandir, opacidade maior (`--glass-tint` com cerca de 0.85).
  - Grabber de 36×5px, `--label-3`.
- **Card de conteúdo:** **sem vidro**. Use `background: var(--bg-grouped-2); border-radius: var(--radius-card);`, com padding de 16px e linhas de lista de 44px ou mais.
- **Fusão (morph):**
  - Agrupe os botões num contêiner com `filter: url(#goo)` (blur mais color matrix), ou anime `width` e `border-radius` com spring via FLIP / View Transitions API.
  - Respeite reduced motion trocando o morph por um fade.
- **Concentricidade:** `--r-inner: calc(var(--r-outer) - var(--pad));`.

---

## 12. Checklist de revisão

- [ ] O vidro está **só** em navegação e controles, nunca em conteúdo, cards ou fundo do app.
- [ ] Não há vidro sobre vidro e não há excesso de elementos de vidro.
- [ ] Vários vidros estão num **container** (SwiftUI) ou grupo.
- [ ] Clear é usado só sobre mídia, com escurecimento de cerca de 35% quando o fundo for claro.
- [ ] Barras e controles sem fundos ou tints customizados, com scroll edge effect onde há conteúdo rolando por baixo.
- [ ] Cor só em ação primária e status; no máximo 1–2 proeminentes por view; cor no **fundo**, não no label.
- [ ] Toda cor customizada tem 4 variantes (light, dark e alto contraste de cada).
- [ ] Cores do sistema via API ou token, sem valores fixos dispersos; o azul é `#0088FF/#0091FF`.
- [ ] SF Pro, SF Compact ou NY nos estilos de texto do sistema; pesos Regular a Bold; tamanhos ≥ mínimo da plataforma; Dynamic Type até AX5.
- [ ] Headers de seção em Title Case.
- [ ] Alvos de toque ≥ 44×44 pt e estado pressionado em todo botão.
- [ ] Cantos concêntricos: capsule para controles, rounded rect para elementos grandes.
- [ ] Toolbar com até 3 grupos, sem mistura de texto e ícone no mesmo grupo e com uma ação primária no lado trailing.
- [ ] Tab bar só para navegação, com símbolos fill e busca na extremidade trailing.
- [ ] Todo ícone tem accessibility label.
- [ ] Testado em Reduce Transparency, Increase Contrast, Reduce Motion, light e dark.
- [ ] Contraste ≥ 4.5:1 (texto até 17 pt) ou ≥ 3:1 (texto ≥ 18 pt ou bold).
- [ ] Animações com spring e interrompíveis; com Reduce Motion viram fades e não animam blur.
- [ ] Ícone do app em camadas (1024 px), sem efeitos embutidos, com variantes dark, clear e tinted.

## Fontes oficiais (para revalidar)

- developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass
- developer.apple.com/documentation/swiftui/applying-liquid-glass-to-custom-views
- developer.apple.com/documentation/swiftui/landmarks-building-an-app-with-liquid-glass
- developer.apple.com/design/human-interface-guidelines/ (materials, color, typography, layout, app-icons, buttons, toolbars, tab-bars, sidebars, sheets, menus, scroll-views, accessibility, motion)
- WWDC25: "Meet Liquid Glass", "Get to know the new design system", "Build a SwiftUI app with the new design".