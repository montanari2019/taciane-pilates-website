---
name: identidade-pilates-taciane-martins
description: Identidade visual oficial do Estúdio de Pilates Taciane Martins (Vilhena-RO): cores, logos, fontes, estilo de foto/vídeo, tom de voz, frases e onde baixar arquivos. Use ao criar site, landing page ou peças da marca.
---

# Estúdio de Pilates Taciane Martins — Guia de Identidade

Fontes: (1) manual oficial **"ID VISUAL - Taciane Martins.pdf"** (mar/2024) e arquivos da marca no Google Drive; (2) análise do Instagram @pilatestacianemartins (out/2026).
Este guia é a fonte da verdade para site, landing page, posts e banners. Quando houver conflito, **o manual oficial vence** o Instagram.

## 1. Essência da marca

- **Nome:** Estúdio de Pilates Taciane Martins (handle `pilatestacianemartins`)
- **Responsável:** Taciane Martins — Fisioterapeuta, CREFITO 18/256-219
- **Posicionamento (bio):** "Espaço de cuidado com a saúde e conscientização do corpo por meio do método Pilates."
- **Atributos oficiais da marca (manual):** criativa · aconchegante · moderna · organizada · segura · acolhedora
- **Lema do estúdio (mural):** "O corpo alcança o que a mente acredita!"
- **Público:** mulheres adultas; nicho forte em **gestantes**; grupos de amigas ("Pilates Girls").
- **Conceito:** "Onde a delicadeza encontra a força."

### Contato e localização
- Avenida Capitão Castro, nº 3419, Centro, 2º andar — Vilhena, Rondônia
- WhatsApp (agendamento): https://wa.me/message/3V6RNBJ53AQVC1
- Instagram: https://www.instagram.com/pilatestacianemartins/ · Facebook: "Pilatestacianemartins"
- CTA padrão: "Agende sua aula" → WhatsApp.

## 2. Logotipo (oficial)

**Símbolo (ícone):** figura humana abstrata — arco/lua crescente envolvendo um corpo em movimento em traço curvo, **círculo** como cabeça e **pontinhos** ao longo da curva (respiração/movimento).

**Versões presentes no manual:**
1. **Logo horizontal:** ícone à esquerda + "ESTUDIO DE PILATES" (caixa-alta pequena, bem espaçada) sobre "TACIANE / MARTINS" (sans geométrica fina, caixa-alta, duas linhas).
   - Sobre creme: ícone e texto em terracota (cabeça laranja, pontos em degradê); variação com ícone verde+terracota.
   - Sobre terracota ou sálvia: tudo em creme (negativo).
2. **Ícone isolado:** creme sobre sálvia; creme sobre terracota; terracota sobre creme.
3. **Selo circular:** ícone ao centro + texto em círculo "TACIANE MARTINS • ESTUDIO DE PILATES" — assinatura discreta (cantos de posts, stories, embalagens).

**Elemento de grafismo:** o próprio símbolo ampliado, recortado e em transparência (tom sobre tom: sálvia claro sobre sálvia, branco 30% sobre foto), com círculos soltos. Usado em capas, pasta, ecobag e foto de abertura do manual. Ótimo para fundos de seções e hero do site.

**Regras:** não distorcer, não recolorir fora da paleta, manter respiro ao redor; usar o ícone sozinho (favicon, avatar) quando o espaço for pequeno.

## 3. Paleta de cores

Valores medidos por pixel diretamente no manual oficial (PDF) e no logo.

### Cores oficiais
| Token | Hex | Uso |
|---|---|---|
| `--creme` | `#FDF4EB` | Fundo principal (cor mais presente no manual) |
| `--creme-quente` | `#FFF2E3` | Variação de creme: cards/caixas de texto dos templates de stories |
| `--terracota` | `#BF735C` | Cor primária: logo, fundos de blocos, botões, ícones |
| `--salvia` | `#798D6A` | Cor secundária: blocos, ícones de destaque, papelaria |
| `--salvia-claro` | `#A9B299` | Grafismo tom sobre tom no verde |
| `--laranja-sol` | `#E0925A` | Acento (cabeça do símbolo, círculos decorativos) — usar pouco |
| `--branco` | `#FFFFFF` | Respiro em páginas de conteúdo |

### Cores de apoio (ambiente/fotos)
| Token | Hex | Origem |
|---|---|---|
| `--areia` | `#DEC2A4` | Paredes/mural bege |
| `--madeira` | `#A17E60` | Equipamentos de madeira |
| `--verde-folha` | `#628564` | Folhas do mural |
| `--marrom-texto` | `#7A4E3A` | Títulos em serifa/script nos posts |
| `--grafite` | `#2B2523` | Texto corrido |
| `--rosa-campanha` | `#E58AA8` | Só campanhas sazonais (Outubro Rosa, Pilates Girls) |

