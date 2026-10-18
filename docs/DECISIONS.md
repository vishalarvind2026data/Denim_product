# Architecture & Design Decisions Log (docs/DECISIONS.md)

This log records major technical and aesthetic decisions made in alignment with the owner.

---

### Decision 01: Core Design Philosophy & Aesthetic References
- **Inspiration**: Patek Philippe (tranquil, calm, generous whitespace, thin humanist typography, quiet pacing) and Louis Vuitton (structured 50/50 product page, measurement drawer).
- **Typography**: Jost (light uppercase, letter-spaced) for headings/UI and Cormorant Garamond for classic luxury editorial serif copy.
- **Color Palette**:
  - Background: Pure White (`#FFFFFF`) and Soft Stone (`#F5F3F2`)
  - Ink: Deep Charcoal (`#1A1A1A`) and Muted Grey (`#6B6B6B`)
  - Accent: Muted Horological Gold / Bronze (`#9A8452`), selected by owner for contrast against raw indigo denim and black leather.

---

### Decision 02: Visual Assets & Runway Video Integration
- **Hero Presentation**: Ambient looping video on the landing page hero extracted from Diesel SS25 runway (at timestamp 354s) featuring selvedge denim and leather tailoring over shredded indigo landscape.
- **Editorial Copy**: Owner-provided bespoke text for *The Character of Selvedge* and *The Character of Full-Grain Leather*.
- **Craft Cinema**: Synchronized side-by-side video screen showcasing denim needlework and leather bag craftsmanship in parallel.
- **The KUMAR Fit Atelier**: 3-panel triptych honoring the Blue City of Jodhpur, the Masterji tailor, and industrial sewing machine craftsmanship.

---

### Decision 03: Commercial & Fit Model
- **Fulfillment**: In accordance with `AGENT.md` Section 6.1, KUMAR pieces are manufactured in **set sizes in advance** (stocked inventory per variant), with a recommendation-based **Fit Finder** that matches customer measurements (shoulder, chest, waist, hips, sleeve) to pre-stocked inventory. No bespoke or made-to-order queues.
