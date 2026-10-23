Você é o executor autônomo do PBI 009 (Polimento final) da feature "Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo", em `repos/taciane-pilates-website`. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `sessao-execucao-009.md` e siga. As ÚNICAS paradas são as do §10 e as do guia (G10). Todo texto e artefato em PT-BR; nomes no código em inglês.

# 0. Leitura obrigatória
1. `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/guia-execucao-comum.md`.
2. `repos/taciane-pilates-website/CLAUDE.md`; `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`; `docs/design-system/taciane-design-system.md`; os relatórios dos PBIs de que este depende (001, 002, 003, 004, 005, 006, 007, 008).
3. `pbis/pbi-009-final-polish/pbi.md` e este arquivo (onde divergir do guia, vale o prompt).
4. No protótipo (`docs/prototipo/taciane-pilates-website-prototipo.html`, somente leitura), por `grep -n`: `@media (prefers-reduced-motion`, `@media (prefers-reduced-transparency`, `@media (prefers-contrast`, `@supports not ((backdrop-filter`, `<meta name="description"`, `<title>`.

# 1. Missão e escopo
Pasta do PBI: `pbis/pbi-009-final-polish/`. Cria `sessao-execucao-009.md` e `relatorio-execucao-009.md`.
**Entrega:** A verificação final: paridade com o protótipo, adaptação a Reduzir movimento, transparência e contraste, metadados do site e medições de desempenho.
**Permitido:** `src/app/{layout.tsx,robots.ts,sitemap.ts}`, `src/config/seo.ts`, `src/theme/**` (blocos de adaptação), ajustes pontuais nos `.module.css` dos PBIs anteriores para a adaptação a mídia, `README.md`.
**Proibido:** conteúdo novo, JavaScript, dependências, analytics, cookies, dados estruturados não conferidos.
**NÃO é deste PBI:** as seções dos outros PBIs, deploy, push, PR, merge em `main`.

# 2. Estado de partida (confira, não presuma)
Todos os PBIs 001 a 008 integrados. O protótipo já traz os blocos `@media` de adaptação; este PBI garante que cada módulo CSS os respeite.
Confirme com `ls`, `git log --oneline` e leitura dos arquivos; se o estado diferir, registre a diferença na sessão.

# 3. Pré-requisitos BLOQUEANTES
G3 do guia + os PBIs 001, 002, 003, 004, 005, 006, 007, 008 integrados em `feat/website`.

# 4. Mapa do código atual (protótipo)
Âncoras para localizar o trecho (nunca por número de linha): `@media (prefers-reduced-motion`, `@media (prefers-reduced-transparency`, `@media (prefers-contrast`, `@supports not ((backdrop-filter`, `<meta name="description"`, `<title>`. Copie textos, medidas, curvas, durações e atrasos **literais** do protótipo; valores definidos por `style="--x:..."` no HTML viram classes (`nth-child`) no `.module.css`.

# 5. Plano em blocos
**Bloco 0 — preparo.** Ramo `feat/website-pbi-009-final-polish` a partir de `feat/website`; dependências; linha de base (`lint`, `tsc`, `check:style`, `build`); registro da sessão.
**Bloco 1 — auditoria de paridade.** Capture protótipo e site lado a lado (1440/820/390, claro/escuro) e registre diferenças. Commit só do que corrigir.
**Bloco 2 — adaptação a mídia.** Reduzir movimento, transparência e contraste em cada módulo; `@supports not backdrop-filter`. Commit.
**Bloco 3 — metadados.** `config/seo.ts` com `buildMetadata`, `robots.ts`, `sitemap.ts`, imagem OG. Commit.
**Bloco 4 — desempenho e imagens.** Medir JS por rota, LCP (Chrome headless via CDP), `priority`, reduzir `foto-13`. Commit.
**Bloco 5 — logo.** Se houver SVG oficial, troque; senão registre a pendência.
**Bloco V — provas.** (a) capturas lado a lado nas 6 combinações (3 larguras x 2 temas); (b) CDP com `Emulation.setEmulatedMedia` para reduced-motion, reduced-transparency e contrast; (c) `curl -s localhost:PORT/ | grep -i 'og:'`; (d) `next build`: tabela de rotas e tamanhos; (e) `grep -r 'https\?://' .next/static` só com os links previstos (WhatsApp, Instagram, Facebook).
**Bloco R/D.** Relatório e registro.
**Bloco Q — revisão** (G7) e fechamento (G8).

# 6. Regras invioláveis
Guia (G4): tokens de cor, CSS Modules, nunca CSS inline, animação só em CSS, zero JavaScript de aplicação, nomes em inglês, textos do protótipo literais, identidade da skill `identidade-pilates-taciane-martins`.

# 7. Decisões autônomas já tomadas
- Página única `/` com âncoras (DEC-01); protótipo congelado (DEC-02); zero JavaScript de aplicação (DEC-03); fotos de `assets/web` por `next/image` (DEC-04); fontes por `next/font` (DEC-05); logo provisório até o SVG oficial (DEC-06).

# 8. Pontos de risco que exigem teste
1. `animation-play-state` e `animation: none` em reduced-motion precisam cobrir as animações infinitas de todos os módulos. 2. Open Graph declarado à mão numa página substitui o do layout em vez de mesclar: use `buildMetadata`. 3. Domínio de produção ainda não existe: `siteUrl` é configurável.

# 9. Checklist antes de fechar
G9 do guia + critérios CA-01 a CA-07 do `pbi.md` com prova registrada.

# 10. Condições de parada
G10 do guia. Específicas: a) uma divergência de paridade exigir reescrever uma seção inteira (registre e PARE).

# 11. Encadeamento
Nenhum PBI inicia outro. Integração: G2.

# 12. Relatório final
`relatorio-execucao-009.md` (G11) com a tabela CA-01…CA-07 → prova, medições, DESVIOs e "Para o responsável confirmar".
