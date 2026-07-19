import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-hero-bg overflow-hidden">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 pt-10 pb-6 lg:pb-10">
        <div className="relative flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
          {/* Left Content */}
          <div className="relative z-10 flex-1">
            {/* Eyebrow / Announcement */}
            <div className="flex items-center gap-3 mb-[18px]">
              <div className="w-7 h-7 rounded-full bg-accent-blue/10 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-accent-blue"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold tracking-[0.08em] text-gray-400 uppercase">
                Governance Update — Charter v2.4 Approved
              </span>
            </div>

            {/* Main Headline - wider than paragraph */}
            <div className="max-w-[580px]">
              <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] xl:text-[64px] font-extrabold text-navy leading-[1.08] mb-5 tracking-tight">
                Connecting The World
                <br />
                Through{" "}
                <span className="font-serif italic text-accent-blue font-bold">
                  Open Source
                </span>
              </h1>
            </div>

            {/* Subheading - narrower width */}
            <p className="max-w-[470px] text-[17px] leading-[1.7] text-gray-400 mb-6">
              Open Source Connect (OSC) provides governance, financial
              stewardship, and collaborative infrastructure to ensure long-term
              sustainability of high-impact open-source technologies worldwide.
            </p>

            {/* CTA Buttons - align with paragraph left edge */}
            <div className="max-w-[470px] flex flex-wrap gap-[18px]">
              <Link
                href="#"
                className="inline-flex items-center h-[46px] px-[26px] bg-navy text-white text-[11px] font-bold tracking-[0.12em] uppercase rounded-[6px] hover:bg-navy-light transition-all duration-200"
              >
                Our Mission &amp; Bylaws
              </Link>
              <Link
                href="#"
                className="inline-flex items-center h-[46px] px-[26px] bg-transparent text-navy border border-navy/25 text-[11px] font-bold tracking-[0.12em] uppercase rounded-[6px] hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
              >
                Technical Portfolio
              </Link>
            </div>

            {/* Mobile CoreFocusCard */}
            <div className="mt-10 lg:hidden">
              <CoreFocusCard />
            </div>
          </div>

          {/* Right: Floating CoreFocusCard (desktop only) */}
          <div className="hidden lg:block w-[280px] shrink-0 relative">
            <div className="absolute right-0 top-[-25px] z-20">
              <CoreFocusCard />
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute top-20 right-4 w-36 h-36 opacity-[0.25]">
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

      {/* Subtle separator line */}
      <div className="h-px bg-divider-blue" />
    </section>
  );
}

function CoreFocusCard() {
  return (
    <div className="w-full lg:w-[255px] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.12)] p-6 rounded-[6px]">
      <h3 className="text-[10px] font-bold tracking-[0.2em] text-navy uppercase mb-5">
        Core Focus
      </h3>
      <ul className="space-y-[18px]">
        {[
          "Responsible & Applied AI",
          "Cloud-Native",
          "Digital Resilience",
          "Robotics Engineering",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-accent-blue rounded-full shrink-0" />
            <span className="text-sm font-medium text-gray-600">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
