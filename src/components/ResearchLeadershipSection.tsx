"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileModal from "./ProfileModal";
import type { ProfileData } from "./ProfileModal";

export const teamMembers: (ProfileData & { cardRole: string; photo: string })[] = [
  {
    name: "Dr. Aris Thorne",
    cardRole: "LEAD ARCHITECT, PROJECT ALPHA",
    role: "Senior Researcher & Ecosystem Manager",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/aris_thorne.jpg",
    bioParagraphs: [
      "Dr. Aris Thorne is a distinguished researcher and strategic leader in the open-source ecosystem. With over 15 years of experience in distributed systems and community governance, he leads the OSC Foundation's initiatives in sustainable development and researcher mentorship.",
      "His work focuses on the intersection of academic research and practical industry application, ensuring that open-source contributors have the tools and institutional backing necessary to thrive in high-stakes environments. Aris has previously held senior roles at global tech consortia and is a frequent keynote speaker on digital sovereignty.",
    ],
    tags: ["Open Source Governance", "Ecosystem Strategy", "Sustainability"],
  },
  {
    name: "Sarah Jenkins",
    cardRole: "COMMUNITY DIRECTOR",
    role: "Community Strategy Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/sarah_jenkins.jpg",
    bioParagraphs: [
      "Sarah Jenkins is a passionate community builder and strategist with over a decade of experience growing open-source communities worldwide. She has successfully scaled multiple developer communities from inception to global reach.",
      "Her expertise lies in fostering inclusive environments where contributors at all levels can thrive. Sarah has designed mentorship programs that have helped thousands of developers transition from newcomers to project maintainers.",
    ],
    tags: ["Community Building", "DEI Initiatives", "Developer Relations"],
  },
  {
    name: "Marcus Holloway",
    cardRole: "PRINCIPAL RESEARCHER",
    role: "Principal Research Scientist",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/marcus_holloway.jpg",
    bioParagraphs: [
      "Marcus Holloway is a principal research scientist specializing in distributed systems architecture and consensus protocols. His groundbreaking work on scalable blockchain infrastructure has been adopted by major open-source projects worldwide.",
      "He brings deep technical expertise in decentralized systems, cryptographic protocols, and high-performance computing. Marcus is a prolific author with over 40 peer-reviewed publications and serves on the editorial board of several top-tier journals.",
    ],
    tags: ["Distributed Systems", "Cryptography", "Protocol Design"],
  },
  {
    name: "Elena Rodriguez",
    cardRole: "DEVOPS STRATEGY LEAD",
    role: "DevOps & Platform Engineering Lead",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/elena_rodriguez.jpg",
    bioParagraphs: [
      "Elena Rodriguez leads DevOps strategy and platform engineering at the OSC Foundation, where she architects CI/CD pipelines and infrastructure-as-code frameworks that serve thousands of open-source projects globally.",
      "With a background in site reliability engineering at major cloud providers, Elena specializes in building resilient, scalable systems. She is a passionate advocate for GitOps methodologies and has contributed extensively to Kubernetes ecosystem projects.",
    ],
    tags: ["DevOps", "Cloud Infrastructure", "Platform Engineering"],
  },
  {
    name: "David Chen",
    cardRole: "SECURITY STANDARDS CHAIR",
    role: "Cybersecurity Standards Lead",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/david_chen.jpg",
    bioParagraphs: [
      "David Chen chairs the Security Standards Working Group at the OSC Foundation, where he coordinates cross-industry efforts to establish best practices for open-source software security and supply chain integrity.",
      "His career spans two decades in cybersecurity, including leadership roles at major tech firms and government advisory boards. David has been instrumental in developing the Foundation's vulnerability disclosure framework and security audit programs.",
    ],
    tags: ["Cybersecurity", "Supply Chain Security", "Standards"],
  },
  {
    name: "Dr. Linda Wu",
    cardRole: "OPEN STANDARDS LIAISON",
    role: "Standards & Interoperability Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/linda_wu.jpg",
    bioParagraphs: [
      "Dr. Linda Wu serves as the Open Standards Liaison, bridging the gap between technical communities and international standards bodies. She ensures that open-source innovations align with global interoperability requirements.",
      "With a PhD in Computer Science and extensive experience in standards development organizations, Linda has facilitated the adoption of open standards across multiple industries. She chairs several W3C and IEEE working groups focused on web standards and data interoperability.",
    ],
    tags: ["Open Standards", "Interoperability", "Web Standards"],
  },
  {
    name: "James Wilson",
    cardRole: "CLOUD INFRASTRUCTURE LEAD",
    role: "Cloud Architecture Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/james_wilson.jpg",
    bioParagraphs: [
      "James Wilson directs cloud infrastructure strategy at the OSC Foundation, overseeing the architecture and operations of cloud-native platforms that support hundreds of open-source projects across multiple cloud providers.",
      "His expertise spans serverless computing, container orchestration, and multi-cloud networking. James is a core contributor to several CNCF projects and frequently speaks at industry conferences about cloud-native best practices and infrastructure automation.",
    ],
    tags: ["Cloud Native", "Kubernetes", "Infrastructure as Code"],
  },
  {
    name: "Amara Okafor",
    cardRole: "STRATEGIC PARTNERSHIPS",
    role: "Partnerships & Alliances Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/amara_okafor.jpg",
    bioParagraphs: [
      "Amara Okafor leads strategic partnerships at the OSC Foundation, building relationships with corporations, academic institutions, and government agencies to expand the foundation's reach and impact across the open-source ecosystem.",
      "With extensive experience in business development and technology strategy, Amara has forged collaborations that have resulted in significant funding and resource commitments for critical open-source projects. She is a strong advocate for sustainable open-source business models.",
    ],
    tags: ["Strategic Partnerships", "Business Development", "Funding"],
  },
  {
    name: "Kevin Schmidt",
    cardRole: "TECHNICAL MENTOR",
    role: "Senior Technical Mentor & Advisor",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/kevin_schmidt.jpg",
    bioParagraphs: [
      "Kevin Schmidt is a senior technical mentor at the OSC Foundation, where he guides aspiring open-source contributors through structured mentorship programs and helps projects establish healthy community practices.",
      "His approach combines technical coaching with community building, having mentored over 200 developers who have gone on to become project maintainers and community leaders. Kevin is the author of several widely-used open-source libraries and documentation frameworks.",
    ],
    tags: ["Mentorship", "Developer Education", "Documentation"],
  },
  {
    name: "Sophia Rossi",
    cardRole: "DEVELOPER RELATIONS",
    role: "Developer Relations Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    photo: "/leaders/sophia_rossi.jpg",
    bioParagraphs: [
      "Sophia Rossi leads Developer Relations at the OSC Foundation, building bridges between the foundation and the global developer community through events, content, and direct engagement programs.",
      "She is a seasoned developer advocate with a talent for translating complex technical concepts into accessible learning resources. Sophia has organized over 50 hackathons and speaking events worldwide, and hosts a popular technical podcast on open-source development practices.",
    ],
    tags: ["Developer Relations", "Community Events", "Technical Content"],
  },
];

