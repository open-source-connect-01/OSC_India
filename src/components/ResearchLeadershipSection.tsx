"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileModal from "./ProfileModal";
import type { ProfileData } from "./ProfileModal";

export const teamMembers: (ProfileData & { cardRole: string; photo: string })[] = [
  {
    name: "Sebastiano Fuccio",
    cardRole: "FOUNDER & CEO | MANAGING PARTNER",
    role: "Founder & CEO | Managing Partner",
    org: "OSC Foundation",
    badge: "Keynote Speaker",
    photo: "/leaders/sebastiano_fuccio_v3.png",
    bioParagraphs: [
      "Sebastiano Fuccio is a founder, CEO, and managing partner with extensive leadership experience across technology, open-source strategy, and business growth.",
      "His work focuses on driving strategic innovation, supporting global open-source ecosystems, and building high-impact partnerships between technology teams and industry leaders.",
    ],
    tags: ["Leadership", "Strategy", "Managing Partner"],
  },
  {
    name: "Chikahiro Tokoro",
    cardRole: "SOFTWARE ENGINEER, PODCASTER",
    role: "Software Engineer & Podcaster",
    org: "OSC Foundation",
    badge: "Keynote Speaker",
    photo: "/leaders/chikahiro_tokoro_v3.png",
    bioParagraphs: [
      "Chikahiro Tokoro is a software engineer and popular technology podcaster focused on developer education, open-source software architecture, and global tech culture.",
      "He engages with thousands of software engineers worldwide through technical sessions, podcasts, and open-source contribution workshops.",
    ],
    tags: ["Software Engineering", "Podcasting", "Developer Advocacy"],
  },
  {
    name: "Kamesh Sampath",
    cardRole: "DEVELOPER ADVOCATE AT SNOWFLAKE",
    role: "Developer Advocate at Snowflake",
    org: "Snowflake",
    badge: "Keynote Speaker",
    photo: "/leaders/kamesh_sampath_v3.png",
    bioParagraphs: [
      "Kamesh Sampath is a Developer Advocate at Snowflake, specializing in cloud-native applications, Kubernetes, and developer ecosystem tooling.",
      "He is a frequent international speaker and author with extensive experience empowering developers and maintainers across the global open-source community.",
    ],
    tags: ["Developer Advocacy", "Cloud Native", "Kubernetes"],
  },
  {
    name: "Dishant Gandhi",
    cardRole: "AI/ML CONSULTANT",
    role: "AI/ML Consultant",
    org: "OSC Foundation",
    badge: "Keynote Speaker",
    photo: "/leaders/dishant_gandhi_v3.png",
    bioParagraphs: [
      "Dishant Gandhi is an AI/ML Consultant specializing in machine learning systems, applied artificial intelligence, and open-source ML workflows.",
      "He works with technology organizations and research teams to architect scalable AI models, streamline MLOps pipelines, and advocate for transparent AI development.",
    ],
    tags: ["Artificial Intelligence", "Machine Learning", "MLOps"],
  },
  {
    name: "Olena Yara",
    cardRole: "FOUNDER AT YARA AGENCY",
    role: "Founder at Yara Agency",
    org: "Yara Agency",
    badge: "Keynote Speaker",
    photo: "/leaders/olena_yara_v3.png",
    bioParagraphs: [
      "Olena Yara is the Founder of Yara Agency, a creative technology and strategic brand agency driving digital innovation for tech organizations.",
      "She leads cross-disciplinary initiatives bridging design, marketing, and developer relations to amplify high-impact open-source initiatives globally.",
    ],
    tags: ["Brand Strategy", "Technology Agency", "Digital Innovation"],
  },
  {
    name: "Nithin S.S",
    cardRole: "OPEN STANDARDS LIAISON",
    role: "Open Standards Liaison",
    org: "OSC Foundation",
    badge: "Keynote Speaker",
    photo: "/leaders/nithin_ss.jpg",
    bioParagraphs: [
      "Nithin S.S serves as the Open Standards Liaison at the OSC Foundation, bridging technical communities with global standards frameworks.",
      "He advocates for open protocols, interoperable architectures, and transparent developer standards across open-source ecosystems.",
    ],
    tags: ["Open Standards", "Interoperability", "Open Protocols"],
  },
];

