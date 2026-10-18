# AGENT.md — KUMAR Luxury Website

> Core instructions for the AI coding assistant working in this repository.
> Read this file fully before writing or changing any code. Re-read it when starting a new task.

---

## 1. Project Overview

**Brand:** KUMAR
**What it sells:** Luxury stitched denim jackets and denim pants combined with leather detailing, plus a small range of accessories (bags, wallets).
**What makes KUMAR different:** fit. Instead of a plain size list, customers work from their own measurements (shoulder width, chest, waist, hips, sleeve length) to find the exact stocked size. Pieces are manufactured in set sizes in advance, not made to order after purchase. See Section 6.
**Markets:** India, Japan, European Union, United States, United Kingdom, UAE (Dubai). See Section 11.
**Goal of the site:** A quiet, editorial, high-end brand experience that makes the craft (denim, stitching, leather) feel like haute horlogerie. This is a showcase and storytelling site first, a shop second.
**Reference for design language:** The Patek Philippe website (patek.com). The owner recorded a screen capture of it. The analysis in Section 3 is taken from that recording.

**Important:** Recreate the *design language* (layout, rhythm, typography feel, motion, navigation behaviour). Do **not** copy Patek Philippe's logo, trademarks, photography, or copy text. All visuals and words must be KUMAR's own.

---

## 2. How You Must Work (Interaction Protocol)

1. **Never invent or hotlink images.** The owner supplies all images. Use clearly labelled placeholders until real files arrive.
2. **Ask step by step.** Before building any section, run the Image Intake Protocol (Section 7): ask for the image(s) for that section, one section at a time, and wait for the answer.
3. **Ask one question at a time** when you need information. Offer a recommended default so the owner can reply "yes".
4. **Build in small increments.** One section or component per task. Show what changed and what is next.
5. **Confirm the tech stack once** at the start (Section 10) and then stay consistent.
6. **Never silently deviate** from the design rules below. If you think a rule should change, say so and ask.
7. **Do not add dependencies** without stating why and getting a yes.
8. Keep a running file `docs/IMAGE_SLOTS.md` (see Section 7) up to date after every image is supplied.

---

## 3. Design Analysis From the Reference Recording

These are observations from the owner's video. Treat them as the spec. Values marked *(approx.)* were judged by eye and should be tuned, not treated as exact.

### 3.1 Overall feel
- Very restrained, calm, generous whitespace. Luxury comes from space, not decoration.
- Large full-bleed photography, dark and moody in hero areas, bright and clean in content areas.
- Thin, light typography. No heavy bold weights anywhere.
- Almost no colour apart from photography, white/off-white backgrounds, black, and one muted gold/bronze accent.

### 3.2 Header
- Fixed at the top of the viewport.
- **Left:** hamburger icon + the word `MENU` (small, uppercase, letter-spaced).
- **Centre:** brand logo/wordmark. (KUMAR wordmark. Centred, small.)
- **Right:** two small line icons (a product/collection icon and a search icon).
- **Over the hero** the header is **transparent with white text/icons**.
- **After scrolling past the hero** the header becomes **solid white with dark text/icons** and the logo switches to its dark/gold version.
- Header height is slim *(approx. 60 to 70px)*.

### 3.3 Full-screen menu overlay
- Clicking `MENU` opens a **white panel sliding in from the left**, covering roughly the left 65 to 70 percent of the screen on desktop. The remaining right side shows the page behind it **dimmed with a dark overlay**.
- The hamburger becomes an `X` close icon. A language selector (e.g. `EN` / `FR`) sits next to the logo.
- Panel is **multi-level**:
  - Column 1 (primary): small italic greeting at the top (e.g. "Welcome"), then primary items, each with a small chevron: *Collection, Craft, Service, Atelier/Journal, Stores, Careers*.
  - Column 2 (secondary): appears when a primary item is hovered or clicked, showing its sub-items with chevrons.
  - Active primary item is **underlined**; inactive primary items **fade to light grey** while another is active.
- Items are uppercase, light weight, letter-spaced.
- Transitions are smooth fades/slides. Nothing snaps.

### 3.4 Hero
- **Full viewport height**, edge to edge, with photography or video behind.
- A dark gradient overlay keeps the text readable.
- Text is **bottom-left**, with generous left margin: a large light uppercase headline, a short serif paragraph beneath, then a **white pill button** with dark uppercase text (`LEARN MORE`).
- **Vertical dot indicator on the right edge** (3 dots). The hero is a stack of full-screen slides. The active dot is a ring or filled; scrolling or clicking advances to the next slide with a smooth cross-fade or vertical transition.
- Each slide has its own image, headline, paragraph, and button.

### 3.5 Content sections after the hero
Alternating **editorial split layout** on a white background:
- One side: a tall photo, portrait aspect *(approx. 4:5)*.
- Other side: vertically centred text block containing:
  1. a **small eyebrow label**, uppercase, letter-spaced, in the muted gold/bronze (e.g. `THE SPIRIT OF INDEPENDENCE`)
  2. a **large light uppercase heading** in the same muted gold/bronze or dark tone
  3. a **serif body paragraph** in near-black
  4. an **outlined pill button** (thin 1px border, dark text, uppercase, transparent background; fills lightly on hover)
