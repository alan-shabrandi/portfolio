"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      () => {
        const headerOffset = 100;

        let closestSection = "";
        let closestDistance = Infinity;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();

          const distance = Math.abs(rect.top - headerOffset);

          if (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0 &&
            distance < closestDistance
          ) {
            closestDistance = distance;
            closestSection = section.id;
          }
        });

        if (closestSection) {
          setActiveSection(closestSection);
        }
      },
      {
        threshold: [0, 0.1, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return activeSection;
}
