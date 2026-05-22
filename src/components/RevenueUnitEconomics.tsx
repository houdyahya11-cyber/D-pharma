/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Coins, 
  Smartphone, 
  Truck, 
  Crown, 
  Megaphone, 
  Award, 
  Calculator, 
  ArrowRight,
  TrendingUp,
  Percent
} from "lucide-react";
import { REVENUE_STREAMS } from "../data";

export default function RevenueUnitEconomics() {
  const [activeStream, setActiveStream] = useState<string | null>(null);
  
  // Interactive Slider State for Unit Economics Math
  const [orderValue, setOrderValue] = useState<number>(1000); // default 1000 FDJ from pitch deck

  // Calculate dynamic yields
  const commissionPerc = 4; // 4%
  const mobileWalletPerc = 2; // 2%
  const deliveryFee = 400; // 400 FDJ

  const dpharmaCut = Math.round((orderValue * commissionPerc) / 100);
  const mobileCut = Math.round((orderValue * mobileWalletPerc) / 100);
  const totalDpharmaYield = dpharmaCut + deliveryFee;

  const icons: { [key: string]: React.ReactNode } = {
    "coins": <Coins className="w-5 h-5 text-blue-500" />,
    "smartphone": <Smartphone className="w-5 h-5 text-teal-500" />,
    "truck": <Truck className="w-5 h-5 text-amber-500" />,
    "crown": <Crown className="w-5 h-5 text-purple-500" />,
    "megaphone": <Megaphone className="w-5 h-5 text-rose-500" />,
    "award": <Award className="w-5 h-5 text-indigo-500" />
  };

  return (
    <section id="economy" className="py-24 bg-slate-50 border-y border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modèle économique */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-mono font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Modèle Économique & Mathématiques 📊
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Sources de revenus de D-Pharma
          </h2>
          <p className="mt-3 font-sans text-slate-600">
            Une viabilité financière prouvée par une diversification des flux de trésorerie B2C et B2B à Djibouti.
          </p>
        </div>

        {/* 6 Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REVENUE_STREAMS.map((stream) => (
            <div
              key={stream.id}
              className={`bg-white rounded-2xl border-t-4 border-x border-b border-slate-100 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group ${stream.borderColor}`}
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                  {icons[stream.iconName] || <Coins className="w-5 h-5" />}
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-slate-900 text-sm leading-tight">
                    {stream.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                    {stream.description}
                  </p>
                </div>

                {stream.details && stream.details.length > 0 && (
                  <ul className="space-y-1.5 pt-2">
                    {stream.details.map((det, detIdx) => (
                      <li key={detIdx} className="flex items-start space-x-2 text-[11px] text-slate-600 font-semibold">
                        <span className="text-emerald-500 mt-0.5">•</span>
                        <span>{det}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-slate-50 text-[10px] font-mono text-slate-400 font-bold">
                Flux récurrent actif
              </div>
            </div>
          ))}
        </div>

        {/* Total Year 1 Highlights Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 text-white rounded-3xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-left gap-6 mb-16">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 shadow-inner">
              <TrendingUp className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-100 font-bold">
                PROJECTIONS DE VOLUME ANNÉE 1
              </span>
              <h4 className="font-display font-extrabold text-lg text-white mt-0.5">
                Objectif de revenus financiers consolidés
              </h4>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="block text-[10px] font-mono text-blue-100 font-bold uppercase">VALEUR FINANCIÈRE FIXÉE</span>
            <span className="block font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
              2 880 000 FDJ
            </span>
          </div>
        </div>

        {/* SECTION 10 — UNIT ECONOMICS (The Math) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm text-left max-w-4xl mx-auto">
          
          <div className="border-b border-slate-100 pb-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">CALCUL DE RENTABILITÉ UNITAIRE</span>
              <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">
                La Moindre Transaction Rapporte
              </h3>
            </div>
            <div className="flex items-center space-x-1 px-3 py-1 bg-blue-50 text-[#2563EB] rounded-full font-mono text-xs font-bold border border-blue-100">
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulateur Interactif</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Play Slider Left */}
            <div className="md:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-xs text-slate-800 uppercase">Val. Commande :</span>
                  <span className="font-display font-extrabold text-lg text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                    {orderValue.toLocaleString()} FDJ
                  </span>
                </div>
                
                {/* Real interactive HTML Range input */}
                <input 
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={orderValue}
                  onChange={(e) => setOrderValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Min : 500 FDJ</span>
                  <span>Max : 10 000 FDJ</span>
                </div>
              </div>

              {/* Pitch verbatim display box */}
              {orderValue === 1000 && (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-[#10B981] text-xs font-semibold flex items-center gap-2">
                  <span>⭐</span>
                  <span>C'est l'exemple d'école exact de l'investisseur deck (1000 FDJ) !</span>
                </div>
              )}

              <p className="font-sans text-xs text-slate-500 leading-normal font-semibold">
                Faites défiler le curseur pour voir comment varie la rentabilité nette de D-Pharma sur une ordonnance typique à Djibouti.
              </p>

            </div>

            {/* Calculations math flow right visual graph */}
            <div className="md:col-span-6 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 font-mono text-xs relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                  <span>FLUX FINANCIER ÉLABORÉ</span>
                  <span>BASE : {orderValue.toLocaleString()} FDJ</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-sans">Panier client</span>
                  <span className="font-bold text-slate-100">{orderValue.toLocaleString()} FDJ</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-sans">Frais de service (6%)</span>
                  <span className="font-bold text-sky-400">{Math.round(orderValue * 0.06)} FDJ</span>
                </div>

                {/* Sub-breakdown details */}
                <div className="pl-4 border-l border-slate-800 space-y-2 py-0.5">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400 font-sans">├─ 4% D-Pharma (Commission)</span>
                    <span className="text-slate-300">{dpharmaCut} FDJ</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400 font-sans">└─ 2% Opérateur Mobile</span>
                    <span className="text-slate-500">{mobileCut} FDJ</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-[#10B981] font-sans">🚚 Service Livraison fixe</span>
                    <span className="text-emerald-400">+{deliveryFee} FDJ</span>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-sm">
                  <span className="font-sans font-bold text-slate-200">GAIN NET D-PHARMA</span>
                  <span className="font-display font-extrabold text-[#10B981]">
                    {totalDpharmaYield} FDJ
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
