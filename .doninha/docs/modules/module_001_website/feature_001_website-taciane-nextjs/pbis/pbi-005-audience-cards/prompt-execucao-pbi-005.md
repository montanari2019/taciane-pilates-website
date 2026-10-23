Você é o executor autônomo do PBI 005 (Para quem (cartões empilhados)) da feature "Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo", em `repos/taciane-pilates-website`. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `sessao-execucao-005.md` e siga. As ÚNICAS paradas são as do §10 e as do guia (G10). Todo texto e artefato em PT-BR; nomes no código em inglês.

# 0. Leitura obrigatória
1. `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/guia-execucao-comum.md`.
2. `repos/taciane-pilates-website/CLAUDE.md`; `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`; `docs/design-system/taciane-design-system.md`; os relatórios dos PBIs de que este depende (001).
3. `pbis/pbi-005-audience-cards/pbi.md` e este arquivo (onde divergir do guia, vale o prompt).
4. No protótipo (`docs/prototipo/taciane-pilates-website-prototipo.html`, somente leitura), por `grep -n`: `id="para-quem"`, `.pilha`, `.cartao`, `.cartao:nth-child`, `.script`, `.tags`, `.num`, `@keyframes recua`, `@keyframes aproxima`.

# 1. Missão e escopo
Pasta do PBI: `pbis/pbi-005-audience-cards/`. Cria `sessao-execucao-005.md` e `relatorio-execucao-005.md`.
**Entrega:** A seção com três cartões — Gestantes, Mulheres e Em dupla — que se empilham ao rolar.
**Permitido:** `src/features/home/components/Audience/**`, `src/features/home/copy/audience.ts`, tokens novos, o slot `audience`.
**Proibido:** outros slots, JavaScript, `overflow: hidden` em qualquer ancestral dos cartões, dependências.
**NÃO é deste PBI:** as seções dos outros PBIs, deploy, push, PR, merge em `main`.

# 2. Estado de partida (confira, não presuma)
`Pill`, `Heading`, `Lead`, `Kicker`, `Reveal` e `siteConfig` existem. As fotos 04, 08 e 09 estão em `assets/web/`.
Confirme com `ls`, `git log --oneline` e leitura dos arquivos; se o estado diferir, registre a diferença na sessão.

# 3. Pré-requisitos BLOQUEANTES
G3 do guia + os PBIs 001 integrados em `feat/website`.

# 4. Mapa do código atual (protótipo)
Âncoras para localizar o trecho (nunca por número de linha): `id="para-quem"`, `.pilha`, `.cartao`, `.cartao:nth-child`, `.script`, `.tags`, `.num`, `@keyframes recua`, `@keyframes aproxima`. Copie textos, medidas, curvas, durações e atrasos **literais** do protótipo; valores definidos por `style="--x:..."` no HTML viram classes (`nth-child`) no `.module.css`.

# 5. Plano em blocos
**Bloco 0 — preparo.** Ramo `feat/website-pbi-005-audience-cards` a partir de `feat/website`; dependências; linha de base (`lint`, `tsc`, `check:style`, `build`); registro da sessão.
**Bloco 1 — fotos.** `foto-04`, `foto-08`, `foto-09` em `src/assets/photos/` (se ainda não estiverem). Commit.
**Bloco 2 — cartão.** `AudienceCard` (variantes por `nth-child`, não por prop de estilo). Commit.
**Bloco 3 — pilha e animações.** `sticky`, `recua`, `aproxima` em `@supports`; slot. Commit.
**Bloco V — provas.** (a) CDP: rolar e medir `top` dos 3 cartões (travam em 28, 54 e 80 px mais a área segura); (b) `recua` aplica escala .94 quando o cartão seguinte o cobre; (c) sem `overflow` quebrando o sticky (varredura dos ancestrais); (d) bounding boxes vs protótipo; (e) `build` estático.
**Bloco R/D.** Relatório e registro.
**Bloco Q — revisão** (G7) e fechamento (G8).

# 6. Regras invioláveis
Guia (G4): tokens de cor, CSS Modules, nunca CSS inline, animação só em CSS, zero JavaScript de aplicação, nomes em inglês, textos do protótipo literais, identidade da skill `identidade-pilates-taciane-martins`.

# 7. Decisões autônomas já tomadas
- Página única `/` com âncoras (DEC-01); protótipo congelado (DEC-02); zero JavaScript de aplicação (DEC-03); fotos de `assets/web` por `next/image` (DEC-04); fontes por `next/font` (DEC-05); logo provisório até o SVG oficial (DEC-06).

# 8. Pontos de risco que exigem teste
1. `overflow-x: hidden` em qualquer ancestral anula o `sticky`: só `clip`. 2. `gap: 32vh` + `padding-bottom: 8vh` da pilha define a distância de rolagem; copie igual. 3. Altura mínima `min(620px, 80svh)`: confira em 667 px de altura.

# 9. Checklist antes de fechar
G9 do guia + critérios CA-01 a CA-06 do `pbi.md` com prova registrada.

# 10. Condições de parada
G10 do guia. Específicas: a) o sticky não funcionar por causa de um ancestral do layout do PBI 001 (corrigir o layout é do 001: registre e PARE).

# 11. Encadeamento
Nenhum PBI inicia outro. Integração: G2.

# 12. Relatório final
`relatorio-execucao-005.md` (G11) com a tabela CA-01…CA-06 → prova, medições, DESVIOs e "Para o responsável confirmar".
