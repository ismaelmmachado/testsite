# Project Context: testsite

## 1. Propósito e Filosofia

- **Missão:** Ser um site estático mínimo, limpo e útil, com conteúdo em formato de how-to prático e notes que possam ser revisitados.
- **Foco:** Clareza, ação e reutilização. Conteúdo enxuto; sem floreio, sem jargão desnecessário, sem promessas vagas.
- **Público-alvo:** Leitores que querem passos executáveis e verificáveis, não teoria abstrata.

## 2. Estrutura de Conteúdo

O conteúdo é organizado em torno de utilidade prática:

- **Home:** Apresentação direta do propósito do site, exemplos imediatos e acesso rápido ao guia.
- **Guide:** Tutoriais/checklists curtos com passos que possam ser repetidos.
- **About:** Limites do projeto, stack utilizada e forma de contato/colaboração.

**Regras de Conteúdo:**
1. Todo artigo/deve começar com o resultado esperado.
2. Incluir verificação objetiva ao final.
3. Manter conteúdo atualizado; remover ou revisar o que perdeu utilidade.

## 3. Abordagem e Tom

- Tom: prático, direto, honesto.
- Prioriza exemplos reais, passos testados e fontes citadas.
- Benchmark comparativo só quando houver ganho de clareza para o leitor.

## 4. Stack e Deploy

- Astro + TypeScript
- CSS com tokens via `@theme` em `src/styles/global.css`
- Fontes: Inter + Merriweather
- Deploy: GitHub Pages via `.github/workflows/deploy.yml`
- Node: 22
- Branch padrão: `main`

## 5. Convenções do Projeto

- Nomenclatura: `kebab-case` para arquivos/pastas/assets
- Componentes: `PascalCase` quando houver componentes Astro
- Estilo: Tailwind utility classes preferidas; CSS custom apenas em `src/styles/global.css`
- Imagens: `loading`, `alt`, `width`/`height` explícitos
- SEO: OG tags, canonical URL e JSON-LD em todas as páginas
- Docs de projeto: `README.md`, `PROJECT.md`, `AGENTS.md`
- Commits em `main` são permitidos; feature branches curtas para experimentos

## 6. Regras Operacionais

- Não versionar segredos; respeitar `.gitignore`
- Não publicar diretamente em produção sem validação mínima
- Manter documentação sincronizada com o estado real do código
- Mudanças de stack ou deploy devem ser refletidas no `README.md` e `PROJECT.md`

## 7. Métricas e Revisão

- Número de páginas/tutoriais e exemplos práticos
- Revisão periódica de conteúdo desatualizado
- Verificação de build e deploy antes de considerar mudanças concluídas
