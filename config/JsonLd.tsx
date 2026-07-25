import { siteConfig } from "@/config/site";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alan Shabrandi",
    jobTitle: "Software Engineer",
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    knowsAbout: [
      "Backend Development",
      "Go (Golang)",
      "Python",
      "FastAPI",
      "AI Engineering",
      "JavaScript",
      "React",
      "Microservices Architecture",
      "System Design",
      "Distributed Systems",
      "Cloud Infrastructure",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "K. N. Toosi University of Technology",
    },
    worksFor: {
      "@type": "Organization",
      name: "Snap Drive",
      sameAs: "https://snapdrive.cloud",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
