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

const PHOTO_PATH = "/about/about-michelle.jpeg";
const PHOTO_EXISTS = true;

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

            {/* ── Left: photo ─────────────────────────── */}
            <div className="lg:sticky lg:top-24">
              {PHOTO_EXISTS ? (
                <div className="relative w-full aspect-3/4 overflow-hidden">
                  <Image
                    src={PHOTO_PATH}
                    alt="Michelle R. Wilson — visual artist"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                /* Placeholder — replace by setting PHOTO_EXISTS = true and
                   dropping a photo at public/about/michelle-wilson.jpg */
                <div className="relative w-full aspect-3/4 bg-muted flex items-center justify-center">
                  <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-accent text-center px-6">
                    Photo coming soon
                  </p>
                </div>
              )}
            </div>

            {/* ── Right: bio + CV ──────────────────────── */}
            <div className="flex flex-col gap-10">

              {/* Heading */}
              <div>
                <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-4">
                  About
                </p>
                <h1 className="font-serif font-light text-4xl sm:text-5xl leading-tight tracking-tight text-foreground">
                  Michelle R. Wilson
                </h1>
                <p className="mt-2 font-sans font-light text-xs tracking-[0.2em] uppercase text-accent">
                  Visual Artist — Vancouver, BC
                </p>
              </div>

              <div className="w-10 h-px bg-muted" />

              {/* Bio */}
              <div className="flex flex-col gap-5">
                <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                  Michelle R. Wilson is a painter based in Vancouver, BC,
                  working across landscape, architectural studies, portraiture,
                  and contemplative figurative work.
                </p>
                <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                  She came to painting early, introduced by her grandmother
                  during a childhood in Saskatchewan, and shaped by the quiet
                  creative legacy of her grandfather, himself an artist. After
                  years of study and formal training at Capilano University,
                  she has built a practice in Vancouver over more than three
                  decades.
                </p>
                <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                  Her approach to painting is rooted in slowness, listening, and
                  attention — a sensibility shaped by three decades of
                  professional work at the intersection of human experience and
                  care: twenty-five years in education and community living,
                  holding space for people whose needs required genuine
                  presence; and six years as a behavioural medicine health coach
                  within primary healthcare, sitting with people through the
                  slow, tender work of change.
                </p>
                <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                  Her current work — including the series <em>Returning</em> and
                  her ongoing <em>Home Portraits</em> — moves between landscape
                  and architecture, exploring how the spaces we inhabit hold
                  memory, offer shelter, and quietly shape our sense of
                  belonging to ourselves and the world.
                </p>
                <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                  Her work is held in private collections across Canada and the
                  United States. She accepts commissions across all subjects and
                  is available for collaboration with interior, architectural,
                  and curatorial projects.
                </p>
              </div>


            </div>
          </div>

          {/* ── A Turning ──────────────────────────────── */}
          <div className="mt-24 pt-16 border-t border-muted">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16">

              {/* Text */}
              <div>
                <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight tracking-tight text-foreground mb-10">
                  A Turning
                </h2>
                <div className="flex flex-col gap-5">
                  <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                    I returned to painting the way many things that matter arrive —
                    slowly, and then all at once.
                  </p>
                  <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                    For a long time, the work existed alongside the rest of my life:
                    the years in classrooms and community spaces, the years sitting
                    with people in the difficult space of change, learning to be
                    present to what couldn&rsquo;t be fixed or rushed. That work
                    taught me how much is contained in a single moment, if you are
                    willing to stay in it.
                  </p>
                  <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                    Painting asks me to stay.
                  </p>
                  <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                    I paint slowly. I work until the image begins to tell me what it
                    needs, and then I try to listen rather than lead. The work that
                    arrives this way feels more true than anything I might have
                    planned. It carries something of the quietness I&rsquo;ve spent
                    years learning to trust.
                  </p>
                  <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                    My current series, <em>Returning</em>, is about that quietness.
                    About the spaces that ask nothing of us except that we be there.
                    I&rsquo;m interested in what it means to come home to oneself,
                    and in how the painted surface can hold that feeling for someone
                    who finds their way to it.
                  </p>
                  <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                    I live and work in Vancouver, BC. When I am not painting, I am
                    often outside, or traveling, or looking at something beautiful
                    until I understand it a little better.
                  </p>
                </div>
              </div>

              {/* CTA — right of text */}
              <div className="flex flex-col gap-10 justify-end">
                <div>
                  <p className="font-serif italic font-light text-base text-accent leading-relaxed mb-4">
                    Interested in a piece or a commission?
                  </p>
                  <Link
                    href="/inquiries"
                    className="inline-block px-8 py-3 bg-foreground text-background font-sans font-light text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-200"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}
