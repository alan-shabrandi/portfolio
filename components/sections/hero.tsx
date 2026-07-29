import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionWrap } from "../motion/motion-wrap";

import { PORTFOLIO_DATA } from "@/config/portfolio";

export function Hero() {
  const { personal, stats, heroSection } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative container mx-auto scroll-mt-24 px-4 py-20 md:px-6 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/3 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <MotionWrap
          delay={0}
          className="order-2 flex flex-col items-center gap-7 text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left"
        >
          <Badge
            variant="outline"
            className="rounded-full border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium tracking-wide text-cyan-300"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            {personal.badgeRole || heroSection.badgeRole}
          </Badge>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in animation-delay-100">
            {heroSection.heading.prefix}{" "}
            <span className="text-primary glow-text">
              {heroSection.heading.highlight1}
            </span>
            <br />
            {heroSection.heading.middle}{" "}
            <span className="font-serif italic font-normal text-white">
              {heroSection.heading.highlight2}
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {personal.bio}
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="#projects" />}
              className="rounded-xl bg-cyan-400 px-8 font-semibold text-slate-950 transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              {heroSection.buttons.primary}
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Button>

            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              render={<Link href="#contact" />}
              className="rounded-xl px-8 text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {heroSection.buttons.secondary}
            </Button>
          </div>

          <div className="mt-5 grid w-full grid-cols-1 gap-4 border-t border-slate-800/70 pt-6 sm:grid-cols-3 lg:max-w-xl">
            {stats.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-slate-100">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </MotionWrap>

        <MotionWrap
          delay={0.15}
          className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl" />

            <Card className="group relative h-120 w-[320px] overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 p-3 backdrop-blur-sm shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all hover:border-cyan-400/30 sm:h-130 sm:w-90">
              <Image
                src={personal.avatarUrl}
                alt={`${personal.name} - ${personal.role}`}
                fill
                priority
                quality={85}
                sizes="(max-width: 640px) 100vw, 720px"
                className="rounded-2xl object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-slate-200">
                    {personal.status}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </MotionWrap>
      </div>
    </section>
  );
}
