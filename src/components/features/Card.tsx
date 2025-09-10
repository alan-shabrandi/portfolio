import { HiArrowRight } from "react-icons/hi";
import type { Feature } from "../../utils/types";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  item: Feature;
}

const Card: React.FC<CardProps> = ({ item: { title, des, Icon } }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;

    x.set(posX / 10);
    y.set(posY / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-full h-96 p-8 rounded-xl bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 shadow-2xl relative cursor-pointer overflow-hidden group"
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 opacity-10 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col h-full justify-between">
        {/* Icon */}
        <div className="text-6xl text-gradient-animated group-hover:scale-110 transition-transform duration-500">{Icon ? <Icon /> : null}</div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gradient-animated transition-all duration-300">{title}</h2>
          <p className="text-gray-300">{des}</p>
          <span className="text-3xl text-gradient-animated group-hover:translate-x-2 transition-transform duration-300">
            <HiArrowRight />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
