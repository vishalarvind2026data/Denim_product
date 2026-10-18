"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import { ABOUT_DATA } from "@/data/about";

function AboutPageContent() {
  const { locale, isRtl } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Video playback state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Pure data containing ONLY the user-provided text
  const about = ABOUT_DATA[locale] || ABOUT_DATA.EN;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="relative min-h-screen bg-bg text-ink selection:bg-accent selection:text-white">
      {/* Top Header & Slide-In Menu Overlay */}
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="pt-24 lg:pt-32 pb-24">
        {/* ========================================================================= */}
        {/* 1. THE MAISON (Hero Banner in LVMH Mission Style)                         */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-6 pb-16 md:pb-24">
          <div className="space-y-6">
            {/* Breadcrumb / Kicker */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-[11px] uppercase tracking-[0.3em] text-accent font-medium">
              <span>KUMAR</span>
              <span>/</span>
              <span>{about.maisonTitle}</span>
            </div>

            {/* Monumental Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-ink uppercase">
              {about.maisonTitle}
            </h1>

            {/* Cinematic Craft Video (LVMH Style Full-Width Ambient Media) */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-lg overflow-hidden border border-line/60 bg-black shadow-lg group mt-8">
              <video
                ref={videoRef}
                src="/videos/craft/craft-dual.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Minimalist Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <button
                    onClick={togglePlay}
                    className="p-2.5 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-colors"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2.5 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>
                <button
                  onClick={handleFullscreen}
                  className="p-2.5 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-colors"
                  title="Fullscreen"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. OUR STORY (LVMH Editorial Mission Architecture)                        */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-16 md:py-24 border-t border-line/50">
          <div className="space-y-12">
            {/* Section Header */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-4">
                {about.storyTitle}
              </span>

              {/* Lead Pull-Quote Statement */}
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-ink leading-relaxed max-w-4xl">
                {about.storyLead}
              </p>
            </div>

            {/* Editorial Two-Column Text Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-4 text-sm sm:text-base font-serif text-ink/85 leading-relaxed">
              <p>{about.storyParagraph1}</p>
              <p className="italic text-ink font-normal border-l-2 rtl:border-l-0 rtl:border-r-2 border-accent pl-6 rtl:pl-0 rtl:pr-6">
                {about.storyParagraph2}
              </p>
            </div>

            {/* Pinterest-Curated Authentic Craft Media (Denim Shuttle Loom & Leather Workbench) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8">
              <div className="md:col-span-7 relative h-72 sm:h-96 rounded-lg overflow-hidden border border-line/60 shadow-sm group">
                <Image
                  src="/images/about/atelier-loom.jpg"
                  alt="Raw indigo selvedge woven on vintage narrow shuttle loom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="md:col-span-5 relative h-72 sm:h-96 rounded-lg overflow-hidden border border-line/60 shadow-sm group">
                <Image
                  src="/images/about/leather-workbench.jpg"
                  alt="Full-grain Tuscan leather workbench with artisanal tools"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. OUR VALUES (LVMH Savoir-Faire Architecture)                            */}
        {/* ========================================================================= */}
        <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-16 md:py-24 border-t border-line/50">
          <div className="space-y-12">
            {/* Section Header */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block mb-4">
                {about.valuesTitle}
              </span>

              {/* Authoritative Values Text */}
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-ink leading-relaxed max-w-4xl">
                {about.valuesText}
              </p>
            </div>

            {/* 5 Core Principles Grid (Faithfully rendering user-provided copy) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {about.principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-lg bg-bg-soft/50 border border-line/60 hover:border-accent transition-all duration-300 space-y-3 shadow-sm hover:shadow-md"
                >
                  <h3 className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
                    {principle.title}
                  </h3>
                  <p className="text-sm font-serif text-ink/80 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pinterest-Curated Authentic Craft Media (Masterji Tailoring Hands & Heirloom Patina) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8">
              <div className="md:col-span-5 relative h-72 sm:h-96 rounded-lg overflow-hidden border border-line/60 shadow-sm group">
                <Image
                  src="/images/about/masterji-hands.jpg"
                  alt="Masterji tailoring hands shaping selvedge denim in Jodhpur"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="md:col-span-7 relative h-72 sm:h-96 rounded-lg overflow-hidden border border-line/60 shadow-sm group">
                <Image
                  src="/images/about/heirloom-patina.jpg"
                  alt="Modern heirlooms gathering character and patina over time"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Maison Footer */}
      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutPageContent />
    </LanguageProvider>
  );
}
