/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Search, ShoppingBag, Truck, HeartHandshake, Check } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../data";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const icons = [
    <Search className="w-6 h-6" />,
    <ShoppingBag className="w-6 h-6" />,
    <Truck className="w-6 h-6" />,
    <HeartHandshake className="w-6 h-6" />
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white scroll-mt-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            Étape par étape
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-100 tracking-tight">
            Comment fonctionne D-Pharma ?
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
            Un processus fluide et sécurisé pour gérer de bout en bout l'approvisionnement thérapeutique de votre foyer à l'aide de l'IA.
          </p>
        </div>

        {/* Horizontal Timeline Connector for Desktop */}
        <div className="hidden lg:relative lg:block mb-10">
          
          {/* Background Connect Line (Fading from blue to teal) */}
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] -translate-y-1/2 h-1 bg-slate-800 rounded-full z-0">
            {/* Filled Animated Line part */}
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400 rounded-full transition-all duration-700 ease-in-out"
              style={{ width: `${(activeStep / (HOW_IT_WORKS_STEPS.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-4 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isActive = idx <= activeStep;
              const isCurrent = idx === activeStep;
              return (
                <div 
                  key={step.stepNumber}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Step Circular Node */}
                  <div 
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-md ${
                      isCurrent
                        ? "bg-blue-600 border-blue-400 scale-110 shadow-lg shadow-blue-500/40 text-white"
                        : isActive
                        ? "bg-slate-950 border-[#10B981] text-[#10B981]"
                        : "bg-slate-950 border-slate-700 text-slate-500 group-hover:border-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {isActive && !isCurrent ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      icons[idx]
                    )}
                  </div>

                  {/* Step text number */}
                  <span className="mt-4 font-display font-bold text-xs tracking-widest text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                    ÉTAPE {step.stepNumber}
                  </span>

                  <h3 className={`mt-2 font-display font-extrabold text-sm transition-colors ${isCurrent ? "text-white" : "text-slate-300"}`}>
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>

        </div>

        {/* Desktop Step Narrative Detail Box */}
        <div className="hidden lg:block bg-slate-950 rounded-3xl p-8 border border-slate-800 shadow-xl max-w-4xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-1.5 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center font-display font-bold text-lg select-none">
                {HOW_IT_WORKS_STEPS[activeStep].stepNumber}
              </div>
            </div>
            <div className="md:col-span-10 text-left">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Action du Patient
              </span>
              <h4 className="font-display font-extrabold text-xl text-white mt-1">
                {HOW_IT_WORKS_STEPS[activeStep].title} — {activeStep === 0 ? "Trouvez vos médicaments" : activeStep === 1 ? "Ajoutez au panier" : activeStep === 2 ? "Livraison à domicile" : "Ne manquez jamais une dose"}
              </h4>
              <p className="font-sans text-slate-300 text-sm leading-relaxed mt-2.5">
                {HOW_IT_WORKS_STEPS[activeStep].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Steps list */}
        <div className="lg:hidden space-y-8">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div 
              key={step.stepNumber}
              className="bg-slate-950 rounded-2xl p-6 border border-slate-800 text-left relative flex flex-col justify-between"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold">
                  {icons[idx]}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-widest uppercase">
                    ÉTAPE {step.stepNumber}
                  </span>
                  <h3 className="font-display font-extrabold text-white text-base">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="font-sans text-xs text-slate-400 leading-relaxed font-semibold">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
