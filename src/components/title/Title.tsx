import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  des: string;
}

const Title: React.FC<TitleProps> = ({ title, des }) => {
  return (
    <motion.div
      className="flex flex-col gap-3 sm:gap-4 mb-14"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Small Title */}
      <h3 className="text-sm sm:text-base uppercase font-light tracking-widest text-gradient-animated">{title}</h3>

      {/* Main Description */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 capitalize drop-shadow-md">{des}</h1>

      {/* Optional decorative underline */}
      <div className="w-20 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full mt-2"></div>
    </motion.div>
  );
};

export default Title;
