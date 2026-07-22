import Link from "next/link";

const spotlightCards = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    org: "CloudNative Foundation",
    specialty: "Cloud Architecture & DevOps",
    highlights: [
      "Keynote Speaker at OSS Summit 2025",
      "Maintainer of 10+ major projects",
    ],
  },
  {
    name: "Marcus Johnson",
    role: "Principal Engineer",
    org: "Open Source Labs Inc.",
    specialty: "Distributed Systems & Security",
    highlights: [
      "Keynote Speaker at OSS Summit 2025",
      "Mentor for 50+ open source contributors",
    ],
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Engineering",
    org: "TechVentures Inc.",
    specialty: "APIs & Open Ecosystems",
    highlights: [
      "Keynote Speaker at OSS Summit 2025",
      "Maintainer of 10+ major projects",
    ],
  },
  {
    name: "James Park",
    role: "Lead Developer Advocate",
    org: "Global Tech Alliance",
    specialty: "Developer Relations & Community",
    highlights: [
      "Keynote Speaker at OSS Summit 2025",
      "Mentor for 15+ major projects",
    ],
  },
];

export default function CommunitySpotlightSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[28px] lg:text-[30px] font-extrabold text-[#0B0F1A] leading-tight">
            Community Spotlight
          </h2>
          <p className="max-w-[650px] text-[15px] text-gray-400 leading-relaxed mt-3">
            Celebrating the builders, maintainers, researchers, and leaders
            driving meaningful innovation across the Open Source Connect
            ecosystem. Our community represents diverse expertise across
            emerging technologies and real-world industry challenges.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-x-12 sm:gap-x-16 gap-y-8 mb-12 lg:mb-14">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full bg-gray-200 mb-3" />
            <div className="text-[26px] sm:text-[28px] font-extrabold text-navy-deep leading-none">
              500+
            </div>
            <div className="text-[10px] font-bold tracking-[0.08em] text-gray-400 uppercase mt-1.5">
              Active Leaders
            </div>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full bg-gray-200 mb-3" />
            <div className="text-[26px] sm:text-[28px] font-extrabold text-navy-deep leading-none">
              50+
            </div>
            <div className="text-[10px] font-bold tracking-[0.08em] text-gray-400 uppercase mt-1.5">
              Countries
            </div>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-full bg-gray-200 mb-3" />
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
          {spotlightCards.map((person) => (
            <div
              key={person.name}
              className="flex gap-4 sm:gap-5 bg-white border border-gray-200 rounded-[8px] p-5"
            >
              {/* Photo placeholder */}
              <div className="w-[110px] sm:w-[130px] aspect-[3/4] bg-[#D9D9D9] rounded-[6px] shrink-0" />
              {/* Text content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-bold text-navy-deep leading-snug">
                  {person.name}
                </h3>
                <p className="text-[12px] text-gray-400 mt-0.5">{person.role}</p>
                <p className="text-[11px] text-accent-blue font-medium mt-0.5">
                  {person.org}
                </p>

                <div className="h-px bg-gray-100 my-3" />

                {/* Specialty */}
                <p className="text-[11px] font-semibold text-gray-600 mb-2">
                  {person.specialty}
                </p>

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
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 lg:mt-14 w-full bg-gradient-to-r from-[#EEF3FB] to-white rounded-[12px] px-8 lg:px-12 py-10 text-center">
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
