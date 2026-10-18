"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CharacterSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const CharacterSection: React.FC<CharacterSectionProps> = ({
  id,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  ctaText = "Discover The Weave",
  onCtaClick,
}) => {
  return (
    <section id={id} className="py-24 md:py-36 bg-white overflow-hidden border-b border-line/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Column */}
          <div
            className={`lg:col-span-6 relative ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden bg-bg-soft rounded-sm shadow-xl group">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>

          {/* Editorial Content Column */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center space-y-8 ${
              reverse ? "lg:order-1 lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8" : "lg:order-2 lg:pl-8 rtl:lg:pl-0 rtl:lg:pr-8"
            }`}
          >
            <div className="space-y-4">
              {/* Eyebrow in Muted Gold */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="w-6 h-[1px] bg-accent" />
                <span className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
                  {eyebrow}
                </span>
              </div>

              {/* Large Light Uppercase Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-wide text-ink leading-tight">
                {title}
              </h2>
            </div>

            {/* Serif Body Paragraph */}
            <p className="text-base md:text-lg font-serif text-ink/80 leading-relaxed font-light">
              {description}
            </p>

            {/* Outlined Luxury Pill Button */}
            <div className="pt-2">
              <button
                onClick={
                  onCtaClick ||
                  (() => {
                    const el = document.getElementById("iconic-products");
                    el?.scrollIntoView({ behavior: "smooth" });
                  })
                }
                className="group inline-flex items-center space-x-3 rtl:space-x-reverse px-8 py-3 rounded-full border border-ink/40 text-xs uppercase tracking-widest text-ink hover:bg-ink hover:text-white transition-all duration-500 ease-luxury"
              >
                <span>{ctaText}</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
