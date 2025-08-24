import { motion, type Variants } from "framer-motion";
import Title from "../title/Title";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { useEffect, useState, type JSX } from "react";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3 / Tailwind", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
  },
  {
    category: "Backend",
    skills: [{ name: "Node.js", icon: <FaNodeJs /> }],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200 },
  },
};

const Skills: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="My Skills" des="Technologies I Use" />
      </div>

      {skillCategories.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-designColor mb-6">{category.category}</h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {category.skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-4 bg-black bg-opacity-20 rounded-lg p-6 shadow-shadowOne cursor-pointer"
                variants={skillVariants}
                whileHover={isDesktop ? { scale: 1.15, rotate: 5, boxShadow: "0px 0px 25px #ff014f" } : {}}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl text-designColor">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
