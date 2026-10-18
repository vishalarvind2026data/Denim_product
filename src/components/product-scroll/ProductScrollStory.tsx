"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { RotateCcw, Layers, ZoomIn } from "lucide-react";

export const ProductScrollStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMode, setActiveMode] = useState<"spin" | "dismantle" | "zoom">("spin");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute transform states based on progress
  const rotationY = activeMode === "spin" ? (scrollProgress * 360) : 0;
  const zoomScale = activeMode === "zoom" ? (1 + scrollProgress * 1.5) : 1;
  const dismantleOffset = activeMode === "dismantle" ? (scrollProgress * 60) : 0;

  // Active callout index (0 to 3) based on progress
  const activeStep = Math.min(Math.floor(scrollProgress * 4), 3);

  const callouts = [
    {
      title: "14.5oz Japanese Selvedge",
      desc: "Woven on heritage narrow shuttle looms with tight selvedge id edging.",
      side: "left",
    },
    {
      title: "Tuscan Full-Grain Leather",
      desc: "Retaining authentic hide grain with deep vegetable tanning and supple patina.",
      side: "right",
    },
    {
      title: "Copper Rivets & Needles",
      desc: "Heavy gold thread chain-stitching reinforcing every structural seam.",
      side: "left",
    },
    {
      title: "Sculpted Masterji Fit",
      desc: "Bespoke shoulder-to-chest ease engineered for structured silhouette.",
      side: "right",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="product-scroll-story"
      className="relative h-[280vh] bg-[#0E0E10] text-white select-none"
    >
      {/* Sticky Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* Top Header / Mode Switcher */}
        <div className="pt-24 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between z-20 space-y-4 sm:space-y-0">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-[1px] bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-medium">
                Signature Interactive Experience
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-light uppercase tracking-wide text-white mt-1">
              Deconstructing The Icon
            </h3>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center space-x-2 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveMode("spin")}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 ${
                activeMode === "spin"
                  ? "bg-accent text-white font-medium shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <RotateCcw size={12} />
              <span>360° Spin</span>
            </button>

            <button
              onClick={() => setActiveMode("dismantle")}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 ${
                activeMode === "dismantle"
                  ? "bg-accent text-white font-medium shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Layers size={12} />
              <span>Exploded View</span>
            </button>

            <button
              onClick={() => setActiveMode("zoom")}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 ${
                activeMode === "zoom"
                  ? "bg-accent text-white font-medium shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <ZoomIn size={12} />
              <span>Macro Zoom</span>
            </button>
          </div>
        </div>

        {/* Center: Pinned Product Showcase with 3D Scrub */}
        <div className="relative flex-1 w-full flex items-center justify-center [perspective:1200px]">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

          {/* Product Centerpiece */}
          <div
            style={{
              transform: `rotateY(${rotationY}deg) scale(${zoomScale})`,
              transformStyle: "preserve-3d",
              transition: "transform 0.15s ease-out",
            }}
            className="relative w-[280px] sm:w-[360px] md:w-[420px] aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Base Product Layer */}
            <Image
              src="/images/products/iconic-01-jacket.jpg"
              alt="KUMAR Selvedge Denim Jacket"
              fill
              sizes="(max-width: 768px) 300px, 450px"
              className="object-cover object-center"
              priority
            />

            {/* Simulated Dismantle Leather Trim Layer */}
            {activeMode === "dismantle" && (
              <div
                style={{
                  transform: `translate3d(0, -${dismantleOffset}px, 40px)`,
                  transition: "transform 0.15s ease-out",
                }}
                className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-accent/20 to-transparent border-t-2 border-accent pointer-events-none flex items-center justify-center"
              >
                <span className="text-[10px] uppercase tracking-widest text-accent bg-black/80 px-2 py-0.5 rounded">
                  Leather Collar Section
                </span>
              </div>
            )}
          </div>

          {/* Dynamic Scroll Scrub Callouts (Alternating Left & Right) */}
          <div className="absolute inset-0 max-w-6xl mx-auto px-6 md:px-12 pointer-events-none flex items-center justify-between">
            {/* Left Side Callout */}
            <div
              className={`max-w-xs transition-all duration-700 ease-luxury ${
                callouts[activeStep].side === "left"
                  ? "opacity-100 translate-x-0"
                  : "opacity-20 -translate-x-4 pointer-events-none"
              }`}
            >
              <div className="p-5 bg-white/5 backdrop-blur-md rounded-sm border border-white/10 shadow-xl space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-accent font-mono">
                  Phase 0{activeStep + 1} • Detail
                </span>
                <h4 className="text-base uppercase tracking-wider font-light text-white">
                  {callouts[activeStep].title}
                </h4>
                <p className="text-xs font-serif text-white/70 leading-relaxed">
                  {callouts[activeStep].desc}
                </p>
              </div>
            </div>

            {/* Right Side Callout */}
            <div
              className={`max-w-xs transition-all duration-700 ease-luxury ${
                callouts[activeStep].side === "right"
                  ? "opacity-100 translate-x-0"
                  : "opacity-20 translate-x-4 pointer-events-none"
              }`}
            >
              <div className="p-5 bg-white/5 backdrop-blur-md rounded-sm border border-white/10 shadow-xl space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-accent font-mono">
                  Phase 0{activeStep + 1} • Craft
                </span>
                <h4 className="text-base uppercase tracking-wider font-light text-white">
                  {callouts[activeStep].title}
                </h4>
                <p className="text-xs font-serif text-white/70 leading-relaxed">
                  {callouts[activeStep].desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status & Scroll Scrub Progress Indicator */}
        <div className="pb-8 px-6 md:px-12 flex items-center justify-between z-20 text-xs text-white/60">
          <span className="font-mono text-[11px] text-accent">
            Scroll to scrub model • {Math.round(scrollProgress * 100)}%
          </span>

          <div className="w-36 h-[2px] bg-white/20 rounded-full overflow-hidden">
            <div
              style={{ width: `${scrollProgress * 100}%` }}
              className="h-full bg-accent transition-all duration-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
