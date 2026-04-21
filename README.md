# Lindahl Studios

Boutique Shopify development studio website. Built with Astro, Tailwind CSS 3.3, Alpine.js, and sal.js.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Deploy to Netlify

Already deployed via Netlify. Push to `master` and it auto-builds.

- Netlify auto-detects Astro
- Every push to `master` triggers a production deploy
- PRs get automatic preview deploys
- Forms are handled by [Netlify Forms](https://docs.netlify.com/forms/setup/) — the contact form has `data-netlify="true"` and a honeypot field
- Form submissions appear in the Netlify dashboard under Forms

## Project Structure

```
src/
├── components/       # All page sections as Astro components (homepage order)
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── ClientLogos.astro
│   ├── QuoteCallout.astro
│   ├── Work.astro
│   ├── Services.astro
│   ├── FewerClients.astro
│   ├── ProcessTimeline.astro
│   ├── ValueProp.astro
│   ├── Availability.astro
│   ├── About.astro
│   ├── Testimonials.astro
│   ├── FooterCTA.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro    # HTML shell, fonts, meta, sal.js, analytics
├── pages/
│   ├── index.astro         # Homepage — assembles all components
│   ├── contact/
│   │   ├── index.astro     # Contact form (Netlify Forms + Alpine.js)
│   │   └── success.astro   # Post-submission thank you page
│   └── 404.astro           # Error page
└── styles/
    └── global.css          # Tailwind directives, sal.js overrides, shared utilities
public/
├── favicon.svg
└── images/
    ├── logos/              # Client logos (AVIF + SVG)
    ├── screenshots/        # Project screenshots (AVIF, pre-generated at build time)
    ├── david-lindahl.jpg   # David's photo
    ├── og-image.jpg        # Open Graph share image (1200x630)
    └── shopify-plus-partner.svg
```

## TODO Before Launch

- [x] Add David's photo → `public/images/david-lindahl.jpg`
- [x] Add OG image → `public/images/og-image.jpg` (1200x630px)
- [x] Add client screenshots to Work section cards
- [x] Replace Shopify Plus SVG with official badge
- [x] Update Fathom analytics site ID if needed
- [x] Set up custom domain (lindahlstudios.com) in Netlify
- [x] Replace client logo text with actual logo images

## Brand System

- **Fonts:** Spectral (display serif, headlines) + Jost (body sans, labels, UI) — self-hosted via Fontsource
- **Colors:** Cream `#F5F0E8`, Charcoal `#1A1A1A`, Forest `#2D5F4A`
- **Animations:** sal.js with `fade-up` (opacity + `translateY(20px)`), 500ms duration, staggered delays. Hero scoped to opacity-only.
- **Interactivity:** Alpine.js on the contact form (validation, radio group state)

See `tailwind.config.mjs` for the full color and font configuration.
See `CLAUDE.md` for component conventions, design principles, and rules.
