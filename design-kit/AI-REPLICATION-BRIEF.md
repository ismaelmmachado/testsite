# Vitral Design System — AI Replication Brief

Documento de referência completo para reconstruir este visual em outros projetos estaticos, com ou sem Astro.

## 1. North Star

**Nome do sistema:** Vitral Studio  
**Metáfora:** Fachada de café do interior — acolhedor, simples, com identidade visual marcante mas sem ruído.  
**Tom:** calmo, moderno, estruturado, levemente sofisticado sem ser corporativo.  
**Diferenciador:** tira de 4 gemas como assinatura de marca; paleta verde-petróleo + sage; Montserrat como única fonte; header translúcido sticky.

## 2. Quando usar este sistema

- Sites de comunidade, igreja, projeto local ou marca pessoal que precisa de acolhimento + clareza.
- Conteúdo central em texto, com CTAs claros.
- Deploy estático em GitHub Pages, Vercel, Netlify ou hospedagem simples.

## 3. Paleta de cores

### Primárias
- **Petroleo:** `#005f6b` — ação principal, links, hover de nav, badges.
- **Petroleo Deep:** `#00434d` — gradiente, estados hover mais fortes.

### Neutras
- **Off Black:** `#1f2421` — textos principais e headings.
- **Muted Nova:** `#5b6b63` — textos secundários, metadados.
- **Surface:** `#ffffff` — fundo de página e cartões.
- **Sage Claro:** `#e9ede9` — faixas alternadas (`section-alt`).
- **Border Nova:** `#d7ded9` — bordas, divisores, contornos sutis.

### Assinatura (gemas do vitral)
- **Safira:** `#2f5f92`
- **Esmeralda:** `#3f6f5a`
- **Âmbar:** `#d99b2b`
- **Rubi:** `#b3493a`

Uso: tira de 4 cores como divisor superior do footer e como elemento decorativo controlado. Não espalhar essas cores pelo layout.

## 4. Tipografia

- **Família única:** Montserrat (carregar do Google Fonts: `wght@400;500;600;700;800`).
- **Escala:**
  - H1: `clamp(2rem, 4.6vw, 3.4rem)`
  - H2: `clamp(1.5rem, 3vw, 2.2rem)`
  - H3: `clamp(1.15rem, 2vw, 1.4rem)`
  - Body: `clamp(1rem, 1.4vw, 1.125rem)`
  - Small: `0.875rem`
  - Label: `0.72rem`
- **Line-height:** headings `1.2`, body `1.65`.
- **Font-weight:** headings `700`, botões `700`, corpo `400-500`.

Regra: não adicionar outra fonte sem motivo de marca explícito.

## 5. Layout e espaçamento

- **Container:** `max-width: 1120px`, centralizado, com padding lateral fluido `clamp(1.1rem, 3vw, 2.2rem)`.
- **Seções:** padding vertical `clamp(3rem, 7vw, 6rem)`.
- **Grid padrão:** 3 colunas no desktop, 1 no mobile.
- **Grid 2 colunas:** `grid-2` para pares/blocos.
- **Breakpoint mobile:** `760px`.

## 6. Componentes

### Header / Navegação
- Sticky, altura `72px`.
- Fundo translúcido com `backdrop-filter: saturate(140%) blur(10px)`.
- Brand com logo + nome.
- Links com padding `8px 12px`, border-radius `8px`.
- Active/hover com fundo `rgba(0,95,107,0.08)` e cor `petroleo`.
- Mobile: toggle `.nav-toggle` abre menu full-screen com Escape + click-outside.

### Botões
- **Primário:** fundo `petroleo`, texto branco, sombra `0 8px 20px rgba(0,95,107,0.22)`, hover com mais sombra + translateY(-1px).
- **Outline Dark:** transparent, borda `1.5px solid off-black`, hover inverte cores.
- **Outline:** variante branca sobre fundo escuro, borda `rgba(255,255,255,0.6)`.
- Focus visível sempre.

### Cartões
- Fundo branco, borda `1px solid border-nova`, raio `8px`, padding `1.6rem`.
- Sombra padrão: `0 4px 14px rgba(0,67,77,0.06)`.
- Hover: translateY(-3px) + sombra `0 10px 24px rgba(0,67,77,0.10)`.
- Cartão escuro: gradiente `linear-gradient(160deg, #00434d, #005f6b)`, borda branca translúcida.

### Listas numeradas
- Estilo `.feature-list`: grid, itens como cartões leves.
- Número em `font-family: Montserrat`, peso `700`, cor `petroleo`, tamanho `1.4rem`.

### Tabelas
- Estilo `.table-bank`: largura mínima `560px`, cabeçalho petroleo, linhas alternadas sutis.

### Citações
- Estilo `.big-quote`: borda esquerda `4px solid petroleo`, padding esquerdo `1.2rem`, tamanho `clamp(1.3rem, 2.6vw, 1.8rem)`.

### Footer
- Fundo gradiente petroleo, texto claro.
- Divisor superior: tira de 4 gemas (`safira`, `esmeralda`, `ambar`, `rubi`).
- Grid 3 colunas: marca, contato, endereço.

## 7. Regras de sistema

1. **Restrição de cor:** petroleo é a cor de ação; não poluir o layout com as gemas.
2. **Fonte única:** Montserrat em todo o sistema.
3. **Foco acessível:** todos os interativos tem `:focus-visible` visível.
4. **Redução de movimento:** respeitar `prefers-reduced-motion`.
5. **Skip link:** sempre presente para leitores de tela.
6. **Mobile-first:** menu mobile com comportamento completo (toggle, escape, click-outside).

## 8. Estrutura de página recomendada

- Hero com eyebrow, H1, linha de informação, texto de apoio, CTAs e metadata/localização.
- Seções alternadas claras/escuras ou claras/sage-claro.
- Blocos de cartões para valores/diferencias.
- Lista numerada para passos/visitas.
- Bloco escuro com CTA para destaque.
- Tabela para pilares/conceitos.
- Footer com contato, redes e endereço.

## 9. Caminho dos arquivos no projeto fonte

```
src/styles/vitral/
  tokens.css   # variáveis CSS custom properties
  base.css     # reset, tipografia base, container, skip-link, focus
  estilos.css  # componentes, grids, botões, cartões, mobile

src/layouts/VitralLayout.astro  # layout base Astro
```

## 10. Como replicar em outro projeto

### Opção A — HTML/CSS puro
1. Copie os 3 arquivos CSS.
2. Monte o HTML seguindo a estrutura de seções acima.
3. Importe Montserrat do Google Fonts.

### Opção B — Astro
1. Copie `src/styles/vitral/*.css` para o projeto.
2. Importe no layout base.
3. Use `VitralLayout.astro` como referência de estrutura.
4. Crie rotas por página seguindo o padrão do projeto fonte.

### Customização de marca
- Edite apenas `src/styles/vitral/tokens.css`.
- Troque `--petroleo`, `--petroleo-deep`, `--sage-claro`, `--off-black` para novas cores.
- Atualize o footer, header e textos com o nome da marca.

## 11. Anti-patterns

- Não inventar novas cores além do token set.
- Não empilhar múltiplos pesos de heading no mesmo cartão.
- Não remover estados de foco.
- Não adicionar gradientes decorativos além do banner e da tira de gemas.
- Não substituir Montserrat sem necessidade de marca.

## 12. Fonte de verdade

Para revisar o sistema completo implementado, consulte:
- `/opt/data/projetos/testsite/DESIGN.md`
- `/opt/data/projetos/testsite/.impeccable/design.json`
- `/opt/data/projetos/testsite/design-kit/`
