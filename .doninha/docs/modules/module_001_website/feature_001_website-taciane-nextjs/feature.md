---
stage: feature
feature: website-taciane-nextjs
created_at: 2026-10-23
status: done
---

# Feature: Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo

**ID:** feature_001 (local)
**Data:** 2026-10-23
**Responsável:** Ikaro Montanari
**Status:** Em documentação

---

## Problema / Oportunidade

O Estúdio de Pilates Taciane Martins (Vilhena-RO) vive hoje do Instagram (@pilatestacianemartins) e do WhatsApp. Não há um endereço próprio que apresente a fisioterapeuta, o método, o espaço e o jeito de começar, nem um lugar que o Google encontre quando alguém procura "pilates em Vilhena". O pedido é construir o site de verdade, com o visual e as animações do protótipo recebido em 23/10/2026 e a identidade visual oficial do estúdio (manual "ID VISUAL", mar/2024).

## Solução Proposta

Um site público de uma página (`/`) em português: Hero com três arcos de fotos, frases na curva, Sobre a Taciane, Para quem (gestantes, mulheres, em dupla), Nosso espaço (galeria com ampliação), Sua primeira aula, Pilates Girls, Dúvidas e uma chamada final. Tema claro/escuro, vidro só na cápsula de navegação e todo movimento em CSS. A visitante conhece o estúdio e agenda a aula pelo WhatsApp; o caminho principal é ver e tocar em **Agende sua aula**.

## Regras de Negócio

1. RN-01 Contato e CTA: "Agende sua aula" leva ao WhatsApp do estúdio (`https://wa.me/message/3V6RNBJ53AQVC1`) em nova aba, com `rel="noopener"`; o botão fica sempre acessível na cápsula fixa. Instagram e Facebook seguem o mesmo cuidado.
2. RN-02 Tema: sem escolha, vale o tema do aparelho; a visitante pode trocar no menu (sol/lua). Como no protótipo (CSS puro), a escolha não é gravada.
3. RN-03 Privacidade do site (regra fixa): sem cookies, sem análise de uso, sem anúncios e sem requisição a terceiros em execução (as fontes são servidas pelo próprio site). Qualquer mudança exige criar o aviso de privacidade antes (LGPD).
4. RN-04 Identidade: a skill `identidade-pilates-taciane-martins` e o manual oficial valem sobre o Instagram. Paleta creme + terracota + sálvia em blocos chapados, Quicksand/Playfair Display/Great Vibes, logo sempre a partir do SVG oficial. O símbolo do protótipo é provisório: o logo oficial é pendência para publicar, não para construir.
5. RN-05 Responsável técnica visível: "Taciane Martins, fisioterapeuta, CREFITO 18/256-219" aparece no Hero, em Sobre e no rodapé.
6. RN-06 Direito de imagem (LGPD): fotos com alunas identificáveis só vão ao ar com o consentimento delas e da Taciane; imagens do manual com modelos podem ser de banco de imagens e exigem conferir a licença.
7. RN-07 Acessibilidade: o site respeita Reduzir movimento, Reduzir transparência e Aumentar contraste; com transparência reduzida o vidro vira superfície sólida. (Diferente de outros sites da casa, aqui as animações param com Reduzir movimento, como no protótipo.)
8. RN-08 Fidelidade: o protótipo de 23/10/2026 é a fonte de verdade de visual, texto e animação. Mudança futura vira PBI novo.
9. RN-09 Configuração única: WhatsApp, Instagram, Facebook, endereço, CREFITO e URL do site ficam em um único ponto (`siteConfig` lendo `Environment`); nenhuma seção escreve esses valores.
10. RN-10 Tom de voz: próximo, carinhoso, primeira pessoa ("por aqui", "com a gente"); sem depoimentos inventados (só reais e autorizados) e sem promessa de resultado de saúde.
11. RN-11 Gestantes: o texto exige a liberação do obstetra e não promete resultado clínico.

## Escopo

