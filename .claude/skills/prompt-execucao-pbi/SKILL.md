---
name: prompt-execucao-pbi
description: Cria o prompt de execução de um PBI (ou task) já analisado, para uma sessão nova rodar sozinha, sem supervisão (ex.: de madrugada). Usa o código real, números medidos, decisões já tomadas, condições de parada, checklist de fechamento e relatório final. Use quando o usuário pedir "gere o prompt de execução do PBI N", "prompt para outra sessão executar", "prompt noturno", "prompt de retomada" ou "atualize o prompt do PBI porque o estado mudou". Também serve para revisar ou atualizar um prompt de execução que ficou defasado.
---

# Como criar um prompt de execução de PBI

Um **prompt de execução** é o documento que você entrega a uma sessão nova para ela implementar um PBI do começo ao fim: preparar o ambiente, medir a linha de base, implementar, revisar, documentar, fechar e relatar. Quem lê não tem o contexto desta conversa e ninguém está presente para responder dúvidas. Por isso o prompt é um **contrato autocontido**: o que fazer, o que não fazer, como provar que está certo e quando parar.

Quando NÃO usar: tarefa pequena (até 3 arquivos, correção com causa conhecida) não precisa de prompt; peça a correção direto. Também não use para analisar ou descobrir o problema: o prompt só nasce depois que o PBI existe, com critérios de aceite escritos.

## Princípios

1. **O código manda, o documento descreve.** Antes de escrever, leia o código real que o PBI vai tocar. Cada afirmação do prompt sobre o código (arquivo, linha, texto, status HTTP, nome de função) foi conferida com `grep` ou leitura, não lembrada. Onde o PBI e o código divergirem, o prompt manda o executor registrar um desvio, não escolher em silêncio.
2. **Autocontido.** O executor lê o prompt, os arquivos que o prompt manda ler e o código. Nada de "como combinamos", "conforme a conversa" ou "o de sempre". Se uma decisão do responsável importa, ela está escrita no prompt com a data.
3. **Decidido antes, parado depois.** Toda decisão previsível já vem no prompt (com o motivo). O que não for previsível vira uma **condição de parada** explícita, nunca um palpite. Execução sem supervisão não pergunta: escolhe a opção mais conservadora, registra "Decisão autônoma: X, porque Y" e segue; só para nas condições listadas.
4. **Verificável.** Cada promessa tem um comando ou um teste que a prova. Números sempre dizem como foram medidos e como reproduzir.
5. **Escopo fechado.** O prompt lista o que PODE ser editado e o que é PROIBIDO. Tudo o mais é parada.
6. **Fechar é difícil de esquecer.** O prompt termina com um checklist que o executor relê item a item antes do merge.

## Antes de escrever: levante os fatos

Faça isto na ordem. Cada item vira uma frase do prompt.

1. **O PBI**: leia o documento do PBI (objetivo, critérios de aceite, validação INVEST, dependências) e, se existirem, os contratos de UX (design e experiência), a especificação e a lista de tarefas. Os critérios de aceite são imutáveis para o executor.
2. **A feature**: regras de negócio, decisões numeradas, ordem dos PBIs, arquivo de status e de estado do projeto.
3. **Prompts irmãos**: abra o prompt de execução mais recente da mesma feature ou de outra. Ele é o molde de formato e traz lições já pagas. Copie a estrutura, não o conteúdo.
4. **Guia comum**, se a feature tiver um (regras repetidas entre PBIs). Se ainda não tem e vai haver três ou mais prompts, crie um (seção abaixo) e faça o prompt apontar para ele.
5. **O código real**: liste os arquivos, meça tamanhos, conte as chamadas e os testes do assunto, leia as rotas ou serviços que as telas usam (status, corpo, mensagens de erro), leia os textos literais que não podem mudar. Anote o que está errado hoje (erros silenciosos, mensagens vagas).
6. **A linha de base**: meça (ou leia a medição mais recente e diga a data) tipos, testes, lint, build, auditorias e contagens que o PBI promete melhorar. Escreva "meça de novo antes de mudar" quando o número puder envelhecer.
7. **O estado do repositório e das outras frentes**: branch da feature, o que já foi publicado, se a base principal avançou, outras sessões ou branches que tocam os mesmos arquivos, worktrees existentes, banco e ambiente usados nos testes (nunca produção).
8. **O que já foi feito**: se o PBI não começa do zero (a base avançou, um bloco foi entregue por outro caminho), escreva isso. É a parte que mais envelhece.