- Sections **alternate sides** (image left / text right, then reverse, etc.).
- Large vertical padding between sections *(approx. 96 to 160px)*.

### 3.6 Full-width feature card
- A wide landscape photo (dark, atmospheric) with **inner padding on the page** (not edge to edge), sitting on a very light grey background.
- Text sits **inside the image on the left** in white: small eyebrow, uppercase heading, short serif paragraph, white pill button.
- Above it, a **horizontal carousel** with small dot pagination centred under it.

### 3.7 Footer
- Thin horizontal divider line, then **four columns of text links**, each with a small uppercase grey column title (e.g. *Manufacture, Collection, Service, Points of Sale* → for KUMAR: *Craft, Collection, Service, Stores*).
- Links are small, regular weight, dark text, generous line spacing.
- Below that: legal links, social links, newsletter, copyright.

### 3.8 Typography (observed, to be matched with similar open fonts)
- **Headings and UI:** a light humanist sans-serif, uppercase, letter-spaced. Suggested: *Open Sans Light* or *Jost Light* or *Montserrat Light*.
- **Body paragraphs:** a classic serif. Suggested: *Lora* or *Cormorant Garamond* or *Libre Baskerville*.
- Heading scale (desktop): hero ~ 40 to 48px, section ~ 32 to 40px, eyebrow ~ 12 to 13px with ~0.12em tracking, body ~ 16 to 18px, line-height ~ 1.6.

### 3.9 Colour tokens (define as CSS variables; tune with the owner)
```
--color-bg:        #FFFFFF
--color-bg-soft:   #F5F3F2
--color-ink:       #1A1A1A
--color-ink-muted: #6B6B6B
--color-line:      #D9D6D2
--color-accent:    #9A8452   /* muted gold/bronze, used for eyebrows, headings, logo */
--color-overlay:   rgba(0,0,0,0.45)
```
Accent colour may be changed to a denim indigo or leather tan after the owner decides (ask once).

### 3.10 Motion principles
- Slow, eased, deliberate. Durations 400 to 900ms. Easing like `cubic-bezier(0.22, 1, 0.36, 1)`.
- Header colour change, menu panel slide, dimming overlay, slide cross-fades, and image reveals all use this feel.
- Respect `prefers-reduced-motion`: disable parallax, pinned scroll effects, and auto-advance; show static versions instead.

---

## 4. Page Map

Build in this order. Confirm each with the owner before moving to the next.

**Phase 1: Showcase (no backend needed)**
1. **Home**: hero slides, brand story split sections, featured product scroll experience (Section 5), craft/atelier feature card, stores teaser, footer
2. **Collection index**: Jackets, Pants, Accessories (bags, wallets)
3. **Product detail**: gallery + sticky purchase panel, size guide, and Fit Finder (Section 6); signature pieces also get the scroll experience (Section 5)
4. **Craft / Atelier**: denim, stitching, leather story
5. **Stores / Contact / Private appointment request**
6. **Legal pages**: privacy, cookies, terms, shipping and returns, accessibility statement

**Phase 2: Content management**
7. **Journal** (editable through the CMS), plus CMS-driven hero slides and craft pages

**Phase 3: Commerce**
8. **Cart, Checkout, Order confirmation**
9. **Account and order history** (guest checkout stays available)
10. **Search**, **Wishlist** (optional)

Suggested hero slides for Home: (1) signature denim jacket, (2) leather-stitched pants, (3) bags and wallets. Ask the owner to confirm.

---

## 5. Signature Feature: Pinned Product Scroll Experience

This is the owner's own addition on top of the Patek-style layout. Build it as a reusable component, `<ProductScrollStory />`.

### 5.1 Behaviour
- A product image/model stays **centred and pinned** in the viewport while the user scrolls through a tall section (e.g. 300 to 500vh).
- The scroll position drives the effect (scroll-scrubbed), not time. Scrolling back reverses it.
- Short **descriptive words or phrases** fade in and out around the product as it changes, such as "Raw selvedge denim", "Hand-stitched seams", "Full-grain leather", "Copper rivets". Text is positioned at left/right of the product alternating, in the light uppercase style, with the serif for longer lines.
- A thin progress indicator (vertical line or dots at the edge) shows position through the sequence.

### 5.2 Effect modes (build as selectable `mode` prop; owner chooses per product)
1. **Spin** — 360° rotation. Preferred approach: an image sequence (e.g. 60 to 120 frames) drawn to a `<canvas>` and indexed by scroll progress. Fallback if only one image exists: subtle CSS 3D rotateY/tilt, labelled as a fallback.
2. **Dismantle / exploded view** — the product separates into layered parts (e.g. jacket: body, collar, pockets, leather panels, buttons/rivets) which drift apart as the user scrolls, then reassemble. Requires **separate transparent PNG layers**; ask the owner for each part.
3. **Zoom** — scale into a detail (stitching, rivet, leather grain, wallet edge) then cut to the next detail; use high-resolution close-ups cross-faded or a single large image with controlled scale and origin point.
4. **Combined** — a sequence such as: spin → dismantle → zoom into one detail → reassemble.

