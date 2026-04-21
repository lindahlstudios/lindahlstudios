# Homepage Critique — 2026-04-17

**Tool**: `/critique` (impeccable skill)
**Branch**: `fix/audit-findings`
**Automated scan**: `npx impeccable --json src/components/` → `[]` (zero findings)

---

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | "2/3 spots filled" and booking month are strong; screenshot API fails silently |
| 2 | Match System / Real World | 4 | P&L, CAC, LTV, MER — exactly right for the audience |
| 3 | User Control and Freedom | 3 | No nav anchors to Services/Process; jump-to requires scrolling |
| 4 | Consistency and Standards | 3 | Eyebrow labels on Services/Process/Hero but missing on Work and Testimonials |
| 5 | Error Prevention | 2 | microlink.io screenshots have no fallback if the API call fails |
| 6 | Recognition Rather Than Recall | 3 | Sections well-labeled; numbered work items aid scanability |
| 7 | Flexibility and Efficiency | 2 | No anchor nav; no way to skip to Services or pricing |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely excellent — nothing is noise |
| 9 | Error Recovery | 2 | Silent image failures; no visible recovery paths on homepage |
| 10 | Help and Documentation | 2 | Process section helps, but no FAQ or self-qualification path |
| **Total** | | **28/40** | **Good — address weak dimensions** |

---

## Anti-Patterns Verdict

**Does this look AI-generated?** No. Passes with high confidence.

The Spectral + Jost pairing is distinctive without being trendy. Forest green is genuinely precious — it appears on maybe 15% of elements. The FewerClients dark card, the ProcessTimeline editorial layout with oversized faded numbers, the word-reveal hero — these feel considered and designed for a specific brand, not generated from a prompt. The clip-path screenshot wipe on Work hover is a real interaction, not decoration.

**Deterministic scan**: `[]` — zero issues across all 13 components. No border-left stripes, no gradient text, no glassmorphism, no hero metric layout, no identical card grids.

---

## Overall Impression

The craft is exceptional — one of the cleanest marketing sites in this category. The design does its job. The problem isn't how it looks; it's what the content doesn't say. The target audience (operators with $2M+ GMV who've been burned) will scan this in 90 seconds and ask one question: *"What did David actually change for someone like me?"* Right now, the answer isn't on the page.

---

## What's Working

**1. The hero word-reveal.** Genuinely memorable. Most dev studio sites open with a fade-in on generic sans-serif copy. This one makes you pause. It sets a technical competence signal before a single word is read.

**2. Availability transparency.** "Now Booking [Month]" plus "2/3 spots filled" in the same above-the-fold area does more trust work than a paragraph of copy. Scarcity + precision = credibility.

**3. The Process section.** The editorial row layout with large faded serif numbers creates rhythm and calm authority. It reads like a confident agency that's done this before. The "no wondering what's happening" framing is exactly what the burned operator needs to hear.

---

## Priority Issues

### [P1] Testimonials don't contain outcomes

- **What**: The five testimonials describe David's communication style and pleasantness. None contain a business metric, timeline win, or conversion result.
- **Why it matters**: A $2M+ GMV operator evaluating a $15–30k custom build will discount "pleasure to work with." They want "our conversion rate improved X%" or "we saved $Y/year replacing Rebuy." The Aviator Nation RIDE featured testimonial says "we'll definitely look to partner with David again" — that's praise about process, not results.
- **Fix**: Even a single outcome sentence per testimonial transforms this section. If exact numbers aren't available, qualitative outcomes work: "our cart abandonment dropped noticeably" beats "great communicator."
- **Suggested command**: `/distill`

### [P1] Work items show tasks, not outcomes

- **What**: Every project row shows what was built ("Custom backorder feature", "Replaced Rebuy with custom dev") but not what changed as a result.
- **Why it matters**: "Replaced Rebuy with custom dev" at Aviator Nation is a significant cost savings story waiting to be told. The operator reading this does business math; give them numbers to work with.
- **Fix**: One outcome per project. Small callout below the work tags: "→ ~$800/mo saved on Rebuy license" or "→ Launched in 4 weeks". Even rough numbers beat silence.
- **Suggested command**: `/distill`

