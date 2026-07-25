"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { Logo } from "./logo";
import { PORTFOLIO_DATA } from "@/config/portfolio";

const navItems = PORTFOLIO_DATA.navItems;

const SECTION_IDS = navItems.map((item) => item.href.replace("#", ""));

export function Header() {
  const scrolled = useScroll(20);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-slate-800/60 bg-[#0B0F17]/60 backdrop-blur-2xl transition-all duration-300",
        scrolled && "shadow-[0_10px_40px_rgba(0,0,0,0.25)]",
      )}
    >
      <div className="container mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Logo />
        <DesktopNav activeSection={activeSection} />
        <DesktopResumeButton />
        <MobileNav />
      </div>
    </motion.header>
  );
}

function DesktopNav({ activeSection }: { activeSection: string }) {
  return (
    <nav className="hidden items-center gap-2 md:flex">
      {navItems.map((item) => {
        const id = item.href.replace("#", "");
        const isActive = activeSection === id;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-white/5 text-white border border-white/10"
                : "text-slate-500 hover:text-white",
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

function DesktopResumeButton() {
  return (
    <div className="hidden md:block">
      <Button
        variant="outline"
        nativeButton={false}
        className="rounded-xl border-slate-700/60 bg-transparent px-5 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400/30 hover:bg-white/5 hover:text-white"
        render={
          <a href="/resume.pdf" download="Alan_Shabrandi_CV.pdf">
            Download Resume
            <Download className="ml-2 h-4 w-4" />
          </a>
        }
      />
    </div>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              nativeButton
              size="icon"
              className="text-slate-300 hover:bg-white/5 hover:text-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
          }
        />

        <SheetContent
          side="right"
          className="border-slate-800 bg-[#0B0F17] text-white"
        >
          <SheetHeader>
            <SheetTitle className="text-left text-lg font-semibold text-white">
              Alan Shabrandi
            </SheetTitle>
          </SheetHeader>

          <div className="mt-10 flex flex-col gap-6 ps-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-slate-400 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download="Alan_Shabrandi_CV.pdf"
              className="mt-4 flex items-center gap-2 text-lg font-medium text-cyan-400"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
