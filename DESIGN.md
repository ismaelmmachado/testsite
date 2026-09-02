---
name: testsite
description: Replicated Vitral visual identity extracted from comunidadevitral reference.
colors:
  petroleo: "#005f6b"
  petroleo-deep: "#00434d"
  sage: "#94a69a"
  sage-lighter: "#c6d6cc"
  sage-claro: "#e9ede9"
  off-black: "#1f2421"
  muted-nova: "#5b6b63"
  border-nova: "#d7ded9"
  safira: "#2f5f92"
  esmeralda: "#3f6f5a"
  ambar: "#d99b2b"
  rubi: "#b3493a"
  surface: "#ffffff"
  ink: "#1f2421"
  muted: "#5b6b63"
  border: "#d7ded9"
typography:
  heading:
    fontFamily: "Montserrat, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontWeight: 700
    fontSize: "clamp(2rem, 4.6vw, 3.4rem)"
    lineHeight: 1.2
  body:
    fontFamily: "Montserrat, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.125rem)"
    lineHeight: 1.65
  label:
    fontFamily: "Montserrat, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontWeight: 700
    fontSize: "0.72rem"
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "8px"
  lg: "8px"
  xl: "8px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "2rem"
  xxl: "3rem"
  page: "clamp(3rem, 7vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.petroleo}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  button-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.off-black}"
    border: "1.5px solid {colors.off-black}"
    rounded: "{rounded.md}"
    padding: "13px 26px"
  card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border-nova}"
    rounded: "{rounded.md}"
    padding: "1.6rem"
  card-dark:
    backgroundColor: "linear-gradient(160deg, #00434d, #005f6b)"
    textColor: "#ffffff"
    border: "1px solid rgba(255,255,255,0.25)"
    rounded: "{rounded.md}"
    padding: "1.6rem"
  nav-link:
    color: "{colors.ink}"
    fontSize: "0.95rem"
---

# Design System: testsite

## Overview

**Creative North Star: "The Vitral Studio"**

testsite uses a clean, structured identity derived from a cafe/storefront system: restrained teal-green surfaces, editorial clarity, and light structural borders. The system feels calm, modern, and grounded, with small colorful accents drawn from a four-gem brand strip.

**Key Characteristics:**
- Token-first CSS custom properties in `src/styles/vitral/tokens.css`
- Montserrat-only typographic stack
- Petroleo green primary with sage neutral surfaces
- Light card elevation and thin borders
- Sticky translucent header and responsive mobile menu

## Colors

Color is intentional and restrained. Neutrals carry most surfaces; petroleo green appears at actions and structure; the vitral gem strip appears as a signature accent.

### Primary
- **Petroleo** (`#005f6b`): primary action color, links, and nav emphasis.
- **Petroleo Deep** (`#00434d`): darker press/hover state and gradient anchor.

### Secondary
- **Off Black** (`#1f2421`): headings and high-emphasis text.
- **Muted Nova** (`#5b6b63`): secondary text and captions.

### Accent Strip
- **Safira** (`#2f5f92`)
- **Esmeralda** (`#3f6f5a`)
- **Âmbar** (`#d99b2b`)
- **Rubi** (`#b3493a`)

### Neutral
- **Surface** (`#ffffff`): page and card background.
- **Sage Claro** (`#e9ede9`): alternating section background.
- **Border Nova** (`#d7ded9`): borders and dividers.

### Named Rules
**The Restraint Rule.** Primary color is used for actions and structure; decorative saturation is avoided.

## Typography

**Display Font:** Montserrat, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
**Body Font:** Montserrat, system-ui, -apple-system, Segoe UI, Roboto, sans-serif
**Label Font:** Montserrat, system-ui, -apple-system, Segoe UI, Roboto, sans-serif

**Character:** A modern, clean sans pairing with strong weight contrast and tight line rhythm.

### Hierarchy
- **Heading** (`700`, `clamp(2rem, 4.6vw, 3.4rem)`): hero and page titles.
- **Title** (`700`, `clamp(1.15rem, 2vw, 1.4rem)`): card and section titles.
- **Body** (`400`, `clamp(1rem, 1.4vw, 1.125rem)`): paragraphs.
- **Label** (`700`, `0.72rem`): small labels and eyebrow text.

### Named Rules
**The One Stack Rule.** Use Montserrat everywhere; do not introduce additional display fonts without a brand reason.

## Layout

Container-first with max width `1120px` and responsive grid breakpoint at `760px`. Sections use consistent vertical rhythm via `clamp(3rem, 7vw, 6rem)`. Cards and grids collapse to single column on mobile.

## Elevation & Depth

Light elevation using thin borders and soft shadows. Dark sections use the petroleo gradient instead of elevation.

### Shadow Vocabulary
- **Card Shadow** (`0 4px 14px rgba(0, 67, 77, 0.06)`): default cards.
- **Elevated Shadow** (`0 12px 30px rgba(0, 67, 77, 0.12)`): dropdowns and raised surfaces.

### Named Rules
**The Flat Rest Rule.** Cards are flat at rest; lift appears only on hover/focus.

## Shapes

Rounded corners are consistent at `8px` for cards, buttons, and inputs. Pill shape is reserved for selected chips/eyebrows.

## Components

### Buttons
- **Primary:** petroleo background, white text, soft shadow.
- **Outline Dark:** transparent with off-black border.
- **Hover / Focus:** slight lift, shadow increase, visible focus ring.

### Cards / Containers
- **Corner Style:** `8px`
- **Background:** surface or gradient for dark cards
- **Shadow Strategy:** flat by default; lift on hover/focus
- **Border:** thin `#d7ded9`; dark cards use translucent white border
- **Internal Padding:** `1.6rem`

### Navigation
- **Style:** sticky translucent header with logo + nav links
- **Default:** ink text
- **Active:** petroleo background tint and text color
- **Mobile:** full-screen menu with toggle and escape handling

## Do's and Don'ts

### Do:
- **Do** reuse the four-gem strip as a signature accent only.
- **Do** keep mobile nav behavior and accessibility states intact.
- **Do** preserve the petroleo/sage/claro alternation rhythm.

### Don't:
- **Don't** add decorative gradients beyond the defined banner gradient and gem strip.
- **Don't** introduce brand colors outside the token set.
- **Don't** stack multiple heading treatments in one card.
