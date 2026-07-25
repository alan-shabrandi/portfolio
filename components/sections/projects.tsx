import Link from "next/link";
import { ArrowRight, Code2, Layers } from "lucide-react";

import { Card } from "@/components/ui/card";
import { MotionWrap } from "@/components/motion/motion-wrap";

interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  architecture: string;
  result: string;
  technologies: string[];
  architectureFlow?: string;
  caseStudyUrl?: string;
  sourceCodeUrl?: string;
  fullWidth?: boolean;
}

const projects: Project[] = [
  {
    number: "01",
    category: "ENTERPRISE PLATFORM",
    title: "Enterprise Document Management Platform",
    description:
      "A multi-tenant document workflow platform designed for secure processing, auditability, and predictable performance.",
    architecture: "Modular services · Async processing · Immutable audit logs",
    architectureFlow: "Client → API → Worker → Database",
    result: "99.95% availability · 42% lower API latency",
    technologies: ["TypeScript", "NestJS", "PostgreSQL", "Redis", "AWS"],
    caseStudyUrl: "#",
    sourceCodeUrl: "#",
  },

  {
    number: "02",
    category: "AI PLATFORM",
    title: "AI-powered Backend Platform",
    description:
      "A reliable orchestration layer for model-backed workflows, with policy controls, usage telemetry, and resilient asynchronous jobs.",
    architecture: "API gateway · Queue workers · Evaluation pipelines",
    architectureFlow: "Gateway → Queue → Workers → AI Models",
    result: "3x throughput · Traceable requests end-to-end",
    technologies: ["Node.js", "RabbitMQ", "PostgreSQL", "OpenTelemetry"],
    caseStudyUrl: "#",
    sourceCodeUrl: "#",
  },

  {
    number: "03",
    category: "DISTRIBUTED SYSTEM",
    title: "Event-driven Distributed System",
    description:
      "A fault-tolerant event processing foundation for high-volume domain events, built around delivery guarantees, replayability, and operable failure handling.",
    architecture:
      "Kafka · Schema evolution · Idempotent consumers · Dead-letter workflows",
    architectureFlow: "Producer → Kafka → Consumers → Recovery",
    result: "99.99% successful delivery",
    technologies: ["Go", "Kafka", "PostgreSQL", "Docker"],
    fullWidth: true,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="
        py-24
        border-b
        border-slate-800/60
        overflow-hidden
        scroll-mt-24
      "
    >
      {/* Section Header */}

      <MotionWrap
        delay={0.1}
        className="
          flex
          flex-col
          gap-4
          mb-14
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            text-xs
            font-semibold
            tracking-[0.25em]
            uppercase
            text-cyan-400
          "
        >
          <span className="text-slate-600">01</span>
          Selected Systems
        </div>

        <h2
          className="
            text-3xl
            md:text-5xl
            font-semibold
            tracking-tight
            text-slate-100
          "
        >
          Projects shaped by production constraints.
        </h2>

        <p
          className="
            max-w-175
            text-base
            md:text-lg
            leading-relaxed
            text-slate-400
          "
        >
          A selection of systems where reliability, observability, and pragmatic
          technical decisions were central to the outcome.
        </p>
      </MotionWrap>

      {/* Projects Grid */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
      >
        {projects.map((project, index) => (
          <MotionWrap
            key={project.number}
            delay={0.2 + index * 0.15}
            className={project.fullWidth ? "lg:col-span-2" : ""}
          >
            <Card
              className="
                  group
                  relative
                  overflow-hidden
                  h-full
                  rounded-3xl
                  p-7
                  md:p-8

                  bg-slate-900/40
                  border
                  border-slate-800/70

                  backdrop-blur-sm

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-cyan-500/30
                "
            >
              {/* Project Number */}

              <span
                className="
                    absolute
                    right-6
                    top-2

                    text-[100px]
                    font-bold
                    leading-none

                    text-slate-800/40

                    select-none
                  "
              >
                {project.number}
              </span>

              {/* Hover Glow */}

              <div
                className="
                    absolute
                    inset-0

                    bg-linear-to-br
                    from-cyan-500/5
                    via-transparent
                    to-transparent

                    opacity-0

                    group-hover:opacity-100

                    transition-opacity
                  "
              />

              <div
                className="
                    relative
                    flex
                    flex-col
                    justify-between

                    h-full

                    gap-8
                  "
              >
                <div
                  className="
                      flex
                      flex-col
                      gap-5
                    "
                >
                  <span
                    className="
                        text-xs
                        font-semibold
                        tracking-[0.2em]
                        text-cyan-400
                      "
                  >
                    {project.category}
                  </span>

                  <h3
                    className="
                        text-2xl
                        md:text-3xl

                        font-semibold

                        tracking-tight

                        text-slate-100

                        transition-colors

                        group-hover:text-cyan-300
                      "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                        text-sm
                        md:text-base

                        leading-relaxed

                        text-slate-400
                      "
                  >
                    {project.description}
                  </p>

                  {/* Architecture */}

                  <div
                    className="
                        flex
                        flex-col
                        gap-3
                        pt-3
                      "
                  >
                    <div
                      className="
                          flex
                          items-center
                          gap-2

                          text-xs
                          font-medium

                          text-slate-500
                        "
                    >
                      <Layers
                        className="
                            w-4
                            h-4
                            text-cyan-400
                          "
                      />
                      Architecture
                    </div>

                    <p
                      className="
                          text-sm
                          text-slate-300
                        "
                    >
                      {project.architecture}
                    </p>

                    {project.architectureFlow && (
                      <div
                        className="
                            rounded-xl

                            border
                            border-slate-800

                            bg-slate-950/50

                            px-4
                            py-3

                            text-xs
                            font-mono

                            text-slate-400
                          "
                      >
                        {project.architectureFlow}
                      </div>
                    )}
                  </div>

                  <div
                    className="
                        text-sm
                        font-medium
                        text-cyan-300
                      "
                  >
                    {project.result}
                  </div>
                </div>

                <div
                  className="
                      flex
                      flex-col
                      gap-5
                    "
                >
                  {/* Tech Stack */}

                  <div
                    className="
                        flex
                        flex-wrap
                        gap-2
                      "
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                              px-3
                              py-1

                              rounded-full

                              text-xs

                              bg-slate-800/60

                              border
                              border-slate-700/50

                              text-slate-300
                            "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}

                  {(project.caseStudyUrl || project.sourceCodeUrl) && (
                    <div
                      className="
                          flex
                          items-center
                          gap-6

                          text-sm
                          font-semibold

                          text-cyan-400
                        "
                    >
                      {project.caseStudyUrl && (
                        <Link
                          href={project.caseStudyUrl}
                          className="
                              inline-flex
                              items-center
                              gap-2

                              hover:text-cyan-300
                            "
                        >
                          Case Study
                          <ArrowRight
                            className="
                                w-4
                                h-4

                                transition-transform

                                group-hover:translate-x-1
                              "
                          />
                        </Link>
                      )}

                      {project.sourceCodeUrl && (
                        <Link
                          href={project.sourceCodeUrl}
                          className="
                              inline-flex
                              items-center
                              gap-2

                              hover:text-cyan-300
                            "
                        >
                          Source Code
                          <Code2
                            className="
                                w-4
                                h-4
                              "
                          />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </MotionWrap>
        ))}
      </div>
    </section>
  );
}
