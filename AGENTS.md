# AGENTS.md

## Project Instructions & Guidelines for AI Agents

This file serves as the persistent context and instruction guide for AI agents working on this portfolio codebase.

---

### Core Rules & Principles

1. **Targeted Inspection**: For future small changes, inspect **ONLY** the files directly relevant to that change instead of repeatedly analyzing or scanning the entire project.
2. **Minimal Changes**: Make the smallest possible code change that achieves the requested result. Do not rewrite unrelated files or components.
3. **Reuse Existing Assets**: Reuse existing components, utilities, styles, CSS variables, data structures, and UI patterns whenever possible.
4. **No Unnecessary Dependencies**: Do not introduce new dependencies unless explicitly required. Prefer simple, lightweight implementations over heavy abstractions.
5. **Preserve Existing Architecture & UI**: Preserve the existing visual design, typography, spacing, responsive layout, functionality, and performance unless specifically requested to alter them.
6. **In-Place Modifications**: Before modifying a file, check its existing implementation and modify it in place whenever practical. Avoid duplicate components or duplicate logic.
7. **Targeted Validation**: After a change, perform only relevant targeted validation (e.g. TypeScript check, checking for runtime/build errors) rather than full project rebuilding or broad re-analysis.
8. **Record Context**: Maintain a concise record of completed architectural or structural changes in this document.

---

### Project Overview & Directory Structure

- **Framework**: Next.js (App Router, React 18, TypeScript)
- **Styling**: Tailwind CSS with custom CSS variables defined in `src/app/globals.css` (`--bg-primary`, `--accent-primary`, `--accent-cyan`, `--text-primary`, etc.)
- **Animation & FX**: Framer Motion, Lenis smooth scrolling, Lucide React icons

#### Directory Layout
```
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with font configuration & providers
│   │   ├── page.tsx           # Main page assembling sections in order
│   │   └── globals.css        # Theme variables, typography tokens, base styles
│   ├── components/
│   │   ├── Header.tsx         # Top bar / navigation
│   │   ├── Navbar.tsx         # Navigation menu
│   │   ├── Sidebar.tsx        # Navigation sidebar
│   │   ├── Footer.tsx         # Footer with links and copyright
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx       # Hero landing: animated counters, heading, CTA, profile
│   │   │   ├── About.tsx      # Bio, avatar card, status indicator, highlight tags
│   │   │   ├── Projects.tsx   # Project showcase grid & category filtering
│   │   │   ├── Skills.tsx     # Tech stack categorized pills
│   │   │   ├── Experience.tsx # Timeline for Work Experience & Leadership
│   │   │   ├── Education.tsx  # Timeline for Education, Problem Solving & Hackathons
│   │   │   ├── Contact.tsx    # Contact form and direct communication channels
│   │   │   └── AIChatbot.tsx  # Floating AI assistant
│   │   └── ui/                # Shared UI primitives (buttons, cards, cursor, TimelineItem, etc.)
│   ├── data/
│   │   └── projects.ts        # Static dataset for project cards
│   ├── hooks/                 # Custom React hooks (e.g. useReveal)
│   └── lib/                   # Utility helpers
```

---

### Key Components & Data Structures

- **`Hero.tsx`**:
  - `Counter`: Animated counter for stats (`value`, `label`, `suffix`).
  - Stats row currently highlights: GPA (9.16), DSA Solved (900+), Projects Built (10+).
- **`Experience.tsx`**:
  - Displays the `Work Experience` section (`id="experience"`) using shared `TimelineItem` primitive.
  - Contains PixScripti Technologies (Software Development Intern, with completion certificate link) and IEEE XIM CS Student Branch (Webmaster & Treasurer).
- **`Education.tsx`**:
  - Displays the `Education & Achievements` section (`id="education"`).
  - Contains academic degree (XIM University, CGPA 9.16), competitive problem-solving milestones (LeetCode 900+ solved), certifications (CS50x), and hackathons.
- **`About.tsx`**:
  - Narrative bio, status badge, social links, and short highlight chips.
- **`Skills.tsx`**:
  - Displays 6 categorized skill groups tailored for Frontend & Software Engineering roles (`Languages`, `Frontend`, `Backend & APIs`, `Databases`, `Tools & Platforms`, `Core Engineering`).
