/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TrendingUp, Coins, HelpCircle, BarChart3, Target } from "lucide-react";
import { FINANCIAL_PROJECTIONS } from "../data";

export default function FinancialProjections() {
  const [activeQuarter, setActiveQuarter] = useState<string>("T4");

  const totalRevenue = 2880000;

  // Max value to scale heights
  const maxVal = 1656000;

  return (
    <section id="projections" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-mono font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
            Croissance Financière 📈
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Projections Financières Année 1 (D-Pharma)
          </h2>
          <p className="mt-2 text-sm font-mono text-purple-600 font-bold uppercase">
            Gain par transaction moyen estimé : 440 FDJ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative list detailing quarters */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display font-extrabold text-[#2563EB] text-base uppercase tracking-wider flex items-center gap-2">
              <Target className="w-5 h-5 text-[#2563EB]" />
              Objectifs de développement par Trimestre :
            </h3>

            <div className="space-y-3">
              {FINANCIAL_PROJECTIONS.map((proj) => {
                const isActive = activeQuarter === proj.quarter;
                return (
                  <div
                    key={proj.quarter}
                    onMouseEnter={() => setActiveQuarter(proj.quarter)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                      isActive 
                        ? "bg-blue-50/50 border-blue-400 shadow-sm" 
                        : "bg-slate-50 border-slate-100 hover:border-blue-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-slate-900">
                        Trimestre {proj.quarter} — {proj.label}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#10B981]">
                        {proj.value.toLocaleString()} FDJ
                      </span>
                    </div>
                    
                    <span className="block text-[10px] font-mono font-bold text-[#2563EB] mt-1.5 uppercase">
                      Objectif : {proj.transactionsPerMonth} transactions / mois
                    </span>

                    <p className="block text-slate-500 font-sans text-xs mt-1 leading-normal font-semibold">
                      {proj.strategy}
                    </p>

                    {proj.mix && (
                      <span className="block text-[10px] text-purple-600 font-semibold font-mono mt-1.5">
                        📦 {proj.mix}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Total year 1 summation footer card */}
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">Somme consolidée</span>
                <span className="font-display font-extrabold text-sm text-slate-800">CUMUL TRIMESTRIEL TOTAL</span>
              </div>
              <span className="text-sm font-display font-extrabold text-[#10B981] bg-[#10B981]/10 px-3 py-1.5 rounded-lg border border-[#10B981]/20">
                {totalRevenue.toLocaleString()} FDJ
              </span>
            </div>

          </div>

          {/* Right Block: Fully customized interactive SVG/CSS bar graphics */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 md:p-8 border border-slate-800 relative text-left select-none overflow-hidden min-h-[440px] flex flex-col justify-between">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#10B981] font-bold uppercase">GRAPHIQUER TECHNIQUE</span>
                  <h4 className="font-display font-extrabold text-sm text-slate-200">Progression Logistique Année 1</h4>
                </div>
                <div className="flex text-amber-500 gap-1 font-mono text-[10px] items-center bg-amber-500/10 border border-amber-500/15 p-1 rounded px-2">
                  <Coins className="w-3.5 h-3.5 fill-amber-500" />
                  <span>FDJ</span>
                </div>
              </div>

              {/* Graphic Columns Grid Container */}
              <div className="h-60 mt-4 flex items-end justify-between px-4 pb-2 border-b border-slate-800 relative">
                
                {/* Hockey-stick upward trends indicator lines */}
                <div className="absolute top-[25%] left-[20%] right-[20%] h-0.5 border-t border-dashed border-emerald-500/30"></div>
                
                {FINANCIAL_PROJECTIONS.map((proj) => {
                  const percentHeight = Math.max(15, Math.round((proj.value / maxVal) * 100));
                  const isHovered = activeQuarter === proj.quarter;
                  return (
                    <div 
                      key={proj.quarter} 
                      className="flex flex-col items-center flex-1 cursor-pointer group"
                      onMouseEnter={() => setActiveQuarter(proj.quarter)}
                    >
                      {/* Bar and dynamic values */}
                      <span className={`text-[10px] font-mono font-bold transition-all ${isHovered ? "text-emerald-400 font-extrabold" : "text-slate-500"}`}>
                        {(proj.value / 1000).toFixed(0)} K
                      </span>

                      <div 
                        className={`w-10 sm:w-12 rounded-t-lg transition-all duration-300 mt-2 ${
                          isHovered 
                            ? "bg-gradient-to-t from-[#2563EB] to-[#10B981] shadow-lg shadow-blue-500/20" 
                            : "bg-slate-800 hover:bg-slate-700"
                        }`}
                        style={{ height: `${percentHeight * 1.5}px` }}
                      ></div>

                      <span className={`block font-display font-bold text-xs mt-3 ${isHovered ? "text-white" : "text-slate-400"}`}>
                        {proj.quarter}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Quick Summary Active Details inside bar block */}
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1 text-xs">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-slate-500 uppercase">PROJECTION COMPLÈTE ({activeQuarter})</span>
                  <span className="text-slate-300 font-bold">{FINANCIAL_PROJECTIONS.find(p => p.quarter === activeQuarter)?.label}</span>
                </div>
                
                <div className="flex justify-between font-display font-extrabold text-slate-200 pt-1">
                  <span>Gain projeté :</span>
                  <span className="text-[#10B981]">
                    {FINANCIAL_PROJECTIONS.find(p => p.quarter === activeQuarter)?.value.toLocaleString()} FDJ
                  </span>
                </div>

                <div className="text-[11px] font-sans text-slate-400 py-1 font-semibold leading-relaxed">
                  " {FINANCIAL_PROJECTIONS.find(p => p.quarter === activeQuarter)?.strategy} "
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
