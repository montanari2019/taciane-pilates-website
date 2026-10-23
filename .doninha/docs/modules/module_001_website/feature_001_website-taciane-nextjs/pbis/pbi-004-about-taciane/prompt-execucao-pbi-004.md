Você é o executor autônomo do PBI 004 (Sobre a Taciane) da feature "Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo", em `repos/taciane-pilates-website`. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `sessao-execucao-004.md` e siga. As ÚNICAS paradas são as do §10 e as do guia (G10). Todo texto e artefato em PT-BR; nomes no código em inglês.

# 0. Leitura obrigatória
1. `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/guia-execucao-comum.md`.
2. `repos/taciane-pilates-website/CLAUDE.md`; `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`; `docs/design-system/taciane-design-system.md`; os relatórios dos PBIs de que este depende (001).
3. `pbis/pbi-004-about-taciane/pbi.md` e este arquivo (onde divergir do guia, vale o prompt).
4. No protótipo (`docs/prototipo/taciane-pilates-website-prototipo.html`, somente leitura), por `grep -n`: `id="sobre"`, `.sobre-grid`, `.sobre-foto`, `.selo`, `@keyframes gira`, `.citacao`, `.atributos`.

# 1. Missão e escopo
Pasta do PBI: `pbis/pbi-004-about-taciane/`. Cria `sessao-execucao-004.md` e `relatorio-execucao-004.md`.
**Entrega:** A seção que apresenta a fisioterapeuta: foto em arco, selo que gira, texto, citação e os seis atributos da marca.
**Permitido:** `src/features/home/components/About/**`, `src/features/home/copy/about.ts`, `src/components/Seal/**` (selo reutilizado pelo PBI 008), tokens novos, o slot `about`.
**Proibido:** outros slots, JavaScript, dependências.
**NÃO é deste PBI:** as seções dos outros PBIs, deploy, push, PR, merge em `main`.

# 2. Estado de partida (confira, não presuma)
`Pill`, `Heading`, `Lead`, `Kicker` existem (PBI 003) ou ficam em `src/components/`; confira antes de criar. Se o PBI 003 ainda não foi integrado, crie com os mesmos nomes de arquivo e deixe o merge trivial.
Confirme com `ls`, `git log --oneline` e leitura dos arquivos; se o estado diferir, registre a diferença na sessão.

# 3. Pré-requisitos BLOQUEANTES
G3 do guia + os PBIs 001 integrados em `feat/website`.

# 4. Mapa do código atual (protótipo)
Âncoras para localizar o trecho (nunca por número de linha): `id="sobre"`, `.sobre-grid`, `.sobre-foto`, `.selo`, `@keyframes gira`, `.citacao`, `.atributos`. Copie textos, medidas, curvas, durações e atrasos **literais** do protótipo; valores definidos por `style="--x:..."` no HTML viram classes (`nth-child`) no `.module.css`.

# 5. Plano em blocos
**Bloco 0 — preparo.** Ramo `feat/website-pbi-004-about-taciane` a partir de `feat/website`; dependências; linha de base (`lint`, `tsc`, `check:style`, `build`); registro da sessão.
**Bloco 1 — Seal.** Componente do selo (texto em círculo via `textPath`, `gira`, símbolo `i-logo` ou `i-grafismo` por prop). Commit.
**Bloco 2 — foto e círculos.** `foto-07` em arco. Commit.
**Bloco 3 — texto, citação, atributos; slot.** Commit.
**Bloco V — provas.** (a) selo gira (ângulo do `transform` muda em 1 s); (b) bounding boxes vs protótipo em 1440/820/390; (c) âncora `#sobre` e link do menu; (d) `build` estático.
**Bloco R/D.** Relatório e registro.
**Bloco Q — revisão** (G7) e fechamento (G8).

# 6. Regras invioláveis
Guia (G4): tokens de cor, CSS Modules, nunca CSS inline, animação só em CSS, zero JavaScript de aplicação, nomes em inglês, textos do protótipo literais, identidade da skill `identidade-pilates-taciane-martins`.

# 7. Decisões autônomas já tomadas
- Página única `/` com âncoras (DEC-01); protótipo congelado (DEC-02); zero JavaScript de aplicação (DEC-03); fotos de `assets/web` por `next/image` (DEC-04); fontes por `next/font` (DEC-05); logo provisório até o SVG oficial (DEC-06).

# 8. Pontos de risco que exigem teste
1. `textPath` com `href` (não `xlink:href`) em SVG inline do React: use `href`. 2. Dois selos na página (Sobre e Chamada final) precisam de `id` de caminho distintos (`selo-c`, `selo-c2`).

# 9. Checklist antes de fechar
G9 do guia + critérios CA-01 a CA-05 do `pbi.md` com prova registrada.

# 10. Condições de parada
G10 do guia. Específicas: a) o PBI 003 trouxe um componente com o mesmo nome e assinatura diferente (resolver pelo nome mais antigo e registrar).

# 11. Encadeamento
Nenhum PBI inicia outro. Integração: G2.

# 12. Relatório final
`relatorio-execucao-004.md` (G11) com a tabela CA-01…CA-05 → prova, medições, DESVIOs e "Para o responsável confirmar".