## Onde salvar

Na pasta do próprio PBI, ao lado do documento dele: `<pasta-do-pbi>/prompt-execucao-pbi-NNN.md`. Nunca na raiz da feature nem solto no repositório. Arquivos que a execução vai criar (sessão, relatório, revisão, aprendizados) também vão nessa pasta, e o prompt os lista.

## Estrutura do prompt

Abra com **dois parágrafos de contexto**: quem o executor é ("executor autônomo do PBI NNN, assunto X, da feature Y, no app Z"), que a execução é sem supervisão, a regra de decidir sozinho e registrar, e que todo texto e artefato é em português. Depois, as seções numeradas abaixo. Mantenha os números, para o executor citar "§11".

### §0 Leitura obrigatória antes de qualquer coisa
Lista numerada, com caminho completo, do que ler **inteiro** (guia comum, aprendizados do PBI anterior, receita, a pasta modelo de código, regras do projeto, o PBI, o próprio prompt). Diga o que vale quando houver divergência (normalmente: o prompt vence o guia).

### §1 Missão e escopo
- Pasta do PBI e os arquivos que a execução cria.
- **Entrega**: o que fica pronto, em uma frase verificável, com o número de telas/rotas/módulos.
- **NÃO é deste PBI**: lista explícita (outras telas, rotas, schema, deploy, PR, merge na base principal, dependências novas).
- Se uma decisão posterior do responsável superou um critério de aceite, diga qual, desde quando, e mande registrar como desvio de especificação (SPEC_DEVIATION-NN). Os critérios continuam imutáveis; o desvio é que fica escrito.

### §2 Estado de partida (confira, não presuma)
- Pontas das branches e o último commit esperado, o que está publicado e o que está só local.
- Linha de base esperada com valores e data, e a ordem "meça de novo no ambiente de trabalho antes de mudar".
- Resultado esperado ao fim (contagens que devem cair, tamanhos que devem subir, rotas que devem ficar iguais).
- Subseção **"O que já foi feito"** e **"O que ainda NÃO foi feito"**, com fatos verificados e a data. Se o estado mudou desde que o prompt foi escrito, o executor confere e registra a diferença.

### §3 Pré-requisitos bloqueantes
Lista numerada de checagens que o executor faz primeiro; se qualquer uma falhar, **para sem alterar código**. Típicas: o PBI anterior está fechado e publicado; a árvore de trabalho está limpa; a base principal não avançou em arquivos do assunto (ou, se avançou, como reconciliar); nenhuma outra sessão na mesma branch; ambiente apontando para o banco local certo (host, porta, nome, rotinas agendadas desligadas), conferido por script sem imprimir credenciais; dependências instaladas; documentos do PBI presentes.

### §4 Mapa do código atual
Um bloco por tela, rota ou módulo: arquivo, tamanho, o que faz, **cada requisição** (método, caminho, corpo, ordem das chaves, cabeçalhos), textos literais (confirmações, avisos, rótulos), ordenações, e o comportamento atual em erro (o que mostra, o que ignora). Marque o que está errado hoje com **"Erro silencioso de hoje"** ou equivalente, para o executor reproduzir antes de migrar. Cite o que as rotas devolvem em cada status. Se um ramo não existe (ex.: a rota nunca devolve 404), diga que **não** deve ser criado código para ele.

### §5 Plano em blocos
Blocos sequenciais, cada um terminando em verificação rápida e commits atômicos:
- **Bloco 0**: preparo (ambiente de trabalho isolado, cópia de dependências e variáveis de ambiente, conferência do banco, medição da linha de base, documentos de especificação e tarefas).
- **Bloco de compartilhados**: ajustes de base que o assunto exige, cada um em commit próprio, sem editar teste existente de outro assunto.
- **Um bloco por tela/módulo**, do menor risco para o maior, cada um pelo ciclo completo: teste que fixa o comportamento atual **antes** de mexer; implementação; prova de equivalência (requisição idêntica, DOM idêntico, saída idêntica); tratamento de erro; testes reescritos; mutação ou teste que falha sem a correção.
- **Bloco de verificações e provas**: greps de proibidos, contagens, auditoria, build, tabela de rotas, medições de custo.
- **Bloco de relatório** de achados (o que fazia antes, o que faz agora, onde está testado).
- **Bloco de documentação** (receita, linha de base, regras do projeto, aprendizados).
- **Bloco de revisão**: revisão em passes por revisores independentes, corrigir tudo (inclusive sugestões menores), repetir sobre o delta até uma rodada sem achados, com limite de rodadas.
Diga quando fazer cópia de segurança no remoto (branch do PBI) e como retomar se a sessão cair (pelo registro da sessão e pelo log do git).

