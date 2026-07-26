"use client";

import Link from "next/link";
import { useEffect } from "react";

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
  const isMobileToggleLocked = activeOverlay !== null;

  // Lock body scroll when mobile menu is open (simple approach)
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
            {/* Logo: circular multi-dot icon + OPEN SOURCE CONNECT */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              {/* Multi-dot circle icon */}
              <div className="relative w-[32px] h-[32px] shrink-0">
                {/* Central dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-navy" />
                {/* Outer ring dots */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <div
                    key={angle}
                    className="absolute w-[5px] h-[5px] rounded-full bg-navy/60 transition-all duration-300 group-hover:bg-navy"
                    style={{
                      top: `calc(50% + ${11 * Math.sin((angle * Math.PI) / 180)}px - 2.5px)`,
                      left: `calc(50% + ${11 * Math.cos((angle * Math.PI) / 180)}px - 2.5px)`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[12px] font-extrabold tracking-[0.18em] text-navy uppercase leading-none">
                Open Source Connect
              </span>
            </Link>

            {/* Nav links - centered - all neutral gray, no active state */}
            <div className="flex items-center gap-8 lg:gap-10 mx-auto">
              {navItems.map((item) =>
                item.key === "events" ? (
                  <Link
                    key={item.key}
                    href="/events"
                    className="text-[9px] font-bold tracking-[0.18em] text-gray-500 uppercase hover:text-navy transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    onClick={() => onNavClick?.(item.key)}
                    className="text-[9px] font-bold tracking-[0.18em] text-gray-500 uppercase hover:text-navy transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              )}
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
              {/* Multi-dot circle icon */}
              <div className="relative w-[26px] h-[26px] shrink-0">
                {/* Central dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-navy" />
                {/* Outer ring dots */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <div
                    key={angle}
                    className="absolute w-[4px] h-[4px] rounded-full bg-navy/60"
                    style={{
                      top: `calc(50% + ${9 * Math.sin((angle * Math.PI) / 180)}px - 2px)`,
                      left: `calc(50% + ${9 * Math.cos((angle * Math.PI) / 180)}px - 2px)`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-extrabold tracking-[0.18em] text-navy uppercase leading-none">
                Open Source Connect
              </span>
            </Link>
            {/* Hamburger / Close button */}
            <button
              onClick={() => {
                if (!isMobileToggleLocked) {
                  onMobileMenuToggle?.();
                }
              }}
              className={`relative z-[80] flex flex-col items-center justify-center w-10 h-10 p-2 group transition-opacity duration-200 ${
                isMobileToggleLocked ? "cursor-not-allowed opacity-40" : ""
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-disabled={isMobileToggleLocked}
              disabled={isMobileToggleLocked}
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

      {/* Mobile Backdrop */}
      <div
        className={`md:hidden fixed inset-x-0 z-[60] bg-navy/25 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "110px", bottom: 0 }}
        onClick={onMobileMenuToggle}
      />

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 z-[70] bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 border-b border-gray-200"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ top: "110px" }}
      >
        <div className="px-6 py-6 space-y-1">              {navItems.map((item) => {
            const isActive = activeOverlay === item.key;
            if (item.key === "events") {
              return (
                <Link
                  key={item.key}
                  href="/events"
                  className="block w-full text-left py-3 px-4 text-sm font-bold tracking-[0.12em] uppercase rounded-lg transition-colors duration-200 min-h-[44px] text-navy hover:bg-gray-50"
                  onClick={() => onMobileMenuToggle?.()}
                >
                  {item.label}
                </Link>
              );
            }
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
