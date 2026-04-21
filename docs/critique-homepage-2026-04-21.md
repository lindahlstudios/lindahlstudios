# Homepage Critique — 2026-04-21

**Tool**: `/critique` (impeccable skill)
**Branch**: `fix/audit-findings`
**Automated scan**: `npx impeccable --json src/components/` → `[]` (zero findings)

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | "Now Booking" badge and spot counters are good; work index shows "00" until JS loads |
| 2 | Match System / Real World | 3 | Language is sharp and operator-specific; "ecom magic together" in FooterCTA slips |
| 3 | User Control and Freedom | 3 | Sticky nav, anchor links solid; no back-to-top, no work filtering |
| 4 | Consistency and Standards | 4 | Exceptional — tokens, easing, focus rings, and hierarchy are unified throughout |
| 5 | Error Prevention | 2 | No form validation visible in homepage; services rows have no focus/active affordance on touch |
| 6 | Recognition Rather Than Recall | 3 | Numbered process steps aid recall; work gallery relies on hover-only screenshot reveal |
| 7 | Flexibility and Efficiency | 3 | Keyboard nav present; no filtering on work gallery, no keyboard shortcuts |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained palette, good typography — but hero fires 5+ staggered animations for an "unhurried" brand |
| 9 | Error Recovery | 2 | Image `onerror` fallbacks present; no graceful degradation for missing logos at "00" state |
| 10 | Help and Documentation | 3 | Process and Availability sections answer objections; no FAQ, no response time SLA stated |
| **Total** | | **29/40** | **Good — address weak dimensions** |

---

## Anti-Patterns Verdict

**LLM assessment: PASS.** This does not look AI-generated. The token system, animation orchestration, operator-specific copy ("contribution margin, LTV, CAC, MER"), and restrained color use are all deliberate. No gradient text, no glassmorphism, no dark-mode glow, no hero metric grid, no identical card grid. The brand voice holds across sections. The site has a real point of view.

**Automated scan: Clean.** `npx impeccable` returned zero findings across all components.

The only near-slop territory: the hero animation cascade — not because it looks generic, but because it's *too choreographed* for the "unhurried" brand position. Five staggered fade-ups plus a word-reveal plus two CSS pseudo-elements on the background reads as an opening sequence rather than a confident static statement.

---

## Overall Impression

Strong bones — genuinely strong. The typography, color restraint, and business positioning are doing real work. A $2M+ operator landing here will feel the difference from a generic Webflow template immediately.

The single biggest opportunity: **the emotional arc has a hole in the middle.** The hero makes a sharp promise, ValueProp deepens it, then the page stalls — Services is dense, Work is information-heavy, Process is procedural, and Availability tells a chunk of visitors they might not fit before you've finished building trust. Testimonials and About are the most emotionally resonant sections and they're buried in the back half. The sequence is fighting the conversion.

---

## What's Working

**1. The ValueProp pull quote.** "I track the same metrics you do: contribution margin, LTV, CAC, MER." This is the clearest differentiator on the page. It's large, serif, centered, and positioned right after logos. This is the emotional peak — it earns "exhale" more than the hero does.

**2. Consistency of the token system.** Forest green appears exactly where it should — nav CTA, process icons, availability bullets, focus rings. Never overused, never gratuitous. The color's rarity is doing exactly what the design principles say it should.

**3. The Availability section's honesty.** "I have a family. I build boundaries intentionally." is risky copy and it works. It signals a specific kind of working relationship without apologizing for it. The audience respects that.

---

## Priority Issues

**[P1] Hero animation is too loud for an "unhurried" brand**
The hero fires: badge fade-up → eyebrow → word-reveal on h1 → paragraph 1 → paragraph 2 → CTA buttons. That's six sequential animation events before the user can read the headline. Background has two pseudo-elements (dot grid + turbulence grain). The result feels like an opening sequence, not a quiet statement of confidence.
**Fix:** Kill the badge and eyebrow fade-ups (make them visible immediately). Reduce h1 to a single fade-in at 0ms delay rather than a word-reveal cascade. Drop background dot grid opacity to 0.03 or remove it. The page should land, not perform.
**Suggested command:** `/animate`

