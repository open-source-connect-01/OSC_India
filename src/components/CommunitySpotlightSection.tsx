import Link from "next/link";

const personColors: Record<string, { badge: string; pillBg: string; pillText: string; pillIcon: string; photoBg: string }> = {
  "Dr. Sarah Chen": {
    badge: "bg-blue-500",
    pillBg: "bg-blue-50",
    pillText: "text-blue-700",
    pillIcon: "text-blue-500",
    photoBg: "from-blue-400 to-blue-600",
  },
  "Marcus Johnson": {
    badge: "bg-green-500",
    pillBg: "bg-green-50",
    pillText: "text-green-700",
    pillIcon: "text-green-500",
    photoBg: "from-green-400 to-green-600",
  },
  "Elena Rodriguez": {
    badge: "bg-orange-500",
    pillBg: "bg-orange-50",
    pillText: "text-orange-700",
    pillIcon: "text-orange-500",
    photoBg: "from-orange-400 to-orange-600",
  },
  "James Park": {
    badge: "bg-purple-500",
    pillBg: "bg-purple-50",
    pillText: "text-purple-700",
    pillIcon: "text-purple-500",
    photoBg: "from-purple-400 to-purple-600",
  },
};

const spotlightCards = [
  {
    name: "Dr. Sarah Chen",
    initials: "SC",
    role: "Chief Technology Officer",
    org: "CloudNative Foundation",
    specialty: "Cloud Architecture & DevOps",
    highlights: [
      "Keynote Speaker at OSS Summit 2026",
      "Maintainer of 10+ major projects",
    ],
  },
  {
    name: "Marcus Johnson",
    initials: "MJ",
    role: "Principal Engineer",
    org: "Open Source Labs Inc.",
    specialty: "Distributed Systems & Security",
    highlights: [
      "Keynote Speaker at OSS Summit 2026",
      "Maintainer of 10+ major projects",
    ],
  },
  {
    name: "Elena Rodriguez",
    initials: "ER",
    role: "VP of Engineering",
    org: "TechVentures Inc.",
    specialty: "AI/ML & Open Innovation",
    highlights: [
      "Keynote Speaker at OSS Summit 2026",
      "Maintainer of 10+ major projects",
    ],
  },
  {
    name: "James Park",
    initials: "JP",
    role: "Lead Developer Advocate",
    org: "Global Tech Alliance",
    specialty: "Developer Relations & Community",
    highlights: [
      "Keynote Speaker at OSS Summit 2026",
      "Maintainer of 10+ major projects",
    ],
  },
];

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function MedalIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function CommunitySpotlightSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[28px] lg:text-[30px] font-extrabold text-[#0B0F1A] leading-tight">
            Community Spotlight
          </h2>
          <div className="w-[60px] h-[4px] bg-accent-orange rounded-full mt-2 mb-5" />
          <p className="max-w-[650px] text-[15px] text-gray-400 leading-relaxed mt-3">
            Celebrating the builders, maintainers, researchers, and leaders
            driving meaningful innovation across the Open Source Connect
            ecosystem. Our community represents diverse expertise across
            emerging technologies and real-world industry challenges.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-x-12 sm:gap-x-16 gap-y-8 mb-12 lg:mb-14">
          {/* Stat 1 — Blue / Growth */}
          <div className="flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center mb-3">
              <TrendingUpIcon className="text-blue-500 w-[18px] h-[18px]" />
            </div>
            <div className="text-[26px] sm:text-[28px] font-extrabold text-navy-deep leading-none">
              500+
            </div>
            <div className="text-[10px] font-bold tracking-[0.08em] text-gray-400 uppercase mt-1.5">
              Active Leaders
            </div>
          </div>
          {/* Stat 2 — Green / Globe */}
          <div className="flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center mb-3">
              <GlobeIcon className="text-green-500 w-[18px] h-[18px]" />
            </div>
            <div className="text-[26px] sm:text-[28px] font-extrabold text-navy-deep leading-none">
              50+
            </div>
            <div className="text-[10px] font-bold tracking-[0.08em] text-gray-400 uppercase mt-1.5">
              Countries
            </div>
          </div>
          {/* Stat 3 — Amber / Medal */}
          <div className="flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center mb-3">
              <MedalIcon className="text-amber-500 w-[18px] h-[18px]" />
            </div>
            <div className="text-[26px] sm:text-[28px] font-extrabold text-navy-deep leading-none">
              100+
            </div>
            <div className="text-[10px] font-bold tracking-[0.08em] text-gray-400 uppercase mt-1.5">
              Speaking Sessions
            </div>
          </div>
        </div>

        {/* 2×2 Horizontal Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {spotlightCards.map((person) => {
            const colors = personColors[person.name];
            return (
              <div
                key={person.name}
                className="flex gap-4 sm:gap-5 bg-white border border-gray-200 rounded-[8px] p-5"
              >
                {/* Photo with colored badge */}
                <div className="relative w-[110px] sm:w-[130px] aspect-[3/4] shrink-0">
                  <div
                    className={`w-full h-full rounded-[6px] bg-gradient-to-br ${colors.photoBg} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-lg sm:text-xl tracking-wide">
                      {person.initials}
                    </span>
                  </div>
                  {/* Colored square badge — bottom-right corner overlap */}
                  <div
                    className={`absolute -bottom-1.5 -right-1.5 w-[28px] h-[28px] rounded-[5px] ${colors.badge} flex items-center justify-center shadow-sm`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-navy-deep leading-snug">
                    {person.name}
                  </h3>
                  <p className="text-[12px] text-gray-400 mt-0.5">{person.role}</p>
                  <p className="text-[11px] text-accent-blue font-medium mt-0.5">
                    {person.org}
                  </p>

                  {/* Specialty — colored pill badge */}
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${colors.pillBg} mt-2.5 mb-2`}>
                    <CodeIcon className={colors.pillIcon} />
                    <span className={`text-[10px] font-semibold ${colors.pillText} leading-none`}>
                      {person.specialty}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {person.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-[5px] h-[5px] bg-[#F2811D] rounded-full mt-[5px] shrink-0" />
                        <span className="text-[11px] text-gray-500 leading-snug">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner — subtle neutral gradient */}
        <div className="mt-12 lg:mt-14 w-full bg-gradient-to-r from-[#F5F7FA] via-[#FAFBFC] to-white rounded-[12px] px-8 lg:px-12 py-10 text-center">
          <h3 className="text-[22px] lg:text-[24px] font-bold text-navy-deep">
            Become a Community Leader
          </h3>
          <p className="max-w-[500px] text-[14px] text-gray-400 leading-relaxed mx-auto mt-3 mb-6">
            Share your expertise, mentor the next generation, and help shape
            the future of open source. Apply to speak at our events or join our
            ambassador program.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[46px] px-6 bg-navy-deep text-white text-[11px] font-bold tracking-[0.1em] uppercase rounded-[6px] hover:bg-navy transition-all duration-200"
            >
              Apply to Speak
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[46px] px-6 bg-white text-navy-deep border-2 border-navy-deep text-[11px] font-bold tracking-[0.1em] uppercase rounded-[6px] hover:bg-navy-deep hover:text-white transition-all duration-200"
            >
              View All Leaders
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
