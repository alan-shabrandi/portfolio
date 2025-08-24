import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import type { Project } from "../../utils/types";
import { FaPlay, FaExpand } from "react-icons/fa";
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
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
            <button className="absolute top-4 right-4 text-white text-3xl z-50 cursor-pointer" onClick={onClose}>
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

  if (!project) return <p className="p-8">Project not found!</p>;

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
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.shortDes}</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {mediaList.map((media, index) => (
          <div key={`media-${index}`} className="relative rounded-md overflow-hidden cursor-pointer group" onClick={() => openModal(index)}>
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={`media-${index}`}
                className="w-full rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
              />
            ) : (
              <video className="w-full rounded-md transition-transform duration-300 group-hover:blur-sm">
                <source src={media.src} type="video/mp4" />
              </video>
            )}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {media.type === "image" ? (
                <FaExpand className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              ) : (
                <FaPlay className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
          </div>
        ))}
      </div>

      <MediaModal isOpen={modalOpen} mediaList={mediaList} initialIndex={initialIndex} onClose={closeModal} />
    </div>
  );
};

export default ProjectDetail;
