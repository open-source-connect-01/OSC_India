"use client";

import { useState, useCallback } from "react";
import type { ActiveOverlay } from "@/components/Navbar";
import TopUtilityBar from "@/components/TopUtilityBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsRow from "@/components/StatsRow";
import MissionSection from "@/components/MissionSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import CommunityOverlay from "@/components/CommunityOverlay";
import EventsOverlay from "@/components/EventsOverlay";

export default function Home() {
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = useCallback((label: ActiveOverlay) => {
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  }, []);

  const handleCloseOverlay = useCallback(() => {
    setActiveOverlay(null);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileNavClick = useCallback((label: ActiveOverlay) => {
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  }, []);

  const hasActiveOverlay = activeOverlay !== null;

  return (
    <div className="flex flex-col min-h-full">
      {/* Permanent header: utility bar + nav bar always visible */}
      {/* z-30 so the overlay (z-40/z-50) stacks above it */}
      <header className="relative z-30">
        <TopUtilityBar />
        <Navbar
          onNavClick={handleNavClick}
          activeOverlay={activeOverlay}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={handleMobileMenuToggle}
          onMobileNavClick={handleMobileNavClick}
        />
      </header>

      <main
        className={`flex-1 transition-all duration-300 ${
          hasActiveOverlay ? "opacity-40 pointer-events-none" : ""
        }`}
      >
        <HeroSection />
        <StatsRow />
        <MissionSection />
      </main>

      {/* Overlays */}
      <AboutOverlay isOpen={activeOverlay === "about"} onClose={handleCloseOverlay} />
      <WhatWeDoOverlay isOpen={activeOverlay === "whatwedo"} onClose={handleCloseOverlay} />
      <CommunityOverlay isOpen={activeOverlay === "community"} onClose={handleCloseOverlay} />
      <EventsOverlay isOpen={activeOverlay === "events"} onClose={handleCloseOverlay} />
    </div>
  );
}
