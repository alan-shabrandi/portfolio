import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Project } from "../../utils/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-[#111] w-11/12 md:w-3/4 xl:w-2/3 p-6 rounded-lg relative overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-gray-400 hover:text-designColor text-2xl z-20" onClick={onClose}>
              &times;
            </button>

            <h2 className="text-2xl font-bold text-designColor mb-4">{project.title}</h2>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 3000 }}
              className="w-full h-[400px] md:h-[500px] xl:h-[600px] mb-4"
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={`slide-${idx}`} className="w-full h-full object-cover rounded" />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-sm px-2 py-1 bg-gray-800 rounded text-designColor">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-designColor hover:underline">
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-designColor hover:underline">
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
