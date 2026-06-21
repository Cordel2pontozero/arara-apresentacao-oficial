<div align="center">

<img src="https://images.squarespace-cdn.com/content/v1/679647ea404fcd2e5824402c/54e96729-74d6-4ad6-aa92-57d1e0f0eb49/principios%2Bhorizontal.png" alt="Identidade oficial do aplicativo ARARA — entre Sentimentos e Palavras" width="100%">

# ARARA — Autoria em movimento

### Plataforma educacional brasileira para escrita poética, acadêmica e acompanhamento pedagógico

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-F28C28)](#estado-do-produto)
[![Next.js](https://img.shields.io/badge/Next.js-16-111111?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Postgres-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Licença de código](https://img.shields.io/badge/código-MIT-146A6F)](LICENSE.md)
[![Conteúdo](https://img.shields.io/badge/conteúdo-CC%20BY--ND%204.0-F28C28)](LICENSE.md)

**Poética · Acadêmica · Espaço do Educador · Em breve: Redação ENEM**

[Ver apresentação](./docs/APRESENTACAO.md) · [Arquitetura](./docs/ARQUITETURA.md) · [Roadmap](./docs/ROADMAP.md) · [Laboratório Cordel 2.0](https://www.cordel2pontozero.com/laboratorio)

</div>

---

## Educação com IA não pode apagar o percurso humano

Quando sistemas generativos produzem textos em segundos, a questão educacional deixa de ser apenas **como escrever mais rápido**. O desafio passa a ser preservar e tornar visível o caminho de quem aprende a imaginar, argumentar, revisar e assumir a própria voz.

O **ARARA** é uma plataforma autoral e pedagógica do ecossistema Cordel 2.0. Ela combina experiências de escrita, versionamento, indicadores formativos e mediação docente para apoiar a autoria — sem transformar a inteligência artificial em uma autora oculta.

> **A tecnologia observa sinais, organiza percursos e sugere revisão.  
> A decisão final continua humana.**

## Quatro movimentos do produto

| Movimento | Experiência |
|---|---|
| **Trilha Poética** | Criação verso a verso, territórios poéticos, sentimentos, ecos, rimas, estimativa métrica e histórico do poema. |
| **Trilha Acadêmica** | Contexto de escrita, autosave, checkpoints, versões e o **Motor H2**, que transforma análise em foco de revisão. |
| **Espaço do Educador** | Leitura de percursos, textos, poemas, conflitos de escrita, indicadores e devolutivas pedagógicas. |
| **Redação ENEM** | Modo em desenvolvimento, construído sobre a mesma lógica de autoria orientada, transparência e revisão progressiva. |

## Trilha Poética

A escrita acontece **um verso por vez**. Cada poema pode ser salvo, reaberto, concluído e revisado, mantendo rastros do processo criativo.

Apoios disponíveis:

- tômbola opcional de sentimentos;
- substantivo e adjetivos definidos pela própria pessoa;
- territórios poéticos vinculados ao cotidiano;
- disparos criativos não generativos para o primeiro verso;
- reconhecimento de autonomia quando a escrita começa sem ajuda;
- leitura leve de rimas, ecos finais, sílabas poéticas e pulso métrico.

A Arara não entrega um poema pronto: ela cria condições para que a pessoa encontre uma imagem e continue com sua própria voz.

## Trilha Acadêmica e Motor H2

A trilha acadêmica organiza a produção como um percurso verificável:

1. definição de gênero, tema, objetivo e interlocutor;
2. escrita com autosave;
3. checkpoints e histórico de versões;
4. geração do **Raio-X do Texto**;
5. seleção de focos de revisão;
6. produção de uma nova versão.

O Motor H2 observa dimensões como:

- situação de escrita;
- estrutura e progressão;
- coesão;
- argumentação;
- estilo e clareza;
- curadoria e referências.

A análise não funciona como sentença automática. Ela é convertida em perguntas, prioridades e próximos passos.

## Espaço do Educador

A área docente foi desenhada para ampliar a mediação — não para criar vigilância algorítmica.

Ela permite acompanhar:

- textos e poemas em percurso;
- versões e checkpoints;
- leituras H2;
- conflitos de escrita;
- focos de revisão;
- indicadores poéticos;
- devolutivas vinculadas ao trabalho do estudante.

A arquitetura já prepara recortes por turma, linha do tempo individual, permissões docentes e uma futura camada de assistência denominada **Arara colega Educador**.

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
│ Experiência: Trilha Poética · Acadêmica · Educador           │
├──────────────────────────────────────────────────────────────┤
│ Aplicação: Next.js 16 · React 19 · TypeScript 6 · Zod        │
├──────────────────────────────────────────────────────────────┤
│ Percurso: autosave · checkpoints · versões · analysis_runs   │
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
- testes dedicados ao Motor H2, relatórios, feedback e repertório;
- arquitetura modular preparada para novas trilhas.

## Estado do produto

### Disponível na base atual

- autenticação por magic link;
- validação de acesso por check-in;
- vínculo com turma ou usuário externo;
- Trilha Poética;
- Trilha Acadêmica;
- Motor H2 e Raio-X do Texto;
- autosave, checkpoints e histórico;
- dashboard do estudante;
- primeira camada do Espaço do Educador;
- base estrutural de comunidade;
- analytics de produto.

### Em evolução

- permissões docentes ampliadas;
- recorte por turma e timeline por estudante;
- assistência da Arara para educadores;
- camada semântica governada;
- comunidade entre turmas;
- modo Redação ENEM.

## Para quem o ARARA foi pensado

- escolas e redes de ensino;
- universidades e programas de formação docente;
- projetos culturais e bibliotecas;
- laboratórios de escrita;
- iniciativas de letramento em IA;
- instituições que desejam usar tecnologia sem substituir autoria.

## Apresentação comercial

Esta página funciona como vitrine oficial do produto. A narrativa completa está em:

- [Apresentação institucional](./docs/APRESENTACAO.md)
- [Arquitetura técnica](./docs/ARQUITETURA.md)
- [Roadmap](./docs/ROADMAP.md)

Também existe uma versão web responsiva em [`index.html`](./index.html), preparada para publicação por GitHub Pages.

## Publicação no GitHub Pages

Depois de enviar os arquivos:

1. abra **Settings → Pages**;
2. em **Build and deployment**, selecione **Deploy from a branch**;
3. escolha `main` e `/ (root)`;
4. salve.

Endereço esperado:

**https://cordel2pontozero.github.io/arara-apresentacao-oficial/**

## Identidade e contato

<div align="center">
<img src="https://images.squarespace-cdn.com/content/v1/679647ea404fcd2e5824402c/4a7ae5af-77bf-4db7-9744-32a77947260d/LOGO%2BCORDEL-COLOR.png" alt="Logomarca oficial Cordel 2.0" width="180">

**Cordel 2.0 Inova Simples (I.S.)**  
Inovação · Criação · Letramento em IA  
Salvador — Bahia — Brasil

[www.cordel2pontozero.com](https://www.cordel2pontozero.com)  
[contato@cordel2pontozero.com](mailto:contato@cordel2pontozero.com)

</div>

## Licenciamento

O código deste repositório é disponibilizado sob a **Licença MIT**. Textos institucionais, conteúdos editoriais e materiais autorais seguem **CC BY-ND 4.0**, conforme detalhado em [LICENSE.md](LICENSE.md).
