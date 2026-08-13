"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ResearchLeadershipSection from "./ResearchLeadershipSection";
import ProfileModal from "./ProfileModal";
import type { ProfileData } from "./ProfileModal";

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubView = "main" | "mentors-speakers";

// Custom SVG Icons matching exact dropdown screenshot
function BuildingIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      <rect x="4" y="2" width="8" height="20" rx="1" />
      <rect x="12" y="8" width="8" height="14" rx="1" />
      <path d="M8 6h.01M8 10h.01M8 14h.01M8 18h.01M16 12h.01M16 16h.01" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 19c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" />
      <line x1="10" y1="5" x2="14" y2="5" />
    </svg>
  );
}

function PartnersIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 11a4 4 0 0 0 0-6" />
      <path d="M22 13a8 8 0 0 0 0-10" />
    </svg>
  );
}

export default function AboutOverlay({ isOpen, onClose }: AboutOverlayProps) {
  const [subview, setSubview] = useState<SubView>("main");
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(null);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setSubview("main");
    }
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-x-0 z-40 bg-navy/30 backdrop-blur-[2px]"
        style={{ top: "64px", bottom: 0 }}
        onClick={subview === "main" ? onClose : () => setSubview("main")}
      />

      {/* Overlay panel */}
      <div
        className={`fixed inset-x-0 z-50 shadow-2xl animate-slideDown ${
          selectedProfile ? "overflow-hidden" : "overflow-y-auto"
        }`}
        style={{ top: "64px", maxHeight: "calc(100vh - 64px)" }}
      >
        <div className="w-full bg-white border-t border-gray-100">

          {/* ---------- MAIN VIEW ---------- */}
          {subview === "main" && (
            <div>
              <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                  {/* --- Column 1: Image + About OSC Foundation --- */}
                  <div className="md:col-span-5 lg:col-span-4">
                    <div className="relative mb-6 pr-3.5 pb-3.5">
                      {/* Solid periwinkle offset shadow block - exact same width & height as image, positioned bottom-right */}
                      <div className="absolute top-3.5 left-3.5 w-full h-full bg-[#B4C6EE] z-0" />
                      {/* Image container with sharp 90-degree corners and subtle bottom-right drop shadow */}
                      <div className="relative z-10 shadow-[4px_6px_20px_rgba(0,0,0,0.25)] bg-white">
                        <Image
                          src="/about_foundation_v2.png"
                          alt="About OSC Foundation"
                          width={400}
                          height={250}
                          className="w-full aspect-[16/10] object-cover rounded-none block"
                        />
                      </div>
                    </div>
                    <h3 className="text-[17px] font-extrabold text-[#0B0F1A] tracking-tight">
                      About OSC Foundation
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1.5 max-w-[340px]">
                      Learn about our mission, values, and
                      commitment to making open source more accessible.
                    </p>
                  </div>

                  {/* --- Column 2: THE FOUNDATION --- */}
                  <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                        THE FOUNDATION
                      </h3>

                      <div className="space-y-7">
                        {/* About the OSC */}
                        <Link
                          href="/about"
                          className="group cursor-pointer flex items-start gap-4"
                          onClick={onClose}
                        >
                          <BuildingIcon />
                          <div>
                            <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                              About the OSC
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              Our mission, vision, and values shaping a
                              stronger open source ecosystem.
                            </p>
                          </div>
                        </Link>

                        {/* Meet the team */}
                        <div className="group cursor-pointer flex items-start gap-4">
                          <SlidersIcon />
                          <div>
                            <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                              Meet the team
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              Meet the people building programs,
                              communities, and opportunities at OSC.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* --- Column 3: OUR PEOPLE --- */}
                    <div>
                      <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                        OUR PEOPLE
                      </h3>

                      <div className="space-y-7">
                        {/* Speakers & Mentors */}
                        <Link
                          href="/speakers-and-mentors"
                          className="group cursor-pointer flex items-start gap-4"
                          onClick={onClose}
                        >
                          <BadgeIcon />
                          <div>
                            <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                              Speakers &amp; Mentors
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              Industry leaders sharing knowledge, experience,
                              and insights with our community.
                            </p>
                          </div>
                        </Link>

                        {/* Partners */}
                        <div className="group cursor-pointer flex items-start gap-4">
                          <PartnersIcon />
                          <div>
                            <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                              Partners
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              Organizations and communities working
                              with us to strengthen open source.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom footer strip */}
              <div className="w-full bg-[#F8FAFC] border-t border-gray-100 py-4.5 px-6 lg:px-8">
                <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold tracking-[0.18em] text-gray-400 uppercase text-[10px] sm:text-[11px]">
                      STAY UPDATED WITH OUR NEWSLETTER
                    </span>
                    <Link
                      href="#"
                      className="font-bold text-accent-blue hover:underline text-xs"
                    >
                      Sign up now
                    </Link>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-blue hover:underline"
                  >
                    <span>View Our History</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ---------- MENTORS & SPEAKERS SUBVIEW ---------- */}
          {subview === "mentors-speakers" && (
            <ResearchLeadershipSection
              selectedProfile={selectedProfile}
              onProfileSelect={(profile) => setSelectedProfile(profile)}
              onProfileClose={() => setSelectedProfile(null)}
            />
          )}
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </>
  );
}



