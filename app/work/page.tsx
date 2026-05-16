import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import returningPaintings from "@/data/paintings/returning.json";
import parisPaintings from "@/data/paintings/paris.json";
import dancersPaintings from "@/data/paintings/dancers.json";

export const metadata: Metadata = {
  title: "Work — Michelle R. Wilson",
  description:
    "Paintings across landscape, architectural studies, portraiture, and figurative work by Michelle R. Wilson.",
};

const series = [
  {
    slug: "returning",
    title: "Returning",
    date: "2026 –",
    leadImage: returningPaintings[0].src,
    leadImageAlt: returningPaintings[0].title + ", from the Returning series",
    description:
      "A series in progress. Paintings of stillness, space, and the quiet that waits in architecture, landscape, and light.",
    cta: "Enter series",
  },
  {
    slug: "home-portraits",
    title: "Home Portraits",
    date: null,
    leadImage: null,
    leadImageAlt: "",
    description: "Paintings of the homes that hold a life.",
    cta: "View series",
  },
  {
    slug: "landscapes",
    title: "Landscapes",
    date: null,
    leadImage: null,
    leadImageAlt: "",
    description: "Paintings of place — the land as both subject and presence.",
    cta: "View series",
  },
  {
    slug: "paris",
    title: "Paris",
    date: null,
    leadImage: parisPaintings[0].src,
    leadImageAlt: parisPaintings[0].title + ", Paris series",
    description: "Cityscapes from time spent walking the streets of Paris.",
    cta: "View series",
  },
  {
    slug: "dancers",
    title: "Dancers",
    date: null,
    leadImage: dancersPaintings[0].src,
    leadImageAlt: dancersPaintings[0].title + ", Dancers series",
    description: "Movement, breath, and the body in motion.",
    cta: "View series",
  },
  {
    slug: "figure-portrait",
    title: "Figure & Portrait",
    date: null,
    leadImage: null,
    leadImageAlt: "",
    description: "Studies of the human form and presence.",
    cta: "View series",
  },
];

const [returning, ...restSeries] = series;

export default function WorkPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">

          {/* Page intro */}
          <div className="max-w-2xl mb-16">
            <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-4">
              Work
            </p>
            <p className="font-serif font-light text-lg leading-relaxed text-foreground">
              My practice moves across several bodies of work, each shaped by a
              different way of looking — at the land, the city, the home, the
              body, the self.
            </p>
            <p className="font-serif font-light text-lg leading-relaxed text-foreground mt-3">
              The newest work, <em>Returning</em>, is where my attention lives
              now. The earlier series remain part of how I see.
            </p>
          </div>

          {/* Featured: Returning */}
          <Link
            href={`/work/${returning.slug}`}
            className="group block mb-12 md:mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0 border border-muted hover:border-accent transition-colors duration-300">
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={returning.leadImage!}
                  alt={returning.leadImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14 bg-background">
                <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                  Featured — Current Work
                </p>
                <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight tracking-tight text-foreground mb-2">
                  {returning.title}
                </h2>
                {returning.date && (
                  <p className="font-sans font-light text-xs tracking-[0.15em] text-accent mb-6">
                    {returning.date}
                  </p>
                )}
                <p className="font-serif font-light text-base leading-relaxed text-foreground mb-8">
                  {returning.description}
                </p>
                <span className="font-sans font-light text-xs tracking-[0.2em] uppercase text-foreground group-hover:text-accent transition-colors">
                  {returning.cta} →
                </span>
              </div>
            </div>
          </Link>

          {/* Series grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {restSeries.map((s) => (
              <Link
                key={s.slug}
                href={`/work/${s.slug}`}
                className="group flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-4/3 overflow-hidden bg-muted mb-4">
                  {s.leadImage ? (
                    <Image
                      src={s.leadImage}
                      alt={s.leadImageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end p-4">
                      <p className="font-serif italic font-light text-sm text-accent">
                        Coming soon
                      </p>
                    </div>
                  )}
                </div>
                {/* Meta */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-serif font-light text-xl leading-tight text-foreground">
                    {s.title}
                    {s.date && (
                      <span className="font-sans text-xs text-accent ml-2 tracking-wide">
                        {s.date}
                      </span>
                    )}
                  </h3>
                  <p className="font-serif font-light text-sm leading-relaxed text-accent flex-1">
                    {s.description}
                  </p>
                  <span className="font-sans font-light text-xs tracking-[0.15em] uppercase text-foreground group-hover:text-accent transition-colors mt-2">
                    {s.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Commission CTA */}
          <div className="mt-20 pt-10 border-t border-muted">
            <p className="font-serif italic font-light text-base text-foreground">
              For commissions, art rental, or curatorial inquiries, please{" "}
              <Link
                href="/inquiries"
                className="underline underline-offset-4 decoration-muted hover:decoration-foreground transition-colors"
              >
                get in touch
              </Link>
              .
            </p>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
