/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Rocket, 
  Gift, 
  Video, 
  Megaphone, 
  MapPin, 
  GraduationCap, 
  Trophy, 
  Wallet, 
  Smartphone, 
  Radio, 
  CheckCircle2 
} from "lucide-react";
import { ACQUISITION_PHASES } from "../data";

export default function AcquisitionStrategy() {
  
  // Custom icons matching tactics names
  const getTacticIcon = (iconName: string) => {
    switch (iconName) {
      case "gift":
        return <Gift className="w-4 h-4 text-orange-500" />;
      case "video":
        return <Video className="w-4 h-4 text-[#2563EB]" />;
      case "megaphone":
        return <Megaphone className="w-4 h-4 text-[#10B981]" />;
      case "map-pin":
        return <MapPin className="w-4 h-4 text-blue-500" />;
      case "graduation-cap":
        return <GraduationCap className="w-4 h-4 text-indigo-500" />;
      case "trophy":
        return <Trophy className="w-4 h-4 text-amber-500" />;
      case "wallet":
        return <Wallet className="w-4 h-4 text-emerald-500" />;
      case "smartphone":
        return <Smartphone className="w-4 h-4 text-teal-500" />;
      case "radio":
        return <Radio className="w-4 h-4 text-rose-500" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-blue-500" />;
    }
  };

  const getCardBgColorClass = (phase: string) => {
    switch (phase) {
      case "Phase 1": return "border-l-4 border-l-orange-500 hover:border-orange-300";
      case "Phase 2": return "border-l-4 border-l-blue-500 hover:border-blue-300";
      case "Phase 3": return "border-l-4 border-l-emerald-500 hover:border-emerald-300";
      default: return "";
    }
  };

  const getTimelineBadgeColorClass = (phase: string) => {
    switch (phase) {
      case "Phase 1": return "bg-orange-50 text-orange-700 border-orange-100";
      case "Phase 2": return "bg-blue-50 text-blue-700 border-blue-100";
      case "Phase 3": return "bg-emerald-50 text-emerald-700 border-emerald-100";
      default: return "";
    }
  };

  return (
    <section id="acquisition" className="py-24 bg-slate-50 border-y border-slate-100 scroll-mt-20 overflow-hidden relative">
      {/* Cinematic Ambient Background Blooms */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full filter blur-3xl pointer-events-none select-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-400/5 rounded-full filter blur-3xl pointer-events-none select-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-blue-600 text-xs font-mono font-bold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100/50 inline-block shadow-3xs">
            Croissance & Acquisition 🚀
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Stratégie d'Acquisition & Go-To-Market
          </h2>
          <p className="mt-3 font-sans text-slate-600">
            Une méthodologie de croissance progressive hautement calculée pour pérenniser l'audience à Djibouti.
          </p>
        </motion.div>

        {/* Timeline container */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto pl-6 sm:pl-12 border-l-2 border-slate-200 space-y-12 py-4 text-left"
        >
          
          {/* Header Rocket indicator */}
          <div className="absolute top-0 -left-[17px] w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-500/20 z-20">
            <Rocket className="w-4 h-4 animate-bounce" />
          </div>

          {ACQUISITION_PHASES.map((phase) => (
            <motion.div 
              key={phase.phase}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 14
                  }
                }
              }}
              whileHover={{ 
                x: 6, 
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.04)" 
              }}
              className={`relative bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xs transition-all duration-300 ${getCardBgColorClass(phase.phase)}`}
            >
              
              {/* Timeline dot connector */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-10 w-4 h-4 rounded-full bg-white border-2 border-slate-400 group z-10 transition-colors hover:border-blue-500">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 m-auto mt-0.5 group-hover:bg-blue-500 transition-colors"></div>
              </div>

              {/* Card Meta details */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-50 pb-4 mb-5">
                <div className="flex items-center space-x-3">
                  <span className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md border ${getTimelineBadgeColorClass(phase.phase)}`}>
                    {phase.phase} — {phase.timeline}
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-slate-900 leading-none">
                    {phase.title}
                  </h3>
                </div>
                <span className="text-xs font-sans font-bold text-slate-800 bg-slate-100/50 px-2.5 py-1 rounded-full border border-slate-200/20">
                  {phase.userGoal}
                </span>
              </div>

              {/* Tactic grid within card */}
              <div className="space-y-3">
                <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Tactiques Logistiques Clés :
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {phase.tactics.map((tac, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -3,
                        borderColor: "rgba(37, 99, 235, 0.25)",
                        backgroundColor: "#f8fafc"
                      }}
                      className="bg-slate-50 border border-slate-200/40 p-3.5 rounded-2xl flex items-start space-x-2.5 transition-colors cursor-pointer"
                    >
                      <div className="p-2 bg-white rounded-lg border border-slate-100 flex items-center justify-center shadow-2xs shrink-0 self-center">
                        {getTacticIcon(acIdToNameMap[tac.label] || tac.iconName)}
                      </div>
                      <span className="font-sans font-extrabold text-xs text-slate-700 leading-snug self-center">
                        {tac.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

// Quick fallback helper dictionary for local tactics icons coupling
const acIdToNameMap: { [key: string]: string } = {
  "Parrainage avec crédits": "gift",
  "Teaser viral sur les réseaux sociaux": "video",
  "Événements d'activation en pharmacie": "megaphone",
  "Publicités Facebook/Instagram géolocalisées": "map-pin",
  "Partenariats universités et centres de santé": "graduation-cap",
  "Concours 'Meilleur Utilisateur' avec prix": "trophy",
  "Programme de fidélité cashbacks Waafi/D-Money": "wallet",
  "Campagne de contenus santé éducatifs sur TikTok": "smartphone",
  "Affichage urbain (OOH) et messages Radio RTD": "radio"
};
