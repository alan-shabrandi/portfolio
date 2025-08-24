import Contact from "../components/contact/Contact";
import Education from "../components/education/Education";
import Skills from "../components/skills/Skills";
import Experiences from "../components/experiences/Experiences";
import Projects from "../components/projects/Projects";
import HeroSection from "../components/heroSection/HeroSection";
import Features from "../components/features/Features";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <HeroSection />
      <Features />
      <Projects />
      <Experiences />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
