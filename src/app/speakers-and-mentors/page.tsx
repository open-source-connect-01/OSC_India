"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ResearchLeadershipSection from "@/components/ResearchLeadershipSection";
import ProfileModal from "@/components/ProfileModal";
import type { ProfileData } from "@/components/ProfileModal";
import type { ActiveOverlay } from "@/components/Navbar";

export default function SpeakersAndMentorsPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(null);

  const handleNavClick = (label: ActiveOverlay) => {
    setIsMobileMenuOpen(false);
    if (label && label !== "events") {
      router.push("/?nav=" + label);
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <Navbar
          activeOverlay={null}
          onNavClick={handleNavClick}
          onMobileNavClick={handleNavClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </header>
      <main className="flex-1">
        <ResearchLeadershipSection
          selectedProfile={selectedProfile}
          onProfileSelect={(profile) => setSelectedProfile(profile)}
          onProfileClose={() => setSelectedProfile(null)}
        />
      </main>

      {/* Profile Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  );
}
