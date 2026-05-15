import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SeriesGallery from "@/components/SeriesGallery";

export const metadata: Metadata = {
  title: "Returning — Michelle R. Wilson",
  description:
    "Returning is an ongoing series of paintings exploring stillness, space, and the quiet that waits in architecture, landscape, and light.",
};

const paintings = [
  {
    src: "/IMG_0861.jpeg",
    title: "Held",
    year: "2026",
    medium: "Oil on canvas",
  },
];

export default function ReturningPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">

          {/* Breadcrumb */}
          <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-10">
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <span className="mx-2">→</span>
            Returning
          </p>

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <h1 className="font-serif font-light text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-2">
              Returning
            </h1>
            <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-accent mb-8">
              2026 – ongoing
            </p>
            <div className="w-10 h-px bg-muted mb-8" />
            <p className="font-serif italic font-light text-xl leading-relaxed text-foreground mb-5">
              There is a quality of attention that asks nothing of the world —
              only that it be allowed to rest in it.
            </p>
            <p className="font-serif font-light text-base leading-relaxed text-foreground mb-4">
              Returning began as a question: what does it feel like to arrive
              somewhere — not in a body rushing toward the next moment, but in a
              body that has finally stopped? The paintings in this series are
              about the stillness that remains when urgency lifts.
            </p>
            <p className="font-serif italic font-light text-sm text-accent">
              Returning is in progress and ongoing.
            </p>
          </div>

          <SeriesGallery paintings={paintings} thumbnailAspect="square" />

          {/* Commission CTA */}
          <div className="mt-16 pt-10 border-t border-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-serif italic font-light text-base text-foreground">
              Interested in a piece from this series?
            </p>
            <Link
              href="/inquiries"
              className="inline-block px-8 py-3 bg-foreground text-background font-sans font-light text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-200"
            >
              Inquire
            </Link>
          </div>

          {/* Back */}
          <Link
            href="/work"
            className="inline-block mt-10 font-sans font-light text-xs tracking-[0.2em] uppercase text-accent hover:text-foreground transition-colors"
          >
            ← Back to Work
          </Link>

        </section>
      </main>
      <Footer />
    </>
  );
}
