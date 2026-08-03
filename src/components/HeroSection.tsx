"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #EFF4FC 0%, #FAFBFE 55%, #FFFFFF 100%)' }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-14 pb-10 lg:pb-14">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10">
          {/* Left Content Column */}
          <div className="flex-1 min-w-0">
            {/* Announcement Pill Badge */}
            <div className="inline-flex items-center gap-2 border border-blue-200/90 bg-blue-50/40 rounded-full px-3.5 py-1 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              <span className="text-[9.5px] sm:text-[10.5px] font-extrabold tracking-[0.12em] text-[#2563EB] uppercase">
                GOVERNANCE UPDATE: CHARTER V2.4 APPROVED
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[32px] sm:text-5xl md:text-[68px] lg:text-[76px] xl:text-[84px] font-black text-[#0B0F1A] leading-[1.06] lg:leading-[0.98] tracking-tight mb-5">
              {/* Mobile 3-line structure matching screenshot */}
              <span className="block sm:hidden">Connecting The</span>
              <span className="block sm:hidden">World Through</span>

              {/* Desktop Line 1 */}
              <span className="hidden sm:block lg:whitespace-nowrap">Connecting The World</span>

              {/* Desktop Line 2 / Mobile Line 3 */}
              <span className="block mt-1 lg:mt-2">
                <span className="hidden sm:inline">Through </span>
                <span className="font-serif italic font-normal text-[#1D4ED8]">
                  Open Source
                </span>
              </span>
            </h1>

            {/* Subheading Description */}
            <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 font-medium max-w-[580px] leading-relaxed mb-6 lg:mb-8">
              Open Source Connect (OSC) provides governance, financial stewardship,
              and collaborative infrastructure to ensure long-term sustainability of
              high-impact open-source technologies worldwide.
            </p>

            {/* Mobile CoreFocusCard (positioned between paragraph and buttons on mobile) */}
            <div className="mb-6 lg:hidden">
              <CoreFocusCard isMobile />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5">
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[48px] sm:h-[52px] px-8 bg-[#0A1B3D] text-white text-[11px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] shadow-sm hover:bg-[#122752] transition-colors w-full sm:w-auto text-center"
              >
                OUR MISSION &amp; BYLAWS
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[48px] sm:h-[52px] px-8 bg-white text-[#0A1B3D] border border-slate-300 text-[11px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] hover:bg-slate-50 transition-colors w-full sm:w-auto text-center"
              >
                TECHNICAL PORTFOLIO
              </Link>
            </div>
          </div>

          {/* Right: Floating CoreFocusCard with offset shadow (Desktop only) */}
          <div className="hidden lg:block w-[330px] shrink-0 relative mt-[165px]">
            <div className="relative">
              {/* Slate-blue offset shadow block */}
              <div className="absolute top-3 left-3 w-full h-full bg-[#94A3B8]/60 rounded-[2px] z-0" />
              {/* White card */}
              <div className="relative z-10">
                <CoreFocusCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreFocusCard({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div
      className={`w-full bg-white p-6 sm:p-7 shadow-xl rounded-[2px] ${
        isMobile ? "border-l-4 border-l-[#2563EB] border-y border-r border-gray-100" : "border border-gray-100/90"
      }`}
    >
      <h3 className="text-[10.5px] font-extrabold tracking-[0.2em] text-gray-400 uppercase mb-4 sm:mb-5">
        CORE FOCUS
      </h3>
      <ul className="space-y-3.5 sm:space-y-4">
        {[
          "Responsible & Applied AI",
          "Cloud-Native",
          "Digital Resilience",
          "Robotics Engineering",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#F59E0B] rounded-[1px] shrink-0" />
            <span className="text-[13.5px] sm:text-[15px] font-extrabold text-[#0B0F1A]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
