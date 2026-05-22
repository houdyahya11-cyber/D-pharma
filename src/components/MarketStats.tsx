/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Map, Users, Globe, Smartphone, Landmark, Check } from "lucide-react";
import { MARKET_STATS } from "../data";

export default function MarketStats() {
  const [activeRegion, setActiveRegion] = useState("Djibouti-Ville");

  const regionalStats: { [key: string]: { coverage: string; pharmacies: number; leadTime: string } } = {
    "Djibouti-Ville": { coverage: "Excellente (98%)", pharmacies: 32, leadTime: "15-30 mins" },
    "Balbala": { coverage: "Haute (90%)", pharmacies: 18, leadTime: "25-45 mins" },
    "Arta": { coverage: "Moyenne (65%)", pharmacies: 4, leadTime: "45-60 mins" },
    "Tadjourah": { coverage: "Planifiée (Phase 2)", pharmacies: 2, leadTime: "Suivi Routier" },
    "Obock": { coverage: "Planifiée (Phase 2)", pharmacies: 1, leadTime: "Suivi Maritime" },
    "Dikhil/Ali-Sabieh": { coverage: "Moyenne (55%)", pharmacies: 3, leadTime: "60 mins" }
  };

  return (
    <section id="market" className="py-24 bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 text-white scroll-mt-20 overflow-hidden relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            Validation Marché 📈
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-100 tracking-tight leading-none">
            Un marché en forte croissance à Djibouti
          </h2>
          <p className="mt-4 font-sans text-sm text-slate-300 leading-relaxed font-semibold">
            "Ces chiffres montrent que Djibouti possède un environnement favorable pour les services numériques de santé."
          </p>
        </div>

        {/* Outer container splitting Stats and SVG Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Stats Dashboard Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-lg text-[#10B981] mb-2 uppercase tracking-wide">
              Indicateurs technologiques clés à Djibouti :
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Stat 1: Population */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-[#2563EB] transition-colors">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>
                <Users className="w-5 h-5 text-blue-400 mb-4" />
                <span className="block font-display font-extrabold text-3xl text-white tracking-tight">
                  1,07 Millions
                </span>
                <span className="block text-xs font-bold text-slate-200 mt-2">
                  Population totale
                </span>
                <p className="block text-[10px] text-slate-400 font-sans mt-1">
                  Djibouti compte environ 1,07 million d'habitants avec une forte densification urbaine.
                </p>
              </div>

              {/* Stat 2: Internet Users */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500 transition-colors">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full pointer-events-none"></div>
                <Globe className="w-5 h-5 text-[#10B981] mb-4" />
                <span className="block font-display font-extrabold text-3xl text-emerald-400 tracking-tight">
                  744 000+
                </span>
                <span className="block text-xs font-bold text-slate-200 mt-2">
                  Internautes connectés
                </span>
                <p className="block text-[10px] text-slate-400 font-sans mt-1">
                  Environ 744 000 utilisateurs actifs d'internet à Djibouti, soit un taux de pénétration record.
                </p>
              </div>

              {/* Stat 3: Mobiles */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500 transition-colors">
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-bl-full pointer-events-none"></div>
                <Smartphone className="w-5 h-5 text-purple-400 mb-4" />
                <span className="block font-display font-extrabold text-3xl text-purple-400 tracking-tight">
                  70%+
                </span>
                <span className="block text-xs font-bold text-slate-200 mt-2">
                  Utilisateurs mobiles
                </span>
                <p className="block text-[10px] text-slate-400 font-sans mt-1">
                  Plus de 70% de la population utilise quotidiennement un smartphone pour naviguer.
                </p>
              </div>

              {/* Stat 4: Mobile Money */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-amber-500 transition-colors">
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>
                <Landmark className="w-5 h-5 text-amber-500 mb-4" />
                <span className="block font-display font-extrabold text-3xl text-amber-400 tracking-tight">
                  200K–300K
                </span>
                <span className="block text-xs font-bold text-slate-200 mt-2">
                  Utilisateurs de Mobile Money
                </span>
                <p className="block text-[10px] text-slate-400 font-sans mt-1">
                  Entre 200 000 et 300 000 utilisateurs actifs de paiement mobile (ex : D-Money, Waafi).
                </p>
              </div>

            </div>

          </div>

          {/* Right: Technical Djibouti interactive regional map outline with SVG */}
          <div className="lg:col-span-6 bg-slate-950/80 rounded-3xl p-6 border border-slate-800 flex flex-col items-stretch justify-between relative min-h-[460px]">
            
            {/* Soft grid overlay inside math container */}
            <div className="absolute inset-0 bg-[#1e293b]/10 bg-[radial-gradient(#1e293b_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none"></div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#10B981] font-bold uppercase">COUVERTURE LOGISTIQUE D-PHARMA</span>
                  <h4 className="font-display font-extrabold text-sm text-slate-200">Réseau d'Officines National</h4>
                </div>
                <span className="text-[10px] bg-[#2563EB]/10 text-blue-400 border border-[#2563EB]/25 px-2 py-0.5 rounded font-mono font-medium">Djibouti Map v1.2</span>
              </div>

              {/* Real geographic Map of Djibouti framed beautifully with active indicator nodes */}
              <div className="flex justify-center items-center py-4 relative h-64 sm:h-72 my-2 rounded-2xl overflow-hidden bg-slate-900/40 border border-slate-800 select-none">
                
                {/* Real Djibouti Map underlay with zoom effect */}
                <img 
                  src="/carte de djibouti.jpeg" 
                  alt="Carte de Djibouti" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-lighten transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized outline if jpeg is somehow blocked
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Radar Sweep Effect scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-full w-full animate-pulse-slow pointer-events-none"></div>

                {/* Djibouti-Ville glowing tracker node */}
                <div className="absolute top-[32%] right-[22%] z-30 flex flex-col items-center">
                  <span className="flex h-4 w-4 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 shadow-md"></span>
                  </span>
                  <span className="text-[9px] bg-slate-950 border border-slate-700 px-2 py-0.5 rounded shadow-md mt-1 font-mono text-slate-100 font-bold whitespace-nowrap">
                    CENTRAL HUB
                  </span>
                </div>

                {/* Balbala Node */}
                <div className="absolute top-[48%] right-[32%] z-20 flex flex-col items-center">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                  </span>
                  <span className="text-[8px] bg-slate-950 border border-slate-800 px-1.5 py-0.5 rounded text-white font-mono whitespace-nowrap">
                    Balbala (Actif)
                  </span>
                </div>

                {/* Tadjourah Indicator */}
                <div className="absolute top-[20%] left-[30%] z-20 flex flex-col items-center">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                  </span>
                  <span className="text-[7.5px] bg-slate-950/80 border border-slate-800/80 px-1 py-0.5 rounded text-slate-300 font-mono whitespace-nowrap scale-90">
                    Tadjourah (Prévu)
                  </span>
                </div>

              </div>
              
              {/* Regional interactive selector details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 font-mono text-[10px]">
                {Object.keys(regionalStats).map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setActiveRegion(reg)}
                    className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                      activeRegion === reg 
                        ? "bg-slate-900 border-blue-500 text-white font-bold" 
                        : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <span className="block text-[8px] text-slate-500 uppercase">RÉGION</span>
                    <span className="block truncate">{reg}</span>
                  </button>
                ))}
              </div>

              {/* Regional active status bar */}
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="block text-[8px] text-slate-500 uppercase font-mono">STATUT DU SECTEUR ({activeRegion})</span>
                  <span className="font-display font-medium text-slate-300">Couverture : {regionalStats[activeRegion].coverage}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[8px] text-slate-500 uppercase font-mono">DÉLAI DE LIVRAISON</span>
                  <span className="font-sans font-bold text-emerald-400">{regionalStats[activeRegion].leadTime}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
