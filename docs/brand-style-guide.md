# Lindahl Studios — Brand Style Guide

*For client-facing documents, proposals, research decks, and website reference.*
*Last updated: 2026-04-21*

---

## Brand Foundation

### Ideal Client
Ecommerce operator or brand-side ecom/marketing director at an established Shopify or Shopify Plus brand — $2M+ GMV, past the scrappy stage, likely burned by a slow agency or a developer who didn't understand the business side. They know what they want built but can't build it themselves. Sophisticated enough to recognize quality, budget-authorized to pay for it.

### Emotional Direction
The site should leave visitors feeling **relief, grounded in trust.** Not hype, not excitement — the quiet confidence of finding the right person. The operator background is what earns this; it's a credential, not a claim.

### Brand in Three Words
**Grounded. Sharp. Unhurried.**

- *Grounded* — Operator-side experience, real P&L thinking, no agency-speak
- *Sharp* — Technically precise, deliberate decisions, no filler
- *Unhurried* — Selective by design. Doesn't need every client.

### What It Should NOT Look Like
The oversaturated "we scale ecom brands 🚀" agency aesthetic. Loud gradients, generic Webflow templates, dark-mode maximalism, stock photo founders pointing at laptops. Nothing that reads as trying too hard.

---

## Fonts

| Use | Font | Weights | Source |
|-----|------|---------|--------|
| **Headlines / Display** | Spectral | 400, 500, 600 + italic 400 | Google Fonts |
| **Body / UI / Labels** | Jost | 300, 400, 500, 600, 700 + italic 400, 500 | Google Fonts |
| **Fallback** | Georgia → serif (headlines), system-ui → sans-serif (body) | — | System |

**Key typographic rules:**
- Global serif tracking: `-0.04em`. Hero h1: `-0.06em` (tighter at display scale).
- Never use Spectral for body copy. Never use Jost for display headings.
- All-caps only for short eyebrow labels, never body text.
- Letter spacing on uppercase labels: `0.12em` (eyebrows), `0.08–0.14em` (index numbers).

### In Google Docs / Word
Install both fonts locally or use via Google Docs (Add fonts → search by name).

| Role | Font | Size | Weight | Color |
|------|------|------|--------|-------|
| Headline | Spectral | 24–28pt | Regular (400) | #1A1A1A |
| Subheading | Jost | 14–16pt | SemiBold (600) | #1A1A1A |
| Body | Jost | 11–12pt | Regular (400) | #2C2C2C |
| Caption / metadata | Jost | 9–10pt | Medium (500) | #999999 |

---

## Colors

| Role | Hex | Tailwind Token |
|------|-----|----------------|
| **Charcoal** — primary text | `#1A1A1A` | `charcoal` |
| **Forest green** — brand accent | `#2D5F4A` | `forest` |
| **Forest light** — hover state | `#3A7A5E` | `forest-light` |
| **Forest pale** — light accent surface | `#E8F0EB` | `forest-pale` |
| **Cream** — intentional accent background | `#F5F0E8` | `cream` |
| **White** — default page surface | `#FFFFFF` | — |
| **Error** | `#dc2626` | `error` |

### Semantic UI tokens (use instead of raw grays)

| Token | Hex | Use |
|-------|-----|-----|
| `ui-body` | `#4b5563` | Body copy, descriptions |
| `ui-muted` | `#6b7280` | Secondary / muted text |
| `ui-faint` | `#9ca3af` | Labels, timestamps, metadata |
| `ui-border` | `#e5e7eb` | Default card and element borders |
| `ui-border-md` | `#d1d5db` | Stronger borders, form inputs |
| `ui-subtle` | `#f9fafb` | Subtle section backgrounds |
| `ui-placeholder` | `#e5e7eb` | Image placeholder backgrounds |

