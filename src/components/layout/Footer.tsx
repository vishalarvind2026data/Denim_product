"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="footer-care" className="bg-bg text-ink border-t border-line/60 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Newsletter & Maison Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-line/40 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="relative w-8 h-5">
                <Image
                  src="/images/logo/kumar-emblem-gold.png"
                  alt="KUMAR Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm tracking-[0.25em] font-light uppercase text-ink">
                K U M A R
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-serif italic text-accent font-normal max-w-md">
              {t.footer.manifesto}
            </p>
            <p className="text-xs font-serif text-ink-muted leading-relaxed max-w-md">
              {t.footer.subline}
            </p>
          </div>

          {/* Newsletter Input */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-ink font-medium block">
              {t.footer.gazetteTitle}
            </span>
            <p className="text-xs font-serif text-ink-muted">
              {t.footer.gazetteDesc}
            </p>

            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.placeholder}
                required
                className="w-full px-4 py-3 text-xs bg-bg-soft border border-line focus:border-accent rounded-full focus:outline-none transition-colors pr-28 rtl:pr-4 rtl:pl-28 text-ink placeholder:text-ink-muted/60"
              />
              <button
                type="submit"
                className="absolute right-1 rtl:right-auto rtl:left-1 top-1 bottom-1 px-5 bg-ink text-white hover:bg-accent text-[11px] uppercase tracking-widest font-medium rounded-full transition-colors flex items-center space-x-1 rtl:space-x-reverse"
              >
                {subscribed ? (
                  <>
                    <Check size={12} />
                    <span>{t.footer.subscribed}</span>
                  </>
                ) : (
                  <>
                    <span>{t.footer.subscribe}</span>
                    <ArrowRight size={12} className="rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 4 Quiet Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-line/40 text-xs">
          {/* Column 1: Craft */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-widest text-accent font-medium">
              <Link href="/about" className="hover:text-ink transition-colors">
                {t.footer.craftTitle}
              </Link>
            </h4>
            <ul className="space-y-2.5 text-ink-muted font-light">
              {t.footer.craftLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-ink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Collection */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-widest text-accent font-medium">
              <Link href="/#iconic-products" className="hover:text-ink transition-colors">
                {t.footer.collectionTitle}
              </Link>
            </h4>
            <ul className="space-y-2.5 text-ink-muted font-light">
              {t.footer.collectionLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-ink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Atelier & Fit */}
          <div className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-widest text-accent font-medium">
              <Link href="/#fit-atelier" className="hover:text-ink transition-colors">
                {t.footer.atelierTitle}
              </Link>
            </h4>
            <ul className="space-y-2.5 text-ink-muted font-light">
              {t.footer.atelierLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-ink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Private Boutiques */}
          <div id="footer-boutiques" className="space-y-4">
            <h4 className="text-[11px] uppercase tracking-widest text-accent font-medium">
              <Link href="/locations" className="hover:text-ink transition-colors">
                {t.footer.boutiquesTitle}
              </Link>
            </h4>
            <ul className="space-y-2.5 text-ink-muted font-light">
              {t.footer.boutiquesList.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-ink transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal, Region & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ink-muted space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <span>Region: <strong>International (DDP)</strong></span>
            <span>•</span>
            <span>Currency: <strong>EUR (€)</strong></span>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse uppercase tracking-wider text-[10px]">
            <span>{t.footer.rights}</span>
          </div>

          <p className="font-light">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
