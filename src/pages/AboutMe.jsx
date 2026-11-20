import React from "react";
import assets from "../assets/assets";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="min-h-screen w-full bg-[#F7F3EC99] flex justify-center items-center px-15 py-25"
    >
      <div className="flex flex-col justify-center lg:flex-row lg:gap-57">
        <div className="flex flex-col">
          <p className="text-[10px] lg:text-[14px] tracking-[3px] mb-2 font-semibold uppercase text-[#1B4332] ">
            About Me
          </p>

          <h1 className="font-serif text-4xl lg:text-6xl md:text-4xl uppercase leading-[0.98] tracking-tight text-[#1C1814]">
            More Than A
            <br />
            Designer,
          </h1>

          <p className="font-serif italic text-3xl sm:text-4xl text-[#1B4332] mt-1">
            I'm a problem solver.
          </p>

          <div className="flex flex-wrap gap-2 mt-8 max-w-[430px]">
            {[
              "UI/UX Design",
              "Product Thinking",
              "Quality Assurance",
              "Web Design",
              "Afrocentric Creative",
            ].map((skill, index) => (
              <span
                key={index}
                className="border border-[#DDD8CF] px-3 py-2 text-[10px] lg:text-[11px] uppercase tracking-wide text-#6B6560"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-[#00000099] text-sm lg:text-base leading-[1.5] mt-9 max-w-[410px]">
            I’m a multidisciplinary creative from Nigeria working at the
            intersection of design, technology, and human understanding. With a
            background in Microbiology, I bring curiosity, precision, and a
            research-driven mindset to every design decision. I create
            thoughtful digital experiences where empathy, functionality, and
            culture meet.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="mx-auto w-full max-w-[435px] ">
          {/* IMAGE */}
          <div className="relative w-full">
            <div className="aspect-[0.87] w-full overflow-hidden rounded-tl-[18px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[18px]">
              <img
                src={assets.whiteQ}
                alt="About me portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="w-90 h-10  0relative bottom-132 left-3 rounded-bl-4xl rounded-tl-5xl"></div>

            {/* AVAILABILITY CARD */}
            {/* <div className="absolute bottom-8 right-0 sm:-right-24 bg-[#194635] text-white px-6 py-5 sm:px-5 sm:py-4 rounded-lg shadow-xl">
              <p className="text-[9px] tracking-[2px] uppercase text-white/60 mb-2">
                Currently
              </p>

              <h3 className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                Open to Opportunities
              </h3>

              <div className="w-6 h-[2px] bg-white/50 mt-3"></div>
            </div> */}
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-[382px] ml-auto mt-12">
            <div className="border-b border-[#DED9CF] pb-3">
              <p className="text-[9px] uppercase tracking-[1.5px] text-[#99938B] mb-1">
                Based In
              </p>
              <h3 className="text-xs sm:text-sm text-[#25221F]">
                Nigeria, West Africa
              </h3>
            </div>

            <div className="border-b border-[#DED9CF] pb-3">
              <p className="text-[9px] uppercase tracking-[1.5px] text-[#99938B] mb-1">
                Discipline
              </p>
              <h3 className="text-xs sm:text-sm text-[#25221F]">
                UI/UX + Product Design
              </h3>
            </div>

            <div className="border-b border-[#DED9CF] pb-3">
              <p className="text-[9px] uppercase tracking-[1.5px] text-[#99938B] mb-1">
                Background
              </p>
              <h3 className="text-xs sm:text-sm text-[#25221F]">
                Microbiology Graduate
              </h3>
            </div>

            <div className="border-b border-[#DED9CF] pb-3">
              <p className="text-[9px] uppercase tracking-[1.5px] text-[#99938B] mb-1">
                Identity
              </p>
              <h3 className="text-xs sm:text-sm text-[#25221F]">
                Afrocentric Creative
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
