# Evidências e validação — ARARA ENEM

*Bancada de 27/07/2026 · última atualização desta página: agosto de 2026*

Um corretor automático de redação só vale o que sua validação demonstra. Este documento
descreve **como o ARARA ENEM foi testado**, contra o quê, e o que os testes revelaram —
inclusive, e principalmente, o que revelaram de errado no próprio sistema e no próprio
método de medição.

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
| Corpus pericial | **385 redações** de ENEM | cada uma corrigida por **2 especialistas humanos independentes**, seguindo o Manual do Corretor |
| Teste do topo | **99 redações nota 1000 reais** | limite superior de desempenho |
| Pareado inclusivo | **180 redações** | mesma redação nas grades padrão e inclusiva |

Corpus acadêmico **público e de uso livre para pesquisa** (`kamel-usp/aes_enem_dataset`,
Apache-2.0), produzido por universidade brasileira. Sua proveniência, licença, hashes e
**defeitos conhecidos** estão documentados junto aos dados.

Registrar os defeitos do corpus faz parte do método: um conjunto de referência com
problemas conhecidos e declarados é utilizável; um conjunto apresentado como impecável não
é auditável.

---

## Achado 1 — o piso realista de concordância

Corrigir redação é uma tarefa com margem irredutível de discordância. O corpus pericial
permitiu medir essa margem entre humanos treinados:

> Em **37% das redações**, os dois especialistas humanos diferiram em **mais de 100 pontos
> na nota total** (escala de 0 a 1000).

Medido como concordância estatística, o **teto humano** — perito individual contra perito
individual — fica em **QWK 0,693**, com erro médio absoluto de 96 pontos.

Isso não desqualifica a correção humana: é a natureza da tarefa. Mas estabelece o
**parâmetro honesto de avaliação**. Qualquer sistema que prometa concordância perfeita com
"a nota correta" está prometendo algo que dois corretores humanos treinados não entregam
entre si.

---

## Achado 2 — um erro nosso, que prejudicava o estudante

O ARARA ENEM reproduz o desenho do exame: **duas leituras independentes** da mesma redação,
com a nota final sendo a **média aritmética** das duas. É o que o INEP faz, e é por isso que
notas de redação do ENEM aparecem como 860, 940 ou 980 — valores impossíveis se houvesse
arredondamento para uma grade.

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

**E medimos o risco antes de mexer:** o número de redações que passariam a receber mais de
200 pontos acima do que os humanos deram foi de **7 para 9, em 385**. Alternativas mais
generosas — usar a leitura mais alta, por exemplo — levariam esse número a 27 e 28, e
**foram descartadas exatamente por isso**. A trava contra leitura isolada generosa demais
permaneceu intacta, e nenhum descritor do INEP foi afrouxado.

---

## Achado 3 — o erro estava também na nossa régua

Este é o achado mais desconfortável, e por isso o registramos com destaque.

Ao montar a **referência humana** da bancada, aplicamos nela o mesmo arredondamento
defeituoso que estávamos investigando. Como 41,1% das médias dos peritos caíam entre duas
faixas, isso **rebaixou o próprio alvo** — e fez o corretor parecer melhor do que era.

| | com a régua errada | **corrigido** |
|---|---|---|
| Viés | −71,8 | **−112,9** |
| Erro médio absoluto | 109,2 | **137,8** |
| Concordância (QWK) | 0,577 | **0,493** |
| Posição frente ao teto humano | 83% | **58–74%** |

A consequência mais dura da correção:

> Com a referência certa, **o corretor não supera com significância estatística um preditor
> que apenas conta caracteres** na nota total, com este n e esta calibração
> (ΔQWK +0,014; IC95 [−0,071; 0,092], que cruza zero).

O diagnóstico, porém, aponta para onde agir: **removida a deflação**, o mesmo corretor salta
para **QWK 0,658 — 95% do teto humano** — e passa a bater a baseline com folga. A capacidade
de discriminar existe; o que está errado é a régua. Isso transforma o plano de calibração de
desejável em **urgente**.

