Você é o executor autônomo do PBI 002 (Tema claro/escuro) da feature "Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo", em `repos/taciane-pilates-website`. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `sessao-execucao-002.md` e siga. As ÚNICAS paradas são as do §10 e as do guia (G10). Todo texto e artefato em PT-BR; nomes no código em inglês.

# 0. Leitura obrigatória
1. `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/guia-execucao-comum.md`.
2. `repos/taciane-pilates-website/CLAUDE.md`; `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`; `docs/design-system/taciane-design-system.md`; os relatórios dos PBIs de que este depende (001).
3. `pbis/pbi-002-theme-light-dark/pbi.md` e este arquivo (onde divergir do guia, vale o prompt).
4. No protótipo (`docs/prototipo/taciane-pilates-website-prototipo.html`, somente leitura), por `grep -n`: `prefers-color-scheme:dark`, `#t-claro`, `#t-escuro`, `.tema-sw`, `data-theme`, `:root:has(#t-escuro:checked) .arco`, `transition:background-color`.

# 1. Missão e escopo
Pasta do PBI: `pbis/pbi-002-theme-light-dark/`. Cria `sessao-execucao-002.md` e `relatorio-execucao-002.md`.
**Entrega:** O tema claro/escuro: segue o aparelho desde a primeira pintura, troca pelo seletor sol/lua do menu e vale em toda a página, tudo em CSS.
**Permitido:** `src/theme/**`, `src/components/ThemeSwitch/**` (ou o trecho do `Capsule` criado no PBI 001), `src/app/globals.css` (só a transição do corpo).
**Proibido:** JavaScript, `localStorage`, cookies, qualquer seção de conteúdo, dependências.
**NÃO é deste PBI:** as seções dos outros PBIs, deploy, push, PR, merge em `main`.

# 2. Estado de partida (confira, não presuma)
`theme/colors.css` já traz os blocos claro, `prefers-color-scheme: dark`, `data-theme="dark"`/`:has(#t-escuro:checked)` e `prefers-contrast: more`. O PBI 001 deixou o grupo de rádios do menu pronto só visualmente. Os rádios precisam estar no DOM como ancestrais comuns do `:root` via `:has()` (não precisam ser irmãos).
Confirme com `ls`, `git log --oneline` e leitura dos arquivos; se o estado diferir, registre a diferença na sessão.

# 3. Pré-requisitos BLOQUEANTES
G3 do guia + os PBIs 001 integrados em `feat/website`.

# 4. Mapa do código atual (protótipo)
Âncoras para localizar o trecho (nunca por número de linha): `prefers-color-scheme:dark`, `#t-claro`, `#t-escuro`, `.tema-sw`, `data-theme`, `:root:has(#t-escuro:checked) .arco`, `transition:background-color`. Copie textos, medidas, curvas, durações e atrasos **literais** do protótipo; valores definidos por `style="--x:..."` no HTML viram classes (`nth-child`) no `.module.css`.

# 5. Plano em blocos
**Bloco 0 — preparo.** Ramo `feat/website-pbi-002-theme-light-dark` a partir de `feat/website`; dependências; linha de base (`lint`, `tsc`, `check:style`, `build`); registro da sessão.
**Bloco 1 — conferir tokens.** Confira cada cor do protótipo (bloco TOKENS e as 2 variantes escuras) contra `colors.css`; falta algo → token novo nos dois temas. Commit.
**Bloco 2 — seletor.** Rádios `name="tema"` com `aria-label`, estilos `:has(input:checked)` e `:has(input:focus-visible)`, ícones `i-sun` e `i-moon`. Commit.
**Bloco 3 — pontos de borda.** Arco no escuro, vidro no escuro, `color-scheme`, transição do corpo, `meta name="color-scheme"` (`light dark`). Commit.
**Bloco V — provas.** (a) CDP com `Emulation.setEmulatedMedia` claro e escuro: fundo e texto batem com o protótipo; (b) clique em `#t-escuro` e `#t-claro` troca `--bg` na hora; (c) teclado: Tab chega ao rádio, setas trocam, anel visível; (d) `prefers-contrast: more` emulado muda `--accent`; (e) captura do Hero nos dois temas vs protótipo.
**Bloco R/D.** Relatório e registro.
**Bloco Q — revisão** (G7) e fechamento (G8).

# 6. Regras invioláveis
Guia (G4): tokens de cor, CSS Modules, nunca CSS inline, animação só em CSS, zero JavaScript de aplicação, nomes em inglês, textos do protótipo literais, identidade da skill `identidade-pilates-taciane-martins`.

# 7. Decisões autônomas já tomadas
- Página única `/` com âncoras (DEC-01); protótipo congelado (DEC-02); zero JavaScript de aplicação (DEC-03); fotos de `assets/web` por `next/image` (DEC-04); fontes por `next/font` (DEC-05); logo provisório até o SVG oficial (DEC-06).

# 8. Pontos de risco que exigem teste
1. `:has()` no `:root` recalcula estilo da página inteira: meça a troca (alvo: sem quadro acima de 100 ms). 2. Não repor `transition` de cor em `*` (cria uma transição por elemento); só no `body`. 3. Primeira pintura: sem JS não há como piscar, mas confira com cache vazio.

# 9. Checklist antes de fechar
G9 do guia + critérios CA-01 a CA-06 do `pbi.md` com prova registrada.

# 10. Condições de parada
G10 do guia. Específicas: a) seria preciso JavaScript ou armazenamento para o tema funcionar.

# 11. Encadeamento
Nenhum PBI inicia outro. Integração: G2.

# 12. Relatório final
`relatorio-execucao-002.md` (G11) com a tabela CA-01…CA-06 → prova, medições, DESVIOs e "Para o responsável confirmar".
