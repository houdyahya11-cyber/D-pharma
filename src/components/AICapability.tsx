/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Sparkles, 
  Navigation, 
  Keyboard, 
  Bot, 
  Scan, 
  Mic, 
  TrendingUp, 
  Check, 
  ArrowRight,
  Cpu,
  BrainCircuit,
  UploadCloud,
  Loader2
} from "lucide-react";
import { AI_CAPABILITIES } from "../data";

export default function AICapability() {
  const [activeTab, setActiveTab] = useState<"cards" | "playground">("playground");
  
  // Playground state for corrector
  const [searchTyped, setSearchTyped] = useState("dolipran");
  const [correctedWord, setCorrectedWord] = useState("Doliprane 1000mg");
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [correctionsHistory, setCorrectionsHistory] = useState<string[]>([]);

  // Playground state for Scan OCR
  const [ocrStatus, setOcrStatus] = useState<"idle" | "scanning" | "completed">("idle");
  const [extractedDrugs, setExtractedDrugs] = useState<{ name: string; conf: string }[]>([]);

  const handleTypeCorrection = (word: string, correction: string) => {
    setIsCorrecting(true);
    setSearchTyped(word);
    setTimeout(() => {
      setCorrectedWord(correction);
      setIsCorrecting(false);
    }, 600);
  };

  const handleSimulateScan = () => {
    setOcrStatus("scanning");
    setExtractedDrugs([]);
    setTimeout(() => {
      setOcrStatus("completed");
      setExtractedDrugs([
        { name: "Doliprane 1000mg - Comprimé", conf: "99.8%" },
        { name: "Amoxicilline 500mg - Gélule (Antibiotique)", conf: "94.2%" },
        { name: "Spasfon Lyoc 160mg", conf: "89.5%" }
      ]);
    }, 2500);
  };

  // Map icon names to Lucide icons
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "sparkles":
        return <Sparkles className={className} />;
      case "navigation":
        return <Navigation className={className} />;
      case "keyboard":
        return <Keyboard className={className} />;
      case "bot":
        return <Bot className={className} />;
      case "scan":
        return <Scan className={className} />;
      case "mic":
        return <Mic className={className} />;
      case "trending-up":
        return <TrendingUp className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  return (
    <section id="ai-capabilities" className="py-24 bg-slate-50 border-y border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 text-xs font-mono font-bold tracking-widest uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            INTELLIGENCE ARTIFICIELLE 💎
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            Propulsé par l'Intelligence Artificielle
          </h2>
          <p className="mt-3 font-sans text-sm font-semibold text-purple-600 uppercase tracking-wider">
            Des algorithmes avancés pour une santé personnalisée à Djibouti
          </p>

          {/* Toggle Tab */}
          <div className="flex items-center justify-center p-1 bg-slate-100 rounded-xl w-fit mx-auto mt-8 border border-slate-200">
            <button
              onClick={() => setActiveTab("playground")}
              className={`px-4 py-2 text-xs font-display font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === "playground" ? "bg-purple-600 text-white shadow-md shadow-purple-500/10" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Testez l'IA d'ordonnances
            </button>
            <button
              onClick={() => setActiveTab("cards")}
              className={`px-4 py-2 text-xs font-display font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === "cards" ? "bg-purple-600 text-white shadow-md shadow-purple-500/10" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Voir les 7 Fonctionnalités IA
            </button>
          </div>
        </div>

        {/* Tab 1: AI Playground */}
        {activeTab === "playground" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            
            {/* Left Box: Spell Search Correction Simulator */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/60 shadow-md flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-purple-50 rounded-bl-[100px] -z-0 opacity-40"></div>
              
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-purple-600 font-bold bg-purple-100/50 px-2 py-0.5 rounded uppercase">Module 1 : Correction Orthographique</span>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mt-2">Prédire avec précision</h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                    Les patients tapent souvent des noms de médicaments déformés. Notre IA corrige instantanément l'orthographe pour éviter les erreurs de distribution mortelles.
                  </p>
                </div>

                {/* Simulated search field */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>VOTRE ESSAI</span>
                    <span>STATUT IA : ACTIF</span>
                  </div>
                  
                  {/* Typed input container */}
                  <div className="flex items-center space-x-2.5">
                    <span className="text-sm">🔍</span>
                    <span className="font-sans font-bold text-slate-800 text-sm flex-1 bg-transparent py-1 border-b border-transparent">
                      {searchTyped}
                    </span>
                    {isCorrecting ? (
                      <Loader2 className="w-4 h-4 text-purple-600 animate-spin" />
                    ) : (
                      <span className="text-[10px] bg-emerald-50 text-[#10B981] font-mono font-bold px-1.5 py-0.5 rounded">Corrigé</span>
                    )}
                  </div>

                  {/* Smart suggestion replacement box */}
                  <div className="bg-white rounded-xl p-3 border border-slate-200/60 shadow-2xs flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-mono font-bold text-purple-500">MÉDICAMENT DE REMPLACEMENT IA</span>
                      <span className="block text-xs font-bold text-slate-900 mt-0.5">{correctedWord}</span>
                    </div>
                    <span className="text-[10px] bg-purple-50 text-purple-700 font-mono font-bold px-2 py-0.5 rounded">99.1% confiance</span>
                  </div>
                </div>

                {/* Pre-made bad words buttons to check */}
                <div>
                  <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-2">Simulez des fautes courantes à Djibouti :</span>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => handleTypeCorrection("dolipran", "Doliprane 1000mg")}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-mono font-medium transition-all cursor-pointer ${
                        searchTyped === "dolipran" ? "bg-purple-50 text-purple-700 border-purple-200 font-bold" : "bg-white text-slate-600 border-slate-200 hover:border-purple-300"
                      }`}
                    >
                      "dolipran"
                    </button>
                    <button 
                      onClick={() => handleTypeCorrection("amoxiline", "Amoxicilline 1g")}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-mono font-medium transition-all cursor-pointer ${
                        searchTyped === "amoxiline" ? "bg-purple-50 text-purple-700 border-purple-200 font-bold" : "bg-white text-slate-600 border-slate-200 hover:border-purple-300"
                      }`}
                    >
                      "amoxiline"
                    </button>
                    <button 
                      onClick={() => handleTypeCorrection("strepsil", "Strepsils Miel Citron")}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-mono font-medium transition-all cursor-pointer ${
                        searchTyped === "strepsil" ? "bg-purple-50 text-purple-700 border-purple-200 font-bold" : "bg-white text-slate-600 border-slate-200 hover:border-purple-300"
                      }`}
                    >
                      "strepsil"
                    </button>
                    <button 
                      onClick={() => handleTypeCorrection("spasfom", "Spasfon Lyoc")}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-mono font-medium transition-all cursor-pointer ${
                        searchTyped === "spasfom" ? "bg-purple-50 text-purple-700 border-purple-200 font-bold" : "bg-white text-slate-600 border-slate-200 hover:border-purple-300"
                      }`}
                    >
                      "spasfom"
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Box: Prescription scanning OCR simulator */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-8 border border-slate-200/60 shadow-md flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-50 rounded-bl-[100px] -z-0 opacity-40"></div>

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-100/50 px-2 py-0.5 rounded uppercase">Module 2 : OCR d'Ordonnance Clinique</span>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mt-2">Scannez des ordonnances complexes</h3>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                    Reconnaissance des écritures manuscrites des médecins de Djibouti par notre réseau de neurone. Scannez et verifiez pour un ajout rapide au panier.
                  </p>
                </div>

                {/* Simulator visual console */}
                <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 text-slate-300 space-y-4">
                  
                  {ocrStatus === "idle" && (
                    <div className="flex flex-col items-center justify-center py-6 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                        <UploadCloud className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-200">Ordonnance_Dr_Abdi.pdf</span>
                        <span className="block text-[10px] text-slate-500 font-mono">Prêt à l'analyse OCR</span>
                      </div>
                      <button
                        onClick={handleSimulateScan}
                        className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer"
                      >
                        Lancer l'analyse par IA
                      </button>
                    </div>
                  )}

                  {ocrStatus === "scanning" && (
                    <div className="flex flex-col items-center justify-center py-6 text-center space-y-4 relative">
                      {/* Laser scanning beam vector line */}
                      <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent top-1/2 -translate-y-1/2 animate-bounce w-full z-10"></div>
                      
                      <BrainCircuit className="w-8 h-8 text-purple-400 animate-pulse" />
                      <div>
                        <span className="block text-xs font-bold text-slate-200">Numérisation et transcription de l'écriture manuscrite...</span>
                        <span className="block text-[9px] text-purple-400 font-mono mt-0.5">Extraction des noms moléculaires en cours</span>
                      </div>
                    </div>
                  )}

                  {ocrStatus === "completed" && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">ANALYSE TERMINÉE AVEC SUCCÈS</span>
                        <span className="text-[9px] font-mono text-slate-500">1.2 secondes d'exécution</span>
                      </div>
                      
                      {/* List of drugs detected */}
                      <div className="space-y-2">
                        {extractedDrugs.map((drug, index) => (
                          <div key={index} className="bg-slate-900 p-2 border border-slate-800/80 rounded-xl flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-emerald-500 text-xs">✓</span>
                              <span className="text-xs font-sans font-bold text-slate-200">{drug.name}</span>
                            </div>
                            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">{drug.conf}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={() => setOcrStatus("idle")}
                          className="text-slate-400 hover:text-white text-[10px] font-mono"
                        >
                          ← Recommencer le test
                        </button>
                        <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                          Prêt à commander !
                        </span>
                      </div>
                    </div>
                  )}

                </div>

                <div className="text-xs border-l-2 border-purple-200 pl-3">
                  <p className="text-slate-500 font-medium italic">
                    "Permet de gagner un temps précieux en officine physique et certifie immédiatement la justesse de l'achat de prescription."
                  </p>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Tab 2: All 7 AI Capabilities cards masonry */}
        {activeTab === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {AI_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-xl hover:border-purple-200 transition-all duration-300 relative group"
              >
                {/* Purple badge sticker */}
                <div className="absolute top-4 right-4 bg-purple-50 text-purple-700 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  AI Powered
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-purple-50 text-[#8B5CF6] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {renderIcon(cap.iconName, "w-6 h-6")}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm leading-tight">
                      {cap.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs text-slate-500 leading-relaxed font-semibold">
                      {cap.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-50 text-[10px] font-mono text-purple-600 font-bold flex items-center">
                  Technologie Brevetée D-Pharma
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
