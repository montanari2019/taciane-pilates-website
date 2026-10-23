# Guia comum de execução dos PBIs — Website do Estúdio de Pilates Taciane Martins (Next.js)

Este guia vale para os 9 prompts `pbis/pbi-NNN-*/prompt-execucao-pbi-NNN.md`. Cada prompt diz "leia este guia inteiro; o prompt só acrescenta o específico; onde divergir, vale o prompt". Todo texto e artefato em PT-BR; todo nome no código (pastas, arquivos, componentes, rotas, variáveis) em inglês.

Execução sem supervisão: não faça perguntas. Escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" no registro da sessão e siga. As únicas paradas são as do §10 (do prompt e do guia).

---

## G1. Caminhos (todos relativos a `ROOT`, a raiz do worktree/repositório git em que você trabalha)

| Nome | Caminho |
| --- | --- |
| `APP` | `repos/taciane-pilates-website` (Next 16.4.2, React 19.3.0, TypeScript estrito, alias `~/*` → `src/*`) |
| `FEATURE` | `.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs` |
| `PROTO` | `docs/prototipo/taciane-pilates-website-prototipo.html` (congelado; **somente leitura**) |
| `PHOTOS_SRC` | `assets/web` (15 WebP 800 px, `foto-01` a `foto-15`; mapa de alt em `assets/web/README.md`) |
| `WS_MAIN` | `/Users/ikaroteste/Desktop/taci-pilates-website` (workspace principal; só ele tem `node_modules`) |
| Regras do app | `repos/taciane-pilates-website/CLAUDE.md` (leia inteiro) |
| Identidade | `.claude/skills/identidade-pilates-taciane-martins/SKILL.md` (a marca vence o Instagram; o protótipo é a spec do site) |
| Design system | `docs/design-system/taciane-design-system.md` (consulta) |

O número das linhas do protótipo muda: localize trechos por `grep -n` em âncoras (comentários `<!-- ===== HERO =====`, nomes de classe, `@keyframes`), nunca por número de linha. O protótipo tem fotos em `data:` URI: use `grep -n` com `cut -c1-200` para não despejar 2 MB no terminal.

## G2. Ambiente, branches e worktrees

- Node v24, npm 11, macOS (zsh). `npm install` pode dar timeout de rede: use `npm ci --fetch-timeout=600000 --fetch-retries=5`. Em worktree novo, copie as dependências do `WS_MAIN`: `cp -Rc "$WS_MAIN/repos/taciane-pilates-website/node_modules" repos/taciane-pilates-website/node_modules` e confira com `npx next --version`.
- Ramo de integração: `feat/website`. Ramo do PBI: `feat/website-pbi-NNN-<slug>`, criado a partir de `feat/website`. **Nunca** commite em `main`, nunca faça push, PR ou deploy.
- Modo de integração (`INTEGRACAO=` diz): `orquestrador` → deixe o ramo pronto e NÃO faça merge. `propria` (padrão) → ao fechar tudo, `git merge --no-ff` do ramo do PBI em `feat/website` e rode o build ali.
- Commits atômicos (um assunto por commit), mensagem em PT-BR no estilo `feat(website): …`, `fix(website): …`. Nunca `--no-verify`.
- Porta do servidor: `3000 + NNN`. `npx next start -p <porta>` depois do build; encerre o servidor ao terminar.
- Evidências (capturas, medições) em `mktemp -d`, fora do repositório.

## G3. Pré-requisitos bloqueantes comuns (se falhar, PARE sem alterar código)

1. `git rev-parse --show-toplevel` é o `ROOT` esperado e `git branch --show-current` é o ramo do PBI (crie-o se o prompt mandar).
2. `git status --short` limpo (exceto o que o prompt lista como esperado).
3. Existem `pbi.md`, este guia, `feature.md` e `pbis.md`.
4. Os PBIs de que o seu depende estão **integrados** em `feat/website` (`git log feat/website --oneline` e os arquivos que o prompt cita no §2).
5. `cd repos/taciane-pilates-website && npm run lint && npx tsc --noEmit && npm run check:style && npm run build` passam **antes** de você mexer. Já vermelho por causa que não é sua → PARE.
6. `PROTO` existe e `git diff feat/website -- docs/prototipo/taciane-pilates-website-prototipo.html` é vazio. Qualquer mudança no protótipo depois do pré-voo → registre e PARE (RN-08).

## G4. Regras invioláveis (valem para todos os PBIs)

