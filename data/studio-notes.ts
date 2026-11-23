export type StudioNote = {
  slug: string;
  title: string;
  /** Trailing part of the title to italicize (e.g. a series title). */
  titleEmphasis?: string;
  /** Original publication date, ISO format (YYYY-MM-DD). */
  published: string;
  /** Human-readable original publication date. */
  publishedLabel: string;
  /** Optional revision note, e.g. "November 2026". */
  revisedLabel?: string;
  /** ISO date used for machine-readable revision metadata. */
  revised?: string;
  excerpt: string;
  image?: { src: string; alt: string };
};

export const studioNotes: StudioNote[] = [
  {
    slug: "on-beginning-returning",
    title: "On Beginning Returning",
    titleEmphasis: "Returning",
    published: "2026-05-15",
    publishedLabel: "May 15, 2026",
    revised: "2026-11",
    revisedLabel: "November 2026",
    excerpt:
      "What began with a single painting slowly became the beginning of a series.",
    image: {
      src: "/work/returning/held.webp",
      alt: "Held, acrylic on canvas, the first painting in the Returning series by Michelle R. Wilson",
    },
  },
];

export function getStudioNote(slug: string) {
  return studioNotes.find((n) => n.slug === slug);
}
