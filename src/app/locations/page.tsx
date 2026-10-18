"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  ExternalLink,
  Clock,
  Phone,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  ZoomIn,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { STORE_LOCATIONS, BoutiqueLocation } from "@/data/locations";

const COUNTRIES = ["All", "India", "Japan", "UAE", "USA", "Italy", "Spain", "UK"] as const;
type CountryFilter = (typeof COUNTRIES)[number];

function LocationsPageContent() {
  const { isRtl, locale } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryFilter>("All");
  const [activeLightboxImage, setActiveLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const filteredLocations =
    selectedCountry === "All"
      ? STORE_LOCATIONS
      : STORE_LOCATIONS.filter((loc) => loc.countryKey === selectedCountry);

  // Localization labels for header & filters
  const labels = {
    EN: {
      breadcrumb: "KUMAR / OUR STORE LOCATIONS",
      title: "OUR STORE LOCATIONS",
      subtitle:
        "Fourteen private ateliers and salons across India, Japan, UAE, USA, Italy, Spain, and the UK. Step into our world for bespoke fittings, fabric archives, and masterji consultations.",
      filterAll: "All Locations",
      viewMaps: "Open in Google Maps",
      bookFitting: "Book Private Masterji Fitting",
      salonBadge: "Private Salon & Boutique",
      servicesTitle: "Atelier Services",
      hoursTitle: "Hours",
      phoneTitle: "Direct Concierge",
      countBoutiques: "Boutiques Worldwide",
    },
    FR: {
      breadcrumb: "KUMAR / NOS BOUTIQUES",
      title: "NOS BOUTIQUES & SALONS",
      subtitle:
        "Quatorze ateliers et salons privés en Inde, au Japon, aux EAU, aux États-Unis, en Italie, en Espagne et au Royaume-Uni. Découvrez nos créations, nos archives textiles et nos consultations privées de masterji.",
      filterAll: "Toutes les adresses",
      viewMaps: "Ouvrir sur Google Maps",
      bookFitting: "Réserver un Essayage Privé",
      salonBadge: "Salon Privé & Boutique",
      servicesTitle: "Services d'Atelier",
      hoursTitle: "Horaires",
      phoneTitle: "Conciergerie Directe",
      countBoutiques: "Boutiques Mondiales",
    },
    JA: {
      breadcrumb: "KUMAR / 店舗ロケーション",
      title: "直営サロン＆ブティック",
      subtitle:
        "インド、日本、UAE、米国、イタリア、スペイン、英国に構える14のプライベートアトリエ。至高のセルビッジデニムとレザー、そしてマスタージによる完全予約制フィッティングをご体感ください。",
      filterAll: "すべての店舗",
      viewMaps: "Googleマップで開く",
      bookFitting: "マスタージ来店採寸予約",
      salonBadge: "プライベートサロン＆旗艦店",
      servicesTitle: "アトリエサービス",
      hoursTitle: "営業時間",
      phoneTitle: "専用コンシェルジュ",
      countBoutiques: "世界各国の直営店",
    },
    AR: {
      breadcrumb: "كومار / مواقع متاجرنا",
      title: "مواقع متاجرنا وصالوناتنا",
      subtitle:
        "أربعة عشر أتيليه وصالوناً خاصاً في الهند واليابان والإمارات وأمريكا وإيطاليا وإسبانيا وبريطانيا. تفضل بزيارتنا لتجربة القياسات الخاصة وأرشيف الأقمشة واستشارات الماسترجي.",
      filterAll: "جميع الفروع",
      viewMaps: "فتح على خرائط Google",
      bookFitting: "حجز موعد قياس مع الماسترجي",
      salonBadge: "صالون خاص وبوتيك فاخر",
      servicesTitle: "خدمات الأتيليه",
      hoursTitle: "أوقات العمل",
      phoneTitle: "الكونسيرج المباشر",
      countBoutiques: "بوتيك حول العالم",
    },
  }[locale] || {
    breadcrumb: "KUMAR / OUR STORE LOCATIONS",
    title: "OUR STORE LOCATIONS",
    subtitle:
      "Fourteen private ateliers and salons across India, Japan, UAE, USA, Italy, Spain, and the UK. Step into our world for bespoke fittings, fabric archives, and masterji consultations.",
    filterAll: "All Locations",
    viewMaps: "Open in Google Maps",
    bookFitting: "Book Private Masterji Fitting",
    salonBadge: "Private Salon & Boutique",
    servicesTitle: "Atelier Services",
    hoursTitle: "Hours",
    phoneTitle: "Direct Concierge",
    countBoutiques: "Boutiques Worldwide",
  };

  return (
    <div className="relative min-h-screen bg-bg text-ink selection:bg-accent selection:text-white">
      {/* Dynamic Header & Slide-in Menu Overlay */}
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Lightbox for Boutique Photos */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-bg rounded-lg overflow-hidden border border-line shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-accent transition-colors"
            >
              <X size={18} />
            </button>
            <div className="relative h-96 sm:h-[540px] w-full">
              <Image
                src={activeLightboxImage.src}
                alt={activeLightboxImage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 bg-bg text-ink border-t border-line/40">
              <p className="text-sm font-serif font-medium">{activeLightboxImage.title}</p>
            </div>
          </div>
        </div>
      )}

      <main className="pt-24 lg:pt-32 pb-24">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-6 pb-12 border-b border-line/50">
          <div className="space-y-6 max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-[11px] uppercase tracking-[0.3em] text-accent font-medium">
              <span>{labels.breadcrumb}</span>
            </div>

            {/* Monumental Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-ink uppercase">
              {labels.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-serif text-ink-muted leading-relaxed">
              {labels.subtitle}
            </p>

            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs uppercase tracking-wider text-accent font-medium pt-2">
              <Sparkles size={14} />
              <span>14 {labels.countBoutiques}</span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* COUNTRY FILTER TABS                                                       */}
          {/* ========================================================================= */}
          <div className="mt-10 flex items-center space-x-2 rtl:space-x-reverse overflow-x-auto pb-2 scrollbar-none">
            {COUNTRIES.map((country) => {
              const isActive = selectedCountry === country;
              const count =
                country === "All"
                  ? STORE_LOCATIONS.length
                  : STORE_LOCATIONS.filter((l) => l.countryKey === country).length;
              return (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse ${
                    isActive
                      ? "bg-ink text-white font-medium shadow-sm"
                      : "bg-bg-soft/80 text-ink-muted hover:text-ink hover:bg-bg-soft border border-line/50"
                  }`}
                >
                  <span>{country === "All" ? labels.filterAll : country}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-accent text-white" : "bg-line/60 text-ink-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOUTIQUE CARDS GRID                                                       */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredLocations.map((loc) => (
              <article
                key={loc.id}
                className="bg-bg rounded-lg border border-line/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Image Showcase with Zoom and Lightbox */}
                <div>
                  <div
                    onClick={() =>
                      setActiveLightboxImage({
                        src: loc.image,
                        title: `KUMAR Maison — ${loc.city}, ${loc.district} (${loc.country})`,
                      })
                    }
                    className="relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer bg-bg-soft"
                  >
                    <Image
                      src={loc.image}
                      alt={`KUMAR Boutique in ${loc.city}, ${loc.country}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-white text-[10px] uppercase tracking-widest font-medium border border-white/10">
                      {loc.country}
                    </div>

                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 bg-black/60 backdrop-blur-md rounded-full text-white/80 group-hover:text-white transition-colors">
                      <ZoomIn size={14} />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase tracking-widest text-accent font-medium block">
                        {loc.district}
                      </span>
                      <h3 className="text-2xl font-serif font-light tracking-wide text-white">
                        {loc.city}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Address & Google Maps Link */}
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2.5 rtl:space-x-reverse text-xs text-ink/85 font-serif leading-relaxed">
                        <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{loc.address}</span>
                      </div>

                      <div className="pt-1">
                        <a
                          href={loc.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs uppercase tracking-wider text-accent hover:text-ink font-medium underline underline-offset-4 transition-colors"
                        >
                          <span>{labels.viewMaps}</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>

                    {/* Hours & Direct Line */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-line/40 text-xs text-ink-muted font-serif">
                      <div className="flex items-start space-x-2 rtl:space-x-reverse">
                        <Clock size={14} className="text-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-ink text-[11px] uppercase tracking-wider font-sans font-medium">
                            {labels.hoursTitle}
                          </strong>
                          <span>{loc.hours}</span>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 rtl:space-x-reverse">
                        <Phone size={14} className="text-accent shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-ink text-[11px] uppercase tracking-wider font-sans font-medium">
                            {labels.phoneTitle}
                          </strong>
                          <a
                            href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                            className="hover:text-accent transition-colors"
                          >
                            {loc.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Services Tags */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        {loc.services.map((service, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded bg-bg-soft text-ink-muted text-[10px] uppercase tracking-wider border border-line/40"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Maison Footer */}
      <Footer />
    </div>
  );
}

export default function LocationsPage() {
  return (
    <LanguageProvider>
      <LocationsPageContent />
    </LanguageProvider>
  );
}