**[P1] "Now Booking" date is stale by design**
`bookingDate` is computed server-side at build time, not client-side on load. On Netlify with long cache TTLs, a visitor in May could see "Now Booking June" that was accurate when the site was last deployed. Sophisticated operators who test "is this site live?" will notice.
**Fix:** Either move the date computation to a `<script>` tag so it runs in the browser on each page load, or hardcode the date and update it manually, or remove the specific month and say "Now Booking Q2 2026."
**Suggested command:** `/polish`

**[P2] Availability section deflates momentum mid-page**
"Probably not the right fit if..." comes before Testimonials and About — the two most trust-building sections. You're asking visitors to self-select out before they've seen your best evidence. The Availability section isn't wrong, it's just misplaced.
**Fix:** Move Availability to after Testimonials, or after About. Let the founder story and client quotes do their work first. The self-qualification copy lands harder once someone already wants to hire you.
**Suggested command:** `/layout`

**[P2] Work gallery "00" index on slow loads**
Index counters render as `00` in the HTML and get updated via IntersectionObserver once JS loads. On slow networks, users see a column of "00"s while scrolling through the work rows — looks like a placeholder that failed to fill.
**Fix:** Render the final value server-side and enhance with JS animation. JS animates if present; page is correct if it's not.
**Suggested command:** `/polish`

**[P2] Services rows have no touch affordance**
The service rows are interactive (hover shows `bg-forest-pale/40`) but mobile and tablet users see no feedback — no active state, no visual indication that tapping does anything.
**Fix:** Add `active:bg-forest-pale/30` to the service row div.
**Suggested command:** `/polish`

---

## Persona Red Flags

**"Erika" — $3M GMV Shopify Plus merchant, DTC skincare, just fired her last agency**
Erika lands on the hero. Word-reveal animation plays. She watches it happen, which creates mild cognitive dissonance — the site feels like it's performing at her rather than talking to her. She scrolls to Services, parses 5 rows with dense body copy. She wants to know cost and timeline fast. She finds pricing info but has to read 3 sentences per service to find it. She gets to Availability — "Probably not the right fit if your business needs round-the-clock support" — and hesitates. Her store ran Black Friday issues at 11pm. Does she qualify? She's not sure, and there's no FAQ. She scrolls past to Testimonials. Those land. She clicks "Let's Chat." **Verdict:** She converts, but the Availability section introduced doubt at the wrong moment.

**"Marcus" — Head of Ecommerce, mid-market retail, evaluating developers for a Plus migration**
Marcus is comparing 3 vendors. He wants credibility signals fast. He checks: (1) client names — Aviator Nation, Sunday Golf, solid; (2) work quality — screenshot reveal only on hover, he's on iPad, no hover, he sees logos only; (3) case study depth — tags like "CRO & UI improvements" but no before/after metrics. He clicks through to one project URL — opens correctly. He scrolls to Process and reads it. It's reassuring but generic. He wants to see a testimonial from someone at his scale — Aviator Nation Plus is there, good. He clicks "Let's Chat." **Verdict:** He converts, but left wondering about project results. A metric in the work rows ("3% CVR lift") would have closed him faster.

---

## Minor Observations

- FooterCTA copy "Let's make some ecom magic together" is the only place the voice slips into artisan/warm. "Let's talk about your store" or "Have a project? Let's scope it." would match the rest of the page's register.
- The footer wordmark blur-reveal animation (`opacity: 0 → 1`, `filter: blur(20px) → blur(0)`) is pure decoration on an `aria-hidden` element. It adds perceived load time for zero value.
- About section callout: "I work best asynchronously and have been called a 'secret PM' by clients" — the self-quoted compliment reads slightly self-conscious. Let the Process section prove it instead of stating it here.
- `decoding="async"` is missing from work gallery images. Low impact but worth adding alongside the existing `loading="lazy"`.

---

## Questions to Consider

1. **What if the page opened with a case study metric instead of a job title?** "I helped Aviator Nation ship a full redesign and replace Rebuy with custom dev." is more specific than "Shopify development with an operator's eye." The headline is good — but could the sub-headline go harder?

2. **The process section is five steps of "how I work." Could one of those steps be "here's what you'll see change in your store" — a concrete deliverable, not a workflow step?**

3. **What would this page look like if Testimonials came second, right after the ClientLogos?** Trust established immediately, then "here's what I can do for you."
