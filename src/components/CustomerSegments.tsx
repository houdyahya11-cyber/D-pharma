/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Users, Heart, Briefcase, Hospital, ArrowRight, X } from "lucide-react";
import { CUSTOMER_SEGMENTS } from "../data";

interface CustomerSegmentsProps {
  onOpenWaitlist: (segmentName?: string) => void;
  onNavigateToDemo: (demoTab: string) => void;
}

export default function CustomerSegments({ onOpenWaitlist, onNavigateToDemo }: CustomerSegmentsProps) {
  const [activePersonaInfo, setActivePersonaInfo] = useState<string | null>(null);

  const icons: { [key: string]: React.ReactNode } = {
    "users": <Users className="w-6 h-6" />,
    "heart": <Heart className="w-6 h-6" />,
    "briefcase": <Briefcase className="w-6 h-6" />,
    "hospital": <Hospital className="w-6 h-6" />
  };

  const getBorderColorClass = (id: string) => {
    switch (id) {
      case "seg-1": return "group-hover:border-blue-500 group-hover:bg-blue-50/10";
      case "seg-2": return "group-hover:border-emerald-500 group-hover:bg-emerald-50/10";
      case "seg-3": return "group-hover:border-amber-500 group-hover:bg-amber-50/10";
      case "seg-4": return "group-hover:border-purple-500 group-hover:bg-purple-50/10";
      default: return "";
    }
  };

  const getIconColorClass = (id: string) => {
    switch (id) {
      case "seg-1": return "bg-blue-500 text-white";
      case "seg-2": return "bg-emerald-500 text-white";
      case "seg-3": return "bg-amber-500 text-white";
      case "seg-4": return "bg-purple-500 text-white";
      default: return "";
    }
  };

  const getButtonColorClass = (id: string) => {
    switch (id) {
      case "seg-1": return "bg-blue-600 hover:bg-blue-700 text-white";
      case "seg-2": return "bg-emerald-600 hover:bg-emerald-700 text-white";
      case "seg-3": return "bg-amber-600 hover:bg-amber-750 text-white";
      case "seg-4": return "bg-purple-600 hover:bg-purple-700 text-white";
      default: return "";
    }
  };

  const handleSegmentAction = (id: string, name: string) => {
    if (id === "seg-4") {
      // Partner signup waitlist B2B
      onOpenWaitlist("Pharmacie Partenaire");
    } else if (id === "seg-1") {
      // Go to search demo
      onNavigateToDemo("meds");
    } else if (id === "seg-2") {
      // Go to delivery details
      onNavigateToDemo("map");
    } else {
      // Go to order checkout schedule
      onOpenWaitlist(`Patient - ${name}`);
    }
  };

  return (
    <section id="customer-segments" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-mono font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
            Secteurs de Demande
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Pour qui est D-Pharma ?
          </h2>
          <p className="mt-3 font-sans text-slate-600">
            D-Pharma s'adresse à tous les acteurs du parcours thérapeutique à Djibouti. 
            Découvrez comment notre technologie apporte de la valeur à votre profil spécifique.
          </p>
        </div>

        {/* 4 Persona Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_SEGMENTS.map((segment) => (
            <div 
              key={segment.id}
              className={`bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between ${getBorderColorClass(segment.id)}`}
            >
              <div>
                {/* Persona head representative visual element */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform ${getIconColorClass(segment.id)}`}>
                  {icons[segment.iconName]}
                </div>

                <h3 className="font-display font-extrabold text-slate-900 text-sm leading-tight">
                  {segment.title}
                </h3>

                <p className="mt-4 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                  {segment.description}
                </p>
              </div>

              {/* Persona unique button CTA */}
              <div className="mt-8 pt-4 border-t border-slate-200/40">
                <button
                  onClick={() => handleSegmentAction(segment.id, segment.title)}
                  className={`w-full py-2.5 px-4 font-display font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${getButtonColorClass(segment.id)}`}
                >
                  {segment.ctaText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom B2B partnership engagement banner */}
        <div className="mt-12 bg-gradient-to-tr from-blue-900 to-sky-950 text-white rounded-3xl p-6 md:p-8 border border-blue-800 shadow-lg text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 rounded uppercase tracking-wider">
                PROGRAMME PARTENARIAT PHYSIQUE
              </span>
              <h4 className="font-display font-extrabold text-lg text-white mt-1.5">
                Vous possédez une pharmacie enregistrée à Djibouti ?
              </h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed mt-2 font-medium">
                Rejoignez le réseau officiel D-Pharma pour maximiser la disponibilité de vos stocks en temps réel, 
                attirer nos chauffeurs de livraison et fidéliser vos patients à l'aide de notre messagerie d'ordonnances cryptées.
              </p>
            </div>
            <button
              onClick={() => handleSegmentAction("seg-4", "Pharmacie")}
              className="bg-[#10B981] hover:bg-emerald-600 text-white text-xs font-semibold px-5 py-3 rounded-xl border border-emerald-500 hover:shadow-lg transition-all shrink-0 cursor-pointer text-center"
            >
              Postuler en tant qu'affilié
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
