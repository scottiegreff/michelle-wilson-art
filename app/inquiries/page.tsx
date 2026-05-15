import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import InquiriesForm from "@/components/InquiriesForm";

export const metadata: Metadata = {
  title: "Inquiries — Michelle R. Wilson",
  description:
    "Get in touch with Michelle R. Wilson regarding purchases, commissions, press, or general inquiries.",
};

export default function InquiriesPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <InquiriesForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
