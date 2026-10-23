---
stage: pbi
feature: website-taciane-nextjs
pbi: about-taciane
created_at: 2026-10-23
status: done
---

# PBI: Início: Sobre a Taciane com selo giratório e citação

**ID:** pbi-004
**Feature pai:** feature_001
**Data:** 2026-10-23
**Depende de:** pbi-001

---

## O que entrega

A seção que apresenta a fisioterapeuta: foto em arco, selo que gira, texto, citação e os seis atributos da marca.

## Critérios de Aceite

- CA-01: A foto em arco (`foto-07`) aparece com 2 círculos flutuando e o selo circular "TACIANE MARTINS • ESTÚDIO DE PILATES •" girando (26 s) com o símbolo ao centro.
- CA-02: O rótulo "A Taciane", o H2 "Cuidar do corpo também é cuidar da mente." ("mente" em itálico bold), o lead e a citação "Teu corpo não é tão frágil como você imagina." com a assinatura "Taciane Martins, CREFITO 18/256-219" estão literais; a citação sobe 4 px no hover.
- CA-03: Os 6 atributos (acolhedora, segura, aconchegante, organizada, moderna, criativa) aparecem como pílulas `ghost`.
- CA-04: A seção tem `id="sobre"`, o link "A Taciane" do menu leva a ela e ela revela ao rolar.
- CA-05: Em até 860 px a seção vira coluna única, sem rolagem lateral.

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

- Regras da feature: RN-05, RN-06, RN-08.
- Cobre RF07.
- Texto do lead fala em "fisioterapeuta": manter literal (RN-05).

---

Próximo passo rode `doninha-desenvolver` passando o ID deste PBI (ou o prompt `prompt-execucao-pbi-004.md`).