### §6 Regras invioláveis
Escopo de arquivos permitido e proibido; equivalência (requisição idêntica, sucesso idêntico, nomes públicos estáveis); sem tipo `any`; nada de SQL manual no banco; nenhuma chamada a serviço externo real; nunca pular hooks de commit; esforço de teste (um teste por comportamento, sem snapshots persistidos); limites de tamanho de arquivo.

### §7 Decisões autônomas já tomadas
Tudo o que o executor provavelmente perguntaria e que você já decidiu: ordem dos blocos, onde fica cada responsabilidade, textos por gênero, o que mostrar verbatim, o que não criar. Ele só muda isso se o código real impuser, e então registra.

### §8 Pontos de risco que exigem teste
Lista curta do que costuma quebrar neste tipo de trabalho (componentes de biblioteca em ambiente de teste, ordenação, ordem de chaves, valores vazios, estado depois de erro, resposta atrasada, duplo clique, hook de pre-commit). Cada ponto diz como provar, não só que existe.

### §9 Checklist antes de fechar
Itens objetivos que o executor relê antes do merge. Cada "não" volta para o código, não para o relatório. Inclua: nenhum erro silencioso, travas com teste e mutação, provas de equivalência refeitas **depois** das correções da revisão, contagens, greps vazios, arquivos abaixo do limite, documentos coerentes com o código final, ambiente de trabalho limpo.

### §10 Condições de parada
Lista com letras. O padrão: pré-requisito faltando; verificação vermelha após três correções por causa que não seja o ambiente; teste existente de outro assunto precisando de edição; base principal avançando com conflito que exige decisão de produto; diferença visível ou de requisição além do permitido; mudança de contrato de rota, schema ou dependência nova; qualquer sinal de tocar banco ou serviço que não seja o local; revisão com achado aberto após o limite de rodadas; comportamento não descrito que exija decisão de produto. **Ao parar**: não publicar código incompleto, deixar a árvore limpa, escrever motivo e estado exato no registro e no relatório, e não iniciar o PBI seguinte.

### §11 Encadeamento (opcional)
Se o PBI seguinte deve rodar logo depois, diga **quando** (só se este fechou sem parada e com tudo do checklist em dia), **qual prompt** abrir, e **onde parar** ("depois deste, não comece nenhum outro; só o responsável libera"). Se o executor deve desligar o computador no fim, diga a condição exata e o comando, e que o relatório é gravado antes.

### §12 Relatório final
Onde grava (arquivo na pasta do PBI) e o que contém: o que foi feito, commits, merge, testes antes e depois, tamanhos e rotas, decisões autônomas a confirmar, pendências, links. Termine com uma seção **"Para o responsável confirmar"**: decisões que mexem em comportamento, rotas ruins para o backend, custos medidos, o que não ficou perfeito e o que mudaria, e confirmação explícita de que os PBIs seguintes **não** foram iniciados.

## Guia comum entre prompts

Quando vários PBIs da mesma feature repetem regras, escreva uma vez um arquivo de regras comuns (ambiente, como medir, política de erro, padrão de código, ciclo por assunto, testes, revisão, fechamento em ordem fixa, checklist, paradas, relatório) e faça cada prompt dizer: "leia inteiro; este prompt só acrescenta o que é específico; onde divergir, vale este prompt". O prompt fica curto e específico; o guia concentra o que o piloto ensinou. Atualize o guia quando uma regra mudar, e cite a decisão que a mudou.

## Regras de redação

