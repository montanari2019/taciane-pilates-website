---
stage: pbi
feature: website-taciane-nextjs
pbi: first-class-group
created_at: 2026-10-23
status: done
---

# PBI: Início: Sua primeira aula (3 passos) e a turma Pilates Girls

**ID:** pbi-007
**Feature pai:** feature_001
**Data:** 2026-10-23
**Depende de:** pbi-001

---

## O que entrega

Os três passos para começar, com a linha que se desenha, e a foto da turma com a legenda "Pilates Girls".

## Critérios de Aceite

- CA-01: O rótulo "Sua primeira aula", o H2 "Começar é mais simples do que parece." ("parece" em itálico) e os 3 passos ("Chame no WhatsApp", "Conversa com a fisio", "Movimento no seu ritmo") estão literais, numerados 1 a 3 pelo marcador do cartão.
- CA-02: A linha entre os passos se desenha ao rolar (`desenha`, `scaleX` de 0 a 1) e cada passo sobe 6 px com sombra no hover.
- CA-03: A turma mostra a `foto-15` larga com a legenda "Pilates Girls" (script) e "Mulheres que praticam Pilates são fortes, e juntas, mais ainda."; a foto se aproxima devagar ao rolar (`aproxima`).
- CA-04: O primeiro passo pode apontar para o WhatsApp (link) sem mudar o texto literal.
- CA-05: Em até 860 px os passos empilham; sem rolagem lateral.

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

- Regras da feature: RN-01, RN-06, RN-08.
- Cobre RF10 e RF11.
- "Pilates Girls" é campanha de grupo: não usar o rosa de campanha (`--rosa-campanha`) aqui, o protótipo não usa.

---

Próximo passo rode `doninha-desenvolver` passando o ID deste PBI (ou o prompt `prompt-execucao-pbi-007.md`).