### 5.3 Rules
- Background stays calm: solid dark or off-white, optional soft vignette. No clutter.
- Product must never overlap or hide the descriptive text.
- On mobile, simplify: shorter scroll length, fewer text beats, lower frame count.
- Preload frames progressively and show a minimal loader. Never block the whole page.
- Keep the main thread free: use `requestAnimationFrame`, avoid layout thrash.

### 5.4 Suggested tools (confirm in Section 10)
GSAP + ScrollTrigger for pinning and scrubbing, or Framer Motion `useScroll`. Canvas for image sequences.

---

## 6. Product Page and Fit System (KUMAR's differentiator)

References from the owner: the **Louis Vuitton** product page and size guide drawer (layout and behaviour) and the **SHEIN** size guide (functional features). Recreate the *patterns*. Do not copy either brand's logo, photography, illustrations, or wording.

### 6.1 What makes KUMAR different
- Luxury brands typically show a plain size list and a static size guide. KUMAR makes **fit the feature**: every size is defined by explicit measurements (shoulder width, chest, waist, hips, sleeve length), and the site helps the customer find the right stocked size from their own body measurements.
- **Fulfilment model:** pieces are manufactured in **set sizes in advance**. They are **not** made to order after purchase.
  - Inventory is tracked per size variant. Shipping estimates are from stock.
  - Never build a production queue, "made for you" lead times, bespoke or made-to-measure messaging, or per-order tailoring flows.
  - Never describe a piece as made to order or bespoke unless the owner changes this rule in writing.
- The fit system is a **recommendation tool, not a guarantee**. Wording must say "recommended size".

### 6.2 Product page layout (from the Louis Vuitton reference)
- **Header on all commerce pages (collection, product, cart):** solid white. Left: menu icon + `Menu`, search icon + `Search`. Centre: wordmark. Right: wishlist heart, account icon, bag icon. A 1px light line under the header. (The transparent-over-hero header in Section 3.2 is for brand pages such as Home.)
- **Two columns on desktop (about 50 / 50):**
  - **Left, gallery column:** full-bleed images stacked vertically and scrolled with the page. Suggested order: model full length, flat lay front, collar or stitching close-up, back view, leather detail. Pale neutral backgrounds.
  - **Right, purchase panel:** sticky and vertically centred in the viewport, with generous side margins. Top to bottom:
    1. product reference code (small, uppercase, letter-spaced)
    2. product name (light weight, sentence case) with a wishlist heart at the right edge
    3. price (tax-inclusive or not according to region, Section 11.1)
    4. **Select your size** dropdown (Section 6.3)
    5. **Find my fit** link, which opens the size guide drawer (Section 6.4)
    6. **Add to bag** button (full width, solid dark, light uppercase text; proposed, confirm with owner)
    7. accordion rows with a `+` icon: *Details and materials, Care, Shipping and returns, Find in store or book a private appointment*; a row with a `>` chevron for *Gifting* if the owner wants it
- Signature pieces: place the pinned **scroll experience (Section 5)** as a full-width section directly **below** the gallery and panel block, so the purchase panel is never buried. (Proposed; confirm with owner.)

### 6.3 Size selector
- A trigger row reading `Select your size` with a chevron that flips when open.
- Opens as a white list beneath the trigger with a soft shadow. One size per row. The selected size is **bold with a check mark** on the right.
- Out-of-stock sizes are greyed with a "Notify me" option. Do not hide them.
- Closes on selection, outside click, or `Esc`. Built as an accessible listbox with full keyboard support.
- Selecting a size updates the price and availability, and the measurements shown in the drawer.

### 6.4 Size guide drawer
- **Desktop:** a panel slides in from the right covering about half the screen, with a dark dimming overlay over the rest of the page. Title `SIZE GUIDE` (uppercase, light) and a close `X` at the top right. The panel body scrolls under a fixed header. Focus is trapped; `Esc` closes.
- **Mobile:** a full-height bottom sheet (like the SHEIN reference) with the same content.
- **Contents, top to bottom:**
  1. **Controls:** a **size system** dropdown (EU, UK, US, JP, and others as confirmed in Section 11.5), opened on mobile as a list sheet with a check beside the active choice; and a **cm | in** pill toggle. Defaults come from the visitor's region; the choice is remembered.
  2. **Find my fit** (Section 6.5): KUMAR's signature tool.
  3. **Tabs:** `Product measurements` | `Body measurements`. Product measurements are the garment's own dimensions; body measurements are the body each size is made for.
  4. **Measurement table:** one row per size; columns shoulder width, chest, waist, hips, sleeve length (plus garment length for jackets). The selected size's row is highlighted. On narrow screens the table scrolls horizontally with the size column fixed and a thin **scroll-progress bar** under it (as in the Louis Vuitton reference).
  5. **Fit information (per product):** a **Fit type** scale (Slim, Regular, Relaxed) and a **Stretch** scale (None, Slight, Medium, High) shown as sliders with a marker. Stretch matters for denim with elastane.
  6. **Model information:** "Model is wearing size X", with the model's height and measurements. Real data from the owner only.
  7. **Fit feedback ("true to size" percentages):** show **only** from real, verified-buyer data once there are enough reviews. **Never invent, seed, or estimate these numbers.** Hide the block until real data exists.
  8. **How to measure:** an **original KUMAR line-art figure** with numbered dotted guides (1 shoulder width, 2 chest, 3 waist, 4 hips, 5 sleeve length) and a short numbered instruction under each. Write original wording. Do not reuse text from any other brand. The owner approves the copy.
  9. **Info banner:** a small box icon with a one-line returns or exchange note, **only** once the owner confirms the policy per region. Do not copy any other brand's claims.
