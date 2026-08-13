# Apresentação oficial - ARARA

## 1. ARARA - Autoria em movimento

**Uma plataforma, duas versões: Trilhas e ENEM.**

O ARARA nasce no Laboratório Cordel 2.0 como plataforma brasileira de escrita,
acompanhamento pedagógico e letramento em inteligência artificial.

Acesse: **[arara.cordel2pontozero.com](https://arara.cordel2pontozero.com)**

---

## 2. O problema não é escrever mais rápido

Quando a inteligência artificial produz textos em segundos, a educação precisa proteger
algo mais valioso: o percurso de quem aprende a pensar, escrever, revisar e assumir a
própria voz.

O ARARA foi desenhado para tornar esse percurso **visível, recuperável, orientável e
pedagogicamente significativo**.

---

## 3. Duas versões, uma origem

A plataforma começou pelas trilhas de escrita. A versão ENEM veio depois, construída sobre
a mesma base de percurso, versionamento e mediação docente. São duas versões do mesmo
produto - mesma arquitetura, mesmo princípio pedagógico, públicos e entregas distintas.

| | **ARARA Trilhas** | **ARARA ENEM** |
|---|---|---|
| Entrega | Percurso autoral registrado, Raio-X do Texto, devolutiva pedagógica | Nota por competência C1-C5, devolutiva e plano de reescrita |
| Público | Escolas, universidades, bibliotecas, projetos culturais | Estudantes de ensino médio, cursinhos, programas de acesso |
| Estado | Em produção | Em produção desde 22/06/2026 |

---

## 4. ARARA Trilhas - três movimentos

### Trilha Poética

**Um verso por vez. Um poema como percurso.**

- título editável;
- escrita verso a verso;
- autosave;
- marcos no histórico;
- reabertura de poemas concluídos;
- sentimentos e territórios poéticos;
- disparos não generativos opcionais;
- leitura leve de rimas, ecos e métrica;
- reconhecimento de autonomia.

A Arara não escreve no lugar da pessoa. Ela oferece pistas para que cada participante
continue com a própria voz.

### Trilha Acadêmica e Motor H2

A experiência começa pela situação da escrita - gênero, tema, objetivo, interlocutor.

O texto passa por autosave, checkpoints e histórico de versões. O Motor H2 gera um **Raio-X
do Texto** com observações sobre estrutura, coesão, argumentação, estilo, situação de
escrita e curadoria.

O resultado não é uma sentença. É convertido em plano de revisão.

### Espaço do Educador

O educador acompanha textos e poemas em percurso, versões, leituras H2, conflitos de
escrita, focos de revisão, indicadores poéticos e devolutivas vinculadas ao texto.

A base técnica prepara recorte por turma, timeline por estudante, permissões docentes e
assistência da Arara para mediação pedagógica.

---

## 5. ARARA ENEM - correção com ancoragem na matriz

O exame submete cada redação a **duas correções independentes**, e a nota final é a **média
aritmética** das duas. O ARARA ENEM reproduz esse desenho:

1. leitura da proposta e do texto do estudante;
2. duas leituras independentes da mesma redação;
3. pontuação por competência, **C1 a C5**, ancorada na matriz de referência do INEP;
4. média aritmética entre as leituras, sem arredondamento para baixo;
5. devolutiva por competência;
6. plano de reescrita.

**O produto final é a próxima versão do texto, não a nota.** O sistema corrige e orienta a
reescrita; ele não gera a redação do estudante. É decisão de produto, não limitação
técnica.

---

## 6. Evidência: validação contra correção pericial

- **385 redações** de ENEM corrigidas por **2 especialistas humanos** cada;
- **99 redações nota 1000** reais como teste do topo;
- **manifesto SHA256** amarrando dados, resultados e código.

Achados públicos:

- **peritos humanos divergem em mais de 100 pontos na nota total em 37% das redações** - o
  piso realista de concordância para qualquer corretor. Teto humano medido: QWK 0,693;
- **encontramos e corrigimos um erro nosso** que arredondava para baixo em 47% das notas de
  competência, subtraindo em média 113 pontos do estudante;
- **e encontramos um erro na nossa própria régua:** a referência humana da bancada havia
  sido montada com o mesmo arredondamento defeituoso, o que nos favorecia. Corrigida, o
  corretor fica em 58-74% do teto humano e sua vantagem sobre um contador de caracteres
  deixa de ser estatisticamente demonstrável neste n. Removida a deflação, chega a 95% do
  teto - a calibração é a prioridade atual.

**O que segue aberto:** média de 762 nas redações que tiraram 1000 de verdade, 44 pontos de
deflação residual e a Competência 2 como a mais fraca.

Detalhes em [EVIDENCIAS.md](./EVIDENCIAS.md).

---

## 7. IA ajustada para apoiar autoria

1. A pessoa define contexto, intenção ou território.
2. Escreve e mantém controle sobre o texto.
3. O sistema registra versões e sinais do percurso.
4. Motores determinísticos observam aspectos verificáveis.
5. Uma camada semântica governada pode apoiar a interpretação.
6. A devolutiva sugere perguntas e próximos passos.
7. A decisão final permanece humana.

**A IA entra como apoio à revisão, não como autora oculta.**

---

## 8. Engenharia que sustenta a experiência

Next.js 16 · React 19 · TypeScript 6 · Supabase SSR · Postgres · Row Level Security ·
RPCs · Edge Functions · magic link · validação por check-in e turma · Zod · autosave ·
versionamento · `analysis_runs` · serviço dedicado de correção ENEM · testes dedicados ·
Vercel Analytics.

O detalhe nerd está a serviço da experiência: segurança, rastreabilidade e evolução
modular.

---

## 9. O que já existe e o que vem agora

### Em produção

- autenticação segura e validação de acesso;
- ARARA Trilhas - Poética, Acadêmica, Motor H2;
- ARARA ENEM - correção C1-C5 com dupla leitura;
- dashboard;
- primeira camada do Educador;
- base estrutural de comunidade.

### Próxima etapa

- recortes por turma e timeline de evolução;
- permissões docentes ampliadas;
- dashboard de evolução por competência;
- banco de temas com textos motivadores;
- Arara colega Educador.

### Visão

Um ecossistema brasileiro de escrita, autoria e letramento em IA.

---

## 10. Tecnologia com posição pedagógica

O ARARA é destinado a escolas, redes de ensino, cursinhos, universidades, projetos
culturais, bibliotecas e instituições que desejam usar inteligência artificial sem apagar a
autoria.

**Pilotos · parcerias educacionais · desenvolvimento institucional**

- [arara.cordel2pontozero.com](https://arara.cordel2pontozero.com)
- [www.cordel2pontozero.com](https://www.cordel2pontozero.com)
- contato@cordel2pontozero.com
- Salvador - Bahia - Brasil
