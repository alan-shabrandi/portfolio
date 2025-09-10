// Experiences.tsx
import Title from "../title/Title";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const containerVariants: any = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // فاصله بین کارت‌ها هنگام ظاهر شدن
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
};

const Experiences = () => {
  return (
    <section id="experiences" className="w-full py-20 border-b-[1px] border-b-black">
      {/* Section Title */}
      <Title title="5+ YEARS OF EXPERIENCE" des="My Experiences" />

      {/* Sub-header */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <p className="text-sm text-gradient tracking-[4px]">2020 - 2025</p>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Job Experience</h2>
      </div>

      {/* Timeline with animated cards */}
      <motion.div
        className="mt-14 w-full h-max border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <ExperienceCard
            title="Senior Frontend Developer"
            subTitle="Hamrah Aval + Mobin Tadbir Sharif"
            location="Tehran / Iran"
            date="02/2022 - Present"
            des="Since 2022, I have been working as a Senior Frontend Developer at Hamrah Aval and Mobin Tadbir Sharif, collaborating on several joint projects. During this time, I played a key role in large-scale, high-traffic platforms, including a video streaming and sharing service similar to YouTube and Aparat, and a cloud storage solution similar to Google Drive. I have also contributed significantly to the development of various admin panels, gaining valuable experience and advanced skills."
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <ExperienceCard
            title="FullStack JavaScript Developer (React + NestJS) - Remote"
            subTitle="Bazaryonline Company"
            location="Kurdistan Region of Iraq"
            date="03/2019 - 08/2024"
            des="As a Fullstack Developer at BazaryOnline, I contributed to building Iraq’s largest cross-border e-commerce platform, connecting local customers with global suppliers. I designed and implemented a modular backend with NestJS, MongoDB, and Redis, securing the system with JWT authentication, RBAC, and rate-limiting. On the frontend, I developed dynamic React components with TypeScript and integrated real-time WebSocket notifications. This role gave me deep experience in scalable architecture, performance optimization, and delivering reliable, secure, and user-friendly applications."
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experiences;
