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
  FaBriefcase,
} from "react-icons/fa";
import { SiProgress, SiJavascript, SiNextdotjs, SiNestjs, SiMongodb } from "react-icons/si";
import { posterProject1, posterProject2, posterProject3 } from "../assets";

export const navLinksdata: NavLink[] = [
  { _id: "1001", title: "Home", link: "home", icon: FaHome },
  { _id: "1002", title: "Features", link: "features", icon: FaStar },
  { _id: "1003", title: "Projects", link: "projects", icon: FaProjectDiagram },
  { _id: "1004", title: "Experiences", link: "experiences", icon: FaBriefcase },
  { _id: "1005", title: "Skills", link: "skills", icon: FaTools },
  { _id: "1006", title: "Education", link: "education", icon: FaGraduationCap },
  { _id: "1007", title: "Contact", link: "contact", icon: FaEnvelope },
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
    title: "Video Streaming Platform",
    shortDes: "A customizable video streaming and sharing platform like YouTube & Aparat.",
    description:
      "Developed a scalable video streaming platform at Mobin Tadbir Sharif, powering apps like Hamrahi Cloud (MCI), Zarebin, Cinemahamrah, CafeVideo, and Shad. Features include live & VOD streaming, real-time chat, comments, polls, and advanced player options such as markers, mini player, speed & quality control.",
    features: [
      "Live & VOD streaming with hls.js",
      "Multi-language & customizable subtitles",
      "Mini player, quality & speed control",
      "Dark/Light mode",
      "Realtime comments, polls & chat",
      "Engagement analytics with charts",
    ],
    role: "Frontend Developer",
    company: "Mobin Tadbir Sharif",
    technicalHighlights: [
      "Feature-based architecture & clean code",
      "Optimized performance with React Profiler & memoization",
      "Real-time features with socket.io",
      "Reusable npm library with tsup & monorepo",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "Socket.io", "hls.js", "Chart.js"],
    demoLinks: ["https://cinemahamrah.ir", "https://hamrahi.cloud/ngp?type=vod&id=477796&portrait=true&theme=dark", "https://cafevdo.zarebin.ir/"],
    images: [posterProject1],
  },
  {
    id: 2,
    title: "Hamrahi Cloud",
    shortDes: "A secure and intelligent cloud storage service with fast access and advanced file management.",
    description:
      "Developed a modern cloud storage platform providing secure, fast, and smart file access anytime. Delivered in both B2B and B2C versions. Features include file sharing, custom download links, detailed reporting, and advanced file management with high-level security and performance optimizations.",
    features: [
      "Secure and smart access to files anytime",
      "File sharing with others",
      "Custom download links without account requirement",
      "High security with antivirus scans & multiple authentication methods",
      "Daily upload/download reports",
      "High speed file upload & download",
    ],
    role: "Frontend Developer",
    company: "Mobin Tadbir Sharif",
    technicalHighlights: [
      "Feature-based architecture & clean code",
      "Fully responsive design for all devices",
      "Advanced file manager implementation",
      "Rendering optimization with React Profiler",
      "User authentication with SSO & MFA",
      "Multi-language support in B2B version (Persian, English, Arabic) using i18next",
      "Performance optimization with useMemo, useCallback, image & font optimization",
    ],
    techStack: ["React", "Tailwind CSS", "Redux", "Axios", "i18next"],
    demoLinks: ["https://abrehamrahi.ir", "https://business.abrehamrahi.ir/"],
    images: [posterProject2],
  },
  {
    id: 3,
    title: "BazaryOnline Global Shopping Platform",
    shortDes: "A cross-border e-commerce platform connecting customers in Iraq with suppliers worldwide.",
    description:
      "BazaryOnline is your gateway to global shopping, offering an expansive selection of products from diverse e-commerce websites. With BazaryOnline, customers in Iraq can effortlessly order from suppliers in the USA, UK, Germany, Turkey, and China. The platform aims to become the largest online shopping hub in Iraq, connecting local customers with global markets. BazaryOnline is designed to deliver convenience, variety, and reliability, making international shopping more accessible than ever before.",
    features: [
      "Secure JWT authentication with refresh tokens and logout management",
      "Role-Based Access Control (RBAC) with Ownership Guard",
      "CRUD operations for Posts and Comments with caching via Redis",
      "Rate limiting for sensitive endpoints",
      "Real-time notifications for Posts, Comments, and Messages using WebSockets",
      "Clean, modular, and maintainable backend architecture",
      "Full API documentation with Swagger",
    ],
    role: "Fullstack Developer",
    company: "BazaryOnline",
    technicalHighlights: [
      "Backend modular design with NestJS, MongoDB, PostgreSQL schemas/models",
      "Redis caching with TTL and LRU management for performance",
      "Validation, error handling, and type-safe code in TypeScript",
      "Role-based guards and ownership checks for secure CRUD operations",
      "Frontend React components with TypeScript and React Hook Form",
      "Protected and public UI routes with JWT-based user info injection",
      "AppConfigService and ConfigService for environment-based settings",
      "Real-time WebSocket notification system",
      "Security hardening: CSP, secure cookies, lockout policies, and OWASP best practices",
    ],
    techStack: ["NestJS", "MongoDB", "PostgreSQL", "Redis", "React", "TypeScript", "JWT", "Swagger", "WebSockets"],
    demoLinks: ["https://bazaryonline.com"],
    images: [posterProject3],
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
  { title: "LinkedIn", icon: FaLinkedinIn, link: "#" },
  { title: "Telegram", icon: FaTelegram, link: "https://t.me/AlanShabrandi" },
];

export const bestSkills = [
  { title: "React", icon: FaReact },
  { title: "Next.js", icon: SiNextdotjs },
  { title: "Node.js", icon: FaNodeJs },
  { title: "NestJS", icon: SiNestjs },
  { title: "MongoDB", icon: SiMongodb },
];
