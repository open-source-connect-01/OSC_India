"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopUtilityBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="w-full bg-[#0f1420]">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14">
        <div className="flex items-center justify-between h-[28px]">
          {/* Left links — hide on mobile */}
          <div className="hidden sm:flex items-center gap-6">
            {["Working Groups", "Members Portal", "Events"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-[8.5px] font-semibold tracking-[0.18em] text-gray-400 uppercase hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
            {/* Search — collapsible on mobile */}
            <div
              className={`flex items-center gap-1.5 bg-white/10 rounded px-2 py-1 transition-all duration-300 ${
                searchOpen ? "w-[120px]" : "w-6 sm:w-[120px]"
              } overflow-hidden`}
            >
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="sm:cursor-default shrink-0"
                aria-label="Toggle search"
              >
                <svg
                  width="10"
                  height="10"
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
                className={`w-full bg-transparent text-[9px] text-white placeholder-gray-500 outline-none ${
                  searchOpen ? "block" : "hidden sm:block"
                }`}
              />
            </div>

            {/* Become a Member — hide text on mobile, show icon only */}
            <Link
              href="#"
              className="text-[8.5px] font-bold tracking-[0.18em] text-amber-500 hover:text-amber-400 uppercase transition-colors duration-200 hidden sm:inline"
            >
              Become a Member
            </Link>

            {/* Vertical divider */}
            <div className="w-px h-3 bg-gray-600 hidden sm:block" />

            {/* Dark/Light mode toggle */}
            <button
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle dark mode"
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
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
