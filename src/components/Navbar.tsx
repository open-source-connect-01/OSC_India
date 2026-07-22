"use client";

import Link from "next/link";
import { useEffect } from "react";

export type ActiveOverlay = "about" | "whatwedo" | "resources" | "projects" | "events" | null;

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
  { label: "Resources", key: "resources" },
  { label: "Projects", key: "projects" },
  { label: "Events", key: "events" },
];

export default function Navbar({
  onNavClick,
  activeOverlay,
  isMobileMenuOpen,
  onMobileMenuToggle,
  onMobileNavClick,
}: NavbarProps) {
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
    <nav className="w-full bg-white border-b border-gray-200/70 relative">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14">
        <div className="flex items-center justify-between h-[64px]">
          {/* Desktop layout */}
          <div className="hidden md:flex items-center w-full">
            {/* Logo: dark navy rounded-square with 'O' + OSC FOUNDATION / GLOBAL STANDARDS ENTITY */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-[30px] h-[30px] rounded-[5px] bg-navy flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-extrabold text-[14px] leading-none">O</span>
              </div>
              <div className="flex flex-col leading-[1.15]">
                <span className="text-[10px] font-bold tracking-[0.15em] text-navy uppercase">OSC Foundation</span>
                <span className="text-[7.5px] font-semibold tracking-[0.18em] text-gray-400 uppercase">Global Standards Entity</span>
              </div>
            </Link>

            {/* Nav links - centered - all neutral gray, no active state */}
            <div className="flex items-center gap-8 lg:gap-10 mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavClick?.(item.key)}
                  className="text-[9px] font-bold tracking-[0.18em] text-gray-500 uppercase hover:text-navy transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Join Us Button - right */}
            <Link
              href="#"
              className="inline-flex items-center h-[36px] px-5 bg-navy text-white text-[9px] font-bold tracking-[0.18em] uppercase rounded hover:bg-navy-light transition-all duration-200 shrink-0"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-[30px] h-[30px] rounded-[5px] bg-navy flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-extrabold text-[14px] leading-none">O</span>
              </div>
              <div className="flex flex-col leading-[1.15]">
                <span className="text-[9px] font-bold tracking-[0.18em] text-navy uppercase">OSC Foundation</span>
                <span className="text-[7px] font-semibold tracking-[0.18em] text-gray-400 uppercase">Global Standards Entity</span>
              </div>
            </Link>
            {/* Hamburger / Close button */}
            <button
              onClick={onMobileMenuToggle}
              className="flex flex-col items-center justify-center w-10 h-10 p-2 group relative"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block w-5 h-0.5 bg-navy rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-navy rounded-full transition-all duration-300 ease-in-out my-[5px] ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-navy rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 z-50 bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 border-b border-gray-200"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ top: "110px" }}
      >
        <div className="px-6 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = activeOverlay === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  onMobileNavClick?.(item.key);
                }}
                className={`block w-full text-left py-3 px-4 text-sm font-bold tracking-[0.12em] uppercase rounded-lg transition-colors duration-200 min-h-[44px] ${
                  isActive
                    ? "text-accent-blue bg-accent-blue/5"
                    : "text-navy hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4">
            <Link
              href="#"
              className="block w-full text-center py-3 px-6 bg-navy text-white text-xs font-bold tracking-[0.14em] uppercase rounded-lg min-h-[44px] leading-none flex items-center justify-center"
              onClick={() => onMobileMenuToggle?.()}
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
