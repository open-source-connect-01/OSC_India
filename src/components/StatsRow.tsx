"use client";

import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    numericValue: 400,
    suffix: "+",
    label: "PROJECTS",
    sublabel: "Hosted & Supported",
    labelColor: "text-accent-teal",
  },
  {
    numericValue: 15,
    suffix: "K+",
    label: "CONTRIBUTORS",
    sublabel: "Active Developers",
    labelColor: "text-accent-emerald",
  },
  {
    numericValue: 300,
    suffix: "+",
    label: "MEMBERS",
    sublabel: "Global Organizations",
    labelColor: "text-accent-orange",
  },
  {
    numericValue: 20,
    suffix: "+",
    label: "COLLABORATIONS",
    sublabel: "Strategic Partnerships",
    labelColor: "text-accent-purple",
  },
];

const missionCards = [
  {
    iconColor: "bg-accent-orange",
    title: "SUSTAINABLE OPEN ECOSYSTEMS",
    desc: "We support projects beyond initial contributions by providing mentorship, community engagement frameworks, and long-term visibility.",
  },
  {
    iconColor: "bg-accent-blue",
    title: "RESPONSIBLE CONTRIBUTION",
    desc: "We encourage ethical contribution practices, clear documentation standards, and respect for intellectual ownership.",
  },
  {
    iconColor: "bg-accent-green",
    title: "TRANSPARENT GOVERNANCE",
    desc: "Openness is at the core of everything we do. Decision-making processes, community guidelines, and leadership structures are clearly defined and accessible.",
  },
];

export default function StatsRow() {
  return (
    <>
      {/* ===== STATS ROW (plain, no borders) ===== */}
      <section className="w-full bg-white">
        <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-6 lg:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[36px] lg:text-[44px] font-extrabold text-navy-deep leading-none mb-0.5">
                  <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
                </div>
                <div
                  className={`text-[13px] font-bold tracking-[0.08em] uppercase mb-0.5 ${stat.labelColor}`}
                >
                  {stat.label}
                </div>
                <div className="text-[13px] text-gray-600 font-medium">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR MISSION SECTION ===== */}
      <section className="w-full bg-white">
        <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-12 lg:py-16">
          {/* Heading */}
          <div className="mb-12">
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-navy-deep leading-tight">
              Our Mission
            </h2>
            <div className="w-[60px] h-[4px] bg-accent-orange mt-2 mb-5" />
            <p className="max-w-[700px] text-base leading-relaxed text-slate-600 font-medium mb-4">
              We are a community of communities, bringing together developers,
              organizations, and innovators from around the globe to share
              knowledge, collaborate openly, and build solutions having
              real-world impact.
            </p>
            <p className="max-w-[700px] text-base leading-relaxed text-slate-600 font-medium">
              We are building a structured, transparent, and community-driven
              platform where innovation is supported, contributors are respected,
              and projects are nurtured from idea to long-term sustainability.
            </p>
          </div>

          {/* Mission feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 p-7"
              >
                <div
                  className={`w-7 h-7 mb-5 ${card.iconColor}`}
                />
                <h3 className="text-[14px] font-bold tracking-[0.04em] text-navy-deep uppercase mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
