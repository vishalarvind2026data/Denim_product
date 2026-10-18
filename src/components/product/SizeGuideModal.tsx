"use client";

import React, { useState } from "react";
import { X, ChevronDown, Check, Sliders, RotateCcw } from "lucide-react";
import {
  ProductType,
  JACKET_SIZES,
  PANT_SIZES,
  JacketMeasurements,
  PantMeasurements,
} from "@/data/products";

export interface CustomFitState {
  isCustom: boolean;
  jacket?: JacketMeasurements;
  pant?: PantMeasurements;
  unit: "cm" | "in";
}

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  productType: ProductType;
  selectedUkSize: number;
  onSelectSize: (uk: number) => void;
  onApplyCustomFit: (customFit: CustomFitState) => void;
  currentCustomFit?: CustomFitState;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  productType,
  selectedUkSize,
  onSelectSize,
  onApplyCustomFit,
  currentCustomFit,
}) => {
  const [unit, setUnit] = useState<"cm" | "in">("cm");
  const [activeTab, setActiveTab] = useState<"product" | "body">("product");
  const [isHowToOpen, setIsHowToOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(currentCustomFit?.isCustom || false);

  // Initial custom measurements from selected size or default
  const defaultJacketRow = JACKET_SIZES.find((r) => r.uk === selectedUkSize) || JACKET_SIZES[2];
  const defaultPantRow = PANT_SIZES.find((r) => r.uk === selectedUkSize) || PANT_SIZES[2];

  const [customJacket, setCustomJacket] = useState<JacketMeasurements>(
    currentCustomFit?.jacket || { ...defaultJacketRow.measurements }
  );

  const [customPant, setCustomPant] = useState<PantMeasurements>(
    currentCustomFit?.pant || { ...defaultPantRow.measurements }
  );

  if (!isOpen) return null;

  // Conversion helpers
  const formatVal = (valCm: number) => {
    if (unit === "cm") return valCm.toFixed(1);
    return (valCm / 2.54).toFixed(1);
  };

  const handleApplyCustom = () => {
    onApplyCustomFit({
      isCustom: true,
      jacket: productType === "jacket" ? customJacket : undefined,
      pant: productType === "pant" ? customPant : undefined,
      unit,
    });
    onClose();
  };

  const handleResetToStandard = () => {
    setCustomJacket({ ...defaultJacketRow.measurements });
    setCustomPant({ ...defaultPantRow.measurements });
    setIsCustomizing(false);
    onApplyCustomFit({ isCustom: false, unit });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn select-none">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white text-ink w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-lg shadow-2xl border border-line flex flex-col font-sans"
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 bg-white z-20 px-6 pt-5 pb-4 border-b border-line/60 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-medium tracking-wide text-ink text-center w-full">
            Size Guide
          </h2>
          <button
            onClick={onClose}
            aria-label="Close size guide"
            className="absolute right-5 p-1.5 rounded-full hover:bg-bg-soft text-ink-muted hover:text-ink transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Controls Bar: Switch to UK Size & Unit Switcher */}
        <div className="px-6 py-3.5 border-b border-line/40 flex items-center justify-between bg-white text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase tracking-wider text-ink-muted font-medium">
              Switch to
            </span>
            <div className="inline-flex items-center px-3 py-1 bg-bg-soft border border-line rounded text-xs font-medium text-ink">
              <span>UK Size</span>
              <ChevronDown size={14} className="ml-1 text-ink-muted" />
            </div>
          </div>

          {/* Unit Toggle cm | in */}
          <div className="flex items-center p-0.5 bg-bg-soft border border-line rounded-full">
            <button
              onClick={() => setUnit("cm")}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                unit === "cm"
                  ? "bg-ink text-white shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              cm
            </button>
            <button
              onClick={() => setUnit("in")}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                unit === "in"
                  ? "bg-ink text-white shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              in
            </button>
          </div>
        </div>

        {/* Tab Headers: Product Chart / Body Chart */}
        <div className="px-6 pt-2 border-b border-line/40 flex space-x-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab("product")}
            className={`pb-2.5 transition-colors relative ${
              activeTab === "product"
                ? "text-ink font-semibold border-b-2 border-ink"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Product Chart
          </button>
          <button
            onClick={() => setActiveTab("body")}
            className={`pb-2.5 transition-colors relative ${
              activeTab === "body"
                ? "text-ink font-semibold border-b-2 border-ink"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            Body Chart
          </button>

          {/* Bespoke Customizer Mode Toggle */}
          <button
            onClick={() => setIsCustomizing(!isCustomizing)}
            className={`ml-auto pb-2.5 flex items-center space-x-1.5 text-xs font-medium transition-colors ${
              isCustomizing ? "text-accent font-semibold" : "text-ink-muted hover:text-accent"
            }`}
          >
            <Sliders size={13} />
            <span>{isCustomizing ? "Customizer Active" : "Customize Fit"}</span>
          </button>
        </div>

        {/* Body Container */}
        <div className="p-6 space-y-6">
          {/* Customizer Banner If Active */}
          {isCustomizing && (
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                    Bespoke Masterji Measurement Customizer
                  </span>
                </div>
                <button
                  onClick={handleResetToStandard}
                  className="text-[11px] text-ink-muted hover:text-accent flex items-center space-x-1"
                >
                  <RotateCcw size={11} />
                  <span>Reset to standard</span>
                </button>
              </div>
              <p className="text-xs text-ink-muted font-serif">
                Modify each measurement to your exact body dimensions. Our masterji tailors will hand-adjust your garment before dispatch.
              </p>

              {/* Editable Fields for Jackets */}
              {productType === "jacket" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  <div>
                    <label className="text-[10px] uppercase font-semibold text-ink-muted block mb-1">
                      Shoulder ({unit})
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={unit === "cm" ? customJacket.shoulder : (customJacket.shoulder / 2.54).toFixed(1)}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setCustomJacket({
                          ...customJacket,
                          shoulder: unit === "cm" ? val : parseFloat((val * 2.54).toFixed(1)),
                        });
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-accent/40 rounded text-xs text-ink font-medium focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-semibold text-ink-muted block mb-1">
                      Bust / Chest ({unit})
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={unit === "cm" ? customJacket.bust : (customJacket.bust / 2.54).toFixed(1)}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setCustomJacket({
                          ...customJacket,
                          bust: unit === "cm" ? val : parseFloat((val * 2.54).toFixed(1)),
                        });
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-accent/40 rounded text-xs text-ink font-medium focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-semibold text-ink-muted block mb-1">
                      Length ({unit})
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={unit === "cm" ? customJacket.length : (customJacket.length / 2.54).toFixed(1)}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setCustomJacket({
                          ...customJacket,
                          length: unit === "cm" ? val : parseFloat((val * 2.54).toFixed(1)),
                        });
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-accent/40 rounded text-xs text-ink font-medium focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-semibold text-ink-muted block mb-1">
                      Sleeve Length ({unit})
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={unit === "cm" ? customJacket.sleeveLength : (customJacket.sleeveLength / 2.54).toFixed(1)}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setCustomJacket({
                          ...customJacket,
                          sleeveLength: unit === "cm" ? val : parseFloat((val * 2.54).toFixed(1)),
                        });
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-accent/40 rounded text-xs text-ink font-medium focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
              )}

              {/* Editable Fields for Pants */}
              {productType === "pant" && (
                <div className="grid grid-cols-3 gap-3 pt-1">
                  <div>
                    <label className="text-[10px] uppercase font-semibold text-ink-muted block mb-1">
                      Waist Size ({unit})
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={unit === "cm" ? customPant.waist : (customPant.waist / 2.54).toFixed(1)}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setCustomPant({
                          ...customPant,
                          waist: unit === "cm" ? val : parseFloat((val * 2.54).toFixed(1)),
                        });
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-accent/40 rounded text-xs text-ink font-medium focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-semibold text-ink-muted block mb-1">
                      Hip Size ({unit})
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={unit === "cm" ? customPant.hip : (customPant.hip / 2.54).toFixed(1)}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setCustomPant({
                          ...customPant,
                          hip: unit === "cm" ? val : parseFloat((val * 2.54).toFixed(1)),
                        });
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-accent/40 rounded text-xs text-ink font-medium focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-semibold text-ink-muted block mb-1">
                      Inseam ({unit})
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={unit === "cm" ? customPant.inseam : (customPant.inseam / 2.54).toFixed(1)}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setCustomPant({
                          ...customPant,
                          inseam: unit === "cm" ? val : parseFloat((val * 2.54).toFixed(1)),
                        });
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-accent/40 rounded text-xs text-ink font-medium focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={handleApplyCustom}
                className="w-full py-2 bg-accent text-white text-xs uppercase tracking-wider font-medium rounded hover:bg-accent/90 transition-colors"
              >
                Apply Custom Measurements To Order
              </button>
            </div>
          )}

          {/* Sizing Table (Exactly matching user's screenshots) */}
          <div className="overflow-x-auto border border-line rounded">
            {productType === "jacket" ? (
              <table className="w-full text-center text-xs border-collapse">
                <thead>
                  <tr className="bg-bg-soft/80 border-b border-line text-ink font-medium">
                    <th className="py-2.5 px-3">UK</th>
                    <th className="py-2.5 px-3">Size</th>
                    <th className="py-2.5 px-3">Shoulder</th>
                    <th className="py-2.5 px-3">Bust</th>
                    <th className="py-2.5 px-3">Length</th>
                    <th className="py-2.5 px-3">Sleeve Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  {JACKET_SIZES.map((row) => {
                    const isSelected = row.uk === selectedUkSize && !isCustomizing;
                    return (
                      <tr
                        key={row.uk}
                        onClick={() => {
                          onSelectSize(row.uk);
                          setIsCustomizing(false);
                          setCustomJacket({ ...row.measurements });
                        }}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? "bg-accent/10 font-semibold text-ink" : "hover:bg-bg-soft/60 text-ink/90"
                        }`}
                      >
                        <td className="py-3 px-3 font-semibold">{row.uk}</td>
                        <td className="py-3 px-3 font-normal text-ink-muted">{row.size}</td>
                        <td className="py-3 px-3">{formatVal(row.measurements.shoulder)}</td>
                        <td className="py-3 px-3">{formatVal(row.measurements.bust)}</td>
                        <td className="py-3 px-3">{formatVal(row.measurements.length)}</td>
                        <td className="py-3 px-3">{formatVal(row.measurements.sleeveLength)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : productType === "pant" ? (
              <table className="w-full text-center text-xs border-collapse">
                <thead>
                  <tr className="bg-bg-soft/80 border-b border-line text-ink font-medium">
                    <th className="py-2.5 px-3">UK</th>
                    <th className="py-2.5 px-3">Size</th>
                    <th className="py-2.5 px-3">Waist Size</th>
                    <th className="py-2.5 px-3">Hip Size</th>
                    <th className="py-2.5 px-3">Inseam</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  {PANT_SIZES.map((row) => {
                    const isSelected = row.uk === selectedUkSize && !isCustomizing;
                    return (
                      <tr
                        key={row.uk}
                        onClick={() => {
                          onSelectSize(row.uk);
                          setIsCustomizing(false);
                          setCustomPant({ ...row.measurements });
                        }}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? "bg-accent/10 font-semibold text-ink" : "hover:bg-bg-soft/60 text-ink/90"
                        }`}
                      >
                        <td className="py-3 px-3 font-semibold">{row.uk}</td>
                        <td className="py-3 px-3 font-normal text-ink-muted">{row.size}</td>
                        <td className="py-3 px-3">{formatVal(row.measurements.waist)}</td>
                        <td className="py-3 px-3">{formatVal(row.measurements.hip)}</td>
                        <td className="py-3 px-3">{formatVal(row.measurements.inseam)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="p-6 text-center text-xs text-ink-muted font-serif">
                <p className="font-medium text-ink mb-1">DRAUPADI I — House Holdall Specifications</p>
                <p>Width: 42 cm • Height: 38 cm • Depth: 14 cm • Handle Drop: 26 cm</p>
              </div>
            )}
          </div>

          {/* Measuring Disclaimers */}
          <p className="text-[11px] text-ink-muted italic">
            *This data was obtained from manually measuring the product, it may be off by 1-2 CM.
          </p>

          {/* Accordion: How to measure the product's size? */}
          <div className="border-t border-line/50 pt-3">
            <button
              onClick={() => setIsHowToOpen(!isHowToOpen)}
              className="w-full flex items-center justify-between text-xs font-medium text-ink hover:text-accent transition-colors py-1"
            >
              <span>How to measure the product&apos;s size?</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${isHowToOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isHowToOpen && (
              <div className="pt-3 space-y-2 text-xs font-serif text-ink-muted leading-relaxed pl-1 animate-fadeIn">
                {productType === "jacket" ? (
                  <>
                    <p><strong>1. Shoulder:</strong> Measure from the edge of the shoulder socket across to the opposite shoulder edge.</p>
                    <p><strong>2. Bust / Chest:</strong> Measure across the fullest part of the chest from armpit seam to armpit seam.</p>
                    <p><strong>3. Length:</strong> Measure from the highest point of the shoulder seam down to the bottom hem.</p>
                    <p><strong>4. Sleeve Length:</strong> Measure from shoulder seam down along the outer arm to the end of the cuff.</p>
                  </>
                ) : (
                  <>
                    <p><strong>1. Waist Size:</strong> Measure straight across the waistband, then double the measurement.</p>
                    <p><strong>2. Hip Size:</strong> Measure across the widest point of the hip area, then double the measurement.</p>
                    <p><strong>3. Inseam:</strong> Measure from the crotch seam straight down the inside leg to the bottom hem.</p>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Fit Attributes: Fit Type and Stretch (Matching Screenshot) */}
          <div className="space-y-4 pt-3 border-t border-line/50">
            {/* Fit Type Scale */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-semibold text-ink">Fit Type</span>
                <span className="text-ink-muted">Regular</span>
              </div>
              <div className="relative flex items-center justify-between text-[11px] text-ink-muted py-1">
                <span>Skinny</span>
                <span>Regular</span>
                <span>Oversized</span>
                {/* Visual Track */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-line/80 -z-10" />
                {/* Active Indicator Tick at Regular (center) */}
                <span className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-4 h-1.5 bg-ink rounded-full" />
              </div>
            </div>

            {/* Stretch Scale */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-semibold text-ink">Stretch</span>
                <span className="text-ink-muted">Non-Stretch (Rigid)</span>
              </div>
              <div className="relative flex items-center justify-between text-[11px] text-ink-muted py-1">
                <span>Non</span>
                <span>Slight</span>
                <span>Medium</span>
                <span>High</span>
                {/* Visual Track */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-line/80 -z-10" />
                {/* Active Indicator Tick at Non (leftmost) */}
                <span className="absolute top-1/2 left-[3%] -translate-y-1/2 w-4 h-1.5 bg-ink rounded-full" />
              </div>
            </div>
          </div>

          {/* Model is wearing Card (Matching Screenshot) */}
          <div className="p-3.5 bg-bg-soft/70 border border-line/40 rounded flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center font-serif text-accent text-sm font-semibold">
              KM
            </div>
            <div className="text-xs">
              <p className="font-semibold text-ink">Model is wearing: UK 38 (M)</p>
              <p className="text-ink-muted font-serif text-[11px] mt-0.5">
                Height: 183.0 cm • Bust: 98.0 cm • Waist: 95.0 cm • Hips: 95.0 cm
              </p>
            </div>
          </div>

          {/* How Buyers Reviewed The Fit (Matching Screenshot) */}
          <div className="border-t border-line/50 pt-3">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-semibold text-ink">How Buyers Reviewed The Fit</span>
            </div>
            <div className="flex items-center space-x-4 text-xs">
              <span className="text-ink-muted">Small : 7%</span>
              <span className="text-ink font-semibold underline underline-offset-4 decoration-accent">
                True to Size : 90%
              </span>
              <span className="text-ink-muted">Large : 3%</span>
            </div>
          </div>
        </div>

        {/* Modal Footer with Confirmation Button */}
        <div className="p-4 px-6 bg-bg-soft/60 border-t border-line/60 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-ink-muted hover:text-ink font-medium uppercase tracking-wider"
          >
            Close
          </button>

          <button
            onClick={() => {
              if (isCustomizing) {
                handleApplyCustom();
              } else {
                onClose();
              }
            }}
            className="px-6 py-2.5 bg-ink text-white text-xs uppercase tracking-widest font-medium rounded hover:bg-accent transition-colors flex items-center space-x-2"
          >
            <Check size={14} />
            <span>Select & Confirm</span>
          </button>
        </div>
      </div>
    </div>
  );
};
