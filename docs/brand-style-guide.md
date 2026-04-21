# Lindahl Studios — Quick Brand Guide
### For client-facing documents, proposals, research decks, and website reference

---

## Brand Foundation

### Ideal Client
Ecommerce operator or brand-side ecom/marketing director at an established Shopify or Shopify Plus brand — $2M+ GMV, past the scrappy stage, likely burned by a slow agency or a developer who didn't understand the business side. They know what they want built but can't build it themselves. Sophisticated enough to recognize quality, budget-authorized to pay for it. Shopify Plus is the target tier not for the feature set, but for what it signals about where the brand is.

### Emotional Direction
The site should leave visitors feeling **relief, grounded in trust.** Not hype, not excitement — the quiet confidence of finding the right person. The operator background is what earns this; it's a credential, not a claim.

### Brand in Three Words
**Grounded. Sharp. Unhurried.**

- *Grounded* — operator experience, no BS, been on their side of the P&L
- *Sharp* — technically precise, CRO-focused, deliberate decisions
- *Unhurried* — boutique pace, select clients, async-first

### What It Should NOT Look Like
The oversaturated "we scale ecom brands 🚀" agency aesthetic. Loud gradients, generic Webflow templates, dark-mode maximalism, stock photo founders pointing at laptops. Nothing that reads as trying too hard.

---

## Visual Calibration Notes

The type pairing and palette are right. The main tension to manage: cream + Instrument Serif can pull slightly toward artisan/vintage when the target feel is more precise and considered. The fix is structural crispness, not a palette overhaul.

- **White is the default surface.** Cream is an accent — section callouts, cover pages, hero areas — not a blanket background.
- **The serif stays for headlines** but shouldn't bleed into everything. Plus Jakarta Sans carries the structural weight.
- **Forest green should appear with contrast around it** so it reads as precise rather than organic.
- The goal: warm enough to not feel like a SaaS tool, sharp enough to not feel like a pottery studio.

---

## Fonts

