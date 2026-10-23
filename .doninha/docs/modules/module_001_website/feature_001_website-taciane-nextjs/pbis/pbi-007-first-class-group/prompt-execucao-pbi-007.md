Você é o executor autônomo do PBI 007 (Primeira aula e turma) da feature "Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo", em `repos/taciane-pilates-website`. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `sessao-execucao-007.md` e siga. As ÚNICAS paradas são as do §10 e as do guia (G10). Todo texto e artefato em PT-BR; nomes no código em inglês.

# 0. Leitura obrigatória
1. `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/guia-execucao-comum.md`.
2. `repos/taciane-pilates-website/CLAUDE.md`; `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`; `docs/design-system/taciane-design-system.md`; os relatórios dos PBIs de que este depende (001).
3. `pbis/pbi-007-first-class-group/pbi.md` e este arquivo (onde divergir do guia, vale o prompt).
4. No protótipo (`docs/prototipo/taciane-pilates-website-prototipo.html`, somente leitura), por `grep -n`: `id="primeira-aula"`, `.passos`, `.passo`, `.linha`, `@keyframes desenha`, `id="turma"`, `.turma`, `figcaption`.

# 1. Missão e escopo
Pasta do PBI: `pbis/pbi-007-first-class-group/`. Cria `sessao-execucao-007.md` e `relatorio-execucao-007.md`.
**Entrega:** Os três passos para começar, com a linha que se desenha, e a foto da turma com a legenda "Pilates Girls".
**Permitido:** `src/features/home/components/{FirstClass,Group}/**`, `src/features/home/copy/{first-class,group}.ts`, tokens novos, os slots `first-class` e `group`.
**Proibido:** outros slots, JavaScript, dependências.
**NÃO é deste PBI:** as seções dos outros PBIs, deploy, push, PR, merge em `main`.

# 2. Estado de partida (confira, não presuma)
`Reveal`, `Heading`, `Kicker`, `Seal` (se o PBI 004 já entrou) existem. A `foto-15` está em `assets/web/` (138 KB).
Confirme com `ls`, `git log --oneline` e leitura dos arquivos; se o estado diferir, registre a diferença na sessão.

# 3. Pré-requisitos BLOQUEANTES
G3 do guia + os PBIs 001 integrados em `feat/website`.

# 4. Mapa do código atual (protótipo)
Âncoras para localizar o trecho (nunca por número de linha): `id="primeira-aula"`, `.passos`, `.passo`, `.linha`, `@keyframes desenha`, `id="turma"`, `.turma`, `figcaption`. Copie textos, medidas, curvas, durações e atrasos **literais** do protótipo; valores definidos por `style="--x:..."` no HTML viram classes (`nth-child`) no `.module.css`.

# 5. Plano em blocos
**Bloco 0 — preparo.** Ramo `feat/website-pbi-007-first-class-group` a partir de `feat/website`; dependências; linha de base (`lint`, `tsc`, `check:style`, `build`); registro da sessão.
**Bloco 1 — passos.** `FirstClass` com `counter` CSS para o número (nada de número escrito à mão no TSX), linha e hover. Commit.
**Bloco 2 — turma.** `Group` com `figure`/`figcaption` e a foto. Slots. Commit.
**Bloco V — provas.** (a) CDP: `scaleX` da linha vai de 0 a 1 entre dois pontos de rolagem; (b) textos literais (diff contra o protótipo); (c) bounding boxes em 1440/820/390; (d) `build` estático.
**Bloco R/D.** Relatório e registro.
**Bloco Q — revisão** (G7) e fechamento (G8).

# 6. Regras invioláveis
Guia (G4): tokens de cor, CSS Modules, nunca CSS inline, animação só em CSS, zero JavaScript de aplicação, nomes em inglês, textos do protótipo literais, identidade da skill `identidade-pilates-taciane-martins`.

# 7. Decisões autônomas já tomadas
- Página única `/` com âncoras (DEC-01); protótipo congelado (DEC-02); zero JavaScript de aplicação (DEC-03); fotos de `assets/web` por `next/image` (DEC-04); fontes por `next/font` (DEC-05); logo provisório até o SVG oficial (DEC-06).

# 8. Pontos de risco que exigem teste
1. `animation-range` da linha (`entry 20% cover 40%`) depende da altura da seção: copie igual. 2. A foto da turma tem alunas identificáveis: RN-06.

# 9. Checklist antes de fechar
G9 do guia + critérios CA-01 a CA-05 do `pbi.md` com prova registrada.

# 10. Condições de parada
G10 do guia. Específicas: a) nenhuma específica.

# 11. Encadeamento
Nenhum PBI inicia outro. Integração: G2.

# 12. Relatório final
`relatorio-execucao-007.md` (G11) com a tabela CA-01…CA-05 → prova, medições, DESVIOs e "Para o responsável confirmar".
