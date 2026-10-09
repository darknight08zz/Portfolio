# AGENTS.md

## Project Instructions & Guidelines for AI Agents

This file serves as the persistent context, architectural specification, and instruction guide for AI agents working on this portfolio codebase.

---

### Core Rules & Principles

1. **Targeted Inspection**: For future small changes, inspect **ONLY** the files directly relevant to that change instead of repeatedly analyzing or scanning the entire project.
2. **Minimal Changes**: Make the smallest possible code change that achieves the requested result. Do not rewrite unrelated files or components.
3. **Reuse Existing Assets**: Reuse existing components, utilities, styles, CSS variables, data structures, and UI patterns whenever possible.
4. **No Unnecessary Dependencies**: Do not introduce new dependencies (e.g., Three.js, GSAP, WebGL, external animation libraries). The existing stack (Next.js, Tailwind, Framer Motion, Lenis) is complete and authoritative.
5. **Preserve Existing Architecture & UI**: Preserve the editorial visual design, typography, spacing, responsive layout, functionality, and performance.
6. **In-Place Modifications**: Before modifying a file, check its existing implementation and modify it in place whenever practical. Avoid duplicate components or duplicate logic.
7. **Targeted Validation**: After a change, perform only relevant targeted validation (`npx tsc --noEmit`) rather than full project rebuilding or broad re-analysis.
8. **Record Context**: Maintain a concise record of completed architectural or structural changes in this document.

---

### Visual Direction & Design Tokens

The visual language is **editorial, minimal, technical, cinematic, and sophisticated**, conveying a serious Software Engineer & Frontend Developer.

#### Dark Theme (Default)
- **Backgrounds**:
  - `--bg-primary`: `#0B0D0E` (near-black charcoal)
  - `--bg-secondary`: `#111416` (graphite)
  - `--bg-card`: `#181A1B` (elevated charcoal)
  - `--bg-elevated`: `#232526` (warm graphite)
- **Typography Colors**:
  - `--text-primary`: `#E8E2D8` (warm off-white)
  - `--text-highlight`: `#F4EEE4` (ivory highlight)
  - `--text-secondary`: `#A7A09A` (warm gray)
  - `--text-muted`: `#68635E` (muted warm gray)
- **Accents (Restrained & Muted)**:
  - `--accent-primary`: `#C5A574` (muted warm gold)
  - `--accent-secondary`: `#D7B98A` (muted champagne)
  - `--accent-tertiary`: `#B89568` (restrained bronze)
  - `--accent-glow`: `rgba(215, 185, 138, 0.12)` (soft champagne ambient)
  - `--accent-cyan`: `#9EA7AA` (restrained desaturated slate)
  - `--accent-warm`: `#D7B98A`
- **Borders & Surfaces**:
  - `--border-subtle`: `rgba(232, 226, 216, 0.08)`
  - `--border-hover`: `rgba(215, 185, 138, 0.28)`
  - `--nav-bg`: `rgba(11, 13, 14, 0.88)`
  - `--card-shadow`: `0 8px 32px -4px rgba(0, 0, 0, 0.5)`

#### Light Theme (Architectural Warm Stone)
- **Backgrounds**:
  - `--bg-primary`: `#F5F1E9` (warm ivory)
  - `--bg-secondary`: `#ECE7DE` (soft stone)
  - `--bg-card`: `#FFFFFF` (crisp white)
  - `--bg-elevated`: `#DED8CF` (warm light gray)
- **Typography Colors**:
  - `--text-primary`: `#1B1B1A` (charcoal)
  - `--text-highlight`: `#0D0E0E` (deep charcoal)
  - `--text-secondary`: `#5E5A55` (secondary text)
  - `--text-muted`: `#8E8880` (muted gray)
- **Accents**:
  - `--accent-primary`: `#B89568` (restrained bronze)
  - `--accent-secondary`: `#C5A574` (muted warm gold)
  - `--accent-tertiary`: `#D7B98A` (champagne)
  - `--accent-glow`: `rgba(197, 165, 116, 0.14)`
- **Borders & Surfaces**:
  - `--border-subtle`: `rgba(27, 27, 26, 0.08)`
  - `--border-hover`: `rgba(184, 149, 104, 0.35)`
  - `--nav-bg`: `rgba(245, 241, 233, 0.88)`
  - `--card-shadow`: `0 8px 30px -4px rgba(27, 27, 26, 0.06)`

#### Typography Hierarchy
- **Display**: `Syne` (`font-display`, weights 700–800) with tight letter spacing (`-0.035em`) for editorial headlines.
- **Body**: `Outfit` (`font-body`, weights 300–500) for comfortable, readable narrative copy.
- **Monospace**: `DM Mono` (`font-mono`, weights 300–500) for section tags, metadata, dates, and technical telemetry.
- **Fluid Scaling**: Fluid headings using `clamp()` rules (`.text-display`, `.text-heading`, `--section-padding`).

---

### Motion System & Timing Hierarchy

