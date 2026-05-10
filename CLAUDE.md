# CLAUDE.md — KBS Auto Service and Repair

## Business Details
- **Name**: KBS Auto Service and Repair
- **Type**: Mechanic / Automotive Repair Workshop
- **Address**: 57 Wright St, Sunshine VIC 3020
- **Phone**: 0402 274 565
- **Email**: (not available)
- **Website**: (none found)
- **Rating**: 4.9 stars (~10 Google reviews)
- **Trading Hours**: Mon–Fri 9:00 AM – 6:00 PM | Sat 9:00 AM – 2:00 PM | Sun Closed

## Language
- ALL site text in English only.
- Business name "KBS Auto Service and Repair" is the exact official name.

## Design System
- **Theme**: Dark
- **Template**: A — Auto / Trades / Industrial
- **Accent color**: #c4403c (extracted from logo via colors.json)
- **Accent hover**: #cd5d59
- **Accent glow**: rgba(196, 64, 60, 0.25)
- **Background**: #0a0a0a
- **Surface**: #1a1a1a
- **Card**: #242424
- **Text**: #ffffff
- **Text muted**: #9e9e9e
- **Border**: rgba(255,255,255,0.08)
- **Border radius**: 12px
- **Heading font**: Oswald (700 headings, 500 nav/buttons)
- **Body font**: Roboto (400 body, 500 emphasis)
- **Inspiration**: Dark industrial automotive aesthetic — near-black background, vivid red accent, bold condensed uppercase typography, full-bleed hero with image overlay.

## Assets
- **Logo**: `Images/logo.png` (72x72px user-supplied; displayed at height 48px in nav, 56px in footer)
- **Images folder**: `Images/` (capital I — important for case-sensitive deployments)
  - `Images/image1.webp` — exterior/workshop (used as hero background + gallery item 1)
  - `Images/image2.webp` — interior/vehicle service (used in About section + gallery item 2)
  - `Images/image3.webp` — work/repairs in progress (gallery item 3)
  - `Images/image4.webp` — work/team at work (gallery item 4)
  - `Images/image5.webp` — work/automotive repair (gallery item 5)

## Page Sections
1. **Nav** (fixed top) — logo + brand name left, links right. Transparent → blur on scroll. Hamburger below 768px.
2. **Hero** (#home) — full-bleed `Images/image1.webp` with 55% dark overlay. h1 "KBS AUTO SERVICE AND REPAIR" with `<em>AUTO</em>` in accent. Tagline, two CTAs (Book a Service / Call Us Now), trust strip (4.9 Rating, All Makes, Same-Day, Honest Pricing).
3. **Why Choose Us** (#why) — surface bg. 4-column cards: Expert Mechanics, Transparent Pricing, All Makes & Models, Fast Turnaround.
4. **Services** (#services) — dark bg. 6 service cards: Car Servicing, Auto Repairs, Routine Maintenance, Complex Repairs, Roadside Assistance, Towing.
5. **Stats** (#stats) — surface bg. 4 stats: 4.9★ Rating, 10+ Reviews, 6 Days a Week, 100% Quality Work. Count-up animation.
6. **Gallery** (#gallery) — dark bg. 5-image CSS grid (first spans 2×2). All 5 webp images. Hover captions.
7. **About** (#about) — surface bg. 2-col: text left (description + feature checklist), image right (`Images/image2.webp` with "Sunshine, VIC" badge).
8. **Contact** (#contact) — dark bg. 2-col: left = address/phone/hours + Google Maps iframe; right = contact form with thank-you state.
9. **Footer** — near-black bg. 3-col: brand+tagline | quick links | contact info. No social icons (all social_links empty).

## Intentionally Omitted Sections
- **Testimonials**: No testimonials in research.json — section omitted entirely.
- **Social icons / Font Awesome**: All social_links are empty — Font Awesome CDN not loaded, no social icons rendered.

## Rules
- Mobile-first, breakpoints: 480 / 768 / 1024 / 1280px
- Scroll-reveal on all cards and headings (80ms stagger via .d1–.d4 classes)
- Back-to-top button (fixed bottom-right, appears at scrollY > 300)
- DEMO watermark (fixed right side, rotated 90deg, opacity 0.09, font-size 100px)
- Scroll progress bar (fixed top, 3px, accent color)
- No Lorem Ipsum — all content from research.json
- Pure HTML5/CSS3/vanilla JS — no frameworks, no build step
- Font Awesome NOT included (no social links)
- Image path: `Images/` with capital I — match exactly

## Redeployment
After making changes, commit and redeploy from inside this folder:
```bash
git add -A
git commit -m "describe your changes"
git push
vercel --prod --yes
```
The Vercel project is already linked (`.vercel/project.json`) — no token or scope flags needed.
