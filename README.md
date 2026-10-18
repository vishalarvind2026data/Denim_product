<div align="center">

  <img src="public/images/logo/kumar-emblem-gold.png" alt="KUMAR Emblem" width="110" />

  # K U M A R
  ### Haute Selvedge Denim & Full-Grain Leather Maison

  *Where denim meets leather, character takes shape.*

  [![Live Website](https://img.shields.io/badge/Live%20Website-denim--product.vercel.app-d4af37?style=for-the-badge&logo=vercel)](https://denim-product.vercel.app/)
  [![Next.js](https://img.shields.io/badge/Next.js%2015-App%20Router-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

  ---

  **🌐 Experience the Live Maison:**  
  ### **[https://denim-product.vercel.app](https://denim-product.vercel.app/)**

</div>

---

## 🏛️ About The Maison

**KUMAR** was born from a belief that a garment should feel as though it belongs to the person wearing it.

We bring the character of raw selvedge denim together with the enduring presence of full-grain leather, shaped by considered design and the timeless skill of the Indian *masterji*. Each piece begins with the material, finding its meaning in the hands that shape it and in the individual who makes it their own.

Our ambition is to create modern heirlooms: pieces made to be worn, repaired, and lived in, gathering character with every passing year.

---

## ✨ Flagship Highlights & Features

### 1. 🧵 Iconic Handcrafted Collection
- **Curated Haute Pieces:** Featuring six signature garments:
  - **ARJUNA I — The Selvedge Jean** (14.5oz Raw Indigo Selvedge Denim • €1,300)
  - **ARJUNA II — The Moth Jean** (Hand-Tooled Botanical Moth Emblem • €1,900)
  - **KARNA II — The Drip Trouser** (Liquid Full-Grain Leather Inlays • €1,700)
  - **KARNA I — The Horizon Jacket** (Okayama Selvedge with Tuscan Leather Collar • €5,900)
  - **KUNTI I — The Raw Trucker** (Selvedge with French Calfskin Trim • €4,500)
  - **KUNTI V — The Moth Jacket** (Golden Silk Moth Embroidery on Selvedge Denim • €6,900)
- **Dynamic Product Pages (`/products/[id]`):** Complete product showcases with interactive size pickers, material dossiers, and detailed garment descriptions.

### 2. 📐 Interactive Size Guide & Customizer
- **Tailored Measurement Customizer:** Customers can preview and fine-tune exact sizing dimensions (**Shoulder Width**, **Total Length**, **Bust / Chest**, **Sleeve Length**).
- **Direct Advisor Concierge:** In-suite consultation modal to directly contact private maison specialists.

### 3. 🌍 14 Global Boutiques & Flagships (`/locations`)
- **Global Footprint:** Dedicated luxury boutique locator across **India**, **Japan**, **UAE**, **USA**, **Italy**, **Spain**, and the **UK**.
- **Interactive Experience:** Real architecture photography with interactive lightbox zoom, country filter tabs, direct phone concierge, operating hours, and one-click **Open in Google Maps** direct navigation.

### 4. 📖 LVMH-Inspired Maison Story (`/about`)
- Architectural editorial layout celebrating our heritage, masterji artisans, and the 5 founding values:
  - *Craft, Held in High Regard*
  - *Material with Character*
  - *A More Personal Fit*
  - *Designed to Endure*
  - *Recognition Through Craft*

### 5. 🌐 Quad-Language Internationalization (i18n) & RTL
- Instant multilingual switching across **English (EN)**, **French (FR)**, **Japanese (JA)**, and **Arabic (AR)**.
- Full native **Right-to-Left (RTL)** layout mirroring with bespoke Arabic typography for Middle Eastern markets.

### 6. 🎬 Cinema & Visual Excellence
- High-definition synchronized video showcase (`DualCraftCinema.tsx`) exhibiting parallel craftsmanship: raw denim needlework alongside artisanal leather tooling.
- Seamless 4K Hero runway ambient video with audio toggle.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router & Server Components) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) with bespoke luxury tokens |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Smooth Scroll & Animation** | [Lenis](https://github.com/darkroomengineering/lenis) & [GSAP](https://greensock.com/gsap/) |
| **Deployment & Hosting** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```bash
KUMAR/
├── public/
│   ├── images/
│   │   ├── about/          # Heritage & loom workshop photography
│   │   ├── editorial/      # Runway hero & material texture banners
│   │   ├── Location/       # 14 Global Flagship boutique architecture
│   │   ├── logo/           # KUMAR golden moth emblems & wordmarks
│   │   └── products/       # Iconic collection high-res garment photos
│   └── videos/
│       ├── atelier/        # Masterji tailoring cinema
│       ├── craft/          # Denim & leather split-screen video
│       └── hero/           # Runway ambient background video
├── src/
│   ├── app/
│   │   ├── about/          # The Maison & Values page
│   │   ├── locations/      # 14 Global Boutiques page
│   │   ├── products/[id]/  # Dynamic product showcase & size customizer
│   │   ├── globals.css     # Luxury design tokens, fonts, & RTL rules
│   │   ├── layout.tsx      # Root layout with metadata & fonts
│   │   └── page.tsx        # Flagship landing page
│   ├── components/
│   │   ├── home/           # Runway, Character, Cinema & Triptych sections
│   │   ├── layout/         # Header, Slide-in MenuOverlay & Modernized Footer
│   │   └── product/        # SizeGuideModal, ContactAdvisorModal
│   ├── context/
│   │   └── LanguageContext.tsx  # Locale state management & persistence
│   ├── data/
│   │   ├── about.ts        # Maison values & mission content
│   │   ├── locations.ts    # 14 boutique addresses, hours, & GPS maps
│   │   └── products.ts     # Permanent collection catalog specifications
│   └── translations/
│       └── index.ts        # Typed dictionaries for EN, FR, JA, and AR
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Local Development Setup

To run the KUMAR website locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vishalarvind2026data/Denim_product.git
   cd Denim_product
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the site.

5. **Create production build:**
   ```bash
   npm run build
   npm start
   ```

---

## 🚢 Continuous Deployment

The repository is integrated with **Vercel** for automatic continuous integration and deployment. Every commit pushed to the `main` branch automatically triggers an optimized production deployment to [https://denim-product.vercel.app](https://denim-product.vercel.app/).

---

## 📜 Intellectual Property & Rights

© 2026 **KUMAR MAISON**. All Rights Reserved.  
Hand-finished selvedge denim and full-grain leather, tailored with the timeless eye of Indian fit specialists.