| Use | Font | Weight | Where to get it |
|-----|------|--------|-----------------|
| **Headlines / Titles** | Instrument Serif | Regular (400) | [Google Fonts](https://fonts.google.com/specimen/Instrument+Serif) |
| **Body text** | Plus Jakarta Sans | Regular (400), Medium (500) | [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |
| **Labels / Captions** | Plus Jakarta Sans | SemiBold (600), uppercase, 1–2px letter spacing | — |
| **Buttons / UI** | Plus Jakarta Sans | SemiBold (600) | — |
| **Fallback** (if fonts unavailable) | Georgia (headlines), system-ui or Arial (body) | — | System fonts |

### On the website (Astro + Tailwind)
- Loaded via Google Fonts: `Instrument Serif` (regular + italic) and `Plus Jakarta Sans` (300–700 + italic 400, 500)
- Tailwind config: `font-serif` → Instrument Serif, `font-sans` → Plus Jakarta Sans

### In Google Docs / Word
- Install both fonts locally, or use them via Google Docs (Add fonts → search "Instrument Serif" and "Plus Jakarta Sans")
- **Headlines:** Instrument Serif, 24–28pt, #1A1A1A
- **Subheadings:** Plus Jakarta Sans SemiBold, 14–16pt, #1A1A1A
- **Body:** Plus Jakarta Sans Regular, 11–12pt, #2C2C2C or #444444
- **Captions / metadata:** Plus Jakarta Sans Medium, 9–10pt, #999999

---

## Colors

| Role | Hex | Tailwind Token | Where to use |
|------|-----|----------------|-------------|
| **Charcoal** (primary text) | `#1A1A1A` | `charcoal` | Headlines, primary text |
| **Dark gray** (body text) | `#2C2C2C` | — | Body copy in documents |
| **Medium gray** (secondary) | `#666666` | `gray-600` | Body text on website, descriptions |
| **Light gray** (captions) | `#999999` | `gray-400` | Labels, dates, metadata |
| **Cream** (backgrounds) | `#F5F0E8` | `cream` | Hero, section accents, cover pages — not the default page background |
| **Forest green** (accent) | `#2D5F4A` | `forest` | CTAs, buttons, highlights, links, eyebrows |
| **Forest light** (hover) | `#3A7A5E` | `forest-light` | Button hover states |
| **Forest pale** (light accent) | `#E8F0EB` | `forest-pale` | Table headers, callout boxes, tags, form success |
| **White** | `#FFFFFF` | — | Default page background, content surfaces, cards |

### Quick rules
- **Never use pure black** (#000000) for text — always #1A1A1A or #2C2C2C
- **White is the default surface** — cream is used as an intentional accent, not a blanket background
- **Accent sparingly** — forest green for emphasis only, not large blocks of text; surround it with contrast so it reads precise
- **Dark sections** use charcoal (#1A1A1A) background with cream text for headings and white/55 opacity for body text

---

## Type Scale (Website)

| Element | Font | Size (desktop / mobile) | Weight | Line Height |
|---------|------|------------------------|--------|-------------|
| Hero headline | Instrument Serif | 52px / 36px | 400 | 1.08 |
| Section heading (h2) | Instrument Serif | 36px / 28px | 400 | 1.15 |
| Subsection heading (h3) | Instrument Serif | 32px / 24px | 400 | 1.2 |
| Eyebrow | Plus Jakarta Sans | 13px | 600 | 1.4 |
| Body large | Plus Jakarta Sans | 17px | 400 | 1.78 |
| Body | Plus Jakarta Sans | 15–16px | 400 | 1.78 |
| Small / caption | Plus Jakarta Sans | 14px | 400–500 | 1.6 |
| Label / uppercase | Plus Jakarta Sans | 12px | 600 | 1.4 |
| Nav links | Plus Jakarta Sans | 14px | 500 | 1.4 |
| Button text | Plus Jakarta Sans | 15px | 600 | 1.4 |

---

## Document Formatting

### Cover page
- Background: Cream (#F5F0E8)
- "Lindahl Studios" in Instrument Serif, 14pt, #1A1A1A (top left or centered)
- Document title in Instrument Serif, 28–36pt, #1A1A1A
- Client name, date, and "Prepared by Lindahl Studios" in Plus Jakarta Sans, 11pt, #999999

### Headers & hierarchy
1. **H1 — Section titles:** Instrument Serif, 24pt, #1A1A1A
2. **H2 — Subsections:** Plus Jakarta Sans SemiBold, 16pt, #1A1A1A
3. **H3 — Sub-subsections:** Plus Jakarta Sans SemiBold, 13pt, #2C2C2C
4. **Body:** Plus Jakarta Sans Regular, 11pt, #2C2C2C, 1.5–1.7 line spacing

### Tables
- Header row: Forest pale background (#E8F0EB), Plus Jakarta Sans SemiBold, 10pt
- Body rows: White background, Plus Jakarta Sans Regular, 10pt, #2C2C2C
- Borders: Light gray (#EBEBEB), 0.5pt
- Cell padding: Comfortable — don't cram text

### Callout boxes
- Background: Cream (#F5F0E8) or Forest pale (#E8F0EB)
- Text: Plus Jakarta Sans, 11pt
- Optional left border: 3px Forest green (#2D5F4A)

---

## Logo / Wordmark Usage

**In documents**, use the text-based wordmark:
- "Lindahl Studios" in Instrument Serif, Regular
- Minimum size: 14pt in documents, 22px on website
- Always in Charcoal (#1A1A1A) on light backgrounds or Cream (#F5F0E8) on dark

**In footers:**
- "Lindahl Studios · lindahlstudios.com" in Plus Jakarta Sans, 9pt, #999999

**Favicon:**
- Forest green (#2D5F4A) rounded square with cream "L" in serif

---

## Buttons (Website)

| Style | Background | Text | Border | Hover |
|-------|-----------|------|--------|-------|
| **Primary** | Forest (#2D5F4A) | White | — | Forest light (#3A7A5E) |
| **Ghost** | Transparent | Charcoal (#1A1A1A) | 1.5px gray-300 | Border darkens to gray-400 |
| **CTA on dark** | Cream (#F5F0E8) | Forest (#2D5F4A) | — | White |

- Border radius: 8px (rounded-lg)
- Padding: 14px 32px
- Font: Plus Jakarta Sans, 15px, SemiBold (600)

---

## Tone Reminders (for written content)

- Write as "we" for studio work, "I" when it's clearly David
- Be direct and specific — no filler language
- Use ecom terminology naturally (AOV, LTV, CRO) — your clients speak this language
- Warm and professional, not overly casual or corporate
- The operator credential is the differentiator — lean on it, don't over-explain it
- No emojis in client-facing documents or website copy

---

## Accessibility

- Support `prefers-reduced-motion` for all animations (sal.js and any CSS transitions)
- Verify contrast on forest green (#2D5F4A) against cream (#F5F0E8) for any small text combinations
- Body text minimum 15px on web; 11pt in documents

---

## Website & Social

| Property | URL / Handle |
|----------|-------------|
| **Website** | [lindahlstudios.com](https://lindahlstudios.com) |
| **GitHub** | [github.com/lindahl-corp](https://www.github.com/lindahl-corp) |
| **LinkedIn** | [linkedin.com/in/davidalindahl](https://www.linkedin.com/in/davidalindahl) |
| **Twitter/X** | @lindahlstudios |

### Tech Stack
- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS 3.3
- **Animations:** sal.js 0.8.5
- **Hosting:** Netlify (with Netlify Forms for contact)
- **Analytics:** Fathom (site ID: UTYBQGWK)
- **OG Image:** Auto-generated at build via @vercel/og with brand fonts

---

## Legal

- **Entity:** Lindahl LLC (operating as Lindahl Studios)
- **Copyright line:** © [year] Lindahl LLC · Made in the Pacific Northwest

---

*Lindahl Studios · lindahlstudios.com*

*Last updated: April 21, 2026*