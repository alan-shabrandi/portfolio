"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeaderMotion({
  children,
  className,
  ...props
}: HTMLMotionProps<"header">) {
  return (
    <motion.header
      {...props}
      className={cn(className)}
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.header>
  );
}
