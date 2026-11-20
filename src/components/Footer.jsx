import React from "react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1b1815] text-[#e8e4df]">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-between gap-5 border-b border-[#77716a] px-5 py-7 sm:flex-row sm:items-start sm:px-[5%] sm:py-7">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <img
            src={assets.whiteQurren}
            alt="Whitequeen Logo"
            className="h-20 w-20 object-contain"
          />

          <p className="hidden text-xs italic text-[#d0cbc5] sm:block">
            Owonifa Precious Motunrayo
          </p>

          <p className="hidden text-xs italic text-[#d0cbc5] sm:block">
            UI/UX Designer · Product Designer · Creative
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center sm:items-end sm:text-right">
          <p className="hidden text-xs italic text-[#d0cbc5] sm:block">
            Designed with curiosity, intention & a little bit of magic.
          </p>

          <nav className="flex flex-wrap justify-center gap-5 text-[10px] font-medium uppercase tracking-[0.12em] sm:justify-start lg:py-8">
            {["Aboutme", "Services", "Project", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <p className="text-[17px] italic text-[#d0cbc5]  text-center py-5">
        © 2026 Whitequeen
      </p>
    </footer>
  );
};

export default Footer;
