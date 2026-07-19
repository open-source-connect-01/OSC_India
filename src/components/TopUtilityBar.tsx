"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopUtilityBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="w-full bg-[#0f1420]">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14">
        <div className="flex items-center justify-between h-[38px]">
          {/* Left links — hide on mobile */}
          <div className="hidden sm:flex items-center gap-8">
            {["Working Groups", "Members Portal", "Events"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-[9px] font-semibold tracking-[0.16em] text-gray-400 uppercase hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3 sm:gap-5 ml-auto sm:ml-0">
            {/* Search — collapsible on mobile */}
            <div
              className={`flex items-center gap-2 bg-white/10 rounded px-2.5 py-1.5 transition-all duration-300 ${
                searchOpen ? "w-[140px]" : "w-7 sm:w-[140px]"
              } overflow-hidden`}
            >
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="sm:cursor-default shrink-0"
                aria-label="Toggle search"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500 shrink-0"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full bg-transparent text-[10px] text-white placeholder-gray-500 outline-none ${
                  searchOpen ? "block" : "hidden sm:block"
                }`}
              />
            </div>

            {/* Become a Member — hide text on mobile, show icon only */}
            <Link
              href="#"
              className="text-[9px] font-bold tracking-[0.16em] text-amber-500 hover:text-amber-400 uppercase transition-colors duration-200 hidden sm:inline"
            >
              Become a Member
            </Link>

            {/* Vertical divider */}
            <div className="w-px h-4 bg-gray-600 hidden sm:block" />

            {/* Language selector */}
            <button
              className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.1em] text-gray-400 hover:text-white uppercase transition-colors duration-200"
              aria-label="Select language"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="hidden sm:inline">EN</span>
            </button>

            {/* Dark/Light mode toggle */}
            <button
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle dark mode"
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
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
