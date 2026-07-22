import Link from "next/link";

const focusCards = [
  {
    blobColor: "bg-amber-400/30",
    title: "Sustainable Open Source Ecosystems",
    desc: "Building resilient foundations for projects to thrive long-term, ensuring stability and continuous evolution.",
  },
  {
    blobColor: "bg-teal-400/30",
    title: "From Builders to Maintainers",
    desc: "Empowering developers to transition from casual contributors to project leaders and maintainers.",
  },
  {
    blobColor: "bg-pink-400/30",
    title: "Open Source with Impact",
    desc: "Focusing on projects that solve real-world problems and drive tangible social and economic change.",
  },
  {
    blobColor: "bg-purple-400/30",
    title: "Global Collaboration, Local Leadership",
    desc: "Connecting global expertise while fostering strong local communities to drive adoption and innovation.",
  },
  {
    blobColor: "bg-teal-400/30",
    title: "Responsible Open Innovation",
    desc: "Promoting ethical practices, security, and inclusive governance in all open source endeavors.",
  },
  {
    blobColor: "bg-purple-400/30",
    title: "Responsible Open Innovation",
    desc: "Promoting ethical practices, security, and inclusive governance in all open source endeavors.",
  },
];

const projectCards = [
  {
    initials: "OS",
    status: "GRADUATED",
    statusColor: "bg-accent-emerald/10 text-accent-emerald",
    title: "CoreStream Engine",
    desc: "The industry standard for high-throughput messaging between distributed microservices.",
  },
  {
    initials: "AB",
    status: "INCUBATING",
    statusColor: "bg-accent-amber/10 text-accent-amber",
    title: "AuthBridge",
    desc: "A vendor-neutral identity abstraction layer for enterprise-grade authentication.",
  },
  {
    initials: "NS",
    status: "GRADUATED",
    statusColor: "bg-accent-emerald/10 text-accent-emerald",
    title: "NetSphere",
    desc: "Global-scale mesh networking protocol designed for low-latency edge computing.",
  },
];

function BlobShape({ className }: { className: string }) {
  return (
    <div className={`w-8 h-8 rounded-full ${className} opacity-60`} style={{ borderRadius: "40% 60% 30% 70% / 50% 40% 60% 50%" }} />
  );
}

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
            <div className="w-[60px] h-[4px] bg-accent-teal rounded-full mt-2 mb-5" />
            <p className="max-w-[600px] text-base text-gray-400 leading-relaxed">
              Driving the future of open innovation through five strategic pillars.
            </p>
          </div>

          {/* 3×2 Grid of focus cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {focusCards.map((card, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-[10px] p-6"
              >
                <BlobShape className={card.blobColor} />
                <h3 className="text-[16px] font-bold text-navy-deep mt-4 mb-3 leading-snug">
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

      {/* ===== FOUNDATION PROJECTS ===== */}
      <section className="w-full bg-white border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-16 lg:py-20">
          {/* Heading row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-[32px] lg:text-[40px] font-extrabold text-navy-deep leading-tight">
                Foundation Projects
              </h2>
              <div className="w-[60px] h-[4px] bg-accent-purple rounded-full mt-2 mb-5" />
              <p className="max-w-[600px] text-base text-gray-400 leading-relaxed">
                From cloud-native infrastructure to fundamental security
                protocols, we host the technologies that power the modern web.
              </p>
            </div>

            {/* Pill toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <button className="px-4 py-2 bg-navy-deep text-white text-[11px] font-bold tracking-[0.08em] uppercase rounded-full transition-colors duration-200 hover:bg-navy">
                GRADUATED
              </button>
              <button className="px-4 py-2 bg-white text-gray-400 border border-gray-200 text-[11px] font-bold tracking-[0.08em] uppercase rounded-full transition-colors duration-200 hover:border-gray-400 hover:text-gray-600">
                ALL PROJECTS
              </button>
            </div>
          </div>

          {/* Project cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectCards.map((project) => (
              <div
                key={project.title}
                className="bg-white border border-gray-200 rounded-[10px] p-6 flex flex-col"
              >
                {/* Top row: icon + status badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-full border-2 border-navy-deep/20 flex items-center justify-center">
                    <span className="text-[13px] font-bold text-navy-deep">
                      {project.initials}
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.06em] uppercase ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-[16px] font-bold text-navy-deep mb-2">
                  {project.title}
                </h3>
                <p className="text-[14px] text-gray-400 leading-relaxed flex-1 mb-5">
                  {project.desc}
                </p>

                {/* Link */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.06em] text-navy-deep uppercase hover:text-accent-blue transition-colors duration-200 group"
                >
                  Explore Project
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-12 text-center">
            <p className="text-[14px] text-gray-400 mb-4">
              Looking to donate a project to the foundation?
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[48px] px-7 bg-navy-deep text-white text-[11px] font-bold tracking-[0.1em] uppercase rounded-[6px] hover:bg-navy transition-all duration-200"
            >
              Review the Project Lifecycle Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
