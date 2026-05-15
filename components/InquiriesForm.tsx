"use client";

import { useState } from "react";
import { FaInstagram, FaPinterest, FaEnvelope } from "react-icons/fa";
import { SiArtstation } from "react-icons/si";

const inquiryTypes = [
  { value: "", label: "Select a type" },
  { value: "purchase", label: "Purchase Inquiry" },
  { value: "commission", label: "Commission" },
  { value: "press", label: "Press / Media" },
  { value: "general", label: "General" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Pinterest", href: "https://pinterest.com", icon: FaPinterest },
  { label: "ArtStation", href: "https://artstation.com", icon: SiArtstation },
];

type FormState = {
  name: string;
  email: string;
  type: string;
  message: string;
};

export default function InquiriesForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.type) e.type = "Please select an inquiry type";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
      {/* ── Left: info panel ─────────────────────────── */}
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="font-serif font-light text-4xl sm:text-5xl leading-tight tracking-tight text-foreground">
            Get in Touch
          </h1>
          <p className="mt-5 font-serif italic font-light text-lg text-accent leading-relaxed">
            Whether you&rsquo;re drawn to a specific piece, curious about a
            commission, or simply want to learn more about the work — I&rsquo;d
            love to hear from you.
          </p>
        </div>

        <div className="w-10 h-px bg-muted" />

        <div className="flex flex-col gap-5">
          <a
            href="mailto:studio@michellewilson.art"
            className="flex items-center gap-3 group w-fit"
          >
            <FaEnvelope
              size={15}
              className="text-accent group-hover:text-foreground transition-colors shrink-0"
            />
            <span className="font-sans font-light text-sm text-accent group-hover:text-foreground transition-colors">
              studio@michellewilson.art
            </span>
          </a>

          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-accent hover:text-foreground transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-accent">
            Vancouver, BC — Canada
          </p>
          <p className="mt-1 font-sans font-light text-xs tracking-[0.2em] uppercase text-accent">
            michellewilson.art
          </p>
        </div>
      </div>

      {/* ── Right: form ──────────────────────────────── */}
      <div>
        {status === "sent" ? (
          <div className="py-16 text-center">
            <p className="font-serif italic font-light text-2xl text-foreground">
              Thank you.
            </p>
            <p className="mt-4 font-sans font-light text-sm text-accent">
              Your message has been received. I&rsquo;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-muted focus:border-foreground outline-none pb-2.5 font-sans font-light text-sm text-foreground placeholder:text-muted transition-colors"
              />
              {errors.name && (
                <p className="font-sans text-xs text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-muted focus:border-foreground outline-none pb-2.5 font-sans font-light text-sm text-foreground placeholder:text-muted transition-colors"
              />
              {errors.email && (
                <p className="font-sans text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Inquiry type */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
                Inquiry Type
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-muted focus:border-foreground outline-none pb-2.5 font-sans font-light text-sm text-foreground transition-colors appearance-none cursor-pointer"
              >
                {inquiryTypes.map((t) => (
                  <option key={t.value} value={t.value} disabled={t.value === ""}>
                    {t.label}
                  </option>
                ))}
              </select>
              {errors.type && (
                <p className="font-sans text-xs text-red-400">{errors.type}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your interest..."
                rows={5}
                className="w-full bg-transparent border-b border-muted focus:border-foreground outline-none pb-2.5 font-sans font-light text-sm text-foreground placeholder:text-muted transition-colors resize-none"
              />
              {errors.message && (
                <p className="font-sans text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            {status === "error" && (
              <p className="font-sans text-xs text-red-400">
                Something went wrong. Please try again or email directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start mt-2 px-8 py-3 bg-foreground text-background font-sans font-light text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-200 disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
