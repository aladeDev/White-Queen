import React from "react";
import { FiPenTool, FiMonitor, FiFileText } from "react-icons/fi";
import { FaFigma } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      icon: <FaFigma />,
      title: "UI/UX design",
      description:
        "I design intuitive and engaging digital experiences that balance user needs, functionality, and visual clarity.",
    },
    {
      icon: <FiPenTool />,
      title: "Product/Graphics design",
      description:
        "I transform ideas into thoughtful digital products by combining user research, strategy, structure, and purposeful design.",
    },
    {
      icon: <FiMonitor />,
      title: "Web design",
      description:
        "I create modern, responsive websites that communicate clearly, look refined, and deliver seamless experiences across devices.",
    },
    {
      icon: <FiFileText />,
      title: "Quality Assurance Analyst",
      description:
        "I test digital products to identify issues, improve usability, and ensure every experience is functional, reliable, and ready for users.",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "UNDERSTAND",
      description:
        "I start by understanding the problem before designing the solution. Research, empathy, and observation come before any wireframe or sketch.",
    },
    {
      number: "02",
      title: "SIMPLIFY",
      description:
        "I remove unnecessary complexity and create experiences people can navigate naturally. Clarity is a design decision, not an afterthought.",
    },
    {
      number: "03",
      title: "DETAILED",
      description:
        "The small things change everything. A refined transition, a considered spacing, a precisely weighted typeface — these are the moments that separate good from great.",
    },
    {
      number: "04",
      title: "VALIDATE",
      description:
        "I believe good design should be tested, questioned, and continuously improved. QA isn't separate from design — it's part of the craft.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#f7f4ed] text-[#211e1a]  px-5 sm:px-8 md:px-12 lg:px-16 py-10 md:py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-7">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-tight uppercase">
            MY SERVICES
          </h2>

          <p className="font-serif italic text-gray-500 text-base sm:text-lg">
            How I can help you build something great.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#e6e0d6] rounded-md p-4 sm:p-5 min-h-[150px] hover:border-[#456b5d] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#204c3d] text-[#f7f4ed] flex items-center justify-center mb-3 text-xl">
                {service.icon}
              </div>

              <h3 className="text-[17px] lg:text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-[17px] leading-5 lg:text-[15px] lg:leading-5 text-black">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-[1.1] uppercase tracking-tight max-w-3xl">
              GOOD DESIGN ISN'T JUST
              <br />
              BEAUTIFUL.
              <span className="italic font-normal text-[#456b5d]">
                IT SHOULD FEEL OBVIOUS.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {principles.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="lg:text-[18px] tracking-widest text-[#456b5d]">
                    {item.number}
                  </span>

                  <div className="h-px flex-1 bg-gray-300"></div>
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-[16px] lg:text-[15px] leading-5 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
