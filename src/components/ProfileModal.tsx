"use client";

import { useEffect } from "react";
import Link from "next/link";

export interface ProfileData {
  name: string;
  role: string;
  org: string;
  badge: string;
  bioParagraphs: string[];
  tags: string[];
}

interface ProfileModalProps {
  profile: ProfileData | null;
  onClose: () => void;
}

export default function ProfileModal({ profile, onClose }: ProfileModalProps) {
  // Lock body scroll when modal is open (robust for mobile)
  useEffect(() => {
    if (profile) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      const scrollY = parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
  }, [profile]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (profile) {
      window.addEventListener("keydown", handleKey);
    }
    return () => window.removeEventListener("keydown", handleKey);
  }, [profile, onClose]);

  if (!profile) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[900px] max-h-[90vh] bg-white rounded-[10px] shadow-2xl overflow-y-auto flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md text-navy-deep transition-all duration-200"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Left: Photo placeholder */}
        <div className="md:w-[42%] shrink-0 bg-[#D9D9D9] min-h-[250px] md:min-h-full rounded-t-[10px] md:rounded-l-[10px] md:rounded-tr-none" />

        {/* Right: Content */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10">
          {/* Badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-[#DCEAFB] text-[#1D4ED8] text-[11px] font-bold uppercase tracking-[0.04em] mb-4">
            {profile.badge}
          </span>

          {/* Name */}
          <h2 className="text-[24px] lg:text-[26px] font-bold text-navy-deep leading-tight">
            {profile.name}
          </h2>

          {/* Role */}
          <p className="text-[15px] text-[#4B5563] mt-1">{profile.role}</p>

          {/* Organization */}
          <p className="text-[14px] text-[#2563EB] font-medium mt-0.5">
            {profile.org}
          </p>

          {/* Social Icons */}
          <div className="flex gap-2 mt-4">
            <div className="w-8 h-8 rounded-[6px] bg-navy-deep flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-[6px] bg-navy-deep flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
          </div>

          {/* Divider + BIOGRAPHY label */}
          <div className="h-px bg-gray-100 my-5" />
          <span className="text-[10px] font-bold tracking-[0.12em] text-gray-400 uppercase">
            Biography
          </span>

          {/* Bio text */}
          <div className="mt-3 space-y-3">
            {profile.bioParagraphs.map((para, i) => (
              <p key={i} className="text-[14px] text-[#374151] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Thin divider */}
          <div className="h-px bg-gray-100 my-5" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[44px] px-6 bg-navy-deep text-white text-[11px] font-bold tracking-[0.1em] uppercase rounded-[6px] hover:bg-navy transition-all duration-200"
            >
              Book a Session
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[44px] px-6 bg-white text-navy-deep border-2 border-navy-deep text-[11px] font-bold tracking-[0.1em] uppercase rounded-[6px] hover:bg-navy-deep hover:text-white transition-all duration-200"
            >
              View Research
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
