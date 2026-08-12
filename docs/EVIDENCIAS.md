# Evidências e validação — ARARA ENEM

*Última atualização: agosto de 2026*

Um corretor automático de redação só vale o que sua validação demonstra. Este documento
descreve **como o ARARA ENEM foi testado**, contra o quê, e o que os testes revelaram —
inclusive o que revelaram de errado no próprio sistema.

---

## O princípio

Validar um corretor contra exemplos escolhidos pela própria equipe não prova nada: mede-se
o sistema contra a intuição de quem o construiu. A bancada do ARARA ENEM foi montada sobre
o oposto disso — **redações reais, corrigidas por especialistas humanos, antes e
independentemente de qualquer contato com o nosso sistema**.

---

## O corpus

| Conjunto | Volume | Natureza |
|---|---|---|
| Corpus pericial | **385 redações** de ENEM | cada uma corrigida por **2 especialistas humanos independentes**, seguindo o Manual do Corretor do ENEM |
| Teto de referência | **179 redações nota 1000** reais | limite superior de desempenho |

O corpus pericial é material acadêmico **público, de uso livre para pesquisa**, produzido
por universidade brasileira. Sua proveniência, licença, hashes e **defeitos conhecidos**
estão documentados junto aos dados.

Registrar os defeitos do corpus faz parte do método: um conjunto de referência com
problemas conhecidos e declarados é utilizável; um conjunto apresentado como impecável não
é auditável.

---

## Achado 1 — o piso realista de concordância

Corrigir redação é uma tarefa com margem irredutível de discordância. O corpus pericial
permitiu medir essa margem entre humanos treinados:

> Em **37% das redações**, os dois especialistas humanos diferiram em **mais de 100
> pontos** no total.

Isso não desqualifica a correção humana — é a natureza da tarefa. Mas estabelece o
**parâmetro honesto de avaliação**: um corretor automático deve ser comparado ao intervalo
de concordância entre humanos, não a uma verdade única que não existe.

Qualquer sistema que prometa concordância perfeita com "a nota correta" está prometendo
algo que dois corretores humanos treinados não entregam entre si.

---

## Achado 2 — um erro nosso, que prejudicava o estudante

O ARARA ENEM reproduz o desenho do exame: **duas leituras independentes** da mesma redação,
com a nota final sendo a **média aritmética** das duas. É o que o INEP faz, e é por isso que
notas de redação do ENEM aparecem como 860, 940 ou 980 — valores impossíveis se houvesse
arredondamento.

Na combinação das duas leituras, o sistema **arredondava para baixo**. Sempre para baixo,
nunca para cima.

| | |
|---|---|
| Notas de competência afetadas | **47%** |
| Perda média por redação | **113 pontos** |
| Direção do erro | sempre contra o estudante |

Exemplo: numa competência em que uma leitura atribui 120 e a outra 160, a média é 140 — e
140 é o que o ENEM registraria. O sistema registrava 120.

O erro foi **identificado, corrigido e documentado**.

### Por que publicamos isto

Corrigir a falha fez as notas do sistema subirem. Um leitor desconfiado pode ler isso como
"afrouxaram o corretor para agradar". A ordem dos fatos importa e está registrada: o erro
foi encontrado **pela comparação com a correção humana pericial**, e a correção apenas
alinhou o sistema ao que o próprio INEP faz.

Publicar um defeito que nos favorecia corrigir em silêncio é o critério que aplicamos:
**um sistema de avaliação que não expõe os próprios defeitos não deveria ser usado para
avaliar ninguém.**

---

## Integridade e reprodutibilidade

A bancada é tratada como **dossiê congelado**, não como arquivo de trabalho:

- **manifesto SHA256** cobrindo dados brutos, resultados e o código que os gerou;
- os dados de execução ficam **fora do repositório de código** — evidência precisa ser
  imutável, e código muda;
- contabilidade de custo de execução registrada chamada a chamada;
- respostas cruas do modelo preservadas, permitindo reanálise sem reexecução.

A separação é o ponto: **código versionado, dado congelado, e um manifesto amarrando os
dois.** Um relatório de evidência vale por descrever um estado verificável; misturá-lo a
arquivos que sofrem rebase e merge convida à alteração silenciosa.

---

## O que não está publicado

Este documento descreve **método e resultados**. Não publicamos os prompts, os limiares de
decisão, a configuração de modelo nem o código do serviço de correção — são o núcleo
proprietário do ARARA ENEM.

Instituições avaliando um piloto podem solicitar acesso ao relatório completo da bancada,
incluindo o artigo acadêmico derivado dos achados, mediante contato.

---

## Estado e continuidade

- correção em produção desde **22 de junho de 2026**, em serviço próprio;
- bancada de evidências congelada em **julho de 2026**;
- artigo acadêmico derivado dos achados, em preparação;
- próximas rodadas: ampliação do corpus e acompanhamento longitudinal de reescrita.

---

**Cordel 2.0 Inova Simples (I.S.)** — Salvador, Bahia
[contato@cordel2pontozero.com](mailto:contato@cordel2pontozero.com) · [www.cordel2pontozero.com](https://www.cordel2pontozero.com)
