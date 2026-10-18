"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  const { t, locale, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-luxury ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-line/50 text-ink shadow-sm py-3.5"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Hamburger + Menu Label */}
        <button
          onClick={onOpenMenu}
          aria-label="Open Navigation Menu"
          className="group flex items-center space-x-3 rtl:space-x-reverse text-xs tracking-widest uppercase transition-opacity duration-300 hover:opacity-75 focus:outline-none"
        >
          <div className="w-5 h-4 flex flex-col justify-between items-start">
            <span
              className={`h-[1px] w-5 transition-colors duration-500 ${
                isScrolled ? "bg-ink" : "bg-white"
              }`}
            />
            <span
              className={`h-[1px] w-3.5 group-hover:w-5 transition-all duration-300 ${
                isScrolled ? "bg-ink" : "bg-white"
              }`}
            />
            <span
              className={`h-[1px] w-5 transition-colors duration-500 ${
                isScrolled ? "bg-ink" : "bg-white"
              }`}
            />
          </div>
          <span className="font-light tracking-widest hidden sm:inline-block">
            {t.nav.menu}
          </span>
          <span
            className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border transition-colors ${
              isScrolled
                ? "border-line text-ink-muted"
                : "border-white/30 text-white/80"
            }`}
          >
            {locale}
          </span>
        </button>

        {/* Center: Brand Logo Emblem & Wordmark */}
        <Link
          href="/"
          className="flex flex-col items-center group transition-transform duration-500 hover:scale-[1.02]"
        >
          <div className="relative w-9 h-6 mb-1 transition-opacity duration-500">
            {isScrolled ? (
              <Image
                src="/images/logo/kumar-emblem-gold.png"
                alt="KUMAR Emblem"
                fill
                className="object-contain"
                priority
              />
            ) : (
              <Image
                src="/images/logo/kumar-emblem-light.png"
                alt="KUMAR Emblem"
                fill
                className="object-contain"
                priority
              />
            )}
          </div>
          <span
            className={`text-sm md:text-base font-light tracking-[0.3em] uppercase transition-colors duration-500 ${
              isScrolled ? "text-ink" : "text-white"
            }`}
          >
            K U M A R
          </span>
        </Link>

        {/* Right: Line Icons (Collection & Search) */}
        <div className="flex items-center space-x-5 md:space-x-7 rtl:space-x-reverse">
          <button
            onClick={() => {
              const el = document.getElementById("iconic-products");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#iconic-products";
              }
            }}
            aria-label="View Collections"
            className="group flex items-center space-x-1.5 rtl:space-x-reverse transition-opacity duration-300 hover:opacity-75 focus:outline-none"
          >
            <Compass
              size={18}
              strokeWidth={1.25}
              className={`transition-colors duration-500 ${
                isScrolled ? "text-ink" : "text-white"
              }`}
            />
            <span className="text-[11px] font-light tracking-widest uppercase hidden lg:inline-block">
              {t.nav.collection}
            </span>
          </button>

          <button
            onClick={onOpenMenu}
            aria-label="Search Collection"
            className="transition-opacity duration-300 hover:opacity-75 focus:outline-none"
          >
            <Search
              size={18}
              strokeWidth={1.25}
              className={`transition-colors duration-500 ${
                isScrolled ? "text-ink" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
