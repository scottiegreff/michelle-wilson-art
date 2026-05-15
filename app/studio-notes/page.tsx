import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Studio Notes — Michelle R. Wilson",
  description:
    "Notes from the studio — on painting, looking, sensing, and whatever is arriving slowly.",
};

const entries = [
  {
    slug: "on-beginning-returning",
    title: "On Beginning ",
    titleEmphasis: "Returning",
    date: "May 15, 2026",
    paragraphs: [
      "'Held', the first painting in Returning, didn't announce itself as a series. It was simply a space I couldn't stop thinking about. Something about the quality of presence in that image. The way it held both absence and welcome at once.",
      "It began in the midst of what I now name burnout. Years of deep attention and care for everyone around me was catching up. I thought I was doing all the right things to care for myself but they were simply maintaining a level which, looking back, was totally unreasonable; of overachieving, perfectionism, people-pleasing, self-sacrificing. Within me was a tiny cry for refuge, quiet, solitude, space, freedom, peace, joy. The stress, combined with my age, meant confusing symptom chasing, a lot of money on supplements and bodywork practitioners, endless research on perimenopause, and soothing playlists that my husband can no longer stand but were all my nervous system could allow to hear — all to stay afloat, to maintain enough energy to get through each work day with little remaining for my marriage, friendships, or anything else. My consistent mindfulness practice meant I was deeply aware of the irony that my profession was supporting others' health and well-being, meanwhile I was becoming more and more exhausted, and disconnected from my Self, my relationships, creativity, and sense of purpose. I was filled with grief and didn't know why. How long could I go on like this? For what?",
      "I was blessed to go on two 4-week vacations within five months (which included a mindfulness/yoga retreat) and I sincerely hoped these would be the solution to return to work with sustained energy and joy, yet they simply were not. And so, I paused. I listened. I really listened…to the loving part of me inside that knew it was time. Ego and Fear spoke loudly too, but I could now say, “No, I’m sorry, but this is enough. It is time to rest. To reconnect to your Self, to nature, to your own healing and joy.” I stepped away from work and arrived back in the studio. This is the medicine. This is where my lungs expand, healing unfolds, and magic returns.",
      "I painted 'Held' slowly. And when it was done, I found I wasn't finished with the question it was asking.",
      "That's how a series begins, I think. Not with a concept, but with a feeling you haven't yet fully understood.",
    ],
  },
];

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
            <p className="font-serif font-light text-base leading-relaxed text-accent">
              Notes from the studio — on painting, looking, sensing, and
              whatever is arriving slowly.
            </p>
          </div>

          {/* Entries */}
          <div className="max-w-2xl space-y-20 md:space-y-28">
            {entries.map((entry) => (
              <article key={entry.slug}>
                <header className="mb-8">
                  <h2 className="font-serif font-light text-3xl md:text-4xl leading-snug tracking-tight text-foreground mb-3">
                    {entry.title}{entry.titleEmphasis && <em>{entry.titleEmphasis}</em>}
                  </h2>
                  <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
                    Posted {entry.date}
                  </p>
                </header>

                <div className="space-y-5">
                  {entry.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-serif font-light text-base leading-relaxed text-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Divider */}
          <div className="max-w-2xl mt-20 pt-10 border-t border-muted">
            <p className="font-serif italic font-light text-sm text-accent">
              More notes to come as the work continues.
            </p>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
