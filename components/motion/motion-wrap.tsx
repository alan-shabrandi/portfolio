"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionWrapProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function MotionWrap({
  children,
  delay = 0,
  className,
  ...props
}: MotionWrapProps) {
  return (
    <motion.div
      {...props}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
