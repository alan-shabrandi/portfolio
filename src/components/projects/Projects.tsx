// Projects.tsx (با انیمیشن برای هر card)
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import Title from "../title/Title";
import type { Project } from "../../utils/types";
import { projects } from "../../constants";
import ProjectDetailModalAdvanced from "./ProjectDetailModal";

// Container variants برای stagger
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// Card variants برای هر card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 20 },
  },
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
  }, [selectedProject]);

  // Browser back button
  useEffect(() => {
    if (!selectedProject) return;
    window.history.pushState({ modal: true }, "");
    const handlePopState = () => closeModal();
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (window.history.state?.modal) window.history.back();
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="w-full py-20 border-b border-gray-800">
      <Title title="VISIT MY PORTFOLIO" des="My Projects" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCardClick(project)}
            className="cursor-pointer"
          >
            <ProjectsCard title={project.title} shortDes={project.shortDes} image={project.images[0]} />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] p-6"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl z-50 transition-colors duration-200 cursor-pointer"
                onClick={closeModal}
              >
                &times;
              </button>

              <div className="overflow-y-auto max-h-[80vh] scrollbar-hidden scroll-smooth">
                <ProjectDetailModalAdvanced project={selectedProject} onClose={closeModal} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
