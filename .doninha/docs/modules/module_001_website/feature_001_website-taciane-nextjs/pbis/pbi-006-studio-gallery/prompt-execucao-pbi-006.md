Você é o executor autônomo do PBI 006 (Nosso espaço (galeria)) da feature "Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo", em `repos/taciane-pilates-website`. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `sessao-execucao-006.md` e siga. As ÚNICAS paradas são as do §10 e as do guia (G10). Todo texto e artefato em PT-BR; nomes no código em inglês.

# 0. Leitura obrigatória
1. `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/guia-execucao-comum.md`.
2. `repos/taciane-pilates-website/CLAUDE.md`; `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`; `docs/design-system/taciane-design-system.md`; os relatórios dos PBIs de que este depende (001).
3. `pbis/pbi-006-studio-gallery/pbi.md` e este arquivo (onde divergir do guia, vale o prompt).
4. No protótipo (`docs/prototipo/taciane-pilates-website-prototipo.html`, somente leitura), por `grep -n`: `id="espaco"`, `.galeria`, `.lb-r`, `.g-abre`, `.g-fechar`, `@keyframes lb-in`, `@keyframes lb-img`, `:root:has(.lb-r`.

# 1. Missão e escopo
Pasta do PBI: `pbis/pbi-006-studio-gallery/`. Cria `sessao-execucao-006.md` e `relatorio-execucao-006.md`.
**Entrega:** A galeria do estúdio: seis fotos que sobem ao passar o mouse e ampliam num visor, sem JavaScript.
**Permitido:** `src/features/home/components/Gallery/**`, `src/features/home/copy/gallery.ts`, tokens novos, o slot `space`.
**Proibido:** outros slots, JavaScript (nada de biblioteca de lightbox), dependências.
**NÃO é deste PBI:** as seções dos outros PBIs, deploy, push, PR, merge em `main`.

# 2. Estado de partida (confira, não presuma)
`Reveal`, `Heading`, `Kicker` existem. As fotos 03 e 10 a 14 estão em `assets/web/`. Em CSS puro o visor é feito com 7 rádios (`lb0` fechado, `lb1` a `lb6`).
Confirme com `ls`, `git log --oneline` e leitura dos arquivos; se o estado diferir, registre a diferença na sessão.

# 3. Pré-requisitos BLOQUEANTES
G3 do guia + os PBIs 001 integrados em `feat/website`.

# 4. Mapa do código atual (protótipo)
Âncoras para localizar o trecho (nunca por número de linha): `id="espaco"`, `.galeria`, `.lb-r`, `.g-abre`, `.g-fechar`, `@keyframes lb-in`, `@keyframes lb-img`, `:root:has(.lb-r`. Copie textos, medidas, curvas, durações e atrasos **literais** do protótipo; valores definidos por `style="--x:..."` no HTML viram classes (`nth-child`) no `.module.css`.

# 5. Plano em blocos
**Bloco 0 — preparo.** Ramo `feat/website-pbi-006-studio-gallery` a partir de `feat/website`; dependências; linha de base (`lint`, `tsc`, `check:style`, `build`); registro da sessão.
**Bloco 1 — fotos.** `foto-03`, `foto-10` a `foto-14` em `src/assets/photos/`. Commit.
**Bloco 2 — grade.** `Gallery` com 6 `figure`, hover e revelar. Commit.
**Bloco 3 — visor.** Rádios, labels, `:has()` por `nth-of-type`, animações `lb-in`/`lb-img`, bloqueio de rolagem do `:root`. Slot. Commit.
**Bloco V — provas.** (a) CDP: marcar `#lb3` ativa o visor da foto 3 (posição fixa, largura da janela); (b) `#lb0` fecha; (c) rolagem do `html` bloqueada com o visor aberto; (d) Tab chega aos rádios com anel de foco; (e) `next/image` serve AVIF/WebP e `sizes` coerente; (f) `build` estático.
**Bloco R/D.** Relatório e registro.
**Bloco Q — revisão** (G7) e fechamento (G8).

# 6. Regras invioláveis
Guia (G4): tokens de cor, CSS Modules, nunca CSS inline, animação só em CSS, zero JavaScript de aplicação, nomes em inglês, textos do protótipo literais, identidade da skill `identidade-pilates-taciane-martins`.

# 7. Decisões autônomas já tomadas
- Página única `/` com âncoras (DEC-01); protótipo congelado (DEC-02); zero JavaScript de aplicação (DEC-03); fotos de `assets/web` por `next/image` (DEC-04); fontes por `next/font` (DEC-05); logo provisório até o SVG oficial (DEC-06).

# 8. Pontos de risco que exigem teste
1. Seletor `:has(#lbN:checked) > .foto:nth-of-type(N)` é longo: gere por classe em vez de repetir 6 vezes à mão. 2. Foto ampliada no visor usa `object-fit: contain`; confira em 390 px. 3. `next/image` com `fill` precisa de contêiner posicionado.

# 9. Checklist antes de fechar
G9 do guia + critérios CA-01 a CA-05 do `pbi.md` com prova registrada.

# 10. Condições de parada
G10 do guia. Específicas: a) o visor exigir JavaScript para funcionar em Safari (registre o navegador e PARE antes de usar JS).

# 11. Encadeamento
Nenhum PBI inicia outro. Integração: G2.

# 12. Relatório final
`relatorio-execucao-006.md` (G11) com a tabela CA-01…CA-05 → prova, medições, DESVIOs e "Para o responsável confirmar".