export default function ResearchLeadershipSection({
  selectedProfile: externalSelectedProfile,
  onProfileSelect: externalOnProfileSelect,
  onProfileClose: externalOnProfileClose,
}: {
  selectedProfile?: ProfileData | null;
  onProfileSelect?: (profile: ProfileData) => void;
  onProfileClose?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"mentors" | "speakers">("mentors");
  const [activePage, setActivePage] = useState(1);
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
      {/* ===== RESEARCH LEADERSHIP ===== */}
      <section id="research-leadership" className="w-full bg-white py-12 lg:py-16">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B0F1A] tracking-tight">
              Research Leadership
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
              onClick={() => setActiveTab("mentors")}
              className={`px-6 py-2.5 text-xs font-extrabold tracking-[0.12em] uppercase transition-colors duration-200 rounded-[2px] ${
                activeTab === "mentors"
                  ? "bg-[#0F172A] text-white"
                  : "bg-[#F1F5F9] text-[#475569] hover:bg-slate-200"
              }`}
            >
              MENTORS
            </button>
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
          </div>

          {/* 5-Column Leadership Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
            {teamMembers.map((member) => (
              <button
                key={member.name}
                onClick={() =>
                  onProfileSelect({
                    name: member.name,
                    role: member.role,
                    org: member.org,
                    badge: member.badge,
                    bioParagraphs: member.bioParagraphs,
                    tags: member.tags,
                  })
                }
                className="relative group overflow-hidden bg-white text-left cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
              >
                {/* Photo container */}
                <div className="relative aspect-[3/4] w-full bg-slate-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlaid dark caption bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-[#0F172A] p-3 min-h-[58px] flex flex-col justify-center">
                    <span className="text-[11px] font-extrabold text-white tracking-wide uppercase leading-tight truncate">
                      {member.name}
                    </span>
                    <span className="text-[9px] font-semibold text-gray-300 uppercase tracking-[0.04em] mt-0.5 leading-snug truncate">
                      {member.cardRole}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1.5 mt-10 mb-6">
            <button
              aria-label="Previous Page"
              className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-[#0B0F1A] border border-gray-200 rounded-[2px] transition-colors"
            >
              &lt;
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`w-9 h-9 flex items-center justify-center text-xs font-extrabold rounded-[2px] transition-colors ${
                  activePage === page
                    ? "bg-[#0F172A] text-white"
                    : "bg-white text-slate-600 border border-gray-200 hover:border-slate-400"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              aria-label="Next Page"
              className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-[#0B0F1A] border border-gray-200 rounded-[2px] transition-colors"
            >
              &gt;
            </button>
          </div>
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
      <div className="w-full h-[4px] bg-[#F59E0B]" />
      <footer className="w-full bg-[#0A101D] text-slate-400 text-xs pt-12 pb-8">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-10">
            {/* Brand Column */}
            <div>
              <div className="w-7 h-7 bg-white text-[#0A101D] font-extrabold flex items-center justify-center rounded-[2px] mb-3.5 text-sm">
                O
              </div>
              <p className="text-[12px] text-slate-400 leading-relaxed max-w-[240px] mb-4">
                Providing the institutional framework for collaborative
                innovation and technical meritocracy.
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

      {/* Profile Modal */}
      {isStandalone && (
        <ProfileModal profile={selectedProfile} onClose={onProfileClose} />
      )}
    </>
  );
}