### Regras de uso
- Tríade da marca: **creme + terracota + sálvia**, em blocos chapados de cor (o manual alterna faixas inteiras terracota / sálvia / creme).
- Laranja só em pontos/círculos pequenos.
- Fotos com tratamento quente e levemente dessaturado (tons terrosos, roupas verde-oliva, vinho, terracota).
- Contraste: terracota sobre creme ≈ 3.3:1 → bom para títulos grandes e botões com texto creme/branco em peso 600+; texto pequeno em `--grafite` ou `--marrom-texto`.

```css
:root{
  --creme:#FDF4EB; --creme-quente:#FFF2E3; --branco:#FFFFFF;
  --terracota:#BF735C; --terracota-escuro:#9E5A45; --laranja-sol:#E0925A;
  --salvia:#798D6A; --salvia-claro:#A9B299; --verde-folha:#628564;
  --areia:#DEC2A4; --madeira:#A17E60; --marrom-texto:#7A4E3A; --grafite:#2B2523;
  --rosa-campanha:#E58AA8;
}
```

## 4. Tipografia

O manual não nomeia as fontes; abaixo os equivalentes gratuitos mais próximos. Se a designer original informar as fontes, substitua.

| Papel | Onde aparece | Fonte sugerida (Google Fonts) |
|---|---|---|
| **Marca / títulos institucionais** | "TACIANE MARTINS" no logo — sans geométrica fina, caixa-alta; "ESTUDIO DE PILATES" pequeno com tracking largo | `Quicksand` 300–400 ou `Montserrat` 300 (caixa-alta, `letter-spacing` 0.05em; rótulos com 0.3em) |
| **Tags/rótulos** | Pílulas sálvia do manual ("criativa", "aconchegante"…) — sans arredondada, minúscula | `Quicksand` 500 |
| **Serifa editorial** (posts) | "Gravidez saudável, *é gravidez ativa!*", "Março" — serifa clássica com itálico bold | `Playfair Display` (400 + 700 italic) |
| **Script decorativo** (posts) | "Abril", "Maio" nos dumps mensais | `Great Vibes` ou `Allura` |

### Hierarquia para o site
- Logo, menu, rótulos: Quicksand/Montserrat leve em caixa-alta espaçada (fiel ao logotipo).
- H1/H2: Playfair Display com uma palavra em *itálico* (ex.: "Movimento com *propósito*").
- Script: no máximo um por seção, grande, com palavra pequena em sans abaixo.
- Corpo: Quicksand 400, 16–18px, entrelinha 1.6.

```html
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,700&family=Great+Vibes&display=swap" rel="stylesheet">
```

## 5. Linguagem visual

### Formas e componentes (do manual)
- **Pílulas** sálvia com texto creme minúsculo (tags).
- **Molduras em arco** com borda creme fina para fotos (4 fotos lado a lado em arcos, com **círculos** laranja/terracota/sálvia/creme sobrepostos nas bordas).
- **Cards com cantos bem arredondados** (raio ~24px) — templates de stories: fundo terracota com caixa creme central; fundo sálvia com grafismo; fundo creme com selo no rodapé.
- **Ícones de destaque:** pictogramas em círculo, alternando fundo creme/sálvia/terracota (localização, espaço, cursos, gestantes, contato, dicas/lâmpada, alunos/aparelho).
- **Papelaria:** pasta sálvia, envelope terracota com linhas orgânicas finas, timbrado branco com grafismo sálvia e círculos pêssego, ecobag crua com alça verde-oliva.

### Ambiente do estúdio (fotos reais)
- Nichos em **arco com LED** de contorno, **mural de folhas** (verde/bege/caramelo) com "O corpo alcança o que a mente acredita!", equipamentos de madeira clara (Kauffer), tapetes verde-petróleo, plantas.

### Fotografia e vídeo
- Vertical (4:5 / 9:16), no estúdio, alunas em posturas de força + leveza; gestantes em destaque.
- Reels de trend: texto overlay curto e bem-humorado, emojis no fim, duplas no mesmo exercício.
- Dump mensal: título script + "dump" em sans, linha curva luminosa sobre a foto.

### Mapa do site sugerido (a partir dos destaques)
Hero (foto com grafismo do símbolo em transparência + lema) → Sobre a Taciane → Para quem (Gestantes · Mulheres · Duplas) → Nosso Espaço → Cursos → Depoimentos (reais, autorizados) → Localização + WhatsApp.

## 6. Tom de voz e frases

- Próxima, carinhosa, em primeira pessoa ("por aqui", "com a gente"); cuidado em saúde + humor leve.
- Emojis suaves (🤍 🤎 ✨ 🌸 💖) — no site só em microcopy.
- Palavras-chave: cuidado, movimento, força, leveza, consciência corporal, equilíbrio, acolher, propósito.

Frases reais do perfil:
- "O corpo alcança o que a mente acredita!"
- "Pilates é movimento com propósito."
- "Onde a delicadeza encontra a força."
- "Cuidar do corpo também é cuidar da mente."
- "Entre a força e o controle, nasce a leveza do movimento."
- "Fortalecer o que precisa, suavidade onde importa."
- "Gravidez saudável, é gravidez ativa!"
- "Gestar é transformar e o Pilates faz parte dessa transformação."
- "Teu corpo não é tão frágil como você imagina."
- "O pilates mora nos pequenos detalhes."
- "Pilates é vida em movimento!"
- "Mulheres que praticam pilates são fortes."
- "Quem disse que café e movimento não combinam?"

