import Link from "next/link";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

const INSTAGRAM_URL = "https://www.instagram.com/michelle.r.wilson";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Studio Notes", href: "/studio-notes" },
  { label: "Inquiries", href: "/inquiries" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF3EE] text-[#1A1A1A]">
      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif font-light text-3xl md:text-4xl leading-tight tracking-tight text-[#1A1A1A]">
              Michelle R. Wilson
            </h2>
            <p className="font-sans font-light text-sm text-[#3D2A20] leading-relaxed max-w-xs">
              Original paintings by Michelle R. Wilson.
            </p>
            <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-[#4A3028] mt-2">
              Vancouver, BC — Canada
            </p>
          </div>


          {/* Navigate column */}
          <div>
            <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-[#4A3028] mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="font-serif font-light text-base text-[#3D2A20] hover:text-[#1A1A1A] transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-serif font-light text-base text-[#3D2A20] hover:text-[#1A1A1A] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-[#4A3028] mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:studio@michellewilson.art"
                className="flex items-center gap-2.5 group"
              >
                <FaEnvelope
                  size={14}
                  className="text-[#4A3028] group-hover:text-[#1A1A1A] transition-colors duration-200 shrink-0"
                />
                <span className="font-sans font-light text-sm text-[#3D2A20] group-hover:text-[#1A1A1A] transition-colors duration-200 break-all">
                  studio@michellewilson.art
                </span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
              >
                <FaInstagram
                  size={14}
                  className="text-[#4A3028] group-hover:text-[#1A1A1A] transition-colors duration-200 shrink-0"
                />
                <span className="font-sans font-light text-sm text-[#3D2A20] group-hover:text-[#1A1A1A] transition-colors duration-200 break-all">
                  @michelle.r.wilson
                </span>
              </a>

              <div className="mt-4 pt-4 border-t border-[#C49070]">
                <p className="font-serif italic font-light text-sm text-[#4A3028] leading-relaxed">
                  &ldquo;Some places hold you.
                  <br />
                  Some paintings do too.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Land acknowledgement */}
        <div className="border-t border-[#C49070] pt-8 mt-10">
          <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-[#4A3028] mb-3">
            Land Acknowledgement
          </p>
          <p className="font-sans font-light text-xs text-[#4A3028] leading-relaxed max-w-2xl">
            With gratitude, this work is made on the unceded territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations. I am grateful to live and create here.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#C49070] mt-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans font-light text-xs text-[#4A3028] tracking-wide">
            &copy; {year} Michelle R. Wilson. All rights reserved.
          </p>
          <p className="font-sans font-light text-xs text-[#4A3028] tracking-wide">
            michellewilson.art
          </p>
        </div>
      </div>
    </footer>
  );
}