**Fidelidade (RN-08).** O resultado fica igual ao protótipo em visual e animação: mesmas medidas, curvas, durações, atrasos, textos (copiados literais), ícones e comportamento. Divergência necessária (Next/React, tokens, desempenho) vira `DESVIO-NN` no relatório, com motivo. Nunca "melhore" o design.

**Identidade (RN-04).** Paleta, fontes e formas vêm da skill de identidade e dos tokens. Nunca recolorir o logo nem usar cor fora da paleta; laranja só em pontos pequenos; `--rosa-campanha` só em campanha sazonal (não há nenhuma no protótipo). Texto na voz da marca (RN-10); sem emoji nos textos do protótipo.

**Estilo (regras de `CLAUDE.md`).**
1. Toda cor vem de `src/theme/colors.css`. Nenhuma cor literal (`#fff`, `rgb()`, `rgba()`, `hsl()`, nomes como `white`) em `.module.css`, `globals.css` ou TSX. Cor que o protótipo usa sem token (ex.: `rgba(122,78,58,.55)` das sombras, `rgba(20,16,14,.9)` do visor) vira token novo, nos dois temas (`:root`, o bloco `prefers-color-scheme: dark` e o bloco `data-theme="dark"`/`:has(#t-escuro:checked)`), com nome semântico (`--shadow-lift`, `--lightbox-bg`…) e a origem no comentário.
2. Medidas recorrentes (espaço, raio, fonte, duração, curva, layout) vêm de `src/theme/structure.css`; medida única de um componente pode ficar no `.module.css`.
3. `src/app/globals.css`: só importa tokens, reset e base de elementos. Mecanismos globais vão em arquivo próprio em `src/theme/`.
4. Toda página e todo componente tem o seu `styles.module.css` ao lado (`page.module.css` nas rotas). Só `var(--token)`.
5. **CSS nunca inline.** Proibido: `style={{}}`, `style.cssText`, `element.style.*`, `setProperty`, `<style>` em TSX. O ESLint bloqueia a prop `style`; o `check:style` bloqueia o resto. O protótipo usa `style="--i:0"`, `--d:.08s`, `--h`, `--z`, `--dl`: no site viram classes ou `:nth-child` no `.module.css`.
6. **Animação só em CSS e zero JavaScript de aplicação (DEC-03).** `@keyframes`, `transition`, `animation-timeline: view()/scroll()` (sempre em `@supports`, com estado final aceitável quando ausente), SVG `<animate>`. Proibido `'use client'`, `useEffect`, `requestAnimationFrame`, `setInterval`, WAAPI (`.animate(`). Exceção só com `DESVIO-NN` aprovado no relatório. Menu = `:target`; tema e visor de fotos = rádios + `:has()`; dúvidas = `<details name>`.
7. Valores "aleatórios" ou escalonados do protótipo viram tabelas fixas em CSS (`:nth-child`), nunca `Math.random()`.
8. Tipos de props com sufixo `PropsType`; defaults na desestruturação; um componente por pasta com `index.tsx` + `styles.module.css`; imports de `src/` sempre por `~/`; prefira `Container` a `div` crua quando fizer sentido. Sem `any`.

**Estrutura.** `src/components` (biblioteca reutilizável), `src/layouts`, `src/config`, `src/utils`, `src/assets`, `src/features/home/{pages,components,copy,utils}`. Procure em `src/components` antes de criar. A rota `src/app/page.tsx` só **compõe** `features/home/pages/HomePage`; nenhuma página concentra o conteúdo inteiro.

**Contratos entre PBIs** (nomes fixos; quem criar o seam respeita estes nomes):
- `src/config/site.ts` → `siteConfig` (PBI 001): `studioName`, `tagline`, `address`, `crefito`, `whatsappUrl`, `instagramUrl`, `facebookUrl`, `siteUrl`. Lê `Environment`; nenhuma seção escreve esses valores.
- Sprite de ícones (PBI 001): `IconSprite` com símbolos `i-logo`, `i-grafismo`, `i-home`, `i-leaf`, `i-pin`, `i-chat`, `i-plus`, `i-sun`, `i-moon`, `i-insta`, `i-mat` e `Icon name`. O logo fica só em `i-logo`/`i-grafismo` (troca única pelo SVG oficial).
- `Reveal` (PBI 001): `src/components/Reveal`, classe de revelar por `animation-timeline: view()` em `@supports`; `delay` em passos fixos por classe; sem suporte, o conteúdo aparece.
- Home (`src/features/home/pages/HomePage`) tem **slots** por comentário na ordem do protótipo: `{/* slot:hero */}`, `slot:curve`, `slot:about`, `slot:audience`, `slot:space`, `slot:first-class`, `slot:group`, `slot:faq`, `slot:final-cta`. Cada PBI troca só o seu (uma linha de import + uma de JSX).
- Fotos (PBIs 003 a 008): `src/assets/photos/foto-NN.webp` (import estático) e `src/assets/photos/index.ts` com o mapa e os textos alternativos de `assets/web/README.md`. Quem precisa de uma foto que ainda não está no app copia só a dela; dois PBIs criando o mesmo arquivo com o mesmo conteúdo não conflitam.
- Selo giratório (PBI 004): `src/components/Seal`, reutilizado pelo PBI 008 (id do caminho distinto por instância).
- Âncoras: `#inicio`, `#sobre`, `#para-quem`, `#espaco`, `#primeira-aula`, `#turma`, `#duvidas`, `#agendar`.

