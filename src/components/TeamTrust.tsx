/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Linkedin, Quote, CheckCircle2, Award } from "lucide-react";
import { TEAM_MEMBERS } from "../data";

export default function TeamTrust() {
  const [activeQuote, setActiveQuote] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; name: string; role: string } | null>(null);

  return (
    <section id="team" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2563EB] text-xs font-mono font-bold tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            L'Équipage 🤝
          </span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none">
            L'équipe derrière D-Pharma
          </h2>
          <p className="mt-3 font-sans text-slate-500 font-semibold uppercase text-xs tracking-wider">
            Des professionnels dévoués à l'innovation médicale à Djibouti — Cliquez sur leurs portraits pour les agrandir
          </p>
        </div>

        {/* Team profiles block - Centered 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              onMouseEnter={() => setActiveQuote(member.id)}
              onMouseLeave={() => setActiveQuote(null)}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
            >
              
              {/* Leader Ring Effect for Ezzaldine & Mohamed */}
              <div className="absolute top-3 right-3 bg-gradient-to-tr from-[#2563EB] to-[#10B981] text-white font-mono text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-xs">
                Co-fondateur
              </div>

              {/* Avatar visual photo with monogram fallback - Trigger lightbox on click */}
              <div 
                onClick={() => setLightboxImage({ url: member.avatarUrl, name: member.name, role: member.role })}
                className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 overflow-hidden flex items-center justify-center text-white font-display font-extrabold text-2xl shadow-md ring-4 ring-blue-50 relative group-hover:scale-105 transition-all duration-300 cursor-pointer group/avatar"
              >
                {member.avatarUrl ? (
                  <img 
                    src={member.avatarUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const span = document.createElement("span");
                        span.innerText = member.name.split(" ").slice(0, 2).map(n => n[0]).join("");
                        span.className = "font-display font-bold text-2xl text-white";
                        parent.appendChild(span);
                      }
                    }}
                  />
                ) : (
                  <span>{member.name.split(" ").slice(0, 2).map(n => n[0]).join("")}</span>
                )}
                
                {/* Visual badge */}
                <span className="absolute bottom-1 right-1 bg-[#10B981] p-1.5 rounded-full border-2 border-white group-hover/avatar:bg-blue-600 transition-colors">
                  <Award className="w-3.5 h-3.5 text-white animate-pulse" />
                </span>

                {/* Hover glass zoom overlay */}
                <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center transition-opacity text-white text-[10px] font-bold font-mono">
                  🔎 AGRANDIR
                </div>
              </div>

              {/* Character Details */}
              <div className="mt-5 space-y-1">
                <h3 className="font-display font-extrabold text-slate-900 text-base">
                  {member.name}
                </h3>
                <span className="block text-[11px] font-mono font-bold text-[#2563EB] uppercase tracking-wide">
                  {member.role}
                </span>
              </div>

              {/* Interactive Founder quote reveal bubble */}
              <div className="mt-5 min-h-[90px] flex items-center justify-center relative w-full">
                <div className="bg-white p-4 rounded-2xl border border-slate-150 shadow-3xs max-w-[95%] text-center relative transition-all duration-300">
                  <Quote className="w-4 h-4 text-[#2563EB] mb-1.5 mx-auto opacity-70" />
                  <p className="font-sans text-[11px] text-slate-600 font-semibold italic leading-normal">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              {/* Social linkedin anchor */}
              <div className="mt-6 pt-3 border-t border-slate-200/50 w-full flex justify-center">
                <a 
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-[#2563EB] transition-colors"
                  aria-label={`LinkedIn profle of ${member.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Zooming Team Member Photo */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden p-3 max-w-lg w-full shadow-2xl relative border border-slate-150 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-slate-900/10 hover:bg-slate-900/25 text-slate-800 p-2.5 rounded-full z-10 transition-colors cursor-pointer"
            >
              ✕
            </button>
            
            {/* Expanded Photo Container */}
            <div className="h-96 sm:h-[450px] rounded-2xl overflow-hidden bg-slate-100 shadow-inner relative">
              <img 
                src={lightboxImage.url} 
                alt={lightboxImage.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Metadata Description Bar */}
            <div className="p-4 text-center">
              <h4 className="font-display font-black text-slate-900 text-lg">{lightboxImage.name}</h4>
              <p className="text-xs font-mono font-bold text-blue-600 mt-1 uppercase tracking-wider">{lightboxImage.role}</p>
              <span className="inline-block mt-3 text-[10px] bg-blue-50 text-blue-800 px-3 py-1 rounded-full font-sans font-semibold">
                Membre de l'Équipement Fondateur — D-Pharma Djibouti
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
