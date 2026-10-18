"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/translations";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { locale, setLocale, t, isRtl } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const languages: Locale[] = ["EN", "FR", "JA", "AR"];
  const menuItems = t.menuOverlay.categories;

  const handleNavigate = (href: string) => {
    onClose();
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
  };

  // Reset active category if index is out of bounds
  useEffect(() => {
    if (activeCategory >= menuItems.length) {
      setActiveCategory(0);
    }
  }, [menuItems, activeCategory]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-700 ease-luxury ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Dimmed backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Main slide-in panel (68% width desktop, 100% mobile) */}
      <div
        className={`absolute top-0 bottom-0 w-full md:w-[68%] lg:w-[62%] bg-white text-ink shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-700 ease-luxury ${
          isRtl
            ? `right-0 ${isOpen ? "translate-x-0" : "translate-x-full"}`
            : `left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`
        }`}
      >
        {/* Panel Header */}
        <div className="p-8 md:p-12 pb-6 border-b border-line/40 flex items-center justify-between">
          <div className="flex items-center space-x-5 rtl:space-x-reverse">
            <button
              onClick={onClose}
              aria-label="Close Navigation Menu"
              className="group flex items-center space-x-2.5 rtl:space-x-reverse text-xs tracking-widest uppercase hover:text-accent transition-colors"
            >
              <X size={18} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform duration-300" />
              <span className="font-light">{t.nav.close}</span>
            </button>

            <span className="text-line">|</span>

            {/* Language Switcher Buttons (EN · FR · JA · AR) */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs tracking-widest text-ink-muted">
              {languages.map((lang, idx) => (
                <React.Fragment key={lang}>
                  <button
                    onClick={() => setLocale(lang)}
                    className={`transition-all duration-200 uppercase ${
                      locale === lang
                        ? "text-ink font-semibold border-b-2 border-accent pb-0.5"
                        : "text-ink-muted/60 hover:text-ink cursor-pointer"
                    }`}
                  >
                    {lang}
                  </button>
                  {idx < languages.length - 1 && <span className="text-line text-[10px]">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="relative w-7 h-5">
              <Image
                src="/images/logo/kumar-emblem-gold.png"
                alt="KUMAR Emblem"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs tracking-[0.25em] font-light uppercase text-ink">
              K U M A R
            </span>
          </div>
        </div>

        {/* Panel Body: Multi-Level Navigation Columns */}
        <div className="p-8 md:p-12 py-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Primary Navigation Items */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <p className="text-xs font-serif italic text-accent tracking-wide mb-2">
              {t.menuOverlay.welcome}
            </p>
            {menuItems.map((item, index) => {
              const isActive = activeCategory === index;
              return (
                <button
                  key={item.title}
                  onMouseEnter={() => setActiveCategory(index)}
                  onClick={() => {
                    setActiveCategory(index);
                    handleNavigate(item.href);
                  }}
                  className={`text-left rtl:text-right group flex items-center justify-between text-base md:text-lg tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? "text-ink font-normal pl-2 rtl:pl-0 rtl:pr-2 border-l-2 rtl:border-l-0 rtl:border-r-2 border-accent"
                      : "text-ink-muted/70 hover:text-ink font-light pl-0 rtl:pr-0"
                  }`}
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    {item.title}
                  </span>
                  {isRtl ? (
                    <ChevronLeft
                      size={16}
                      strokeWidth={1.5}
                      className={`transition-all duration-300 ${
                        isActive ? "text-accent -translate-x-1 opacity-100" : "opacity-0"
                      }`}
                    />
                  ) : (
                    <ChevronRight
                      size={16}
                      strokeWidth={1.5}
                      className={`transition-all duration-300 ${
                        isActive ? "text-accent translate-x-1 opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Secondary Drill-Down / Explanations */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l rtl:lg:border-l-0 rtl:lg:border-r border-line/40 pt-6 lg:pt-0 lg:pl-10 rtl:lg:pl-0 rtl:lg:pr-10 flex flex-col justify-center">
            {menuItems[activeCategory] && (
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-widest text-accent font-medium">
                  {menuItems[activeCategory].title}
                </span>
                <div className="space-y-4">
                  {menuItems[activeCategory].subItems.map((sub, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        handleNavigate(sub.href || menuItems[activeCategory].href);
                      }}
                      className="group cursor-pointer p-3 -mx-3 rounded hover:bg-bg-soft transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm tracking-wider uppercase font-medium text-ink group-hover:text-accent transition-colors">
                          {sub.name}
                        </h4>
                        {isRtl ? (
                          <ChevronLeft
                            size={14}
                            strokeWidth={1.5}
                            className="text-line group-hover:text-accent transition-colors"
                          />
                        ) : (
                          <ChevronRight
                            size={14}
                            strokeWidth={1.5}
                            className="text-line group-hover:text-accent transition-colors"
                          />
                        )}
                      </div>
                      <p className="text-xs font-serif text-ink-muted mt-1 leading-relaxed">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Panel Footer */}
        <div className="p-8 md:p-12 pt-6 border-t border-line/40 bg-bg-soft/60 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted space-y-3 sm:space-y-0">
          <p className="font-serif italic">
            {t.footer.manifesto}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse uppercase tracking-wider text-[11px]">
            <a href="/locations" onClick={onClose} className="hover:text-ink transition-colors">
              {t.footer.boutiquesTitle}
            </a>
            <a href="/#fit-atelier" onClick={onClose} className="hover:text-ink transition-colors">
              {t.atelier.title}
            </a>
            <a href="/about" onClick={onClose} className="hover:text-ink transition-colors">
              {t.footer.craftTitle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