**Desempenho.**
1. A rota `/` é **estática** (SSG): `next build` a lista como `○ (Static)`. Proibido `cookies()`, `headers()`, `searchParams`, `dynamic = 'force-dynamic'`, rotas de API e `fetch` em tempo de execução.
2. Server Components em tudo. Nada de biblioteca nova: **sem dependências novas**.
3. Animação CSS só em `transform`, `opacity` (e `clip-path`/`filter`/`translate`/`scale` onde o protótipo já usa); `will-change` só durante a animação (nos arcos do Hero ele borra as fotos); nada de animar `top/left/width/height`. Exceções do protótipo: largura da cápsula e `block-size` das dúvidas.
4. Fotos **sempre** por `next/image` com import estático (largura e altura vêm junto), `sizes` honestos, `priority` só na foto do LCP, `loading="lazy"` no resto. `images.formats: ['image/avif','image/webp']` já está no `next.config.ts`.
5. Fontes só por `next/font` em `app/layout.tsx`; proibido `<link>` para Google Fonts e qualquer domínio externo.
6. Trocar o tema = mudar o estado de um rádio; nunca re-renderizar a árvore.
7. Eventos de rolagem inexistentes (zero JS). Se um dia houver, `{ passive: true }`.

**Privacidade do site (RN-03).** Zero cookies, zero analytics, zero anúncios, zero requisição a terceiros, zero armazenamento local.

**Escopo.** Você só edita o que o prompt lista como permitido. Nunca edite `PROTO`, `docs/design-system`, `assets/` originais, `.claude/`, nem arquivos de outro PBI além dos seams acima. Teste ou componente de outro PBI quebrado por sua mudança = PARE.

## G5. Verificação (comandos)

A partir de `repos/taciane-pilates-website`:
- `npm run lint` e `npx tsc --noEmit` (zero erros e zero warnings novos; o `tsc` precisa de um `next build` antes, que gera `LayoutProps`).
- `npm run check:style` (falha em cor literal fora de `src/theme`, `style=`/`style.cssText`/`.style.`/`setProperty`/`<style` em TS/TSX, `.animate(`, `requestAnimationFrame`, `any` e CSS fora de módulos).
- `npm run build` e leia a tabela de rotas e de tamanhos.
- Navegador real: Chrome headless em `/Applications/Google Chrome.app` via CDP (sem Playwright, Puppeteer ou Lighthouse: não há dependência nova). Escreva o script mínimo em pasta temporária se o repositório ainda não tiver um, emulando largura, tema (`Emulation.setEmulatedMedia`: `prefers-color-scheme`, `prefers-reduced-motion`, `prefers-reduced-transparency`, `prefers-contrast`), navegando, executando JS de leitura e salvando PNG.
- Larguras de verificação: 1440, 820 e 390 px; temas claro e escuro.

## G6. Ciclo por bloco

Para cada bloco do §5 do prompt: (1) registre a linha de base do trecho (como o protótipo se comporta: medidas, tempos) lendo o protótipo; (2) implemente; (3) prove com navegador/CDP e com comando; (4) commit atômico; (5) uma linha no registro da sessão. Se a prova mostrar diferença do protótipo, corrija antes de seguir.

## G7. Revisão em passes (Bloco Q)

Faça 3 passes sobre o diff do PBI, na ordem: (a) **conformidade**: cada CA-NN do `pbi.md` tem prova e item no checklist; (b) **correção e segurança**: ausência de `window` no servidor, links externos com `rel="noopener"`, nenhuma requisição externa, `alt` e `aria-label` presentes; (c) **design e estilo**: tokens, CSS Modules, nomes em inglês, tamanho dos arquivos (componente ≤ 250 linhas; se passar, divida), acessibilidade (foco, teclado, contraste, `prefers-reduced-motion`, `prefers-reduced-transparency`, `prefers-contrast`). Se a sua sessão puder criar subagentes revisores independentes, use-os; senão faça os passes você mesmo e diga isso no relatório. Corrija tudo e repita sobre o delta até uma rodada sem achados (máx. 3 rodadas; achado aberto depois disso = PARE).

