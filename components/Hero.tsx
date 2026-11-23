import Image from "next/image";
import Link from "next/link";

const linkClass =
  "font-sans font-light text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors";

export default function Hero() {
  return (
    <section>
      <h1 className="sr-only">Michelle R. Wilson — Visual Artist</h1>

      {/* Opening artwork — full width, full screen height minus navbar */}
      <div className="relative w-full mt-16" style={{ height: "calc(100svh - 64px)" }}>
        <Image
          src="/hero.png"
          alt="Held, from the Returning series, a painting by Michelle R. Wilson"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Caption */}
      <div className="px-6 pt-14 md:pt-20 text-center max-w-4xl mx-auto">
        <h2 className="font-serif font-light text-xl sm:text-2xl md:text-3xl leading-none tracking-tight text-foreground">
          <em>Held</em>
        </h2>
        <p className="mt-3 font-sans font-light text-xs sm:text-sm tracking-[0.25em] uppercase text-accent">
          From the Returning series
        </p>
        <Link href="/work/returning" className={`inline-block mt-6 ${linkClass}`}>
          View Returning →
        </Link>
      </div>

      <div className="mt-14 md:mt-20 mx-auto w-10 h-px bg-muted" />

      {/* Introduction */}
      <div className="px-6 py-14 md:py-20 max-w-xl mx-auto">
        <div className="flex flex-col gap-5">
          <p className="font-serif font-light text-lg md:text-xl leading-relaxed text-foreground">
            I&rsquo;m Michelle R. Wilson, a visual artist based in Vancouver,
            British Columbia.
          </p>
          <p className="font-serif font-light text-lg md:text-xl leading-relaxed text-foreground">
            My creative practice is shaped by a deepening relationship with the
            natural world and a curiosity about what it means to be human, in
            relationship with the mystery and interconnectedness of life.
          </p>
          <p className="font-serif font-light text-lg md:text-xl leading-relaxed text-foreground">
            Through painting, I&rsquo;m drawn to the quiet beauty of everyday
            moments, the experience of place, and the sense of wonder and
            connection they can evoke.
          </p>
        </div>
        <Link href="/work" className={`inline-block mt-10 ${linkClass}`}>
          Explore the Work →
        </Link>
      </div>

      {/* Featured work */}
      <div className="px-6 pb-16 md:pb-24 max-w-xl mx-auto">
        <div className="border-t border-muted pt-14 md:pt-20 text-center">
          <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-4">
            Featured Work
          </p>
          <h2 className="font-serif font-light text-3xl md:text-4xl leading-tight tracking-tight text-foreground">
            Returning
          </h2>
          <p className="mt-2 font-sans font-light text-xs tracking-[0.15em] text-accent">
            An ongoing series
          </p>
          <p className="mt-6 font-serif font-light text-lg leading-relaxed text-foreground">
            An exploration of place and presence.
          </p>
          <Link href="/work/returning" className={`inline-block mt-8 ${linkClass}`}>
            Explore Returning →
          </Link>
        </div>

        {/* Additional navigation */}
        <nav
          aria-label="More from the site"
          className="mt-16 md:mt-20 pt-10 border-t border-muted flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-serif font-light text-base text-foreground"
        >
          <Link href="/about" className="hover:text-accent transition-colors">
            About Michelle
          </Link>
          <span className="text-accent" aria-hidden>·</span>
          <Link href="/studio-notes" className="hover:text-accent transition-colors">
            Studio Notes
          </Link>
          <span className="text-accent" aria-hidden>·</span>
          <Link href="/inquiries" className="hover:text-accent transition-colors">
            Inquiries
          </Link>
        </nav>
      </div>
    </section>
  );
}
