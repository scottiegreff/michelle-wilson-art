import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SeriesGallery, { type Painting } from "@/components/SeriesGallery";
import paintingsData from "@/data/paintings/home-portraits.json";
const paintings = paintingsData as Painting[];

export const metadata: Metadata = {
  title: "Home Portraits — Michelle R. Wilson",
  description:
    "Paintings of the homes that hold a life. Interested in a piece from this series?",
};

export default function HomePortraitsPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">

          {/* Breadcrumb */}
          <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-10">
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <span className="mx-2">→</span>
            Home Portraits
          </p>

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <h1 className="font-serif font-light text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-8">
              Home Portraits
            </h1>
            <div className="w-10 h-px bg-muted mb-8" />
            <p className="font-serif font-light text-base leading-relaxed text-foreground">
              I&rsquo;m interested in the relationship between architecture and its surroundings, and the everyday moments and memories that give these places meaning.
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

          <Link href="/work" className="inline-block mt-10 font-sans font-light text-xs tracking-[0.2em] uppercase text-accent hover:text-foreground transition-colors">
            ← Back to Work
          </Link>

        </section>
      </main>
      <Footer />
    </>
  );
}
