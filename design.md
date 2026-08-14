# Portfolio — Design System

Design documentation for **Md. Moynol Hasan Ome**'s developer portfolio.
Direction: **modern, dark-first, technical, glass-accented** — matching a frontend/competitive-programming engineer profile.

---

## 1. Design Direction

| Aspect | Decision |
| --- | --- |
| Personality | Precise, technical, premium, developer-focused |
| Primary style | Dark-first with glassmorphism accents (frosted cards, backdrop blur) |
| Effects | Blurred glow blobs, subtle grid backdrop, gradient text, 1px borders |
| Motion | Subtle, meaningful — scroll reveals + stagger, no excess |
| Themes | Light **and** Dark (dark is default), toggle in navbar |

---

## 2. Color Tokens

Semantic CSS variables in [src/app/globals.css](src/app/globals.css). Light values on `:root`, dark on `.dark`. Tailwind maps them via `@theme inline` (e.g. `bg-background`, `text-brand`).

### Brand — Indigo → Violet (analogous, no clash)
| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--brand` | `#6366F1` | `#818CF8` | Indigo — links, icons, highlights |
| `--brand-accent` | `#8B5CF6` | `#A78BFA` | Violet accent — eyebrows, highlights, gradient end |

### Surface & text
| Token | Light | Dark |
| --- | --- | --- |
| `--background` | `#FFFFFF` | `#0B0B14` |
| `--foreground` | `#0B0B14` | `#F5F5FA` |
| `--card` | `#FFFFFF` | `#14141F` |
| `--muted-foreground` | `#64647A` | `#A1A1B8` |
| `--border` | `#E6E6EE` | `#26263A` |
| `--primary` | `#6366F1` | `#818CF8` |
| `--ring` | `#6366F1` | `#818CF8` |

Gradient (`.text-gradient`, `brand` button): `linear-gradient(120deg, var(--brand), var(--brand-accent))`.

Contrast: body text targets **4.5:1 minimum** in both themes.

---

## 3. Typography

| Role | Font | Notes |
| --- | --- | --- |
| Sans (UI/body) | **Inter** | via `next/font/google`, `--font-inter` |
| Mono (labels/tags/periods) | **JetBrains Mono** | `--font-mono` |

Scale: hero `text-4xl → text-6xl`, section titles `text-3xl → text-4xl`, body `text-base → text-lg`, meta `text-sm`.
Base 16px, relaxed line-height on paragraphs.

---

## 4. Spacing, Radius, Layout

- Container: `max-w-6xl`, padding `px-5 sm:px-6`.
- Section vertical rhythm: `py-20 md:py-28`, `scroll-mt-24` for anchor offset under fixed navbar.
- Radius: `--radius: 0.75rem` (cards `rounded-xl`, buttons `rounded-md`, badges `rounded-full`).
- Grids: responsive `1 → 2 → 3/4` columns.

---

## 5. Components

### shadcn/ui base — [src/components/ui/](src/components/ui/)
- `button.tsx` — variants: `default`, `brand` (gradient), `outline`, `secondary`, `ghost`, `link`; sizes `sm/default/lg/icon`. Uses `cva` + `@radix-ui/react-slot` (`asChild`).
- `card.tsx` — Card / Header / Title / Content / Footer.
- `badge.tsx` — variants: `default`, `secondary`, `outline`, `brand`.
- `cn()` util — [src/lib/utils.ts](src/lib/utils.ts) (clsx + tailwind-merge).

### Icons
- **lucide-react** for UI icons.
- Brand icons (GitHub, LinkedIn) are **not** in current lucide — provided as inline SVG in [src/components/icons.tsx](src/components/icons.tsx).

### Theming
- `next-themes`, `attribute="class"`, default `dark`, system-aware.
- [theme-provider.tsx](src/components/theme-provider.tsx) + [theme-toggle.tsx](src/components/theme-toggle.tsx) (animated sun/moon, hydration-safe).

---

## 6. Motion — [src/components/motion/reveal.tsx](src/components/motion/reveal.tsx)

Library: **motion** (`motion/react`).

| Primitive | Behavior |
| --- | --- |
| `Reveal` | Fade + rise on scroll into view (`whileInView`, `once`) |
| `Stagger` / `StaggerChild` | Container staggers children (0.08s) |
| Hero | Entrance sequence with incremental delays |
| Navbar mobile menu | `AnimatePresence` height/opacity |

Easing `[0.22, 1, 0.36, 1]`, durations 0.25–0.55s.
**Accessibility:** `useReducedMotion` drops transforms; global `prefers-reduced-motion` CSS kills animation/scroll-smoothing.

---

## 7. Sections (order) — [src/components/sections/](src/components/sections/)

1. **Navbar** — fixed, blur-on-scroll, anchor nav, theme toggle, mobile drawer. Logo = portrait photo (`public/ome.jpg`) in a gradient ring + last name.
2. **Hero** — status pill, name, gradient tagline, summary, CTAs, socials, stat cards, glow + grid backdrop.
3. **About** (`01`) — 4 highlight cards.
4. **Skills** (`02`) — grouped tech badges.
5. **Experience** (`03`) — timeline.
6. **Projects** (`04`) — 2-col cards with hover accent bar + tags.
7. **Competitive Programming** (`05`) — platform rating cards + placements + certifications.
8. **Education** (`06`) — stacked cards (icon + title + school + period badge, bullet points; Bachelor's adds coursework badges). Bachelor → HSC → SSC.
9. **Contact** (`07`) — CTA panel + contact links.
10. **Footer** — copyright + social links.

Content lives centralized in [src/lib/data.ts](src/lib/data.ts) (edit content there, not in components).

**Assets:** portrait `public/ome.jpg` (`profile.avatar`, used in Hero via `next/image`). Favicon = `src/app/icon.jpg` (Next file convention, same photo).

---

## 8. Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 (CSS-first `@theme`) · shadcn/ui · motion · next-themes · lucide-react.

---

## 9. Pre-delivery Checklist

- [x] No emoji as icons (SVG only)
- [x] `cursor-pointer` on clickable elements
- [x] Hover transitions 150–300ms
- [x] Focus-visible rings for keyboard nav
- [x] `prefers-reduced-motion` respected
- [x] Light + dark contrast ≥ 4.5:1 for body text
- [x] Responsive at 375 / 768 / 1024 / 1440px
- [x] Production build passes (`npm run build`)
