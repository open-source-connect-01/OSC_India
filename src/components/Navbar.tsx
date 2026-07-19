"use client";

import Link from "next/link";

interface NavbarProps {
  onCommunityClick?: () => void;
  communityActive?: boolean;
}

export default function Navbar({ onCommunityClick, communityActive }: NavbarProps) {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14">
        <div className="flex items-center justify-between h-[72px]">
          {/* Desktop layout */}
          <div className="hidden md:flex items-center w-full">
            {/* OSC Foundation Logo - left */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-[38px] h-[38px] rounded-lg bg-navy flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <span className="text-white text-lg font-bold leading-none">O</span>
              </div>
              <div className="flex flex-col leading-[1.1]">
                <span className="text-[10px] font-bold tracking-[0.18em] text-navy uppercase">
                  OSC Foundation
                </span>
                <span className="text-[7px] font-semibold tracking-[0.22em] text-gray-400 uppercase">
                  Global Standards Entity
                </span>
              </div>
            </Link>

            {/* Nav links - centered */}
            <div className="flex items-center gap-10 lg:gap-14 mx-auto">
              {[
                { label: "About", href: "#" },
                { label: "What We Do", href: "#" },
                { label: "Community", href: "#" },
                { label: "Events", href: "#" },
              ].map((link) =>
                link.label === "Community" ? (
                  <button
                    key={link.label}
                    onClick={onCommunityClick}
                    className={`relative text-[10px] font-bold tracking-[0.16em] uppercase transition-colors duration-200 cursor-pointer ${
                      communityActive
                        ? "text-accent-blue"
                        : "text-gray-500 hover:text-navy"
                    }`}
                  >
                    {link.label}
                    {communityActive && (
                      <span className="absolute -bottom-[26px] left-0 right-0 h-[3px] bg-accent-blue rounded-full" />
                    )}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[10px] font-bold tracking-[0.16em] text-gray-500 uppercase hover:text-navy transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Join Us Button - right */}
            <Link
              href="#"
              className="inline-flex items-center h-[40px] px-6 bg-navy text-white text-[10px] font-bold tracking-[0.16em] uppercase rounded hover:bg-navy-light transition-all duration-200 shrink-0"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-[34px] h-[34px] rounded-lg bg-navy flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                <span className="text-white text-base font-bold leading-none">O</span>
              </div>
              <div className="flex flex-col leading-[1.1]">
                <span className="text-[9px] font-bold tracking-[0.16em] text-navy uppercase">
                  OSC Foundation
                </span>
                <span className="text-[6px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
                  Global Standards Entity
                </span>
              </div>
            </Link>
            <button className="flex flex-col gap-1.5 p-2 group" aria-label="Toggle menu">
              <span className="block w-5 h-0.5 bg-navy rounded-full transition-all duration-200 group-hover:w-6" />
              <span className="block w-5 h-0.5 bg-navy rounded-full" />
              <span className="block w-5 h-0.5 bg-navy rounded-full transition-all duration-200 group-hover:w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
