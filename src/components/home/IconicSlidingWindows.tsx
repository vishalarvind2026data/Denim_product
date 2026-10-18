"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Eye, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const IconicSlidingWindows: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const products = t.products.items;

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(Math.abs(scrollLeft) > 20);
      setCanScrollRight(Math.abs(scrollLeft) < scrollWidth - clientWidth - 20);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 360;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: isRtl ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="iconic-products" className="py-24 md:py-36 bg-white overflow-hidden border-b border-line/40 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 space-y-6 md:space-y-0">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="w-6 h-[1px] bg-accent" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                {t.products.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wide text-ink">
              {t.products.title}
            </h2>
            <p className="text-sm md:text-base font-serif text-ink-muted italic">
              {t.products.subtitle}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous Window"
              className={`p-3.5 rounded-full border border-line transition-all duration-300 ${
                canScrollLeft
                  ? "hover:bg-ink hover:text-white hover:border-ink text-ink cursor-pointer"
                  : "opacity-30 cursor-not-allowed text-line"
              }`}
            >
              <ChevronLeft size={18} className="rtl:rotate-180" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next Window"
              className={`p-3.5 rounded-full border border-line transition-all duration-300 ${
                canScrollRight
                  ? "hover:bg-ink hover:text-white hover:border-ink text-ink cursor-pointer"
                  : "opacity-30 cursor-not-allowed text-line"
              }`}
            >
              <ChevronRight size={18} className="rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Sliding Windows Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex space-x-6 md:space-x-8 rtl:space-x-reverse overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
        >
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="group flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] snap-start cursor-pointer flex flex-col justify-between"
            >
              {/* Window Frame Card */}
              <div className="relative aspect-[4/5] w-full bg-bg-soft rounded-sm overflow-hidden border border-line/40 shadow-sm group-hover:shadow-2xl transition-all duration-700 ease-luxury">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 280px, 380px"
                  className="object-cover object-center transition-transform duration-1000 ease-luxury group-hover:scale-105"
                />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-medium text-ink shadow-sm rounded-sm">
                    {p.tag}
                  </span>
                </div>

                {/* Hover View Product Overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="px-6 py-2.5 bg-white text-ink text-xs uppercase tracking-widest font-medium rounded-full shadow-xl flex items-center space-x-2 rtl:space-x-reverse transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={14} className="text-accent" />
                    <span className="font-semibold">{t.products.viewSilhouette}</span>
                    <ArrowUpRight size={13} className="text-ink-muted" />
                  </div>
                </div>
              </div>

              {/* Window Card Meta */}
              <div className="pt-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-accent tracking-widest uppercase font-medium">
                  <span>{p.category}</span>
                  <span className="font-mono text-ink-muted">REF. KM-{p.id}</span>
                </div>

                {/* Product Title */}
                <h3 className="text-base sm:text-lg font-light uppercase tracking-wider text-ink group-hover:text-accent transition-colors duration-300 flex items-center justify-between">
                  <span>{p.title}</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent flex-shrink-0 ml-2" />
                </h3>

                {/* Euro Price directly under the name */}
                <div className="pt-0.5 pb-1">
                  <span className="text-sm sm:text-base font-serif font-medium text-ink tracking-wide">
                    {p.price}
                  </span>
                </div>

                <p className="text-xs font-serif text-ink-muted line-clamp-1 italic">
                  {p.materials}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
