"use client";

import { useState } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

const INSTAGRAM_URL = "https://www.instagram.com/michelle.r.wilson";

const inquiryTypes = [
  { value: "", label: "Select a type" },
  { value: "original-work", label: "Original Work" },
  { value: "commission", label: "Commission" },
  { value: "art-rental-staging", label: "Art Rental & Staging" },
  { value: "studio-visit", label: "Studio Visit" },
  { value: "other", label: "Other" },
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
    <div className="flex flex-col gap-16">

      {/* ── Top: two columns ─────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left: intro + contact */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-serif font-light text-4xl sm:text-5xl leading-tight tracking-tight text-foreground">
              Inquiries
            </h1>
            <p className="mt-5 font-serif italic font-light text-lg text-accent leading-relaxed">
              Whether you&rsquo;re drawn to a specific piece, curious about a
              commission, or simply moved by something here — I&rsquo;d love to
              hear from you.
            </p>
          </div>

          <div className="w-10 h-px bg-muted" />

          <div className="flex flex-col gap-4">
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
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group w-fit"
            >
              <FaInstagram
                size={15}
                className="text-accent group-hover:text-foreground transition-colors shrink-0"
              />
              <span className="font-sans font-light text-sm text-accent group-hover:text-foreground transition-colors">
                @michelle.r.wilson
              </span>
            </a>
          </div>

          <div>
            <p className="font-sans font-light text-xs tracking-[0.2em] uppercase text-accent">
              Vancouver, BC — Canada
            </p>
            <p className="mt-1 font-sans font-light text-xs tracking-[0.2em] uppercase text-accent">
              michellewilson.art
            </p>
          </div>
        </div>

        {/* Right: category descriptions */}
        <div className="flex flex-col gap-7">
          <div>
            <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
              Original Works
            </p>
            <p className="font-serif font-light text-sm leading-relaxed text-foreground">
              Paintings available for purchase. Please reach out directly to ask
              about available works and pricing.
            </p>
          </div>

          <div>
            <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
              Commissions
            </p>
            <p className="font-serif font-light text-sm leading-relaxed text-foreground">
              I accept commissions across all subjects. Each piece is developed
              in close, unhurried conversation with you, honouring what
              you&rsquo;re drawn to and what you hope to carry home.
            </p>
          </div>

          <div>
            <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
              Art Rental &amp; Staging
            </p>
            <p className="font-serif font-light text-sm leading-relaxed text-foreground">
              Works are available for interior and architectural staging
              projects. Inquire for current availability and terms.
            </p>
          </div>

          <div>
            <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
              Studio Visits
            </p>
            <p className="font-serif font-light text-sm leading-relaxed text-foreground">
              Available by appointment in Vancouver, BC.
            </p>
          </div>

          <p className="font-serif italic font-light text-sm text-accent leading-relaxed">
            Gallery, press, and curatorial inquiries are also welcome.
          </p>
        </div>
      </div>

      {/* ── Bottom: form (full width) ─────────────────── */}
      <div className="border-t border-muted pt-16">
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
          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16">

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
                Type of Inquiry
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

            {/* Message — spans full width */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
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
              <p className="font-sans text-xs text-red-400 md:col-span-2">
                Something went wrong. Please try again or email directly.
              </p>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-8 py-3 bg-foreground text-background font-sans font-light text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors duration-200 disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
