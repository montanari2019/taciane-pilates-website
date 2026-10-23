---
stage: pbi
feature: website-taciane-nextjs
pbi: foundation-layout-nav
created_at: 2026-10-23
status: done
---

# PBI: Fundação: layout comum, rota única, marca, cápsula de vidro com menu, borda de rolagem, rodapé e favicon

**ID:** pbi-001
**Feature pai:** feature_001
**Data:** 2026-10-23
**Depende de:** nenhum

---

## O que entrega

A rota `/` navegável: marca no topo, cápsula de vidro (Agende sua aula + menu), borda de rolagem, atalho "pular para o conteúdo", rodapé, favicon e a configuração única de contatos.

## Critérios de Aceite

- CA-01: A rota `/` mostra a marca, a cápsula, `<main id="main">` com os slots das seções e o rodapé, com o título e a descrição do protótipo.
- CA-02: A cápsula mantém "Agende sua aula" (WhatsApp, nova aba, `rel="noopener"`) visível ao rolar e encolhe para 118 px depois de ~280 px de rolagem, só em CSS.
- CA-03: O menu abre por `#menu` (`:target`) com painel animado, 5 links (Início, A Taciane, Para quem, Nosso espaço, Dúvidas), Instagram e o seletor de tema (visual aqui; funciona no PBI 002); fecha ao tocar num link ou no véu; sem JavaScript.
- CA-04: O atalho "Pular para o conteúdo" leva ao `main`; todo controle tem foco visível; os controles só de ícone têm `aria-label`.
- CA-05: O rodapé mostra a marca, a descrição, o endereço (Avenida Capitão Castro, 3419, 2º andar, Centro, Vilhena-RO), WhatsApp, Instagram, Facebook e a linha do CREFITO; links externos com `rel="noopener"`; a frase "Protótipo de site." do protótipo NÃO vai ao ar (DESVIO-01).
- CA-06: WhatsApp, Instagram, Facebook, endereço e CREFITO vêm só da configuração única (`siteConfig`); nenhuma página escreve esses valores.
- CA-07: Favicon e ícone do site usam o símbolo da marca (terracota sobre creme); o símbolo é o provisório do protótipo e a troca pelo SVG oficial está registrada como pendência.
- CA-08: O componente `Reveal` existe: o conteúdo aparece normalmente sem suporte a `animation-timeline`, e revela ao rolar quando há suporte.
- CA-09: Sem rolagem lateral em 390 px, 820 px e 1440 px.

## Validação INVEST

| Critério    | Status | Justificativa |
| ----------- | ------ | -------------- |
| Independent | ✅ | Depende só de nenhum; não depende dos irmãos da mesma onda. |
| Negotiable  | ✅ | Detalhes de animação podem ser simplificados sem perder o conteúdo. |
| Valuable    | ✅ | O visitante percebe a entrega sozinha na página. |
| Estimable   | ✅ | Visual, textos e animações estão no protótipo congelado. |
| Small       | ✅ | Menos de 1 sprint. |
| Testable    | ✅ | Cada critério tem prova por comando, captura ou leitura de estilo no navegador. |

## Notas

- Regras da feature: RN-01, RN-05, RN-08, RN-09, RN-10.
- Cobre RF01, RF02, RF04, RF14 (componente), RF15, RF16 (foco e skip), RF17, RF18.

---

Próximo passo rode `doninha-desenvolver` passando o ID deste PBI (ou o prompt `prompt-execucao-pbi-001.md`).
