"use client";

import { useState, useCallback, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { ActiveOverlay } from "@/components/Navbar";
import TopUtilityBar from "@/components/TopUtilityBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsRow from "@/components/StatsRow";
import CoreFocusSection from "@/components/CoreFocusSection";
import CommunitySpotlightSection from "@/components/CommunitySpotlightSection";
import ConnectContributeGrowSection from "@/components/ConnectContributeGrowSection";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import CommunityOverlay from "@/components/CommunityOverlay";

function HomeContent() {
  const searchParams = useSearchParams();
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollYRef = useRef(0);
  const navReadRef = useRef(false);

  // Read ?nav= query param on mount only
  useEffect(() => {
    if (navReadRef.current) return;
    navReadRef.current = true;
    const nav = searchParams.get("nav") as ActiveOverlay | null;
    if (nav && nav !== "events") {
      setActiveOverlay(nav);
    }
  }, [searchParams]);

  const handleNavClick = useCallback((label: ActiveOverlay) => {
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  }, []);

  const handleCloseOverlay = useCallback(() => {
    // Clean up ?nav= query param from URL if present
    const url = new URL(window.location.href);
    if (url.searchParams.has("nav")) {
      url.searchParams.delete("nav");
      window.history.replaceState({}, "", url.toString());
    }
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

  // Lock body scroll when any overlay is open (robust for mobile)
  useEffect(() => {
    const preventTouch = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (hasActiveOverlay) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = "-" + scrollYRef.current + "px";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
      document.addEventListener("touchmove", preventTouch, { passive: false });
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.removeEventListener("touchmove", preventTouch);
    };
  }, [hasActiveOverlay]);

  return (
    <div className="flex flex-col min-h-full">
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
        <CoreFocusSection />
        <CommunitySpotlightSection />
        <ConnectContributeGrowSection />
      </main>

      <FooterSection />

      {/* Overlays */}
      <AboutOverlay isOpen={activeOverlay === "about"} onClose={handleCloseOverlay} />
      <WhatWeDoOverlay isOpen={activeOverlay === "whatwedo"} onClose={handleCloseOverlay} />
      <CommunityOverlay isOpen={activeOverlay === "resources"} onClose={handleCloseOverlay} />
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