Hashtags: #pilates #pilatesvilhena #pilatescadillac #pilatesemdupla #pilatesgirls

## 7. Arquivos da marca (Google Drive) e como baixar

Pasta raiz: **Arquivos Taciane Martins** — https://drive.google.com/drive/folders/1NOsixrXPtEXAl0cYzeMIswy2j6ND002Q

| Subpasta | Conteúdo | Uso no site |
|---|---|---|
| **Vetores Pdf/Eps/Ai** — https://drive.google.com/drive/folders/1SK-Eef49Uuf12L8SO-YrhYFuC0lnIK68 | `ID VISUAL - Taciane Martins.pdf` (manual); `Logo.pdf`, `Logo variação1.pdf`, `Logo variação2.pdf`; `ícone.pdf`, `ícone_1.pdf`, `ícone variação1/1_1/2/2_1.pdf`; `Vetores` / `Pasta` / `Timbrado` em .ai, .eps, .pdf | Converter logo/ícone para **SVG** (fonte de verdade) |
| **Imagens** — https://drive.google.com/drive/folders/1ze2E17AKqKrAME_lZhZvI6BXodmUyEe8 | PNGs: `Logo.png`, `Logo variação1.png`, `Logo variação2.png`, `ícone*.png` (ex.: ícone creme sobre terracota) | Favicon, OG image, fallback |
| **Destaques e Templates** — https://drive.google.com/drive/folders/1ojQx8Qld-Is_zGbjER2jeC5dsYb-yk0b | `Capa destaque1–7.png` (ícones dos destaques); `Template1.png` (terracota + caixa creme), `Template2.png` (sálvia + grafismo), `Template3.png` (creme + selo) | Ícones das seções; fundos de cards |
| **Marca d'água** — https://drive.google.com/drive/folders/1SlFXnjjBtSgVY35GSVWn5M3kOtVpifqj | `Marca d'água.png` … `Marca d'água14.png` | Assinar fotos da galeria |

### Baixar
- **Manual (mais simples):** no Drive, botão direito na pasta → *Fazer download* (gera .zip).
- **Linha de comando** (pasta compartilhada como "qualquer pessoa com o link"):
  ```bash
  pip install gdown
  gdown --folder https://drive.google.com/drive/folders/1NOsixrXPtEXAl0cYzeMIswy2j6ND002Q -O marca-taciane
  ```
  Se a pasta for restrita, use `rclone` com login Google (`rclone copy "gdrive:Arquivos Taciane Martins" ./marca-taciane`) ou o download manual.
- **PDF/AI → SVG:** `inkscape Logo.pdf --export-type=svg --export-plain-svg -o logo.svg` (ou `pdftocairo -svg Logo.pdf logo.svg`). Conferir cores após converter.
- **Favicon:** a partir do ícone (creme sobre terracota) em 512×512 → gerar 32/180/192/512.

### Fotos do Instagram (para galeria)
Preferir originais com a cliente. Alternativa:
```bash
pip install instaloader
instaloader --no-videos --no-video-thumbnails --no-metadata-json pilatestacianemartins
instaloader -- -DU5mCbvkffv     # post específico
```
Posts úteis (`https://www.instagram.com/pilatestacianemartins/p/<código>/`):
- Arcos iluminados / dumps: `Dbk-2JdEZoq` (jul), `DaRGNWCEcJH` (jun), `DZAvRtSlezZ` (mai), `DXzS0i4kQPq` (abr)
- Mural: `DU5mCbvkffv`, `DeHik2iRABH`
- Gestantes: `DU5mCbvkffv`, `DdtztgHEV6m`, `DcEh6eexgSN`
- Pilates Girls: `Der3zEGnRPO`, `DeHik2iRABH`
- Educativo: `Dd482mUkbqM`, `DdrUf7rxGzM`, `Ddj2hDDJEOB`
- Formação: `DaLEPAzEdbY`

**Direito de imagem:** fotos com alunas identificáveis só com consentimento delas e da Taciane (LGPD). Imagens do manual com modelos podem ser de banco de imagens — confirmar licença antes de usar no site.

### Tratamento para web
WebP/AVIF; 1600px (hero) / 800px (galeria); qualidade ~80; manter tom quente.

## 8. Checklist

- [ ] Tríade creme `#FDF4EB` + terracota `#BF735C` + sálvia `#798D6A`, em blocos chapados
- [ ] Logo/ícone em SVG a partir dos vetores oficiais — nunca recriado à mão
- [ ] Grafismo do símbolo em transparência + círculos soltos
- [ ] Arcos, pílulas e cantos arredondados (~24px)
- [ ] Tipografia leve em caixa-alta espaçada para marca; Playfair itálico para títulos
- [ ] Atributos perceptíveis: criativa, aconchegante, moderna, organizada, segura, acolhedora
- [ ] CREFITO visível; WhatsApp sempre acessível; endereço em Vilhena-RO
