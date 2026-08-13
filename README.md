<div align="center">

<img src="https://images.squarespace-cdn.com/content/v1/679647ea404fcd2e5824402c/54e96729-74d6-4ad6-aa92-57d1e0f0eb49/principios%2Bhorizontal.png" alt="Identidade oficial do aplicativo ARARA - entre Sentimentos e Palavras" width="100%">

# ARARA - Autoria em movimento

### Plataforma brasileira de escrita, acompanhamento pedagógico e letramento em IA

[![Produção](https://img.shields.io/badge/status-em%20produção-146A6F)](#estado-do-produto)
[![Trilhas](https://img.shields.io/badge/versão-Trilhas-F28C28)](#arara-trilhas)
[![ENEM](https://img.shields.io/badge/versão-ENEM-B5342A)](#arara-enem)
[![Evidência](https://img.shields.io/badge/validação-385%20redações%20periciadas-146A6F)](./docs/EVIDENCIAS.md)
[![Software proprietário](https://img.shields.io/badge/software-proprietário-111111)](LICENSE.md)
[![Conteúdo](https://img.shields.io/badge/conteúdo-CC%20BY--ND%204.0-F28C28)](LICENSE.md)

**Uma plataforma, duas versões: Trilhas e ENEM**

[Acessar o ARARA](https://arara.cordel2pontozero.com) · [Apresentação](./docs/APRESENTACAO.md) · [Evidências](./docs/EVIDENCIAS.md) · [Arquitetura](./docs/ARQUITETURA.md) · [Roadmap](./docs/ROADMAP.md)

</div>

---

## Educação com IA não pode apagar o percurso humano

Quando sistemas generativos produzem textos em segundos, a questão educacional deixa de
ser **como escrever mais rápido**. O desafio passa a ser preservar e tornar visível o
caminho de quem aprende a imaginar, argumentar, revisar e assumir a própria voz.

O **ARARA** é a plataforma autoral e pedagógica do ecossistema Cordel 2.0. Ela combina
experiências de escrita, versionamento, indicadores formativos e mediação docente para
apoiar a autoria - sem transformar a inteligência artificial em uma autora oculta.

Ele não chega sozinho: o ARARA é o meio de **oficinas, programas e trilhas formativas** de
letramento digital, leitura e escrita conduzidas pela Cordel 2.0. O que se contrata é
formação; o software é como ela acontece.

> **A tecnologia observa sinais, organiza percursos e sugere revisão.
> A decisão final continua humana.**

---

## Duas versões, uma origem

O ARARA nasceu como plataforma de trilhas de escrita. A versão ENEM veio depois, sobre a
mesma base de percurso, versionamento e mediação docente. **São duas versões do mesmo
produto** - por isso vivem na mesma origem, compartilham arquitetura e princípio
pedagógico, e se diferenciam pelo que entregam e para quem.

| | **ARARA Trilhas** | **ARARA ENEM** |
|---|---|---|
| **O que é** | Trilhas de escrita poética e acadêmica com acompanhamento docente | Correção de redação dissertativo-argumentativa com ancoragem na matriz do ENEM |
| **Para quem** | Escolas, universidades, bibliotecas, projetos culturais, laboratórios de escrita | Estudantes de ensino médio, cursinhos, redes de preparação, projetos de acesso ao ensino superior |
| **Entrega** | Percurso autoral registrado, Raio-X do Texto, devolutiva pedagógica | Nota por competência (C1-C5), devolutiva por competência e plano de reescrita |
| **Diferencial** | Torna o processo de escrita visível e recuperável | Dupla leitura independente e média aritmética, como no ENEM real |
| **Estado** | Em produção | **Em produção desde 22/06/2026** |
| **Evidência** | Motor H2 com testes dedicados | [385 redações periciadas por 2 especialistas humanos](./docs/EVIDENCIAS.md) |

---

## ARARA Trilhas

A versão de origem. Três movimentos que sustentam o percurso autoral.

| Movimento | Experiência |
|---|---|
| **Trilha Poética** | Criação verso a verso, territórios poéticos, sentimentos, ecos, rimas, estimativa métrica e histórico do poema. |
| **Trilha Acadêmica** | Contexto de escrita, autosave, checkpoints, versões e o **Motor H2**, que transforma análise em foco de revisão. |
| **Espaço do Educador** | Leitura de percursos, textos, poemas, conflitos de escrita, indicadores e devolutivas pedagógicas. |

### Trilha Poética

A escrita acontece **um verso por vez**. Cada poema pode ser salvo, reaberto, concluído e
revisado, mantendo rastros do processo criativo.

Apoios disponíveis:

- tômbola opcional de sentimentos;
- substantivo e adjetivos definidos pela própria pessoa;
- territórios poéticos vinculados ao cotidiano;
- disparos criativos não generativos para o primeiro verso;
- reconhecimento de autonomia quando a escrita começa sem ajuda;
- leitura leve de rimas, ecos finais, sílabas poéticas e pulso métrico.

A Arara não entrega um poema pronto: ela cria condições para que a pessoa encontre uma
imagem e continue com sua própria voz.

### Trilha Acadêmica e Motor H2

A trilha acadêmica organiza a produção como um percurso verificável:

1. definição de gênero, tema, objetivo e interlocutor;
2. escrita com autosave;
3. checkpoints e histórico de versões;
4. geração do **Raio-X do Texto**;
5. seleção de focos de revisão;
6. produção de uma nova versão.

O Motor H2 observa dimensões como situação de escrita, estrutura e progressão, coesão,
argumentação, estilo e clareza, curadoria e referências.

A análise não funciona como sentença automática. Ela é convertida em perguntas,
prioridades e próximos passos.

### Espaço do Educador

A área docente foi desenhada para ampliar a mediação - não para criar vigilância
algorítmica. Ela permite acompanhar textos e poemas em percurso, versões e checkpoints,
leituras H2, conflitos de escrita, focos de revisão, indicadores poéticos e devolutivas
vinculadas ao trabalho do estudante.

A arquitetura já prepara recortes por turma, linha do tempo individual, permissões
docentes e uma futura camada de assistência denominada **Arara colega Educador**.

---

## ARARA ENEM

A versão de correção de redação. **Em produção desde 22 de junho de 2026**, com serviço
de correção em domínio próprio e validação contra corpus pericial.

### Como corrige

O ENEM real submete cada redação a **duas correções independentes**, e a nota final é a
**média aritmética** das duas - é por isso que notas como 860, 940 e 980 existem. O ARARA
ENEM reproduz esse desenho:

1. leitura da proposta e do texto do estudante;
2. **duas leituras independentes** da mesma redação;
3. pontuação por competência, **C1 a C5**, ancorada na matriz de referência do INEP;
4. média aritmética entre as duas leituras, sem arredondamento para baixo;
5. devolutiva por competência;
6. plano de reescrita - o produto final é a próxima versão, não a nota.

### O que o diferencia

- **Ancoragem na matriz do INEP**, competência por competência, e não uma nota global
  opaca.
- **Dupla leitura independente**, o mesmo mecanismo que o exame usa para reduzir o peso da
  subjetividade de um único corretor.
- **Validação contra corpus pericial** - não contra a própria intuição da equipe. Ver
  [Evidências](./docs/EVIDENCIAS.md).
- **A redação não é gerada.** O sistema corrige e orienta a reescrita; ele não escreve a
  redação do estudante. Essa é uma decisão de produto, não uma limitação técnica.

### Estado

- serviço de correção publicado em domínio próprio da Cordel 2.0;
- integração validada em produção com redação real;
- bancada de evidências congelada com manifesto de integridade;
- disponível para pilotos institucionais.

---

## Evidência: o que a validação mostrou, inclusive contra nós

Um corretor automático de redação só vale o que sua validação demonstra. A bancada de
evidências do ARARA ENEM foi construída contra **redações reais periciadas por
especialistas humanos**, não contra exemplos escolhidos pela própria equipe.

- **385 redações** de ENEM, cada uma corrigida por **dois especialistas humanos**
  independentes, seguindo o Manual do Corretor - corpus acadêmico público produzido por
  universidade brasileira;
- **99 redações nota 1000** reais, como teste do topo;
- **180 redações pareadas** entre a grade padrão e a inclusiva;
- **manifesto SHA256** amarrando dados, resultados e o código que os gerou, de modo que o
  relatório descreva um estado congelado e verificável.

**Peritos humanos discordam mais do que se imagina.** Em **37% das redações**, os dois
especialistas diferiram em mais de 100 pontos **na nota total**. O teto humano medido -
perito contra perito - é **QWK 0,693**. Isso estabelece o piso realista de concordância que
qualquer corretor, humano ou automático, pode alcançar.

**Encontramos e corrigimos um erro que prejudicava o estudante.** Ao combinar as duas
leituras, o sistema arredondava para baixo em **47% das notas de competência**, tirando em
média **113 pontos** do estudante. Corrigido, com o risco de inflação medido antes da
mudança: redações acima de 200 pontos do humano foram de 7 para 9, em 385.

**E encontramos um erro na nossa própria régua.** A referência humana da bancada tinha sido
montada com o mesmo arredondamento defeituoso que investigávamos, o que nos fazia parecer
melhores. Corrigida a régua, o corretor está em **58-74% do teto humano**, e sua vantagem
sobre um preditor que só conta caracteres **deixa de ser estatisticamente demonstrável**
neste n e nesta calibração. Removida a deflação, o mesmo corretor chega a 95% do teto - a
capacidade de discriminar existe; o que está errado é a calibração, e essa é a prioridade
atual.

**O que ainda está aberto:** o sistema dá em média 762 nas redações que tiraram 1000 de
verdade, sobram 44 pontos de deflação, e a Competência 2 é a mais fraca.

Publicar isto é deliberado: **um sistema de avaliação que não expõe os próprios defeitos não
deveria ser usado para avaliar ninguém.**

Leia [`docs/EVIDENCIAS.md`](./docs/EVIDENCIAS.md).

---

## IA ajustada para apoiar autoria

O ARARA separa responsabilidades:

```text
pessoa autora
    ↓ define contexto, intenção e texto
registro do percurso
    ↓ preserva versões, escolhas e checkpoints
motores determinísticos
    ↓ observam sinais formais e padrões verificáveis
camada semântica governada
    ↓ apoia interpretação e revisão, quando habilitada
educador + estudante
    ↓ decidem o que revisar, manter ou transformar
nova versão autoral
```

Essa separação favorece transparência, auditabilidade e uso pedagógico responsável.

## Engenharia por trás da experiência

```text
┌──────────────────────────────────────────────────────────────┐
│ Experiência: Trilhas (Poética · Acadêmica · Educador) + ENEM │
├──────────────────────────────────────────────────────────────┤
│ Aplicação: Next.js 16 · React 19 · TypeScript 6 · Zod        │
├──────────────────────────────────────────────────────────────┤
│ Percurso: autosave · checkpoints · versões · analysis_runs   │
├──────────────────────────────────────────────────────────────┤
│ Correção ENEM: serviço dedicado · dupla leitura · C1-C5      │
├──────────────────────────────────────────────────────────────┤
│ Dados: Supabase SSR · Postgres · RPCs · Edge Functions       │
├──────────────────────────────────────────────────────────────┤
│ Segurança: magic link · check-in · turma · Row Level Security│
└──────────────────────────────────────────────────────────────┘
```

Detalhes técnicos que importam:

- monorepo com workspaces;
- renderização e sessão via Supabase SSR;
- isolamento de dados com Row Level Security;
- regras de onboarding encapsuladas em RPCs;
- validação de entrada com Zod;
- autenticação por magic link;
- vínculo entre perfil, check-in e turma;
- versionamento persistente dos textos;
- correção ENEM isolada em serviço próprio, fora do navegador;
- testes dedicados ao Motor H2, relatórios, feedback e repertório;
- arquitetura modular preparada para novas versões.

## Estado do produto

### Em produção

- autenticação por magic link e validação de acesso por check-in;
- vínculo com turma ou usuário externo;
- **ARARA Trilhas** - Poética, Acadêmica, Motor H2 e Raio-X do Texto;
- **ARARA ENEM** - correção C1-C5 com dupla leitura;
- autosave, checkpoints e histórico;
- dashboard do estudante;
- primeira camada do Espaço do Educador;
- base estrutural de comunidade e analytics de produto.

### Em evolução

- permissões docentes ampliadas;
- recorte por turma e timeline por estudante;
- assistência da Arara para educadores;
- dashboard de evolução por competência;
- banco de temas com textos motivadores;
- camada semântica governada;
- comunidade entre turmas.

## Como o ARARA entra na formação

A Cordel 2.0 é uma startup de **formação, consultoria e design pedagógico**. O que
entregamos é aprendizado; o software é o meio pelo qual ele acontece. O ARARA não é vendido
como licença de ferramenta solta - ele sustenta oficinas, programas e trilhas formativas de
letramento digital, leitura e escrita, com acompanhamento humano.

| Frente | Como o ARARA entra |
|---|---|
| **B2B** | Escolas, redes privadas, cursinhos e institutos: programas de escrita e de preparação para o ENEM, com formação da equipe docente e uso do Espaço do Educador. |
| **B2G** | Secretarias, políticas públicas e programas territoriais: oficinas de letramento digital e escrita em rede pública, com relatórios institucionais de percurso. |
| **B2C** | Estudantes e escritores: acesso direto às trilhas e ao **simulador de redação ENEM**, com devolutiva por competência e plano de reescrita. |

O **simulador de redação ENEM** atende às três frentes - é o mesmo motor de correção,
mudando o desenho da formação em volta dele.

### Para quem

- escolas e redes de ensino;
- cursinhos e programas de acesso ao ensino superior;
- secretarias e programas públicos;
- universidades e programas de formação docente;
- projetos culturais e bibliotecas;
- laboratórios de escrita;
- instituições que desejam usar tecnologia sem substituir autoria.

## Documentação

- [Apresentação institucional](./docs/APRESENTACAO.md)
- [Evidências e validação](./docs/EVIDENCIAS.md)
- [Arquitetura técnica](./docs/ARQUITETURA.md)
- [Roadmap](./docs/ROADMAP.md)

## O ecossistema Cordel 2.0

O ARARA é um dos cinco softwares próprios da Cordel 2.0:

| Software | O que é |
|---|---|
| **ARARA** | Trilhas de escrita e correção ENEM - *este repositório* |
| [**INANNA**](https://github.com/Cordel2pontozero/Inanna-apresentacao-oficial) | Jogo de cordel que torna visível a previsão da próxima palavra |
| [**TICA**](https://github.com/Cordel2pontozero/tica-apresentacao-oficial) | Chatbot reflexivo de escrita guiada |
| [**Registro Coletivo**](https://github.com/Cordel2pontozero/registro-coletivo-apresentacao) | Território, xilogravura e construtor de espaços culturais |
| [**Dataset Popular Brasileiro**](https://github.com/Cordel2pontozero/dataset-popular-Brasileiro) | Dataset aberto de cultura popular |

## Identidade e contato

<div align="center">
<img src="./assets/cordel-logo-preto.png" alt="Logomarca oficial Cordel 2.0" width="180">

**Cordel 2.0 - Educação, Cultura e Inovação**
Formação em letramento digital com softwares próprios
Salvador - Bahia - Brasil

[www.cordel2pontozero.com](https://www.cordel2pontozero.com) · [contato@cordel2pontozero.com](mailto:contato@cordel2pontozero.com)

</div>

## Licenciamento

O **software ARARA é proprietário** - todos os direitos reservados. Este repositório contém
apenas a página de apresentação do produto. Textos institucionais e materiais autorais
seguem **CC BY-ND 4.0**. Detalhes em [LICENSE.md](LICENSE.md).

Pilotos, parcerias e uso educacional: **contato@cordel2pontozero.com**.
