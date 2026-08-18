# DECISIONS.md

## Part 2 — The Premium Home Page

---

### 1. Why this design approach over the obvious alternative?

The obvious alternative was a conventional SaaS landing page — hero image, feature grid, stock-photo testimonials, and a gradient button.

I rejected that because the brief penalises fabricated social proof and rewards taste. A page that *feels* like a real product beats one that *claims* to be real. So the centerpiece of this page is a **fully coded dashboard UI** and an **ultra-clean editorial design system** — built with React, Tailwind CSS, and Framer Motion. The progress bar fills on scroll, the AI mentor types, and every panel is a real component.

Typography uses **Outfit** for universal technical confidence and **Poppins (un-bolded)** for the hero section, reflecting the high-end design language of the official AcdyOn brand.

---

### 2. One trade-off made under the time limit

I did not build a working backend for the waitlist form. Under a real week, I would have wired it to a serverless function (Vercel Edge Function or a simple Supabase row insert), added form validation with real error states, and confirmed the email with a transactional message. For the challenge, the form has a stateful success state with honest copy — which is honest and functionally complete from a UX perspective.

---

### 3. Where AI tools were used, and what I verified afterward

AI tools (Cursor / Claude / Gemini) were used to:
- Draft initial layouts and component scaffolding for scroll reveals
- Generate copy structures aligned with executive education themes

What I personally verified and changed:
- Every line of the dashboard mockup component — grid layout, progress bar animation timing, typing dot keyframe delays, and AI chat bubbles
- Circular aperture View Transition animation with exact cursor click origin
- The complete interactive multi-level dropdown system (Programs, Doctoral 2-column nested menu, Universities, Resources)
- Interactive FAQ accordion section
- Typography weights across all sections (un-bolded Poppins for hero, refined Outfit for all cards and headings)
- The Konami code hook logic (early-termination condition for out-of-sequence keys)
- All Tailwind responsive breakpoints tested at 390px, 768px, 1280px, and 1440px
