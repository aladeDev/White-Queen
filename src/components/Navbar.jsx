import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import assets from "../assets/assets";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#aboutme", label: "ABOUT ME" },
  { href: "#project", label: "PROJECT" },
  { href: "#services", label: "SERVICES" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex min-h-[75px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Whitequeen home"
          onClick={closeMenu}
          className="flex h-14 w-20 shrink-0 items-center justify-center"
        >
          <img
            src={assets.whiteQurren}
            alt="Whitequeen Logo"
            className="w-full h-full object-contain"
          />
        </a>

        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`absolute left-0 top-full w-full bg-[#211d16]/95 backdrop-blur-md px-5 py-5 shadow-lg transition-all duration-300 lg:static lg:w-auto lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 lg:visible lg:translate-y-0 lg:opacity-100"
          }`}
        >
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5 xl:gap-7">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="px-3 py-3 text-xs sm:text-sm font-normal text-white/90 hover:text-white transition-colors duration-300 lg:py-2"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center border border-white/60 px-5 py-3 text-sm text-white transition hover:bg-white hover:text-black lg:hidden"
            >
              LET'S TALK
            </a>
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center border border-white/60 rounded-md px-8 py-2 text-xs sm:text-sm font-normal text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            LET'S TALK
          </a>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-xl text-white transition hover:bg-white/10 lg:hidden"
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <FaXmark aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
