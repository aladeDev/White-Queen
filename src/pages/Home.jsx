import React from "react";
import assets from "../assets/assets";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-contain bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${assets.whiteQc})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        className: "",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center text-white">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-medium leading-tight mb-5">
          I Design Digital Experience That
          <br className="hidden sm:block" />
          Make Sense.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-9 px-2">
          I'M Whitequeen a UI/UX Designer and Quality Assurance Analyst
          passionate about turning complex ideas into intuitive, meaningful
          digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href="/contact"
            className="w-full sm:w-[185px] py-4 bg-[#174936] hover:bg-[#206448] text-white text-sm font-medium rounded-md transition-colors duration-300 text-center"
          >
            REQUEST FOR CV
          </a>

          <a
            href="/contact"
            className="w-full sm:w-[185px] py-4 border border-white/70 hover:bg-white hover:text-black text-white text-sm font-medium rounded-md transition-all duration-300 text-center"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
