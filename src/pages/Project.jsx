import React from "react";

const projects = [
  {
    title: "GOB4Bill",
    image: "/project1.png",
  },
  {
    title: "Pheeky Hair Place",
    image: "/project2.png",
  },
  {
    title: "My Portfolio",
    image: "",
  },
];

const processes = [
  {
    number: "1",
    title: "Research",
    description:
      "I start by understanding the users, their needs, pain points, goals, and the problem we're trying to solve.",
  },
  {
    number: "4",
    title: "Wireframe",
    description:
      "I structure the experience by mapping out content, layouts, and user flows before focusing on visual details.",
  },
  {
    number: "2",
    title: "Define",
    description:
      "I turn research insights into a clear problem statement, identifying the key challenges and defining what the design needs to achieve.",
  },
  {
    number: "5",
    title: "Prototype",
    description:
      "I transform the ideas into interactive designs that bring the experience to life and allow key interactions to be explored.",
  },
  {
    number: "3",
    title: "Ideate",
    description:
      "I explore different possibilities through brainstorming, generating and evaluating ideas to find thoughtful solutions to the problem.",
  },
  {
    number: "6",
    title: "Test",
    description:
      "I put the design in front of real people, gather feedback, identify usability issues, and refine the experience based on what I learn.",
  },
];

const Project = () => {
  return (
    <div id="project" className="w-full">
      <section className="bg-[#1c1713] px-5 sm:px-8 md:px-12 lg:px-16 pt-10 pb-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[8px] tracking-[2px] text-white/30 uppercase mb-1">
            THE HUMAN SIDE
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e8] uppercase mb-5">
            My Latest Project
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#f6f2ea] rounded-md overflow-hidden min-h-[240px] sm:min-h-[260px] group"
              >
                <div className="h-[145px] sm:h-[155px] overflow-hidden bg-[#d9d9d9]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#d9d9d9]" />
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-[11px] font-medium text-[#29231e]">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-[#f7f4ed] px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <h2 className="font-serif text-2xl lg:text-3xl sm:text-4xl text-[#211c18] uppercase leading-tight">
              The Process Behind The
            </h2>

            <h3 className="font-serif italic text-2xl sm:text-3xl text-[#214d3d] uppercase leading-tight">
              Pixels
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 ">
            {processes.map((process) => (
              <div
                key={process.number}
                className={`relative min-h-[95px] rounded-md border hover:text-white p-4 lg:p-5 transition-all duration-300 ${
                  process.active
                    ? " text-black hover:bg-[#1B4332] hover:text-white"
                    : "bg-transparent  text-black hover:bg-[#1B4332] hover:text-white"
                }`}
              >
                <div
                  className={`absolute top-3 right-3 w-7 h-7 rounded-full flex hover:bg-white items-center justify-center text-[14px] font-semibold ${
                    process.active
                      ? "bg-[#194b38] text-white hover:bg-white hover:text-black"
                      : "bg-[#194b38] text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {process.number}
                </div>

                <h3 className="text-[17px] font-semibold mb-3 ">
                  {process.title}
                </h3>

                <p
                  className={`text-[14px] leading-[1.2] max-w-[95%] ${
                    process.active ? "text-black" : " "
                  }`}
                >
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
