import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Beyond from "./pages/Beyond";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutMe />
              <Project />
              <Services />
              <Beyond />
              <Contact />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
