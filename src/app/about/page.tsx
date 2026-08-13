"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import AboutOverlay from "@/components/AboutOverlay";
import WhatWeDoOverlay from "@/components/WhatWeDoOverlay";
import CommunityOverlay from "@/components/CommunityOverlay";
import EventsOverlay from "@/components/EventsOverlay";
import type { ActiveOverlay } from "@/components/Navbar";

const coreValues = [
  {
    num: "01",
    borderColor: "border-l-[#2563EB]",
    numColor: "text-blue-200/90",
    title: "Transparency",
    desc: "Every decision, every dollar, every governance action is open to public scrutiny. We hold ourselves to the highest standard of openness.",
  },
  {
    num: "02",
    borderColor: "border-l-[#F97316]",
    numColor: "text-orange-200/90",
    title: "Meritocracy",
    desc: "Contributions are judged on their technical merit and community value — not on who you know or where you work.",
  },
  {
    num: "03",
    borderColor: "border-l-[#10B981]",
    numColor: "text-emerald-200/90",
    title: "Inclusivity",
    desc: "We actively work to remove barriers to participation. Open source must be accessible to everyone, everywhere, regardless of background.",
  },
  {
    num: "04",
    borderColor: "border-l-[#8B5CF6]",
    numColor: "text-purple-200/90",
    title: "Sustainability",
    desc: "We build for the long term. Our governance models, funding structures, and community practices are designed to outlast any individual.",
  },
  {
    num: "05",
    borderColor: "border-l-[#F59E0B]",
    numColor: "text-amber-200/90",
    title: "Collaboration",
    desc: "The best solutions emerge when brilliant minds work together across organizational and geographic boundaries.",
  },
  {
    num: "06",
    borderColor: "border-l-[#334155]",
    numColor: "text-slate-300",
    title: "Technical Excellence",
    desc: "We uphold rigorous standards for software quality, security, and architectural integrity across all hosted projects.",
  },
];

const historyTimeline = [
  {
    year: "2018",
    title: "The Beginning",
    desc: "OSC was founded by a group of open source maintainers who recognized the need for a neutral, mission-driven institution to support collaborative software development.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    desc: "We launched our first international programs, establishing chapters across 12 countries and hosting our inaugural Open Source Connect Global conference.",
  },
  {
    year: "2022",
    title: "Charter V2.0 Adopted",
    desc: "After 18 months of community-wide deliberation, we adopted our landmark governance charter — establishing the Technical Advisory Council and formal project lifecycle.",
  },
  {
    year: "2024",
    title: "15,000 Contributors",
    desc: "Our community surpassed 15,000 active contributors worldwide, with 400+ hosted projects spanning AI, cloud-native infrastructure, cybersecurity, and more.",
  },
  {
    year: "2026",
    title: "Today",
    desc: "OSC continues to grow as the world's leading open source foundation — driving technical standards, educational programs, and industry collaboration at scale.",
  },
];

const statsItems = [
  {
    stat: "400+",
    label: "PROJECTS",
    sublabel: "Hosted & Supported",
    tagColor: "text-[#2563EB]",
  },
  {
    stat: "15K+",
    label: "CONTRIBUTORS",
    sublabel: "Active Developers",
    tagColor: "text-[#10B981]",
  },
  {
    stat: "300+",
    label: "MEMBERS",
    sublabel: "Global Organizations",
    tagColor: "text-[#F97316]",
  },
  {
    stat: "20+",
    label: "COLLABORATIONS",
    sublabel: "Strategic Partnerships",
    tagColor: "text-[#A855F7]",
  },
];

