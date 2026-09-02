---
name: testsite
description: Clean studio visual identity for practical AI workflow tutorials.
colors:
  ink: "#111318"
  ink-muted: "#5b5f6b"
  surface: "#ffffff"
  surface-raised: "#f8f8fa"
  border: "#e4e4e7"
  accent: "#0d7d71"
  accent-hover: "#07635b"
  navy: "#0f172a"
  teal: "#0d7d71"
  teal-hover: "#07635b"
  warm: "#f4efe6"
  rose: "#c87b7b"
  focus-ring: "#2563eb"
typography:
  heading:
    fontFamily: "Merriweather, Georgia, serif"
    fontWeight: 700
    fontSize: "clamp(2rem, 5vw, 3rem)"
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Merriweather, Georgia, serif"
    fontWeight: 700
    fontSize: "1.05rem"
    lineHeight: 1.25
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "17px"
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontWeight: 600
    fontSize: "0.88rem"
    lineHeight: 1.4
  caption:
    fontFamily: "Merriweather, Georgia, serif"
    fontWeight: 600
    fontSize: "1.85rem"
    lineHeight: 1.4
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
rounded:
  sm: "0.2rem"
  md: "0.35rem"
  lg: "0.5rem"
  xl: "0.65rem"
spacing:
  xs: "0.35rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1.25rem"
  xl: "2rem"
  xxl: "3.25rem"
  page: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0.8rem 1.5rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1.5px solid {colors.border}"
    rounded: "{rounded.lg}"
    padding: "0.8rem 1.5rem"
  card:
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    background: "{colors.surface}"
  card-raised:
    background: "{colors.surface-raised}"
  nav-link:
    color: "{colors.ink-muted}"
    fontSize: "0.88rem"
  focus-ring:
    color: "#2563eb"
---

# Design System: testsite

## Overview

**Creative North Star: "The Clean Studio"**

testsite is a clean studio: light, structured, and restrained. The interface reads as an organized workspace rather than a notebook or blog. Every element is intentional; whitespace, typography, and thin structure do the work.

**Key Characteristics:**
- Clean studio palette: mostly neutral surfaces with restrained teal action
- Strong typographic hierarchy with compact headings
- Thin borders, minimal shadows, structured grid
- Token-first and low-decorative-noise
- Accessible navigation and focus states

## Colors

Use color sparingly. Neutral surfaces dominate; teal appears only at meaningful actions and light emphasis.

### Primary
- **Teal Action** (`#0d7d71`): primary CTA and active state emphasis. Used for primary buttons and focused indicators.

### Secondary
- **Navy Structure** (`#0f172a`): headings, active states, and structural hierarchy.

### Accent
- **Muted Ink** (`#5b5f6b`): secondary text, metadata, and captions.

### Neutral
- **Ink** (`#111318`): body text.
- **Surface** (`#ffffff`): default page and card background.
- **Raised Surface** (`#f8f8fa`): elevated cards and grouping surfaces.
- **Border** (`#e4e4e7`): dividers and container edges.
- **Warm Paper** (`#f4efe6`): reserved for restrained warm surfaces.
- **Rose** (`#c87b7b`): reserved for error or caution states.

### Named Rules
**The Restraint Rule.** Accent color appears on meaningful actions only; avoid decorative saturation.

## Typography

**Display Font:** Merriweather, Georgia, serif
**Body Font:** Inter, system-ui, sans-serif
**Label Font:** Inter, system-ui, sans-serif

**Character:** A clean, editorial pairing. Headings are confident and compact; body text stays highly readable and neutral.

### Hierarchy
- **Heading** (`700`, `clamp(2rem, 5vw, 3rem)`, line-height `1.25`): page titles and hero headline.
- **Title** (`700`, `1.05rem`, line-height `1.25`): card titles and section headers.
- **Body** (`400`, `17px`, line-height `1.6`): paragraphs and long-form reading.
- **Label** (`600`, `0.88rem`, line-height `1.4`): metadata, nav, and supporting captions.
- **Caption** (`600`, `1.85rem`, line-height `1.4`): small-screen headline fallback.

### Named Rules
**The One Type Rule.** One heading role per section; avoid stacking multiple heading weights in the same card.

## Layout

Container-first, centered reading width with responsive grid breakpoints at `768px`. Sections use consistent vertical rhythm; cards and grids collapse to single column on mobile. Avoid wide-line body text; keep reading width constrained by container tokens.

## Elevation & Depth

Flat-by-default surfaces with light structure on cards. Shadows are restrained and state-linked rather than decorative.

### Shadow Vocabulary
- **Card Shadow** (`0 6px 18px rgba(17, 19, 24, 0.08)`): raised cards.
- **Elevated Shadow** (`0 12px 28px rgba(17, 19, 24, 0.12)`): hero media and high-emphasis surfaces.

### Named Rules
**The Flat Rest Rule.** Surfaces are flat at rest; elevation appears only for cards in raised states or hover/focus emphasis.

## Shapes

Rounded corners are consistent and mild. Cards use `0.35rem`, buttons use `0.5rem`, and focus rings use `0.2rem`. Borders are thin and low-contrast.

## Components

### Buttons
- **Shape:** rounded `0.5rem`
- **Primary:** teal background, white text, compact padding.
- **Secondary:** transparent with ink border; use where contrast supports readability.
- **Hover / Focus:** color shift on primary; visible focus ring on all actions.

### Cards / Containers
- **Corner Style:** `0.35rem`
- **Background:** surface or raised surface
- **Shadow Strategy:** flat by default; raised shadow on hover/focus for interactive cards
- **Border:** `1px solid` border color
- **Internal Padding:** `1.25rem`

### Navigation
- **Style:** minimal top nav with brand wordmark and links
- **Default:** muted ink links
- **Active:** navy color with underline and stronger weight
- **Focus:** visible outline ring for keyboard users

### Links
- **Style:** underline with offset for secondary CTAs
- **Interactive cards:** use shared card-link behavior rather than per-card inline rules

## Do's and Don'ts

### Do:
- **Do** keep inline styles out of page markup; prefer shared utilities and tokens.
- **Do** preserve visible focus states for nav, buttons, and cards.
- **Do** use restrained accent color only at action points.

### Don't:
- **Don't** add decorative gradients or heavy imagery unless they reinforce the clean studio metaphor.
- **Don't** introduce new accent colors without mapping them to a token.
- **Don't** weaken typographic hierarchy by equalizing card weights.
