// ExperienceCardLuxury.tsx
import { motion, type Variants } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  subTitle: string;
  date: string;
  location: string;
  des: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const ExperienceCardLuxury: React.FC<ExperienceCardProps> = ({ title, subTitle, date, location, des }) => {
  return (
    <motion.div
      className="w-full flex group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Timeline indicator */}
      <div className="w-10 h-full relative flex flex-col items-center">
        {/* Outer circle */}
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60 group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md transition-all duration-300">
          {/* Inner circle */}
          <span className="w-3 h-3 rounded-full bg-white inline-flex group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-sm animate-pulse duration-300"></span>
        </span>
        {/* Connecting line */}
        <div className="absolute left-1.5 top-3 h-full w-[2px] bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>

      {/* Card content */}
      <motion.div
        className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-6 py-6 md:px-10 flex flex-col justify-center gap-6 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300"
        variants={itemVariants}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 md:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-400 duration-300">
              {title}
            </h3>
            <p className="text-sm mt-1 text-gray-400 group-hover:text-white duration-300">{subTitle}</p>
            <p className="text-sm mt-1 text-gray-400 group-hover:text-white duration-300">{location}</p>
          </div>

          {/* Date badge */}
          <p className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-3 py-1 rounded-lg flex justify-center items-center text-sm font-medium shadow-md">
            {date}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base group-hover:text-gray-200 transition-colors duration-300">{des}</p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCardLuxury;
