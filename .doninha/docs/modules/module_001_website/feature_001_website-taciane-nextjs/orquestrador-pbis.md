# Orquestrador da feature "Website do Estúdio de Pilates Taciane Martins em Next.js" (9 PBIs)

## Como disparar (cole isto numa sessão NOVA do Claude Code aberta em `/Users/ikaroteste/Desktop/taci-pilates-website`)

```
Você é o orquestrador autônomo da feature "Website do Estúdio de Pilates Taciane Martins em Next.js". Execução SEM supervisão: não me faça perguntas. Leia inteiro e execute `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/orquestrador-pbis.md`. Siga-o até o fim, em ordem, e só pare nas condições de parada dele. No final me entregue o resumo do §9.
```

Se a sessão cair, abra outra e cole o mesmo texto: o orquestrador retoma de `orquestrador-estado.md`.

---

Você é o **orquestrador autônomo** dos 9 PBIs da feature `website-taciane-nextjs`. **Execução SEM supervisão**: o responsável NÃO está presente e vai ler só o resumo final. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `orquestrador-estado.md` e siga. As ÚNICAS paradas são as do §8. Todo texto e artefato em PT-BR.

Seu trabalho é **coordenar**: preparar ambientes, disparar cada PBI como subagente com o prompt dele, verificar o resultado, integrar no ramo `feat/website` e liberar a onda seguinte. Você **não implementa** PBI nenhum, exceto para destravar uma integração (§4, conflitos triviais).

## 0. Constantes

| Nome | Valor |
| --- | --- |
| `WS` | `/Users/ikaroteste/Desktop/taci-pilates-website` (workspace principal, repositório git, ramo `main`) |
| `WT` | `/Users/ikaroteste/Desktop/taci-pilates-wt` (pasta dos worktrees, fora do repositório) |
| `FEATURE` | `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs` (relativo à raiz de qualquer worktree) |
| `APP` | `repos/taciane-pilates-website` |
| Ramo de integração | `feat/website` |
| Ramo de cada PBI | `feat/website-pbi-NNN-<slug>` |
| `MAX_PARALLEL` | **3** (cada PBI roda `next build` e um servidor) |
| Estado | `FEATURE/orquestrador-estado.md` (você mantém) |

Leia, nesta ordem: `FEATURE/guia-execucao-comum.md`, `FEATURE/feature.md`, `FEATURE/pbis.md`, `FEATURE/decisions.md` e este arquivo. Os prompts estão em `FEATURE/pbis/pbi-NNN-<slug>/prompt-execucao-pbi-NNN.md`.

## 1. Pré-voo (se `orquestrador-estado.md` já tiver PBIs `integrated`, vá direto ao §3 retomando)

1. `cd /Users/ikaroteste/Desktop/taci-pilates-website`. `git branch --show-current` deve ser `main` ou `feat/website`. Outro ramo → PARE (§8-a).
2. `git status --short` deve estar vazio. Qualquer arquivo modificado ou não rastreado → PARE (§8-b).
3. Confira: `ls "/Applications/Google Chrome.app"`; `node -v` (v24); `ls repos/taciane-pilates-website/node_modules/.bin/next` (senão `npm ci --fetch-timeout=600000 --fetch-retries=5` no `APP`); `ls assets/web | grep -c webp` (15 mais o `README.md`); `ls .claude/skills/identidade-pilates-taciane-martins/SKILL.md`; o protótipo existe e **não** tem alterações (`git diff HEAD -- docs/prototipo` vazio). Falta algo → PARE.
4. Se `feat/website` não existir: `git switch -c feat/website`; se existir, `git switch feat/website`.
5. Grave o hash do protótipo (`git log -1 --format=%h -- docs/prototipo/taciane-pilates-website-prototipo.html`) no campo "Protótipo" de `orquestrador-estado.md`.
6. `mkdir -p /Users/ikaroteste/Desktop/taci-pilates-wt`. Confirme que `FEATURE/orquestrador-estado.md` lista os 9 PBIs `pending` e commite o que mudar.

## 2. Grafo e ondas

| Onda | PBIs | Depende de |
| --- | --- | --- |
| 1 | 001 foundation-layout-nav | — |
| 2 | 002 theme-light-dark · 003 home-hero-curve · 004 about-taciane | 001 |
| 3 | 005 audience-cards · 006 studio-gallery · 007 first-class-group | 001 |
| 4 | 008 faq-final-cta | 001, 004 (o selo) |
| 5 | 009 final-polish | 001 a 008 |

