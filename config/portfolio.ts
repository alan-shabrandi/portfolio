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

export interface ProjectItem {
  number: string;
  category: string;
  title: string;
  description: string;
  architecture: string;
  result: string;
  technologies: string[];
  architectureFlow?: string;
  vscodeMarketplaceUrl?: string;
  sourceCodeUrl?: string;
  fullWidth?: boolean;
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
      primary: "View Projects",
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
    avatarUrl: "/alan-shabrandi.png",
  },
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "50k+", label: "Daily Active Users" },
    { value: "15+", label: "Enterprise Modules" },
  ] as StatItem[],
  navItems: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
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
        "Built the core backend in Go using Clean Architecture and DDD, scaling the platform to support 15+ distinct modules and over 250k Monthly Active Users (MAU).",
        "Designed a Modular Monolith with an event-driven setup to handle high throughput, reliably processing 600k+ daily background jobs via Asynq and Redis while keeping API latency under 200ms.",
        "Implemented critical security and governance features, including RBAC, Active Directory integration, and immutable versioning to meet strict enterprise compliance rules.",
        "Developed a hybrid search engine combining PostgreSQL Full-Text Search and pgvector, enabling semantic retrieval and AI-based summarization across an archive of 50M+ documents.",
        "Set up automated CI/CD pipelines using Docker, custom linters, and GitLab CI/GitHub Actions, which reduced complex on-premise (air-gapped) deployments from 2 days to under 2 hours.",
        "Contributed to the frontend by building an offline-first PWA using Next.js and TypeScript, implementing robust conflict resolution for reliable document syncing in low-connectivity areas.",
      ],
      technologies: [
        "Go",
        "PostgreSQL",
        "Redis",
        "Asynq",
        "Vector Search",
        "Clean Architecture",
        "DDD",
        "gRPC",
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
        "Engineered scalable backend services in Go to process complex geospatial datasets, implementing high-performance RESTful APIs for spatial queries and map-based features.",
        "Optimized PostGIS spatial data models and query execution plans, improving geospatial data retrieval speeds and spatial index performance.",
        "Integrated OpenStreetMap data pipelines, building reliable backend modules to ingest, transform, and serve vector/spatial layers to client applications.",
        "Implemented core spatial processing algorithms, handling geometry operations, bounding box filters, and location-based services for complex spatial workflows.",
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
      role: "Frontend Developer (ReactJS, NextJS)",
      company: "MCI (Hamrah Aval)",
      link: "https://mci.ir/",
      achievements: [
        "Engineered the frontend infrastructure for a high-concurrency video streaming platform, reliably delivering live and on-demand content to over 50k+ Daily Active Users (DAU).",
        "Optimized application performance by implementing advanced code splitting and lazy loading techniques, successfully reducing initial page load times by 45%.",
        "Developed a low-latency, real-time chat system utilizing WebSockets, ensuring stable and instant communication channels between concurrent users.",
        "Built core modules for a scalable Cloud Storage platform using a modular feature-based architecture, implementing complex flows such as Single Sign-On (SSO) and advanced file management capabilities.",
        "Transformed the platform into a Progressive Web App (PWA), integrating service workers and caching strategies to provide robust offline support and a seamless cross-device mobile experience.",
        "Developed a reusable UI component library documented in Storybook, translating complex Figma designs into pixel-perfect, production-ready interfaces while maintaining strict design consistency.",
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
    labelNumber: "04",
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
      skills: ["Go", "PostgreSQL", "Redis", "RabbitMQ", "Python", "FastAPI"],
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
    labelNumber: "05",
    label: "Contact",
    availability: "Available for engineering opportunities",
    heading: "Building reliable backend systems for real-world products.",
    description:
      "Open to backend engineering roles, distributed systems challenges, and opportunities to build scalable production platforms.",
  },
  projectsSection: {
    labelNumber: "03",
    label: "Selected Systems",
    heading: "Projects shaped by developer experience.",
    description:
      "A selection of tools and production systems focused on performance, seamless workflows, and pragmatic technical decisions.",
  },
  projects: [
    {
      number: "01",
      category: "DEVELOPER TOOLING / AI",
      title: "Scribe — AI-Powered Git Commit Assistant",
      description:
        "A developer productivity tool that analyzes staged Git diffs and generates contextual, standard commit messages using LLMs.",
      architecture:
        "Go CLI Core · Native Git Hook Engine · VS Code Source Control Extension",
      architectureFlow:
        "Git Staged Diff → SHA-256 Cache → LLM Provider (OpenAI/Claude/Gemini/Ollama) → Selected Commit",
      result:
        "Zero redundancy with SHA-256 diff caching · Multi-provider API architecture",
      technologies: [
        "Go (Golang)",
        "TypeScript",
        "Git Hooks",
        "VS Code API",
        "LLM APIs",
        "Cobra/Survey",
      ],
      vscodeMarketplaceUrl:
        "https://marketplace.visualstudio.com/items?itemName=alan-shabrandi.scribe-vscode",
      sourceCodeUrl: "https://github.com/alan-shabrandi/scribe",
      fullWidth: true,
    },
  ] as ProjectItem[],
};
