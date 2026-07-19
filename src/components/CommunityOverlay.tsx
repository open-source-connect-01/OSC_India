"use client";

import { useState } from "react";
import Link from "next/link";

interface CommunityOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommunityOverlay({ isOpen, onClose }: CommunityOverlayProps) {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <>
      {/* Dimmed backdrop — covers the page content below the header */}
      <div
        className="fixed inset-x-0 z-40 bg-navy/30 backdrop-blur-[2px]"
        style={{ top: "110px" }}
        onClick={onClose}
      />

      {/* Overlay dropdown panel — slides down below the nav bar */}
      <div
        className="fixed inset-x-0 z-50 shadow-2xl animate-slideDown"
        style={{ top: "110px" }}
      >
        <div className="w-full bg-white">
          {/* ===== MEGA MENU CONTENT ===== */}
          <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-10 lg:py-12">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {/* --- Column 1: Community Engagement --- */}
              <div>
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                  Community Engagement
                </h3>

                <div className="space-y-6">
                  {/* Top Contributors */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent-blue"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                          <path d="M4 22h16" />
                          <path d="M10 22V12h4v10" />
                          <path d="M12 2v4" />
                          <path d="M8 6h8" />
                          <path d="M8 2h8" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Top Contributors
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-[380px]">
                          Celebrate the individuals driving our success and innovation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-100" />

                  {/* Volunteer With Us */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent-blue"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Volunteer With Us
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-[380px]">
                          Join our global network of passionate open source advocates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Column 2: Governance --- */}
              <div>
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                  Governance
                </h3>

                <div className="space-y-6">
                  {/* Community Guidelines */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent-blue"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Community Guidelines
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-[380px]">
                          Read our essential standards for collaboration, ethics, and safety.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Thin divider */}
                  <div className="h-px bg-gray-100" />

                  {/* View Community Hub link */}
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-accent-blue uppercase hover:text-accent-blue/80 transition-colors duration-200 group"
                  >
                    View Community Hub
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

          {/* ===== NEWSLETTER STRIP ===== */}
          <div className="w-full bg-gray-50 border-t border-gray-100">
            <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                  Get the latest ecosystem news delivered monthly.
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 sm:w-[220px] h-[38px] px-4 text-xs bg-white border border-gray-200 rounded-[6px] outline-none focus:border-accent-blue transition-colors duration-200 placeholder-gray-400"
                  />
                  <button className="h-[38px] px-5 bg-accent-blue text-white text-[9px] font-bold tracking-[0.14em] uppercase rounded-[6px] hover:bg-blue-600 transition-all duration-200 shrink-0">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close button — positioned relative to the header area */}
      <button
        onClick={onClose}
        className="fixed top-[76px] right-6 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md text-navy transition-all duration-200"
        aria-label="Close menu"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </>
  );
}
