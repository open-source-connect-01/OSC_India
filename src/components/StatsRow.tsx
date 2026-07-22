import Link from "next/link";

const stats = [
  {
    value: "400",
    suffix: "+",
    label: "PROJECTS",
    sublabel: "Hosted & Supported",
    labelColor: "text-accent-teal",
  },
  {
    value: "15K",
    suffix: "+",
    label: "CONTRIBUTORS",
    sublabel: "Active Developers",
    labelColor: "text-accent-emerald",
  },
  {
    value: "300",
    suffix: "+",
    label: "MEMBERS",
    sublabel: "Global Organizations",
    labelColor: "text-accent-orange",
  },
  {
    value: "20",
    suffix: "+",
    label: "COLLABORATIONS",
    sublabel: "Strategic Partnerships",
    labelColor: "text-accent-purple",
  },
];

const partnerLogos = [
  "DATA CORE",
  "GLOBAL NET",
  "SECURE LABS",
  "CLOUD SYSTEMS",
  "INFRA GROUP",
];

const missionCards = [
  {
    iconColor: "bg-accent-orange",
    title: "SUSTAINABLE ECOSYSTEMS",
    desc: "We ensure projects survive the transition from individual efforts to industry standards through lifecycle management.",
  },
  {
    iconColor: "bg-accent-blue",
    title: "SHARED IP MANAGEMENT",
    desc: "Our legal framework manages trademarks, copyrights, and patents to provide a fair harbor for all contributors.",
  },
  {
    iconColor: "bg-gray-200",
    iconBorder: true,
    title: "OPEN GOVERNANCE",
    desc: "Transparency is our default. All decision-making processes are documented and open for community participation.",
  },
];

export default function StatsRow() {
  return (
    <>
      {/* ===== OUR IMPACT SECTION ===== */}
      <section className="w-full bg-white">
        <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-16 lg:py-20">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-navy-deep leading-tight">
              Our Impact
            </h2>
            <div className="w-[60px] h-[4px] bg-accent-teal rounded-full mt-2 mb-5" />
            <p className="max-w-[600px] text-base text-gray-400 leading-relaxed">
              Building the future of open source through trusted collaboration,
              transparent governance, and sustainable innovation.
            </p>
          </div>

          {/* Stats cards grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center"
              >
                <div className="text-[32px] lg:text-[40px] font-extrabold text-navy-deep leading-none mb-1">
                  {stat.value}
                  <span className="text-navy-deep">{stat.suffix}</span>
                </div>
                <div
                  className={`text-[13px] font-bold tracking-[0.08em] uppercase mb-1 ${stat.labelColor}`}
                >
                  {stat.label}
                </div>
                <div className="text-[13px] text-gray-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOGO STRIP ===== */}
      <div className="w-full bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-3 py-5">
            {partnerLogos.map((logo, i) => (
              <div key={logo} className="flex items-center gap-6">
                <span className="text-[13px] font-semibold tracking-[0.08em] text-gray-400 uppercase">
                  {logo}
                </span>
                {i < partnerLogos.length - 1 && (
                  <div className="hidden lg:block w-px h-4 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== OUR MISSION SECTION ===== */}
      <section className="w-full bg-white">
        <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-16 lg:py-20">
          {/* Heading */}
          <div className="mb-12">
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-navy-deep leading-tight">
              Our Mission
            </h2>
            <div className="w-[60px] h-[4px] bg-accent-orange rounded-full mt-2 mb-5" />
            <p className="max-w-[700px] text-base leading-relaxed text-gray-400">
              We are a community of communities, bringing together developers,
              organizations, and innovators from around the globe to share
              knowledge, collaborate openly, and build solutions having
              real-world impact.
            </p>
          </div>

          {/* Mission feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-lg p-7"
              >
                <div
                  className={`w-7 h-7 rounded-[6px] mb-5 ${
                    card.iconColor
                  } ${card.iconBorder ? "border border-gray-300" : ""}`}
                />
                <h3 className="text-[14px] font-bold tracking-[0.04em] text-navy-deep uppercase mb-3">
                  {card.title}
                </h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">
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
