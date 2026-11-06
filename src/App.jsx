import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";
import AboutMe from "./pages/AboutMe";

export default function App() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) =>
        target.classList.add("opacity-100", "translate-y-0"),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Navbar />
      <main className="page-content">
        <Home />
        <AboutMe />
        <Project />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
