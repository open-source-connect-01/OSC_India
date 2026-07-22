"use client";

interface EventsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResearch?: () => void;
}

export default function EventsOverlay({ isOpen, onClose, onOpenResearch }: EventsOverlayProps) {
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
          <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 py-10 lg:py-12">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {/* --- Column 1: Browse Events --- */}
              <div>
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                  Browse Events
                </h3>

                <div className="space-y-8">
                  {/* Upcoming Events */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Upcoming Events
                        </h4>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-purple-100 text-[8px] font-bold text-purple-600 uppercase tracking-wider">
                          12 New
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Ongoing Now */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.08 9.08a4 4 0 0 0 0 5.84" />
                          <path d="M14.92 9.08a4 4 0 0 1 0 5.84" />
                          <path d="M6.34 6.34a8 8 0 0 0 0 11.32" />
                          <path d="M17.66 6.34a8 8 0 0 1 0 11.32" />
                        </svg>
                      </div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Ongoing Now
                        </h4>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Past Events */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div className="flex items-center h-10">
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Past Events
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Column 2: Special Programs --- */}
              <div>
                <h3 className="text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                  Special Programs
                </h3>

                <div className="space-y-8">
                  {/* Global Hackathons */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Global Hackathons
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Compete with top developers and build the future of open source.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Event Gallery */}
                  <div className="group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-blue/20 transition-colors duration-200">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy group-hover:text-accent-blue transition-colors duration-200">
                          Event Gallery
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                          Explore highlights, keynote recordings, and session photography.
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
                <p className="text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                  Stay updated with our newsletter
                </p>
                <button
                  onClick={() => onOpenResearch?.()}
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-accent-blue uppercase hover:text-accent-blue/80 transition-colors duration-200 group cursor-pointer"
                >
                  View Full Calendar
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-[76px] right-6 z-[60] w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md text-navy transition-all duration-200"
        aria-label="Close menu"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </>
  );
}
