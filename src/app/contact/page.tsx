"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-hugo-cream selection:bg-hugo-gold/30">
      <Navbar />

      <Hero
        variant="company"
        title="Talk to our team."
        description="Book a strategy conversation and we’ll identify where global talent or AI can immediately improve your operations."
      />

      <ContactForm />

      <Footer />
    </main>
  );
}

