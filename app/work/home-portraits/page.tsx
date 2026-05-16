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
    "Paintings of the homes that hold a life. Commissions accepted for any home, any style.",
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
            <p className="font-serif font-light text-base leading-relaxed text-foreground mb-4">
              A home portrait is a painting of the place that holds a life.
            </p>
            <p className="font-serif font-light text-base leading-relaxed text-foreground mb-4">
              I&rsquo;m particularly drawn to exteriors — to the way a facade
              carries character, the way architecture mediates between the
              natural world and the lives within. My current home portraits
              focus on mid-century modern homes: their clean lines, honest
              materials, and easy integration with the landscape speak to
              something I find deeply beautiful — a simplicity that
              doesn&rsquo;t apologise for itself.
            </p>
            <p className="font-serif font-light text-base leading-relaxed text-foreground mb-4">
              I paint from photographs taken during my own travels and, for
              commission pieces, from images provided by the client. Each is an
              act of close looking — an attempt to capture not just the
              structure, but the feeling of a particular place.
            </p>
            <p className="font-serif font-light text-base leading-relaxed text-foreground">
              These paintings sit close to <em>Returning</em> in spirit: each,
              in its own way, is about being held by a place.
            </p>
          </div>

          <SeriesGallery paintings={paintings} thumbnailAspect="landscape" />

          {/* Commission CTA */}
          <div className="pt-10 border-t border-muted">
            <p className="font-serif font-light text-base leading-relaxed text-foreground mb-6">
              Commissions accepted for any home, any style.
            </p>
            <Link
              href="/inquiries"
              className="inline-block px-8 py-3 bg-foreground text-background font-sans font-light text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-200"
            >
              Inquire about a commission
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
