# Lindahl Studios — Claude Instructions

## Project Overview

Boutique Shopify development studio website for David Lindahl. Static marketing site built with Astro. Target audience: $2M+ GMV ecommerce operators who've been burned by slow agencies or developers who don't understand the business side.

## Tech Stack

- **Framework**: Astro 4.16
- **Styling**: Tailwind CSS 3.3 with custom design tokens
- **Interactivity**: Alpine.js (contact form), sal.js (scroll animations)
- **Fonts**: Spectral (display serif) + Jost (body sans) via Fontsource (self-hosted)
- **Deployment**: Netlify

## Design System

### Colors (Tailwind tokens)
- `forest` / `forest-light` / `forest-pale` — brand green (#2D5F4A)
- `cream` — accent surface (#F5F0E8)
- `charcoal` — primary text (#1A1A1A)
- `ui-border`, `ui-border-md`, `ui-faint`, `ui-muted`, `ui-body`, `ui-subtle` — semantic UI tokens

### Typography Scale (section headings)
- Section h2: `font-serif text-[30px] md:text-[52px] leading-[1.1]`
- Section padding: `py-20 md:py-28`
- Body: `text-[14px] leading-[1.78] text-ui-body`

### Design Principles (see `.impeccable.md` for full context)
- Grounded. Sharp. Unhurried.
- No gradient text, no border-left accent stripes, no glassmorphism
- Forest green is precious — only where it earns its place
- White as primary surface; cream as intentional accent only
- All animations: transform/opacity only, respect `prefers-reduced-motion`

## Git Workflow

This is a 1-person project. Loosely follow git flow:

- **Commit after each meaningful change** — don't batch unrelated changes into one commit; write the commit immediately when the task is done, not at the end of the session
- Commit messages: concise, specific, lowercase — `fix: reduce hero top padding on mobile` not `update Hero.astro`
- Use conventional commits: `feat:`, `fix:`, `perf:`, `polish:`, `chore:`, `docs:`
- Feature work → feature branch → PR → merge to `master`
- Hotfixes can go direct to `master` if trivial
- Current working branch: `fix/audit-findings`

## Rules Claude Must Follow

**IntersectionObserver feature detection** — Always check `'IntersectionObserver' in window` before using the API. If elements are hidden before the observer is created (e.g. `opacity = 0`), a missing API leaves them permanently hidden. Add the check to the same guard as `prefers-reduced-motion` and show a static fallback.

**ARIA radiogroup keyboard contract** — `role="radiogroup"` + `role="radio"` on buttons requires the full ARIA radio interaction pattern: roving tabindex (one `tabindex="0"`, rest `tabindex="-1"`) and arrow-key navigation (Left/Up = previous, Right/Down = next, wrapping). Without it, screen-reader users hear radio semantics but get button behavior. Either use native `<input type="radio">` or implement `handleRadioKey` + `:tabindex` bindings.

**Run `/simplify` before pushing for PR review** — Always run `/simplify` on the changed files before pushing a branch up for PR review. It catches duplicate logic, redundant state, stale comments, and efficiency issues before they show up in bot review findings.

## Key Files

- `src/components/` — all page sections as Astro components
- `src/pages/` — index, contact, 404, success
- `src/styles/global.css` — global styles, sal.js config
- `tailwind.config.mjs` — design tokens
- `.impeccable.md` — full design context and anti-pattern rules
- `.claude/skills/` — project-specific Claude skills (/audit, /polish, /bolder, etc.)
