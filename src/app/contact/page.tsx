"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import { MaskSection } from "@/components/ui/MaskSection";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      <Hero
        variant="company"
        title="Talk to our team."
        description={`${siteContent.coreValue} Book a strategy call — we'll identify where global talent or AI can improve your operations.`}
      />

      <MaskSection variant="slideUp">
        <ContactForm />
      </MaskSection>

      <Footer />
    </main>
  );
}

