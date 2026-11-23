import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Artist Statement — Michelle R. Wilson",
  description:
    "In Relationship With the Living World — artist statement by Michelle R. Wilson, a visual artist based in Vancouver, BC.",
};

const p = "font-serif font-light text-lg leading-relaxed text-foreground";

export default function ArtistStatementPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <article className="mx-auto max-w-xl px-6 py-16 md:py-28">

          <header className="mb-12">
            <h1 className="font-serif font-light text-4xl sm:text-5xl leading-tight tracking-tight text-foreground">
              In Relationship With the Living World
            </h1>
            <p className="mt-4 font-sans font-light text-xs tracking-[0.2em] uppercase text-accent">
              Artist Statement
            </p>
          </header>

          <div className="w-10 h-px bg-muted mb-12" />

          <div className="flex flex-col gap-6">
            <p className={p}>
              My art practice grows from a deepening relationship with the
              natural world and a curiosity about the interconnectedness and
              mystery of life.
            </p>
            <p className={p}>
              I am drawn to the quiet beauty of everyday places and moments, and
              to the sense of wonder and connection they can evoke. I&rsquo;m
              curious about the mysteries of life and death, the wisdom carried
              through generations, and what ritual, ceremony and storytelling
              might offer in helping us find meaning and deepen our relationships
              with the living world.
            </p>
            <p className={p}>
              Through painting, I explore themes of connection, impermanence,
              renewal and belonging. I am interested in what it means to be
              human, and in the relationships that shape and sustain us,
              including those that extend beyond what we can readily see or
              understand.
            </p>
            <p className={p}>
              My ongoing study and practice of mindfulness inform both my
              creative work and my intention to live with greater awareness,
              compassion and care for all beings.
            </p>
            <p className={p}>
              I am interested in what happens when we pay closer attention to
              these relationships. How might moments of noticing deepen our
              awareness of belonging to the living world? And how might that
              awareness influence the ways we care for the places and living
              beings with whom we share it?
            </p>
            <p className={p}>
              My hope is that my paintings create space for viewers to encounter
              something of their own experience, and perhaps see the familiar
              with renewed attention.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-muted">
            <Link
              href="/work"
              className="font-sans font-light text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors"
            >
              Explore the Work →
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
