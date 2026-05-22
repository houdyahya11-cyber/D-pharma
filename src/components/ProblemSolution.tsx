/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  XOctagon, 
  Smartphone, 
  UserX, 
  ChevronRight, 
  CheckCircle2, 
  ShoppingCart, 
  History, 
  Bell, 
  MapPin, 
  Truck, 
  Bot, 
  MessageSquare, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { PAIN_POINTS, SOLUTION_CARDS } from "../data";

interface ProblemSolutionProps {
  onFeatureSelect: (featureId: string) => void;
}

export default function ProblemSolution({ onFeatureSelect }: ProblemSolutionProps) {
  const [hoveredProblemCard, setHoveredProblemCard] = useState<string | null>(null);
  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);

  // Map icon names to Lucide icons
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "smartphone-off":
        return <Smartphone className={className} />;
      case "package-x":
        return <XOctagon className={className} />;
      case "shopping-cart":
        return <ShoppingCart className={className} />;
      case "history":
        return <History className={className} />;
      case "bell":
        return <Bell className={className} />;
      case "map-pin":
        return <MapPin className={className} />;
      case "truck":
        return <Truck className={className} />;
      case "bot":
        return <Bot className={className} />;
      case "message-square":
        return <MessageSquare className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  const problemPanels = [
    {
      title: "1. Porte de nuit close",
      scenario: "Une femme malade devant une pharmacie fermée au milieu de la nuit sous la pluie d'un coup de fraîcheur.",
      emoji: "☔"
    },
    {
      title: "2. Épuisement à domicile",
      scenario: "Un grand-père fatigué isolé sur son lit incapable de récupérer son insuline indispensable.",
      emoji: "👵"
    },
    {
      title: "3. Responsabilités professionnelles",
      scenario: "Une cadre débordée au bureau au port de Djibouti n'ayant pas 2 heures devant elle pour faire la queue.",
      emoji: "💼"
    },
    {
      title: "4. D-Pharma résout tout !",
      scenario: "Un coursier D-Pharma souriant remet un sac scellé et sécurisé en 20 minutes chrono.",
      emoji: "⚡"
    }
  ];

  return (
    <div className="space-y-24 py-12 scroll-mt-20">
      
      {/* SECTION 2 — THE PROBLEM (Pain Agitation) */}
      <section id="problem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden py-10">
        {/* Section specific floating gradient warm and safe health auras */}
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-red-100/20 filter blur-3xl animate-float-slow pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-emerald-50/20 filter blur-3xl animate-float-reverse pointer-events-none"></div>

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <span className="text-red-600 text-xs font-mono font-bold tracking-widest uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100/50">
            Le Problème
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Pourquoi D-Pharma existe ?
          </h2>
          <p className="mt-3 font-sans text-slate-600">
            Trouver et acheter ses traitements à Djibouti-Ville reste un parcours de combattant, 
            rempli d'incertitudes logistiques et de barrières d'accès physiques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Columns: Pain Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-900 leading-tight">
              Des lacunes majeures dans le parcours de soin traditionnel :
            </h3>
            
            <div className="space-y-4" style={{ perspective: "1000px" }}>
              {PAIN_POINTS.map((point) => (
                <div 
                  key={point.id}
                  className="bg-white p-6 rounded-2xl border border-slate-100/90 shadow-xs flex items-start space-x-4 hover:shadow-2xl hover:border-red-200 transition-all duration-300 group cursor-pointer"
                  style={{ 
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const xc = rect.width / 2;
                    const yc = rect.height / 2;
                    const rotateY = ((x - xc) / xc) * 6; // max tilt 6 deg
                    const rotateX = -((y - yc) / yc) * 6;
                    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.015) translateZ(10px)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)`;
                  }}
                >
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-xs">
                    {renderIcon(point.iconName, "w-6 h-6")}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-sm tracking-tight flex items-center gap-2">
                      {point.title}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono bg-red-100 text-red-700 px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">Aigu</span>
                    </h4>
                    <p className="mt-1.5 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50/60 p-4.5 rounded-2xl border border-red-100 text-left">
              <span className="font-mono text-[10px] font-bold text-red-700 tracking-wide uppercase">DANGER POUR LA SANTÉ</span>
              <p className="mt-1 text-slate-700 text-xs font-medium leading-relaxed">
                "Sans D-Pharma, trouver vos médicaments ou vérifier les officines de garde reste un véritable parcours du combattant."
              </p>
            </div>

            {/* Visual 3D Cinematic Problem Illustration Card */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4.5 relative overflow-hidden group shadow-lg">
              <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider block mb-2">Représentation Cinématique en 3D</span>
              <div 
                onClick={() => setIsProblemModalOpen(true)}
                className="h-36 rounded-xl overflow-hidden relative cursor-pointer group"
              >
                <img 
                  src="/le probleme.jpeg" 
                  alt="Illustration interactive du problème" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-125"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-rose-950/20 group-hover:bg-rose-950/0 transition-colors"></div>
                
                {/* Visual Glassmorphic Tag */}
                <div className="absolute bottom-2.5 left-2.5 bg-slate-950/80 backdrop-blur-sm border border-slate-800 px-2 py-1 rounded text-[8px] font-mono text-rose-400 font-bold">
                  ● CLIQUEZ POUR ENTRER EN VUE 3D
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
                  <span className="text-xs font-mono font-bold bg-rose-600 text-white px-4 py-2 rounded-full shadow-lg border border-rose-500">
                    🔎 AGRANDIR LES SOUFFRANCES DU TERRAIN
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-2 text-center italic">
                Illustration des ruptures de stock d'officines et des barrières de garde à Djibouti.
              </p>
            </div>
          </div>

          {/* Right Column: Visual 4-panel storyboard from the deck */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white relative shadow-2xl overflow-hidden border border-slate-800">
              
              {/* Animated subtle grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-15"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider">Réalités de terrain</span>
                    <h4 className="font-display font-bold text-lg text-slate-100">Scénarios Quotidiens à Djibouti</h4>
                  </div>
                  <span className="text-xs bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2.5 py-0.5 rounded-full font-mono font-medium animate-pulse">Symptômes</span>
                </div>

                {/* 4 Storyboard Panels Grid with 3D isometric properties */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ perspective: "1000px" }}>
                  {problemPanels.map((panel, idx) => (
                    <div 
                      key={idx}
                      onMouseEnter={() => setHoveredProblemCard(panel.title)}
                      onMouseLeave={() => setHoveredProblemCard(null)}
                      className={`p-5 rounded-2xl transition-all duration-500 cursor-pointer relative overflow-hidden ${
                        idx === 3 
                          ? "bg-gradient-to-br from-emerald-950/80 to-slate-950 border-2 border-emerald-500/40 text-emerald-100 shadow-emerald-990/20" 
                          : "bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 text-slate-300 shadow-black/30"
                      }`}
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transform: hoveredProblemCard === panel.title 
                          ? 'rotateY(-8deg) rotateX(4deg) scale(1.03) translateZ(15px)'
                          : idx === 0 ? 'rotateY(3deg) rotateX(-1deg)' 
                          : idx === 1 ? 'rotateY(-3deg) rotateX(-1deg)'
                          : idx === 2 ? 'rotateY(2deg) rotateX(1deg)'
                          : 'rotateY(-2deg) rotateX(1deg)',
                        boxShadow: hoveredProblemCard === panel.title 
                          ? idx === 3 ? '0 15px 25px -3px rgba(16, 185, 129, 0.15)' : '0 15px 25px -3px rgba(0, 0, 0, 0.5)'
                          : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {/* Top border glowing highlight line */}
                      {hoveredProblemCard === panel.title && (
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${idx === 3 ? "from-emerald-400 to-teal-400" : "from-red-500 to-rose-500"}`}></div>
                      )}

                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${idx === 3 ? "text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded" : "text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded"}`}>
                          {panel.title}
                        </span>
                        <span className="text-xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{panel.emoji}</span>
                      </div>
                      <p className="text-[11px] font-sans leading-relaxed text-slate-300 font-semibold">
                        {panel.scenario}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-2 border-t border-slate-800/80">
                  <p className="text-[10px] font-mono text-slate-400 leading-normal">
                    💡 <span className="text-slate-200">Transition vers la solution :</span> Survolez les scénarios pour activer la vision 3D.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic 3D Problem Lightbox Modal */}
      {isProblemModalOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsProblemModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden p-3 max-w-2xl w-full shadow-2xl relative border border-slate-200 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsProblemModalOpen(false)}
              className="absolute top-4 right-4 bg-slate-900/10 hover:bg-slate-900/25 text-slate-800 p-2.5 rounded-full z-10 transition-colors cursor-pointer"
            >
              ✕
            </button>
            
            {/* Large Figure Container */}
            <div className="h-96 sm:h-[480px] rounded-2xl overflow-hidden bg-slate-900 shadow-inner relative flex items-center justify-center">
              <img 
                src="/le probleme.jpeg" 
                alt="Représentation 3D du Problème de Santé à Djibouti" 
                className="w-full h-full object-contain filter saturate-125 select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-xs text-white text-[9px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse border border-red-500">
                PROBLÈMATIQUE DE TERRAIN : PARCOURS DU COMBATTANT
              </div>
            </div>

            {/* Lightbox Information specs */}
            <div className="p-4 text-center">
              <h4 className="font-display font-black text-slate-900 text-base">La Réalité Quotidienne du Citoyen</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Ce visuel 3D cinématique illustre le fossé d'accès logistique, les queues interminables sous la chaleur, la perplexité face aux ruptures de stocks et l'insécurité nocturne devant les portes de garde closes.
              </p>
              <span className="inline-block mt-3 text-[10px] bg-red-50 text-red-700 border border-red-100 px-3 py-1 rounded-full font-mono font-bold">
                D-Pharma résout cette fracture logistique de manière définitive.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3 — THE SOLUTION (Value Proposition) */}
      <section id="solution" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative scroll-mt-22 overflow-hidden py-12">
        {/* Cinematic Backdrop Ambient Blooms */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-400/5 rounded-full filter blur-3xl pointer-events-none select-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none select-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 relative z-10"
        >
          <span className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 shadow-3xs inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#10B981]" />
            La Solution
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Une plateforme complète pour votre santé
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-500 font-bold uppercase tracking-wide">
            D-Pharma — Une plateforme intelligente d'accès aux services pharmaceutiques
          </p>
        </motion.div>

        {/* 7 Glassmorphism cards in a 3-3-1 responsive grid */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          {SOLUTION_CARDS.slice(0, 6).map((card) => (
            <motion.div
              key={card.id}
              onClick={() => onFeatureSelect(card.id)}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 14
                  }
                }
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                boxShadow: "0 20px 40px -15px rgba(37, 99, 235, 0.08)",
                border: "1px solid rgba(37, 99, 235, 0.2)"
              }}
              className="bg-white/70 backdrop-blur-md rounded-3xl border border-slate-100 p-6 flex flex-col justify-between transition-colors duration-300 cursor-pointer group hover:bg-white"
            >
              <div>
                <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-3xs group-hover:bg-[#2563EB] group-hover:text-white">
                  {renderIcon(card.iconName, "w-6 h-6 transition-transform")}
                </div>
                <h3 className="font-display font-bold text-slate-900 text-sm leading-tight flex items-center gap-1.5">
                  {card.title}
                </h3>
                <p className="mt-3 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100/50 flex items-center justify-between text-xs font-bold text-[#2563EB]/85 transition-colors group-hover:text-[#2563EB]">
                <span className="group-hover:underline underline-offset-4">Explorer cette fonctionnalité</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5" />
              </div>
            </motion.div>
          ))}

          {/* Last Card (Card 7) Centered across 1-3 columns depending on sizing */}
          <motion.div
            onClick={() => onFeatureSelect(SOLUTION_CARDS[6].id)}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 90,
                  damping: 14
                }
              }
            }}
            whileHover={{ 
              y: -8, 
              scale: 1.02, 
              boxShadow: "0 20px 40px -15px rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.2)"
            }}
            className="md:col-span-2 lg:col-span-3 lg:max-w-md lg:mx-auto w-full bg-[#10B981]/5 backdrop-blur-md rounded-3xl border border-emerald-100 p-6 flex flex-col justify-between transition-colors duration-300 cursor-pointer group hover:bg-white text-center sm:text-left"
          >
            <div>
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-5 mx-auto sm:mx-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xs group-hover:bg-[#10B981]">
                {renderIcon(SOLUTION_CARDS[6].iconName, "w-6 h-6")}
              </div>
              <h3 className="font-display font-bold text-slate-900 text-sm leading-tight text-center sm:text-left">
                {SOLUTION_CARDS[6].title}
              </h3>
              <p className="mt-3 font-sans text-xs text-slate-500 leading-relaxed font-semibold text-center sm:text-left">
                {SOLUTION_CARDS[6].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-100/40 flex items-center justify-between text-xs font-bold text-[#10B981]">
              <span className="group-hover:underline underline-offset-4">Explorer cette fonctionnalité</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </motion.div>
        </motion.div>

      </section>

    </div>
  );
}
