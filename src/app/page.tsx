"use client";

import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { HeroRunway } from "@/components/home/HeroRunway";
import { CharacterSection } from "@/components/home/CharacterSection";
import { DualCraftCinema } from "@/components/home/DualCraftCinema";
import { FitAtelierTriptych } from "@/components/home/FitAtelierTriptych";
import { IconicSlidingWindows } from "@/components/home/IconicSlidingWindows";
import { Footer } from "@/components/layout/Footer";

function HomeContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-bg text-ink selection:bg-accent selection:text-white">
      {/* Dynamic Header & Slide-in Menu Overlay */}
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        {/* 1. Opening Landing Page Hero (Runway Video + Opening Words) */}
        <HeroRunway />

        {/* 2. Scroll Down 1: The Character of Selvedge */}
        <CharacterSection
          id="character-selvedge"
          eyebrow={t.selvedge.eyebrow}
          title={t.selvedge.title}
          description={t.selvedge.desc}
          imageSrc="/images/editorial/selvedge-character.jpg"
          imageAlt="Japanese Selvedge Denim Fabric Roll"
          reverse={false}
          ctaText={t.selvedge.cta}
        />

        {/* 3. Scroll Down 2: The Character of Full-Grain Leather */}
        <CharacterSection
          id="character-leather"
          eyebrow={t.leather.eyebrow}
          title={t.leather.title}
          description={t.leather.desc}
          imageSrc="/images/editorial/leather-character.png"
          imageAlt="Full-Grain Leather Roll Texture"
          reverse={true}
          ctaText={t.leather.cta}
        />

        {/* 4. Dual Craftsmanship Cinema (Side-by-Side Synchronized Video) */}
        <DualCraftCinema />

        {/* 5. The KUMAR Fit Atelier (Jodhpur + Masterji Video + Sewing Machine) */}
        <FitAtelierTriptych />

        {/* 6. Iconic Products Sliding Windows (6 Real Handcrafted Pieces with Euro Prices) */}
        <IconicSlidingWindows />
      </main>

      {/* 7. Luxury Editorial Footer */}
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