- If the product has a manufacturing tolerance, show a short note (for example, "measurements may vary by 1 to 2 cm") only if the owner confirms the real figure.

### 6.5 Find my fit (measurement-based size recommendation)
- Inputs: **shoulder width, chest, waist, hips, sleeve length** (all five for jackets; the set differs by category, Section 6.7). Unit follows the cm | in toggle.
- UX:
  - Numeric inputs with sensible min and max, and clear inline errors.
  - When a field is focused, **highlight the matching numbered line on the body figure** so the customer sees what to measure.
  - A "How to measure" help link next to each field.
- Result:
  - A **recommended size**, plus a per-measurement comparison (for example "Chest: matches", "Sleeve length: 1.5 cm longer than your measurement").
  - If the customer falls **between two sizes**, show both neighbouring sizes, explain the trade-off per measurement, and let them choose.
  - The chosen size pre-selects the size selector on the page.
- Matching logic:
  - Deterministic and explainable. No machine learning.
  - For each stocked size, compare each body measurement with that size's measurement range or ease-adjusted garment measurement; pick the size with the lowest weighted difference.
  - **Weights are configurable per product.** Shoulder width should weigh most for jackets because it cannot be altered.
  - Unit-tested with a table of example customers.
  - Chart values and ease allowances come from the owner. **Never guess them.**
- Privacy:
  - Body measurements are personal data. Keep them in the browser by default; save to the customer's account only with explicit consent, and allow deletion.
  - Never log measurements to analytics or error tools.

### 6.6 Data model for sizing
- `size_systems` (EU, UK, US, JP, and so on) and `size_conversions` (supplied by the owner; never derived by the AI)
- `size_charts`: one per garment category and version (jacket, pants)
- `size_chart_rows`: size code, body measurement range per dimension, garment measurement per dimension, tolerance, ease
- Each Medusa product variant maps to one size code; **inventory is per variant**
- Product-level fields: `fit_type`, `stretch_level`, `model_info` (size worn, height, measurements), size chart reference
- `customer_measurements`: optional, consented, deletable
- `fit_feedback`: verified purchases only, added later
- Store measurements in one canonical unit (millimetres or decimal cm) and convert only for display. Keep the schema able to hold **independent stocked options per dimension** (for example a chest size with short, regular, or long sleeves) if the owner confirms that model (Section 11.7).

### 6.7 Measurement sets by category (proposed; confirm with owner)
- **Jackets:** shoulder width, chest, waist, hips, sleeve length, jacket length
- **Pants:** waist, hips, thigh, rise, inseam, leg opening
- **Bags and wallets:** no size selector. Show dimensions (width x height x depth) and, for bags, strap drop. Show them in the same cm | in toggle.

### 6.8 Mobile behaviour
- Gallery becomes a horizontal swipe with dot indicators. The purchase panel stacks under it.
- A sticky bottom bar with price and **Add to bag** appears once the panel scrolls out of view.
- Size selector and size system selector open as bottom sheets.
- Size guide tables keep the size column fixed while the rest scrolls sideways.

### 6.9 Data intake for the fit system (ask step by step)
Before building the product page, ask the owner for the following, **one item at a time**, each with a suggested default:
1. Size list per category (for example 44 to 60 for jackets, or XS to XXL).
2. The measurement table per size and category, and whether the numbers are **body** measurements, **garment** measurements, or both.
3. Manufacturing tolerance and ease allowance, if any.
4. Size conversions for each size system to be shown, and the default system per region.
5. Fit type and stretch level for each product, and model details (size worn, height, measurements).
6. Exchange and returns policy for sizing issues, per region.
Record the answers in `docs/SIZE_CHARTS.md`. Use placeholders clearly marked `TODO` until real data arrives.

---

## 7. Image Intake Protocol (ask step by step)

**Never move on to build a section until its images are received or the owner explicitly says "use placeholder".**

For every section, ask in this exact style, one section at a time:

> **Section: Home Hero, Slide 1**
> I need: 1 landscape image, ideal 2400×1350 px or larger, subject on the right half so text fits bottom-left.
> Suggested content: signature denim jacket, moody lighting.
> Please give me the file path, or say "placeholder".

