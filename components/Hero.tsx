import Image from "next/image";

export default function Hero() {
  return (
    <section>
      {/* Image panel — fills exactly the viewport below the navbar */}
      <div
        className="flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "64px", height: "97svh" }}
      >
        <div
          className="relative"
          style={{
            width: "min(calc(97svh - 64px), 100vw)",
            height: "min(calc(97svh - 64px), 100vw)",
          }}
        >
          <Image
            src="/IMG_0861.jpeg"
            alt="Held — from the Returning series, Michelle R. Wilson"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Text block — scrolls below the image */}
      <div className="px-6 py-14 md:py-20 text-center max-w-4xl mx-auto">
        <h1 className="font-serif font-light text-xl sm:text-2xl md:text-3xl leading-none tracking-tight text-foreground">
          Held
        </h1>

        <p className="mt-3 font-sans font-light text-xs sm:text-sm tracking-[0.25em] uppercase text-accent">
          from the Returning series
        </p>

        <div className="mt-8 mb-8 mx-auto w-10 h-px bg-muted" />

        <p className="font-serif italic font-light text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed max-w-lg mx-auto">
          Some places hold you.{" "}
          <span className="whitespace-nowrap">Some paintings do too.</span>
        </p>

        <p className="mt-5 font-sans font-light text-[11px] sm:text-xs tracking-[0.3em] uppercase text-accent">
          Michelle R. Wilson &mdash; Vancouver, BC
        </p>
      </div>
    </section>
  );
}
