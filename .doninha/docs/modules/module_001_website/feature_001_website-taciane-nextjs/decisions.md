# Log de Decisões — Website do Estúdio de Pilates Taciane Martins em Next.js

> Decisões detalhadas desta feature. Resumo em `feature.md#Decisões Chave`.

## DEC-01 Página única com âncoras

**Data:** 2026-10-23
**Status:** Aceita

**Contexto:** O protótipo é uma página só, com menu de âncoras (`#inicio`, `#sobre`, `#para-quem`, `#espaco`, `#duvidas`).

**Opções avaliadas:**
- A) Rota `/` com âncoras: fiel ao protótipo, menor escopo.
- B) Rotas por seção (`/sobre`, `/espaco`): mais endereços para o Google, escopo maior e quebra o protótipo.

**Escolha:** A.

**Motivo:** Fidelidade e simplicidade; um estúdio local converte numa página curta.

**Impactos:** Uma única entrada no `sitemap`. Páginas extras viram PBI novo.

## DEC-02 Protótipo congelado como fonte de verdade

**Data:** 2026-10-23
**Status:** Aceita

**Contexto:** O protótipo (`Estúdio de Pilates Taciane Martins · Vilhena-RO (1).html`, 23/10/2026) foi copiado para `docs/prototipo/taciane-pilates-website-prototipo.html`.

**Escolha:** congelar essa versão. Qualquer mudança depois disto vira PBI de ajuste.

**Impactos:** O prompt de cada PBI manda copiar texto, medidas e animações literais dele.

## DEC-03 Zero JavaScript de aplicação

**Data:** 2026-10-23
**Status:** Aceita

**Contexto:** O protótipo declara "100% HTML + CSS: nenhuma linha de JavaScript": menu por `:target`, tema por rádios + `:has()`, galeria por rádios, dúvidas por `<details name>`, frases na curva por SVG `<animate>`, revelar ao rolar por `animation-timeline`.

**Opções avaliadas:**
- A) Reproduzir em CSS, como o protótipo: sem `'use client'`, sem hidratação.
- B) Componentes React com estado (menu, lightbox, tema): mais flexível, mais JavaScript.

**Escolha:** A.

**Motivo:** Desempenho, simplicidade e fidelidade. O que o CSS não alcançar vira `DESVIO-NN` (ex.: Esc não fecha o visor de fotos).

**Impactos:** Todos os componentes são de servidor. `check:style` bloqueia `style=`, `.animate(` e `requestAnimationFrame`. Exceção só com registro.

## DEC-04 Fotos do protótipo viram arquivos

**Data:** 2026-10-23
**Status:** Aceita

**Contexto:** As 17 `<img>` do protótipo (15 fotos únicas) estão embutidas como WebP em `data:` URI, 2 MB no HTML.

**Escolha:** extrair para `assets/web/foto-NN.webp` (800 px) com mapa de alt em `assets/web/README.md`, e servir por `next/image` (AVIF/WebP).

**Impactos:** Cada PBI de seção importa só as fotos que usa para `src/assets/photos/`. RN-06 vale para todas.

## DEC-05 Fontes servidas pelo próprio site

**Data:** 2026-10-23
**Status:** Aceita

**Contexto:** O protótipo usa `<link>` do Google Fonts (Quicksand, Playfair Display, Great Vibes).

**Escolha:** `next/font/google` em `app/layout.tsx`, que baixa as fontes no build e as serve do próprio domínio.

**Impactos:** Nenhuma chamada ao Google em execução (RN-03). O build precisa de rede uma vez.

## DEC-06 Logo provisório até o SVG oficial

**Data:** 2026-10-23
**Status:** Aceita

**Contexto:** O protótipo avisa "Símbolo PROVISÓRIO: trocar pelo SVG oficial". A skill de identidade exige logo a partir dos vetores oficiais, "nunca recriado à mão".

**Escolha:** construir com `#i-logo`/`#i-grafismo` do protótipo e tratar a troca como pendência de publicação (PBI 009, Bloco 5).

**Impactos:** Marca, rodapé, selos, favicon e ícone de Apple usam um único símbolo no sprite, para a troca ser num lugar só.

## DEC-07 Respeitar Reduzir movimento, transparência e contraste

**Data:** 2026-10-23
**Status:** Aceita

**Contexto:** No site de referência (TaciMix) o responsável decidiu ignorar Reduzir movimento. O protótipo da Taciane respeita as três preferências.

**Escolha:** seguir o protótipo desta feature (RN-07).

**Impactos:** O PBI 009 audita cada módulo CSS contra as três mídias.

## DEC-08 Tema sem persistência

**Data:** 2026-10-23
**Status:** Aceita

**Contexto:** O seletor do protótipo é de rádios + `:has()`; recarregar volta ao tema do aparelho.

**Escolha:** manter assim (RN-02, RN-03). Lembrar a escolha entre visitas fica como ideia adiada (`.doninha/STATE.md`).

## DEC-09 Estrutura herdada do workspace TaciMix

**Data:** 2026-10-23
**Status:** Aceita

**Contexto:** Este workspace repete o começo do site do TaciMix: skills migradas em `.claude/skills`, Doninha (`.doninha`), `docs/prototipo`, `docs/design-system`, `logs/`, `assets/`, base Next.js em `repos/`, análise em PBIs com prompts de execução e orquestrador.

**Escolha:** mesmas regras de estilo (tokens, CSS Modules, nunca inline), mesma estrutura de `src/`, mesmo ciclo de PBIs. Diferenças: uma rota, um idioma, sem APK, identidade da marca no lugar do Liquid Glass azul.

**Impactos:** A skill `identidade-pilates-taciane-martins` entra em `.claude/skills` e é leitura obrigatória dos prompts.
