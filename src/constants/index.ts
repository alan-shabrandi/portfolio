import type { Education, Feature, NavLink, Project } from "../utils/types";
import { AiFillAppstore } from "react-icons/ai";
import {
  FaDatabase,
  FaServer,
  FaHome,
  FaStar,
  FaProjectDiagram,
  FaTools,
  FaGraduationCap,
  FaEnvelope,
  FaLinkedinIn,
  FaTelegram,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiProgress, SiJavascript, SiNextdotjs, SiNestjs, SiMongodb } from "react-icons/si";
import { image1Project1, image2Project1, projectOne, projectThree, projectTwo } from "../assets";

export const navLinksdata: NavLink[] = [
  { _id: "1001", title: "Home", link: "home", icon: FaHome },
  { _id: "1002", title: "Features", link: "features", icon: FaStar },
  { _id: "1003", title: "Projects", link: "projects", icon: FaProjectDiagram },
  { _id: "1004", title: "Skills", link: "skills", icon: FaTools },
  { _id: "1005", title: "Education", link: "education", icon: FaGraduationCap },
  { _id: "1006", title: "Contact", link: "contact", icon: FaEnvelope },
];

export const featuresData: Feature[] = [
  {
    id: 1,
    Icon: AiFillAppstore,
    title: "App Development",
    des: "Build scalable mobile and web applications using modern technologies.",
  },
  {
    id: 2,
    Icon: SiJavascript,
    title: "Frontend Development",
    des: "Develop responsive, user-friendly, and high-performance web interfaces using modern frontend technologies.",
  },
  {
    id: 3,
    Icon: FaServer,
    title: "Backend Development",
    des: "Develop secure and efficient server-side logic using modern backend frameworks.",
  },
  {
    id: 4,
    Icon: SiProgress,
    title: "SEO Optimisation",
    des: "Optimise websites to improve search engine ranking and increase organic traffic.",
  },
  {
    id: 5,
    Icon: FaDatabase,
    title: "Database Management",
    des: "Design and maintain robust database systems for scalable applications.",
  },
  {
    id: 6,
    title: "Business Strategy",
    des: "Plan and execute projects with a focus on business goals and measurable outcomes.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Clone",
    shortDes: "Clone of popular social media with auth & realtime updates.",
    description:
      "A full-featured social media platform with user authentication, post creation, likes, comments, and real-time notifications. Built for performance and scalability.",
    images: [image1Project1, image2Project1],
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 2,
    title: "E-commerce Website",
    shortDes: "Modern e-commerce platform with payment integration.",
    description:
      "A scalable e-commerce website with product catalog, shopping cart, checkout, payment gateway, and admin dashboard for product management.",
    images: [projectTwo, projectThree],
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Chatting App",
    shortDes: "Real-time chat application with multiple rooms.",
    description:
      "A real-time chat application supporting multiple rooms, direct messaging, message history, and push notifications. Optimized for mobile and desktop.",
    images: [projectThree, projectOne],
    techStack: ["React", "Socket.IO", "Node.js", "Express"],
    githubLink: "#",
    liveLink: "#",
  },
];

export const educationData: Education[] = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science",
    school: "MIT",
    period: "2010 - 2014",
    location: "Cambridge, USA",
    description: "Focused on software engineering, algorithms, and web development.",
  },
  {
    id: 2,
    degree: "M.Sc. in Software Engineering",
    school: "Stanford University",
    period: "2015 - 2017",
    location: "California, USA",
    description: "Specialized in full-stack development and scalable web applications.",
  },
];

export const findMeIn = [
  { title: "LinkedIn", icon: FaLinkedinIn },
  { title: "Telegram", icon: FaTelegram },
];

export const bestSkills = [
  { title: "React", icon: FaReact },
  { title: "Next.js", icon: SiNextdotjs },
  { title: "Node.js", icon: FaNodeJs },
  { title: "NestJS", icon: SiNestjs },
  { title: "MongoDB", icon: SiMongodb },
];
