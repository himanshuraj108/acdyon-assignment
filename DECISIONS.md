# DECISIONS.md

## Part 2 — The Premium Home Page

---

### 1. Why this design approach over the obvious alternative?

The obvious alternative was a conventional SaaS landing page — hero image, feature grid, stock-photo testimonials, and a gradient button.

I rejected that because the brief penalises fabricated social proof and rewards taste. A page that *feels* like a real product beats one that *claims* to be real. So the centerpiece of this page is a **fully coded dashboard UI** — not a screenshot, not a Figma export — built with React and Framer Motion. The progress bar fills on scroll, the AI mentor types, and every panel is a real component. That decision communicates one thing instantly: the person who built this has actually shipped interfaces.

Typography uses **Outfit** (headings) for its technical confidence and **Plus Jakarta Sans** (body) for readability and warmth. The combination avoids both the generic-Bootstrap feel and the over-stylised startup aesthetic.

---

### 2. One trade-off made under the time limit

I did not build a working backend for the waitlist form. Under a real week, I would have wired it to a serverless function (Vercel Edge Function or a simple Supabase row insert), added form validation with real error states, and confirmed the email with a transactional message. For the challenge, the form has a stateful success state with honest copy — which is honest and functionally complete from a UX perspective.

---

### 3. Where AI tools were used, and what I verified afterward

AI tools (Cursor / Claude) were used to:
- Generate initial boilerplate for Framer Motion `useInView` scroll reveals
- Draft copy for section headings and feature descriptions

What I personally verified and changed:
- Every line of the dashboard mockup component — the grid layout, progress bar animation timing, typing dot keyframe delays, and the AI chat message structure
- The Konami code hook logic (the early-termination condition for out-of-sequence keys)
- All colour values — the `brand-950` dark section, gradient orb opacity levels, and card hover shadows
- The honest copy rule: removed a "10,000+ learners" claim that AI suggested and replaced it with a factual, non-quantified statement
- All Tailwind responsive breakpoints tested at 390px, 768px, 1280px, and 1440px
