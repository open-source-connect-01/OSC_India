"use client";

import Link from "next/link";

interface WhatWeDoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatWeDoOverlay({ isOpen, onClose }: WhatWeDoOverlayProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-x-0 z-40 bg-navy/30 backdrop-blur-[2px]"
        style={{ top: "110px", bottom: 0 }}
        onClick={onClose}
      />

      {/* Overlay panel */}
      <div
        className="fixed inset-x-0 z-50 shadow-2xl animate-slideDown overflow-y-auto"
        style={{ top: "110px", maxHeight: "calc(100vh - 110px)" }}
      >
        <div className="w-full bg-white">
          <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-10 lg:py-12">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {/* --- Column 1: Core Initiatives --- */}
              <div>
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                  Core Initiatives
                </h3>

                <div className="space-y-8">
                  {/* Open Source Programs */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </div>
                      <div className="flex items-center h-10">
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Open Source Programs
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Hackathons */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <div className="flex items-center h-10">
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Hackathons
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Startup Collaboration */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                        </svg>
                      </div>
                      <div className="flex items-center h-10">
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Startup Collaboration
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Column 2: Advanced Research --- */}
              <div>
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                  Advanced Research
                </h3>

                <div className="space-y-8">
                  {/* AI & Research Initiatives */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          AI &amp; Research Initiatives
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Cutting-edge research in artificial intelligence and machine learning.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Workshops & Webinars */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <polygon points="10 8 16 12 10 16 10 8" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Workshops &amp; Webinars
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Interactive learning sessions led by industry experts and researchers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer strip */}
          <div className="w-full bg-gray-50 border-t border-gray-100">
            <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                  Explore our full impact
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-accent-blue uppercase hover:text-accent-blue/80 transition-colors duration-200 group"
                >
                  View All Programs
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={onClose}
        className="fixed top-[76px] left-6 z-[60] w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md text-navy transition-all duration-200"
        aria-label="Go back"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
      </button>
    </>
  );
}
