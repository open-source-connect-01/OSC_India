"use client";

import Link from "next/link";
import Image from "next/image";

interface WhatWeDoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom SVG Icons matching exact What We Do dropdown screenshot
function CodeBracketsIcon() {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function HackathonTerminalIcon() {
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
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <polyline points="7 8 10 11 7 14" />
      <line x1="13" y1="14" x2="17" y2="14" />
    </svg>
  );
}

function RocketIcon() {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function CpuIcon() {
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
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
    </svg>
  );
}

function VideoPlayIcon() {
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
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <polygon points="10 8 16 11 10 14 10 8" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
}

export default function WhatWeDoOverlay({ isOpen, onClose }: WhatWeDoOverlayProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-x-0 z-40 bg-navy/30 backdrop-blur-[2px]"
        style={{ top: "64px", bottom: 0 }}
        onClick={onClose}
      />

      {/* Overlay panel */}
      <div
        className="fixed inset-x-0 z-50 shadow-2xl animate-slideDown overflow-y-auto"
        style={{ top: "64px", maxHeight: "calc(100vh - 64px)" }}
      >
        <div className="w-full bg-white border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-12 lg:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-y-8 md:gap-y-0 min-h-[280px]">
              {/* --- Column 1: CORE INITIATIVES --- */}
              <div className="md:pr-10 lg:pr-14">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-7">
                  CORE INITIATIVES
                </h3>

                <div className="space-y-8">
                  {/* Open Source Programs */}
                  <div className="group cursor-pointer flex items-center gap-4">
                    <CodeBracketsIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Open Source Programs
                      </h4>
                    </div>
                  </div>

                  {/* Hackathons */}
                  <div className="group cursor-pointer flex items-center gap-4">
                    <HackathonTerminalIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Hackathons
                      </h4>
                    </div>
                  </div>

                  {/* Startup Collaboration */}
                  <div className="group cursor-pointer flex items-center gap-4">
                    <RocketIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Startup Collaboration
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Column 2: RESEARCH & LEARNING --- */}
              <div className="pt-8 md:pt-0 md:pl-10 lg:pl-14">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-7">
                  RESEARCH &amp; LEARNING
                </h3>

                <div className="space-y-8">
                  {/* AI & Research Initiatives */}
                  <div className="group cursor-pointer flex items-start gap-4">
                    <CpuIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        AI &amp; Research Initiatives
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[340px]">
                        Cutting-edge research in artificial intelligence and machine learning.
                      </p>
                    </div>
                  </div>

                  {/* Workshops & Webinars */}
                  <div className="group cursor-pointer flex items-start gap-4">
                    <VideoPlayIcon />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#0B0F1A] group-hover:text-accent-blue transition-colors duration-200">
                        Workshops &amp; Webinars
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-[340px]">
                        Interactive learning sessions led by industry experts and researchers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer strip */}
          <div className="w-full bg-[#F8FAFC] border-t border-gray-100 py-4.5 px-6 lg:px-8">
            <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-bold tracking-[0.18em] text-gray-400 uppercase text-[10px] sm:text-[11px]">
                EXPLORE OUR FULL IMPACT
              </span>

              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-blue hover:underline"
              >
                <span>View All Programs</span>
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
      </div>
    </>
  );
}
