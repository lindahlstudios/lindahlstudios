# Lindahl Studios

Boutique Shopify development studio website. Built with Astro, Tailwind CSS 3.3, and sal.js.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Deploy to Netlify

Already deployed via Netlify. Push to `main` and it auto-builds.

- Netlify auto-detects Astro
- Every push to `main` triggers a production deploy
- PRs get automatic preview deploys
- Forms are handled by [Netlify Forms](https://docs.netlify.com/forms/setup/) — the contact form has `data-netlify="true"` and a honeypot field
- Form submissions appear in the Netlify dashboard under Forms

## Project Structure

```
src/
├── components/       # All page sections as Astro components
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── ClientLogos.astro
│   ├── ValueProp.astro
│   ├── Services.astro
│   ├── Work.astro
│   ├── FewerClients.astro
│   ├── About.astro
│   ├── Testimonials.astro
│   ├── FooterCTA.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro    # HTML shell, fonts, meta, sal.js, analytics
├── pages/
│   ├── index.astro         # Homepage — assembles all components
│   ├── contact/
│   │   ├── index.astro     # Contact form (Netlify Forms)
│   │   └── success.astro   # Post-submission thank you page
│   └── 404.astro           # Error page
└── styles/
    └── global.css          # Tailwind directives + base styles
public/
├── favicon.svg
└── images/
    ├── david-lindahl.jpg   # ← ADD: David's photo
    ├── og-image.jpg        # ← ADD: Open Graph share image (1200x630)
    └── shopify-plus-partner.svg
```

## TODO Before Launch

- [x] Add David's photo → `public/images/david-lindahl.jpg`
- [x] Add OG image → `public/images/og-image.jpg` (1200x630px)
- [ ] Add client screenshots to Work section cards (or keep gradient placeholders)
- [x] Replace Shopify Plus SVG with official badge
- [x] Update Fathom analytics site ID if needed
- [x] Set up custom domain (lindahlstudios.com) in Netlify
- [ ] Replace client logo text with actual logo images when available

## Brand System

- **Fonts:** Instrument Serif (headlines) + Plus Jakarta Sans (body)
- **Colors:** Cream `#F5F0E8`, Charcoal `#1A1A1A`, Forest `#2D5F4A`
- **Animations:** sal.js with `fade-up`, 500ms duration, staggered delays

See `tailwind.config.mjs` for the full color and font configuration.
