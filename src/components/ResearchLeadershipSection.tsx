"use client";

import { useState } from "react";

const teamMembers = [
  { name: "Dr. Aris Thorne", role: "Lead Architect, Project Alpha" },
  { name: "Sarah Jenkins", role: "Community Director" },
  { name: "Marcus Holloway", role: "Principal Researcher" },
  { name: "Elena Rodriguez", role: "DevOps Strategy Lead" },
  { name: "David Chen", role: "Security Standards Chair" },
  { name: "Dr. Linda Wu", role: "Open Standards Liaison" },
  { name: "James Wilson", role: "Cloud Infrastructure Lead" },
  { name: "Amara Okafor", role: "Strategic Partnerships" },
  { name: "Kevin Schmidt", role: "Technical Mentor" },
  { name: "Sophia Rossi", role: "Developer Relations" },
];

export default function ResearchLeadershipSection() {
  const [activeTab, setActiveTab] = useState<"mentors" | "speakers">("mentors");
  const [activePage, setActivePage] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <>
      {/* ===== RESEARCH LEADERSHIP ===== */}
      <section className="w-full bg-white">
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
              <div
                key={member.name}
                className="rounded-[6px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white"
              >
                {/* Photo placeholder */}
                <div className="aspect-[3/4] bg-[#D9D9D9] w-full" />
                {/* Caption bar */}
                <div className="bg-navy-deep px-3.5 py-3 min-h-[68px] flex flex-col justify-center">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    {member.name}
                  </span>
                  <span className="text-[9px] font-medium text-gray-400 uppercase tracking-[0.04em] mt-0.5 leading-snug">
                    {member.role}
                  </span>
                </div>
              </div>
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
              {/* Left: text */}
              <div className="flex-1">
                <h2 className="text-[24px] lg:text-[26px] font-bold text-white leading-tight">
                  Stay Connected
                </h2>
                <p className="text-[14px] text-gray-400 leading-relaxed max-w-[440px] mt-2">
                  Subscribe to our newsletter for the latest research updates
                  and community news.
                </p>
              </div>
              {/* Right: email input + subscribe */}
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
    </>
  );
}