A errata ficou **registrada no relatório técnico, não apagada**.

---

## O que ainda está errado

Não vendemos a correção como se estivesse resolvida.

**1. O sistema quase nunca dá a nota máxima.** Nas 99 redações que tiraram 1000 no ENEM de
verdade, o corretor deu em média **762**. Em três competências — argumentação, coesão e
proposta de intervenção — ele **nunca**, nenhuma vez, atribuiu a faixa de 200. O estudante
de altíssimo desempenho continua sendo subavaliado.

**2. Ainda sobra deflação.** Mesmo depois da correção do arredondamento, o sistema dá em
média **44 pontos a menos** que os humanos. Parte vem das leituras do modelo, parte de
outros arredondamentos internos.

**3. A avaliação de repertório (Competência 2) é a mais fraca.** É a que mais se distancia
do julgamento humano — coerente com ser a competência que mais exige interpretação de
conteúdo, e não de forma.

---

## O que a bancada confirmou

Nem tudo foi correção de rota. Dois resultados se sustentaram:

- **O teto humano** (QWK 0,693) — medido entre peritos individuais, sem arredondamento
  envolvido, portanto não afetado pela errata.
- **A camada inclusiva faz o que promete.** Comparando as duas correções do **mesmo texto**
  nas grades padrão e inclusiva, em 180 redações pareadas, a flexibilização aparece
  exatamente onde deveria (norma, organização, coesão) e **não** aparece onde não poderia
  (repertório e proposta de intervenção) — a Competência 5 saiu até ligeiramente mais
  rigorosa na grade inclusiva. É o teste da promessa legal da Lei 13.146/2015.

---

## Integridade e reprodutibilidade

A bancada é tratada como **dossiê congelado**, não como arquivo de trabalho:

- **manifesto SHA256** cobrindo dados brutos, resultados e o código que os gerou;
- os dados de execução ficam **fora do repositório de código** — evidência precisa ser
  imutável, e código muda;
- **694 correções pagas** contabilizadas chamada a chamada, com custo registrado;
- respostas cruas do modelo preservadas, permitindo reanálise sem reexecução.

A separação é o ponto: **código versionado, dado congelado, e um manifesto amarrando os
dois.**

---

## Por que publicamos tudo isto

Corrigir o arredondamento fez as notas do sistema subirem. Um leitor desconfiado pode ler
isso como "afrouxaram o corretor". A ordem dos fatos está registrada: o erro foi encontrado
**pela comparação com a correção humana pericial**, e a correção apenas alinhou o sistema ao
que o próprio INEP faz.

E, no mesmo relatório, publicamos o achado que **desfavorece** o produto — a régua torta que
nos fazia parecer melhores, e a vantagem sobre a baseline que deixou de ser demonstrável.

O critério é este:

> **Um sistema de avaliação que não expõe os próprios defeitos não deveria ser usado para
> avaliar ninguém.**

---

## O que não está publicado

Este documento descreve **método e resultados**. Não publicamos os prompts, os limiares de
decisão, a configuração de modelo nem o código do serviço de correção — são o núcleo
proprietário do ARARA ENEM.

Instituições avaliando um piloto podem solicitar acesso ao relatório completo da bancada,
incluindo a errata na íntegra e o artigo acadêmico derivado dos achados.

---

## Estado e continuidade

- correção em produção desde **22 de junho de 2026**;
- bancada de evidências congelada em **27 de julho de 2026**, com errata da mesma data;
- **prioridade atual: calibração da deflação** — é o que separa o corretor de 95% do teto
  humano;
- destravar a faixa de 200 em C3, C4 e C5;
- artigo acadêmico derivado dos achados, em preparação.

---

**Cordel 2.0 - Educação, Cultura e Inovação** — Salvador, Bahia
[contato@cordel2pontozero.com](mailto:contato@cordel2pontozero.com) · [www.cordel2pontozero.com](https://www.cordel2pontozero.com)
