"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export type ActiveOverlay = "about" | "whatwedo" | "resources" | "events" | null;

interface NavbarProps {
  onNavClick?: (label: ActiveOverlay) => void;
  activeOverlay?: ActiveOverlay;
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
  onMobileNavClick?: (label: ActiveOverlay) => void;
}

const navItems: { label: string; key: ActiveOverlay }[] = [
  { label: "About", key: "about" },
  { label: "What We Do", key: "whatwedo" },
  { label: "Community", key: "resources" },
  { label: "Events", key: "events" },
];

export default function Navbar({
  onNavClick,
  activeOverlay,
  isMobileMenuOpen,
  onMobileMenuToggle,
  onMobileNavClick,
}: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobileToggleLocked = activeOverlay !== null;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full bg-white relative border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px]">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Open Source Connect"
                width={160}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            {/* Nav links - centered */}
            <div className="flex items-center gap-8 lg:gap-10 mx-auto h-full">
              {navItems.map((item) => {
                const isActive = activeOverlay === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => onNavClick?.(item.key)}
                    className={`relative py-5 text-[10.5px] font-bold tracking-[0.18em] uppercase transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-accent-blue"
                        : "text-gray-500 hover:text-[#0B0F1A]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent-blue rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Action: Join Us Button */}
            <Link
              href="#"
              className="inline-flex items-center justify-center h-[38px] px-6 bg-[#0B0F1A] text-white text-[10px] font-extrabold tracking-[0.18em] uppercase rounded-[2px] hover:bg-slate-800 transition-all duration-200 shrink-0"
            >
              JOIN US
            </Link>
          </div>

          {/* Mobile Layout (Matching exact reference screenshot) */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Open Source Connect"
                width={135}
                height={34}
                className="h-7 w-auto object-contain"
                priority
              />
            </Link>

            {/* Right: Search Icon + Staggered Hamburger Icon */}
            <div className="flex items-center gap-4">
              {/* Search Toggle Button */}
              <button
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="p-1.5 text-[#0B0F1A] hover:opacity-75 transition-opacity"
                aria-label="Search"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B0F1A"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              {/* Staggered Hamburger Menu Button */}
              <button
                onClick={() => {
                  if (!isMobileToggleLocked) {
                    onMobileMenuToggle?.();
                  }
                }}
                className={`relative z-[80] p-1.5 flex flex-col items-end justify-center w-8 h-8 group transition-opacity duration-200 ${
                  isMobileToggleLocked ? "cursor-not-allowed opacity-40" : ""
                }`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                disabled={isMobileToggleLocked}
              >
                {isMobileMenuOpen ? (
                  /* X icon when open */
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <span className="absolute w-5 h-[2px] bg-[#0B0F1A] rotate-45 rounded-full" />
                    <span className="absolute w-5 h-[2px] bg-[#0B0F1A] -rotate-45 rounded-full" />
                  </div>
                ) : (
                  /* Staggered 3-line hamburger matching screenshot */
                  <div className="flex flex-col items-end justify-between w-5 h-[14px]">
                    <span className="w-5 h-[2px] bg-[#0B0F1A] rounded-full" />
                    <span className="w-5 h-[2px] bg-[#0B0F1A] rounded-full" />
                    <span className="w-3.5 h-[2px] bg-[#0B0F1A] rounded-full" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 animate-slideDown">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search resources, projects, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 text-xs bg-slate-50 border border-gray-200 rounded-md outline-none focus:border-accent-blue text-slate-800 placeholder-gray-400"
                autoFocus
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute left-3 text-gray-400 pointer-events-none"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`md:hidden fixed inset-x-0 z-[60] bg-[#0B0F1A]/30 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px", bottom: 0 }}
        onClick={onMobileMenuToggle}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 z-[70] bg-white shadow-2xl transition-all duration-300 ease-in-out border-b border-gray-100 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <div className="px-6 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeOverlay === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  onMobileNavClick?.(item.key);
                }}
                className={`block w-full text-left py-3 px-4 text-xs font-extrabold tracking-[0.16em] uppercase rounded transition-colors duration-200 min-h-[44px] ${
                  isActive
                    ? "text-accent-blue bg-blue-50/50"
                    : "text-[#0B0F1A] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-gray-100">
            <Link
              href="#"
              className="block w-full text-center py-3.5 px-6 bg-[#0B0F1A] text-white text-xs font-extrabold tracking-[0.16em] uppercase rounded-[2px] hover:bg-slate-800 transition-colors"
              onClick={() => onMobileMenuToggle?.()}
            >
              JOIN US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
