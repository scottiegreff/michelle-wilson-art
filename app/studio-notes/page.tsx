import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NoteDate from "@/components/NoteDate";
import { studioNotes } from "@/data/studio-notes";

export const metadata: Metadata = {
  title: "Studio Notes — Michelle R. Wilson",
  description:
    "Notes from the studio — on painting, looking, sensing, and whatever is arriving slowly.",
};

export default function StudioNotesPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">

          {/* Page header */}
          <div className="max-w-2xl mb-16 md:mb-24">
            <h1 className="font-serif font-light text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-6">
              Studio Notes
            </h1>
            <div className="w-10 h-px bg-muted mb-6" />
            <div className="flex flex-col gap-4">
              <p className="font-serif font-light text-base leading-relaxed text-accent">
                Occasional reflections from the studio and beyond — on painting,
                photography, travel, the natural world and the questions that
                arise along the way.
              </p>
              <p className="font-serif font-light text-base leading-relaxed text-accent">
                A space to share observations, creative discoveries and the
                experiences that continue to shape my practice.
              </p>
            </div>
          </div>

          {/* Entries */}
          <ul className="max-w-2xl space-y-16 md:space-y-20">
            {studioNotes.map((note) => (
              <li key={note.slug}>
                <article>
                  <h2 className="font-serif font-light text-3xl md:text-4xl leading-snug tracking-tight text-foreground mb-3">
                    <Link
                      href={`/studio-notes/${note.slug}`}
                      className="hover:text-accent transition-colors"
                    >
                      {note.titleEmphasis && note.title.endsWith(note.titleEmphasis) ? (
                        <>
                          {note.title.slice(0, -note.titleEmphasis.length)}
                          <em>{note.titleEmphasis}</em>
                        </>
                      ) : (
                        note.title
                      )}
                    </Link>
                  </h2>
                  <NoteDate note={note} />
                  <p className="mt-6 font-serif font-light text-base leading-relaxed text-foreground">
                    {note.excerpt}
                  </p>
                  <Link
                    href={`/studio-notes/${note.slug}`}
                    className="inline-block mt-6 font-sans font-light text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors"
                    aria-label={`Read the note: ${note.title}`}
                  >
                    Read the Note →
                  </Link>
                </article>
              </li>
            ))}
          </ul>

        </section>
      </main>
      <Footer />
    </>
  );
}