Regra: um PBI só é lançado quando **todas** as suas dependências estão `integrated`. Dentro de uma onda, lance até `MAX_PARALLEL` ao mesmo tempo. Um PBI `stopped` bloqueia só os que dependem dele; os independentes continuam. O 003 e o 004 criam componentes parecidos (`Pill`, `Heading`, `Lead`, `Kicker`): o primeiro a integrar vence, o outro ajusta os imports no merge (conflito trivial).

## 3. Ciclo de cada PBI

Para cada PBI liberado (`NNN`, `slug`):

**3.1 Criar o worktree** (a partir da ponta atual de `feat/website`):
```bash
cd /Users/ikaroteste/Desktop/taci-pilates-website
git worktree add /Users/ikaroteste/Desktop/taci-pilates-wt/pbi-NNN -b feat/website-pbi-NNN-<slug> feat/website
cp -Rc repos/taciane-pilates-website/node_modules /Users/ikaroteste/Desktop/taci-pilates-wt/pbi-NNN/repos/taciane-pilates-website/node_modules
```
Se `cp -Rc` falhar, `cp -R`. Confirme `npx next --version` no worktree.

**3.2 Lançar o subagente** com a ferramenta `Agent` (`subagent_type: general-purpose`, **sem** `isolation`, pois o worktree já existe). Lance todos os PBIs da vaga **na mesma mensagem**. Prompt do subagente (substitua `NNN`, `<slug>`):

```
Você é o executor autônomo do PBI NNN da feature "Website do Estúdio de Pilates Taciane Martins em Next.js". Execução SEM supervisão: não faça perguntas.

ROOT=/Users/ikaroteste/Desktop/taci-pilates-wt/pbi-NNN   (seu worktree; ramo feat/website-pbi-NNN-<slug>; já criado)
WS_MAIN=/Users/ikaroteste/Desktop/taci-pilates-website   (só para ler node_modules; NUNCA edite nada ali)
INTEGRACAO=orquestrador

1. cd "$ROOT" e trabalhe SOMENTE ali (use caminhos absolutos sob ROOT nas ferramentas Read/Write/Edit).
2. Leia e execute integralmente `ROOT/.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/pbis/pbi-NNN-<slug>/prompt-execucao-pbi-NNN.md` (ele manda ler o guia comum).
3. Sobrescritas do modo orquestrador (valem sobre o guia e o prompt):
   - NÃO faça merge, NÃO mexa em `main` nem em `feat/website`.
   - NÃO edite `FEATURE/status.yml`, `FEATURE/orquestrador-estado.md`, `CLAUDE.md`. Se o prompt mandar documentar algo no `CLAUDE.md`, escreva o texto em `FEATURE/pbis/pbi-NNN-<slug>/claude-md-NNN.txt` (uma ou poucas linhas) para o orquestrador aplicar. (README: só o PBI 009 pode editá-lo.)
   - Porta do servidor de teste: 3000 + NNN.
   - Você não pode criar subagentes: faça os passes de revisão do guia G7 você mesmo e diga isso no relatório.
4. Ao terminar (ou parar), sua ÚLTIMA mensagem deve ter exatamente: `STATUS: OK` ou `STATUS: PARADA`; `RELATORIO: <caminho>`; `COMMITS: <quantidade>`; `RESUMO:` até 10 linhas; se PARADA, a condição de parada e o estado exato.
```

**3.3 Esperar** as notificações de conclusão dos subagentes (não faça polling).

**3.4 Verificar o resultado** de cada PBI concluído (no worktree dele):
1. `STATUS: OK` e o relatório `relatorio-execucao-NNN.md` existe e confirma que os PBIs seguintes não foram iniciados. `PARADA` → marque `stopped` (§7), guarde o motivo, **não integre**.
2. `git -C <worktree> status --short` vazio e `git log feat/website..HEAD --oneline` com commits.
3. No worktree: `cd repos/taciane-pilates-website && npm run lint && npx tsc --noEmit && npm run check:style && npm run build`. Falha → mande **uma** correção ao mesmo subagente (`SendMessage` se disponível; senão relance com a falha anexada); falhou de novo → `stopped`.
4. No relatório: tabela CA → prova completa; `DESVIO-NN` listados; nenhuma dependência nova (`git diff feat/website..HEAD -- repos/taciane-pilates-website/package.json` vazio); nenhum `'use client'` novo; `check:style` verde.

