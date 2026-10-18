"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, MessageSquare, Mail, Phone, Calendar, Check, Shield } from "lucide-react";
import { DetailedProduct } from "@/data/products";
import { CustomFitState } from "./SizeGuideModal";

interface ContactAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: DetailedProduct;
  productName?: string;
  selectedUkSize?: number;
  customFit?: CustomFitState;
}

export const ContactAdvisorModal: React.FC<ContactAdvisorModalProps> = ({
  isOpen,
  onClose,
  product,
  productName,
  selectedUkSize = 38,
  customFit,
}) => {
  const [submittedCallback, setSubmittedCallback] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [clientCity, setClientCity] = useState("Paris");

  if (!isOpen) return null;

  const activeProduct = product || {
    id: "bespoke-fitting",
    title: productName || "KUMAR Private Maison Consultation",
    category: "Masterji Fitting & Consultation",
    price: "Complimentary Bespoke Appointment",
    image: "/images/about/masterji-hands.jpg",
    type: "jacket" as const,
    description: "Private consultation and bespoke fitting with a KUMAR artisan.",
    features: [],
    fabricSpecs: [],
    careInstructions: [],
    editorialImages: [],
  };

  // Sizing description text
  const sizeString = customFit?.isCustom
    ? activeProduct.type === "jacket" && customFit.jacket
      ? `Bespoke Custom Fit (Shoulder: ${customFit.jacket.shoulder}cm, Bust: ${customFit.jacket.bust}cm, Length: ${customFit.jacket.length}cm, Sleeve: ${customFit.jacket.sleeveLength}cm)`
      : activeProduct.type === "pant" && customFit.pant
      ? `Bespoke Custom Fit (Waist: ${customFit.pant.waist}cm, Hip: ${customFit.pant.hip}cm, Inseam: ${customFit.pant.inseam}cm)`
      : "Bespoke Custom Measurements"
    : activeProduct.type === "bag"
    ? "Atelier Dimensions (One Size)"
    : `Standard Size: UK ${selectedUkSize}`;

  // WhatsApp order text
  const whatsAppMessage = encodeURIComponent(
    `Hello KUMAR Private Concierge,\n\nI would like to enquire about:\n• Subject: ${activeProduct.title}\n• Reference: ${activeProduct.price}\n• Specification: ${sizeString}\n\nPlease advise on appointment scheduling or private courier delivery.`
  );

  // Email subject and body
  const emailSubject = encodeURIComponent(`Private Client Enquiry: ${activeProduct.title}`);
  const emailBody = encodeURIComponent(
    `Dear KUMAR Maison Advisor,\n\nI wish to enquire about:\n\nSubject: ${activeProduct.title}\nReference: ${activeProduct.price}\nSelected Details: ${sizeString}\n\nClient Name:\nPhone:\nDelivery Country:\n\nThank you.`
  );

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientContact) {
      setSubmittedCallback(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn select-none">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white text-ink w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-lg shadow-2xl border border-line flex flex-col font-sans"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-line/60 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              KUMAR Private Client Concierge
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-bg-soft text-ink-muted hover:text-ink transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Selected Product Summary Card */}
        <div className="p-6 pb-4 bg-bg-soft/60 border-b border-line/40">
          <div className="flex space-x-4 items-center">
            <div className="relative w-16 h-20 rounded bg-white overflow-hidden border border-line flex-shrink-0">
              <Image
                src={activeProduct.image}
                alt={activeProduct.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-accent font-semibold block">
                {activeProduct.category} • REF. KM-{activeProduct.id}
              </span>
              <h3 className="text-base font-medium uppercase tracking-wide text-ink">
                {activeProduct.title}
              </h3>
              <p className="text-sm font-serif font-medium text-ink">
                {activeProduct.price}
              </p>
              <div className="pt-1">
                <span className="inline-block px-2 py-0.5 bg-accent/10 border border-accent/20 rounded text-[11px] font-medium text-accent">
                  {sizeString}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ordering Options */}
        <div className="p-6 space-y-6">
          <div className="space-y-1">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-ink">
              Choose Your Preferred Direct Channel
            </h4>
            <p className="text-xs font-serif text-ink-muted">
              Every KUMAR creation is handled by a dedicated private advisor to confirm your exact fit and guarantee white-glove delivery.
            </p>
          </div>

          <div className="space-y-3">
            {/* 1. WhatsApp Direct Order */}
            <a
              href={`https://wa.me/33142680000?text=${whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white hover:bg-bg-soft border border-line hover:border-accent rounded-lg flex items-center justify-between transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-green-50 text-green-700 rounded-full">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-semibold text-ink group-hover:text-accent transition-colors">
                    Order via WhatsApp Concierge
                  </h5>
                  <p className="text-[11px] font-serif text-ink-muted">
                    Instant chat with your dedicated advisor • Average response: 2 mins
                  </p>
                </div>
              </div>
              <span className="text-xs uppercase tracking-widest text-accent font-medium">
                Connect →
              </span>
            </a>

            {/* 2. Email Private Concierge */}
            <a
              href={`mailto:concierge@kumar.luxury?subject=${emailSubject}&body=${emailBody}`}
              className="group p-4 bg-white hover:bg-bg-soft border border-line hover:border-accent rounded-lg flex items-center justify-between transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-accent/10 text-accent rounded-full">
                  <Mail size={18} />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-semibold text-ink group-hover:text-accent transition-colors">
                    Order via Private Client Email
                  </h5>
                  <p className="text-[11px] font-serif text-ink-muted">
                    concierge@kumar.luxury • Formal order confirmation & wire/card invoice
                  </p>
                </div>
              </div>
              <span className="text-xs uppercase tracking-widest text-accent font-medium">
                Draft →
              </span>
            </a>
          </div>

          {/* 3. Advisor Callback Form */}
          <div className="p-5 border border-line/60 rounded-lg bg-bg-soft/40 space-y-3">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-accent" />
              <h5 className="text-xs uppercase tracking-wider font-semibold text-ink">
                Request Advisor Telephone Callback
              </h5>
            </div>

            {submittedCallback ? (
              <div className="p-4 bg-white border border-accent/30 rounded text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center">
                  <Check size={16} />
                </div>
                <p className="text-xs font-semibold text-ink">Callback Requested</p>
                <p className="text-xs font-serif text-ink-muted">
                  A KUMAR client advisor will contact you within 2 hours at {clientContact}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase font-semibold text-ink-muted block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Sterling"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-line rounded text-xs text-ink focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-semibold text-ink-muted block mb-1">
                      Phone Number or Email
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+44 7700 900077"
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-line rounded text-xs text-ink focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center space-x-2 text-[11px] text-ink-muted">
                    <Shield size={12} className="text-accent" />
                    <span>Strict confidentiality guaranteed</span>
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-ink text-white hover:bg-accent text-xs uppercase tracking-wider font-medium rounded transition-colors"
                  >
                    Request Call
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-bg-soft border-t border-line/60 flex items-center justify-between text-[11px] text-ink-muted">
          <span>Delivered Duty Paid (DDP) Worldwide</span>
          <button
            onClick={onClose}
            className="text-xs text-ink-muted hover:text-ink uppercase tracking-wider font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
