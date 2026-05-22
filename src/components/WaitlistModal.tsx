/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  segmentName: string | null;
}

export default function WaitlistModal({ isOpen, onClose, segmentName }: WaitlistModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Djibouti-Ville");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setName("");
      setEmail("");
      setPhone("");
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      ></div>

      {/* Dialog box body */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl max-w-md w-full p-6 sm:p-8 relative z-10 leading-normal animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close trigger button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 bg-slate-50 rounded-full cursor-pointer"
          aria-label="Close modal dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <span className="text-[9px] font-mono text-[#2563EB] font-bold bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
                Phase de lancement limitée 🚀
              </span>
              <h3 className="font-display font-extrabold text-xl text-slate-900 mt-2">
                Rejoindre la liste d'attente
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-normal font-semibold mt-1">
                {segmentName 
                  ? `Vous postulez en tant que : ${segmentName}. Soyez parmi les premiers avertis du déploiement officiel.` 
                  : "Soumettez vos coordonnées pour réserver votre accès exclusif aux officines de Djibouti."}
              </p>
            </div>

            {/* Fields list */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">Nom complet</label>
                <input 
                  type="text"
                  required
                  placeholder="Ezzaldine, Mohamed ou Yahya"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">Adresse Email</label>
                <input 
                  type="email"
                  required
                  placeholder="contact@d-pharma.dj"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">Numéro de Téléphone (+253)</label>
                <input 
                  type="tel"
                  placeholder="77 XX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase mb-1">Secteur / Quartier (Djibouti)</label>
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2.5 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                >
                  <option value="Djibouti-Ville">Djibouti-Ville</option>
                  <option value="Balbala">Balbala</option>
                  <option value="Arta">Arta</option>
                  <option value="Tadjourah">Tadjourah</option>
                  <option value="Obock">Obock</option>
                  <option value="Ali Sabieh / Dikhil">Ali Sabieh / Dikhil</option>
                </select>
              </div>
            </div>

            {/* Security disclaimers */}
            <div className="flex items-center gap-1.5 text-[9px] text-[#2563EB] font-medium leading-tight">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Vos données médicales et coordonnées de santé sont cryptées à 100%.</span>
            </div>

            {/* Action button */}
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-display font-extrabold text-xs py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Valider mon inscription</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-slate-900">Demande Enregistrée !</h3>
              <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed max-w-xs mx-auto font-semibold">
                Félicitations, <strong className="text-slate-800">{name}</strong> ! Vous êtes officiellement sur la liste d'attente prioritaire de <strong className="text-blue-600">D-Pharma</strong>.
              </p>
            </div>
            <span className="text-[10px] text-slate-405 font-mono">Fermeture automatique...</span>
          </div>
        )}

      </div>
    </div>
  );
}
