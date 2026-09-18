# City Wide — Long-Scroll Process Narrative Redesign

**Date:** 2026-09-18  
**Status:** Approved for implementation (user directed implement)  
**Macrostructure:** Long-Scroll Narrative  
**Mood:** Precision Local (industrial utility, not SaaS)

## Goal

Rebuild the single landing page so it scores toward 10/10 taste: brand-first hero, coherent narrative arc, fixed motion/CTA defects from the Playwright audit, WhatsApp still the easiest conversion.

## Narrative arc

| Beat | Section | Content |
| --- | --- | --- |
| Hook | Hero | Oversized **CITY WIDE**, place line, one promise, WhatsApp + Directions, hours |
| Problem | Slim stakes | Need print/copy/type in Mussafah today — one sentence + one supporting image |
| Solution | Services | Four services with process imagery pairing; drop redundant Copy Center |
| How it works | Steps | Message or visit → We print → Collect |
| Proof | Work + Maps | Vertical editorial gallery (crop marks); Google Maps link — no invented ratings |
| Close | Contact + footer | One WhatsApp close + call; address/hours in footer |

**Merged:** Problem is a slim band (not a full essay). No mid-page “Quick request” CTA band.

## Visual system

| Token | Value | Notes |
| --- | --- | --- |
| Ink | `#14161a` | Slightly cooler dark |
| Paper | `#f3f4f6` | Cooler than cream; escapes warm-AI-default cluster |
| Stock | `#e4e6ea` | Cool neutral surface |
| Blue | `#2457d6` | Keep brand cobalt |
| Gray | `#5c6168` | Body secondary |
| Display | Space Grotesk | Unchanged |
| Body | IBM Plex Sans | Replaces Inter |
| Radius | `0.25rem` on CTAs | Sharper, print-shop feel |
| Easing | `cubic-bezier(0.23, 1, 0.32, 1)` | Emil strong ease-out |

**Intentional rule-break:** Hero brand wordmark oversized / partially bleed toward the fold — brand is the hero signal.

**CTA budget:** Header WhatsApp + hero WhatsApp + mobile sticky WhatsApp + final close WhatsApp (≤4). No duplicate mid-page WhatsApp strip.

**Motion:** Hero entrance ≤0.6s; scroll reveals `y:24` opacity; **no GSAP pin** on work gallery; `prefers-reduced-motion` clears transforms. Buttons: named transitions + `scale(0.97)` on active.

## Component specs

- **Header:** Wordmark, 4 anchors, one WhatsApp ≥44px height; mobile menu ≥44px; sheet nav.
- **Hero:** Full-bleed `large-format.png`, dark gradient, brand + h1 promise + lede + CTAs.
- **Stakes:** Two-column on md — copy left, `desk-documents.png` right.
- **Services:** Four rows; each paired with a small process thumb where layout allows (or list + shared visual).
- **Steps:** Three numbered steps, hairline rules, no card grid.
- **Work:** Vertical stack of four panels with crop marks (press, stock, proofs, finish).
- **Location:** Address, hours, phone, Maps + Call; image `process-printer.png` or shop.
- **Close:** Dark band, one WhatsApp CTA.
- **Footer:** Name, phone, hours — no 4-column SaaS footer.
- **Mobile sticky:** WhatsApp only; spacer so footer isn’t covered.

## Audit fixes (required)

- Remove broken horizontal pin / empty cream band
- Hit targets ≥44px
- No `transition: all`
- Drop 8× numbered eyebrows
- Cap WhatsApp surfaces
- Brand readable without nav

## Out of scope

Multi-page site, CMS, forms, fake testimonials, Arabic full locale, new UI libraries.

## Success criteria

- Playwright: no overflow; no floating header over empty pin space
- First viewport: brand + headline + lede + CTAs + image
- Conversion clear without CTA fatigue
