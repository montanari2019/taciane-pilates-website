Você é o executor autônomo do PBI 003 (Hero e frases na curva) da feature "Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo", em `repos/taciane-pilates-website`. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `sessao-execucao-003.md` e siga. As ÚNICAS paradas são as do §10 e as do guia (G10). Todo texto e artefato em PT-BR; nomes no código em inglês.

# 0. Leitura obrigatória
1. `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/guia-execucao-comum.md`.
2. `repos/taciane-pilates-website/CLAUDE.md`; `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`; `docs/design-system/taciane-design-system.md`; os relatórios dos PBIs de que este depende (001).
3. `pbis/pbi-003-home-hero-curve/pbi.md` e este arquivo (onde divergir do guia, vale o prompt).
4. No protótipo (`docs/prototipo/taciane-pilates-website-prototipo.html`, somente leitura), por `grep -n`: `<section class="hero"`, `.hero-grid`, `.hero-arcos`, `.ha`, `@keyframes troca`, `@keyframes zoom`, `@keyframes flutua`, `@keyframes entra`, `@keyframes sobe`, `@keyframes deriva`, `<section class="curva"`, `curvaP`, `.pill`.

# 1. Missão e escopo
Pasta do PBI: `pbis/pbi-003-home-hero-curve/`. Cria `sessao-execucao-003.md` e `relatorio-execucao-003.md`.
**Entrega:** A primeira dobra: título, apresentação, botões, pílulas e CREFITO, os três arcos de fotos que se alternam, e a faixa de frases correndo numa curva.
**Permitido:** `src/features/home/components/{Hero,HeroArches,PhraseCurve}/**`, `src/features/home/copy/hero.ts`, tokens novos, os slots `hero` e `curve` de `HomePage`, `src/components/{Pill,Button,Heading,Lead,Kicker}/**` se ainda não existirem.
**Proibido:** outros slots, JavaScript, dependências, `style=`; os valores `--h`, `--z`, `--i`, `--dl` do protótipo viram classes `nth-child`.
**NÃO é deste PBI:** as seções dos outros PBIs, deploy, push, PR, merge em `main`.

# 2. Estado de partida (confira, não presuma)
Existem `siteConfig`, `Reveal`, `Icon` e a cápsula (PBI 001). As fotos 01 a 06 estão em `assets/web/` do workspace e ainda não estão no app.
Confirme com `ls`, `git log --oneline` e leitura dos arquivos; se o estado diferir, registre a diferença na sessão.

# 3. Pré-requisitos BLOQUEANTES
G3 do guia + os PBIs 001 integrados em `feat/website`.

# 4. Mapa do código atual (protótipo)
Âncoras para localizar o trecho (nunca por número de linha): `<section class="hero"`, `.hero-grid`, `.hero-arcos`, `.ha`, `@keyframes troca`, `@keyframes zoom`, `@keyframes flutua`, `@keyframes entra`, `@keyframes sobe`, `@keyframes deriva`, `<section class="curva"`, `curvaP`, `.pill`. Copie textos, medidas, curvas, durações e atrasos **literais** do protótipo; valores definidos por `style="--x:..."` no HTML viram classes (`nth-child`) no `.module.css`.

# 5. Plano em blocos
**Bloco 0 — preparo.** Ramo `feat/website-pbi-003-home-hero-curve` a partir de `feat/website`; dependências; linha de base (`lint`, `tsc`, `check:style`, `build`); registro da sessão.
**Bloco 1 — fotos.** Copie `foto-01` a `foto-06` para `src/assets/photos/` (import estático, que informa largura e altura) e crie `src/assets/photos/index.ts` com o mapa e os alt. Commit.
**Bloco 2 — texto e botões.** `Hero` com `Heading`, `Lead`, `Kicker`, `Button` (`primario`, `plain`, `lg`), `Pill`; entrada `entra` por classes de atraso. Commit.
**Bloco 3 — arcos.** `HeroArches`: 3 `.ha`, alternância das fotos, círculos, `deriva`. Commit.
**Bloco 4 — curva.** `PhraseCurve`: SVG com `<animate>` e `.sr`; troque os slots. Commit.
**Bloco V — provas.** (a) frames da alternância das fotos (CDP lê `opacity` da 2ª foto a cada 1 s por 12 s); (b) alturas dos arcos 70/100/83 % (tolerância 2 px); (c) `getBoundingClientRect` do H1, botões e arcos vs protótipo em 1440/820/390; (d) frases percorrem a curva (posição do `textPath` muda entre dois instantes); (e) `build`: `/` estático; imagens servidas em AVIF/WebP.
**Bloco R/D.** Relatório e registro.
**Bloco Q — revisão** (G7) e fechamento (G8).

# 6. Regras invioláveis
Guia (G4): tokens de cor, CSS Modules, nunca CSS inline, animação só em CSS, zero JavaScript de aplicação, nomes em inglês, textos do protótipo literais, identidade da skill `identidade-pilates-taciane-martins`.

# 7. Decisões autônomas já tomadas
- Página única `/` com âncoras (DEC-01); protótipo congelado (DEC-02); zero JavaScript de aplicação (DEC-03); fotos de `assets/web` por `next/image` (DEC-04); fontes por `next/font` (DEC-05); logo provisório até o SVG oficial (DEC-06).

# 8. Pontos de risco que exigem teste
1. `<animate>` em SVG inline renderiza no servidor: nada de `'use client'`. 2. `will-change` nos arcos rasteriza em escala errada (foi o que borrou as fotos no projeto de referência): não use. 3. `priority` só na foto do LCP; as outras `lazy`. 4. Texto da curva é decorativo: o `aria-hidden` está no SVG e o `.sr` entrega o texto.

# 9. Checklist antes de fechar
G9 do guia + critérios CA-01 a CA-06 do `pbi.md` com prova registrada.

# 10. Condições de parada
G10 do guia. Específicas: a) foto do protótipo não encontrada em `assets/web/`.

# 11. Encadeamento
Nenhum PBI inicia outro. Integração: G2.

# 12. Relatório final
`relatorio-execucao-003.md` (G11) com a tabela CA-01…CA-06 → prova, medições, DESVIOs e "Para o responsável confirmar".
