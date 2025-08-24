import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experiences from "./components/experiences/Experiences";
import Features from "./components/features/Features";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <HeroSection />
        <Features />
        <Projects />
        <Experiences />
        <Skills />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App;
