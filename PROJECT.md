# testsite — Estado atual do projeto

Documentação viva do que já está criado e validado no repositório.

## Identidade rápida

- Repositório: https://github.com/ismaelmmachado/testsite
- Pasta local: `/opt/data/projetos/testsite`
- Branch padrão: `main`
- Deploy: GitHub Pages via GitHub Actions
- URL publicada: https://ismaelmmachado.github.io/testsite/

## Stack

- Astro
- TypeScript
- CSS custom properties (`@theme` em `src/styles/global.css`)
- Fontes: Inter e Merriweather via `@fontsource`
- GitHub Pages via workflow em `.github/workflows/deploy.yml`

## Scripts

- `npm run dev` — servidor local
- `npm run build` — build de produção
- `npm run preview` — preview do build
- `npm run astro` — CLI do Astro

## Estrutura criada

### Core

- `astro.config.mjs`
  - `site: https://ismaelmmachado.github.io/testsite`
  - `base: /testsite/`
- `tsconfig.json`
  - Estende `astro/tsconfigs/strict`
- `package.json`
  - Stack mínima já funcional
- `postcss.config.mjs`
  - Config base para processar CSS

### Layout e páginas

- `src/layouts/BaseLayout.astro`
  - Layout base com head completo
  - OG tags
  - Canonical URL
  - JSON-LD `WebSite`
  - Skip link
  - Header/nav e footer

- `src/pages/index.astro`
  - Home com hero, cards e CTA
  - Tom: practical how-to
  - Imagens com `width`/`height`/`loading`

- `src/pages/guide/index.astro`
  - Guia prático em 4 passos
  - Exemplos reutilizáveis
  - Callout final para about

- `src/pages/about/index.astro`
  - Sobre o projeto
  - Seções: o que é / o que não é / contato

### Design system

- `src/styles/global.css`
  - Tokens em `@theme`
  - Classes utilitárias mínimas: container, grid, card, buttons, prose
  - Responsivo com breakpoint `768px`
  - Variáveis prontas:
    - `deep-navy`
    - `warm-sand`
    - `cta-teal`
    - `sage-green`
    - `dusk-rose`
    - `gray-light`
    - `gray-text`

### Assets

- `public/hero-placeholder.svg`
- `public/note-placeholder-1.svg`
- `public/note-placeholder-2.svg`
- `public/note-placeholder-3.svg`

### Deploy

- `.github/workflows/deploy.yml`
  - Trigger: push em `main`
  - Node 22
  - Build com `npm ci`
  - Upload do `dist`
  - Deploy Pages

## O que ainda falta

- Nenhuma página de artigo ainda
- Nenhum silo de conteúdo criado
- Nenhuma coleção de conteúdo em `src/content/`
- Nenhuma integração de analytics/tracking ainda
- Nenhuma imagem OG própria além do SVG padrão

## Notas operacionais

- Default branch para este projeto: `main`
- Commits em `main` são permitidos por design aqui
- Para experimentos, usar feature branches curtas
- Não versionar segredos; seguir regras do `.gitignore`
