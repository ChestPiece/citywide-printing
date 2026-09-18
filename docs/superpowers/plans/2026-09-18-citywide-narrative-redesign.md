# City Wide Narrative Redesign Implementation Plan

> **For agentic workers:** Execute task-by-task. Steps use checkbox syntax.

**Goal:** Ship the Long-Scroll Process Narrative landing page per `docs/superpowers/specs/2026-09-18-citywide-narrative-redesign.md`.

**Architecture:** Single Next.js page with header, motion wrapper, and section composition. GSAP for light scroll reveals only (no pin). Tokens in CSS; copy in `lib/site.ts`.

**Tech Stack:** Next.js 16, React 19, Tailwind 4, GSAP, shadcn Button/Sheet, Space Grotesk + IBM Plex Sans.

## Global Constraints

- WhatsApp surfaces ≤4; no invented metrics; no `transition: all`; hit targets ≥44px; drop Copy Center service; cooler paper/ink; no GSAP pin on work gallery.

---

## File map

| File | Responsibility |
| --- | --- |
| `lib/site.ts` | Site constants + 4 services + steps copy |
| `app/layout.tsx` | Fonts (Space Grotesk + IBM Plex Sans) |
| `app/globals.css` | Cooler tokens, ease vars, reduced motion |
| `components/ui/button.tsx` | Named transitions + active scale |
| `components/site-header.tsx` | Nav + ≥44px CTAs |
| `components/site-motion.tsx` | Hero + reveal only (no pin) |
| `app/page.tsx` | Full narrative page |

---

### Task 1: Data + tokens + fonts

- [ ] Update `lib/site.ts` — 4 services, `steps` array
- [ ] Update `app/layout.tsx` — IBM Plex Sans body
- [ ] Update `app/globals.css` — cooler palette, `--ease-out`

### Task 2: Button + header craft

- [ ] Fix `button.tsx` transitions / active scale
- [ ] Fix `site-header.tsx` hit targets; shorter header CTA label optional (“WhatsApp”)

### Task 3: Motion rewrite

- [ ] Rewrite `site-motion.tsx` — remove pin; faster hero; reduced-motion safe

### Task 4: Page rewrite

- [ ] Rewrite `app/page.tsx` to full arc
- [ ] Mobile sticky WhatsApp + spacer
- [ ] `bun run build` passes

### Task 5: Verify

- [ ] Manual / Playwright: hero brand visible; no pin empty band; mobile menu works
