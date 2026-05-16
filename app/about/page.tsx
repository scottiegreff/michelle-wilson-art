import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Michelle R. Wilson",
  description:
    "Michelle R. Wilson is a visual artist based in Vancouver, BC, working in oil on canvas. Her paintings explore landscape, memory, and the places that hold us.",
};

const PHOTO_PATH = "/about/about-michelle.png";
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
                  Her approach to painting is rooted in slowness, listening, and
                  attention — a sensibility shaped by three decades of
                  professional work at the intersection of human experience and
                  care: twenty-five years in education and community living,
                  holding space for people whose needs required genuine
                  presence; and six years as a behavioural medicine health coach
                  and somatic practitioner within primary healthcare, sitting
                  with people through the slow, tender work of change.
                </p>
                <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                  Her influences include the contemplative traditions of
                  meditation and inner stillness; painters such as Georgia
                  O&rsquo;Keeffe and Frida Kahlo, whose authenticity and
                  devotion to their own vision have remained quiet companions to
                  her practice; and the experience of travel as a way of
                  learning to see.
                </p>
                <p className="font-serif font-light text-lg leading-relaxed text-foreground">
                  Her current series, <em>Returning</em>, is an ongoing
                  meditation on stillness and coming home to oneself. Her work
                  is held in private collections across Canada and the United
                  States. She accepts commissions across all subjects and is
                  available for collaboration with interior, architectural, and
                  curatorial projects.
                </p>
              </div>

              <div className="w-10 h-px bg-muted" />

              {/* CV download */}
              <div>
                <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-4">
                  CV
                </p>
                <a
                  href="/michelle-wilson-cv.pdf"
                  download
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="font-sans font-light text-sm text-foreground group-hover:text-accent transition-colors">
                    Download Artist CV
                  </span>
                  <FaDownload
                    size={12}
                    className="text-accent group-hover:text-foreground transition-colors"
                  />
                </a>
              </div>

              <div className="w-10 h-px bg-muted" />

              {/* CTA */}
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
        </section>
      </main>
      <Footer />
    </>
  );
}