## G8. Fechamento em ordem fixa

1. Checklist do prompt (§9) + checklist comum (G9), item por item; qualquer "não" volta para o código.
2. `lint`, `tsc`, `check:style`, `build` verdes e provas visuais refeitas **depois** das correções da revisão.
3. Documentação: se criou componente/contrato reutilizável, registre em `repos/taciane-pilates-website/CLAUDE.md` (uma linha na seção "Estrutura") e no relatório; não reescreva regras existentes. Em modo `orquestrador`, escreva o texto em `claude-md-NNN.txt` na pasta do PBI.
4. Registro e relatório (G11) na pasta do PBI; `FEATURE/status.yml`: `desenvolver: done` (ou `paused`) só no PBI que você executou (em modo `orquestrador`, quem edita é o orquestrador).
5. Log técnico em `logs/` na **raiz do ROOT** (skill `creating-logs`: arquivo `YYYY-MM-DD_HH-mm-SS-desc-curta.txt`, chave-valor, comprimido).
6. Commits finais no ramo do PBI. Árvore limpa. Servidores encerrados.
7. Modo `propria`: merge `--no-ff` em `feat/website` + build ali. Modo `orquestrador`: não faça merge.

## G9. Checklist comum

- [ ] Todos os CA-NN do `pbi.md` têm prova registrada (comando ou captura).
- [ ] `lint`, `tsc`, `check:style`, `build` verdes; `/` continua `○ Static`.
- [ ] Nenhuma cor literal fora de `src/theme/`; nenhum CSS inline; nenhum `'use client'`; nenhum `.animate(`/`requestAnimationFrame`; nenhum `any`. Todo CSS está em `styles.module.css`.
- [ ] Nenhuma dependência nova em `package.json`; nenhum domínio externo no HTML/CSS/JS gerado (`grep -r "https\?://" .next/static` mostra só WhatsApp, Instagram e Facebook).
- [ ] Textos copiados do protótipo, sem alteração (exceto os DESVIOs registrados).
- [ ] Comparado com o protótipo nos 2 temas e em 1440/820/390 px; diferenças viram `DESVIO-NN` com motivo.
- [ ] Nomes de pastas, arquivos, componentes e rotas em inglês.
- [ ] Fotos por `next/image`, `alt` do protótipo, `priority` só no LCP.
- [ ] Relatório, registro da sessão, log em `logs/` e `status.yml` atualizados.
- [ ] Árvore limpa; servidores encerrados; nenhum push/merge em `main`.

## G10. Condições de parada comuns (PARE, não publique código incompleto, deixe a árvore limpa, escreva o motivo e o estado exato no registro e no relatório, e não inicie outro PBI)

a) Pré-requisito do G3 ou do prompt falhou. b) Verificação vermelha após 3 correções por causa que não seja o ambiente. c) Seria preciso editar arquivo de outro PBI além dos seams, ou arquivo proibido. d) Seria preciso **dependência nova**, rota de API, `cookies()/headers()`, JavaScript de aplicação, ou tornar a rota dinâmica. e) Seria preciso estilo inline ou animação conduzida por JS para reproduzir algo do protótipo: **não faça**; use a alternativa CSS mais simples, registre `DESVIO-NN` e siga (só PARE se a perda for estrutural, isto é, a seção deixa de cumprir o CA). f) O protótipo mudou. g) Achado de revisão aberto após 3 rodadas. h) Comportamento não descrito que exija decisão de produto. i) Rede fora do ar de forma que impeça `npm ci` (ou o download das fontes no build) e não haja `node_modules` para copiar.

## G11. Registro, relatório e log

Na pasta do PBI:
- `sessao-execucao-NNN.md`: linha do tempo curta, "Decisão autônoma: X, porque Y", `DESVIO-NN`, paradas.
- `relatorio-execucao-NNN.md`: o que foi feito; commits (assunto de cada); arquivos criados/alterados; tabela CA-NN → prova; medições (JS da rota, peso das imagens servidas, resultado do `build`); decisões autônomas a confirmar; desvios; pendências; **"Para o responsável confirmar"** (comportamento, custo medido, o que não ficou perfeito) e a confirmação de que os PBIs seguintes **não** foram iniciados.

## G12. Encadeamento

Nenhum PBI inicia outro. Quem libera o próximo é o orquestrador (`orquestrador-pbis.md`) ou o responsável.
