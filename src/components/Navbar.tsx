import Link from "next/link";

const navLinks = [
  { label: "About", href: "#" },
  { label: "What We Do", href: "#" },
  { label: "Community", href: "#" },
  { label: "Events", href: "#" },
];

export default function Navbar() {
  return (    <nav className="w-full bg-white border-b border-gray-200/70">
      <div className="max-w-[1240px] mx-auto pl-6 lg:pl-8 pr-12 lg:pr-14 flex items-center h-[74px]">
        {/* Desktop layout uses relative positioning for perfect centering */}
        <div className="hidden md:flex items-center w-full relative">
          {/* Logo Lockup - left */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-[34px] h-[34px] rounded-full bg-navy flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[17px] h-[17px]"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <div className="flex flex-col leading-[1.15]">
              <span className="text-[9px] font-bold tracking-[0.2em] text-navy uppercase">Open</span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-navy uppercase">Source</span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-navy uppercase">Connect</span>
            </div>
          </Link>

          {/* Nav Links - absolutely centered */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-12 lg:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] font-semibold tracking-[0.14em] text-gray-500 uppercase hover:text-navy transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Join Us Button - right */}
          <Link
            href="#"
            className="ml-auto inline-flex items-center h-[42px] px-6 bg-navy text-white text-[10px] font-bold tracking-[0.14em] uppercase rounded hover:bg-navy-light transition-all duration-200"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-[34px] h-[34px] rounded-full bg-navy flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[17px] h-[17px]"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <div className="flex flex-col leading-[1.15]">
              <span className="text-[9px] font-bold tracking-[0.2em] text-navy uppercase">Open</span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-navy uppercase">Source</span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-navy uppercase">Connect</span>
            </div>
          </Link>
          <button className="flex flex-col gap-1.5 p-2 group" aria-label="Toggle menu">
            <span className="block w-5 h-0.5 bg-navy rounded-full transition-all duration-200 group-hover:w-6" />
            <span className="block w-5 h-0.5 bg-navy rounded-full" />
            <span className="block w-5 h-0.5 bg-navy rounded-full transition-all duration-200 group-hover:w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
