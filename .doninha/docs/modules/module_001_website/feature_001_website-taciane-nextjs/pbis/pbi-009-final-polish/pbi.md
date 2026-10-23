---
stage: pbi
feature: website-taciane-nextjs
pbi: final-polish
created_at: 2026-10-23
status: done
---

# PBI: Acessibilidade, metadados, desempenho e paridade final

**ID:** pbi-009
**Feature pai:** feature_001
**Data:** 2026-10-23
**Depende de:** pbi-001, pbi-002, pbi-003, pbi-004, pbi-005, pbi-006, pbi-007, pbi-008

---

## O que entrega

A verificação final: paridade com o protótipo, adaptação a Reduzir movimento, transparência e contraste, metadados do site e medições de desempenho.

## Critérios de Aceite

- CA-01: Paridade visual com o protótipo em 1440, 820 e 390 px, nos dois temas; cada diferença é um DESVIO-NN com motivo.
- CA-02: Com `prefers-reduced-motion: reduce`, não há animação infinita nem dirigida por rolagem e a rolagem é instantânea; com `prefers-reduced-transparency: reduce` o vidro vira superfície sólida; com `prefers-contrast: more` o acento e o texto ganham contraste.
- CA-03: Metadados: título e descrição do protótipo, `lang="pt-BR"`, canônica, Open Graph e Twitter com uma foto do estúdio, `robots` e `sitemap` com `/`; nenhum dado estruturado com fato não conferido.
- CA-04: `next build` lista `/` como estático; a página não envia JavaScript de aplicação além do runtime do Next; nenhuma requisição a terceiros (as fontes são servidas pelo próprio site).
- CA-05: A pendência do logo oficial está explícita no relatório; se o SVG oficial estiver disponível, ele substitui `#i-logo` no cabeçalho, no rodapé, no selo, no favicon e no ícone de Apple.
- CA-06: Imagens: a do LCP tem `priority`, as outras são lazy, e a `foto-13` (a mais pesada) é servida reduzida pelo otimizador.
- CA-07: Todos os links externos têm `rel="noopener"`, todo texto é o do protótipo e os nomes no código estão em inglês.

## Validação INVEST

| Critério    | Status | Justificativa |
| ----------- | ------ | -------------- |
| Independent | ✅ | Depende só de pbi-001, pbi-002, pbi-003, pbi-004, pbi-005, pbi-006, pbi-007, pbi-008; não depende dos irmãos da mesma onda. |
| Negotiable  | ✅ | Detalhes de animação podem ser simplificados sem perder o conteúdo. |
| Valuable    | ✅ | O visitante percebe a entrega sozinha na página. |
| Estimable   | ✅ | Visual, textos e animações estão no protótipo congelado. |
| Small       | ✅ | Menos de 1 sprint. |
| Testable    | ✅ | Cada critério tem prova por comando, captura ou leitura de estilo no navegador. |

## Notas

- Regras da feature: RN-03, RN-04, RN-07, RN-08.
- Cobre RF14 (fechamento), RF16, RF17, RF18 e RF19.
- Fecha a feature; nada novo de conteúdo entra aqui.

---

Próximo passo rode `doninha-desenvolver` passando o ID deste PBI (ou o prompt `prompt-execucao-pbi-009.md`).