- **`Projects.tsx` & `src/data/projects.ts`**:
  - Contains project metadata, tech tags, demo/code links, and metrics.
  - Primary featured projects (indices 0–2): `CrowdShield` (`darknight08zz/Crowdshield-AI`), `NetSentinel` (`darknight08zz/NetSentinal`), and `VTRACE` (`darknight08zz/AlgoVisu`).

---

### Change Log & Completed Structural Updates

- **LeetCode / DSA Achievement Addition**:
  - Added LeetCode problem-solving milestone (`"900+ LeetCode problems solved with an 863-day active streak."`) to `educationData` in `src/components/sections/Education.tsx` under the `Education & Achievements` section.
  - Synchronized the DSA Solved counter in `src/components/sections/Hero.tsx` to `900+` for consistency with the achievement record.
- **IEEE Leadership Experience Addition**:
  - Added IEEE XIM CS Student Branch leadership experience (Webmaster & Treasurer) to `educationData` in `src/components/sections/Education.tsx`.
  - Refined section heading to `Education & Experience` to encompass academic credentials, campus leadership, and competitive achievements in a unified journey timeline.
- **Primary Projects Optimization**:
  - Researched and verified top repositories from GitHub: `CrowdShield` (`Crowdshield-AI`), `NetSentinel` (`NetSentinal`), and `VTRACE` (`AlgoVisu`).
  - Restructured `src/data/projects.ts` with these 3 projects in primary order (1. CrowdShield, 2. NetSentinel, 3. VTRACE) using verified architecture, tech stacks, and real-time capabilities.
- **Technical Impact Refinement**:
  - Refined descriptions for the IEEE leadership experience and primary featured projects (`CrowdShield`, `NetSentinel`, `VTRACE`) to follow action-oriented, impact-driven software engineering standards without unverified metrics.
- **PixScripti Software Development Internship Addition**:
  - Verified internship completion certificate (`PixScripti_Ujjwal_Internship_Completion_Certificate.pdf`): Software Development Intern at PixScripti Technologies (May 2026 – June 2026) focusing on SaaS application development.
- **Separated Experience and Education Sections**:
  - Created standalone `src/components/sections/Experience.tsx` (`id="experience"`) detailing SaaS internship contributions (modular feature engineering, REST API integrations, state management) and IEEE technical leadership with certificate link.
  - Refined `src/components/sections/Education.tsx` (`id="education"`) dedicated strictly to degree, LeetCode streak, CS50x certification, and hackathon awards.
  - Extracted shared `TimelineItem` primitive to `src/components/ui/TimelineItem.tsx` eliminating code duplication.
- **Skills Section Optimization for SWE & Frontend Roles**:
  - Reorganized skills into 6 structured, highly relevant categories: `Languages` (TypeScript, JavaScript, Python, C++, Java), `Frontend` (React, Next.js, Tailwind CSS, HTML5/CSS3, Framer Motion, Redux), `Backend & APIs` (Node.js, FastAPI, Express.js, REST APIs, WebSockets), `Databases` (PostgreSQL, MongoDB, MySQL, SQLite, Supabase), `Tools & Platforms` (Git, GitHub, Docker, Vercel, Linux), and `Core Engineering` (DSA, Testing with Pytest/Jest, API Integration, Performance Optimization).
  - Balanced layout to responsive 3-column grid (`lg:grid-cols-3`), removed misplaced tags (GSAP in AI/ML), and eliminated redundant filler.
- **Framer Motion Custom Cursor Color Interpolation Fix**:
  - Replaced un-animatable CSS `"transparent"` string keywords in `src/components/ui/CustomCursor.tsx` with explicit `rgba(..., 0)` color strings, eliminating browser console warnings during cursor state transitions while maintaining seamless alpha fades.
- **Hero Section Positioning & Evidence Optimization**:
  - Positioned explicitly as Software Engineer & Frontend Developer (`[ Software Engineer & Frontend Developer ]`) with direct, non-marketing technical messaging.
  - Added supporting positioning emphasizing React, Next.js, TypeScript, real-world platform/SaaS engineering, and DSA background.
  - Enhanced CTAs with direct access to Projects (`#projects`), Resume (`/resume.pdf`), GitHub (`darknight08zz`), and LinkedIn (`ujjwal-prajapati`).
  - Integrated 4 verifiable engineering stats in a responsive grid/flex layout: `900+` LeetCode Solved, `863d` Active Streak, `9.16` CGPA, and `10+` Projects Built.
  - Updated floating profile badge to highlight `Primary Stack: React • Next.js • TS` with code iconography.

