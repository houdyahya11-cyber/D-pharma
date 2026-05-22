/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Activity, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export default function Navbar({ onOpenWaitlist }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Problème", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "IA", href: "#ai-capabilities" },
    { name: "Avantage", href: "#advantage" },
    { name: "Marché", href: "#market" },
    { name: "Économie", href: "#economy" },
    { name: "Démo Live", href: "#demo" },
    { name: "Équipe", href: "#team" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden shadow-md shadow-blue-500/10 relative">
              <img 
                src="/logo.jpg" 
                alt="D-Pharma Logo" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.className = "w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#10B981] flex items-center justify-center text-white shadow-md shadow-blue-500/20";
                    // Create and append fallback Activity icon
                    const svgDot = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svgDot.setAttribute("width", "20");
                    svgDot.setAttribute("height", "20");
                    svgDot.setAttribute("viewBox", "0 0 24 24");
                    svgDot.setAttribute("fill", "none");
                    svgDot.setAttribute("stroke", "currentColor");
                    svgDot.setAttribute("stroke-width", "2.5");
                    svgDot.setAttribute("stroke-linecap", "round");
                    svgDot.setAttribute("stroke-linejoin", "round");
                    svgDot.innerHTML = '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>';
                    parent.appendChild(svgDot);
                  }
                }}
              />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                D-Pharma
              </span>
              <span className="block text-[9px] font-mono text-[#10B981] font-semibold tracking-widest uppercase">
                Djibouti Health
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-[#2563EB] transition-colors rounded-lg hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Menu */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-mono text-[11px] font-semibold border border-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Pharmaceutique</span>
            </div>
            <button
              id="cta-nav-commander"
              onClick={onOpenWaitlist}
              className="bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 border border-blue-600 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer"
            >
              Commander maintenant
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-lg py-4 absolute top-full left-0 right-0 z-40">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-medium text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100 px-4 flex flex-col space-y-3">
              <div className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-mono text-xs font-semibold border border-emerald-100 w-fit">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Pharmaceutique</span>
              </div>
              <button
                id="cta-mobile-commander"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-semibold py-3 px-4 border border-blue-600 rounded-xl shadow-md cursor-pointer transition-all"
              >
                Commander maintenant
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
