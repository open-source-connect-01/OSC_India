import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-hero-bg overflow-hidden">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 pt-8 pb-4 lg:pb-6">
        <div className="relative flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
          {/* Left Content */}
          <div className="relative z-10 flex-1">
            {/* Eyebrow / Announcement — compact */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
              <span className="text-[9px] font-bold tracking-[0.08em] text-accent-blue uppercase">
                Governance Update: Charter v2.4 Approved
              </span>
            </div>

            {/* Main Headline - 2-line wrap, larger, tighter */}
            <div className="max-w-[620px]">
              <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] xl:text-[72px] font-extrabold text-navy leading-[1.02] mb-4 tracking-tight">
                Connecting The World
                <br />
                Through{" "}
                <span className="font-serif italic text-[#1a3a7a] font-bold">
                  Open Source
                </span>
              </h1>
            </div>

            {/* Subheading - wider for 3-line wrap, tighter spacing */}
            <p className="max-w-[500px] text-[17px] leading-[1.7] text-gray-400 mb-4">
              Open Source Connect (OSC) provides governance, financial
              stewardship, and collaborative infrastructure to ensure long-term
              sustainability of high-impact open-source technologies worldwide.
            </p>

            {/* CTA Buttons - tighter spacing */}
            <div className="max-w-[470px] flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[44px] px-[24px] bg-navy text-white text-[11px] font-bold tracking-[0.12em] uppercase rounded-[6px] hover:bg-navy-light transition-all duration-200 w-full sm:w-auto"
              >
                Our Mission &amp; Bylaws
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[44px] px-[24px] bg-transparent text-navy border border-navy/25 text-[11px] font-bold tracking-[0.12em] uppercase rounded-[6px] hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 w-full sm:w-auto"
              >
                Technical Portfolio
              </Link>
            </div>

            {/* Mobile CoreFocusCard */}
            <div className="mt-6 lg:hidden">
              <CoreFocusCard />
            </div>
          </div>

          {/* Right: Floating CoreFocusCard (desktop only) - positioned higher */}
          <div className="hidden lg:block w-[280px] shrink-0 relative">
            <div className="absolute right-0 top-[-40px] z-20">
              <CoreFocusCard />
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute top-16 right-4 w-36 h-36 opacity-[0.25]">
              <div className="grid grid-cols-5 gap-2.5">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[5px] h-[5px] rounded-full bg-navy"
                  />
                ))}
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
    <div className="w-full lg:w-[255px] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] p-5 rounded-[6px]">
      <h3 className="text-[10px] font-bold tracking-[0.2em] text-navy uppercase mb-4">
        Core Focus
      </h3>
      <ul className="space-y-4">
        {[
          "Responsible & Applied AI",
          "Cloud-Native",
          "Digital Resilience",
          "Robotics Engineering",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-[10px] h-[10px] bg-amber-500 shrink-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} />
            <span className="text-sm font-medium text-gray-600">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
