/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  ShieldAlert, 
  Check, 
  X, 
  CheckCircle2, 
  Map, 
  Zap, 
  MessagesSquare, 
  Cpu, 
  CalendarCheck,
  Star
} from "lucide-react";
import { COMPETITIVE_ADVANTAGES, IMPLICIT_COMPARISON } from "../data";

export default function CompetitiveAdvantage() {
  const [activeTab, setActiveTab] = useState<"cards" | "matrix">("matrix");

  const icons: { [key: string]: React.ReactNode } = {
    "check-circle": <CheckCircle2 className="w-6 h-6" />,
    "map": <Map className="w-6 h-6" />,
    "zap": <Zap className="w-6 h-6" />,
    "messages-square": <MessagesSquare className="w-6 h-6" />,
    "cpu": <Cpu className="w-6 h-6" />,
    "calendar-check": <CalendarCheck className="w-6 h-6" />
  };

  return (
    <section id="advantage" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Label and titles */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-mono font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
            Concurrence & Choix
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Notre positionnement concurrentiel
          </h2>
          <p className="mt-4 font-sans text-sm text-slate-600 leading-relaxed font-semibold">
            Contrairement aux plateformes de livraison généralistes comme <strong className="text-slate-900 leading-none">Kikidrop</strong>, D-Pharma est <strong className="text-[#2563EB]">100 % dédiée au secteur pharmaceutique</strong>, ce qui permet d'offrir des services beaucoup plus adaptés aux besoins réels et d'urgence des patients et des pharmacies djiboutiennes.
          </p>

          {/* Toggle view button */}
          <div className="flex items-center justify-center p-1 bg-slate-100 rounded-xl w-fit mx-auto mt-8 border border-slate-200">
            <button
              onClick={() => setActiveTab("matrix")}
              className={`px-4 py-2 text-xs font-display font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === "matrix" ? "bg-blue-600 text-white shadow-md shadow-blue-500/10 font-bold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Tableau de Comparaison Direct
            </button>
            <button
              onClick={() => setActiveTab("cards")}
              className={`px-4 py-2 text-xs font-display font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === "cards" ? "bg-blue-600 text-white shadow-md shadow-blue-500/10 font-bold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ⭐ Nos Avantages Clés (6)
            </button>
          </div>
        </div>

        {/* Matrix comparison table view */}
        {activeTab === "matrix" && (
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 text-slate-900 font-display font-extrabold text-sm sm:text-base">
                      Fonctionnalités de Santé
                    </th>
                    <th className="py-4 px-4 text-center text-[#2563EB] font-display font-extrabold text-sm sm:text-base">
                      💎 Platform-Spec D-Pharma
                    </th>
                    <th className="py-4 px-4 text-center text-slate-400 font-display font-bold text-sm sm:text-base">
                      Plateformes de Livraison de Repas (ex : Kikidrop)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {IMPLICIT_COMPARISON.features.map((feature, idx) => (
                    <tr 
                      key={idx}
                      className="border-b border-slate-100 hover:bg-slate-100/50 transition-colors"
                    >
                      <td className="py-4 px-4 font-sans font-bold text-xs text-slate-800">
                        {feature.name}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex items-center justify-center w-7 h-7 bg-emerald-100 text-[#10B981] rounded-full">
                          <Check className="w-4 h-4" />
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        {feature.generalist ? (
                          <div className="inline-flex items-center justify-center w-7 h-7 bg-emerald-50 text-[#10B981] rounded-full">
                            <Check className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-7 h-7 bg-red-50 text-red-500 rounded-full">
                            <X className="w-4 h-4" />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom info banner */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 bg-blue-50/50 rounded-2xl border border-blue-100/40 text-left gap-4">
              <span className="text-xs font-sans text-slate-700 leading-normal font-semibold">
                🔔 <strong>Le Verdict :</strong> D-Pharma intègre l'intelligence scientifique de diagnostic et des protocoles d'ordonnances sécurisés indisponibles sur les applications traditionnelles.
              </span>
              <span className="text-xs font-display font-bold text-[#2563EB] bg-white px-3 py-1.5 rounded-lg border border-blue-100 shrink-0">
                100% Spécialisé Santé
              </span>
            </div>
          </div>
        )}

        {/* 6 Grid cards view */}
        {activeTab === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPETITIVE_ADVANTAGES.map((adv) => (
              <div 
                key={adv.id}
                className="bg-slate-50 border border-slate-200/40 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-white text-[#2563EB] border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-50 transition-all shadow-xs">
                    {icons[adv.iconName] || <CheckCircle2 className="w-6 h-6" />}
                  </div>
                  
                  <h3 className="font-display font-bold text-slate-900 text-sm leading-tight">
                    {adv.title}
                  </h3>
                  
                  <p className="mt-3 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                    {adv.description}
                  </p>

                  {/* Bullet points listing under Advantage 5 & 6 if exist */}
                  {adv.bullets && adv.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {adv.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-2 text-[11px] text-slate-600 font-semibold font-sans">
                          <span className="text-[#10B981] font-bold mt-0.5">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/50 text-[10px] font-mono text-slate-400 font-bold italic">
                  Avantage D-Pharma d'excellence
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