### Color rules
- **White is the default surface.** Cream is an intentional accent — hero, section callouts, cover pages — not a baseline background.
- **Forest green is precious.** Use it with high contrast around it so it reads precise, not earthy. Its rarity is its power.
- **Never pure black (#000).** Use `charcoal` (#1A1A1A) for text.
- **Never gray text on colored backgrounds.** On forest green or cream surfaces, use a tint of the background color or `white/opacity`.
- **Dark sections** (e.g., FewerClients card): `bg-charcoal`, headings in `text-cream`, body in `text-white/55`.
- **No gradient text.** Solid color only for all text elements.

---

## Type Scale — Website

Values reflect actual Tailwind classes in use. Sizes are `mobile / desktop`.

| Element | Font | Size | Tracking | Line Height |
|---------|------|------|----------|-------------|
| Hero h1 | Spectral | 40px → 52px (sm) → 72px → 88px (lg) | `-0.06em` | `1.03` |
| Display quote (ValueProp) | Spectral | `clamp(30px, 4.8vw + 12px, 64px)` | `-0.03em` | `1.18` |
| Section h2 | Spectral | 30px → 52px | `-0.04em` (global) | `1.1` |
| Service h3 | Spectral | 22px → 34px | `-0.025em` | `1.08` |
| Work h3 (client names) | Spectral | 22px → 34px | `-0.02em` | `1.08` |
| Process h3 (step titles) | Spectral | 22px → 26px | `-0.02em` | `1.15` |
| Decorative numbers | Spectral | `clamp(48px, 6vw, 80px)` | default | `0.9` |
| Eyebrow label | Jost | 11px | `0.12em` | — |
| Body large | Jost | 17px | default | `1.78` |
| Body | Jost | 14–15px | default | `1.78` |
| Body small | Jost | 13–14px | default | `1.6–1.78` |
| Caption / meta | Jost | 12px | default | `1.4` |
| Nav links | Jost | 14px (`text-sm`) | default | — |
| Button text | Jost | 15px | default | — |
| Wordmark (nav) | Spectral | 22px | `-0.04em` | — |

---

## Layout & Spacing

### Site-wide conventions
- **Max width:** `max-w-site` = `1200px`, centered with `mx-auto`
- **Section padding:** `py-20 md:py-28` (standard), `py-24 md:py-36` (hero/valueprop)
- **Container gutters:** `px-6 md:px-12`

### Editorial row pattern (Services, Work, Process)
Full-bleed rows with hairline dividers and negative horizontal margins to break out of container:
```
border-t border-forest/[0.15]
-mx-6 md:-mx-12 px-6 md:px-12
py-10 md:py-12
hover:bg-forest-pale/40 transition-colors duration-200
```

### Section eyebrow
Appears above h2 on all primary sections:
```
text-[11px] font-semibold text-forest tracking-[0.12em] uppercase mb-3
```

### Cards / surfaces
- Rounded: `rounded-xl` (standard), `rounded-2xl` (featured/hero cards)
- No nested cards. No cards inside cards.
- Avoid wrapping content in cards when a ruled list layout works.

---

## Animation System

### sal.js configuration
```js
sal({
  threshold: 0.2,          // element must be 20% in viewport
  rootMargin: '0px 0px -80px 0px',  // triggers 80px above the fold
  once: true,
});
```

### fade-up behavior
sal.js `fade-up` is **opacity-only** by default. A CSS override adds `translateY(20px)` movement:

```css
html [data-sal="fade-up"] {
  transform: translateY(20px);
  transition-property: opacity, transform;
}
html [data-sal="fade-up"].sal-animate {
  transform: translateY(0);
}
```

**Exception — Hero section:** The `#hero` scope restores opacity-only behavior for the word-reveal entrance:
```css
#hero [data-sal="fade-up"] {
  transform: none;
  transition-property: opacity;
}
```

### Easing
- **Standard easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) via `--sal-easing`
- **Hover transitions:** `transition-colors duration-200` for color changes; `duration-[220ms] cubic-bezier(0.16, 1, 0.3, 1)` for clip-path/transform
- Never use bounce or elastic easing.

### Standard durations & stagger
- Default: `data-sal-duration="500"`
- Heavy elements (About photo/text, ValueProp): `600–700`
- Stagger delay between sibling items: `i * 80ms` (sections), `i * 100ms` (cards)

### `prefers-reduced-motion`
All motion degrades gracefully. CSS: `html [data-sal="fade-up"] { transform: none; }`. JS animations (counters, clip-path) check `window.matchMedia('(prefers-reduced-motion: reduce)')` and show final state immediately.

---

## Interactive Components

### Buttons

