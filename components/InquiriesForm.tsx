"use client";

import { useState } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

const INSTAGRAM_URL = "https://www.instagram.com/michelle.r.wilson";

const inquiryTypes = [
  { value: "", label: "Select a type" },
  { value: "original-artwork", label: "Original artwork" },
  { value: "commission", label: "Commission" },
  { value: "art-rental-staging", label: "Art rental or staging" },
  { value: "studio-visit", label: "Studio visit" },
  { value: "gallery-press-curatorial", label: "Gallery, press or curatorial inquiry" },
  { value: "collaboration", label: "Collaboration" },
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
            <div className="mt-5 flex flex-col gap-4">
              <p className="font-serif font-light text-lg text-foreground leading-relaxed">
                Thank you for your interest in my work.
              </p>
              <p className="font-serif font-light text-lg text-foreground leading-relaxed">
                I welcome inquiries about original paintings, commissions,
                studio visits and opportunities for collaboration.
              </p>
            </div>
          </div>

          <div className="w-10 h-px bg-muted" />

          <div className="flex flex-col gap-4">
            <p className="font-serif font-light text-base text-foreground">
              You can contact me directly at:
            </p>
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
            <p className="font-serif font-light text-base text-foreground">
              Or use the form below.
            </p>
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
            <h2 className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
              Original Paintings
            </h2>
            <p className="font-serif font-light text-sm leading-relaxed text-foreground">
              For information about available works, pricing and purchasing, please get in touch.
            </p>
          </div>
          <div>
            <h2 className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
              Commissions
            </h2>
            <p className="font-serif font-light text-sm leading-relaxed text-foreground">
              Each commission begins with a thoughtful conversation about what you&rsquo;re drawn to and what you have in mind.
            </p>
          </div>
          <div>
            <h2 className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
              Art Rental &amp; Staging
            </h2>
            <p className="font-serif font-light text-sm leading-relaxed text-foreground">
              Please contact me to discuss the availability of artwork for rental, interior design or staging projects.
            </p>
          </div>
          <div>
            <h2 className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
              Studio Visits
            </h2>
            <p className="font-serif font-light text-sm leading-relaxed text-foreground">
              Available by appointment in Vancouver, BC.
            </p>
          </div>
          <div>
            <h2 className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
              Collaborations
            </h2>
            <p className="font-serif font-light text-sm leading-relaxed text-foreground">
              I welcome inquiries from galleries, curators, designers, architects and others interested in creative collaboration.
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom: form (full width) ─────────────────── */}
      <div className="border-t border-muted pt-16">
        {status === "sent" ? (
          <div className="py-16 text-center" role="status">
            <p className="font-serif italic font-light text-xl md:text-2xl text-foreground leading-relaxed max-w-xl mx-auto">
              Thank you for reaching out. Your message has been sent, and I look
              forward to connecting with you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="inquiry-name" className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
                Name
              </label>
              <input
                type="text"
                id="inquiry-name"
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
              <label htmlFor="inquiry-email" className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
                Email
              </label>
              <input
                type="email"
                id="inquiry-email"
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
              <label htmlFor="inquiry-type" className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
                Type of Inquiry
              </label>
              <select
                id="inquiry-type"
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
              <label htmlFor="inquiry-message" className="font-sans font-light text-[10px] tracking-[0.25em] uppercase text-accent">
                Message
              </label>
              <textarea
                id="inquiry-message"
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
