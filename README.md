# Estúdio de Pilates Taciane Martins · website

Workspace do site do Estúdio de Pilates Taciane Martins (Vilhena-RO). Estrutura repetida do workspace do TaciMix: skills em `.claude/skills`, análise e PBIs em `.doninha`, protótipo e design system em `docs`, o app Next.js em `repos/taciane-pilates-website`.

| Pasta | O que tem |
| --- | --- |
| `.claude/skills/` | Skills do projeto, incluindo `identidade-pilates-taciane-martins` (cores, logo, fontes, tom de voz) |
| `.doninha/` | Feature, decisões, 9 PBIs, prompts de execução e orquestrador (`docs/modules/module_001_website/...`) |
| `docs/prototipo/` | Protótipo HTML congelado (fonte de verdade do visual) |
| `docs/design-system/` | Resumo do design system da marca |
| `assets/web/` | 15 fotos do estúdio extraídas do protótipo |
| `repos/taciane-pilates-website/` | App Next.js (App Router, CSS Modules, tokens) |
| `logs/` | Logs técnicos por tarefa |

Para rodar o site: `cd repos/taciane-pilates-website && npm install && npm run dev`. Regras de estilo e estrutura: [CLAUDE.md](repos/taciane-pilates-website/CLAUDE.md). Próximo passo da feature: executar os PBIs (`.doninha/docs/modules/module_001_website/feature_001_website-taciane-nextjs/orquestrador-pbis.md`).
