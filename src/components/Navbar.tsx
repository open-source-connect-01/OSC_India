"use client";

import Link from "next/link";
import Image from "next/image";
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
    <nav className="w-full bg-white relative">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14">
        <div className="flex items-center justify-between h-[64px]">
          {/* Desktop layout */}
          <div className="hidden md:flex items-center w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Open Source Connect"
                width={150}
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
                    className={`relative py-5 text-[10px] font-bold tracking-[0.18em] uppercase transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-accent-blue"
                        : "text-gray-500 hover:text-navy"
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
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Open Source Connect"
                width={130}
                height={32}
                className="h-7 w-auto object-contain"
                priority
              />
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
                  className="block w-full text-left py-3 px-4 text-sm font-bold tracking-[0.12em] uppercase transition-colors duration-200 min-h-[44px] text-navy hover:bg-gray-50"
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
                className={`block w-full text-left py-3 px-4 text-sm font-bold tracking-[0.12em] uppercase transition-colors duration-200 min-h-[44px] ${
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
              className="block w-full text-center py-3 px-6 bg-navy text-white text-xs font-bold tracking-[0.14em] uppercase min-h-[44px] leading-none flex items-center justify-center"
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
