import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #EFF4FC 0%, #FAFBFE 55%, #FFFFFF 100%)' }}>
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 pt-8 lg:pt-14 pb-4 lg:pb-6">
        <div className="relative flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="relative z-10 flex-1">
            {/* Eyebrow / Announcement — compact */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
              <span className="text-[8.5px] font-bold tracking-[0.1em] text-gray-700 uppercase">
                Governance Update: Charter v2.4 Approved
              </span>
            </div>

            {/* Main Headline - scaled down to fit 2 lines */}
            <div className="max-w-[620px]">
              <h1 className="text-[36px] sm:text-[42px] lg:text-[50px] xl:text-[54px] font-extrabold text-navy leading-[1.08] mb-3 tracking-tight">
                Connecting The World
                <br />
                Through{" "}
                <span className="font-serif italic text-[#1a3a7a] font-bold">
                  Open Source
                </span>
              </h1>
            </div>

            {/* Subheading - Figma copy */}
            <p className="max-w-[500px] text-[15px] leading-[1.7] text-gray-400 mb-4">
              Open Source Connect (OSC) provides governance, financial
              stewardship, and collaborative infrastructure to ensure
              long-term sustainability of high-impact open-source technologies
              worldwide.
            </p>

            {/* CTA Buttons - tighter spacing */}
            <div className="max-w-[470px] flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[42px] px-[22px] bg-navy text-white text-[10px] font-bold tracking-[0.14em] uppercase rounded-[6px] hover:bg-navy-light transition-all duration-200 w-full sm:w-auto"
              >
                Our Mission &amp; Bylaws
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-[42px] px-[22px] bg-transparent text-navy border border-navy/25 text-[10px] font-bold tracking-[0.14em] uppercase rounded-[6px] hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 w-full sm:w-auto"
              >
                Technical Portfolio
              </Link>
            </div>

            {/* Mobile CoreFocusCard */}
            <div className="mt-6 lg:hidden">
              <CoreFocusCard />
            </div>
          </div>

          {/* Right: Floating CoreFocusCard (desktop only) */}
          <div className="hidden lg:block w-[280px] shrink-0 relative mt-10">
            <div className="relative">
              {/* Thin offset sliver — ~10px visible edge on right and bottom */}
              <div className="absolute top-[10px] left-[10px] w-full h-full bg-[#dce3ef] rounded-[6px] z-0" />
              {/* Card sits on top */}
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
    <div className="w-full lg:w-[255px] bg-white p-5 rounded-[6px] shadow-sm border border-gray-100">
      <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#8b93a8] uppercase mb-4">
        Core Focus
      </h3>
      <ul className="space-y-3.5">
        {[
          "Responsible & Applied AI",
          "Cloud-Native",
          "Digital Resilience",
          "Robotics Engineering",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-[9px] h-[9px] bg-[#F2811D] shrink-0" />
            <span className="text-sm font-semibold text-navy">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
