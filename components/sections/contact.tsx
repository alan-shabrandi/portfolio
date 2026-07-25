import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { MotionWrap } from "@/components/motion/motion-wrap";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.8c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.11 2.7.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

interface ContactButtonProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const ContactButton = ({ href, icon: Icon, label }: ContactButtonProps) => {
  const isEmail = href.startsWith("mailto:");

  if (isEmail) {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-800/40 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
      >
        <Icon className="w-4 h-4" />
        {label}
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-800/40 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
    >
      <Icon className="w-4 h-4" />
      {label}
      <ArrowUpRight className="w-3.5 h-3.5" />
    </Link>
  );
};

export function Contact() {
  const { contact } = PORTFOLIO_DATA;

  const links = [
    {
      href: siteConfig.links?.email
        ? `mailto:${siteConfig.links.email}`
        : "mailto:your-email@example.com",
      icon: Mail,
      label: "Email",
    },
    {
      href: siteConfig.links?.linkedin ?? "#",
      icon: LinkedinIcon,
      label: "LinkedIn",
    },
    {
      href: siteConfig.links?.github ?? "#",
      icon: GithubIcon,
      label: "Github",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 border-t border-slate-800/60 overflow-hidden scroll-mt-24"
    >
      <MotionWrap delay={0.1}>
        <div className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/40 backdrop-blur-sm p-8 md:p-12 transition-all duration-500 hover:border-cyan-500/30">
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

          <div className="relative flex flex-col gap-8 max-w-212.5">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400">
              <span className="text-slate-600">{contact.labelNumber}</span>
              {contact.label}
            </div>

            <div className="inline-flex items-center gap-2 w-fit rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1.5 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              {contact.availability}
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-slate-100">
              {contact.heading}
            </h2>

            <p className="max-w-175 text-base md:text-lg leading-relaxed text-slate-400">
              {contact.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {links.map((link) => (
                <ContactButton
                  key={link.label}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        </div>
      </MotionWrap>
    </section>
  );
}
