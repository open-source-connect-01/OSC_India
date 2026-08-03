"use client";

import Link from "next/link";
import Image from "next/image";

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
    heading: "OUR WORK",
    links: [
      { label: "Hosted Projects", href: "#" },
      { label: "Project Lifecycle", href: "#" },
      { label: "Technical Standards", href: "#" },
      { label: "Working Groups", href: "#" },
    ],
  },
  {
    heading: "COMPLIANCE",
    links: [
      { label: "Trademark Policy", href: "#" },
      { label: "Antitrust Policy", href: "#" },
      { label: "Governance Bylaws", href: "#" },
      { label: "Transparency Report", href: "#" },
    ],
  },
  {
    heading: "SUPPORT",
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
              <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-extrabold text-navy-deep leading-[1.1] tracking-tight">
                Why Support
                <br />
                OSC?
              </h1>
              <p className="mt-5 text-[15px] sm:text-[15.5px] text-slate-600 font-medium leading-relaxed max-w-[440px]">
                Your support helps us provide free learning opportunities, reward
                contributors, organize world-class events, and make open source
                accessible to everyone.
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
                className="inline-flex items-center justify-center mt-8 w-full sm:w-auto h-[50px] px-7 bg-navy-deep text-white text-[12.5px] font-bold tracking-[0.5px] uppercase hover:bg-navy transition-all duration-200"
              >
                View Membership Tiers
              </Link>
            </div>

            {/* Right: Why Join card */}
            <div className="relative">
              {/* Cream offset background */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-full h-full bg-accent-cream z-0" />
              <div className="relative z-10 bg-navy-deep p-6 sm:p-8 lg:p-9 text-white">
                <div className="w-[30px] h-[30px] bg-white text-navy-deep font-extrabold text-[15px] flex items-center justify-center mb-4">
                  ?
                </div>
                <h3 className="text-[18px] sm:text-[19px] font-bold mb-6">
                  Why Organizations Join
                </h3>

                <div className="space-y-5">
                  {whyItems.map((item) => (
                    <div key={item.num} className="flex gap-3.5">
                      <div className="flex-none w-[26px] h-[22px] bg-accent-orange text-white text-[10px] font-extrabold flex items-center justify-center mt-1">
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
      <section className="w-full bg-[#1B3280] border-b-[3px] border-[#F59E0B]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            <div>
              <span className="inline-block bg-[#F2811D] text-white text-[10px] font-extrabold tracking-[0.14em] uppercase px-3 py-1.5 rounded-[2px] mb-4">
                CURRENT EVENT
              </span>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-extrabold text-white mb-2 tracking-tight">
                Open Source Connect India 2026
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#A5B4FC] leading-relaxed max-w-[620px] mb-4">
                Join us for our annual gathering of maintainers, contributors, and industry leaders. September 1-31, 2026 in San Francisco.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-[13px] text-[#A5B4FC]">
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  March 15-17, 2026
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  San Francisco, CA
                </span>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center justify-center w-full sm:w-auto h-[48px] px-8 bg-[#F2811D] text-white text-[11px] font-extrabold tracking-[0.14em] uppercase rounded-[2px] hover:bg-orange-600 transition-all duration-200 shrink-0 shadow-md"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="w-full bg-[#0B132B] text-gray-400">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 sm:pt-14 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Image
                src="/logo.png"
                alt="Open Source Connect"
                width={150}
                height={38}
                className="h-8 w-auto object-contain brightness-0 invert mb-4"
              />
              <p className="text-[13px] leading-relaxed text-slate-400 max-w-[260px] sm:max-w-[220px] mb-5">
                Providing the institutional framework for collaborative
                innovation and technical meritocracy.
              </p>
              {/* Social Icons (GitHub & LinkedIn matching screenshot) */}
              <div className="flex items-center gap-4 text-slate-400">
                {/* GitHub Icon */}
                <Link href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </Link>

                {/* LinkedIn Icon */}
                <Link href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h5 className="text-white text-[11px] font-extrabold tracking-[0.12em] uppercase mb-5">
                  {col.heading}
                </h5>
                <div className="space-y-3">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-[13.5px] text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Legal Bar */}
          <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-[11px] text-slate-500 tracking-[0.05em] uppercase">
            <div>
              &copy; 2026 OPEN SOURCE CONNECT COMMUNITY. ALL RIGHTS RESERVED.
              <br className="hidden sm:block" />
              
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="#" className="hover:text-slate-300 transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-slate-300 transition-colors whitespace-nowrap">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-slate-300 transition-colors whitespace-nowrap">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
