import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import type { Project } from "../../utils/types";
import { FaPlay, FaExpand, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination, Zoom } from "swiper/modules";

interface MediaItem {
  src: string;
  type: "image" | "video";
}

interface MediaModalProps {
  isOpen: boolean;
  mediaList: MediaItem[];
  initialIndex: number;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const MediaModal: React.FC<MediaModalProps> = ({ isOpen, mediaList, initialIndex, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full h-full"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl z-50 cursor-pointer" onClick={onClose}>
              &times;
            </button>

            <Swiper
              initialSlide={initialIndex}
              modules={[Navigation, Pagination, Keyboard, Zoom, Mousewheel]}
              navigation
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              zoom
              mousewheel
              spaceBetween={30}
              className="w-full h-full"
            >
              {mediaList.map((media, index) => (
                <SwiperSlide key={`slide-${index}`} className="flex items-center justify-center h-full">
                  {media.type === "image" ? (
                    <div className="swiper-zoom-container w-full h-full flex items-center justify-center">
                      <img src={media.src} alt={`media-${index}`} className="max-h-full max-w-full object-contain" />
                    </div>
                  ) : (
                    <video controls className="max-h-full max-w-full object-contain">
                      <source src={media.src} type="video/mp4" />
                    </video>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project: Project | undefined = projects.find((p) => p.id.toString() === id);

  const [modalOpen, setModalOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  if (!project) return <p className="p-8 text-gray-300">Project not found!</p>;

  const mediaList: MediaItem[] = [
    ...project.images.map((src) => ({ src, type: "image" as const })),
    ...(project.videos?.map((src) => ({ src, type: "video" as const })) || []),
  ];

  const openModal = (index: number) => {
    setInitialIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 text-gray-200">
      {/* Title & Description */}
      <div>
        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
        <p className="mt-2 text-gray-400">{project.shortDes}</p>
        <p className="mt-4 text-gray-300">{project.description}</p>
      </div>

      {/* Role & Company */}
      {(project.role || project.company) && (
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          {project.role && <span className="px-3 py-1 rounded-full bg-gray-800 font-medium">Role: {project.role}</span>}
          {project.company && <span className="px-3 py-1 rounded-full bg-gray-800 font-medium">Company: {project.company}</span>}
        </div>
      )}

      {/* Features */}
      {project.features && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">Key Features</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {project.features.map((feature, index) => (
              <li key={`feature-${index}`}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Technical Highlights */}
      {project.technicalHighlights && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">Technical Highlights</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {project.technicalHighlights.map((highlight, index) => (
              <li key={`highlight-${index}`}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      {project.techStack && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={`tech-${index}`} className="px-3 py-1 rounded-full bg-blue-900 text-blue-200 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Demo Links */}
      {project.demoLinks && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">Demo Links</h2>
          <ul className="space-y-2">
            {project.demoLinks.map((link, index) => (
              <li key={`demo-${index}`}>
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
        </div>
      )}

      {/* GitHub / Live */}
      <div className="flex gap-4">
        {project.githubLink && project.githubLink !== "#" && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>

      {/* Media Modal */}
      <MediaModal isOpen={modalOpen} mediaList={mediaList} initialIndex={initialIndex} onClose={closeModal} />
    </div>
  );
};

export default ProjectDetail;
