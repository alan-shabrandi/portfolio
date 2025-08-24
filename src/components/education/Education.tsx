import { motion, type Variants } from "framer-motion";
import Title from "../title/Title";

const Education: React.FC = () => {
  const education = {
    degree: "B.Sc. in Computer Science",
    school: "MIT",
    location: "Cambridge, USA",
    period: "2010 - 2014",
    description: "Focused on software engineering, algorithms, and web development.",
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <section id="education" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="My Education" des="Academic Background" />
      </div>

      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <div className="w-full md:w-2/3 bg-black bg-opacity-20 rounded-lg p-6 shadow-shadowOne">
          <h3 className="text-2xl md:text-3xl font-bold text-white">{education.degree}</h3>
          <p className="text-gray-400 mt-2">
            {education.school} - {education.location}
          </p>
          <p className="text-designColor mt-2">{education.period}</p>
          {education.description && <p className="text-gray-300 mt-4">{education.description}</p>}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
