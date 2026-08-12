# Roadmap do ARARA

## Princípio

O roadmap prioriza funcionalidades que ampliem autoria, mediação e transparência antes de
aumentar automação.

---

## Entregue — Núcleo autoral (ARARA Trilhas)

**Estado:** em produção.

- Trilha Poética;
- Trilha Acadêmica;
- Motor H2 e Raio-X do Texto;
- autosave, versões e checkpoints;
- autenticação por check-in e vínculo por turma;
- dashboard;
- primeira área do Educador;
- telemetria básica.

## Entregue — Correção ENEM (ARARA ENEM)

**Estado:** em produção desde 22 de junho de 2026.

- serviço de correção em domínio próprio da Cordel 2.0;
- duas leituras independentes da mesma redação;
- pontuação por competência C1–C5 ancorada na matriz do INEP;
- média aritmética entre leituras, sem arredondamento para baixo;
- devolutiva por competência e plano de reescrita;
- integração validada em produção com redação real.

## Entregue — Bancada de evidências

**Estado:** congelada em julho de 2026.

- 385 redações periciadas por 2 especialistas humanos cada;
- 99 redações nota 1000 reais como teste do topo;
- 180 redações pareadas entre grade padrão e inclusiva;
- manifesto SHA256 amarrando dados, resultados e código;
- identificação e correção do erro de arredondamento;
- **errata publicada**: a referência humana da bancada também estava arredondada, o que nos
  favorecia. Corrigida e registrada, não apagada;
- artigo acadêmico derivado dos achados, em preparação.

Ver [EVIDENCIAS.md](./EVIDENCIAS.md).

---

## Horizonte 0 — Calibração da deflação `prioridade atual`

A errata da bancada mostrou que a capacidade de discriminar existe, mas a régua está
deslocada: removida a deflação, o corretor vai de 58–74% para **95% do teto humano**.
Enquanto isso não for corrigido, a vantagem sobre uma baseline trivial não é demonstrável.

- calibrar o viés de −112,9 na nota total;
- eliminar os 44 pontos de deflação residual;
- destravar a faixa de 200 em C3, C4 e C5 — hoje 0 em 99 redações nota 1000;
- reforçar a avaliação de repertório (Competência 2), a mais distante do julgamento humano;
- reexecutar a bancada com a régua corrigida e publicar o comparativo.

## Horizonte 1 — Aprofundar a mediação

- recorte por turma;
- timeline de evolução;
- permissões docentes reais;
- devolutivas ancoradas em trechos;
- comparativos entre versões;
- painéis de acompanhamento;
- Arara colega Educador.

## Horizonte 2 — Ampliar a experiência ENEM

- dashboard de evolução por competência;
- banco de temas com textos motivadores;
- acompanhamento longitudinal de reescrita;
- relatórios institucionais por turma;
- ampliação do corpus de validação.

## Horizonte 3 — Camada semântica governada

- assistência semântica com escopo definido;
- prompts versionados;
- registro de modelo e execução;
- separação entre análise mecânica e semântica;
- critérios de liberação pelo educador;
- explicabilidade das devolutivas;
- revisão humana obrigatória nos fluxos sensíveis.

## Horizonte 4 — Comunidade e interoperabilidade

- canais por turma;
- diálogo entre turmas;
- portfólios autorais;
- exportação de percursos;
- relatórios institucionais;
- APIs documentadas;
- integração com os demais softwares do ecossistema Cordel 2.0.

---

## Critérios de priorização

Cada entrega deverá responder:

1. amplia a agência de quem escreve?
2. melhora a mediação do educador?
3. torna o sistema mais transparente?
4. protege dados e vínculos?
5. preserva cultura, território e diversidade linguística?
6. pode ser testada e auditada?
