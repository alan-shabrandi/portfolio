import { motion, type Variants } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { banner } from "../../assets";
import { createElement } from "react";

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
const words = ["Professional Coder.", "Full Stack Developer.", "UI Designer."];

const mediaSections = [
  { title: "Find me in", icons: [<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />] },
  { title: "BEST SKILL ON", icons: [<FaReact />, <SiNextdotjs />, <SiTailwindcss />, <SiFigma />] },
];

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
  name = "John Doe",
  description = "I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.",
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
        <>
          a{" "}
          <span className="ml-2">
            <Typewriter options={{ strings: words, autoStart: true, loop: true, delay: 50, deleteSpeed: 20 }} />
          </span>
        </>
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
  <motion.div
    className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between"
    initial="hidden"
    animate="visible"
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
  >
    {mediaSections.map((section, idx) => (
      <motion.div key={idx} className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">{section.title}</h2>
        <motion.div className="flex gap-4" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          {section.icons.map((Icon, i) => (
            <motion.span key={i} className="bannerIcon" variants={iconVariants} whileHover="hover">
              {Icon}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
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

// ---------- Combined Banner ----------
const HeroSection: React.FC = () => (
  <div className="flex flex-col lgl:flex-row w-full h-full items-center justify-between px-4 lgl:px-0 gap-10 lgl:gap-0 lgl:py-6">
    <LeftBanner />
    <RightBanner />
  </div>
);

export default HeroSection;
