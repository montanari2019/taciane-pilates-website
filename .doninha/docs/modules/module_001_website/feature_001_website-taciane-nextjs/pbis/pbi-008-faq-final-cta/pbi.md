---
stage: pbi
feature: website-taciane-nextjs
pbi: faq-final-cta
created_at: 2026-10-23
status: done
---

# PBI: Início: Dúvidas (4 perguntas) e chamada final para agendar

**ID:** pbi-008
**Feature pai:** feature_001
**Data:** 2026-10-23
**Depende de:** pbi-001, pbi-004

---

## O que entrega

A seção de dúvidas frequentes e o cartão final "Pilates é vida em movimento." com os botões do WhatsApp e do Instagram.

## Critérios de Aceite

- CA-01: O rótulo "Dúvidas", o H2 "Ficou alguma pergunta?" ("pergunta" em itálico) e o lead "Se a sua não estiver aqui, é só mandar uma mensagem." estão literais.
- CA-02: As 4 perguntas são `<details name="duvidas">` (abrir uma fecha a outra); o ícone `+` gira 90° ao passar o mouse com a pergunta fechada e vira `×` (45°) quando aberta, o resumo ganha 32 px de recuo no hover e a resposta abre com a altura animada (`::details-content`) e a animação `abre`.
- CA-03: As respostas estão literais, incluindo "Gravidez saudável é gravidez ativa!" e a menção à liberação do obstetra.
- CA-04: O cartão final terracota tem o grafismo, 2 círculos, o selo giratório, o script "Vem com a gente", o H2 "Pilates é vida em movimento.", o texto e os botões "Agende sua aula" (creme) e "Ver o Instagram" (vidro sobre cor), com links da configuração única e `rel="noopener"`.
- CA-05: As seções têm `id="duvidas"` e `id="agendar"`; o link "Dúvidas" do menu leva a `#duvidas`.

## Validação INVEST

| Critério    | Status | Justificativa |
| ----------- | ------ | -------------- |
| Independent | ✅ | Depende só de pbi-001, pbi-004; não depende dos irmãos da mesma onda. |
| Negotiable  | ✅ | Detalhes de animação podem ser simplificados sem perder o conteúdo. |
| Valuable    | ✅ | O visitante percebe a entrega sozinha na página. |
| Estimable   | ✅ | Visual, textos e animações estão no protótipo congelado. |
| Small       | ✅ | Menos de 1 sprint. |
| Testable    | ✅ | Cada critério tem prova por comando, captura ou leitura de estilo no navegador. |

## Notas

- Regras da feature: RN-01, RN-05, RN-08, RN-11.
- Cobre RF12 e RF13.
- Reaproveita o `Seal` do PBI 004; se ele não estiver integrado, a onda 4 só começa depois dele.

---

Próximo passo rode `doninha-desenvolver` passando o ID deste PBI (ou o prompt `prompt-execucao-pbi-008.md`).
