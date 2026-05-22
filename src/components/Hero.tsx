/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Check, Smartphone, ShieldCheck, Star, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 bg-slate-50 overflow-hidden">
      {/* Immersive Stunning Moving Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-400/20 mix-blend-multiply filter blur-3xl animate-pulse-glow" style={{ animationDelay: "0s" }}></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-emerald-350/15 mix-blend-multiply filter blur-3xl animate-float-slow" style={{ animationDelay: "2.5s" }}></div>
      <div className="absolute -bottom-20 left-1/4 w-[450px] h-[450px] rounded-full bg-purple-400/10 mix-blend-multiply filter blur-3xl animate-float-reverse" style={{ animationDelay: "5s" }}></div>
      <div className="absolute top-2/3 right-1/3 w-80 h-80 rounded-full bg-amber-200/5 mix-blend-multiply filter blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>

      {/* Cinematic Ambient Floating D-Pharma Logo Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[580px] h-[400px] sm:h-[580px] opacity-[0.05] pointer-events-none select-none z-0">
        <motion.img 
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          src="/logo.jpg" 
          alt="D-Pharma Cinematic Background Logo" 
          className="w-full h-full object-contain rounded-full shadow-2xl filter saturate-150 blur-[2px]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Grid Pattern Watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563eb_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-[calc(110vh-112px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Block - Texts & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            
            {/* Promotion Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100/60 rounded-full px-4 py-1.5 w-fit shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-800 uppercase flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#10B981]" /> Djibouti HealthTech Leader 2026
              </span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-none">
              <span className="inline-flex items-center gap-6 sm:gap-8 mb-5 flex-wrap">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative shrink-0"
                >
                  {/* Premium animated glowing backing ring behind the official logo */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-emerald-400 to-[#2563EB] rounded-[32px] sm:rounded-[40px] opacity-75 blur-md animate-pulse"></div>
                  <img 
                    src="/logo.jpg" 
                    alt="Logo officiel D-Pharma" 
                    className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-[28px] sm:rounded-[36px] object-cover border-4 border-white shadow-2xl ring-4 ring-blue-500/10 hover:ring-blue-500/20 transition-all duration-300 z-10"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 z-20">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-white shadow-md"></span>
                  </span>
                </motion.div>
                <span className="self-center text-slate-900 font-black tracking-tight drop-shadow-xs">D-Pharma —</span>
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-[#10B981] bg-clip-text text-transparent block mt-2">
                Votre santé, notre priorité !
              </span>
            </h1>

            {/* Subheadline description */}
            <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              La première plateforme intelligente d'accès aux services pharmaceutiques à Djibouti. 
              Commandez en ligne, localisez les pharmacies de garde d'un coup d'œil, et suivez vos traitements en toute simplicité.
            </p>

            {/* Social Proof Bar */}
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-100/80 shadow-xs max-w-2xl flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2.5">
                {/* Visual Avatar representative of Founders */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center font-display font-black text-[10px] text-white shadow-sm ring-2 ring-white">
                  E & M
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-slate-900">Présenté par Ezzaldine & Mohamed</h4>
                  <div className="flex items-center space-x-1">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-medium text-slate-500">Pitch Innovant</span>
                  </div>
                </div>
              </div>

              {/* Vertical line divider */}
              <div className="hidden sm:block w-px h-8 bg-slate-200"></div>

              {/* Djibouti Scale stats summary */}
              <div className="flex items-center space-x-4">
                <div>
                  <span className="block font-display font-bold text-sm text-[#2563EB]">744 000+</span>
                  <span className="block text-[10px] text-slate-500 font-medium">Internautes à Djibouti</span>
                </div>
                <div>
                  <span className="block font-display font-bold text-sm text-[#10B981]">70%+</span>
                  <span className="block text-[10px] text-slate-500 font-medium tracking-tight">Utilisateurs mobiles</span>
                </div>
              </div>
            </div>

            {/* Dual CTAs & Trust micro-copy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <motion.button
                id="hero-primary-cta"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenWaitlist}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-4 px-6 border border-blue-600 rounded-xl shadow-md transition-all cursor-pointer text-center"
              >
                Commander mes médicaments
              </motion.button>
              <motion.a
                id="hero-secondary-cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#demo"
                className="bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold py-4 px-6 border border-slate-200 rounded-xl shadow-xs transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                Découvrir la plateforme
                <ArrowDown className="w-4 h-4 text-slate-500 animate-bounce" />
              </motion.a>
            </div>

            {/* Trust Micro-copy and device indicators */}
            <div className="flex items-center space-x-3 text-slate-400 pt-1">
              <Smartphone className="w-4 h-4 text-[#10B981]" />
              <span className="text-xs font-medium font-sans">
                Disponible pour smartphone — Testez la Démo interactive ci-dessous
              </span>
            </div>

          </motion.div>

          {/* Right Block - Cinematic Animated Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
            className="lg:col-span-5 flex justify-center lg:justify-end py-6"
          >
            <div className="relative w-72 sm:w-85 h-[580px] group">
              
              {/* Outer medical floating icons in absolute - Animated */}
              {/* Pill Bottle Floating */}
              <motion.div 
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -left-6 z-30 bg-white p-3 rounded-2xl shadow-xl border border-slate-100/80 flex items-center space-x-2"
              >
                <span className="text-xl">💊</span>
                <span className="text-[10.5px] font-mono font-bold text-slate-700">Stock Doliprane</span>
              </motion.div>
              
              {/* Maps Locator Floating */}
              <motion.div 
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-1/2 -right-12 z-30 bg-white p-3 rounded-2xl shadow-xl border border-slate-100/80 flex items-center space-x-2"
              >
                <span className="text-rose-500 font-bold">📍</span>
                <span className="text-[10.5px] font-sans font-bold text-slate-800">Garde Active 24/7</span>
              </motion.div>

              {/* Verified Badge Floating */}
              <motion.div 
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-16 -left-10 z-30 bg-emerald-50 p-2.5 rounded-2xl shadow-lg border border-emerald-100 flex items-center space-x-1.5"
              >
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span className="text-[10px] font-display font-bold text-emerald-800">Livraison 30 min</span>
              </motion.div>

              {/* Decorative Glow backdrops - Soft Cinematic Lighting with Dual-colored ambient orbs */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-[#2563EB]/25 to-[#10B981]/25 rounded-[70px] opacity-70 blur-3xl group-hover:scale-110 group-hover:opacity-90 transition-all duration-700 pointer-events-none"></div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>

              {/* CSS Phone Shell - High Fidelity 3D Chassis */}
              <motion.div 
                whileHover={{ 
                  y: -15,
                  rotateY: -8,
                  rotateX: 6,
                  scale: 1.03,
                  boxShadow: "0 40px 80px -20px rgba(37, 99, 235, 0.25), 0 0 40px 5px rgba(16, 185, 129, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="relative w-full h-full bg-[#0B0F19] rounded-[52px] p-3 shadow-2xl border-4 border-slate-800/90 overflow-hidden transform-gpu flex flex-col justify-between"
                style={{ 
                  perspective: 1200, 
                  transformStyle: "preserve-3d"
                }}
              >
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-6.5 bg-[#0B0F19] rounded-b-2xl z-35 flex items-center justify-center border-b border-x border-slate-800/40">
                  <div className="w-14 h-1.5 bg-slate-800/80 rounded-full mb-1"></div>
                  <div className="w-2.5 h-2.5 bg-blue-900/60 rounded-full mb-1 ml-2 border border-blue-500/10"></div>
                </div>

                {/* Inner Screen Canvas */}
                <div className="w-full h-full bg-slate-50 rounded-[40px] overflow-hidden relative flex flex-col font-sans border border-slate-950/20">
                  
                  {/* Cinematic Specular Light Reflection Overlay (Glass Sheen) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/12 to-white/6 pointer-events-none z-30 transition-transform duration-1000 group-hover:translate-x-full group-hover:translate-y-full transform -translate-x-full -translate-y-full"></div>

                  {/* Real App Mockup Image layered on top */}
                  <img 
                    src="/app-mockup.jpeg" 
                    alt="D-Pharma App Mockup" 
                    className="absolute inset-0 w-full h-full object-cover z-25 select-none transition-transform duration-700 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* HTML Simulator Fallback (visible if image fails) */}
                  <div className="w-full h-full flex flex-col pt-6 font-sans relative z-10">
                    {/* App Header Status */}
                    <div className="px-4 py-2 flex items-center justify-between border-b border-slate-100 bg-white shadow-3xs">
                      <div className="flex items-center gap-1.5">
                        <img src="/logo.jpg" alt="Logo mini" className="w-4 h-4 rounded-xs object-cover" />
                        <span className="text-[10px] font-bold font-mono text-[#2563EB]">D-Pharma App</span>
                      </div>
                      <span className="text-[8px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full font-semibold">BETA Djibouti</span>
                    </div>

                    {/* App Screen Content Placeholder (D-Pharma look and feel) */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3.5 select-none bg-slate-50/50">
                      
                      {/* User Profile Welcome */}
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">EM</div>
                        <div>
                          <span className="block text-[8px] text-slate-400">Ezzaldine & Mohamed</span>
                          <span className="block text-[10px] font-bold text-slate-800">Bonjour ! 👋</span>
                        </div>
                      </div>

                      {/* App search replica */}
                      <div className="bg-white rounded-xl border border-slate-150 p-2 flex items-center justify-between shadow-3xs hover:border-blue-200 transition-colors">
                        <div className="flex items-center space-x-1.5">
                          <span className="text-xs">🔍</span>
                          <span className="text-[9px] text-slate-400 font-semibold">Rechercher un médicament...</span>
                        </div>
                        <span className="text-[8px] bg-blue-50 text-[#2563EB] px-1.5 py-0.5 rounded-md font-mono font-bold">IA</span>
                      </div>

                      {/* Stock Alert list replica */}
                      <div>
                        <span className="block text-[9px] font-bold text-slate-700 mb-1.5 tracking-wider font-mono">MÉDICAMENTS POPULAIRES DJIBOUTI</span>
                        <div className="space-y-1.5">
                          <div className="bg-white rounded-xl p-2.5 border border-slate-100 flex items-center justify-between shadow-3xs">
                            <div className="flex items-center space-x-2">
                              <span className="text-base">💊</span>
                              <div>
                                <span className="block text-[10px] font-bold text-slate-800">Doliprane 1G</span>
                                <span className="block text-[7.5px] text-[#10B981] font-bold">En stock (450 FDJ)</span>
                              </div>
                            </div>
                            <span className="px-2.5 py-1 bg-[#2563EB] text-white text-[8px] font-bold rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">Ajouter</span>
                          </div>

                          <div className="bg-white rounded-xl p-2.5 border border-slate-100 flex items-center justify-between shadow-3xs">
                            <div className="flex items-center space-x-2">
                              <span className="text-base">🧬</span>
                              <div>
                                <span className="block text-[10px] font-bold text-slate-800">Amoxicilline 1G</span>
                                <span className="block text-[7.5px] text-purple-600 font-bold">Ordonnance requise (1200 FDJ)</span>
                              </div>
                            </div>
                            <span className="px-2.5 py-1 bg-purple-100 text-[#8B5CF6] text-[8px] font-bold rounded-lg">Scanner</span>
                          </div>
                        </div>
                      </div>

                      {/* Mini map mockup */}
                      <div className="bg-white rounded-xl p-2 border border-slate-100 shadow-3xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-slate-700 font-mono">CARTE DÉCO DE GÉOLOCALISATION</span>
                          <span className="text-[7.5px] font-mono font-bold text-amber-500 bg-amber-50 px-1 py-0.5 rounded border border-amber-100">Garde active</span>
                        </div>
                        <div className="h-16 rounded-lg bg-blue-50/80 relative overflow-hidden border border-blue-100/50 flex items-center justify-center">
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] [background-size:8px_8px]"></div>
                          {/* Coords */}
                          <div className="absolute top-2 left-6 w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-ping"></div>
                          <div className="absolute top-2 left-6 w-2.5 h-2.5 rounded-full bg-[#2563EB]"></div>
                          <div className="absolute bottom-4 right-10 w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                          <span className="text-[8px] font-bold font-mono text-slate-600 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-3xs border border-slate-100">Pharmacie Centrale ouverte</span>
                        </div>
                      </div>

                      {/* Chatbot conversation snippet bubble */}
                      <div className="space-y-1">
                        <div className="bg-emerald-50 text-slate-800 p-2.5 rounded-2xl rounded-tl-none text-[8.5px] max-w-[85%] border border-emerald-100 shadow-3xs font-sans">
                          <span className="font-bold block mb-0.5 text-emerald-800 font-mono">🤖 Assistant D-Pharma :</span>
                          "Bonjour ! J'ai corrigé 'dolipran' en **Doliprane 1000mg**. Il est disponible à la Pharmacie Centrale."
                        </div>
                      </div>

                    </div>

                    {/* App Footer Navigation bar */}
                    <div className="border-t border-slate-100 bg-white px-4 py-3 flex items-center justify-around z-10 shadow-lg">
                      <span className="text-sm font-bold text-[#2563EB] cursor-pointer">🏠</span>
                      <span className="text-sm text-slate-400 cursor-pointer hover:text-slate-600 transition-colors">🔍</span>
                      <span className="text-sm text-slate-400 cursor-pointer hover:text-slate-600 transition-colors">📍</span>
                      <span className="text-sm text-slate-400 cursor-pointer hover:text-slate-600 transition-colors">👤</span>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