export default function AboutOscPage() {
  const router = useRouter();
  const [activeOverlay, setActiveOverlay] = useState<ActiveOverlay | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (label: ActiveOverlay) => {
    setActiveOverlay((prev) => (prev === label ? null : label));
    setIsMobileMenuOpen(false);
  };

  const handleCloseOverlay = () => {
    setActiveOverlay(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <Navbar
          activeOverlay={activeOverlay}
          onNavClick={handleNavClick}
          onMobileNavClick={handleNavClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </header>

      {/* Navigation Overlays */}
      <AboutOverlay
        isOpen={activeOverlay === "about"}
        onClose={handleCloseOverlay}
      />
      <WhatWeDoOverlay
        isOpen={activeOverlay === "whatwedo"}
        onClose={handleCloseOverlay}
      />
      <CommunityOverlay
        isOpen={activeOverlay === "resources"}
        onClose={handleCloseOverlay}
      />
      <EventsOverlay
        isOpen={activeOverlay === "events"}
        onClose={handleCloseOverlay}
      />

      <main className="flex-1">
        {/* ===== HERO BANNER ===== */}
        <section className="w-full bg-gradient-to-r from-[#091535] via-[#10286B] to-[#1E3A8A] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">

          <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-200">ABOUT</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              About the{" "}
              <span className="font-serif italic font-normal text-[#F59E0B]">
                Open Source Connect
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-[19px] text-slate-300/85 font-normal max-w-[720px] leading-relaxed">
              We connect developers, communities, and organizations through open source programs, collaboration, and opportunities to build meaningful impact.
            </p>
          </div>
        </section>

        {/* ===== OUR MISSION & OUR VISION ===== */}
        <section className="w-full bg-white py-16 lg:py-24 border-b border-gray-100">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: Our Mission */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-[0.2em] mb-3">
                  <span className="w-2 h-2 bg-[#F59E0B] inline-block rounded-xs" />
                  OUR PURPOSE
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F1A] tracking-tight mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-4">
                  Open Source Connect exists to strengthen the open source ecosystem by bringing together developers, students, startups, and organizations to collaborate openly and build solutions that create real-world impact. 
                </p>
                <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
                  We are building a structured, transparent, and community-driven platform where innovation is supported, contributors are respected, and projects are nurtured from idea to long-term sustainability.
                </p>
              </div>

              {/* Right: Our Vision */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-[0.2em] mb-3">
                  <span className="w-2 h-2 bg-[#2563EB] inline-block rounded-xs" />
                  OUR VISION
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0F1A] tracking-tight mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed mb-4">
                  A world where open source innovation is universally accessible —
                  where every developer, student, and organization can contribute to
                  and benefit from shared technology.
                </p>
                <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
                  We envision communities free from proprietary lock-in, empowered by
                  transparent governance and collaborative excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CORE VALUES ===== */}
        <section className="w-full bg-[#F8FAFC] py-16 lg:py-24 border-b border-gray-100">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-[0.22em] mb-3">
                <span className="text-xs">■</span>
                WHAT WE STAND FOR
                <span className="text-xs">■</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B0F1A] tracking-tight">
                Core Values
              </h2>
            </div>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {coreValues.map((val) => (
                <div
                  key={val.num}
                  className={`bg-white p-7 sm:p-8 rounded-sm shadow-xs border-l-[4px] ${val.borderColor} transition-transform duration-200 hover:-translate-y-1 hover:shadow-md`}
                >
                  <div className={`text-4xl sm:text-5xl font-extrabold ${val.numColor} mb-4`}>
                    {val.num}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0F1A] mb-2.5">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-gray-500 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FOUNDATION HISTORY ===== */}
        <section className="w-full bg-white py-16 lg:py-24 border-b border-gray-100">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="mb-14">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-[0.2em] mb-3">
                <span className="w-2 h-2 bg-[#2563EB] inline-block rounded-xs" />
                OUR JOURNEY
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B0F1A] tracking-tight">
                Foundation History
              </h2>
            </div>

            {/* Timeline */}
            <div className="space-y-10 sm:space-y-12">
              {historyTimeline.map((item, idx) => (
                <div
                  key={item.year}
                  className={`flex flex-col sm:flex-row items-start gap-6 sm:gap-12 pb-10 sm:pb-12 ${
                    idx !== historyTimeline.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {/* Year */}
                  <div
                    className={`w-28 shrink-0 text-3xl sm:text-4xl font-extrabold tracking-tight ${
                      item.year === "2026" ? "text-[#F2811D]" : "text-[#2563EB]"
                    }`}
                  >
                    {item.year}
                  </div>

                  {/* Title & Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B0F1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[840px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== KEY STATS BAR ===== */}
        <section className="w-full bg-[#080E1E] text-white pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            {/* Exact 4-column bordered grid with thin vertical dividers */}
            <div className="border border-[#1E293B]/70 rounded-[2px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#1E293B]/70 bg-[#090F1E]">
              {statsItems.map((item) => (
                <div
                  key={item.label}
                  className="py-10 sm:py-12 lg:py-14 px-6 text-center flex flex-col items-center justify-center"
                >
                  <div className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-white mb-2 leading-none">
                    {item.stat}
                  </div>
                  <div className={`text-[10.5px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase ${item.tagColor} mb-1`}>
                    {item.label}
                  </div>
                  <div className="text-[11.5px] text-[#94A3B8] font-normal whitespace-nowrap">
                    {item.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHITE GAP BAND ===== */}
        <div className="w-full bg-white h-20 sm:h-28 lg:h-36" />
      </main>

      {/* Footer */}
      <FooterSection hideTopSections={true} />
    </div>
  );
}
