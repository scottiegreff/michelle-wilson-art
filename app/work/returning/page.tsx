import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SeriesGallery, { type Painting } from "@/components/SeriesGallery";
import paintingsData from "@/data/paintings/returning.json";
const paintings = paintingsData as Painting[];

export const metadata: Metadata = {
  title: "Returning — Michelle R. Wilson",
  description:
    "Returning is an ongoing series of paintings exploring stillness, space, and the quiet that waits in architecture, landscape, and light.",
};

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
            <div className="flex flex-col gap-4">
              <p className="font-serif font-light text-base leading-relaxed text-foreground">
                <em>Returning</em> began with <em>Held</em>.
              </p>
              <p className="font-serif font-light text-base leading-relaxed text-foreground">
                I was drawn to the relationship between the interior and the
                world beyond it, and the feelings of expansion it evoked in me.
              </p>
              <p className="font-serif font-light text-base leading-relaxed text-foreground">
                As the series develops, I find myself exploring what draws us to
                particular places and how our surroundings influence the ways we
                experience ourselves and the world.
              </p>
              <p className="font-serif font-light text-base leading-relaxed text-foreground">
                There is a growing interest in the relationships between the
                built and natural environments, in the passage of time, and in
                the quiet processes of change and renewal.
              </p>
              <p className="font-serif font-light text-base leading-relaxed text-foreground">
                Through these paintings, I&rsquo;m curious about what becomes
                possible when we pay closer attention — to a place, to our own
                experience, and to the many relationships of which we are a part.
              </p>
              <p className="font-serif font-light text-base leading-relaxed text-foreground">
                <em>Returning</em> is an ongoing exploration.
              </p>
            </div>
          </div>

          <SeriesGallery paintings={paintings} thumbnailAspect="square" />

          {/* Related links */}
          <div className="mt-16 pt-10 border-t border-muted flex flex-col gap-6">
            <Link
              href="/studio-notes/on-beginning-returning"
              className="w-fit font-serif font-light text-lg text-foreground hover:text-accent transition-colors"
            >
              Read: On Beginning <em>Returning</em> →
            </Link>
            <Link
              href="/inquiries"
              className="w-fit inline-block px-8 py-3 bg-foreground text-background font-sans font-light text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-200"
            >
              Inquire About a Painting
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
