# Taciane Pilates Website (Next.js, App Router)

Base do website do Estúdio de Pilates Taciane Martins (Vilhena-RO). Estrutura derivada das skills `web-project-structure` e `web-ui-components`, adaptada de Vite/Ant Design para Next.js + CSS Modules. A identidade visual (cores, logo, fontes, tom de voz) vem da skill `identidade-pilates-taciane-martins` (em `.claude/skills/` na raiz do workspace) e o visual de referência é `docs/prototipo/taciane-pilates-website-prototipo.html`.

## Regras de estilo — SEMPRE

1. **Tokens de cor**: toda cor vem de `src/theme/colors.css` (claro/escuro). Nunca cor literal (`#fff`, `rgb()`, `rgba()`) em `.module.css`, `globals.css` ou TSX. Cor nova = novo token em `colors.css`, nos dois temas.
2. **Tokens estruturais**: espaço, raio, fonte, duração e layout vêm de `src/theme/structure.css`. Se faltar, crie o token lá.
3. **`globals.css`** (`src/app/globals.css`): só importa os tokens, reset e base de elementos. Nada de estilo de página ou componente.
4. **`styles.module.css`**: toda página e todo componente tem o seu, ao lado do arquivo (`page.module.css` em rotas do App Router; `styles.module.css` dentro de `components/<Nome>/`). Consome só `var(--token)`.
5. **Nunca CSS inline**: sem `style={{}}`, sem `style.cssText`, sem `<style>` em TSX. O ESLint bloqueia a prop `style`. Valor dinâmico (o protótipo usa `style="--i:2"`, `--d:.08s`): troque `className`/`data-*` e trate no `.module.css`.
6. **Animação só em CSS**: `@keyframes`, `transition`, `animation-timeline`. O protótipo não tem JavaScript e o site também não precisa ter: menu por `:target`, tema por rádios + `:has()`, galeria por rádios, dúvidas por `<details>`. JS só onde o CSS não alcança, e nunca para mover coisas.
7. **Logo**: o símbolo `#i-logo` do protótipo é PROVISÓRIO. Troque pelo SVG oficial (vetores do Drive da marca) antes de publicar; nunca recrie o logo à mão.

## Estrutura (`src/`)

- `app/` rotas, layouts e `globals.css`
- `components/` biblioteca reutilizável; uma pasta por componente com `index.tsx` + `styles.module.css`; exporta pelo `components/index.ts`. Procure aqui antes de criar. Tipos de props com sufixo `PropsType`; defaults na desestruturação.
- `features/<dominio>/` `pages/`, `components/`, `copy/`, `utils/`
- `config/` `hooks/` `http/` `layouts/` `providers/` `services/` `shared/` `storage/` `utils/` `assets/`
- `theme/` tokens CSS (`colors.css`, `structure.css`)
- `Environment.ts` único acesso a env (`NEXT_PUBLIC_*`): WhatsApp, Instagram, Facebook e URL do site
- Fontes (Quicksand, Playfair Display, Great Vibes) pelo `next/font/google` em `app/layout.tsx`, expostas como `--font-quicksand|playfair|great-vibes` e mapeadas em `--f-marca|serif|script` (`structure.css`). Sem `<link>` para Google Fonts.
- Fotos do estúdio: `assets/web/foto-NN.webp` (extraídas do protótipo; veja `assets/web/README.md`). Entram no app por `next/image`.

## Convenções

- Imports de `src/` sempre pelo alias `~/`; nunca relativo para subir acima da feature.
- Prefira `Container` a `div` crua.
- Tema escuro: automático (`prefers-color-scheme`) ou forçado via `data-theme="dark|light"` no `<html>`.
- Texto do site em português (pt-BR), tom próximo e carinhoso; nomes no código (pastas, arquivos, componentes, rotas, variáveis) em inglês.
- `npm run check:style` falha em cor literal fora de `src/theme`, CSS inline, `.animate(`, `requestAnimationFrame`, `any` e CSS fora de módulos. `npx tsc --noEmit` precisa de um `next build` antes (gera `LayoutProps`); `next dev` cria `AGENTS.md` na raiz do app: não é do projeto, não commitar.
- Ao fim de cada tarefa: log técnico em `logs/` na raiz do workspace (skill `creating-logs`).