## 4. Integração (uma de cada vez, em série, no `WS`)

```bash
cd /Users/ikaroteste/Desktop/taci-pilates-website
git switch feat/website
git merge --no-ff feat/website-pbi-NNN-<slug> -m "merge(website): PBI NNN <título curto>"
```
- **Conflito trivial** (resolva e siga): linhas de `slot` em `HomePage` (mantenha as duas), imports/exports duplicados, fotos e `photos/index.ts` iguais, tokens CSS acrescentados nos mesmos blocos (mantenha todos, sem duplicar nome; mesmo nome com valores diferentes → não trivial), componentes homônimos de `src/components` (mantenha o mais completo e ajuste imports).
- **Conflito não trivial**: `git merge --abort`, marque o PBI `stopped` com a lista de arquivos em conflito (§8-d).
- Aplique `claude-md-NNN.txt` (se existir) ao `repos/taciane-pilates-website/CLAUDE.md` (seção "Estrutura") e commite à parte: `docs(website): contratos do PBI NNN no CLAUDE.md`.
- Atualize `FEATURE/status.yml` (`desenvolver: done`) e `orquestrador-estado.md`; commit `chore(website): estado do orquestrador após PBI NNN`.
- Verificação pós-merge, em `WS`: `cd repos/taciane-pilates-website && npm run lint && npx tsc --noEmit && npm run check:style && npm run build`. Falhou por causa do merge: `git revert -m 1 HEAD --no-edit`, marque `stopped` com o erro e **bloqueie** os dependentes. Passou: `integrated`.
- Remova o worktree integrado: `git worktree remove /Users/ikaroteste/Desktop/taci-pilates-wt/pbi-NNN` (o ramo fica).
- Se vários PBIs terminarem juntos, integre na ordem numérica.

## 5. Laço principal

1. Calcule os PBIs liberados (dependências `integrated`, estado `pending`).
2. Lance até `MAX_PARALLEL` (§3.1 e §3.2) e espere (§3.3).
3. A cada conclusão: verifique (§3.4), integre (§4), atualize o estado e recalcule os liberados.
4. Repita até não restar PBI `pending` liberável e nenhum `running`.

## 6. Fechamento da feature (depois que todos os possíveis estiverem integrados)

1. Em `WS`, no `feat/website`: `lint`, `tsc`, `check:style` e `build` verdes; `/` estático.
2. Capturas finais (1440/820/390, claro/escuro) numa pasta temporária; confirme paridade com o protótipo e liste os `DESVIO-NN` de todos os relatórios.
3. Aplique o que o relatório do PBI 009 pedir ao `README.md`.
4. **Não faça merge em `main`, push, PR nem deploy**: isso é do responsável.

## 7. Formato de `orquestrador-estado.md`

```
# Estado do orquestrador
Atualizado: AAAA-MM-DD · Ramo de integração: feat/website · Protótipo: <hash>

| PBI | Onda | Estado | Ramo | Relatório | Integrado em | Observação |
|---|---|---|---|---|---|---|
| 001 | 1 | pending|running|done|integrated|stopped | feat/website-pbi-001-foundation-layout-nav | pbis/.../relatorio-execucao-001.md | <hash do merge> | DESVIO-NN, notas |

## Decisões autônomas
- AAAA-MM-DD · <decisão> · porque <motivo>

## Paradas
- AAAA-MM-DD · PBI NNN · <condição> · <estado exato>
```

## 8. Condições de parada do orquestrador (PARE, escreva o estado exato, não lance mais PBIs; PBIs `running` terminam sozinhos)

a) Ramo inesperado no pré-voo. b) Árvore suja no pré-voo. c) Faltam Chrome, Node 24, `node_modules` ou as fotos. d) Conflito de merge não trivial. e) Dois PBIs seguidos `stopped` pela mesma causa. f) `build` do `feat/website` vermelho após revert. g) O protótipo mudou desde o pré-voo. h) Seria preciso decisão de produto (ex.: logo oficial, autorização de imagem) para seguir — registre e continue com o que for independente.

## 9. Resumo final para o responsável (sua última mensagem)

Tabela dos 9 PBIs (estado e commit de integração), `DESVIO-NN` consolidados, decisões autônomas, paradas, medições (JS da rota `/`, peso das imagens servidas), e **"Para o responsável confirmar"**: logo oficial em SVG, autorização de imagem das alunas, domínio do site e o texto final de cada seção. Diga que nada foi enviado a `main`, ao GitHub nem à hospedagem.
