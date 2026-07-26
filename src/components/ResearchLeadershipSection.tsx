"use client";

import { useState } from "react";
import ProfileModal from "./ProfileModal";
import type { ProfileData } from "./ProfileModal";

const teamMembers: (ProfileData & { cardRole: string })[] = [
  {
    name: "Dr. Aris Thorne",
    cardRole: "Lead Architect, Project Alpha",
    role: "Senior Researcher & Ecosystem Manager",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    bioParagraphs: [
      "Dr. Aris Thorne is a distinguished researcher and strategic leader in the open-source ecosystem. With over 15 years of experience in distributed systems and community governance, he leads the OSC Foundation's initiatives in sustainable development and researcher mentorship.",
      "His work focuses on the intersection of academic research and practical industry application, ensuring that open-source contributors have the tools and institutional backing necessary to thrive in high-stakes environments. Aris has previously held senior roles at global tech consortia and is a frequent keynote speaker on digital sovereignty.",
    ],
    tags: ["Open Source Governance", "Ecosystem Strategy", "Sustainability"],
  },
  {
    name: "Sarah Jenkins",
    cardRole: "Community Director",
    role: "Community Strategy Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    bioParagraphs: [
      "Sarah Jenkins is a passionate community builder and strategist with over a decade of experience growing open-source communities worldwide. She has successfully scaled multiple developer communities from inception to global reach.",
      "Her expertise lies in fostering inclusive environments where contributors at all levels can thrive. Sarah has designed mentorship programs that have helped thousands of developers transition from newcomers to project maintainers.",
    ],
    tags: ["Community Building", "DEI Initiatives", "Developer Relations"],
  },
  {
    name: "Marcus Holloway",
    cardRole: "Principal Researcher",
    role: "Principal Research Scientist",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    bioParagraphs: [
      "Marcus Holloway is a principal research scientist specializing in distributed systems architecture and consensus protocols. His groundbreaking work on scalable blockchain infrastructure has been adopted by major open-source projects worldwide.",
      "He brings deep technical expertise in decentralized systems, cryptographic protocols, and high-performance computing. Marcus is a prolific author with over 40 peer-reviewed publications and serves on the editorial board of several top-tier journals.",
    ],
    tags: ["Distributed Systems", "Cryptography", "Protocol Design"],
  },
  {
    name: "Elena Rodriguez",
    cardRole: "DevOps Strategy Lead",
    role: "DevOps & Platform Engineering Lead",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    bioParagraphs: [
      "Elena Rodriguez leads DevOps strategy and platform engineering at the OSC Foundation, where she architects CI/CD pipelines and infrastructure-as-code frameworks that serve thousands of open-source projects globally.",
      "With a background in site reliability engineering at major cloud providers, Elena specializes in building resilient, scalable systems. She is a passionate advocate for GitOps methodologies and has contributed extensively to Kubernetes ecosystem projects.",
    ],
    tags: ["DevOps", "Cloud Infrastructure", "Platform Engineering"],
  },
  {
    name: "David Chen",
    cardRole: "Security Standards Chair",
    role: "Cybersecurity Standards Lead",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    bioParagraphs: [
      "David Chen chairs the Security Standards Working Group at the OSC Foundation, where he coordinates cross-industry efforts to establish best practices for open-source software security and supply chain integrity.",
      "His career spans two decades in cybersecurity, including leadership roles at major tech firms and government advisory boards. David has been instrumental in developing the Foundation's vulnerability disclosure framework and security audit programs.",
    ],
    tags: ["Cybersecurity", "Supply Chain Security", "Standards"],
  },
  {
    name: "Dr. Linda Wu",
    cardRole: "Open Standards Liaison",
    role: "Standards & Interoperability Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    bioParagraphs: [
      "Dr. Linda Wu serves as the Open Standards Liaison, bridging the gap between technical communities and international standards bodies. She ensures that open-source innovations align with global interoperability requirements.",
      "With a PhD in Computer Science and extensive experience in standards development organizations, Linda has facilitated the adoption of open standards across multiple industries. She chairs several W3C and IEEE working groups focused on web standards and data interoperability.",
    ],
    tags: ["Open Standards", "Interoperability", "Web Standards"],
  },
  {
    name: "James Wilson",
    cardRole: "Cloud Infrastructure Lead",
    role: "Cloud Architecture Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    bioParagraphs: [
      "James Wilson directs cloud infrastructure strategy at the OSC Foundation, overseeing the architecture and operations of cloud-native platforms that support hundreds of open-source projects across multiple cloud providers.",
      "His expertise spans serverless computing, container orchestration, and multi-cloud networking. James is a core contributor to several CNCF projects and frequently speaks at industry conferences about cloud-native best practices and infrastructure automation.",
    ],
    tags: ["Cloud Native", "Kubernetes", "Infrastructure as Code"],
  },
  {
    name: "Amara Okafor",
    cardRole: "Strategic Partnerships",
    role: "Partnerships & Alliances Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    bioParagraphs: [
      "Amara Okafor leads strategic partnerships at the OSC Foundation, building relationships with corporations, academic institutions, and government agencies to expand the foundation's reach and impact across the open-source ecosystem.",
      "With extensive experience in business development and technology strategy, Amara has forged collaborations that have resulted in significant funding and resource commitments for critical open-source projects. She is a strong advocate for sustainable open-source business models.",
    ],
    tags: ["Strategic Partnerships", "Business Development", "Funding"],
  },
  {
    name: "Kevin Schmidt",
    cardRole: "Technical Mentor",
    role: "Senior Technical Mentor & Advisor",
    org: "OSC Foundation",
    badge: "Senior Mentor",
    bioParagraphs: [
      "Kevin Schmidt is a senior technical mentor at the OSC Foundation, where he guides aspiring open-source contributors through structured mentorship programs and helps projects establish healthy community practices.",
      "His approach combines technical coaching with community building, having mentored over 200 developers who have gone on to become project maintainers and community leaders. Kevin is the author of several widely-used open-source libraries and documentation frameworks.",
    ],
    tags: ["Mentorship", "Developer Education", "Documentation"],
  },
  {
    name: "Sophia Rossi",
    cardRole: "Developer Relations",
    role: "Developer Relations Director",
    org: "OSC Foundation",
    badge: "Senior Mentor",
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

  return (
    <>
      {/* ===== RESEARCH LEADERSHIP ===== */}
      <section id="research-leadership" className="w-full bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 pt-12 lg:pt-14 pb-8 lg:pb-10">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-[32px] lg:text-[36px] font-extrabold text-navy-deep leading-tight">
              Research Leadership
            </h1>
            <p className="max-w-[600px] text-[15px] text-gray-400 leading-relaxed mt-3">
              Meet the industry experts and community leaders driving open
              source research and innovation forward. Our leadership team brings
              decades of experience in decentralized systems and collaborative
              development.
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab("mentors")}
                className={`px-5 py-2 text-[11px] font-bold tracking-[0.08em] uppercase rounded-full transition-all duration-200 ${
                  activeTab === "mentors"
                    ? "bg-navy-deep text-white"
                    : "text-gray-500 hover:text-navy-deep"
                }`}
              >
                Mentors
              </button>
              <button
                onClick={() => setActiveTab("speakers")}
                className={`px-5 py-2 text-[11px] font-bold tracking-[0.08em] uppercase rounded-full transition-all duration-200 ${
                  activeTab === "speakers"
                    ? "bg-navy-deep text-white"
                    : "text-gray-500 hover:text-navy-deep"
                }`}
              >
                Speakers
              </button>
            </div>
          </div>

          {/* Team Grid — 5 cols, responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
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
                className="rounded-[6px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white text-left cursor-pointer transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)] hover:-translate-y-0.5"
              >
                {/* Photo placeholder */}
                <div className="aspect-[3/4] bg-[#D9D9D9] w-full" />
                {/* Caption bar */}
                <div className="bg-navy-deep px-3.5 py-3 min-h-[68px] flex flex-col justify-center">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    {member.name}
                  </span>
                  <span className="text-[9px] font-medium text-gray-400 uppercase tracking-[0.04em] mt-0.5 leading-snug">
                    {member.cardRole}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8 lg:mt-10">
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-400 text-sm font-medium cursor-default">
              ‹
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded text-[13px] font-bold transition-all duration-200 ${
                  activePage === page
                    ? "bg-navy-deep text-white"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-400"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded text-gray-400 text-sm font-medium hover:text-navy-deep transition-colors duration-200">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===== STAY CONNECTED NEWSLETTER ===== */}
      <div className="w-full bg-white pb-12 lg:pb-16">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="w-full bg-[#0B0F1A] rounded-[12px] px-6 sm:px-10 lg:px-12 py-10 lg:py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
              <div className="flex-1">
                <h2 className="text-[24px] lg:text-[26px] font-bold text-white leading-tight">
                  Stay Connected
                </h2>
                <p className="text-[14px] text-gray-400 leading-relaxed max-w-[440px] mt-2">
                  Subscribe to our newsletter for the latest research updates
                  and community news.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 sm:w-[260px] h-[46px] px-4 bg-[#1a1f2e] text-white text-[14px] placeholder-gray-500 rounded-[6px] outline-none focus:ring-1 focus:ring-accent-blue transition-all duration-200"
                />
                <button className="h-[46px] px-6 bg-accent-blue text-white text-[11px] font-bold tracking-[0.1em] uppercase rounded-[6px] hover:bg-blue-600 transition-all duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={onProfileClose}
      />
    </>
  );
}
