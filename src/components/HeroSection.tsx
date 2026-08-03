"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #EFF4FC 0%, #FAFBFE 55%, #FFFFFF 100%)' }}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 pt-10 lg:pt-14 pb-10 lg:pb-14">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10">
          {/* Left Content Column */}
          <div className="flex-1 min-w-0">
            {/* Announcement Pill Badge */}
            <div className="inline-flex items-center gap-2 border border-blue-200/90 bg-blue-50/40 rounded-full px-3.5 py-1 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              <span className="text-[10px] sm:text-[10.5px] font-extrabold tracking-[0.12em] text-[#2563EB] uppercase">
                GOVERNANCE UPDATE: CHARTER V2.4 APPROVED
              </span>
            </div>

            {/* Main Headline — Massive scale matching Figma */}
            <h1 className="text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] xl:text-[84px] font-black text-[#0B0F1A] leading-[0.98] tracking-[-0.03em] mb-6">
              <span className="block sm:whitespace-nowrap">Connecting The World</span>
              <span className="block sm:whitespace-nowrap mt-1 sm:mt-2">
                Through{" "}
                <span className="font-serif italic font-normal text-[#1D4ED8]">
                  Open Source
                </span>
              </span>
            </h1>

            {/* Subheading Description */}
            <p className="text-sm sm:text-base lg:text-[17px] text-gray-500 max-w-[580px] leading-relaxed mb-8">
              Open Source Connect (OSC) provides governance, financial stewardship,
              and collaborative infrastructure to ensure long-term sustainability of
              high-impact open-source technologies worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5">
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[52px] px-8 bg-[#0B0F1A] text-white text-[11px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] shadow-sm hover:bg-slate-800 transition-colors w-full sm:w-auto"
              >
                OUR MISSION &amp; BYLAWS
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[52px] px-8 bg-white text-[#0B0F1A] border border-slate-300 text-[11px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] hover:bg-slate-50 transition-colors w-full sm:w-auto"
              >
                TECHNICAL PORTFOLIO
              </Link>
            </div>

            {/* Mobile CoreFocusCard */}
            <div className="mt-8 lg:hidden">
              <CoreFocusCard />
            </div>
          </div>

          {/* Right: Floating CoreFocusCard with offset shadow */}
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

function CoreFocusCard() {
  return (
    <div className="w-full bg-white p-7 border border-gray-100/90 shadow-xl rounded-[2px]">
      <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-gray-400 uppercase mb-5">
        CORE FOCUS
      </h3>
      <ul className="space-y-4">
        {[
          "Responsible & Applied AI",
          "Cloud-Native",
          "Digital Resilience",
          "Robotics Engineering",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#F59E0B] rounded-[1px] shrink-0" />
            <span className="text-[15px] font-extrabold text-[#0B0F1A]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
