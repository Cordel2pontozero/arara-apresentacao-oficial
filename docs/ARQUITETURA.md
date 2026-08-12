# Arquitetura técnica do ARARA

## Visão geral

O ARARA utiliza uma arquitetura web modular, centrada em Supabase e Next.js, com separação entre experiência de escrita, persistência do percurso, análise e acompanhamento docente.

As duas versões do produto — **Trilhas** e **ENEM** — compartilham a mesma aplicação, o mesmo modelo de percurso e o mesmo controle de acesso. O que as distingue é a camada de análise acionada: o **Motor H2** nas Trilhas, o **serviço de correção** na versão ENEM.

```text
apps/web/          aplicação Next.js
supabase/          migrations, políticas, RPCs e Edge Functions
packages/          módulos compartilhados
docs/              arquitetura, avaliação e deploy
```

## Camada de aplicação

- **Next.js 16** com App Router;
- **React 19**;
- **TypeScript 6**;
- **Zod** para validação;
- **Supabase SSR** para sessão e acesso a dados;
- **Vercel Analytics** para telemetria de produto.

## Identidade e acesso

O fluxo de autenticação combina:

1. e-mail informado no check-in;
2. seleção de turma ou usuário externo;
3. validação do vínculo;
4. envio de magic link;
5. fixação do vínculo no perfil;
6. bloqueio de combinações incompatíveis entre e-mail e turma.

Essa lógica reduz acessos indevidos e prepara segmentação por turma.

## Persistência do percurso

Entidades centrais:

| Entidade | Responsabilidade |
|---|---|
| `profiles` | perfil autenticado e vínculo educacional |
| `turmas` | grupos e vínculo externo |
| `profile_roles` | papéis como estudante, educador e admin |
| `projects` | projetos poéticos e acadêmicos |
| `project_live_drafts` | rascunho atual e estado do editor |
| `project_versions` | checkpoints e versões |
| `analysis_runs` | resultados de análises |
| `community_channels` | canais estruturais |
| `community_messages` | mensagens da futura comunidade |

## Segurança

- Row Level Security;
- políticas por propriedade e papel;
- service role restrita ao servidor;
- RPCs para regras sensíveis;
- isolamento entre perfis;
- validação de entrada;
- variáveis de ambiente fora do repositório.

## Motor H2

O Motor H2 mantém uma camada de análise formal e mecânica separada de futuras interpretações semânticas.

Essa separação permite:

- explicar a origem de cada sinal;
- testar regras determinísticas;
- evitar que uma única IA concentre geração, avaliação e decisão;
- registrar resultados por versão;
- reprocessar análises;
- comparar evolução.

## Correção ENEM

A correção da versão ENEM roda em **serviço dedicado, fora da aplicação web e fora do
navegador**, acionado pela aplicação por meio de rota autenticada.

Desenho da camada:

- **duas leituras independentes** da mesma redação, executadas separadamente;
- pontuação por competência **C1–C5**, ancorada na matriz de referência do INEP;
- **média aritmética** entre as leituras, sem arredondamento para baixo — o mesmo
  procedimento que o exame aplica;
- validação estrita do contrato de resposta antes da persistência;
- resultado gravado como execução de análise, vinculado à versão do texto.

Três consequências arquiteturais:

1. **Prompts, limiares e configuração de modelo nunca chegam ao cliente.** A superfície
   pública é a rota autenticada, não o motor.
2. **A correção é reprocessável.** Como cada execução fica registrada por versão, uma
   mesma redação pode ser reanalisada e comparada.
3. **Geração e avaliação permanecem separadas.** O sistema corrige e orienta a reescrita;
   ele não gera a redação do estudante.

A validação dessa camada contra corpus pericial está documentada em
[EVIDENCIAS.md](./EVIDENCIAS.md).

## Trilha Poética

O estado do editor pode registrar:

- território poético;
- título;
- versos;
- rimas e ecos;
- estimativa silábica;
- pulso métrico;
- estrutura do poema;
- autonomia no início do percurso.

## Observabilidade e qualidade

A base possui comandos dedicados para:

- build;
- lint;
- typecheck;
- testes do Motor H2;
- testes de relatórios;
- testes de feedback;
- validações de repertório;
- validações BNCC.

## Princípio arquitetural

> Nenhum componente isolado deve substituir a decisão pedagógica.

A aplicação registra, organiza e analisa. A autoria permanece com o estudante; a mediação permanece com o educador.
