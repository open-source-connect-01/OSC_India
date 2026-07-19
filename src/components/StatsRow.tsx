const stats = [
  {
    value: "400",
    suffix: "+",
    label: "Projects",
    sublabel: "Hosted & Supported",
    accent: false,
  },
  {
    value: "15K",
    suffix: "+",
    label: "Contributors",
    sublabel: "Active Developers",
    accent: true,
  },
  {
    value: "300",
    suffix: "+",
    label: "Members",
    sublabel: "Global Organizations",
    accent: false,
  },
  {
    value: "20",
    suffix: "+",
    label: "Collaborations",
    sublabel: "Strategic Partnerships",
    accent: false,
  },
];

export default function StatsRow() {
  return (
    <section className="relative w-full bg-white border-b border-divider-blue">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 justify-items-center">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              {/* Value */}
              <div className="text-[44px] lg:text-[60px] font-bold text-navy leading-none mb-1">
                {stat.value}
                <span className="text-accent-blue">{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-[10px] font-bold tracking-[0.15em] text-navy uppercase mb-0.5">
                {stat.label}
              </div>

              {/* Sublabel */}
              <div className="text-[11px] text-gray-400">
                {stat.accent ? (
                  <>
                    <span className="text-accent-green font-semibold">
                      Active
                    </span>{" "}
                    Developers
                  </>
                ) : (
                  stat.sublabel
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
