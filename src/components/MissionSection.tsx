export default function MissionSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Section Heading with accent */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-accent-blue rounded-full" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy">
              Our Mission
            </h2>
          </div>

          {/* Body Paragraph 1 */}
          <p className="text-base lg:text-lg leading-relaxed text-gray-500 mb-8">
            Open Source Connect exists to strengthen the open-source ecosystem
            by bringing together developers, students, startups, and
            organizations to collaborate openly and build solutions that create
            real-world impact.
          </p>

          {/* Body Paragraph 2 */}
          <p className="text-base lg:text-lg leading-relaxed text-gray-500 mb-12">
            We are building a structured, transparent, and community-driven
            platform where innovation is supported, contributors are respected,
            and projects are nurtured from idea to long-term sustainability.
          </p>

          {/* Highlight stat cards */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {[
              {
                number: "01",
                title: "Governance",
                desc: "Transparent oversight and community-driven decision making",
              },
              {
                number: "02",
                title: "Stewardship",
                desc: "Financial and operational support for critical projects",
              },
              {
                number: "03",
                title: "Infrastructure",
                desc: "Collaborative tools and resources for global teams",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent-blue/30 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <span className="text-2xl font-bold text-accent-blue/30 group-hover:text-accent-blue/50 transition-colors duration-300">
                  {item.number}
                </span>
                <h3 className="text-sm font-bold text-navy mt-2 mb-1.5 uppercase tracking-[0.08em]">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
