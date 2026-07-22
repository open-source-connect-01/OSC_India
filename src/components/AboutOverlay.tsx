"use client";

import Link from "next/link";

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutOverlay({ isOpen, onClose }: AboutOverlayProps) {
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
          <div className="sticky top-0 z-10 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-6 lg:pr-8 py-4 flex justify-start">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-[9px] font-bold tracking-[0.16em] uppercase text-navy shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
                aria-label="Go back"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
                Back
              </button>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-10 lg:py-12">
            <div className="grid md:grid-cols-12 gap-x-8 gap-y-10">
              {/* --- Column 1 (wider): Image + About OSC --- */}
              <div className="md:col-span-5">
                {/* Placeholder image box */}
                <div className="w-full aspect-[280/180] bg-gray-200 rounded-lg mb-5" />

                <h3 className="text-sm font-bold text-navy mb-2">
                  About OSC Foundation
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed max-w-[380px]">
                  Learn more about our mission to democratize open source
                  education and impact lives globally.
                </p>
              </div>

              {/* --- Column 2: The Foundation --- */}
              <div className="md:col-span-3">
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                  The Foundation
                </h3>

                <div className="space-y-6">
                  {/* About the OSC */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          About the OSC
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Our mission, vision, and core values driving open source excellence.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Advisory Board */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <path d="M3 3v18h18" />
                          <path d="M7 16l4-8 4 4 4-6" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Advisory Board
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Meet the industry leaders shaping our strategic direction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Column 3: Our People --- */}
              <div className="md:col-span-3">
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                  Our People
                </h3>

                <div className="space-y-6">
                  {/* Meet the Team */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Meet the Team
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          The dedicated individuals working behind the scenes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mentors & Speakers */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Mentors &amp; Speakers
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Expert contributors sharing knowledge with the community.
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
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                    Stay updated with our newsletter
                  </p>
                  <Link
                    href="#"
                    className="text-[10px] font-bold tracking-[0.12em] text-accent-blue uppercase hover:text-accent-blue/80 transition-colors duration-200"
                  >
                    Sign up now
                  </Link>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-accent-blue uppercase hover:text-accent-blue/80 transition-colors duration-200 group"
                >
                  View Our History
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

    </>
  );
}
