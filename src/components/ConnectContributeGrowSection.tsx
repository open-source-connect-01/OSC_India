import Link from "next/link";

const collabItems = [
  {
    title: "Technical Working Groups",
    desc: "Collaborate on standards, best practices, and technical direction across projects.",
  },
  {
    title: "Project Contributions",
    desc: "Contribute code, documentation, or expertise to our newest open source projects.",
  },
  {
    title: "Mentorship Programs",
    desc: "Guide the next generation as academics or new contributors through structured mentoring.",
  },
  {
    title: "Governance Participation",
    desc: "Shape foundation policies and strategic decisions as a board or council member.",
  },
];

const eventItems = [
  {
    title: "Annual Summits",
    desc: "Flagship conferences bringing together thousands of contributors, maintainers, and industry leaders.",
  },
  {
    title: "Regional Meetups",
    desc: "Local gatherings in major cities worldwide for networking and knowledge sharing.",
  },
  {
    title: "Virtual Workshops",
    desc: "Hands-on technical sessions and training programs accessible from anywhere.",
  },
  {
    title: "Hackathons & Sprints",
    desc: "Intensive collaborative sessions focused on solving challenges and shipping features.",
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
          <p className="max-w-[600px] text-[15px] text-gray-400 leading-relaxed">
            Join a vibrant ecosystem where innovation meets collaboration.
            Discover how you can be part of our mission.
          </p>
        </div>

        {/* Two-column card layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Collaboration Models */}
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
              Collaboration Models
            </h3>
            <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
              Engage through multiple pathways designed for different levels of
              commitment and expertise.
            </p>

            <ul className="space-y-5 flex-1">
              {collabItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] bg-accent-blue rounded-full mt-[7px] shrink-0" />
                  <div>
                    <span className="text-[14px] font-bold text-navy-deep">
                      {item.title}
                    </span>
                    <p className="text-[13px] text-gray-400 leading-relaxed mt-0.5">
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
              Explore Opportunities
            </Link>
          </div>

          {/* Card 2: Community Events */}
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
              Community Events
            </h3>
            <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
              Connect with peers, learn from experts, and showcase your work at
              our global and regional gatherings.
            </p>

            <ul className="space-y-5 flex-1">
              {eventItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] bg-accent-blue rounded-full mt-[7px] shrink-0" />
                  <div>
                    <span className="text-[14px] font-bold text-navy-deep">
                      {item.title}
                    </span>
                    <p className="text-[13px] text-gray-400 leading-relaxed mt-0.5">
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
              View Event Calendar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
