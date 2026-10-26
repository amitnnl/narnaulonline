---
version: "designmd-maker-2026-10-26"
name: "NarnaulOnline."
description: "Design system extracted from https://www.saipharmasolutions.com/ on 2026-10-26 (code-based analysis)."
colors:
  background: "#FFFFFF"
  surface: "#FFFFFF"
  text-primary: "#12213F"
  primary: "#E66A1B"
  accent: "#E66A1B"
  secondary: "#000000"
  text-secondary: "#53B94A"
  border: "#CCCCCC"
  on-primary: "#FFFFFF"
  on-secondary: "#FFFFFF"
  on-accent: "#FFFFFF"
typography:
  fontFamily: "var(--font-mono)"
  display:
    fontSize: "112px"
    lineHeight: "1"
    letterSpacing: "-.04em"
  body-md:
    fontSize: "16px"
    lineHeight: "1.5"
  label-sm:
    fontSize: "12.8px"
    letterSpacing: ".14em"
rounded:
  sm: "2px"
  md: "12px"
  lg: "24px"
layout:
  containerMaxWidth: "768px"
  gridColumns: 5
components:
  card:
    background: "{colors.surface}"
    border: "1px solid {colors.border}"
    radius: "24px"
  button-primary:
    background: "{colors.primary}"
    radius: "12px"
---

# Design Specification — NarnaulOnline.

| Field | Value |
|---|---|
| Site / Project | https://www.saipharmasolutions.com/ |
| Analyzed on | 2026-10-26 |
| Analysis mode | Automated code extraction (no AI) |

## Overview

