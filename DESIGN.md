---
name: testsite
description: Minimal, practical tutorial notebook for AI workflow learning.
colors:
  ink: "#111318"
  ink-muted: "#5b5f6b"
  surface: "#ffffff"
  surface-raised: "#f6f6f8"
  border: "#e4e4e7"
  accent: "#2563eb"
  accent-hover: "#1d4ed8"
  navy: "#0f172a"
  teal: "#0d7d71"
  teal-hover: "#07635b"
  warm: "#f4efe6"
  rose: "#c87b7b"
typography:
  heading:
    fontFamily: "Merriweather, Georgia, serif"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontWeight: 600
    fontSize: "0.85rem"
    lineHeight: 1.4
rounded:
  sm: "0.35rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
spacing:
  xs: "0.35rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  xxl: "2.75rem"
  page: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.6rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    border: "2px solid #ffffff"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.6rem"
  card:
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    background: "{colors.surface}"
  card-raised:
    background: "{colors.surface-raised}"
  nav-link:
    color: "{colors.ink-muted}"
    fontSize: "0.9rem"
---

# Design System: testsite

## Overview

**Creative North Star: "The Working Notebook"**

testsite should feel like a clean, trusted notebook for practical AI workflows: calm, scannable, and quietly opinionated. The visual system favors restraint, readable hierarchy, and reusable structure over decorative noise. Brand presence is minimal; the content and actionability carry the experience.

**Key Characteristics:**
- Token-first rather than inline-style driven
- Calm editorial palette with restrained teal accent
- Clear card-based hierarchy
- Accessible focus and navigation states
- Responsive from mobile through desktop without visual churn

## Colors

Use color sparingly. Neutral surfaces dominate; accent appears only at meaningful actions and light emphasis.

### Primary
- **Teal Action** (`#0d7d71`): primary CTA and light accent surfaces. Used for primary buttons, hover emphasis, and restrained UI highlights.

### Secondary
- **Navy Structure** (`#0f172a`): headings, active states, and structural hierarchy.

### Accent
- **Blue Link** (`#2563eb`): prose links and occasional attention cue.

### Neutral
- **Ink** (`#111318`): body text.
- **Muted Ink** (`#5b5f6b`): secondary text, metadata, and captions.
- **Surface** (`#ffffff`): default card/page background.
- **Raised Surface** (`#f6f6f8`): elevated cards and callouts.
- **Border** (`#e4e4e7`): dividers and container edges.
- **Warm Paper** (`#f4efe6`): reserved for restrained warm surfaces.
- **Rose** (`#c87b7b`): reserved for error or caution states.

### Named Rules
**The Restraint Rule.** Accent color appears on meaningful actions only; avoid decorative saturation.

## Typography

**Display Font:** Merriweather, Georgia, serif
**Body Font:** Inter, system-ui, sans-serif
**Label Font:** Inter, system-ui, sans-serif

**Character:** A practical, editorial pairing. Headings feel authoritative but not formal; body text stays highly readable and neutral.

### Hierarchy
- **Heading** (`700`, `clamp(2rem, 5vw, 3rem)` approx, line-height `1.25`): page titles and hero headline.
- **Title** (`700`, `1.05rem`, line-height `1.25`): card titles and section headers.
- **Body** (`400`, `17px`, line-height `1.65`): paragraphs and long-form reading.
- **Label** (`600`, `0.85rem`, line-height `1.4`): metadata, nav, and supporting captions.

### Named Rules
**The One Type Rule.** One heading role per section; avoid stacking multiple heading weights in the same card.

## Layout

Container-first, centered reading width with responsive grid breakpoints at `768px`. Sections use consistent vertical rhythm; cards and grids collapse to single column on mobile. Avoid wide-line body text; keep reading width constrained by container tokens.

## Elevation & Depth

Flat-by-default surfaces with light elevation on interactive cards. Shadows are restrained and state-linked rather than decorative.

### Shadow Vocabulary
- **Card Shadow** (`0 6px 18px rgba(17, 19, 24, 0.08)`): raised cards.
- **Elevated Shadow** (`0 12px 28px rgba(17, 19, 24, 0.12)`): hero media and high-emphasis surfaces.

### Named Rules
**The Flat Rest Rule.** Surfaces are flat at rest; elevation appears only for cards in raised states or hover/focus emphasis.

## Shapes

Rounded corners are consistent and mild. Cards use `0.5rem`, buttons use `0.75rem`, and focus rings use `0.35rem`. Borders are thin and low-contrast.

## Components

### Buttons
- **Shape:** rounded `0.75rem`
- **Primary:** teal background, white text, medium padding.
- **Secondary:** transparent with white border on light backgrounds; use only where contrast supports readability.
- **Hover / Focus:** color shift on primary; visible focus ring on all actions.

### Cards / Containers
- **Corner Style:** `0.5rem`
- **Background:** surface or raised surface
- **Shadow Strategy:** flat by default; raised shadow on hover/focus for interactive cards
- **Border:** `1px solid` border color
- **Internal Padding:** `1rem`

### Navigation
- **Style:** minimal top nav with brand wordmark and three links
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
- **Don't** add decorative gradients or heavy imagery unless they reinforce the notebook metaphor.
- **Don't** introduce new accent colors without mapping them to a token.
- **Don't** weaken typographic hierarchy by equalizing card weights.
