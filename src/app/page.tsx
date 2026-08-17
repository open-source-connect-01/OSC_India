"use client";

import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { ActiveOverlay } from "@/components/Navbar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { StatsNumbersRow, OurMissionSection } from "@/components/StatsRow";
import CoreFocusSection from "@/components/CoreFocusSection";
import CommunitySpotlightSection from "@/components/CommunitySpotlightSection";
import BecomeCommunityLeaderSection from "@/components/BecomeCommunityLeaderSection";
import ConnectContributeGrowSection from "@/components/ConnectContributeGrowSection";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import EventsOverlay from "@/components/EventsOverlay";

function HomeContent() {
  const searchParams = useSearchParams();
  const [userOverlay, setUserOverlay] = useState<ActiveOverlay | undefined>(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollYRef = useRef(0);

  const navParam = searchParams.get("nav") as ActiveOverlay | null;
  const activeOverlay =
    userOverlay !== undefined
      ? userOverlay
      : navParam && navParam !== "events"
      ? navParam
      : null;

  const handleNavClick = useCallback((label: ActiveOverlay) => {
    setUserOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  }, []);

  const handleCloseOverlay = useCallback(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.has("nav")) {
      url.searchParams.delete("nav");
      window.history.replaceState({}, "", url.toString());
    }
    setUserOverlay(null);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileNavClick = useCallback((label: ActiveOverlay) => {
    setUserOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  }, []);

  const hasActiveOverlay = activeOverlay !== null;

  // Lock body scroll when any overlay is open
  useEffect(() => {
    if (hasActiveOverlay) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = "-" + scrollYRef.current + "px";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }
  }, [hasActiveOverlay]);

  return (
    <div className="flex flex-col min-h-full">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
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
        {/* Full-screen initial viewport fold (Navbar + Hero + Stats) */}
        <div className="min-h-[calc(100vh-65px)] lg:min-h-[calc(100vh-73px)] flex flex-col justify-between bg-gradient-to-b from-[#EFF4FC] via-[#FAFBFE] to-white">
          <HeroSection />
          <StatsNumbersRow />
        </div>

        {/* Content below the initial fold */}
        <OurMissionSection />
        <CoreFocusSection />
        <CommunitySpotlightSection />
        <BecomeCommunityLeaderSection />
        <ConnectContributeGrowSection />
      </main>

      <FooterSection />

      {/* Overlays */}
      <AboutOverlay isOpen={activeOverlay === "about"} onClose={handleCloseOverlay} />
      <WhatWeDoOverlay isOpen={activeOverlay === "whatwedo"} onClose={handleCloseOverlay} />
      <EventsOverlay isOpen={activeOverlay === "events"} onClose={handleCloseOverlay} />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
