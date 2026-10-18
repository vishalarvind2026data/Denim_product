"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  ArrowLeft,
  Ruler,
  PhoneCall,
  ShieldCheck,
  Truck,
  Sparkles,
  ChevronDown,
  Check,
  Layers,
  Scissors,
} from "lucide-react";
import { getProductById, DetailedProduct, PRODUCTS } from "@/data/products";
import { SizeGuideModal, CustomFitState } from "@/components/product/SizeGuideModal";
import { ContactAdvisorModal } from "@/components/product/ContactAdvisorModal";
import { Header } from "@/components/layout/Header";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

function ProductDetailContent({ id }: { id: string }) {
  const { t, isRtl } = useLanguage();
  const product = getProductById(id);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedUkSize, setSelectedUkSize] = useState<number>(38); // Default UK 38 (M)
  const [customFit, setCustomFit] = useState<CustomFitState>({ isCustom: false, unit: "cm" });
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);

  // Accordion toggle states
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    description: true,
    fit: true,
    materials: false,
    craft: false,
    delivery: false,
  });

  if (!product) {
    notFound();
  }

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentGalleryImages = product.editorialImages.length > 0 ? product.editorialImages : [product.image];

  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-white font-sans">
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main className="pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumbs & Back Link */}
          <div className="py-4 mb-6 flex items-center justify-between text-xs text-ink-muted border-b border-line/40">
            <Link
              href="/#iconic-products"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse hover:text-ink transition-colors font-medium uppercase tracking-wider"
            >
              <ArrowLeft size={14} className="rtl:rotate-180" />
              <span>Back to Collection</span>
            </Link>

            <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse uppercase tracking-widest text-[11px]">
              <span>KUMAR Maison</span>
              <span>/</span>
              <span>{product.category}</span>
              <span>/</span>
              <span className="text-ink font-semibold">{product.title}</span>
            </div>
          </div>

          {/* Main 2-Column Product Layout (Louis Vuitton inspired) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* LEFT COLUMN: Large High-Resolution Product Showcase */}
            <div className="lg:col-span-7 space-y-4">
              {/* Primary Main Image Frame */}
              <div className="relative aspect-[4/5] w-full bg-bg-soft rounded-sm overflow-hidden border border-line/50 shadow-md group">
                <Image
                  src={currentGalleryImages[selectedImageIndex] || product.image}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                />

                {/* Top Atelier Badge */}
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-medium text-ink shadow-sm rounded-sm">
                    {product.tag} • Pre-Stocked Atelier
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {currentGalleryImages.length > 1 && (
                <div className="flex space-x-3 rtl:space-x-reverse pt-2 overflow-x-auto pb-2 no-scrollbar">
                  {currentGalleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-24 rounded-sm overflow-hidden border transition-all flex-shrink-0 ${
                        selectedImageIndex === idx
                          ? "border-accent ring-1 ring-accent"
                          : "border-line/60 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.title} view ${idx + 1}`}
                        fill
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Atelier Guarantees Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-line/40 text-center text-xs text-ink-muted">
                <div className="space-y-1">
                  <ShieldCheck size={18} className="mx-auto text-accent mb-1" />
                  <p className="font-semibold text-ink text-[11px] uppercase tracking-wider">Heritage Loom</p>
                  <p className="text-[10px] font-serif">14.5oz Japanese Selvedge</p>
                </div>
                <div className="space-y-1">
                  <Scissors size={18} className="mx-auto text-accent mb-1" />
                  <p className="font-semibold text-ink text-[11px] uppercase tracking-wider">Masterji Tailored</p>
                  <p className="text-[10px] font-serif">Indian Fit Architecture</p>
                </div>
                <div className="space-y-1">
                  <Truck size={18} className="mx-auto text-accent mb-1" />
                  <p className="font-semibold text-ink text-[11px] uppercase tracking-wider">Delivered Duty Paid</p>
                  <p className="text-[10px] font-serif">Zero Import Surprises</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Information, Sizing, Customizer & Concierge */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              {/* Product Reference & Category */}
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold block mb-1">
                  REF. KM-{product.id} • {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-light uppercase tracking-wide text-ink leading-tight">
                  {product.title}
                </h1>
                <p className="text-2xl font-serif font-medium text-ink mt-2">
                  {product.price}
                </p>
                <p className="text-xs text-ink-muted font-serif italic mt-1">
                  Inclusive of all international duties, taxes, and private courier delivery.
                </p>
              </div>

              <div className="w-full h-[1px] bg-line/60" />

              {/* SIZE SELECTION & CUSTOMIZER SECTION */}
              {product.type !== "bag" ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-ink">
                      Select Size
                    </span>
                    <button
                      onClick={() => setIsSizeGuideOpen(true)}
                      className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs text-accent hover:text-ink font-medium tracking-wider transition-colors"
                    >
                      <Ruler size={13} />
                      <span className="underline underline-offset-4">Size Guide & Customizer</span>
                    </button>
                  </div>

                  {/* Standard Size Pill Buttons (UK 34-44 / XS-XXL) */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { uk: 34, label: "UK 34 (XS)" },
                      { uk: 36, label: "UK 36 (S)" },
                      { uk: 38, label: "UK 38 (M)" },
                      { uk: 40, label: "UK 40 (L)" },
                      { uk: 42, label: "UK 42 (XL)" },
                      { uk: 44, label: "UK 44 (XXL)" },
                    ].map((sz) => {
                      const isSelected = selectedUkSize === sz.uk && !customFit.isCustom;
                      return (
                        <button
                          key={sz.uk}
                          onClick={() => {
                            setSelectedUkSize(sz.uk);
                            setCustomFit({ isCustom: false, unit: "cm" });
                          }}
                          className={`py-2.5 px-2 text-xs uppercase tracking-wider font-medium rounded border transition-all text-center ${
                            isSelected
                              ? "bg-ink text-white border-ink shadow-sm"
                              : "bg-white text-ink border-line hover:border-ink/60"
                          }`}
                        >
                          {sz.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Bespoke Custom Fit Indicator Banner */}
                  {customFit.isCustom && (
                    <div className="p-3 bg-accent/10 border border-accent/30 rounded flex items-center justify-between animate-fadeIn">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-1.5 text-accent text-xs font-semibold">
                          <Check size={12} />
                          <span>Bespoke Custom Measurements Active</span>
                        </div>
                        <p className="text-[11px] font-serif text-ink-muted">
                          {product.type === "jacket" && customFit.jacket && (
                            <>
                              Shoulder: {customFit.jacket.shoulder}cm • Bust: {customFit.jacket.bust}cm • Length: {customFit.jacket.length}cm • Sleeve: {customFit.jacket.sleeveLength}cm
                            </>
                          )}
                          {product.type === "pant" && customFit.pant && (
                            <>
                              Waist: {customFit.pant.waist}cm • Hip: {customFit.pant.hip}cm • Inseam: {customFit.pant.inseam}cm
                            </>
                          )}
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSizeGuideOpen(true)}
                        className="text-[11px] uppercase tracking-wider text-accent font-semibold underline ml-3 flex-shrink-0"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-3.5 bg-bg-soft border border-line rounded space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-ink block">
                    Dimensions & Capacity
                  </span>
                  <p className="text-xs font-serif text-ink-muted">
                    Atelier Standard: Width 42 cm • Height 38 cm • Depth 14 cm • Handle Drop 26 cm
                  </p>
                </div>
              )}

              {/* ACTION BUTTONS: Contact Advisor To Place Order */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsAdvisorModalOpen(true)}
                  className="w-full py-4 bg-ink text-white hover:bg-accent text-xs uppercase tracking-[0.2em] font-medium rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <PhoneCall size={14} />
                  <span>Contact Advisor To Place Order</span>
                </button>

                <button
                  onClick={() => setIsAdvisorModalOpen(true)}
                  className="w-full py-3.5 bg-white border border-ink/40 text-ink hover:bg-ink hover:text-white text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <Sparkles size={14} />
                  <span>Book In-Store Masterji Fitting</span>
                </button>
              </div>

              {/* ACCORDIONS: Story, Fit Architecture, Materials, Craft, Delivery */}
              <div className="divide-y divide-line/60 border-y border-line/60 pt-2">
                {/* 1. Story & Silhouette */}
                <div className="py-4">
                  <button
                    onClick={() => toggleAccordion("description")}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-ink hover:text-accent transition-colors"
                  >
                    <span>The Story & Silhouette</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openAccordions.description ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordions.description && (
                    <div className="pt-3 space-y-2 text-xs font-serif text-ink/80 leading-relaxed animate-fadeIn">
                      <p>{product.story}</p>
                      <p className="italic text-ink-muted">{product.description}</p>
                    </div>
                  )}
                </div>

                {/* 2. Fit & Tailoring Architecture */}
                <div className="py-4">
                  <button
                    onClick={() => toggleAccordion("fit")}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-ink hover:text-accent transition-colors"
                  >
                    <span>Masterji Fit Architecture</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openAccordions.fit ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordions.fit && (
                    <div className="pt-3 space-y-2 text-xs font-serif text-ink/80 leading-relaxed animate-fadeIn">
                      <p>{product.fitArchitecture}</p>
                      <p className="text-ink font-sans font-medium text-[11px] pt-1">
                        {product.modelWearing}
                      </p>
                    </div>
                  )}
                </div>

                {/* 3. Materials & Provenance */}
                <div className="py-4">
                  <button
                    onClick={() => toggleAccordion("materials")}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-ink hover:text-accent transition-colors"
                  >
                    <span>Materials & Provenance</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openAccordions.materials ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordions.materials && (
                    <ul className="pt-3 space-y-1.5 text-xs font-serif text-ink/80 leading-relaxed list-disc list-inside animate-fadeIn">
                      {product.materialsDetails.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* 4. Craft Details & Specifications */}
                <div className="py-4">
                  <button
                    onClick={() => toggleAccordion("craft")}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-ink hover:text-accent transition-colors"
                  >
                    <span>Craft Details & Finishing</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openAccordions.craft ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordions.craft && (
                    <ul className="pt-3 space-y-1.5 text-xs font-serif text-ink/80 leading-relaxed list-disc list-inside animate-fadeIn">
                      {product.craftDetails.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* 5. Care & Delivery */}
                <div className="py-4">
                  <button
                    onClick={() => toggleAccordion("delivery")}
                    className="w-full flex items-center justify-between text-xs uppercase tracking-widest font-semibold text-ink hover:text-accent transition-colors"
                  >
                    <span>Care & Complimentary Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openAccordions.delivery ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordions.delivery && (
                    <div className="pt-3 space-y-3 text-xs font-serif text-ink/80 leading-relaxed animate-fadeIn">
                      <p>{product.deliveryNotice}</p>
                      <ul className="space-y-1 list-disc list-inside">
                        {product.careGuide.map((g, i) => (
                          <li key={i}>{g}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Suggestion Grid: Explore Other Pieces */}
          <div className="mt-28 pt-16 border-t border-line/60 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                The Permanent Collection
              </span>
              <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-wide text-ink">
                Other Iconic Silhouettes
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {PRODUCTS.filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map((other) => (
                  <Link
                    key={other.id}
                    href={`/products/${other.id}`}
                    className="group flex flex-col space-y-3"
                  >
                    <div className="relative aspect-[4/5] w-full bg-bg-soft rounded-sm overflow-hidden border border-line/40 group-hover:shadow-xl transition-all duration-700 ease-luxury">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-luxury group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
                        {other.category}
                      </span>
                      <h3 className="text-sm font-medium uppercase tracking-wide text-ink group-hover:text-accent transition-colors">
                        {other.title}
                      </h3>
                      <p className="text-xs font-serif text-ink mt-0.5 font-medium">
                        {other.price}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      {/* Interactive Size Guide Modal with Customizer */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        productType={product.type}
        selectedUkSize={selectedUkSize}
        onSelectSize={(uk) => setSelectedUkSize(uk)}
        onApplyCustomFit={(fit) => setCustomFit(fit)}
        currentCustomFit={customFit}
      />

      {/* Contact Advisor Modal for Ordering */}
      <ContactAdvisorModal
        isOpen={isAdvisorModalOpen}
        onClose={() => setIsAdvisorModalOpen(false)}
        product={product}
        selectedUkSize={selectedUkSize}
        customFit={customFit}
      />

      <Footer />
    </div>
  );
}

export default function ProductPage() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : "01";
  return (
    <LanguageProvider>
      <ProductDetailContent id={id} />
    </LanguageProvider>
  );
}
