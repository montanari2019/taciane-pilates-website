Você é o executor autônomo do PBI 008 (Dúvidas e chamada final) da feature "Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo", em `repos/taciane-pilates-website`. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `sessao-execucao-008.md` e siga. As ÚNICAS paradas são as do §10 e as do guia (G10). Todo texto e artefato em PT-BR; nomes no código em inglês.

# 0. Leitura obrigatória
1. `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/guia-execucao-comum.md`.
2. `repos/taciane-pilates-website/CLAUDE.md`; `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`; `docs/design-system/taciane-design-system.md`; os relatórios dos PBIs de que este depende (001, 004).
3. `pbis/pbi-008-faq-final-cta/pbi.md` e este arquivo (onde divergir do guia, vale o prompt).
4. No protótipo (`docs/prototipo/taciane-pilates-website-prototipo.html`, somente leitura), por `grep -n`: `id="duvidas"`, `.faq-grid`, `.faq-item`, `@keyframes abre`, `interpolate-size`, `::details-content`, `id="agendar"`, `.cta-card`, `.btn.creme`, `.glass.on-color`.

# 1. Missão e escopo
Pasta do PBI: `pbis/pbi-008-faq-final-cta/`. Cria `sessao-execucao-008.md` e `relatorio-execucao-008.md`.
**Entrega:** A seção de dúvidas frequentes e o cartão final "Pilates é vida em movimento." com os botões do WhatsApp e do Instagram.
**Permitido:** `src/features/home/components/{Faq,FinalCta}/**`, `src/features/home/copy/{faq,final-cta}.ts`, tokens novos, os slots `faq` e `final-cta`.
**Proibido:** outros slots, JavaScript, dependências.
**NÃO é deste PBI:** as seções dos outros PBIs, deploy, push, PR, merge em `main`.

# 2. Estado de partida (confira, não presuma)
`Seal`, `Button`, `Heading`, `Kicker`, `Reveal` e `siteConfig` existem. O botão de vidro sobre cor usa `--glass-tint` próprio (`.glass.on-color`).
Confirme com `ls`, `git log --oneline` e leitura dos arquivos; se o estado diferir, registre a diferença na sessão.

# 3. Pré-requisitos BLOQUEANTES
G3 do guia + os PBIs 001, 004 integrados em `feat/website`.

# 4. Mapa do código atual (protótipo)
Âncoras para localizar o trecho (nunca por número de linha): `id="duvidas"`, `.faq-grid`, `.faq-item`, `@keyframes abre`, `interpolate-size`, `::details-content`, `id="agendar"`, `.cta-card`, `.btn.creme`, `.glass.on-color`. Copie textos, medidas, curvas, durações e atrasos **literais** do protótipo; valores definidos por `style="--x:..."` no HTML viram classes (`nth-child`) no `.module.css`.

# 5. Plano em blocos
**Bloco 0 — preparo.** Ramo `feat/website-pbi-008-faq-final-cta` a partir de `feat/website`; dependências; linha de base (`lint`, `tsc`, `check:style`, `build`); registro da sessão.
**Bloco 1 — FAQ.** `Faq` com `details` nativo, ícone e animação de altura (`::details-content` + `interpolate-size` em `@supports`, com abertura sem animação como alternativa). Commit.
**Bloco 2 — chamada final.** `FinalCta` com grafismo, círculos, `Seal` e botões. Slots. Commit.
**Bloco V — provas.** (a) abrir uma pergunta fecha a outra (CDP lê `open`); (b) altura da resposta anima quando há suporte; (c) links do cartão final vêm de `siteConfig`; (d) textos literais (diff contra o protótipo); (e) `build` estático.
**Bloco R/D.** Relatório e registro.
**Bloco Q — revisão** (G7) e fechamento (G8).

# 6. Regras invioláveis
Guia (G4): tokens de cor, CSS Modules, nunca CSS inline, animação só em CSS, zero JavaScript de aplicação, nomes em inglês, textos do protótipo literais, identidade da skill `identidade-pilates-taciane-martins`.

# 7. Decisões autônomas já tomadas
- Página única `/` com âncoras (DEC-01); protótipo congelado (DEC-02); zero JavaScript de aplicação (DEC-03); fotos de `assets/web` por `next/image` (DEC-04); fontes por `next/font` (DEC-05); logo provisório até o SVG oficial (DEC-06).

# 8. Pontos de risco que exigem teste
1. `details name` (acordeão exclusivo) e `::details-content` com `content-visibility` discreto são recentes: confirme no Safari e registre se não houver suporte (a pergunta deve abrir e fechar mesmo sem a animação de altura). 2. `interpolate-size: allow-keywords` fica no `:root` (já está nos tokens do protótipo). 3. O selo da chamada final precisa de `id` de caminho diferente do selo de Sobre.

# 9. Checklist antes de fechar
G9 do guia + critérios CA-01 a CA-05 do `pbi.md` com prova registrada.

# 10. Condições de parada
G10 do guia. Específicas: a) o `Seal` do PBI 004 não está integrado.

# 11. Encadeamento
Nenhum PBI inicia outro. Integração: G2.

# 12. Relatório final
`relatorio-execucao-008.md` (G11) com a tabela CA-01…CA-05 → prova, medições, DESVIOs e "Para o responsável confirmar".
