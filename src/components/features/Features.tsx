import { featuresData } from "../../constants";
import type { Feature } from "../../utils/types";
import Title from "../title/Title";
import Card from "./Card";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Features: React.FC = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {featuresData.map((item: Feature) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
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
