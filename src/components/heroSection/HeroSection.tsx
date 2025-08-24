import { motion, type Variants } from "framer-motion";
import Typewriter from "typewriter-effect";
import { banner } from "../../assets";
import { createElement } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { bestSkills, findMeIn } from "../../constants";

// ---------- Types ----------
interface LeftBannerProps {
  name?: string;
  description?: string;
}

interface RightBannerProps {
  src?: string;
  alt?: string;
}

// ---------- Data ----------
const words = ["Senior Full Stack JavaScript Developer.", "React & Node.js Specialist.", "Tech Enthusiast & Problem Solver."];

// ---------- Variants ----------
const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, type: "spring", stiffness: 300 },
  }),
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } },
  hover: { scale: 1.2, transition: { type: "spring", stiffness: 400 } },
};

const rightBannerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
};

// ---------- Animated Wrapper ----------
const Animated: React.FC<{ children: React.ReactNode; custom?: number }> = ({ children, custom = 0 }) => (
  <motion.div variants={fadeSlideUp} custom={custom}>
    {children}
  </motion.div>
);

// ---------- LeftBanner ----------
const LeftBanner: React.FC<LeftBannerProps> = ({
  name = "Alan Shabrandi",
  description = "As a Senior Full Stack JavaScript Developer, I craft high-performance web applications using React, Node.js, and TypeScript. I focus on clean code, scalable architectures, and delivering seamless user experiences.",
}) => {
  const content = [
    { type: "h4", text: "WELCOME TO MY WORLD", delay: 0 },
    {
      type: "h1",
      text: (
        <>
          Hi, I'm <span className="text-designColor capitalize">{name}</span>
        </>
      ),
      delay: 0.1,
    },
    {
      type: "h2",
      text: (
        <span className="text-2xl sm:text-2xl lgl:text-3xl font-bold text-white flex items-center">
          a{" "}
          <span className="ml-2">
            <Typewriter
              options={{
                strings: words,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
              }}
            />
          </span>
        </span>
      ),
      delay: 0.2,
    },
    { type: "p", text: description, delay: 0.3 },
  ];

  return (
    <motion.div
      className="w-full lgl:w-1/2 flex flex-col gap-8 lgl:gap-20"
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="flex flex-col gap-5">
        {content.map((item, idx) => (
          <Animated key={idx} custom={item.delay}>
            {createElement(item.type, { className: getClassName(item.type) }, item.text)}
          </Animated>
        ))}
      </div>

      <Animated custom={0.4}>
        <Media />
      </Animated>
    </motion.div>
  );
};

// ---------- RightBanner ----------
const RightBanner: React.FC<RightBannerProps> = ({ src = banner, alt = "banner image" }) => (
  <motion.div
    className="w-full lgl:w-1/2 flex justify-center items-center relative"
    initial="hidden"
    animate="visible"
    whileHover="hover"
    variants={rightBannerVariants}
  >
    <img className="w-[250px] sm:w-[300px] lgl:w-[450px] h-[350px] sm:h-[400px] lgl:h-[400px] z-10 rounded-full" src={src} alt={alt} />
  </motion.div>
);

// ---------- Media ----------
const Media: React.FC = () => (
  <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
    {/* Find me in */}
    <div className="flex flex-col gap-4">
      <h2 className="text-base uppercase font-titleFont">Find me in</h2>
      <div className="flex gap-4">
        {findMeIn.map((item, i) => (
          <motion.span
            key={i}
            className="bannerIcon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            data-tooltip-id="shared-tooltip"
            data-tooltip-content={item.title}
          >
            <item.icon />
          </motion.span>
        ))}
      </div>
    </div>

    {/* Best Skills */}
    <div className="flex flex-col gap-4">
      <h2 className="text-base uppercase font-titleFont">BEST SKILL ON</h2>
      <div className="flex gap-4">
        {bestSkills.map((item, i) => (
          <motion.span
            key={i}
            className="bannerIcon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            data-tooltip-id="shared-tooltip"
            data-tooltip-content={item.title}
          >
            <item.icon />
          </motion.span>
        ))}
      </div>
    </div>

    {/* Tooltip Shared */}
    <Tooltip id="shared-tooltip" place="top" className="!bg-designColor !text-white !px-3 !py-1 !rounded-md !text-sm" />
  </div>
);

// ---------- Helper ----------
function getClassName(type: string) {
  switch (type) {
    case "h1":
      return "text-4xl sm:text-5xl lgl:text-6xl font-bold text-white";
    case "h2":
      return "text-2xl sm:text-3xl lgl:text-4xl font-bold text-white flex items-center";
    case "p":
      return "text-sm sm:text-base font-bodyFont leading-6 tracking-wide";
    case "h4":
      return "text-base sm:text-lg font-medium text-gray-300";
    default:
      return "";
  }
}

// ---------- Combined HeroSection ----------
const HeroSection: React.FC = () => (
  <div className="flex flex-col lgl:flex-row w-full h-full items-center justify-between px-4 lgl:px-0 gap-10 lgl:gap-0 lgl:py-6">
    <LeftBanner />
    <RightBanner />
  </div>
);

export default HeroSection;