This design system was extracted programmatically from the source page. It is built on a light canvas (#FFFFFF), ink text (#12213F), a vivid accent (#E66A1B). All type is set in `var(--font-mono)`. Detected style signatures: gradient-rich / aurora; technical / mono accents.

## Color System

### Detected palette (by frequency)

| Hex | RGB | HSL | Count |
|---|---|---|---|
| `#000000` | 0, 0, 0 | 0° 0% 0% | 73 |
| `#FFFFFF` | 255, 255, 255 | 0° 0% 100% | 27 |
| `#12213F` | 18, 33, 63 | 220° 56% 16% | 18 |
| `#1F63D8` | 31, 99, 216 | 218° 75% 48% | 8 |
| `#53B94A` | 83, 185, 74 | 115° 44% 51% | 8 |
| `#CCCCCC` | 204, 204, 204 | 0° 0% 80% | 8 |
| `#E66A1B` | 230, 106, 27 | 23° 80% 50% | 4 |
| `#D94747` | 217, 71, 71 | 0° 66% 56% | 3 |
| `#1C2D4B` | 28, 45, 75 | 218° 46% 20% | 2 |
| `#2F2C1C` | 47, 44, 28 | 51° 25% 15% | 2 |
| `#2E7D32` | 46, 125, 50 | 123° 46% 34% | 2 |
| `#EDF4FF` | 237, 244, 255 | 217° 100% 96% | 2 |
| `#D7E3F6` | 215, 227, 246 | 217° 63% 90% | 2 |
| `#11284F` | 17, 40, 79 | 218° 65% 19% | 1 |
| `#203D73` | 32, 61, 115 | 219° 56% 29% | 1 |
| `#6C3D4A` | 108, 61, 74 | 343° 28% 33% | 1 |
| `#D57724` | 213, 119, 36 | 28° 71% 49% | 1 |
| `#F5F9FF` | 245, 249, 255 | 216° 100% 98% | 1 |
| `#62708B` | 98, 112, 139 | 220° 17% 46% | 1 |
| `#C4D5F0` | 196, 213, 240 | 217° 59% 85% | 1 |

### Assigned roles

Roles are taken from the page's own semantic CSS custom properties when present, otherwise inferred from usage frequency + luminance/saturation.

| Token | Hex | RGB | HSL |
|---|---|---|---|
| `--color-background` | `#FFFFFF` | 255, 255, 255 | 0° 0% 100% |
| `--color-surface` | `#FFFFFF` | 255, 255, 255 | 0° 0% 100% |
| `--color-text-primary` | `#12213F` | 18, 33, 63 | 220° 56% 16% |
| `--color-primary` | `#E66A1B` | 230, 106, 27 | 23° 80% 50% |
| `--color-accent` | `#E66A1B` | 230, 106, 27 | 23° 80% 50% |
| `--color-secondary` | `#000000` | 0, 0, 0 | 0° 0% 0% |
| `--color-text-secondary` | `#53B94A` | 83, 185, 74 | 115° 44% 51% |
| `--color-border` | `#CCCCCC` | 204, 204, 204 | 0° 0% 80% |
| `--color-on-primary` | `#FFFFFF` | 255, 255, 255 | 0° 0% 100% |
| `--color-on-secondary` | `#FFFFFF` | 255, 255, 255 | 0° 0% 100% |
| `--color-on-accent` | `#FFFFFF` | 255, 255, 255 | 0° 0% 100% |

## Gradients

- `radial-gradient(circle at 12% 0,#1f63d81a,#0000 28%),radial-gradient(circle at 88% 8%,#e66a1b1a,#0000 24%),radial-gradient(circle at 82% 72%,#d9474714,#0000 26%),url("data:image/svg+xml,%3Csvg width='56' height='56' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M56 0H0V56' fill='none' stroke='%231f63d8' stroke-width='0.6' opacity='0.08'/%3E%3C/svg%3E")`
- `linear-gradient(in lab,red,red))`
- `linear-gradient(45deg,#12213f1f 1px,#0000 1px),linear-gradient(45deg,#0000 0 47px,#12213f29 47px 49px,#0000 49px),linear-gradient(45deg,#0000 0 95px,#12213f1f 95px 97px,#0000 97px)`
- `linear-gradient(120deg,#11284f,#203d73 38%,#6c3d4a 72%,#d57724)`
- `linear-gradient(135deg,#12213f0a 1px,#0000 1px)`
- `linear-gradient(90deg,#00000047 1px,#0000 1px),linear-gradient(#00000047 1px,#0000 1px)`
- `linear-gradient(90deg,#1f63d814 1px,#0000 1px),linear-gradient(#1f63d814 1px,#0000 1px)`
- `radial-gradient(circle at 20% 20%,#0000 0 220px,#00000073 222px,#0000 225px),radial-gradient(circle at 72% 28%,#0000 0 110px,#00000073 112px,#0000 115px),radial-gradient(circle at 55% 80%,#0000 0 420px,#00000052 422px,#0000 425px)`

> 1 additional gradient definitions were framework utility templates (unresolvable `var(--tw-gradient-stops)`) and were omitted.

## Typography

Primary typeface: **var(--font-mono)** — stack: `var(--font-mono)`

### Font stacks (most used first)

- `var(--font-mono)`
- `var(--font-sans)`
- `var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")`
- `var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)`
- `var(--font-body)`
- `var(--font-heading)`
- `Helvetica,Arial,sans-serif`

### Derived type scale

| Token | Size |
|---|---|
| display | 112px |
| body-md | 16px |
| label-sm | 12.8px |

### Font sizes (by frequency)

| Size | Count |
|---|---|
| 1em | 1 |
| .8rem | 1 |
| .68rem | 1 |
| 2.75rem | 1 |
| 10px | 1 |
| .72rem | 1 |
| .78rem | 1 |
| 4rem | 1 |
| 5.5rem | 1 |
| 7rem | 1 |

### Line heights (by frequency)

| Value | Count |
|---|---|
| 1 | 5 |
| 1.5 | 2 |
| 1.2 | 1 |
| 0 | 1 |
| 1.1 | 1 |
| 1.05 | 1 |

### Letter spacing (by frequency)

| Value | Count |
|---|---|
| .14em | 2 |
| .18em | 2 |
| -.04em | 1 |
| .12em | 1 |
| .16em | 1 |
| .2em | 1 |

## Spacing

| Value | Count |
|---|---|
| 1px | 1 |

## Borders & Radius

### Derived radius tokens

| Token | Value |
|---|---|
| sm | `2px` |
| md | `12px` |
| lg | `24px` |

### Raw values (resolved, by frequency)

| Radius | Count |
|---|---|
| `0` | 5 |
| `.75rem` | 3 |
| `1.5rem` | 1 |
| `2px` | 1 |
| `inherit` | 1 |
| `3.40282e38px` | 1 |

## Layout

Container max-width: **768px**

Grid columns (largest detected grid): **5**

### Breakpoints

- 40rem
- 48rem
- 64rem
- 80rem
- 96rem

## Animation & Motion


### Easing curves

- `cubic-bezier(.4, 0, 1, 1)`
- `cubic-bezier(0, 0, .2, 1)`
- `cubic-bezier(.4, 0, .2, 1)`
- `cubic-bezier(.4, 0, .6, 1)`
- `cubic-bezier(.4, 0, .2, 1)`
- `var(--tw-ease,var(--default-transition-timing-function))`
- `var(--ease-in)`
- `var(--ease-in-out)`

### Keyframes

```css
@keyframes pulse { 50%{opacity:.5} }
@keyframes enter { 0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))} }
@keyframes exit { to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))} }
@keyframes accordion-down { 0%{height:0}to{height:var(--radix-accordion-content-height,var(--bits-accordion-content-height,var(--reka-accordion-content-height,var(--kb-accordion-content-height,var(--ngp-accordion-content-height,auto)))))} }
@keyframes accordion-up { 0%{height:var(--radix-accordion-content-height,var(--bits-accordion-content-height,var(--reka-accordion-content-height,var(--kb-accordion-content-height,var(--ngp-accordion-content-height,auto)))))}to{height:0} }
@keyframes caret-blink { 0%,70%,to{opacity:1}20%,50%{opacity:0} }
```

### Animations

- `1.25s ease-out infinite caret-blink`
- `enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)`
- `var(--animate-pulse)`
- `exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)`
- `accordion-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)`
- `accordion-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)`

## Source Design Tokens (CSS custom properties)

```css
:root {
  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --color-red-600: oklch(57.7% .245 27.325);
  --color-black: #000;
  --color-white: #fff;
  --spacing: .25rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;
  --text-xs: .75rem;
  --text-xs--line-height: calc(1 / .75);
  --text-sm: .875rem;
  --text-sm--line-height: calc(1.25 / .875);
  --text-base: 1rem;
  --text-base--line-height: 1.5;
  --text-lg: 1.125rem;
  --text-lg--line-height: calc(1.75 / 1.125);
  --text-xl: 1.25rem;
  --text-xl--line-height: calc(1.75 / 1.25);
  --text-2xl: 1.5rem;
  --text-2xl--line-height: calc(2 / 1.5);
  --text-3xl: 1.875rem;
  --text-3xl--line-height: 1.2;
  --text-4xl: 2.25rem;
  --text-4xl--line-height: calc(2.5 / 2.25);
  --text-5xl: 3rem;
  --text-5xl--line-height: 1;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 1;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 1;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
  --tracking-tight: -.025em;
  --tracking-wide: .025em;
  --tracking-wider: .05em;
  --tracking-widest: .1em;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-relaxed: 1.625;
  --ease-in: cubic-bezier(.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, .2, 1);
  --ease-in-out: cubic-bezier(.4, 0, .2, 1);
  --animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
  --blur-sm: 8px;
  --blur-lg: 16px;
  --blur-3xl: 64px;
  --aspect-video: 16 / 9;
}
```

## Do's and Don'ts

**Do**
- Do reserve the accent `#E66A1B` for interactive highlights and key moments — it is used sparingly on the source page.
- Do keep the canvas at `#FFFFFF`; surfaces should stay within the detected neutral ramp.

**Don't**
- Don't introduce colors outside the detected palette — every hue above was found in the source.
- Don't add drop shadows; the source page relies on borders and surface shifts for depth, not elevation.

## Design Tokens (copy-paste)

```css
:root {
  --color-background: #FFFFFF;
  --color-surface: #FFFFFF;
  --color-text-primary: #12213F;
  --color-primary: #E66A1B;
  --color-accent: #E66A1B;
  --color-secondary: #000000;
  --color-text-secondary: #53B94A;
  --color-border: #CCCCCC;
  --color-on-primary: #FFFFFF;
  --color-on-secondary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --font-sans: var(--font-mono);
  --font-size-display: 112px;
  --font-size-body-md: 16px;
  --font-size-label-sm: 12.8px;
  --radius-sm: 2px;
  --radius-md: 12px;
  --radius-lg: 24px;
  --tracking-display: -.04em;
  --tracking-label: .14em;
  --container-max: 768px;
}
```
