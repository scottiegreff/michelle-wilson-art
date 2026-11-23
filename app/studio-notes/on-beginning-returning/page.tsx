import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NoteDate from "@/components/NoteDate";
import { getStudioNote } from "@/data/studio-notes";

const note = getStudioNote("on-beginning-returning")!;

export const metadata: Metadata = {
  title: `${note.title} — Studio Notes — Michelle R. Wilson`,
  description: note.excerpt,
  openGraph: {
    title: note.title,
    description: note.excerpt,
    type: "article",
    publishedTime: note.published,
    authors: ["Michelle R. Wilson"],
    url: `https://michellewilson.art/studio-notes/${note.slug}`,
  },
};

const p = "font-serif font-light text-lg leading-relaxed text-foreground";

export default function OnBeginningReturningPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">

          {/* Breadcrumb */}
          <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-10">
            <Link href="/studio-notes" className="hover:text-foreground transition-colors">
              Studio Notes
            </Link>
          </p>

          <header className="mb-12">
            <h1 className="font-serif font-light text-4xl sm:text-5xl leading-tight tracking-tight text-foreground mb-4">
              On Beginning <em>Returning</em>
            </h1>
            <NoteDate note={note} />
          </header>

          {note.image && (
            <figure className="mb-14">
              <div className="relative w-full aspect-square overflow-hidden bg-muted">
                <Image
                  src={note.image.src}
                  alt={note.image.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 font-sans font-light text-xs text-accent">
                <em className="font-serif text-sm text-foreground">Held</em>
                <span className="mx-2" aria-hidden>·</span>
                Acrylic on Canvas · 48&Prime; × 48&Prime; · 2026
              </figcaption>
            </figure>
          )}

          <div className="flex flex-col gap-6">
            <p className={p}>
              <em>Held</em>, the first painting in <em>Returning</em>,
              didn&rsquo;t announce itself as the beginning of a series.
            </p>
            <p className={p}>It was simply an image I couldn&rsquo;t stop thinking about.</p>
            <p className={p}>Something about the feeling of being invited to rest.</p>
            <p className={p}>
              I completed the painting during a period of significant change in
              my life.
            </p>
            <p className={p}>
              After many years of working closely with people in roles centred on
              care and wellbeing, I had begun to recognise how little room I was
              leaving for my own wellbeing.
            </p>
            <p className={p}>
              I found myself longing for more time to paint, to be outdoors, to
              explore, and to experience life at a different pace.
            </p>
            <p className={p}>
              Returning to the studio offered an opportunity to begin listening
              more closely to that longing.
            </p>
            <p className={p}>
              There was something about the image that continued to interest me
              as it developed. The relationship between the interior and what lay
              beyond it. The stillness. The sense that it was both a refuge and an
              opening.
            </p>
            <p className={p}>
              When the painting was finished, I realised I wasn&rsquo;t finished
              with the questions it had raised.
            </p>
            <p className={p}>
              That&rsquo;s how <em>Returning</em> began.
            </p>
            <p className={p}>
              What started as an exploration of quiet architectural spaces has
              gradually opened into a wider curiosity about our relationship with
              place, the natural world and the ways our surroundings shape our
              experience.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-muted flex flex-col gap-6">
            <Link
              href="/work/returning"
              className="w-fit font-serif font-light text-lg text-foreground hover:text-accent transition-colors"
            >
              View the <em>Returning</em> Series →
            </Link>
            <Link
              href="/studio-notes"
              className="w-fit font-sans font-light text-xs tracking-[0.2em] uppercase text-accent hover:text-foreground transition-colors"
            >
              ← Back to Studio Notes
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
