---
stage: pbi
feature: website-taciane-nextjs
pbi: studio-gallery
created_at: 2026-10-23
status: done
---

# PBI: Início: Nosso espaço, galeria de 6 fotos com ampliação

**ID:** pbi-006
**Feature pai:** feature_001
**Data:** 2026-10-23
**Depende de:** pbi-001

---

## O que entrega

A galeria do estúdio: seis fotos que sobem ao passar o mouse e ampliam num visor, sem JavaScript.

## Critérios de Aceite

- CA-01: O rótulo "Nosso espaço" e o H2 "Um lugar feito para você se sentir em casa." ("casa" em itálico) aparecem literais, seguidos de 6 fotos (`foto-03`, `foto-10` a `foto-14`) em grade que revelam ao rolar e sobem 8 px com sombra no hover.
- CA-02: Tocar numa foto a amplia num visor (rádios `.lb-r` com `:has()`), com fade (`lb-in`) e a foto crescendo (`lb-img`); tocar de novo ou no "Fechar" volta ao normal; a página não rola com o visor aberto.
- CA-03: Cada gatilho tem rótulo acessível ("Ampliar foto N", "Fechar foto") e o teclado alcança os rádios; a tecla Esc não fecha (CSS não alcança) e isso é registrado como DESVIO-01.
- CA-04: Fotos por `next/image` com `sizes` honestos, `loading="lazy"` e os alt do protótipo.
- CA-05: A seção tem `id="espaco"`; o link "Nosso espaço" do menu e o botão "Conhecer o estúdio" do Hero levam a ela.

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

- Regras da feature: RN-06, RN-07, RN-08.
- Cobre RF09.
- As fotos 11 e 12 têm alunas ao fundo? Confirmar consentimento (RN-06).

---

Próximo passo rode `doninha-desenvolver` passando o ID deste PBI (ou o prompt `prompt-execucao-pbi-006.md`).
