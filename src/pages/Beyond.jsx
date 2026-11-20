import React from "react";
import {
  FiHash,
  FiCompass,
  FiCpu,
  FiBookOpen,
  FiAperture,
  FiMusic,
  FiCloud,
  FiAward,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa6";

const values = [
  {
    title: "Design",
    description:
      "Turning ideas into thoughtful, intuitive experiences that solve problems and inspire people.",
    icon: <FiHash />,
    active: true,
  },
  {
    title: "Curiosity",
    description:
      "Constantly asking questions, exploring possibilities, and finding inspiration in the unexpected.",
    icon: <FiCompass />,
  },
  {
    title: "Technology",
    description:
      "Exploring how technology can simplify lives, connect people, and create meaningful change.",
    icon: <FiCpu />,
  },
  {
    title: "Modelling",
    description:
      "Expressing confidence, identity, and storytelling through fashion, expression, and creativity.",
    icon: <FiBookOpen />,
  },
  {
    title: "African Creativity",
    description:
      "Celebrating African heritage, culture, and aesthetics through bold, authentic creative expression.",
    icon: <FiAperture />,
  },
  {
    title: "Music",
    description:
      "Finding inspiration in melodies, rhythms, and the emotions that connect us through sound.",
    icon: <FiMusic />,
  },
  {
    title: "Entrepreneurship",
    description:
      "Turning ideas into opportunities through innovation, initiative, and a passion for creating value.",
    icon: <FiCloud />,
  },
  {
    title: "Education",
    description:
      "Embracing lifelong learning and sharing knowledge that empowers people to grow and thrive.",
    icon: <FiAward />,
  },
];

const testimonials = [
  {
    quote:
      "Whitequeen doesn't just deliver great designs — she understands the problem so deeply that the solution feels inevitable. Working with her changed how we think about user experience.",
    name: "Odekunle Dorcas",
    role: "UI/UX, Mindmaking",
    initial: "O",
  },
  {
    quote:
      "Her combination of design sensibility and QA rigour is rare. She catches issues that slip past engineers, and her attention to the human detail of every flow is exceptional.",
    name: "Adeleke Favour",
    role: "Developer, Pinnacle",
    initial: "A",
  },
  {
    quote:
      "What sets Whitequeen apart is that her work feels alive — there's a personality and intention behind every decision that I've never seen in a standard portfolio hire.",
    name: "Farinde Reuben",
    role: "Manager, Sunweave",
    initial: "A",
  },
];

const Beyond = () => {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden  bg-[#1b1815] px-5 py-14  md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-7">
            <p className="mb-2 text-[14px] font-medium uppercase tracking-[3px] text-[#77716b]">
              The Human Side
            </p>

            <h2 className="font-serif text-3xl font-medium uppercase leading-none text-[#f4f0e9] sm:text-4xl md:text-5xl">
              Beyond The{" "}
              <span className="font-serif italic text-[#174d3c]">Pixels.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {values.map((item, index) => (
              <div
                key={index}
                className={`group  rounded-md border py-5 px-4 duration-300 ${
                  item.active
                    ? "border-[#302a24] bg-[#24201c] hover:bg-[#1d2921] hover:border-[#49604f]"
                    : "border-[#302a24] bg-[#24201c]  hover:bg-[#1d2921] hover:border-[#49604f]"
                }`}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f0e9] text-[#214b3b]">
                  <span className="text-base">{item.icon}</span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-[15px] font-semibold text-[#f3f0e9]">
                  {item.title}
                </h3>

                <p className="font-serif text-[14px] italic leading-[1.5] text-[#938b80]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f6f2ea] px-5 py-14 md:px-14 lg:px-16">
        <div className="mx-auto max-w-[1250px]">
          <h2 className="mb-10 font-serif text-3xl font-medium uppercase leading-tight text-[#201d19] sm:text-4xl md:text-5xl">
            What People{" "}
            <span className="font-serif italic font-normal text-[#315a49]">
              Say
            </span>
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-16">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex min-h-[230px] flex-col rounded-md border border-[#e5dfd5] bg-transparent px-5 py-5 shadow-sm  md:px-6"
              >
                <FaQuoteLeft className="mb-1 text-2xl text-[#d6d9d0]" />

                <p className="flex-1 font-sans text-[15px] leading-[1.7] mt-3 text-black">
                  "{item.quote}"
                </p>

                <div className="my-4 border-t border-gray-400" />

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#194b3b] text-[10px] font-semibold text-white">
                    {item.initial}
                  </div>

                  <div>
                    <h3 className="text-[17px] font-semibold text-black">
                      {item.name}
                    </h3>
                    <p className="font-serif text-sm italic text-black">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Beyond;