### 7.1 Image slots to request (in this order)
| # | Slot | Purpose | Shape / spec |
|---|------|---------|--------------|
| 1 | Logo (light + dark versions) | Header and footer | SVG preferred, transparent |
| 2 | Hero slide 1, 2, 3 | Full-screen hero | Landscape 16:9, ≥ 2400px wide, subject right-of-centre |
| 3 | Brand story image(s) | Editorial split sections | Portrait 4:5, ≥ 1600px tall |
| 4 | Craft/atelier feature image | Wide dark feature card | Landscape, dark tones |
| 5 | Product spin frames or hero product cutout | Scroll experience | Transparent PNG/WebP, same size and framing across all frames |
| 6 | Dismantle layers (per part) | Exploded view | Transparent PNG, identical canvas size and alignment |
| 7 | Detail close-ups (stitching, rivets, leather, zip) | Zoom sequence | Square or 4:5, ≥ 2000px |
| 8 | Collection tiles (Jackets, Pants, Accessories) | Collection index | Portrait 4:5 |
| 9 | Product gallery per item (model full length, flat lay front, collar or stitching close-up, back, leather detail) | Product pages (Section 6.2) | Portrait 4:5, 2000px or taller, pale neutral background, identical framing across products |
| 10 | Store/atelier photos | Stores page | Landscape |
| 11 | How-to-measure line-art figure | Size guide drawer (Section 6.4) | Original KUMAR SVG, single stroke weight, numbered guides 1 to 5; the AI may draft it as SVG for approval |
| 12 | Model info photo or details | Size guide (Section 6.4) | Model height and measurements as text; photo optional |

### 7.2 Image handling rules
- Store originals in `/public/images/<section>/`; use descriptive filenames (`hero-denim-jacket-01.jpg`).
- Always produce responsive sizes and modern formats (WebP/AVIF) with a JPEG fallback.
- Every image needs meaningful `alt` text. Ask the owner or propose one for approval.
- Use lazy loading everywhere except the first hero image (preload it).
- After each image arrives, update `docs/IMAGE_SLOTS.md` with: slot name, file path, dimensions, alt text, status (`received` / `placeholder`).

### 7.3 Placeholders
Use a neutral grey block with the slot name and required dimensions printed on it, so the owner can see exactly what is missing. Never use stock photos or external image URLs.

---

## 8. Content and Tone

- Voice: quiet, confident, craft-focused. Short sentences. No hype words ("amazing", "best ever").
- Vocabulary to favour: *selvedge, hand-stitched, full-grain, indigo, rivet, patina, atelier, made to last, heritage*.
- Headline style: uppercase, short (3 to 6 words).
- Never invent facts about KUMAR (founding year, founder, factory location, awards, prices). **Ask the owner**, or leave a clearly marked `TODO: confirm with owner` line.
- Provide draft copy only as suggestions, and mark it `DRAFT`.

---

## 9. Quality Standards

**Accessibility**
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`).
- Full keyboard support for the menu overlay: focus trap, `Esc` to close, visible focus ring.
- Colour contrast at least WCAG AA on all text, including text over images (use gradient overlays).
- `prefers-reduced-motion` honoured everywhere.

**Performance**
- Target Lighthouse 90+ on mobile for Performance, Accessibility, Best Practices, SEO.
- Largest Contentful Paint under 2.5s: optimise the first hero image.
- Avoid layout shift: always set image dimensions or aspect ratios.
- Code-split heavy animation code; load it only where needed.

**Responsive**
- Mobile first. Breakpoints: 480, 768, 1024, 1440.
- Mobile menu: full-screen white panel, same multi-level logic as stacked drill-down.
- Split sections stack on mobile: image first, then text.
- Hero text stays bottom-left with safe padding; dot indicator stays right edge.

**Code**
- Clean, typed, componentised. One component per file. Design tokens in one place (CSS variables or theme file).
- No inline magic numbers for colour, spacing, or timing: use tokens.
- Comment only where the reasoning is non-obvious.
- Do not leave `console.log`, dead code, or commented-out blocks.

**SEO**
- Unique `title` and `meta description` per page, Open Graph images, structured data for products when the shop is added.

---

## 10. Tech Stack and Architecture (industrial standard)

Confirm this stack with the owner once at the start of the project, then stay consistent. Do not swap tools without asking.

### 10.1 Principles
- **Build in phases.** Phase 1 ships a fast showcase site. Backend, database, and commerce are added in later phases (Section 10.9). Do not scaffold services that are not needed yet.
- **Do not hand-build commerce.** Carts, orders, inventory, discounts, returns, and taxes come from an engine (Medusa), not from custom code.
- **Never touch card data.** Payments go through hosted provider components only (keeps PCI scope minimal).
- **Typed end to end.** TypeScript everywhere; one validation schema (Zod) shared by forms and APIs.
- **Everything reproducible.** Infrastructure as code, migrations for every schema change, no manual server edits.

### 10.2 Architecture overview
```
Browser -> Cloudflare (DNS, CDN, WAF) -> Next.js (Vercel)
                                            |
        +-----------------------------------+-----------------------------------+
        v                                   v                                   v
   Sanity CMS                        Medusa API (commerce)               NestJS API (custom)
   (content)                    products, carts, orders, stock       appointments, client CRM,
                                regions, tax, returns                enquiries, webhooks
                                            |                                   |
                                    PostgreSQL  +  Redis  <---------------------+
                                            |
        Stripe / Razorpay * Landed-cost & tax * Shipping API * Resend * S3 or R2 * Meilisearch * BullMQ
