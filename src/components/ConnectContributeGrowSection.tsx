import Link from "next/link";

const collabItems = [
  {
    title: "Open Source Programs",
    desc: "Contribute to real-world open source projects alongside maintainers and experienced developers.",
  },
  {
    title: "Hackathons",
    desc: "Build innovative solutions, collaborate with global participants, and win exciting rewards.",
  },
  {
    title: "Mentorship",
    desc: "Learn directly from industry experts, maintainers, and experienced contributors.",
  },
  {
    title: "Career Opportunities",
    desc: "Discover internships, jobs, networking opportunities, and showcase your contributions.",
  },
];

const eventItems = [
  {
    title: "Sponsorship",
    desc: "Support hackathons, community programs, and developer initiatives while increasing your brand visibility.",
  },
  {
    title: "Hiring & Talent",
    desc: "Connect with skilled contributors, students, and developers from around the world.",
  },
  {
    title: "Community Partnerships",
    desc: "Collaborate on events, workshops, contribution programs, and developer engagement.",
  },
  {
    title: "Speaking & Mentorship",
    desc: "Share your expertise through workshops, technical sessions, hackathons, and mentorship programs.",
  },
];

export default function ConnectContributeGrowSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 pb-16 lg:pb-20">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-[28px] lg:text-[30px] font-extrabold text-navy-deep leading-tight">
            Connect, Contribute &amp; Grow
          </h2>
          <div className="w-[60px] h-[4px] bg-accent-blue mt-2 mb-5" />
          <p className="max-w-[600px] text-[15px] text-slate-600 font-medium leading-relaxed">
            Empowering contributors and organizations to build, collaborate, and grow through open source.
          </p>
        </div>

        {/* Two-column card layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: For Contributors */}
          <div className="bg-white border border-gray-200 p-8 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-navy-deep mb-3">
              For Contributors
            </h3>
            <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-6">
              Grow your skills, contribute to meaningful projects, connect with mentors, and become part of a global open source community.
            </p>

            <ul className="space-y-5 flex-1">
              {collabItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] bg-accent-blue rounded-full mt-[7px] shrink-0" />
                  <div>
                    <span className="text-[14px] font-bold text-navy-deep">
                      {item.title}
                    </span>
                    <p className="text-[13.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="inline-flex items-center justify-center h-[46px] px-6 bg-navy-deep text-white text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-navy transition-all duration-200 mt-8 self-start"
            >
              Become a Contributor
            </Link>
          </div>

          {/* Card 2: For Organizations */}
          <div className="bg-white border border-gray-200 p-8 flex flex-col">
            <div className="w-10 h-10 rounded-full bg-accent-emerald/20 flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-emerald">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-navy-deep mb-3">
              For Organizations
            </h3>
            <p className="text-[14px] text-slate-600 font-medium leading-relaxed mb-6">
              Partner with us to engage developers, support innovation, and strengthen your presence in the global open source ecosystem.
            </p>

            <ul className="space-y-5 flex-1">
              {eventItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] bg-accent-blue rounded-full mt-[7px] shrink-0" />
                  <div>
                    <span className="text-[14px] font-bold text-navy-deep">
                      {item.title}
                    </span>
                    <p className="text-[13.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="inline-flex items-center justify-center h-[46px] px-6 bg-white text-navy-deep border-2 border-navy-deep text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-navy-deep hover:text-white transition-all duration-200 mt-8 self-start"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
