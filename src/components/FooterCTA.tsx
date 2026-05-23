/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Heart, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUpRight
} from "lucide-react";

interface FooterCTAProps {
  onOpenWaitlist: (segmentName?: string) => void;
  onNavigateToDemo: (demoTab: string) => void;
}

export default function FooterCTA({ onOpenWaitlist, onNavigateToDemo }: FooterCTAProps) {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue.trim()) return;
    setEmailSubscribed(true);
    setEmailValue("");
    setTimeout(() => {
      setEmailSubscribed(false);
    }, 4000);
  };

  const handleSmoothScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden pt-24 pb-12 border-t border-slate-900">
      
      {/* Animated D-Pharma Background Logo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 flex items-center justify-center">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-[500px] h-[500px] rounded-full overflow-hidden opacity-[0.04] filter blur-xl"
        >
          <img 
            src="/logo.jpg" 
            alt="D-Pharma Dynamic Backdrop Logo" 
            className="w-full h-full object-cover saturate-150"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
      {/* SECTION 15 — FINAL CTA (Closing) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-15 mb-24">
        <div className="bg-gradient-to-tr from-[#2563EB] to-[#10B981] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
          
          {/* Subtle light bubble effects */}
          <div className="absolute top-0 left-0 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#2563EB] bg-white px-3 py-1 rounded-full inline-block">
              Merci pour votre attention !!! 🌟
            </span>
            <div className="flex items-center justify-center gap-4 pt-2">
              <img 
                src="/logo.jpg" 
                alt="Logo D-Pharma" 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-white/20 shadow-xl object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-100">
                D-Pharma
              </h2>
            </div>
            
            <p className="mt-2 font-display font-bold text-sm sm:text-lg text-emerald-100 max-w-2xl mx-auto">
              Présenté par Ezzaldine & Mohamed — D-Pharma, Votre santé, notre priorité !
            </p>

            {/* Slogan details and dual CTA actions */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigateToDemo("meds")}
                className="w-full sm:w-auto bg-slate-950 text-white font-display font-extrabold text-xs px-6 py-3.5 rounded-xl hover:bg-slate-900 transition-all border border-slate-800 shadow-lg cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Commander mes médicaments</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={() => onOpenWaitlist("Pharmacie Partenaire")}
                className="w-full sm:w-auto bg-white text-blue-900 font-display font-extrabold text-xs px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-lg cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Devenir pharmacie partenaire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Urgency constraint display */}
            <div className="pt-6 flex items-center justify-center gap-1.5 text-xs text-blue-50/90 font-mono font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-200" />
              <span>Rejoignez les 500 premiers utilisateurs — Phase de lancement limitée.</span>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 16 — FOOTER STRUCTURE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 pt-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Platform identity and newsletter */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center space-x-2.5">
              <img 
                src="/logo.jpg" 
                alt="Logo D-Pharma" 
                className="w-7 h-7 rounded-lg border border-slate-800 object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-white">D-Pharma</span>
            </div>
            
            <p className="font-sans text-xs text-slate-400 leading-relaxed font-semibold">
              La première plateforme intelligente d'accès aux services pharmaceutiques à Djibouti. 
              Commandez, localisez et suivez vos traitements en toute simplicité.
            </p>

            {/* Newsletter input form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
              <span className="block text-[10px] font-mono text-slate-400 font-bold uppercase">
                Recevez nos actualités santé et nouveautés
              </span>
              
              <div className="flex items-center space-x-2">
                <input 
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="votre.email@domaine.dj"
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 flex-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl cursor-pointer"
                  aria-label="Subscribe newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {emailSubscribed && (
                <span className="block text-[10px] font-mono text-emerald-400 font-bold animate-pulse">
                  ✓ Merci ! Vous recevrez nos bulletins d'officines à Djibouti.
                </span>
              )}

            </form>
          </div>

          {/* Column 2: Smooth anchor indexes list */}
          <div className="md:col-span-3 text-left space-y-4">
            <span className="block font-display font-bold text-xs uppercase text-[#2563EB] tracking-wider">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono text-slate-400 font-semibold">
              <li>
                <button 
                  onClick={() => handleSmoothScroll("hero")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  ↑ Retour au Sommet
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll("problem")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Le Problème & Solution
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll("demo")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Démonstration Interactive
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll("team")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  L'Équipe
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact indices and support and guard hours */}
          <div className="md:col-span-4 text-left space-y-4">
            <span className="block font-display font-bold text-xs uppercase text-[#10B981] tracking-wider">
              Assistance & Garde
            </span>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold font-sans">
              <li>📍 Siège : Boulevard de la République, Djibouti-Ville</li>
              <li>📞 Urgences Officines: +253 21 35 XX XX</li>
              <li>✉️ Support Clinique: contact@d-pharma.dj</li>
              <li className="pt-2 text-[10px] font-mono text-slate-500 font-bold">
                ⚠️ En cas d'extrême urgence médicale, composez directement le 18 à Djibouti.
              </li>
            </ul>
          </div>

        </div>

        {/* Footer final disclaimer bottom line */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex flex-col space-y-1 text-left">
            <span>© 2026 D-Pharma. Tous droits réservés.</span>
            <span className="text-emerald-400 font-bold">Site de présentation développé par YAHYA SAID AWALEH</span>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 font-bold">
            <span className="text-white">Présenté par Ezzaldine & Mohamed</span>
            <span>—</span>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook link" className="hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Twitter link" className="hover:text-white transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Instagram link" className="hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="LinkedIn link" className="hover:text-white transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
