export const siteConfig = {
  name: "Alan Shabrandi",
  title: "Alan Shabrandi | Senior Backend & Software Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alan-shabrandi.com",
  description:
    "Senior Backend Developer specializing in Go, distributed systems, scalable microservices, and AI engineering.",
  ogImage: "https://alan-shabrandi.com/og.png",
  keywords: [
    "Software Engineer",
    "Senior Backend Developer",
    "Senior Go Developer",
    "Golang",
    "Microservices",
    "System Design",
    "Distributed Systems",
    "Python",
    "FastAPI",
    "AI Engineering",
  ],
  links: {
    github: "https://github.com/alan-shabrandi",
    linkedin: "https://linkedin.com/in/alan-shabrandi",
    email: "alan.shabrandi@gmail.com",
  },
  authors: [{ name: "Alan Shabrandi", url: "https://alan-shabrandi.com" }],
  creator: "Alan Shabrandi",
};

export type SiteConfig = typeof siteConfig;
