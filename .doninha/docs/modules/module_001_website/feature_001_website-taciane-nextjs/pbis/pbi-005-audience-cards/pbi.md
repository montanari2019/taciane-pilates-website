---
stage: pbi
feature: website-taciane-nextjs
pbi: audience-cards
created_at: 2026-10-23
status: done
---

# PBI: Início: Para quem, três cartões que se empilham ao rolar

**ID:** pbi-005
**Feature pai:** feature_001
**Data:** 2026-10-23
**Depende de:** pbi-001

---

## O que entrega

A seção com três cartões — Gestantes, Mulheres e Em dupla — que se empilham ao rolar.

## Critérios de Aceite

- CA-01: O cabeçalho (rótulo "Para quem", H2 "Pilates é movimento com propósito." com "propósito" em itálico, lead "Cada fase pede um cuidado diferente...") e os 3 cartões estão literais, com script, H3 com itálico, lead, pílulas, foto em arco e numeração "1 de 3", "2 de 3", "3 de 3".
- CA-02: Os cartões usam fundos creme-quente, terracota e sálvia; os dois últimos têm grafismo e textos creme.
- CA-03: Os cartões se empilham ao rolar (`position: sticky`, `top` escalonado em 26 px por cartão), recuam (`recua`, escala .94) ao sair e a foto se aproxima (`aproxima`), quando há suporte a `animation-timeline`.
- CA-04: Nenhum ancestral dos cartões tem `overflow` diferente de `clip`; o empilhar funciona em 1440, 820 e 390 px.
- CA-05: O texto de Gestantes cita a liberação do obstetra (RN-11); nada promete resultado de saúde.
- CA-06: A seção tem `id="para-quem"` e o link "Para quem" do menu leva a ela.

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

- Regras da feature: RN-06, RN-08, RN-11.
- Cobre RF08.
- Fotos `foto-08`, `foto-04`, `foto-09`; as de alunas identificáveis precisam de autorização (RN-06).

---

Próximo passo rode `doninha-desenvolver` passando o ID deste PBI (ou o prompt `prompt-execucao-pbi-005.md`).
