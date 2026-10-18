"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX, ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HeroRunway: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("character-selvedge");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black select-none">
      {/* Background 4K/1080p Runway Ambient Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/editorial/runway-hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.03] transition-transform duration-1000 ease-luxury"
      >
        <source src="/videos/hero/kumar-runway-hero.mp4" type="video/mp4" />
        Your browser does not support high-definition video playback.
      </video>

      {/* Cinematic Vignette & Gradient Scrim for WCAG AA readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Hero Content (Bottom-Left / Bottom-Right for RTL) */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-2xl space-y-6">
          {/* Eyebrow Label */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-accent">
              {t.hero.eyebrow}
            </span>
          </div>

          {/* Main Large Light Uppercase Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white uppercase leading-[1.15]">
            {t.hero.title1}{" "}
            <span className="text-accent font-normal italic font-serif">{t.hero.titleCharacter}</span>{" "}
            {t.hero.title2}
          </h1>

          {/* Editorial Serif Subtitle */}
          <p className="text-base sm:text-lg md:text-xl font-serif text-white/85 leading-relaxed font-light max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* Call to Action Button */}
          <div className="pt-2 flex items-center space-x-6 rtl:space-x-reverse">
            <button
              onClick={scrollToNext}
              className="group px-8 py-3.5 bg-white text-ink text-xs uppercase tracking-widest font-medium rounded-full shadow-lg hover:bg-accent hover:text-white transition-all duration-500 ease-luxury flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span>{t.hero.ctaMaison}</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("fit-atelier");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs uppercase tracking-widest text-white/80 hover:text-white underline underline-offset-8 transition-colors duration-300 font-light hidden sm:inline-block"
            >
              {t.hero.ctaMasterji}
            </button>
          </div>
        </div>
      </div>

      {/* Right Edge: Vertical Slide / Pagination Indicator */}
      <div className="absolute right-6 md:right-12 rtl:right-auto rtl:left-6 rtl:md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center space-y-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center"
          title="Hero Visual"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-accent/30 transition-all duration-300" />
        </button>
        <button
          onClick={scrollToNext}
          className="group flex items-center"
          title="The Character of Selvedge"
        >
          <span className="w-2 h-2 rounded-full bg-white/40 hover:bg-white transition-all duration-300" />
        </button>
      </div>

      {/* Audio Mute/Unmute Discreet Toggle Button */}
      <div className="absolute bottom-8 right-6 md:right-12 rtl:right-auto rtl:left-6 rtl:md:left-12 z-20 flex items-center space-x-4 rtl:space-x-reverse">
        <button
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute Runway Audio" : "Mute Runway Audio"}
          className="p-3 bg-black/40 hover:bg-black/80 text-white/80 hover:text-white rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 group"
        >
          {isMuted ? (
            <VolumeX size={16} className="group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 size={16} className="text-accent group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
    </section>
  );
};
