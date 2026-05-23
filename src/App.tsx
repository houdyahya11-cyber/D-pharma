/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import LiveDemo from "./components/LiveDemo";
import TeamTrust from "./components/TeamTrust";
import FooterCTA from "./components/FooterCTA";
import WaitlistModal from "./components/WaitlistModal";

export default function App() {
  // Global modal state
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const handleOpenWaitlist = (segmentName?: string) => {
    setActiveSegment(segmentName || "Utilisateur Standard");
    setIsWaitlistOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistOpen(false);
    setActiveSegment(null);
  };

  // Force navigate the demo focus tab down if requested by other sections
  const handleFeatureNavigate = (featureId: string) => {
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 scroll-smooth selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenWaitlist={() => handleOpenWaitlist("Général")} />

      {/* Main Single-Scroll Stack */}
      <main className="space-y-0 pt-16">
        
        {/* SECTION 1: ABOVE THE FOLD HERO */}
        <Hero 
          onOpenWaitlist={() => handleOpenWaitlist("Patient Express")} 
        />

        {/* SECTION 2 & 3: THE PROBLEM & SOLUTION GRILLS */}
        <ProblemSolution onFeatureSelect={handleFeatureNavigate} />

        {/* SECTION 13: 3D PHONE PERSPECTIVE INTERACTIVE SIMULATORS */}
        <LiveDemo />

        {/* SECTION 14: STRATEGIC TEAM TRUST BIOS */}
        <TeamTrust />

        {/* SECTION 15 & 16: CLOSING CTA & FULL INDEX FOOTER */}
        <FooterCTA 
          onOpenWaitlist={handleOpenWaitlist}
          onNavigateToDemo={handleFeatureNavigate}
        />

      </main>

      {/* Persistent Waitlist signup dialogue box */}
      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={handleCloseWaitlist}
        segmentName={activeSegment}
      />

    </div>
  );
}
