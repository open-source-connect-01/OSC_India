"use client";

import { useState, useCallback } from "react";
import TopUtilityBar from "@/components/TopUtilityBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsRow from "@/components/StatsRow";
import MissionSection from "@/components/MissionSection";
import CommunityOverlay from "@/components/CommunityOverlay";

export default function Home() {
  const [communityOpen, setCommunityOpen] = useState(false);

  const handleCommunityClick = useCallback(() => {
    setCommunityOpen((prev) => !prev);
  }, []);

  const handleCloseOverlay = useCallback(() => {
    setCommunityOpen(false);
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      {/* Permanent header: utility bar + nav bar always visible */}
      {/* Use z-30 so the overlay (z-40/z-50) stacks above it */}
      <header className="relative z-30">
        <TopUtilityBar />
        <Navbar
          onCommunityClick={handleCommunityClick}
          communityActive={communityOpen}
        />
      </header>

      <main className="flex-1">
        <HeroSection />
        <StatsRow />
        <MissionSection />
      </main>

      <CommunityOverlay isOpen={communityOpen} onClose={handleCloseOverlay} />
    </div>
  );
}
