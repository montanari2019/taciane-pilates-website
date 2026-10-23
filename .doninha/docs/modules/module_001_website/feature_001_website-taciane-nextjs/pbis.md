---
stage: structure
feature: website-taciane-nextjs
created_at: 2026-10-23
status: done
---

# Estrutura — Website do Estúdio de Pilates Taciane Martins em Next.js fiel ao protótipo

## Objetivo da feature

Construir o site público do estúdio em Next.js, fiel ao protótipo congelado (`docs/prototipo/taciane-pilates-website-prototipo.html`): uma página (`/`) em português, tema claro/escuro, identidade visual oficial (creme, terracota, sálvia), arcos de fotos e animações só em CSS. O site apresenta a Taciane e o estúdio e leva a visitante a agendar a aula pelo WhatsApp.

## PBIs

### pbi-001-foundation-layout-nav — Fundação: layout comum, rota única, marca, cápsula de vidro com menu, borda de rolagem, rodapé e favicon

**Descrição:** A rota `/` navegável: marca no topo, cápsula de vidro (Agende sua aula + menu), borda de rolagem, atalho "pular para o conteúdo", rodapé, favicon e a configuração única de contatos.
**Depende de:** nenhum

### pbi-002-theme-light-dark — Tema claro/escuro seguindo o aparelho e escolhido no menu

**Descrição:** O tema claro/escuro: segue o aparelho desde a primeira pintura, troca pelo seletor sol/lua do menu e vale em toda a página, tudo em CSS.
**Depende de:** pbi-001

### pbi-003-home-hero-curve — Início: Hero com três arcos de fotos e as frases na curva

**Descrição:** A primeira dobra: título, apresentação, botões, pílulas e CREFITO, os três arcos de fotos que se alternam, e a faixa de frases correndo numa curva.
**Depende de:** pbi-001

### pbi-004-about-taciane — Início: Sobre a Taciane com selo giratório e citação

**Descrição:** A seção que apresenta a fisioterapeuta: foto em arco, selo que gira, texto, citação e os seis atributos da marca.
**Depende de:** pbi-001

### pbi-005-audience-cards — Início: Para quem, três cartões que se empilham ao rolar

**Descrição:** A seção com três cartões — Gestantes, Mulheres e Em dupla — que se empilham ao rolar.
**Depende de:** pbi-001

### pbi-006-studio-gallery — Início: Nosso espaço, galeria de 6 fotos com ampliação

**Descrição:** A galeria do estúdio: seis fotos que sobem ao passar o mouse e ampliam num visor, sem JavaScript.
**Depende de:** pbi-001

### pbi-007-first-class-group — Início: Sua primeira aula (3 passos) e a turma Pilates Girls

**Descrição:** Os três passos para começar, com a linha que se desenha, e a foto da turma com a legenda "Pilates Girls".
**Depende de:** pbi-001

### pbi-008-faq-final-cta — Início: Dúvidas (4 perguntas) e chamada final para agendar

**Descrição:** A seção de dúvidas frequentes e o cartão final "Pilates é vida em movimento." com os botões do WhatsApp e do Instagram.
**Depende de:** pbi-001, pbi-004

### pbi-009-final-polish — Acessibilidade, metadados, desempenho e paridade final

**Descrição:** A verificação final: paridade com o protótipo, adaptação a Reduzir movimento, transparência e contraste, metadados do site e medições de desempenho.
**Depende de:** pbi-001, pbi-002, pbi-003, pbi-004, pbi-005, pbi-006, pbi-007, pbi-008

## Ordem de construção e paralelismo

| Onda | PBIs (em paralelo dentro da onda) | Pré-requisito |
| --- | --- | --- |
| 1 | 001 | — |
| 2 | 002, 003, 004 | onda 1 integrada |
| 3 | 005, 006, 007 | onda 2 integrada |
| 4 | 008 | onda 3 integrada |
| 5 | 009 | onda 4 integrada |

## Rastreabilidade

| PBI | Requisitos | Regras |
| --- | --- | --- |
| 001 | RF01, RF02, RF04, RF14, RF15, RF16, RF17, RF18 | RN-01, RN-05, RN-08, RN-09, RN-10 |
| 002 | RF03, RF16 | RN-02, RN-03, RN-07, RN-08 |
| 003 | RF05, RF06 | RN-01, RN-05, RN-06, RN-08 |
| 004 | RF07 | RN-05, RN-06, RN-08 |
| 005 | RF08 | RN-06, RN-08, RN-11 |
| 006 | RF09 | RN-06, RN-07, RN-08 |
| 007 | RF10, RF11 | RN-01, RN-06, RN-08 |
| 008 | RF12, RF13 | RN-01, RN-05, RN-08, RN-11 |
| 009 | RF14, RF16, RF17, RF18, RF19 | RN-03, RN-04, RN-07, RN-08 |

## Justificativa da decomposição

Cada seção grande da página vira um PBI que a visitante percebe sozinho. Fundação (layout, menu, rodapé, configuração) vem primeiro porque tudo depende dela; o tema (002) só mexe em tokens e no seletor, por isso corre em paralelo com as seções. Hero e frases na curva ficam juntos (003) porque dividem as fotos e a primeira dobra. Primeira aula e turma (007) e dúvidas e chamada final (008) agrupam seções curtas. A chamada final reaproveita o selo criado em Sobre (004), por isso o 008 vem depois. O PBI 009 fecha a feature com paridade, adaptação a Reduzir movimento/transparência/contraste, metadados e desempenho medidos. Alternativas descartadas: um PBI único (inviável de entregar em partes) e um PBI só para fotos (falharia em Valuable: nada visível sozinho).

---

Próximo passo rode `doninha-desenvolver` no primeiro PBI (ou o orquestrador).
