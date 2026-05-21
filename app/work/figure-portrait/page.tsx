import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SeriesGallery, { type Painting } from "@/components/SeriesGallery";
import paintingsData from "@/data/paintings/portraits.json";
const paintings = paintingsData as Painting[];

export const metadata: Metadata = {
  title: "Portrait — Michelle R. Wilson",
  description:
    "Studies of the human form and presence by Michelle R. Wilson.",
};

export default function FigurePortraitPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">

          {/* Breadcrumb */}
          <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-10">
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <span className="mx-2">→</span>
            Portrait
          </p>

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <h1 className="font-serif font-light text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-8">
              Portrait
            </h1>
            <div className="w-10 h-px bg-muted mb-8" />
            <p className="font-serif font-light text-base leading-relaxed text-foreground mb-4">
              The figure is where I began. These paintings are studies in
              presence — in what it means to look closely at another person, to
              hold attention long enough that something true comes forward. Some
              are formal portraits; others are quieter, more interior.
            </p>
            <p className="font-serif font-light text-base leading-relaxed text-foreground">
              Together they trace an ongoing interest in how the body carries
              feeling, and how paint can hold both likeness and inner life at
              once.
            </p>
          </div>

          <SeriesGallery paintings={paintings} />

          {/* CTA */}
          <div className="pt-10 border-t border-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-serif italic font-light text-base text-foreground">
              Interested in a portrait commission?
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
