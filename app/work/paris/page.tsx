import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SeriesGallery, { type Painting } from "@/components/SeriesGallery";
import paintingsData from "@/data/paintings/paris.json";
const paintings = paintingsData as Painting[];

export const metadata: Metadata = {
  title: "Paris — Michelle R. Wilson",
  description:
    "Cityscapes from time spent walking the streets of Paris — paintings of learning a city through sustained looking.",
};

export default function ParisPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">

          {/* Breadcrumb */}
          <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-10">
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <span className="mx-2">→</span>
            Paris
          </p>

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <h1 className="font-serif font-light text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-8">
              Paris
            </h1>
            <div className="w-10 h-px bg-muted mb-8" />
            <p className="font-serif font-light text-base leading-relaxed text-foreground">
              My first time in Paris, like so many painters before me, I fell in
              love with its streets, its rooftops, its light. These cityscapes
              are records of looking and dreaming; of walking the same blocks
              until they became familiar, of learning a city through the steady
              practice of paying attention. The work is less about Paris as a
              subject than about what sustained looking does to the eye, and
              what a place becomes when you let it teach you.
            </p>
          </div>

          <SeriesGallery paintings={paintings} thumbnailAspect="square" />

          {/* CTA */}
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

          <Link href="/work" className="inline-block mt-10 font-sans font-light text-xs tracking-[0.2em] uppercase text-accent hover:text-foreground transition-colors">
            ← Back to Work
          </Link>

        </section>
      </main>
      <Footer />
    </>
  );
}
