"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const DualCraftCinema: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="craft-cinema" className="py-24 md:py-36 bg-[#0D0D0E] text-white overflow-hidden relative border-b border-line/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Eyebrow & Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-3 rtl:space-x-reverse">
            <span className="w-6 h-[1px] bg-accent" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              {t.cinema.eyebrow}
            </span>
            <span className="w-6 h-[1px] bg-accent" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-wide">
            {t.cinema.titlePart1} <span className="font-serif italic font-normal text-accent">{t.cinema.titlePart2}</span>
          </h2>

          <p className="text-sm md:text-base font-serif text-white/70 leading-relaxed max-w-lg mx-auto font-light">
            {t.cinema.desc}
          </p>
        </div>

        {/* Dual Screen Cinema Showcase */}
        <div className="relative w-full max-w-5xl mx-auto rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-black">
          {/* Header Badges over videos */}
          <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest font-light text-white/90">
                {t.cinema.leftBadge}
              </span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-[11px] uppercase tracking-widest font-light text-white/90">
                {t.cinema.rightBadge}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>
          </div>

          {/* Side-by-side Video Player */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
            >
              <source src="/videos/craft/craft-dual.mp4" type="video/mp4" />
              Your browser does not support high-definition video.
            </video>

            {/* Central Fine Gold Divider Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-accent/80 via-accent/30 to-accent/80 pointer-events-none" />
          </div>

          {/* Bottom Controls Bar */}
          <div className="p-4 px-6 bg-black/90 border-t border-white/10 flex items-center justify-between text-xs tracking-wider uppercase text-white/70">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button
                onClick={togglePlay}
                className="flex items-center space-x-2 rtl:space-x-reverse hover:text-white transition-colors focus:outline-none"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? t.cinema.pause : t.cinema.play}</span>
              </button>
              <span className="text-white/20">|</span>
              <span className="text-[11px] font-mono text-accent">
                {t.cinema.tag}
              </span>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button
                onClick={() => {
                  if (videoRef.current) {
                    if (videoRef.current.requestFullscreen) {
                      videoRef.current.requestFullscreen();
                    }
                  }
                }}
                className="hover:text-white transition-colors"
                title="Fullscreen"
              >
                <Maximize2 size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
