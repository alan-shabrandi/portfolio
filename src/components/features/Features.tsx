import { featuresData } from "../../constants";
import type { Feature } from "../../utils/types";
import Title from "../title/Title";
import Card from "./Card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {featuresData.map((item: Feature) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 180, damping: 20 },
              },
            }}
          >
            <Card item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
