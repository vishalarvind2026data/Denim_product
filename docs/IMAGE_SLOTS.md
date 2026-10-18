# Master Image & Video Slots Registry (docs/IMAGE_SLOTS.md)

This document tracks every visual asset slot across the **KUMAR** luxury platform, including file paths, dimensions, source origins, and operational status.

---

## 1. Brand Identity & Logos (`public/images/logo/`)
| Slot ID | Asset Path | Dimensions | Alpha Channel | Status | Description |
|---|---|---|---|---|---|
| `LOGO-EMBLEM-LIGHT` | `/images/logo/kumar-emblem-light.png` | 882×532 | Transparent (RGBA) | **Received** | Pristine white botanical moth emblem for dark hero overlay and transparent headers. |
| `LOGO-EMBLEM-DARK` | `/images/logo/kumar-emblem-dark.png` | 882×532 | Transparent (RGBA) | **Received** | Charcoal `#1A1A1A` emblem for solid white scrolled header. |
| `LOGO-EMBLEM-GOLD` | `/images/logo/kumar-emblem-gold.png` | 882×532 | Transparent (RGBA) | **Received** | Muted bronze gold `#9A8452` emblem for luxury accents and brand seals. |

---

## 2. Hero & Runway Video (`public/videos/hero/` & `public/images/editorial/`)
| Slot ID | Asset Path | Resolution / Spec | Source | Status | Description |
|---|---|---|---|---|---|
| `HERO-RUNWAY-VID` | `/videos/hero/kumar-runway-hero.mp4` | 1920×1080 @ 60fps | Diesel SS25 Runway (354s) | **Received** | Atmospheric ambient runway video loop with selvedge denim & leather look. |
| `HERO-RUNWAY-POSTER` | `/images/editorial/runway-hero-poster.jpg` | 1920×1080 | Video Keyframe | **Received** | Video preloader and fallback poster for low-bandwidth / mobile. |

---

## 3. Editorial Split Visuals (`public/images/editorial/`)
| Slot ID | Asset Path | Dimensions | Source | Status | Description |
|---|---|---|---|---|---|
| `EDITORIAL-SELVEDGE` | `/images/editorial/selvedge-character.jpg` | 3162×4743 | Pinterest Pin 452400725087100747 | **Received** | Japanese selvedge denim roll displaying tight edge weave and indigo texture. |
| `EDITORIAL-LEATHER` | `/images/editorial/leather-character.png` | 800×1200 | Pinterest Pin 737183032799616504 | **Received** | Full-grain leather roll texture showcasing natural markings and patina. |

---

## 4. Craftsmanship Cinema (`public/videos/craft/`)
| Slot ID | Asset Path | Resolution / Spec | Source | Status | Description |
|---|---|---|---|---|---|
| `CRAFT-DENIM-VID` | `/videos/craft/craft-denim.mp4` | 720×1280 (9:16 HD) | Pinterest Pin 883761126884706128 | **Received** | Japanese denim craftsmanship stitching needlework. |
| `CRAFT-LEATHER-VID` | `/videos/craft/craft-leather.mp4` | 720×1280 (9:16 HD) | Pinterest Pin 1042372276263260076 | **Received** | Tuscan leather bag hand-burnishing and construction. |
| `CRAFT-DUAL-VID` | `/videos/craft/craft-dual.mp4` | 1440×1280 composite | FFmpeg Mastered Composite | **Received** | Synchronized side-by-side single video stream for dual-screen cinema. |

---

## 5. The KUMAR Fit Atelier (`public/images/editorial/` & `public/videos/atelier/`)
| Slot ID | Asset Path | Resolution / Spec | Source | Status | Description |
|---|---|---|---|---|---|
| `ATELIER-JODHPUR` | `/images/editorial/atelier-jodhpur.jpg` | 962×962 | Pinterest Pin 1031746595867918504 | **Received** | Architectural heritage visual of the Blue City of Jodhpur, India. |
| `ATELIER-MASTERJI-VID`| `/videos/atelier/kumar-masterji-atelier.mp4` | 720w HLS / MP4 | Pinterest Pin 933159985300507998 | **Received** | Video visual of masterji artisan tailoring. |
| `ATELIER-SEWING` | `/images/editorial/atelier-masterji.png` | 465×658 | Pinterest Pin 953215077389831562 | **Received** | Masterji artisan working on vintage industrial sewing machine. |

---

## 6. Iconic Products Sliding Gallery (`public/images/products/`)
| Slot ID | Asset Path | Dimensions | Source | Status | Description |
|---|---|---|---|---|---|
| `PROD-ICONIC-01` | `/images/products/iconic-01-jacket.jpg` | 768×1024 | Owner Upload | **Received** | Signature Selvedge Denim Jacket with leather collar & cuffs. |
| `PROD-ICONIC-02` | `/images/products/iconic-02-butterfly-pant.jpg` | 1024×1024 | Owner Upload | **Received** | Raw Selvedge Trouser with embossed leather moth back pocket. |
| `PROD-ICONIC-03` | `/images/products/iconic-03-drip-trouser.jpg` | 682×1024 | Owner Upload | **Received** | Wide-Leg Tailored Pant with tan leather drip pocket detail. |
| `PROD-ICONIC-04` | `/images/products/iconic-04-woven-bag.jpg` | 682×1024 | Owner Upload | **Received** | Frayed Diamond Jacquard Denim Tote Bag and leather clutch. |
| `PROD-ICONIC-05` | `/images/products/iconic-05-atelier-patch.jpg` | 819×1024 | Owner Upload | **Received** | "The Last Stitch at the Old Factory" leather patch edition. |

---

## 7. Interactive Pinned Product Scroll Assets (`public/images/product-scroll/`)
| Slot ID | Asset Path | Spec | Status | Description |
|---|---|---|---|---|
| `SCROLL-SPIN-FRAMES` | `/images/product-scroll/spin/` | 60 frames, transparent PNG | *In Progress / Fallback Active* | 360° rotation sequence. Smooth CSS 3D scrub fallback currently active. |
| `SCROLL-DISMANTLE-LAYERS`| `/images/product-scroll/dismantle/` | Layered transparent PNGs | *In Progress / Fallback Active* | Exploded body, collar, pockets, and rivets. |
| `SCROLL-MACRO-ZOOM` | `/images/product-scroll/zoom/` | ≥ 2400px Macro stills | *In Progress / Fallback Active* | Macro stitches and leather edge finishing. |
