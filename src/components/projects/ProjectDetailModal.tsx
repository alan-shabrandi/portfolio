// ProjectDetailModalAdvanced.tsx
import { motion, type Variants } from "framer-motion";
import type { Project } from "../../utils/types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

// Variants for staggered content
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ProjectDetailModalAdvanced: React.FC<ProjectDetailModalProps> = ({ project }) => {
  return (
    <motion.div className="space-y-6 text-gray-200" variants={containerVariants} initial="hidden" animate="visible">
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-xy"
      >
        {project.title}
      </motion.h1>

      <motion.p variants={itemVariants} className="text-gray-400">
        {project.shortDes}
      </motion.p>

      <motion.p variants={itemVariants} className="text-gray-300">
        {project.description}
      </motion.p>

      {/* Role & Company */}
      {(project.role || project.company) && (
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base text-gray-300">
          {project.role && <span className="px-3 py-1 rounded-full bg-gray-800 font-medium">{project.role}</span>}
          {project.company && <span className="px-3 py-1 rounded-full bg-gray-800 font-medium">{project.company}</span>}
        </motion.div>
      )}

      {/* Key Features */}
      {project.features && (
        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-xy">
            Key Features
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Technical Highlights */}
      {project.technicalHighlights && (
        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-xy">
            Technical Highlights
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {project.technicalHighlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Tech Stack */}
      {project.techStack && (
        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-xy">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Demo Links */}
      {project.demoLinks && (
        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-xy">
            Demo Links
          </h2>
          <ul className="space-y-2">
            {project.demoLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline"
                >
                  <FaExternalLinkAlt className="shrink-0" /> {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* GitHub */}
      {project.githubLink && project.githubLink !== "#" && (
        <motion.div variants={itemVariants} className="flex gap-4 mt-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <FaGithub /> GitHub
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectDetailModalAdvanced;
