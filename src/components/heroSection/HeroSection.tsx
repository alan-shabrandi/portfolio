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
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, type: "spring", stiffness: 250, damping: 20 },
  }),
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom, type: "spring", stiffness: 300 },
  }),
  hover: { scale: 1.3, rotate: 15, transition: { type: "spring", stiffness: 400 } },
};

const rightBannerVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 25 } },
  hover: { scale: 1.05, rotate: 2, transition: { type: "spring", stiffness: 300 } },
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
    { type: "h1", text: <span className="text-gradient-animated capitalize">Hi, I'm {name}</span>, delay: 0.1 },
    {
      type: "h2",
      text: (
        <span className="text-xl lgl:text-2xl font-bold flex items-center">
          a{" "}
          <span className="ml-2 text-gradient-animated font-mono">
            <Typewriter options={{ strings: words, autoStart: true, loop: true, delay: 50, deleteSpeed: 20 }} />
          </span>
        </span>
      ),
      delay: 0.2,
    },
    { type: "p", text: description, delay: 0.3 },
  ];

  return (
    <motion.div
      className="w-full lgl:w-1/2 flex flex-col gap-6 lgl:gap-12 z-10 relative"
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
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
    <div className="relative group cursor-pointer">
      <motion.img
        className="w-[250px] sm:w-[300px] lgl:w-[450px] h-[350px] sm:h-[400px] lgl:h-[400px] z-10 rounded-3xl border-4 border-gradient p-1 shadow-2xl group-hover:scale-105 transition-transform duration-500"
        src={src}
        alt={alt}
        whileHover={{ scale: 1.08, rotate: 1.5 }}
      />
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
      />
    </div>
  </motion.div>
);

// ---------- Media ----------
const Media: React.FC = () => (
  <div className="flex flex-col xl:flex-row gap-6 lgl:gap-10 justify-between">
    <div className="flex flex-col gap-3">
      <h2 className="text-base uppercase font-titleFont text-gradient-animated">Find me in</h2>
      <div className="flex gap-4">
        {findMeIn.map((item, i) => (
          <motion.span
            key={i}
            className="bannerIcon group"
            variants={iconVariants}
            custom={i * 0.1}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            data-tooltip-id="shared-tooltip"
            data-tooltip-content={item.title}
          >
            <item.icon className="text-white group-hover:text-designColor transition-colors duration-300" />
          </motion.span>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-3">
      <h2 className="text-base uppercase font-titleFont text-gradient-animated">BEST SKILL ON</h2>
      <div className="flex gap-4">
        {bestSkills.map((item, i) => (
          <motion.span
            key={i}
            className="bannerIcon group"
            variants={iconVariants}
            custom={i * 0.1}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            data-tooltip-id="shared-tooltip"
            data-tooltip-content={item.title}
          >
            <item.icon className="text-white group-hover:text-designColor transition-colors duration-300" />
          </motion.span>
        ))}
      </div>
    </div>
    <Tooltip id="shared-tooltip" place="top" className="!bg-designColor !text-white !px-3 !py-1 !rounded-md !text-sm transition-all duration-300" />
  </div>
);

// ---------- Helper ----------
function getClassName(type: string) {
  switch (type) {
    case "h1":
      return "text-4xl sm:text-5xl lgl:text-6xl font-bold text-gradient-animated";
    case "h2":
      return "text-2xl sm:text-3xl lgl:text-4xl font-bold flex items-center text-gradient-animated";
    case "p":
      return "text-sm sm:text-base font-bodyFont leading-7 tracking-wide text-gray-300";
    case "h4":
      return "text-base sm:text-lg font-medium tracking-wide text-gradient-animated";
    default:
      return "";
  }
}

// ---------- HeroSection ----------
const HeroSection: React.FC = () => (
  <div id="home" className="flex flex-col lgl:flex-row w-full h-full items-center justify-between px-4 lgl:px-0 gap-10 lgl:gap-10 lgl:py-10">
    <LeftBanner />
    <RightBanner />
  </div>
);

export default HeroSection;
