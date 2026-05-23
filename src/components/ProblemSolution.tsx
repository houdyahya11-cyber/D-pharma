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
      <section id="solution" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative scroll-mt-22 py-16">
        {/* Cinematic Backdrop Ambient Blooms */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none select-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none select-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 relative z-10"
        >
          <span className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 shadow-3xs inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
            L'Écosystème Intelligent D-Pharma
          </span>
          <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            La Révolution de l'Accès aux Soins à Djibouti
          </h2>
          <p className="mt-3 font-sans text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Plus qu'une simple application mobile, D-Pharma est un écosystème connecté qui relie instantanément patients, pharmacies et coursiers pour un service médical fluide, fiable et immédiat.
          </p>
        </motion.div>

        {/* High-Fidelity Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          
          {/* Card 1: COMMANDE EN LIGNE (Large Bento Box, spanning cols on large screens) */}
          <motion.div
            onClick={() => onFeatureSelect("sol-1")}
            whileHover={{ y: -8, scale: 1.015 }}
            className="md:col-span-2 bg-gradient-to-br from-white to-blue-50/20 backdrop-blur-md rounded-3xl border border-slate-150 p-8 flex flex-col justify-between transition-all duration-300 shadow-xs hover:border-blue-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-3xs">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-blue-100 uppercase tracking-wider">
                    ● Officiel & Sécurisé
                  </div>
                  <h3 className="font-display font-black text-slate-900 text-xl mt-2 leading-tight">
                    Commande & Ordonnances en Ligne
                  </h3>
                  <p className="mt-3 font-sans text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                    Ajoutez vos formules courantes en un clic ou scannez directement votre ordonnance manuscrite. Notre système l'analyse et transmet les données de manière cryptée et confidentielle aux officines de garde pour préparation instantanée.
                  </p>
                </div>
              </div>

              {/* Visual Interactive Device Representation inside card */}
              <div className="md:col-span-5 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">ORDONNANCE DU DOCTEUR</span>
                  <span className="text-[9px] bg-emerald-50 text-emerald-700 font-mono font-bold px-1.5 py-0.5 rounded">Vérifié ✓</span>
                </div>
                {/* Simulated list item */}
                <div className="space-y-2">
                  <div className="p-2 border border-slate-100 bg-slate-50/50 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🧴</span>
                      <div>
                        <span className="block text-[11px] font-bold text-slate-800">Doliprane 1000mg</span>
                        <span className="block text-[8px] text-slate-400">Posologie : 3 fois par jour</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-800">450 FDJ</span>
                  </div>
                  <div className="p-2 border border-blue-100 bg-blue-50/40 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🧬</span>
                      <div>
                        <span className="block text-[11px] font-bold text-slate-800">Amoxicilline 500mg</span>
                        <span className="block text-[8px] text-purple-600 font-bold">Inclus dans l'ordonnance</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-800">1 200 FDJ</span>
                  </div>
                </div>
                {/* Order progress */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">Total Estimé : 1 650 FDJ</span>
                  <button className="bg-blue-600 text-white text-[9px] font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
                    Passer la commande
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-150/40 flex items-center justify-between text-xs font-bold text-blue-600 transition-colors">
              <span className="group-hover:underline underline-offset-4">Tester l'intégration et commander</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </motion.div>

          {/* Card 2: HISTORIQUE DES COMMANDES (Medium Bento, Elegant transaction list) */}
          <motion.div
            onClick={() => onFeatureSelect("sol-2")}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-3xl border border-slate-150 p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:border-blue-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-3xs">
                <History className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-sm tracking-tight">
                  Historique Collaboratif & Renouvellements
                </h4>
                <p className="mt-2 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                  Tous vos achats de médicaments sont mémorisés dans un carnet de santé numérique crypté. Idéal pour renouveler vos traitements chroniques en 2 secondes sans ressaisie.
                </p>
              </div>

              {/* Miniature Receipt Visual */}
              <div className="p-4 bg-slate-50/70 border border-slate-150 rounded-2xl font-mono text-[9px] text-slate-600 space-y-2.5">
                <div className="flex justify-between font-bold border-b border-dashed border-slate-300 pb-1.5 text-slate-800">
                  <span>REÇU D-PHARMA #942</span>
                  <span>MARDI</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>• Paracétamol x 2</span>
                    <span className="font-bold">900 FDJ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Vitamine C Bion3</span>
                    <span className="font-bold">2 200 FDJ</span>
                  </div>
                </div>
                <div className="border-t border-dashed border-slate-300 pt-1.5 flex justify-between font-bold text-emerald-600">
                  <span>ÉTAT : LIVRÉ</span>
                  <span>Total: 3 100 FDJ</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-150/40 flex items-center justify-between text-xs font-bold text-blue-600 transition-colors">
              <span className="group-hover:underline underline-offset-4">Voir mon historique</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </motion.div>

          {/* Card 3: RAPPELS DE PRISE (Medical Compliance schedule) */}
          <motion.div
            onClick={() => onFeatureSelect("sol-3")}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-3xl border border-slate-150 p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:border-emerald-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-3xs">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-sm tracking-tight">
                  Suivi de Traitement & Rappels Intelligents
                </h4>
                <p className="mt-2 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                  Ne ratez plus jamais une prise importante de traitement. Votre calendrier affiche vos prescriptions et génère des alarmes discrètes ou notifications SMS sur votre smartphone.
                </p>
              </div>

              {/* Compliance Calendar visual */}
              <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-2">
                <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-slate-700">
                  📅 PLANIFICATEUR DU SÉJOUR :
                </div>
                <div className="grid grid-cols-2 gap-2 text-[8.5px] font-semibold text-slate-600">
                  <div className="p-2 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="block font-bold text-slate-800">08:00 AM Matin</span>
                      <span className="text-[7.5px] text-emerald-700">✓ Pris (Doliprane)</span>
                    </div>
                    <span className="text-base text-emerald-500">💊</span>
                  </div>
                  <div className="p-2 bg-amber-50/50 border border-amber-100 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="block font-bold text-slate-800">20:00 PM Soir</span>
                      <span className="text-[7.5px] text-amber-700">● Alarme programmée</span>
                    </div>
                    <span className="text-base text-amber-500">⏰</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-150/40 flex items-center justify-between text-xs font-bold text-[#10B981] transition-colors">
              <span className="group-hover:underline underline-offset-4">Configurer mes rappels</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </motion.div>

          {/* Card 4: LOCALISATION DES PHARMACIES (Map-pin overlay) */}
          <motion.div
            onClick={() => onFeatureSelect("sol-4")}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-3xl border border-slate-150 p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:border-blue-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-3xs">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-sm tracking-tight">
                  Carte des Officines & Gardes Actives
                </h4>
                <p className="mt-2 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                  Visualisez instantanément la pharmacie centrale ouverte ou trouvez la pharmacie de garde physique la plus proche à Balbala, avec les horaires de nuit actualisés en continu.
                </p>
              </div>

              {/* Map Locator Preview */}
              <div className="h-28 rounded-2xl bg-blue-50/50 relative overflow-hidden border border-blue-100 flex flex-col justify-between p-3">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2563eb_2px,transparent_2px)] [background-size:10px_10px]"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[8.5px] font-mono font-black text-slate-600 bg-white/95 border border-slate-150 px-2 py-0.5 rounded-full shadow-3xs">
                    Djibouti Centre-Ville
                  </span>
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                {/* Coordinate indicators */}
                <div className="relative z-10 p-2.5 bg-white/95 rounded-xl border border-slate-100 shadow-3xs flex items-center gap-2">
                  <span className="text-xs">📍</span>
                  <div>
                    <span className="block text-[9.5px] font-bold text-slate-800">Pharmacie Ambulante</span>
                    <span className="block text-[7.5px] text-emerald-600 font-extrabold">Gardes ouvertes 24h/24</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-150/40 flex items-center justify-between text-xs font-bold text-blue-600 transition-colors">
              <span className="group-hover:underline underline-offset-4">Ouvrir la géolocalisation</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </motion.div>

          {/* Card 5: LIVRAISON ULTRA RAPIDE (Medium Bento, progress tracker) */}
          <motion.div
            onClick={() => onFeatureSelect("sol-5")}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-3xl border border-slate-150 p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:border-emerald-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 text-[#10B981] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-3xs">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-sm tracking-tight">
                  Livraison Express Sécurisée en 30 Min
                </h4>
                <p className="mt-2 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                  Nos chauffeurs agrées récupèrent vos médicaments sous pochette isotherme scellée pour respecter l'intégrité thérapeutique, et vous livrent directement chez vous en un temps record.
                </p>
              </div>

              {/* Delivery Progress visual with animated pulse */}
              <div className="p-3 bg-slate-50/80 border border-slate-150 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className="font-bold text-emerald-800">SUIVI DU LIVREUR :</span>
                  <span className="text-slate-400">Temps estimé : 14 minutes</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-0 w-2/3 bg-emerald-500 rounded-full transition-all duration-1000 animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between text-[8px] text-slate-500 font-semibold font-mono">
                  <span>Pharmacopée</span>
                  <span className="text-emerald-600 font-bold">En transit... 📍</span>
                  <span>Domicile</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-150/40 flex items-center justify-between text-xs font-bold text-[#10B981] transition-colors">
              <span className="group-hover:underline underline-offset-4">Calculer les frais de livraison</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </motion.div>

          {/* Card 6: CHATBOT MEDICAL INTELLIGENT (Large Bento Box, chatbot dialogue replica) */}
          <motion.div
            onClick={() => onFeatureSelect("sol-6")}
            whileHover={{ y: -8, scale: 1.015 }}
            className="md:col-span-2 bg-gradient-to-br from-white to-emerald-50/20 backdrop-blur-md rounded-3xl border border-slate-150 p-8 flex flex-col justify-between transition-all duration-300 shadow-xs hover:border-emerald-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-[#10B981] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-3xs">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-emerald-100 uppercase tracking-wider">
                    ● Intelligence Artificielle & Correction
                  </div>
                  <h3 className="font-display font-black text-slate-900 text-xl mt-2 leading-tight">
                    Chatbot Thérapeutique de Posologie
                  </h3>
                  <p className="mt-3 font-sans text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                    Posez vos questions de posologie ou vérifiez les effets secondaires directement avec notre chatbot intelligent propulsé par Gemini. Il résout les typos, vous guide dans la prise et sécurise votre parcours médical 24h/24.
                  </p>
                </div>
              </div>

              {/* Chatbot Interface visual snippet */}
              <div className="md:col-span-5 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3.5 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    Assistant IA en Direct
                  </span>
                  <span className="text-[8px] text-slate-400">Gemini Active</span>
                </div>
                <div className="space-y-2 text-[9px] leading-relaxed">
                  <div className="bg-slate-100 text-slate-700 p-2.5 rounded-2xl rounded-tr-none text-right max-w-[85%] ml-auto font-semibold">
                    "comment prendre le doliprane ?"
                  </div>
                  <div className="bg-emerald-50/80 text-slate-800 p-2.5 rounded-2xl rounded-tl-none max-w-[90%] font-medium">
                    <span className="font-bold text-emerald-800 block mb-0.5">🤖 ASSISTANT D-PHARMA</span>
                    "Pour un adulte de plus de 50 kg, la dose recommandée est de <strong>1 comprimé de 1g (1000mg)</strong> par prise, à renouveler toutes les 6 heures si nécessaire."
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-150/40 flex items-center justify-between text-xs font-bold text-[#10B981] transition-colors">
              <span className="group-hover:underline underline-offset-4">Clavarder avec l'assistant</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </motion.div>

          {/* Card 7: MESSAGERIE DIRECTE CLIENT-PHARMACIE (Medium Bento, user status dialogue) */}
          <motion.div
            onClick={() => onFeatureSelect("sol-7")}
            whileHover={{ y: -8, scale: 1.02 }}
            className="md:col-span-1 bg-white rounded-3xl border border-slate-150 p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:border-blue-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-3xs">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-sm tracking-tight">
                  Liaison Directe & Messagerie Pharmacie
                </h4>
                <p className="mt-2 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                  Discutez en direct avec le pharmacien titulaire de votre quartier de confiance. Idéal pour obtenir un avis, poser un doute discret, ou valider une préparation sous ordonnance.
                </p>
              </div>

              {/* Direct Pharmacist Chat preview */}
              <div className="p-3.5 bg-slate-50/70 border border-slate-150 rounded-2xl flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold font-mono">
                    PH
                  </div>
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-800 leading-none">Ph. de l'Ambouli</span>
                  <span className="block text-[8px] text-slate-400 mt-1">"Votre formule magistrale est prête !"</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-150/40 flex items-center justify-between text-xs font-bold text-blue-600 transition-colors">
              <span className="group-hover:underline underline-offset-4">Discuter avec un pharmacien</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </motion.div>

        </div>

      </section>

    </div>
  );
}
