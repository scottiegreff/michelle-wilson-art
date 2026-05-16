import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SeriesGallery from "@/components/SeriesGallery";
import paintings from "@/data/paintings/dancers.json";

export const metadata: Metadata = {
  title: "Dancers — Michelle R. Wilson",
  description:
    "Paintings of movement, breath, and the body in motion by Michelle R. Wilson.",
};

export default function DancersPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">

          {/* Breadcrumb */}
          <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-10">
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <span className="mx-2">→</span>
            Dancers
          </p>

          {/* Header */}
          <div className="max-w-2xl mb-14">
            <h1 className="font-serif font-light text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-8">
              Dancers
            </h1>
            <div className="w-10 h-px bg-muted mb-8" />
            <p className="font-serif font-light text-base leading-relaxed text-foreground">
              Painting dancers taught me about movement, but also about stillness
              inside movement — the suspended moment when a body knows exactly
              where it is. These pieces are studies in breath, line, and the
              architecture of the moving figure. Some were made from life in the
              studio; others from photographs, after the movement had passed.
            </p>
          </div>

          <SeriesGallery paintings={paintings} thumbnailAspect="portrait" />

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