```

### 10.3 Front end
- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** with the design tokens from Section 3.9
- **GSAP + ScrollTrigger** for the pinned scroll experience; **Lenis** for smooth scrolling
- **HTML canvas** for image-sequence spin
- **TanStack Query** (server data), **Zustand** (small UI state), **React Hook Form + Zod** (forms)
- **next-intl** for internationalisation; **next/image** for image optimisation
- **Fonts:** headings and UI as in Section 3.8; add **Noto Sans JP / Noto Serif JP** for Japanese and an Arabic family (e.g. Noto Naskh Arabic) for Arabic

### 10.4 Back end
- **Medusa v2** (Node.js + TypeScript): products, variants (size, wash, leather colour), inventory, carts, orders, discounts, returns, regions, tax, payment and fulfilment provider plug-ins. Admin dashboard for the owner.
- **NestJS**: custom modules Medusa does not cover: private-appointment booking, client records (CRM), enquiry forms, newsletter, webhooks. Expose an OpenAPI spec.
- **BullMQ on Redis**: background jobs (order emails, stock sync, image processing, abandoned-cart reminders).
- **Auth:** Auth.js (or Clerk). Roles: customer, staff, admin. Guest checkout stays possible.
- **API rules:** versioned routes, input validation on every endpoint, rate limiting, idempotency keys on payment and order calls, signature verification on every webhook.

### 10.5 Databases and storage
- **PostgreSQL** (primary): Neon or Supabase to start; AWS RDS later. Access through Prisma or Drizzle. Every change is a migration. Automated backups with point-in-time recovery.
- **Redis** (Upstash or AWS ElastiCache): cache, sessions, rate limits, job queues.
- **Meilisearch** (or Algolia): product search with multilingual support.
- **S3 or Cloudflare R2**: image originals, spin-frame sets, exploded-view layers. Served through the CDN.
- **Later:** event stream to BigQuery or ClickHouse for analytics.

Core tables (Medusa creates most of the commerce ones): `users`, `addresses`, `products`, `product_variants`, `materials`, `inventory_levels`, `collections`, `carts`, `orders`, `order_items`, `payments`, `shipments`, `returns`, `regions`, `price_lists`, `size_systems`, `size_charts`, `size_chart_rows`, `customer_measurements`, `fit_feedback`, `appointments`, `clients`, `newsletter_subscribers`, `media_assets`, `audit_log`.

Every product record must also store: **HS customs code, country of origin, material composition (cotton/denim %, leather type), weight, dimensions, per-region price, fit type, stretch level, size chart reference, and model details (size worn, height, measurements)**.

### 10.6 Third-party services
| Need | Service |
|---|---|
| Payments (EU, UK, US, Japan, UAE) | **Stripe** (cards, Apple Pay, Google Pay, local methods per region) |
| Payments (India) | **Razorpay** (UPI, cards, netbanking) |
| Tax | **Stripe Tax** or **Avalara** (VAT, GST, US sales tax) |
| Duties and landed cost (DDP) | **Zonos** or **Global-e** or similar |
| Shipping labels and tracking | **Shippo / EasyPost / ShipEngine** with **DHL Express, FedEx, UPS**; add **Shiprocket X** if shipping from India |
| Transactional email | **Resend** or **Postmark** |
| Newsletter | **Brevo** or similar |
| Content | **Sanity** |
| Search | **Meilisearch** or **Algolia** |
| Errors and monitoring | **Sentry**, **OpenTelemetry + Grafana** (or Datadog) |
| Analytics | **Plausible** or **PostHog** |
| Image delivery (optional) | **Cloudinary** |

### 10.7 Infrastructure and operations
- **Hosting:** Vercel for the front end. Docker containers for Medusa and NestJS on AWS ECS Fargate (or Fly.io / Railway for a simpler start).
- **Edge:** Cloudflare (DNS, CDN, WAF, DDoS protection, bot rules).
- **Regions:** one primary database region in the EU (Paris or Frankfurt). Add read replicas (Mumbai, Tokyo, US-East) only when traffic justifies them. Serve all heavy media from the CDN.
- **CI/CD:** GitHub Actions. Environments: `dev`, `staging`, `production`. Preview deployments for every pull request.
- **Infrastructure as code:** Terraform.
- **Secrets:** AWS Secrets Manager or Doppler. Never commit `.env` files; commit `.env.example` only.
- **Monitoring:** Sentry for errors, tracing and metrics dashboards, uptime checks, alerts to the owner.
- **Repo layout:** pnpm + Turborepo monorepo.

```
/apps
  /web                  Next.js storefront
  /commerce             Medusa
  /api                  NestJS custom services
