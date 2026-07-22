import Link from "next/link";

const whyItems = [
  {
    num: "01",
    title: "Influence",
    desc: "Participate in Technical Advisory Councils and shape the direction of critical codebases.",
  },
  {
    num: "02",
    title: "Compliance",
    desc: "Access specialized legal audit reports and trademark support for commercial implementations.",
  },
  {
    num: "03",
    title: "Talent",
    desc: "Engage with the world's most talented maintainers through official Foundation channels.",
  },
];

const footerLinks = [
  {
    heading: "Our Work",
    links: [
      { label: "Hosted Projects", href: "#" },
      { label: "Project Lifecycle", href: "#" },
      { label: "Technical Standards", href: "#" },
      { label: "Working Groups", href: "#" },
    ],
  },
  {
    heading: "Compliance",
    links: [
      { label: "Trademark Policy", href: "#" },
      { label: "Antitrust Policy", href: "#" },
      { label: "Governance Bylaws", href: "#" },
      { label: "Transparency Report", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Membership", href: "#" },
      { label: "Donations", href: "#" },
      { label: "Mentorship", href: "#" },
      { label: "Legal Support", href: "#" },
    ],
  },
];

export default function FooterSection() {
  return (
    <>
      {/* ===== MEMBERSHIP HERO ===== */}
      <section className="w-full bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <h1 className="text-[30px] sm:text-[40px] lg:text-[44px] font-extrabold text-navy-deep leading-[1.15] tracking-tight">
                Shared{" "}
                <span className="text-accent-blue">investment</span> in our
                digital future.
              </h1>
              <p className="mt-5 text-[15px] sm:text-[15.5px] text-gray-400 leading-relaxed max-w-[440px]">
                Membership allows organizations to formally support the
                foundation&apos;s mission while gaining a seat at the table in
                strategic working groups and governance boards.
              </p>

              <div className="flex flex-wrap gap-6 sm:gap-12 mt-8">
                <div className="pl-4 border-l-[3px] border-accent-orange">
                  <div className="text-[24px] sm:text-[28px] font-extrabold text-navy-deep leading-none">
                    180+
                  </div>
                  <div className="mt-1.5 text-[11px] font-bold tracking-[0.6px] text-gray-400 uppercase whitespace-nowrap">
                    Global Members
                  </div>
                </div>
                <div className="pl-4 border-l-[3px] border-accent-blue">
                  <div className="text-[24px] sm:text-[28px] font-extrabold text-navy-deep leading-none">
                    24
                  </div>
                  <div className="mt-1.5 text-[11px] font-bold tracking-[0.6px] text-gray-400 uppercase whitespace-nowrap">
                    Strategic Partners
                  </div>
                </div>
              </div>

              <Link
                href="#"
                className="inline-flex items-center justify-center mt-8 w-full sm:w-auto h-[50px] px-7 bg-navy-deep text-white text-[12.5px] font-bold tracking-[0.5px] uppercase rounded hover:bg-navy transition-all duration-200"
              >
                View Membership Tiers
              </Link>
            </div>

            {/* Right: Why Join card */}
            <div className="relative">
              {/* Cream offset background */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-full h-full bg-accent-cream rounded-[6px] z-0" />
              <div className="relative z-10 bg-navy-deep rounded-[6px] p-6 sm:p-8 lg:p-9 text-white">
                <div className="w-[30px] h-[30px] bg-white text-navy-deep font-extrabold text-[15px] flex items-center justify-center rounded mb-4">
                  ?
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold mb-6">
                  Why Organizations Join
                </h3>

                <div className="space-y-5">
                  {whyItems.map((item) => (
                    <div key={item.num} className="flex gap-3.5">
                      <div className="flex-none w-[26px] h-[22px] bg-accent-orange text-white text-[10px] font-extrabold flex items-center justify-center rounded mt-1">
                        {item.num}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[12px] font-extrabold tracking-[0.5px] text-accent-orange uppercase mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-[13px] text-gray-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EVENT BANNER ===== */}
      <section className="w-full bg-gradient-to-br from-[#1c2f8f] via-[#2a3fae] to-[#33469e] border-b-[3px] border-accent-orange">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            <div>
              <span className="inline-block bg-accent-orange text-white text-[10.5px] font-extrabold tracking-[0.6px] uppercase px-3 py-1.5 rounded mb-4">
                Current Event
              </span>
              <h2 className="text-[24px] sm:text-[28px] font-extrabold text-white mb-3">
                Open Source Summit 2026
              </h2>
              <p className="text-[14px] sm:text-[14.5px] text-blue-200 leading-relaxed max-w-[560px] mb-3">
                Join us for our annual gathering of maintainers, contributors,
                and industry leaders. March 15-17, 2026 in San Francisco.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-[13px] text-blue-200">
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  March 15-17, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  San Francisco, CA
                </span>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center w-full sm:w-auto h-[50px] px-7 bg-accent-orange text-white text-[12.5px] font-extrabold tracking-[0.5px] uppercase rounded hover:opacity-90 transition-all duration-200 shrink-0"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="w-full bg-navy-deep text-gray-400">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 sm:pt-14 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="w-8 h-8 bg-white text-navy-deep font-extrabold flex items-center justify-center rounded mb-4">
                O
              </div>
              <p className="text-[13px] leading-relaxed max-w-[260px] sm:max-w-[220px] mb-4">
                Providing the institutional framework for collaborative
                innovation and technical meritocracy.
              </p>
              <div className="flex gap-2.5">
                <span className="w-4 h-4 rounded bg-gray-500 inline-block" />
                <span className="w-4 h-4 rounded bg-gray-500 inline-block" />
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h5 className="text-white text-[11.5px] font-bold tracking-[0.6px] uppercase mb-4">
                  {col.heading}
                </h5>
                <div className="space-y-3">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-[13.5px] text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#2a3350] pt-5 flex flex-col sm:flex-row justify-between gap-3 text-[11.5px] text-gray-500 tracking-[0.3px]">
            <div>
              &copy; 2024 Open Source Community Foundation. All rights reserved.
              <br className="hidden sm:block" />
              {" "}A registered 501(c)(6) organization. ID: 12-4556789
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="#" className="hover:text-white transition-colors duration-200 whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200 whitespace-nowrap">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200 whitespace-nowrap">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
