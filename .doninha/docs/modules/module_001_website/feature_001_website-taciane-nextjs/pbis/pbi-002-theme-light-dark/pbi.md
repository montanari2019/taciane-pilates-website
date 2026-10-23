---
stage: pbi
feature: website-taciane-nextjs
pbi: theme-light-dark
created_at: 2026-10-23
status: done
---

# PBI: Tema claro/escuro seguindo o aparelho e escolhido no menu

**ID:** pbi-002
**Feature pai:** feature_001
**Data:** 2026-10-23
**Depende de:** pbi-001

---

## O que entrega

O tema claro/escuro: segue o aparelho desde a primeira pintura, troca pelo seletor sol/lua do menu e vale em toda a página, tudo em CSS.

## Critérios de Aceite

- CA-01: Sem escolha, o tema segue `prefers-color-scheme` desde a primeira pintura, sem piscar e sem JavaScript.
- CA-02: O seletor sol/lua do menu (rádios `#t-claro` e `#t-escuro` com `:has()` no `:root`) troca o tema na hora, com transição de 0,3 s no fundo e no texto.
- CA-03: Todas as cores dos dois temas vêm de tokens em `colors.css`; a borda dos arcos usa `--bg-2` no escuro.
- CA-04: O seletor tem `role="radiogroup"`, `aria-label` em cada rádio, estado marcado visível e anel de foco por teclado.
- CA-05: `prefers-contrast: more` aplica acento escuro e texto pleno nos dois temas.
- CA-06: A escolha vale até recarregar (o protótipo é CSS puro e não grava nada); o site continua sem cookies nem armazenamento.

## Validação INVEST

| Critério    | Status | Justificativa |
| ----------- | ------ | -------------- |
| Independent | ✅ | Depende só de pbi-001; não depende dos irmãos da mesma onda. |
| Negotiable  | ✅ | Detalhes de animação podem ser simplificados sem perder o conteúdo. |
| Valuable    | ✅ | O visitante percebe a entrega sozinha na página. |
| Estimable   | ✅ | Visual, textos e animações estão no protótipo congelado. |
| Small       | ✅ | Menos de 1 sprint. |
| Testable    | ✅ | Cada critério tem prova por comando, captura ou leitura de estilo no navegador. |

## Notas

- Regras da feature: RN-02, RN-03, RN-07, RN-08.
- Cobre RF03 e parte de RF16.
- Decisão DEC-08: lembrar a escolha entre visitas fica como ideia adiada.

---

Próximo passo rode `doninha-desenvolver` passando o ID deste PBI (ou o prompt `prompt-execucao-pbi-002.md`).
