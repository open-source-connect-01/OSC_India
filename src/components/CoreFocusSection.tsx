const focusCards = [
  {
    blobColor: "bg-blue-300/40",
    title: "Sustainable Open Source Ecosystems",
    desc: "Building resilient foundations for projects to thrive long-term, ensuring stability and continuous evolution.",
  },
  {
    blobColor: "bg-green-300/40",
    title: "From Builders to Maintainers",
    desc: "Empowering developers to transition from casual contributors to project leaders and maintainers.",
  },
  {
    blobColor: "bg-yellow-300/40",
    title: "Open Source with Impact",
    desc: "Focusing on projects that solve real-world problems and drive tangible social and economic change.",
  },
  {
    blobColor: "bg-purple-300/40",
    title: "Global Collaboration, Local Leadership",
    desc: "Connecting global expertise while fostering strong local communities to drive adoption and innovation.",
  },
  {
    blobColor: "bg-pink-300/40",
    title: "Responsible Open Innovation",
    desc: "Promoting ethical practices, security, and inclusive governance in all open source endeavors.",
  },
  {
    blobColor: "bg-orange-300/40",
    title: "Responsible Open Innovation",
    desc: "Promoting ethical practices, security, and inclusive governance in all open source endeavors.",
  },
];

export default function CoreFocusSection() {
  return (
    <>
      {/* ===== OUR CORE FOCUS ===== */}
      <section className="w-full bg-white">
        <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-16 lg:py-20">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-[32px] lg:text-[40px] font-extrabold text-navy-deep leading-tight">
              Our Core Focus
            </h2>
            <div className="w-[60px] h-[4px] bg-accent-teal mt-2 mb-5" />
            <p className="max-w-[600px] text-base text-gray-400 leading-relaxed">
              Driving the future of open innovation through five strategic pillars.
            </p>
          </div>

          {/* 3×2 Grid of focus cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {focusCards.map((card, i) => (
              <div
                key={i}
                className="relative bg-white border border-gray-200 pt-3 pb-5 pl-5 pr-5 overflow-hidden"
              >
                {/* Large decorative blob in top-right corner, cropped at card edge */}
                <div
                  className={`absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full ${card.blobColor}`}
                  style={{ borderRadius: "40% 60% 30% 70% / 50% 40% 60% 50%" }}
                />
                <h3 className="text-[15px] font-bold text-navy-deep mt-3 mb-2 leading-snug relative z-10">
                  {card.title}
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed relative z-10">
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
