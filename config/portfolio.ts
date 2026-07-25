import { Layers, Network, Cloud, LucideIcon, Server } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FocusArea {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Principle {
  title: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  link: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

export interface TechCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  heroSection: {
    badgeRole: "Software Engineer • Go Specialist",
    heading: {
      prefix: "Building",
      highlight1: "scalable",
      middle: "backend systems with",
      highlight2: "precision.",
    },
    buttons: {
      primary: "View Case Studies",
      secondary: "Contact",
    },
  },
  personal: {
    name: "Alan Shabrandi",
    role: "Senior Backend Engineer",
    badgeRole: "Software Engineer • Go Specialist",
    tagline:
      "Building reliable, scalable backend systems & modern web applications.",
    bio: "Full-stack engineer with a strong focus on backend architecture, systems engineering, and modern frontend interfaces. Passionate about clean code, high performance, and AI-driven solutions.",
    location: "Remote / Netherlands",
    status: "Available for new opportunities",
    resumeUrl: "/resume.pdf",
    resumeFileName: "Alan_Shabrandi_CV.pdf",
    avatarUrl: "/profile.png",
  },
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "50k+", label: "Daily Active Users" },
    { value: "15+", label: "Enterprise Modules" },
  ] as StatItem[],
  navItems: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    // { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ] as NavItem[],

  about: {
    label: "Engineering Profile",
    labelNumber: "01",
    heading: "Designing backend systems built for scale and reliability.",
    description:
      "Senior Backend Engineer focused on distributed systems, scalable APIs, and cloud-native architectures with an emphasis on reliability, observability, and operational simplicity.",
    focusLabel: "Engineering Focus",
    principles: [
      {
        title: "Architecture First",
        description:
          "Building systems with clear boundaries, maintainability, and long-term scalability.",
      },
      {
        title: "Production Mindset",
        description:
          "Designing services with testing, observability, and operational reliability.",
      },
    ] as Principle[],
    focusAreas: [
      {
        number: "01",
        title: "Distributed Systems",
        description:
          "Designing reliable services with scalability, resilience, and clear boundaries.",
        icon: Network,
      },
      {
        number: "02",
        title: "System Design",
        description:
          "Creating maintainable architectures for complex business domains.",
        icon: Layers,
      },
      {
        number: "03",
        title: "Cloud Native Systems",
        description:
          "Building production platforms with automation and observability.",
        icon: Cloud,
      },
    ] as FocusArea[],
  },
  experienceSection: {
    labelNumber: "02",
    label: "Engineering Experience",
    heading: "Building systems that survive production.",
    description:
      "Experience designing backend platforms, distributed services, and scalable production infrastructure.",
    cardLabel: "Backend Engineering",
    ui: {
      showLess: "Show Less",
      showMore: "Show More",
    },
  },
  experiences: [
    {
      period: "March 2022 – Present",
      role: "Senior FullStack Engineer (Backend Focus)",
      company: "Snap Drive",
      link: "https://snapdrive.cloud",
      achievements: [
        "Contributed to the design and development of a production-grade enterprise document platform using Go, supporting 15+ enterprise capabilities across IAM, document management, workflow automation, storage, and AI-powered processing.",
        "Designed and evolved backend architecture using Clean Architecture, Domain-Driven Design (DDD), and Modular Monolith patterns, establishing clear boundaries between core business domains and enabling long-term maintainability and scalable system evolution.",
        "Implemented enterprise security and document governance capabilities including RBAC, LDAP/Active Directory integration, audit trails, immutable versioning, and document integrity validation.",
        "Developed asynchronous processing workflows using Redis-based background workers and domain events for document processing, indexing, notifications, and AI-related operations.",
        "Integrated AI-powered document capabilities including OCR processing, semanic search, vector-based retrieval using pgvector, and AI-assisted summarization for Arabic and English documents.",
        "Designed hybrid search capabilities combining PostgreSQL Full-Text Search, metadata filtering, and vector similarity search using pgvector to improve document discovery.",
        "Established CI/CD workflows with automated testing, linting, architecture validation, Docker-based packaging, and deployment automation across SaaS and on-premise environments.",
        "Contributed to frontend and PWA development using Next.js, TypeScript, and offline-first architecture, enabling reliable document access in low-connectivity environments.",
      ],
      technologies: [
        "Go",
        "PostgreSQL",
        "Redis",
        "Asynq",
        "Vector Search",
        "Clean Architecture",
        "DDD",
        "Modular Monolith",
        "React.js",
        "Redux",
        "TypeScript",
        "Monorepo",
      ],
      current: true,
    },
    {
      period: "Sep 2020 – Feb 2022",
      role: "Backend Developer (Go)",
      company: "K. N. Toosi University of Technology",
      link: "https://en.kntu.ac.ir/",
      achievements: [
        "Developed backend services for a Web GIS platform using Go, PostgreSQL/PostGIS, and OpenStreetMap data, implementing RESTful APIs for geospatial operations and map-based applications.",
        "Implemented and maintained spatial processing workflows and backend components for handling geographic data, including geometry operations, spatial queries, and location-based services.",
        "Worked with PostGIS database features to design efficient spatial data models, optimize queries, and improve the performance of geospatial data retrieval and processing.",
        "Developed APIs and backend modules for integrating OpenStreetMap-based datasets into GIS applications, focusing on data processing, reliability, and maintainable code structure.",
        "Collaborated with researchers and software engineers at K. N. Toosi University of Technology to deliver GIS backend capabilities, participate in technical discussions, and contribute to the implementation of core system features.",
      ],
      technologies: [
        "Go",
        "PostgreSQL",
        "PostGIS",
        "GIS",
        "Spatial Database",
        "Asynq",
      ],
      current: false,
    },
    {
      period: "Aug 2018 – Mar 2020",
      role: "Software Developer (ReactJS, NextJS)",
      company: "MCI (Hamrah Aval)",
      link: "https://mci.ir/",
      achievements: [
        "Built and maintained a video streaming platform capable of handling high concurrent traffic, helping MCI deliver live and on-demand content reliably to +50k Daily Active Users.",
        "Improved application performance and reduced page load times by 45% through code splitting and lazy loading.",
        "Developed a real-time chat system using WebSocket, providing stable and low-latency communication between users.",
        "Contributed to the development of a Cloud Storage platform for both B2B and B2C customers, working on features such as SSO, File Manager, and a modular feature-based architecture.",
        "Added PWA capabilities, including offline support, caching strategies, and service workers, resulting in a smoother user experience across devices.",
        "Translated Figma designs into production-ready interfaces with a strong focus on accuracy and consistency, while documenting reusable components in Storybook.",
      ],
      technologies: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Redux",
        "Modular Monolith",
        "Performance Optimization",
        "PWA",
        "CSS",
        "TailwindCSS",
      ],
      current: false,
    },
  ] as ExperienceItem[],
  skillsSection: {
    labelNumber: "03",
    label: "Engineering Toolkit",
    heading: "Technologies behind production systems.",
    description:
      "A focused stack for building reliable, scalable, and maintainable software systems.",
  },
  skillsCategories: [
    {
      title: "BACKEND SYSTEMS",
      description:
        "Building reliable APIs, services, and scalable backend platforms.",
      icon: Server,
      skills: [
        "Node.js",
        "TypeScript",
        "Go",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
      ],
    },
    {
      title: "CLOUD & INFRASTRUCTURE",
      description:
        "Designing production environments with automation and observability.",
      icon: Cloud,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Observability"],
    },
    {
      title: "SOFTWARE ARCHITECTURE",
      description:
        "Engineering systems with maintainability and scalability in mind.",
      icon: Layers,
      skills: [
        "Microservices",
        "Clean Architecture",
        "Event-Driven Design",
        "System Design",
      ],
    },
  ] as TechCategory[],
  contact: {
    labelNumber: "03",
    label: "Contact",
    availability: "Available for engineering opportunities",
    heading: "Building reliable backend systems for real-world products.",
    description:
      "Open to backend engineering roles, distributed systems challenges, and opportunities to build scalable production platforms.",
  },
};
