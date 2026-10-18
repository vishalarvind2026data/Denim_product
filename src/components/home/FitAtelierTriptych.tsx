"use client";

import React from "react";
import Image from "next/image";
import { Scissors, Ruler, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FitAtelierTriptych: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="fit-atelier" className="py-24 md:py-36 bg-bg-soft/70 overflow-hidden border-b border-line/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Editorial Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-3 rtl:space-x-reverse">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              {t.atelier.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-accent" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wide text-ink">
            {t.atelier.title}
          </h2>

          <p className="text-xl sm:text-2xl font-serif italic text-accent font-normal">
            {t.atelier.quote}
          </p>

          <p className="text-base sm:text-lg font-serif text-ink/80 leading-relaxed font-light max-w-2xl mx-auto">
            {t.atelier.desc}
          </p>

          <p className="text-sm uppercase tracking-[0.2em] font-medium text-ink pt-2">
            {t.atelier.tagline}
          </p>
        </div>

        {/* Triptych Visual Layout: Image Left | Video Center | Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-16">
          {/* Left: Jodhpur Blue City Heritage */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-white shadow-lg border border-line/30">
              <Image
                src="/images/editorial/atelier-jodhpur.jpg"
                alt="Jodhpur Architectural Legacy"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-medium">
                    {t.atelier.card1Eyebrow}
                  </span>
                  <p className="text-xs tracking-wider uppercase text-white font-light mt-0.5">
                    {t.atelier.card1Title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Masterji Video Visual */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-black shadow-2xl border-2 border-accent/40 ring-4 ring-accent/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/videos/atelier/kumar-masterji-atelier.mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 pointer-events-none">
                <div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span className="text-[10px] uppercase tracking-widest text-accent font-medium">
                      {t.atelier.card2Eyebrow}
                    </span>
                  </div>
                  <p className="text-xs tracking-wider uppercase text-white font-light mt-0.5">
                    {t.atelier.card2Title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Masterji on Industrial Sewing Machine */}
          <div className="lg:col-span-4 relative group">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-white shadow-lg border border-line/30">
              <Image
                src="/images/editorial/atelier-masterji.png"
                alt="Masterji working on industrial sewing machine"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-medium">
                    {t.atelier.card3Eyebrow}
                  </span>
                  <p className="text-xs tracking-wider uppercase text-white font-light mt-0.5">
                    {t.atelier.card3Title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of KUMAR Fit Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-line/50">
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="p-3 bg-white rounded-full shadow-sm text-accent border border-line/40">
              <Ruler size={18} strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs uppercase tracking-widest font-medium text-ink">
                {isRtl ? "تناسق مثالي للأبعاد" : "Exact Body Proportions"}
              </h3>
              <p className="text-xs font-serif text-ink-muted leading-relaxed">
                {isRtl
                  ? "تخطيط دقيق لعرض الكتفين، الصدر، الخصر والأكمام وفق قياسات دقيقة."
                  : "Shoulder width, chest, waist, hips, and sleeve mapped directly to pre-stocked inventory."}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="p-3 bg-white rounded-full shadow-sm text-accent border border-line/40">
              <Scissors size={18} strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs uppercase tracking-widest font-medium text-ink">
                {isRtl ? "لمسات الماسترجي داخل المتجر" : "In-Store Masterji Refinement"}
              </h3>
              <p className="text-xs font-serif text-ink-muted leading-relaxed">
                {isRtl
                  ? "حرفيون متخصصون في تطويع الدنيم الصلب والجلد المرن لتوفير راحة تامة."
                  : "Fit specialists trained in both rigid selvedge denim tension and supple leather finishing."}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className="p-3 bg-white rounded-full shadow-sm text-accent border border-line/40">
              <ShieldCheck size={18} strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs uppercase tracking-widest font-medium text-ink">
                {isRtl ? "جاهز للتسليم الفوري" : "Manufactured In Advance"}
              </h3>
              <p className="text-xs font-serif text-ink-muted leading-relaxed">
                {isRtl
                  ? "قطع مسبقة الصنع متوفرة للشحن الفوري لجميع أنحاء العالم دون انتظار."
                  : "Set stocking per size with immediate global dispatch. No bespoke queues or lead times."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