- Português claro, frases curtas, nomes de arquivo e comando entre crases, **caminhos completos** para o que o executor abre.
- Verbo no imperativo para o que fazer; "confira" para o que verificar; "PARE" em maiúsculas só nas paradas.
- Cada número traz data, ambiente e como reproduzir. Número de documento antigo não entra sem conferência.
- Nomes de função, arquivo e rótulo vêm do código real. Texto que a tela mostra é copiado literal.
- Sem segredos (senha de banco, tokens, chaves): o prompt manda ler do ambiente "sem imprimir".
- Não cite ferramentas de qualidade que o projeto não usa e não liste como pendência o que não se aplica.
- Mencione armadilhas de ambiente que já custaram tempo (fim de linha, aspas em shell, saída em outra codificação, hooks que reescrevem comandos, instalador que desfaz ajuste). Uma linha cada.
- Perguntas ao usuário, se houver antes de entregar o prompt, em múltipla escolha. Dentro do prompt não há perguntas.

## Atualizar um prompt que ficou defasado

Quando algo mudou (a base principal avançou, outro PBI fechou, um bloco já foi entregue):
1. Releia o código e o histórico do repositório; não confie no que o prompt dizia.
2. Reescreva o primeiro item de §2 com as pontas atuais e a data, e acrescente/atualize **"O que já foi feito"** e **"O que ainda NÃO foi feito"**.
3. Corrija números da linha de base e do resultado esperado, a lista de pastas e arquivos do escopo e os pré-requisitos de §3.
4. Se entrou escopo novo, acrescente o bloco no mapa do código (§4) com a mesma profundidade dos outros, as regras de erro, os blocos de §5 e os números de §9.
5. Atualize também o documento do PBI (critérios e notas) e os documentos de decisão, para o prompt não contradizer o PBI.

## Verificação antes de entregar o prompt

- Todos os caminhos existem; todos os comandos foram pensados para o ambiente do executor (sistema, shell).
- Cada afirmação sobre o código foi conferida hoje.
- Cada critério de aceite tem pelo menos um bloco, uma prova e um item do checklist.
- Escopo permitido e proibido não se contradizem; as paradas cobrem o que o escopo proíbe.
- Não há pergunta ao usuário, "a definir" nem "ver conversa".
- O prompt não depende de nada que só esta conversa sabe.
- Se há encadeamento, a condição de seguir e o ponto de parada estão escritos.
- Informe ao usuário, ao entregar: o caminho do arquivo, o que você conferiu, o que é decisão sua (para ele confirmar) e o que não pôde ser conferido.

## Esqueleto

```markdown
Você é o executor autônomo do PBI NNN (<assunto>) da feature <nome> do <app>. **Execução SEM supervisão**: o usuário NÃO está presente. NÃO faça perguntas; escolha a opção mais conservadora, registre "Decisão autônoma: X, porque Y" em `<registro-da-sessao>.md` e siga. As ÚNICAS paradas são as do §10. Todo texto e artefato em PT-BR.

# 0. Leitura obrigatória
1. <guia comum, caminho completo>  2. <aprendizados e receita>  3. <pasta modelo de código>  4. <documentos do PBI>  5. este arquivo.

# 1. Missão e escopo
Pasta: <caminho>. Arquivos que a execução cria: <lista>.
Entrega: <uma frase verificável>.
NÃO é deste PBI: <lista>.
Desvios de especificação: <critério, decisão, data, SPEC_DEVIATION-NN>.

# 2. Estado de partida (confira, não presuma)
- Branches e pontas, publicado ou local.
- Linha de base (data, como medir) e resultado esperado.
## 2.1 O que já foi feito / O que ainda NÃO foi feito

# 3. Pré-requisitos BLOQUEANTES
1. ... 2. ... (se faltar, PARE sem alterar código)

# 4. Mapa do código atual
**<Tela/Rota/Módulo>** (`arquivo`, N linhas): requisições, textos literais, comportamento em erro hoje, rotas e seus status.
**Regras de erro por tela**: ...

# 5. Plano em blocos
Bloco 0 ... Bloco de compartilhados ... Blocos C1..Cn ... Bloco V (provas) ... Bloco R (relatório de achados) ... Bloco D (docs) ... Bloco Q (revisão e fechamento).

# 6. Regras invioláveis
# 7. Decisões autônomas já tomadas
# 8. Pontos de risco a tratar com teste
# 9. Checklist antes de fechar
# 10. Condições de parada
# 11. Encadeamento (opcional)
# 12. Relatório final
```
