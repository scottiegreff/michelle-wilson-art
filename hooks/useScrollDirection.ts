"use client";

import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down";

export function useScrollDirection(): { direction: ScrollDirection; atTop: boolean } {
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handler = () => {
      const scrollY = window.scrollY;
      setAtTop(scrollY < 10);
      if (Math.abs(scrollY - lastScrollY) < 4) return;
      setDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return { direction, atTop };
}
