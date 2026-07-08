# Brand Specification: Kitten & Keystroke

This document outlines the brand assets, design tokens, and style guidelines for the **Kitten & Keystroke** website building service.

---

## Brand Identity
- **Mascot**: Cozy cat (a warm espresso-colored cat in light mode, cream-colored in dark mode) typing on a small keyboard.
- **Logo Concept**: Minimalist typewriter key shape paired with a small curling cat tail or ears.
- **Tone of Voice**: Approachable expert, warm, trustworthy, and collaborative. Avoid heavy technical jargon.

---

## Design System

### 1. Color Palette

#### Light Mode (Warm Oat Cream)
- `Ground (Base Page)`: `#FAF6EE` (Warm Oat Cream)
- `Surface (Cards/Menus)`: `#FFFBF6` (Alabaster Cream)
- `Ink (Primary Text)`: `#2C2520` (Warm Charcoal/Espresso)
- `Secondary Ink (Muted Text)`: `#5C524A` (Soft Clay)
- `Accent Primary (Buttons/Focus)`: `#E89070` (Cozy Salmon)
- `Accent Secondary (Supporting)`: `#7C9A82` (Sage Green)
- `Highlight/Highlight Yellow`: `#FFEBA8` (Soft Sunlight)
- `Border Color`: `#E6DFD5` (Soft Grain)

#### Dark Mode (Comfy Midnight Cocoa)
- `Ground (Base Page)`: `#1E1A18` (Cozy Deep Espresso)
- `Surface (Cards/Menus)`: `#2B2522` (Deep Charcoal Cocoa)
- `Ink (Primary Text)`: `#F5EEE6` (Warm Almond Milk)
- `Secondary Ink (Muted Text)`: `#C2B7AE` (Muted Warm Gray)
- `Accent Primary (Buttons/Focus)`: `#F0A38B` (Bright Coral/Salmon)
- `Accent Secondary (Supporting)`: `#9EBAA4` (Soft Mint Sage)
- `Highlight`: `#DFB75C` (Amber Glow)
- `Border Color`: `#3D3531` (Dark Cocoa Border)

---

## 2. Typography
- **Display Font (Headings)**: `Fredoka` (Google Font, sans-serif, rounded, friendly and soft)
  - Scale: H1 = 3.5rem to 4.5rem, H2 = 2.2rem to 2.8rem, H3 = 1.5rem to 1.8rem.
- **Body Font**: `Outfit` (Google Font, sans-serif, readable, geometric but warm)
  - Scale: Body = 1.1rem (18px), Line-height = 1.6
- **Decorative Font**: `Caveat` (Google Font, handwriting script, used sparingly for helper remarks or paw trails)

---

## 3. Spacing System
Base grid unit: `8px`.
- Tiny: `4px`
- Small: `8px`
- Medium: `16px`
- Large: `24px`
- X-Large: `40px`
- XX-Large: `64px`
- Section Gap: `96px` to `128px`

---

## 4. Radius & Shadows
- **Border Radius**:
  - Small elements (inputs, tags): `8px`
  - Cards & containers: `24px`
  - Round pills (buttons): `9999px`
- **Shadows**:
  - Soft and warm:
    - Light Mode: `0 8px 24px rgba(44, 37, 32, 0.04)`
    - Dark Mode: `0 8px 24px rgba(0, 0, 0, 0.3)`

---

## 5. Motion Language
- **Transitions**: Smooth transitions (`300ms cubic-bezier(0.4, 0, 0.2, 1)`) for theme changes and states.
- **Card Hover**: Lift with small scale: `transform: translateY(-6px) scale(1.02);`
- **Animations**:
  - Tagline: Soft typing effect.
  - Mascot: Gentle breathing/blinking cycle.
  - Scroll zoom: Background decorative shapes scale up/down with scrolling.
