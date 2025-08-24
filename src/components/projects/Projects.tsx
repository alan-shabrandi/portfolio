import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import ProjectModal from "./ProjectModal";
import Title from "../title/Title";
import type { Project } from "../../utils/types";
import { projects } from "../../constants";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants} onClick={() => openModal(project)}>
            <ProjectsCard title={project.title} shortDes={project.shortDes} image={project.images[0]} onClick={() => setSelectedProject(project)} />
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && <ProjectModal project={selectedProject} isOpen={modalOpen} onClose={closeModal} />}
    </section>
  );
};

export default Projects;