### IN — O que esta feature entrega
- Layout comum: marca, cápsula de vidro com menu, borda de rolagem, atalho "pular para o conteúdo" e rodapé (RF01).
- Rota única `/` com título e descrição (RF02).
- Tema claro/escuro (RF03).
- Favicon e ícone com o símbolo da marca (RF04).
- Hero com três arcos e frases na curva (RF05, RF06).
- Sobre a Taciane (RF07), Para quem (RF08), Nosso espaço (RF09), Sua primeira aula (RF10), Pilates Girls (RF11), Dúvidas (RF12) e Chamada final (RF13).
- Revelar ao rolar e animações dirigidas por rolagem (RF14).
- Configuração única (RF15), acessibilidade (RF16), responsivo sem rolagem lateral (RF17), site sem cookies/analytics/JS de aplicação (RF18), metadados e desempenho (RF19).

### OUT — O que NÃO está incluído nesta feature
- Depoimentos de alunas, página de cursos e blog (não existem no protótipo).
- Formulário de contato, agendamento online e pagamentos.
- Analytics, cookies e pixel de anúncios.
- Páginas extras (a feature é uma página só).
- Galeria ligada ao Instagram em tempo real.
- Mudanças no protótipo posteriores ao congelamento.

## Critérios de Sucesso

Sem métrica de produto definida. Os critérios de aceite (CA) ficam nos PBIs; o principal é a paridade visual e de animação com o protótipo, nos dois temas, em 1440/820/390 px, com a identidade oficial.

## Premissas e Decisões de Produto

| # | Decisão / Premissa | Justificativa |
| --- | --- | --- |
| 1 | Nomes no código (pastas, arquivos, componentes, variáveis) em inglês; texto do site em português | Padrão do workspace de referência (TaciMix) |
| 2 | Fotos extraídas do protótipo para `assets/web` e servidas por `next/image` | O protótipo embutia as fotos em `data:` URI (2 MB num HTML) |
| 3 | Zero JavaScript de aplicação: menu por `:target`, tema e galeria por rádios + `:has()`, dúvidas por `<details>` | O protótipo prova que CSS basta; menos código, mais velocidade |
| 4 | Fontes por `next/font/google` (self-hosted no build) | Evita chamar o Google em execução (RN-03) |
| 5 | Logo oficial pendente (`#i-logo` provisório) | Os vetores estão no Drive da marca, ainda não baixados |
| 6 | Domínio do site ainda não definido | `siteUrl` é configurável; nada bloqueia |
| 7 | Telefone/WhatsApp pelo link de mensagem (`wa.me/message/...`) | É o link que o estúdio já usa no Instagram |

## Decisões Chave

> Resumo. Detalhamento em `decisions.md`.

| # | Decisão | Alternativas descartadas | Motivo |
| --- | --- | --- | --- |
| 1 | Página única com âncoras | Várias rotas (Sobre, Espaço…) | Fidelidade ao protótipo e menor escopo |
| 2 | Protótipo congelado como fonte de verdade | Continuar editando durante a construção | PBIs estáveis |
| 3 | Zero JavaScript de aplicação | Biblioteca de lightbox/menu | CSS já resolve; desempenho |
| 8 | Tema sem persistência | Gravar em `localStorage` | Igual ao protótipo; site sem armazenamento |
| 7 | Respeitar Reduzir movimento | Ignorar a preferência | Acessibilidade e igual ao protótipo |
| 6 | Quebra em 9 PBIs | Um PBI só; ~5 PBIs grandes | Régua de 3 a 8 cenários por PBI |

## Alternativas Consideradas e Rejeitadas

Nenhuma. A solução chegou decidida (o protótipo) e o questionamento não revelou bifurcação.

## Dependências

- Logo oficial em SVG (Drive da marca: `Logo.pdf`, `ícone.pdf`, a converter com `pdftocairo`/Inkscape).
- Autorização de imagem das alunas que aparecem nas fotos (RN-06).
- A base Next.js já criada em `repos/taciane-pilates-website`.
- As 15 fotos já extraídas em `assets/web`.

## Referências

- Protótipo: `docs/prototipo/taciane-pilates-website-prototipo.html`
- Identidade visual: `.claude/skills/identidade-pilates-taciane-martins/SKILL.md`
- Design system: `docs/design-system/taciane-design-system.md`
- Decisões: `decisions.md` (nesta pasta)

---

Próximo passo rode `doninha-desenvolver` no primeiro PBI, ou o orquestrador (`orquestrador-pbis.md`).
