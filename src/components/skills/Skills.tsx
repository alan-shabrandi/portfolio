import { motion, type Variants } from "framer-motion";
import Title from "../title/Title";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaSass, FaGitAlt, FaLaptopCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
} from "react-icons/si";
import type { JSX } from "react";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  category: string;
  icon: JSX.Element;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: <FaLaptopCode className="text-designColor text-3xl inline-block mr-2" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "SASS", icon: <FaSass /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React Native", icon: <FaReact /> },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer className="text-designColor text-3xl inline-block mr-2" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "NestJS", icon: <SiNestjs /> },
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase className="text-designColor text-3xl inline-block mr-2" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <FaTools className="text-designColor text-3xl inline-block mr-2" />,
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "CI/CD", icon: <SiGithubactions /> },
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
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="My Skills" des="Technologies I Use" />

      {skillCategories.map((category, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-xy">
            {category.icon} {category.category}
          </h2>

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
                className="flex flex-col items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
                variants={skillVariants}
              >
                <div className="text-5xl text-designColor">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-designColor">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
