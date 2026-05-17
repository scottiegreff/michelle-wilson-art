import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SeriesGallery, { type Painting } from "@/components/SeriesGallery";
import paintingsData from "@/data/paintings/landscapes.json";
const paintings = paintingsData as Painting[];

export const metadata: Metadata = {
  title: "Landscapes — Michelle R. Wilson",
  description:
    "Paintings of place — the land as both subject and presence.",
};

export default function LandscapesPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">

          {/* Breadcrumb */}
          <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-10">
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <span className="mx-2">→</span>
            Landscapes
          </p>

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <h1 className="font-serif font-light text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-8">
              Landscapes
            </h1>
            <div className="w-10 h-px bg-muted mb-8" />
            <p className="font-serif font-light text-base leading-relaxed text-foreground mb-4">
              These paintings are conversations with place. I work mostly from
              direct experience — time spent in a particular landscape until
              something of it settles into me, and then into the paint. The work
              is interested in what land holds: weather, time, quiet, the felt
              sense.
            </p>
            <p className="font-serif font-light text-base leading-relaxed text-foreground">
              Both this series and Home Portraits sit close to{" "}
              <em>Returning</em> — each, in its own way, is about being held by
              a place.
            </p>
          </div>

          <SeriesGallery paintings={paintings} thumbnailAspect="square" />

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-serif italic font-light text-base text-foreground">
              Interested in a commission or available work?
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