export const mentorMembers: (ProfileData & { slotTitle: string })[] = [
  {
    name: "Dr. Aris Thorne",
    slotTitle: "Senior Ecosystem Mentor",
    role: "Senior Researcher & Ecosystem Manager",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/sebastiano_fuccio.jpg",
    bioParagraphs: [
      "Dr. Aris Thorne is a distinguished researcher and strategic leader in the open-source ecosystem. With over 15 years of experience in distributed systems and community governance, he leads the OSC Foundation's initiatives in sustainable development and researcher mentorship.",
      "His work focuses on the intersection of academic research and practical industry application, ensuring that open-source contributors have the tools and institutional backing necessary to thrive in high-stakes environments.",
    ],
    tags: ["Open Source Governance", "Ecosystem Strategy", "Sustainability"],
  },
  {
    name: "Sarah Jenkins",
    slotTitle: "Community Strategy Mentor",
    role: "Community Strategy Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/olena_yara.jpg",
    bioParagraphs: [
      "Sarah Jenkins is a passionate community builder and strategist with over a decade of experience growing open-source communities worldwide. She has successfully scaled multiple developer communities from inception to global reach.",
      "Her expertise lies in fostering inclusive environments where contributors at all levels can thrive. Sarah has designed mentorship programs that have helped thousands of developers transition from newcomers to project maintainers.",
    ],
    tags: ["Community Building", "DEI Initiatives", "Developer Relations"],
  },
  {
    name: "Marcus Holloway",
    slotTitle: "Distributed Systems Mentor",
    role: "Principal Research Scientist",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/chikahiro_tokoro.jpg",
    bioParagraphs: [
      "Marcus Holloway is a principal research scientist specializing in distributed systems architecture and consensus protocols. His groundbreaking work on scalable infrastructure has been adopted by major open-source projects worldwide.",
      "He brings deep technical expertise in decentralized systems, cryptographic protocols, and high-performance computing. Marcus is a prolific author and mentor across open-source communities.",
    ],
    tags: ["Distributed Systems", "Cryptography", "Protocol Design"],
  },
  {
    name: "Elena Rodriguez",
    slotTitle: "DevOps & Infrastructure Mentor",
    role: "DevOps & Platform Engineering Lead",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/dishant_gandhi.jpg",
    bioParagraphs: [
      "Elena Rodriguez leads DevOps strategy and platform engineering at the OSC Foundation, where she architects CI/CD pipelines and infrastructure-as-code frameworks serving open-source projects globally.",
      "With a background in site reliability engineering at major cloud providers, Elena specializes in building resilient, scalable cloud systems and mentoring platform engineers.",
    ],
    tags: ["DevOps", "Cloud Infrastructure", "Platform Engineering"],
  },
  {
    name: "David Chen",
    slotTitle: "Security & Compliance Mentor",
    role: "Cybersecurity Standards Lead",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/kamesh_sampath.jpg",
    bioParagraphs: [
      "David Chen chairs the Security Standards Working Group at the OSC Foundation, where he coordinates cross-industry efforts to establish best practices for open-source software security.",
      "His career spans two decades in cybersecurity, including leadership roles at major tech firms and government advisory boards. David has been instrumental in developing vulnerability disclosure frameworks.",
    ],
    tags: ["Cybersecurity", "Supply Chain Security", "Standards"],
  },
  {
    name: "Dr. Linda Wu",
    slotTitle: "Standards & Interoperability Mentor",
    role: "Standards & Interoperability Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/nithin_ss.jpg",
    bioParagraphs: [
      "Dr. Linda Wu serves as the Open Standards Liaison, bridging technical communities with international standards bodies to align open-source innovations with global interoperability requirements.",
      "With a PhD in Computer Science and extensive experience in standards development organizations, Linda has facilitated open standards adoption across multiple technology domains.",
    ],
    tags: ["Open Standards", "Interoperability", "Web Standards"],
  },
];

