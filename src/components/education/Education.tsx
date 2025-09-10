// Education.tsx
import { motion, type Variants } from "framer-motion";
import Title from "../title/Title";

const Education: React.FC = () => {
  const education = {
    degree: "B.Sc. in Geographic Information Systems (GIS)",
    school: "K. N. Toosi University of Technology",
    location: "Tehran, Iran",
    period: "2014 - 2018",
    description:
      "Specialized in spatial data analysis, mapping technologies, and geospatial databases. Gained strong experience in designing and managing GIS systems while integrating them with modern IT solutions. Explored how geospatial data can be applied in software development, particularly in building web-based platforms and interactive applications that leverage maps, data visualization, and location-based services. This foundation bridged GIS expertise with web development, enabling practical problem-solving through technology.",
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <section id="education" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="My Education" des="Academic Background" />

      <motion.div
        className="flex justify-center mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          {/* Header */}
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-xy">
            {education.degree}
          </h3>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            {education.school} - {education.location}
          </p>
          <p className="text-designColor mt-2 px-3 py-1 bg-black bg-opacity-20 inline-block rounded-lg text-sm font-medium">{education.period}</p>

          {/* Description */}
          {education.description && <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">{education.description}</p>}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
