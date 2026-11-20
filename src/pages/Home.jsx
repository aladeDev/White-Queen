import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import assets from "../assets/assets";

const Home = () => {
  const sectionRef = useRef(null);

  // Subtle parallax depth as the user scrolls down
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with gentle entrance settle + scroll parallax */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        style={{
          y: backgroundY,
          backgroundImage: `url(${assets.whiteQc})`,
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mt-24 px-4 text-center text-white flex justify-center flex-col items-center"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-tight mb-5">
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineRevealVariants} className="block">
              I Design Digital Experience That
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span variants={lineRevealVariants} className="block">
              Make Sense.
            </motion.span>
          </span>
        </h1>

        {/* Bio Paragraph */}
        <motion.p
          variants={fadeUpVariants}
          className="text-[16px] md:text-lg text-white/90 max-w-2xl mb-9 px-2"
        >
          I'm Whitequeen, a UI/UX Designer and Quality Assurance Analyst
          passionate about turning complex ideas into intuitive, meaningful
          digital experiences.
        </motion.p>

        {/* Tactile Spring CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="w-64 sm:w-[180px] py-3 bg-[#174936] hover:bg-[#206448] text-white text-sm font-medium rounded-md transition-colors duration-300 shadow-lg shadow-black/25 text-center"
          >
            REQUEST FOR CV
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="w-64 sm:w-[180px] py-3 border border-white/70 hover:bg-white hover:text-black text-white text-sm font-medium rounded-md transition-colors duration-300 text-center"
          >
            LET'S TALK
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
