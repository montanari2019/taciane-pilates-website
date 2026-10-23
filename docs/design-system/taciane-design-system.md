# Design system — Estúdio de Pilates Taciane Martins

Resumo operacional para quem constrói o site. A fonte da verdade da marca é a skill `.claude/skills/identidade-pilates-taciane-martins/SKILL.md` (manual oficial "ID VISUAL", mar/2024; quando o manual e o Instagram divergem, o manual vence). A fonte do visual do site é o protótipo congelado `docs/prototipo/taciane-pilates-website-prototipo.html`. Os tokens vivem em `repos/taciane-pilates-website/src/theme/{colors,structure}.css`.

## 1. Essência

Atributos oficiais: criativa, aconchegante, moderna, organizada, segura, acolhedora. Conceito: "Onde a delicadeza encontra a força." Tom: próximo, carinhoso, primeira pessoa ("por aqui", "com a gente"); cuidado em saúde com humor leve. Palavras-chave: cuidado, movimento, força, leveza, consciência corporal, equilíbrio, acolher, propósito. CTA padrão: **Agende sua aula** (WhatsApp).

## 2. Cores

Tríade da marca em blocos chapados: **creme + terracota + sálvia**. Laranja só em pontos e círculos pequenos.

| Token | Valor | Uso |
| --- | --- | --- |
| `--creme` | `#FDF4EB` | fundo principal |
| `--creme-quente` | `#FFF2E3` | cartões e caixas |
| `--terracota` | `#BF735C` | cor primária: botões, blocos, logo |
| `--terracota-escuro` | `#9E5A45` | hover e contraste alto |
| `--salvia` | `#798D6A` | cor secundária: blocos, pílulas |
| `--salvia-claro` | `#A9B299` | grafismo tom sobre tom |
| `--laranja-sol` | `#E0925A` | acento (cabeça do símbolo, círculos) |
| `--marrom-texto` | `#7A4E3A` | títulos (`--head`) |
| `--grafite` | `#2B2523` | texto corrido (`--label`) |

Apoio: `--areia #DEC2A4`, `--madeira #A17E60`, `--verde-folha #628564`, `--rosa-campanha #E58AA8` (só campanhas sazonais). Contraste: terracota sobre creme ≈ 3,3:1, então vale para títulos grandes e botões com texto creme em peso 600+; texto pequeno em grafite ou marrom.

Semânticos (mudam com o tema): `--bg`, `--bg-2`, `--surface`, `--label`, `--label-2`, `--label-3`, `--head`, `--accent`, `--accent-strong`, `--on-accent`, `--block-terra`, `--block-salvia`, `--on-block`, `--hairline`, `--fill`, `--fill-2`, `--glass-*`. Escuro: fundo `#1E1917`, texto creme, `--accent #C97C64`.

## 3. Tipografia

| Papel | Fonte | Token |
| --- | --- | --- |
| Marca, menu, corpo, rótulos | Quicksand 300–700 | `--f-marca` |
| H1/H2/H3 (uma palavra em *itálico bold*) | Playfair Display 400/600, itálico 700 | `--f-serif` |
| Script decorativo (no máximo um por seção) | Great Vibes | `--f-script` |

Escalas do protótipo: `.display` `clamp(44px, 6.4vw, 86px)`; `.h2` `clamp(34px, 4.6vw, 58px)`; `.h3` `clamp(28px, 3.1vw, 42px)`; `.lead` `clamp(17px, 1.45vw, 20px)` a 1.6; rótulo 12 px / 600 / `.3em` / caixa-alta; marca "ESTÚDIO DE PILATES" 9 px com `.32em`. Corpo 17 px, entrelinha 1.6. As fontes entram por `next/font/google` (servidas pelo próprio site).

## 4. Forma e componentes

- **Arco**: moldura de foto `border-radius: 999px 999px 24px 24px`, borda creme de 5–6 px (`--bg-2` no escuro). Três arcos no Hero, alturas 70/100/83 %.
- **Círculos soltos** (laranja, sálvia, terracota, creme) sobre as bordas das fotos, flutuando.
- **Pílulas** (`.pill`): sálvia com texto creme, 32 px de altura; variações `terra`, `ghost`, `claro`.
- **Botões** (`.btn`, 46/56 px, pílula): `primario` (terracota), `plain` (superfície + hairline), `creme`, `glass on-color`. Hover sobe com mola e um reflexo de luz atravessa.
- **Cápsula de vidro** (`.capsula`): CTA "Agende sua aula" + botão de menu; vira painel com `:target`. Único lugar com vidro, mais os botões sobre cor.
- **Cartões** de raio 24 px (`--radius-card`) e blocos de 40 px (`--radius-big`).
- **Selo circular**: ícone ao centro e texto "TACIANE MARTINS • ESTÚDIO DE PILATES •" girando (26 s).
- **Grafismo**: o símbolo ampliado, em traço fino e transparência (sálvia claro, 28–35 %).
- **Logo**: ícone (arco/lua + corpo em curva + círculo + pontinhos) à esquerda e "ESTÚDIO DE PILATES" sobre "TACIANE MARTINS". O símbolo do protótipo (`#i-logo`) é provisório: usar o SVG oficial convertido dos vetores do Drive da marca. Nunca distorcer nem recolorir fora da paleta.

## 5. Movimento (tudo em CSS)

Entrada do Hero (`entra`, `sobe`), troca de fotos nos arcos (`troca` 12 s + `zoom` 18 s), flutuar dos círculos (`flutua`), giro do grafismo (120 s) e do selo (26 s), brilho da cápsula (`brilho` 9 s). Dirigidas por rolagem (`animation-timeline`, com `@supports`): `revela` (`.reveal`), `aproxima` (zoom nas fotos), `desenha` (linha dos passos), `deriva` (arcos do Hero), `recua` (cartões empilhados), `aparece` (borda de rolagem), `compacta` (cápsula encolhe a 118 px). Curvas: `--ease-spring cubic-bezier(.34,1.5,.64,1)` e `--ease-push cubic-bezier(.22,1,.36,1)`.

## 6. Acessibilidade e adaptação

Respeita `prefers-reduced-motion` (sem animações de rolagem e rolagem suave só quando permitido), `prefers-reduced-transparency` (vidro sólido), `prefers-contrast: more` (acento escuro, texto pleno) e `prefers-color-scheme`. Atalho "Pular para o conteúdo", foco visível (anel de 3 px), `aria-label` nos controles de ícone. Quebras: 860 px e 560 px. Sem rolagem lateral (`overflow-x: clip`).

## 7. Fotografia

Vertical (4:5, 9:16), estúdio real, tom quente e levemente dessaturado, alunas em força + leveza, gestantes em destaque. Web: WebP/AVIF, 1600 px (Hero) e 800 px (galeria), qualidade ~80. Fotos com alunas identificáveis só com consentimento (LGPD).
