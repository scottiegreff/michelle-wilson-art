import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Michelle R. Wilson",
  description:
    "Michelle R. Wilson is a visual artist based in Vancouver, BC, working in oil on canvas. Her paintings explore landscape, memory, and the places that hold us.",
};

const PHOTO_PATH = "/about/Non-Headshot.jpeg";

const p = "font-serif font-light text-lg leading-relaxed text-foreground";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

            {/* ── Left: photo ─────────────────────────── */}
            <div className="lg:sticky lg:top-24">
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image
                  src={PHOTO_PATH}
                  alt="Michelle R. Wilson, visual artist"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* ── Right: bio ──────────────────────────── */}
            <div className="flex flex-col gap-10 max-w-2xl">

              <div>
                <h1 className="font-serif font-light text-4xl sm:text-5xl leading-tight tracking-tight text-foreground">
                  About Michelle
                </h1>
              </div>

              <div className="w-10 h-px bg-muted" />

              <div className="flex flex-col gap-6">
                <p className={p}>
                  I&rsquo;m Michelle, a visual artist living and working in
                  Vancouver, British Columbia.
                </p>
                <p className={p}>
                  My paintings are shaped by a deepening relationship with the
                  natural world, a curiosity about the places we inhabit, and
                  the many ways our surroundings influence how we experience
                  life.
                </p>
                <p className={p}>
                  I&rsquo;m fascinated by how certain places can evoke something
                  in us that&rsquo;s difficult to put into words. I&rsquo;m
                  equally drawn to the mystery and wonder of being alive, and the
                  ways our experiences connect us to something larger than
                  ourselves.
                </p>
                <p className={p}>
                  Nature has become an increasingly important part of my life
                  and creative practice. Living in the city, I find myself
                  seeking out forests, gardens and the water&rsquo;s edge, drawn
                  to the beauty, complexity and rhythms of the living world.
                </p>
                <p className={p}>
                  Travel, photography and writing are also meaningful parts of my
                  creative life. I love exploring unfamiliar places, noticing what
                  captures my attention and allowing these experiences to find
                  their way into my work.
                </p>
                <p className={p}>
                  My practice is guided by observation, intuition and curiosity.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="font-serif font-light text-2xl md:text-3xl leading-tight tracking-tight text-foreground">
                  Artistic Background
                </h2>
                <p className={p}>
                  I began painting as a child in Saskatchewan, encouraged by my
                  grandmother and influenced by my grandfather, who was also an
                  artist.
                </p>
                <p className={p}>
                  I later studied art at Capilano University and have continued
                  developing my painting practice over more than three decades.
                </p>
                <p className={p}>
                  Alongside my artistic life, I&rsquo;ve spent many years working
                  in service to others through behavioural medicine, education
                  and community services.
                </p>
                <p className={p}>
                  My ongoing study and practice of mindfulness, embodiment, and
                  wellbeing continue to shape my understanding of our inner
                  lives, our relationships and the ways we experience the world.
                </p>
                <p className={p}>
                  I&rsquo;m drawn to learning from different wisdom traditions,
                  the natural world and the experiences of those who came before
                  us. At the heart of this ongoing exploration is an intention to
                  live with greater awareness, humility, compassion and care.
                </p>
                <p className={p}>
                  My work is held in private collections across Canada and the
                  United States. I welcome commissions, studio visits and
                  opportunities for artistic collaboration.
                </p>
              </div>

              {/* Links */}
              <div className="pt-10 border-t border-muted flex flex-col gap-6">
                <Link
                  href="/artist-statement"
                  className="w-fit font-serif font-light text-lg text-foreground hover:text-accent transition-colors"
                >
                  Read My Artist Statement →
                </Link>
                <Link
                  href="/work"
                  className="w-fit font-serif font-light text-lg text-foreground hover:text-accent transition-colors"
                >
                  Explore the Work →
                </Link>
                <Link
                  href="/inquiries"
                  className="w-fit inline-block mt-2 px-8 py-3 bg-foreground text-background font-sans font-light text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