export default function ResearchLeadershipSection({
  selectedProfile: externalSelectedProfile,
  onProfileSelect: externalOnProfileSelect,
  onProfileClose: externalOnProfileClose,
  hideFooter = false,
}: {
  selectedProfile?: ProfileData | null;
  onProfileSelect?: (profile: ProfileData) => void;
  onProfileClose?: () => void;
  hideFooter?: boolean;
}) {
  const [activeTab, setActiveTab] = useState<"speakers" | "mentors">("speakers");
  const [email, setEmail] = useState("");
  const [internalProfile, setInternalProfile] = useState<ProfileData | null>(null);

  // Use external state (from AboutOverlay) if provided, otherwise internal
  const selectedProfile =
    externalSelectedProfile !== undefined ? externalSelectedProfile : internalProfile;
  const onProfileSelect = externalOnProfileSelect || setInternalProfile;
  const onProfileClose =
    externalOnProfileClose || (() => setInternalProfile(null));

  // Standalone mode (events page) — render modal internally; AboutOverlay handles it externally
  const isStandalone = externalSelectedProfile === undefined;

  return (
    <>
      {/* ===== Community Experts ===== */}
      <section id="research-leadership" className="w-full bg-white py-12 lg:py-16">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B0F1A] tracking-tight">
              Community Experts
            </h1>
            <p className="max-w-3xl text-sm sm:text-base text-gray-500 leading-relaxed mt-3">
              Meet the industry experts and community leaders driving open
              source research and innovation forward. Our leadership team brings
              decades of experience in decentralized systems and collaborative
              development.
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab("speakers")}
              className={`px-6 py-2.5 text-xs font-extrabold tracking-[0.12em] uppercase transition-colors duration-200 rounded-[2px] ${
                activeTab === "speakers"
                  ? "bg-[#0F172A] text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-slate-200"
              }`}
            >
              SPEAKERS
            </button>
            <button
              onClick={() => setActiveTab("mentors")}
              className={`px-6 py-2.5 text-xs font-extrabold tracking-[0.12em] uppercase transition-colors duration-200 rounded-[2px] ${
                activeTab === "mentors"
                  ? "bg-[#0F172A] text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-slate-200"
              }`}
            >
              MENTORS
            </button>
          </div>

          {/* 3-Column Leadership Team Grid */}
          {activeTab === "speakers" ? (
            <div className="max-w-[880px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {teamMembers.map((member) => (
                <button
                  key={member.name}
                  onClick={() =>
                    onProfileSelect({
                      name: member.name,
                      role: member.role,
                      org: member.org,
                      badge: member.badge,
                      photo: member.photo,
                      bioParagraphs: member.bioParagraphs,
                      tags: member.tags,
                    })
                  }
                  className="flex flex-col group overflow-hidden bg-[#0A1835] text-left cursor-pointer border-0 outline-none ring-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Full Photo container */}
                  <div className="relative aspect-[4/4.8] w-full bg-[#E2E8F0] overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Blue Caption Section below photo */}
                  <div className="bg-[#0A1835] px-4 py-3.5 flex flex-col justify-center w-full">
                    <span className="text-[13.5px] font-bold text-white tracking-wide uppercase leading-tight truncate">
                      {member.name}
                    </span>
                    <span className="text-[10.5px] font-medium text-[#94A3B8] uppercase tracking-[0.02em] mt-1 leading-snug truncate">
                      {member.cardRole}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="max-w-[880px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {mentorMembers.map((mentor) => (
                <button
                  key={mentor.name}
                  onClick={() =>
                    onProfileSelect({
                      name: mentor.name,
                      role: mentor.role,
                      org: mentor.org,
                      badge: mentor.badge,
                      photo: mentor.photo,
                      bioParagraphs: mentor.bioParagraphs,
                      tags: mentor.tags,
                    })
                  }
                  className="rounded-none overflow-hidden bg-white border border-slate-200/90 shadow-xs flex flex-col aspect-[3/3.8] transition-all duration-200 hover:shadow-md cursor-pointer text-left w-full border-0 outline-none ring-0 group"
                >
                  {/* Top Dark Navy Header */}
                  <div className="bg-[#18254A] px-4 py-3.5 flex items-center justify-between shrink-0">
                    {/* Left: Avatar Badge */}
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs overflow-hidden">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="7" r="3.5" fill="#B45309" />
                        <path d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="#BFDBFE" />
                        <path d="M5 11c0-1.1.9-2 2-2h1v4H7a2 2 0 0 1-2-2zM16 9h1a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1V9z" fill="#1E293B" />
                        <path d="M17 12c0 2-1 3-3 3" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    {/* Right: Dash accent line */}
                    <div className="w-6 h-[3px] bg-slate-400/50 rounded-full" />
                  </div>

                  {/* Middle Blank White Body with Mentor Name */}
                  <div className="flex-1 bg-white p-4 flex flex-col justify-end">
                    <span className="text-[12.5px] font-bold text-slate-800 tracking-wide uppercase leading-tight truncate group-hover:text-accent-blue transition-colors">
                      {mentor.name}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.02em] mt-0.5 leading-snug truncate">
                      {mentor.slotTitle}
                    </span>
                  </div>

                  {/* Bottom Bar with Paperclip & Arrow Icons */}
                  <div className="border-t border-slate-200/80 px-4 py-3 bg-white flex items-center justify-between shrink-0 text-slate-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 10 4 15 9 20" />
                      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== STAY CONNECTED NEWSLETTER ===== */}
      <section className="w-full bg-white pb-16 lg:pb-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="w-full bg-[#0F172A] rounded-sm p-8 lg:p-12 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  Stay Connected
                </h2>
                <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                  Subscribe to our newsletter for the latest research updates and
                  community news.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1E293B] border border-slate-700 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-sm sm:w-[280px] outline-none focus:border-blue-500 transition-colors"
                />
                <button className="bg-[#2563EB] text-white font-extrabold text-xs tracking-wider uppercase px-8 py-3 rounded-sm hover:bg-blue-600 transition-colors whitespace-nowrap">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER SECTION ===== */}
      {!hideFooter && (
        <>
          <div className="w-full h-[4px] bg-[#F59E0B]" />
          <footer className="w-full bg-[#0A101D] text-slate-400 text-xs pt-12 pb-8">
            <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-10">
                {/* Brand Column */}
                <div>
                  <Image
                    src="/logo.png"
                    alt="Open Source Connect"
                    width={160}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert mb-4"
                  />
                  <p className="text-[12px] text-slate-400 leading-relaxed max-w-[240px] mb-4">
                    Bringing developers, communities, and organizations
                    together to shape the future through open source.
                  </p>
                  {/* Social icons */}
                  <div className="flex items-center gap-3">
                    <Link
                      href="#"
                      aria-label="GitHub"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      aria-label="LinkedIn"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* OUR WORK */}
                <div>
                  <h3 className="text-white text-[11px] font-extrabold tracking-[0.15em] uppercase mb-4">
                    OUR WORK
                  </h3>
                  <ul className="space-y-2.5 text-[12px]">
                    {["Hosted Projects", "Project Lifecycle", "Technical Standards", "Working Groups"].map(
                      (item) => (
                        <li key={item}>
                          <Link href="#" className="hover:text-white transition-colors">
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* COMPLIANCE */}
                <div>
                  <h3 className="text-white text-[11px] font-extrabold tracking-[0.15em] uppercase mb-4">
                    COMPLIANCE
                  </h3>
                  <ul className="space-y-2.5 text-[12px]">
                    {["Trademark Policy", "Antitrust Policy", "Governance Bylaws", "Transparency Report"].map(
                      (item) => (
                        <li key={item}>
                          <Link href="#" className="hover:text-white transition-colors">
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* SUPPORT */}
                <div>
                  <h3 className="text-white text-[11px] font-extrabold tracking-[0.15em] uppercase mb-4">
                    SUPPORT
                  </h3>
                  <ul className="space-y-2.5 text-[12px]">
                    {["Membership", "Donations", "Mentorship", "Legal Support"].map(
                      (item) => (
                        <li key={item}>
                          <Link href="#" className="hover:text-white transition-colors">
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Bottom legal line */}
              <div className="border-t border-[#1E293B] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10.5px] text-slate-500 font-medium">
                <div>
                  &copy; 2026 Open Source Connect Community. All rights reserved.
                  <br />
                  
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                  <Link href="#" className="hover:text-white transition-colors">
                    Code of Conduct
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* Profile Modal */}
      {isStandalone && (
        <ProfileModal profile={selectedProfile} onClose={onProfileClose} />
      )}
    </>
  );
}
