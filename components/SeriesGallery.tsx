"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export type Painting = {
  src: string;
  title: string;
  year?: string | number | null;
  medium?: string | null;
  width?: number | null;
  height?: number | null;
  orientation?: "portrait" | "landscape" | "square" | null;
  price?: number | null;
  status?: "available" | "sold" | "nfs" | null;
  description?: string | null;
  framed?: boolean | null;
  prints?: boolean | null;
};

type Props = {
  paintings: Painting[];
  thumbnailAspect?: "square" | "portrait" | "landscape";
};

const aspectClass = {
  square: "aspect-square",
  portrait: "aspect-3/4",
  landscape: "aspect-4/3",
};

export default function SeriesGallery({
  paintings,
  thumbnailAspect = "portrait",
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const isOpen = selected !== null;

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(
    () =>
      setSelected((i) =>
        i !== null ? (i - 1 + paintings.length) % paintings.length : null
      ),
    [paintings.length]
  );

  const next = useCallback(
    () =>
      setSelected((i) =>
        i !== null ? (i + 1) % paintings.length : null
      ),
    [paintings.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const current = selected !== null ? paintings[selected] : null;
  const dimensions = current?.width && current?.height ? `${current.width}" × ${current.height}"` : null;
  const caption = current
    ? [current.medium, dimensions, current.year].filter(Boolean).join(" · ")
    : "";

  return (
    <>
      {/* ── Grid ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {paintings.map((p, i) => (
          <button
            key={`${p.title}-${i}`}
            className="flex flex-col text-left group cursor-pointer"
            onClick={() => setSelected(i)}
            aria-label={`View ${p.title}`}
          >
            <div
              className={`relative w-full ${aspectClass[thumbnailAspect]} overflow-hidden bg-muted mb-4`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <p className="font-serif font-light text-base text-foreground">
              {p.title}
            </p>
            <p className="font-sans font-light text-xs text-accent mt-1">
              {[p.medium, p.width && p.height ? `${p.width}" × ${p.height}"` : null, p.year].filter(Boolean).join(" · ")}
            </p>
          </button>
        ))}
      </div>

      {/* ── Lightbox ──────────────────────────────────── */}
      {isOpen && current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-foreground/40 hover:text-foreground transition-colors p-2 z-10"
            onClick={close}
            aria-label="Close"
          >
            <FiX size={22} />
          </button>

          {/* Counter */}
          {paintings.length > 1 && (
            <p className="absolute top-5 left-1/2 -translate-x-1/2 font-sans font-light text-[11px] tracking-[0.25em] text-foreground/40 select-none">
              {(selected ?? 0) + 1} / {paintings.length}
            </p>
          )}

          {/* Prev arrow */}
          {paintings.length > 1 && (
            <button
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground transition-colors p-3 z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous painting"
            >
              <FiChevronLeft size={36} />
            </button>
          )}

          {/* Image + caption */}
          <div
            className="flex flex-col items-center px-16 md:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className={`relative w-full max-w-md h-96 ${aspectClass[current.orientation || 'square']} bg-muted`}>
              <img
                src={current.src}
                alt={current.title}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
            </div>
            <div className="mt-5 text-center">
              <p className="font-serif font-light text-lg text-foreground">
                {current.title}
              </p>
              {caption && (
                <p className="font-sans font-light text-xs text-accent mt-1.5 tracking-wide">
                  {caption}
                </p>
              )}
            </div>
          </div>

          {/* Next arrow */}
          {paintings.length > 1 && (
            <button
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground transition-colors p-3 z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next painting"
            >
              <FiChevronRight size={36} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