| Style | Background | Text | Border | Hover |
|-------|-----------|------|--------|-------|
| **Primary** | `forest` (#2D5F4A) | white | — | `forest-light` (#3A7A5E) |
| **Ghost** | transparent | `charcoal` | `1.5px ui-border-md` | border → `ui-faint` |
| **On dark surface** | `cream` (#F5F0E8) | `forest` | — | white |
| **Nav CTA** | `forest` | white | — | `forest-light` |

- Border radius: `rounded-lg` (8px)
- Padding: `px-8 py-3.5` (hero CTAs), `px-6 py-2.5` (nav)
- Font: Jost 15px, SemiBold (600)
- Arrow nudge: `group-hover:translate-x-1` on `→` span

### Focus rings
Always use `focus-visible:` (not `:focus`) to prevent mouse-click ring flash:
```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2
```
On dark surfaces: `focus-visible:ring-cream focus-visible:ring-offset-forest`

### Nav underline
CSS `::after` pseudo-element: `scaleX(0)` → `scaleX(1)` on hover, `transform-origin: left`, `transition: 0.25s cubic-bezier(0.25, 1, 0.5, 1)`.

---

## Document Formatting (Proposals, Decks)

### Cover page
- Background: Cream (#F5F0E8)
- "Lindahl Studios" in Spectral, 14pt, #1A1A1A (top left or centered)
- Document title in Spectral, 28–36pt, #1A1A1A
- Client name, date, "Prepared by Lindahl Studios" in Jost, 11pt, #999999

### Headers & hierarchy
1. **H1 — Section titles:** Spectral, 24pt, #1A1A1A
2. **H2 — Subsections:** Jost SemiBold, 16pt, #1A1A1A
3. **H3 — Sub-subsections:** Jost SemiBold, 13pt, #2C2C2C
4. **Body:** Jost Regular, 11pt, #2C2C2C, 1.5–1.7 line spacing

### Tables
- Header row: Forest pale (#E8F0EB) background, Jost SemiBold, 10pt
- Body rows: white, Jost Regular, 10pt, #2C2C2C
- Borders: `#EBEBEB`, 0.5pt
- Cell padding: comfortable — don't cram

### Callout boxes
- Background: Cream (#F5F0E8) or Forest pale (#E8F0EB)
- Text: Jost, 11pt
- **No colored left-side border stripes.** Use background tint alone.

---

## Tone & Voice

- Write as "we" for studio work, "I" when it's clearly David speaking
- Be direct and specific — no filler language
- Use ecommerce terminology naturally (AOV, LTV, CAC, MER, contribution margin)
- Warm and professional, not overly casual or corporate
- The operator credential is the differentiator — lean on it, don't over-explain it
- No emojis in client-facing documents or website copy

---

## Accessibility

- `prefers-reduced-motion` respected for all animations — always provide a non-motion fallback
- WCAG AA contrast on all text (4.5:1 body, 3:1 UI components)
- Touch targets: minimum 44×44px on mobile
- `focus-visible:` rings on all interactive elements, never removed without replacement
- `aria-hidden="true"` on all decorative SVGs and large decorative numbers
- Body text minimum: 14px web, 11pt documents

---

## Logo & Wordmark

**Website:** Text-based wordmark — "Lindahl Studios" in Spectral, 22px, `charcoal`. Hover: `forest`.

**Documents:** Spectral Regular, 14pt, #1A1A1A on light backgrounds / #F5F0E8 (cream) on dark.

**Footer text:** "Lindahl Studios · lindahlstudios.com" in Jost, 9pt, #999999.

**Favicon:** Forest green rounded square with cream "L" in serif.

---

## Tech Stack (Website)

| Layer | Tool |
|-------|------|
| Framework | Astro 4.16 |
| Styling | Tailwind CSS 3.3 |
| Interactivity | Alpine.js (contact form, mobile menu) |
| Scroll animation | sal.js 0.8.5 |
| Fonts | Google Fonts (Spectral + Jost) |
| Hosting | Netlify (with Netlify Forms) |
| Analytics | Fathom |

---

## Contact & Legal

| Property | Value |
|----------|-------|
| Website | lindahlstudios.com |
| LinkedIn | linkedin.com/in/davidalindahl |
| Twitter/X | @lindahlstudios |
| GitHub | github.com/lindahl-corp |
| Entity | Lindahl LLC (operating as Lindahl Studios) |
| Copyright | © [year] Lindahl LLC · Made in the Pacific Northwest |