- **FAST (150–250ms)**: Hover states, button transitions, micro-interactions, cursor scaling.
- **MEDIUM (300–500ms)**: Card interactions, UI tab switches, theme toggling, page transitions (`[0.16, 1, 0.3, 1]`).
- **SLOW (500–900ms)**: Section entrance reveals (`useReveal`), Hero text clips, spring physics.
- **LOADING (900–1200ms)**: Preloader progress counting and unmount sequence (`LoadingScreen.tsx`).
- **3D Design Rules**:
  - Subtle physical depth via CSS perspective + Framer Motion (`rotateX: [-6, 6]`, `rotateY: [-6, 6]`, `translateZ`).
  - No Three.js/WebGL. Disabled on mobile/touch (`pointer: coarse`) and when `prefers-reduced-motion` is enabled.

---

### Component Responsibilities

- **`LoadingScreen.tsx`**: Editorial preloader with smooth progress counter (0–100%), minimal line indicator, and elegant unmount.
- **`Navbar.tsx`**: Editorial top bar with brand mark, section anchor links, theme toggle, and resume trigger.
- **`Hero.tsx`**: Lead engineering positioning, 4-metric evidence row (900+ LeetCode, 863d Streak, 9.16 CGPA, 10+ Projects), CTAs, and 3D layered workstation depth visual.
- **`About.tsx`**: Narrative bio, final-year student status, architectural avatar card, and verified highlight chips.
- **`Projects.tsx` & `ProjectCard.tsx`**: Category-filtered showcases with primary order: 1. CrowdShield, 2. NetSentinel, 3. VTRACE. 3D card tilt with champagne cursor spotlight.
- **`Skills.tsx`**: 6 categorized engineering competency cards (`Languages`, `Frontend`, `Backend & APIs`, `Databases`, `Tools & Platforms`, `Core Engineering`).
- **`Experience.tsx` & `Education.tsx`**: Editorial timeline journey using shared [`TimelineItem.tsx`](src/components/ui/TimelineItem.tsx) with refined stem, restrained nodes, and document links.
- **`Contact.tsx`**: "Let's build something useful." closing section with form and direct channels (Email, GitHub, LinkedIn, Resume).
- **`CustomCursor.tsx`**: Hardware-accelerated minimal dual-element cursor with touch-disabling and champagne palette.
- **`ScrollProgress.tsx`**: Minimal 1.5px top progress line tracking scroll position.

---

### Accessibility & Performance

- **Reduced Motion**: Full support for `@media (prefers-reduced-motion: reduce)`. 3D tilts, spring follow, and preloader delays are bypassed.
- **Touch-Friendly**: Custom cursor, magnetic effects, and hover tilts are automatically disabled on coarse pointer devices.
- **Zero Heavy Dependencies**: Pure CSS, Tailwind, Framer Motion, and Lenis. GPU-accelerated transforms (`translate3d`, `opacity`, `clip-path`).

---

### Visual Correction Architecture & Reference Alignment

1. **Editorial Sequence**:
   - `Hero`: Personal intro "Hi, I'm Ujjwal Prajapati — Building scalable, high-performance web products.", availability status "● OPEN TO FULL-TIME & INTERNSHIP OPPORTUNITIES", filled champagne CTA ("View My Work →"), secondary "Download Resume", 4 stats (900+ LeetCode, 863 Days Active Streak, 9.16 CGPA, 10+ Projects Completed), and 3D architectural portrait frame featuring Ujjwal's photo (`/Ujjwal_Profile_photo.jpeg`).
   - `01 / FEATURED PROJECTS`: 3-card featured showcase (CrowdShield, NetSentinel, VTRACE) and full project grid with dedicated domain-specific 16:9 previews for each project (MarketMind, FraudShield, FinPath, SynaptiScan, OMR, Earthquake; fMRI project commented out). Circular `↗` button, verified descriptions, and tech badges. Zero image duplication across projects.
   - `02 / ABOUT ME & 03 / SKILLS`: 2-column side-by-side block. Left: "Turning ideas into real solutions." + narrative + desk image (`/about-developer.jpg`). Right: "Technologies I work with" grouped into 5 strategic engineering tiers (01 Core Engineering, 02 Frontend, 03 Backend & APIs, 04 Data, 05 Languages & Tools) with tailored icons.
   - `04 / EXPERIENCE`: "My journey so far" with vertical line and golden circular nodes (PixScript Technologies, Freelance Frontend Developer, B.Tech CSE @ XIM University).
   - `05 / GET IN TOUCH`: "Let's build something useful." supported by concise availability statement ("Currently open to full-time software engineering and frontend development opportunities, as well as relevant internships."), email pill input, social channels, curved horizon backdrop (`/contact-horizon.jpg`) with "Open for new opportunities.", and minimal footer bar.
2. **Clean Architecture**: Legacy blog routes (`/blog`, `/admin`, `/api/posts`, `BlogPreview.tsx`) and deprecated layout headers/sidebars have been removed.
3. **Design Tokens**: Restrained Charcoal (`#0B0D0E`, `#111416`, `#181A1B`, `#232526`), Ivory highlight (`#F4EEE4`), Warm champagne/gold (`#D7B98A`, `#C5A574`, `#B89568`). Light mode uses architectural warm stone (`#F5F1E9`, `#ECE7DE`, `#FFFFFF`).