### [P2] Services body text is too dense for scanners

- **What**: Ecommerce Strategy & Consulting and AI for Your Business have 3–4 sentence body paragraphs. On mobile, this is a wall.
- **Why it matters**: Operators in evaluation mode scan. They'll read the title and the first clause, then jump to the next row. The most compelling material ("thinking in contribution margin and CAC payback") is buried in sentence 3.
- **Fix**: Lead each service body with the core value prop in one sentence. "Strategy from a team that runs its own Shopify brand: contribution margin thinking, not just top-line revenue" carries more than the current three sentences.
- **Suggested command**: `/clarify`

### [P2] Screenshot API has no fallback

- **What**: Work thumbnails use `https://api.microlink.io/?url=...&screenshot=true` — an external API that can fail, rate-limit, or return an error image.
- **Why it matters**: On a slow connection or if microlink throttles, 7 work rows could show broken image boxes. For a studio selling premium execution, a broken own-site screenshot is a silent credibility hit.
- **Fix**: The `bg-gradient-to-br from-ui-subtle to-ui-placeholder` container already acts as the right fallback. Confirm images load in production; consider caching screenshots locally for the top 3 projects.
- **Suggested command**: `/harden`

### [P3] Eyebrow label missing on Work and Testimonials

- **What**: Services has "Services" eyebrow, Process has "The Process", Hero has the studio tagline. Work and Testimonials head straight into h2s with no context-setter.
- **Fix**: Add `<p class="text-[11px] font-semibold text-forest tracking-[0.12em] uppercase mb-3">Selected Work</p>` above the Work h2. Optional: "From Clients" above Testimonials.

---

## Persona Red Flags

**The Skeptical Operator** (just got burned by a $20k agency build that launched 3 months late with zero conversion lift):
- Reads the hero copy — nods. Reads the ValueProp — nods harder. Scrolls to Work. Sees "Aviator Nation · CRO & UI improvements." Thinks: "but did conversion actually improve?" No answer. Scrolls to Testimonials. Reads "David is a pleasure to work with." Still no answer. Opens a competitor tab.
- The operator doesn't doubt that David is good — they've been told that by agencies before. They need *proof of outcome*, not proof of process.

**The Mobile Visitor** (senior ecom manager, reviewing on phone after a referral):
- Work section screenshots are hidden on mobile. They see a clean list but no visual impact. Services hits them with dense paragraphs. Process performs well (editorial rows scale nicely). But they'll hit that Services wall and have to work to find what matters.

---

## Minor Observations

- `About` h2 — "I'm David — developer, operator, and the person writing your code" — is the most differentiating line on the page. Worth a signal boost somewhere earlier.
- `About` Shopify logo: `Shopify-Logo_Monotone_Black.PNG` — uppercase extension suggests source asset used directly. `alt="Shopify Plus Partner"` may not be accurate if it's the standard logo rather than the Plus Partner badge.
- `Services` h2 "What we do" is the only slightly generic headline on an otherwise sharp page. "What we build" would be more on-brand.
- `FewerClients` dark card is strong but sits between Work and Availability without a section label. Its core claim — "fewer clients, better results" — is one of the most differentiating on the page; it could earn more prominence.

---

## Questions to Consider

- *"What would a skeptical $2M GMV founder ask after reading this that the page can't currently answer?"* (Spoiler: "did any of this actually convert?")
- *"The best proof of operator mindset is in the About section — what if it were higher on the page?"*
- *"Does the current structure send the right people to the contact form, or does it let everyone through?"*

---

## Recommended Actions

1. **[P1] `/distill`** — Add outcome data to testimonials and Work items (requires David to supply numbers/results)
2. **[P2] `/clarify`** — Tighten Services body text; lead each with one strong sentence
3. **[P2] `/harden`** — Audit microlink.io screenshot loading; add local caches or explicit fallback handling
4. **[P3] `/polish`** — Add eyebrow labels to Work and Testimonials for consistency

> Re-run `/critique` after fixes to see your score improve.