/packages
  /ui                   shared components and design tokens
  /config               eslint, tsconfig, tailwind presets
  /schemas              shared Zod schemas
/infra                  Terraform
/docs                   IMAGE_SLOTS.md, DECISIONS.md, MARKETS.md
/public/images          owner-supplied assets by section (web app)
```

### 10.8 Quality and security
- **Tooling:** ESLint, Prettier, Husky, lint-staged, conventional commits.
- **Testing:** Vitest (unit), Playwright (end-to-end: menu, scroll experience, checkout in every region), Lighthouse CI (performance budget).
- **Security:** OWASP Top 10 review, strict Content Security Policy, HTTPS only, secure cookies, dependency scanning (Dependabot), webhook signature checks, least-privilege access, audit log for admin actions.
- **Never log** personal data, tokens, or payment details.

### 10.9 Delivery phases
1. **Phase 1, Showcase site:** Next.js, Tailwind, GSAP, Vercel. English only. No database.
2. **Phase 2, Content:** Sanity CMS so the owner can edit hero slides, journal, craft pages, and store details.
3. **Phase 3, Commerce:** Medusa + Postgres + Redis. Launch region by region (Section 11.4). Add payments, tax, landed cost, shipping, transactional email.
4. **Phase 4, Custom services:** NestJS (appointments, CRM), search, background jobs, full monitoring.
5. **Phase 5, Analytics:** event pipeline to a warehouse.

**Rule:** Do not start a phase until the owner confirms the previous one is live and approved.

---

## 11. Markets, Regions, and Localisation

KUMAR sells to: **India, Japan, European Union, United States, United Kingdom, and UAE (Dubai).**

### 11.1 Region configuration (set up as Medusa regions)
| Region | Currency | Payments to enable | Pricing display | Language |
|---|---|---|---|---|
| European Union | EUR | Cards, Apple Pay, Google Pay, SEPA, iDEAL, Bancontact | Tax-inclusive (VAT) | English (+ French later) |
| United Kingdom | GBP | Cards, Apple Pay, Google Pay | Tax-inclusive (VAT) | English |
| United States | USD | Cards, Apple Pay, Google Pay, Affirm | Tax added at checkout | English |
| Japan | JPY | Cards (incl. JCB), Konbini, PayPay | Tax-inclusive, whole yen | Japanese + English |
| UAE (Dubai) | AED | Cards, Apple Pay, regional gateway (Tap, Telr, or Checkout.com) | Tax-inclusive (5% VAT) | English + Arabic (RTL) |
| India | INR | Razorpay (UPI, cards, netbanking) | Tax-inclusive (GST) | English |

> **Verify before launch:** payment methods, tax rates, and registration rules in this table come from general knowledge and must be confirmed with an accountant and the chosen providers. Record decisions in `docs/MARKETS.md`.

### 11.2 Pricing and currency
- Use **price lists per region**, not live currency conversion. Round to local conventions (e.g. no decimals for JPY and INR).
- Show the correct currency symbol and number format per locale.
- Never show a price without making clear whether tax is included.

### 11.3 Duties, taxes, and shipping (confirmed as of October 2026; re-check before launch)
- **United States:** duty-free treatment for low-value shipments (the $800 rule) has ended for all countries. Every US order should be expected to carry duty.
- **European Union:** since 1 July 2026, low-value parcels pay a flat customs duty of EUR 3 per item, and a fuller duty system is expected later.
- **India (if shipping from India):** the per-consignment value cap on courier exports was removed from 1 April 2026.
- **Japan, UAE, UK import rules:** not yet verified. Confirm with a customs broker or the landed-cost provider before enabling those regions.
- **Delivered Duty Paid (DDP):** the checkout must calculate and collect duties and taxes up front so customers never receive a surprise bill at delivery. This is mandatory for the luxury experience.
- Every product needs correct **HS codes** (denim apparel is under tariff chapter 62; bags and wallets under 4202) and accurate material and origin data.
- Offer tracked, insured, signature-on-delivery shipping for all regions. Show estimated delivery and return rules per region.

### 11.4 Launch order for regions
1. **EU and UK** first (one payment provider, one tax framework)
2. **United States**
3. **Japan** and **UAE** (with Japanese and Arabic localisation)
4. **India** (with Razorpay and GST invoicing)

Do not enable a region until payments, tax, shipping, returns policy, legal pages, and localisation for that region are complete and tested.

### 11.5 Localisation rules
- All visible text goes through `next-intl`. No hard-coded strings in components.
- Use **CSS logical properties** (`margin-inline-start`, `padding-inline-end`, etc.) and `dir="rtl"` support from the start so Arabic needs no rewrite. Mirror layouts (hero text position, menu panel side, carousel direction) for RTL; the reference layout is left-to-right.
- Japanese type needs larger line-height and no uppercase styling; adapt the heading style while keeping the same light, spacious feel.
- Address forms must match local formats (Japan: postal code first and prefecture; UAE: emirate and area, phone number required; India: PIN code and state; US: state and ZIP).
- **Size systems and units:** the size guide offers a size system switch (EU, UK, US, JP, and others as confirmed) and a cm | in toggle. Default by region: EU for the EU, UK for the UK, US for the US, JP for Japan; UAE and India to be confirmed with the owner. Inches by default in the US, centimetres elsewhere. Conversion tables come from the owner; the AI must never derive or guess them.
- Use `hreflang` tags and region-aware URLs (`/en-gb`, `/ja`, `/ar-ae`, etc.). Offer a region and language selector in the menu, as in the reference header.

### 11.6 Legal and compliance (by region)
- **EU:** GDPR, cookie consent, EU accessibility rules for online shops, VAT invoices, 14-day withdrawal right.
- **UK:** UK GDPR, UK VAT, consumer rights rules.
- **US:** CCPA/CPRA (California) privacy rights, state sales tax, ADA accessibility.
- **Japan:** APPI privacy law, specified commercial transactions notice (a legal page showing seller details and return terms).
- **UAE:** data protection law and 5% VAT.
- **India:** DPDP Act and GST invoicing.
- Provide: region-aware cookie consent, data export and deletion on request, privacy and cookie policies, terms of sale, shipping and returns policy, accessibility statement.
- **Legal pages are drafts only.** Mark them `DRAFT: have a lawyer review`. Do not present them as final.

### 11.7 Open questions (ask the owner; do not guess)
- **TODO: Where is KUMAR legally registered, and where will orders ship from (France, India, other)?** This decides who collects VAT or GST, how exports are invoiced, and which regions get domestic-style checkout.
- TODO: Confirm languages to launch with (English only, or also Japanese, Arabic, French).
- TODO: **Fit model:** does each size have one fixed set of measurements (the customer finds the closest size), or are there independent stocked options per dimension (for example one chest size with short, regular, or long sleeves)? This decides the product variant structure (Section 6.6).
- TODO: Provide size charts and measurement sets for jackets and pants (Section 6.9).
- TODO: Confirm returns policy per region and whether made-to-order items are final sale.
- TODO: Confirm whether the site is showcase-only at first or must sell from day one.

---

## 12. Do and Don't

**Do**
- Match the reference layout, spacing, and calm pacing closely.
- Ask for images section by section.
- Keep animations smooth, slow, and purposeful.
- Update `docs/IMAGE_SLOTS.md`, `docs/DECISIONS.md`, and `docs/MARKETS.md` as you go.
- Flag anything you are unsure of instead of guessing, especially tax, duty, and legal matters.
- Treat each region as a separate, testable unit.

**Don't**
- Don't copy Patek Philippe's logo, images, text, or code.
- Don't use bold, heavy, or decorative fonts.
- Don't add pop-ups, sticky promotional banners, or chat widgets that dominate the screen (a small discreet cookie notice is fine when required).
- Don't use bright colours, decorative gradients, drop shadows, or cartoonish rounded UI.
- Don't use stock or hotlinked images.
- Don't invent brand facts, prices, tax rates, or legal claims.
- Don't describe pieces as made to order, bespoke, or tailored after purchase. They are made in set sizes in advance.
- Don't invent fit statistics, model data, size conversions, or measurement values.
- Don't build custom cart, checkout, or payment code. Use Medusa and the payment providers.
- Don't store or log card data, ever.
- Don't ship a section without checking mobile, keyboard, reduced-motion, and RTL behaviour.

---

## 13. First Task Checklist

When this file is first loaded, do this in order:

1. Greet the owner briefly and confirm you have read AGENT.md.
2. Confirm the tech stack and phases (Section 10) with the owner.
3. Ask the open questions in Section 11.7, one at a time. Offer a recommended default for each.
4. Ask the accent colour question (gold/bronze, denim indigo, or leather tan).
5. Scaffold the monorepo with design tokens, fonts, `next-intl` set up for English, and empty `docs/IMAGE_SLOTS.md`, `docs/DECISIONS.md`, `docs/MARKETS.md`. Phase 1 needs only the web app; do not scaffold Medusa or NestJS yet.
6. Build **Header + MenuOverlay** (with placeholder logo) and show it.
7. Start the Image Intake Protocol with the **logo**, then **Hero slide 1**.
8. Continue section by section through the Home page.

---

## 14. Definition of Done (per section)

- [ ] Matches the reference layout and spacing
- [ ] Uses design tokens only
- [ ] Real images in place (or marked placeholder in `IMAGE_SLOTS.md`)
- [ ] Works at 375, 768, 1024, 1440 widths
- [ ] Keyboard accessible, contrast checked
- [ ] Reduced-motion version works
- [ ] Strings are translatable; RTL layout checked where relevant
- [ ] For product pages: size selector, size guide drawer, and Find my fit tested (keyboard, mobile bottom sheet, cm | in toggle, size system switch, between-sizes result)
- [ ] No console errors, no layout shift
- [ ] For commerce work: tested in every enabled region (currency, tax, shipping, payment)
- [ ] Owner has reviewed and approved
