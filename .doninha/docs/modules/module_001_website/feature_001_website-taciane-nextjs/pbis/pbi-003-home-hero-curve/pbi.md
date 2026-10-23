---
stage: pbi
feature: website-taciane-nextjs
pbi: home-hero-curve
created_at: 2026-10-23
status: done
---

# PBI: Início: Hero com três arcos de fotos e as frases na curva

**ID:** pbi-003
**Feature pai:** feature_001
**Data:** 2026-10-23
**Depende de:** pbi-001

---

## O que entrega

A primeira dobra: título, apresentação, botões, pílulas e CREFITO, os três arcos de fotos que se alternam, e a faixa de frases correndo numa curva.

## Critérios de Aceite

- CA-01: O H1 "Onde a delicadeza encontra a força." ("força" em itálico bold), o rótulo "Estúdio de Pilates em Vilhena", o lead, os botões "Agende sua aula" e "Conhecer o estúdio", as 4 pílulas e a linha do CREFITO aparecem com a entrada escalonada (`entra`, atrasos .08 s a .38 s).
- CA-02: Os 3 arcos têm alturas 70 %, 100 % e 83 %; cada um alterna 2 fotos (`troca` 12 s com `zoom` 18 s) e 4 círculos flutuam (`flutua`); fotos por `next/image` com os textos alternativos do protótipo.
- CA-03: O grafismo gira atrás (120 s) e, com suporte, os arcos derivam com a rolagem (`deriva`, `--z` por arco).
- CA-04: A faixa "Frases na curva" mostra as 3 frases na curva SVG com `<animate>`, as 2 bolinhas e uma versão em texto para leitores de tela.
- CA-05: "Agende sua aula" abre o WhatsApp em nova aba; "Conhecer o estúdio" rola até `#espaco`.
- CA-06: Em até 860 px o Hero vira coluna única; em até 560 px os arcos diminuem; sem rolagem lateral.

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

- Regras da feature: RN-01, RN-05, RN-06, RN-08.
- Cobre RF05 e RF06.
- A primeira foto do primeiro arco é o candidato a LCP (`priority`).

---

Próximo passo rode `doninha-desenvolver` passando o ID deste PBI (ou o prompt `prompt-execucao-pbi-003.md`).
