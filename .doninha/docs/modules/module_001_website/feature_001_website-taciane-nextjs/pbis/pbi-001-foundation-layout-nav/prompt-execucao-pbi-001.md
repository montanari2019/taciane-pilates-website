Você é o executor autônomo do PBI 001 (Fundação, layout e navegação) da feature "Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo", em `repos/taciane-pilates-website`. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `sessao-execucao-001.md` e siga. As ÚNICAS paradas são as do §10 e as do guia (G10). Todo texto e artefato em PT-BR; nomes no código em inglês.

# 0. Leitura obrigatória
1. `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/guia-execucao-comum.md`.
2. `repos/taciane-pilates-website/CLAUDE.md`; `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`; `docs/design-system/taciane-design-system.md`; os relatórios dos PBIs de que este depende (nenhum).
3. `pbis/pbi-001-foundation-layout-nav/pbi.md` e este arquivo (onde divergir do guia, vale o prompt).
4. No protótipo (`docs/prototipo/taciane-pilates-website-prototipo.html`, somente leitura), por `grep -n`: `/* TOKENS`, `.topo`, `.brand`, `.capsula`, `.cap-cta`, `.cap-painel`, `#menu:target`, `.veu`, `.edge`, `.skip`, `<symbol id="i-`, `<footer>`, `.foot`, `@keyframes compacta`, `.reveal`.

# 1. Missão e escopo
Pasta do PBI: `pbis/pbi-001-foundation-layout-nav/`. Cria `sessao-execucao-001.md` e `relatorio-execucao-001.md`.
**Entrega:** A rota `/` navegável: marca no topo, cápsula de vidro (Agende sua aula + menu), borda de rolagem, atalho "pular para o conteúdo", rodapé, favicon e a configuração única de contatos.
**Permitido:** `src/app/**`, `src/layouts/**`, `src/components/**` (Icon, IconSprite, Brand, Capsule, Reveal, Footer e afins), `src/config/**`, `src/theme/**`, `src/Environment.ts`, `src/features/home/pages/HomePage/**`, `src/app/icon.*` e `apple-icon.*`, `README.md` e `CLAUDE.md` do app (uma linha por contrato novo).
**Proibido:** o conteúdo das seções (slots são dos PBIs 003 a 008), JavaScript de aplicação (`'use client'`), dependências novas, o protótipo, `docs/`, `assets/`, `.claude/`.
**NÃO é deste PBI:** as seções dos outros PBIs, deploy, push, PR, merge em `main`.

# 2. Estado de partida (confira, não presuma)
A base do app (`repos/taciane-pilates-website`) tem `Container`, `classNames`, `Environment`, tokens em `theme/` e `app/layout.tsx` com as 3 fontes. `app/page.tsx` é um marcador de base. Nada de layout, ícones, menu ou rodapé existe ainda.
Confirme com `ls`, `git log --oneline` e leitura dos arquivos; se o estado diferir, registre a diferença na sessão.

# 3. Pré-requisitos BLOQUEANTES
G3 do guia + os PBIs nenhum integrados em `feat/website`.

# 4. Mapa do código atual (protótipo)
Âncoras para localizar o trecho (nunca por número de linha): `/* TOKENS`, `.topo`, `.brand`, `.capsula`, `.cap-cta`, `.cap-painel`, `#menu:target`, `.veu`, `.edge`, `.skip`, `<symbol id="i-`, `<footer>`, `.foot`, `@keyframes compacta`, `.reveal`. Copie textos, medidas, curvas, durações e atrasos **literais** do protótipo; valores definidos por `style="--x:..."` no HTML viram classes (`nth-child`) no `.module.css`.

# 5. Plano em blocos
**Bloco 0 — preparo.** Ramo `feat/website-pbi-001-foundation-layout-nav` a partir de `feat/website`; dependências; linha de base (`lint`, `tsc`, `check:style`, `build`); registro da sessão.
**Bloco 1 — configuração e ícones.** `config/site.ts` (`siteConfig`: `whatsappUrl`, `instagramUrl`, `facebookUrl`, `siteUrl`, `address`, `crefito`, `studioName`, `tagline`) lendo `Environment`; `IconSprite` com os símbolos `i-*` do protótipo e `Icon`; `Brand` (marca e wordmark). Commit.
**Bloco 2 — cápsula e menu.** `Capsule` (CTA, botões abrir/fechar, painel, links, Instagram, grupo de tema, véu) com `:target`; atrasos `--i` viram classes `nth-child`; `compacta`/`esconde`/`aperta` por `animation-timeline: scroll(root)` em `@supports`. Commit.
**Bloco 3 — borda, skip, rodapé, Reveal.** `Edge`, `SkipLink`, `Footer` e `Reveal` (classe `reveal`, `delay` em passos fixos por classe). Commit.
**Bloco 4 — layout e rota.** `layouts/SiteLayout`, `app/layout.tsx` usa o layout, `HomePage` com os slots `{/* slot:hero */}`, `slot:curve`, `slot:about`, `slot:audience`, `slot:space`, `slot:first-class`, `slot:group`, `slot:faq`, `slot:final-cta` na ordem do protótipo; favicon (`icon.svg`, `apple-icon.png`). Commit.
**Bloco V — provas.** (a) `build`: `/` estático (`○`); (b) menu abre e fecha por `#menu` sem JS (CDP: `location.hash` e `getComputedStyle` do painel); (c) cápsula encolhe depois de 280 px (largura 118 px); (d) bounding boxes da marca, cápsula e rodapé vs protótipo (tolerância 2 px) em 1440/820/390; (e) `grep` mostra WhatsApp/Instagram/Facebook só em `Environment`/`siteConfig`; (f) sem rolagem lateral nas 3 larguras.
**Bloco R/D.** Relatório e registro.
**Bloco Q — revisão** (G7) e fechamento (G8).

# 6. Regras invioláveis
Guia (G4): tokens de cor, CSS Modules, nunca CSS inline, animação só em CSS, zero JavaScript de aplicação, nomes em inglês, textos do protótipo literais, identidade da skill `identidade-pilates-taciane-martins`.

# 7. Decisões autônomas já tomadas
- Página única `/` com âncoras (DEC-01); protótipo congelado (DEC-02); zero JavaScript de aplicação (DEC-03); fotos de `assets/web` por `next/image` (DEC-04); fontes por `next/font` (DEC-05); logo provisório até o SVG oficial (DEC-06).

# 8. Pontos de risco que exigem teste
1. `:target` rola a página até o elemento: o painel precisa estar dentro de um contêiner `fixed`, como no protótipo, para não saltar. 2. `--i` inline do protótipo (`style="--i:0"`) não pode virar `style=`: use `nth-child`. 3. `overflow-x: clip` no `html` (não `hidden`): `hidden` quebra o `position: sticky` do PBI 005. 4. Sprite SVG inline precisa de `aria-hidden` e `width/height 0` por classe, não por `style`.

# 9. Checklist antes de fechar
G9 do guia + critérios CA-01 a CA-09 do `pbi.md` com prova registrada.

# 10. Condições de parada
G10 do guia. Específicas: a) a base do app não passa em `lint`, `tsc` e `build` antes de começar; b) seria preciso `'use client'` para o menu ou o tema (o protótipo prova que CSS basta).

# 11. Encadeamento
Nenhum PBI inicia outro. Integração: G2.

# 12. Relatório final
`relatorio-execucao-001.md` (G11) com a tabela CA-01…CA-09 → prova, medições, DESVIOs e "Para o responsável confirmar".
