"use client";

import { siteContent } from "@/data/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { BackgroundMotion } from "@/components/ui/BackgroundMotion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, scaleIn, eases } from "@/utils/animations";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MaskSection } from "@/components/ui/MaskSection";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";
import { useRef } from "react";

export default function ServicesPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // specific images for services
  const serviceImages: Record<string, string> = {
    "bpo-matchmaking-advisory": "/images/global bpo advisory.jpg",
    "global-staffing": "/images/From initial setup to scaling operations, we provide end-to-end support to help you build and grow a successful BPO operation serving global clients.create an image  wit digitally empowered people in .jpg",
    "ai-business-solutions": "/images/AI Curiosity lab in the rainforset jungle of africa in a call centre setting- bright setting, icons flying , glass office setting add people (3) (1).jpg",
  };

  return (
    <main className="relative min-h-screen bg-hugo-cream selection:bg-hugo-gold/30 overflow-hidden">
      <BackgroundMotion variant="light" />
      <Navbar />

      {/* Split Screen Image-Rich Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex min-h-[85vh]">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">

            {/* Text Left */}
            <div className="lg:col-span-5 space-y-8 z-20 max-w-xl lg:pr-8">
              <SectionLabel>Services</SectionLabel>

              <div className="inline-block relative">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="absolute bottom-0 left-0 h-px bg-hugo-black/30"
                />
                <span className="text-sm uppercase tracking-[0.3em] font-semibold text-hugo-black/60 pb-2 block">
                  Our Capabilities
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-hugo-black leading-[1.05]">
                <AnimatedText text="Services built for scale." variant="words" />
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl text-hugo-black/70 leading-relaxed font-light mt-4"
              >
                Three pillars designed to unlock growth: comprehensive BPO advisory, curated global staffing, and practical AI solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-3 mt-4"
              >
                {[
                  "BPO Consulting",
                  "Global Staffing",
                  "AI Business Solutions",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="px-4 py-1.5 rounded-full bg-white shadow-sm border border-hugo-black/10 text-xs font-semibold uppercase tracking-widest text-hugo-black/70"
                  >
                    {chip}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Image Right / Background Element */}
            <div className="lg:col-span-7 h-[500px] lg:h-[700px] relative w-full lg:absolute lg:right-0 lg:top-0 lg:w-[55vw]">
              <motion.div
                style={{ y: yTransform }}
                className="absolute inset-0 w-full h-full lg:h-[120%]"
              >
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-hugo-cream to-transparent z-10 hidden lg:block"></div>
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-hugo-cream to-transparent z-10 hidden lg:block"></div>
                <div className="absolute inset-0 bg-hugo-black/10 mix-blend-multiply z-10"></div>
                <Image
                  src="/images/Build a Thriving BPO Business in Africa_From initial setup to scaling operations, we provide end-to-end support to help you build and grow a successful BPO operation serving global clients.create an i(1).jpg"
                  alt="Modern BPO Services"
                  fill
                  className="object-cover lg:object-left rounded-3xl lg:rounded-none shadow-2xl lg:shadow-none"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Service Showcases */}
      <div className="py-24 relative z-20">
        {siteContent.services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <MaskSection key={service.slug} variant="slideUp" className={`py-24 ${isEven ? 'bg-white' : 'bg-hugo-black text-white'}`}>
              <div className="container mx-auto px-6 max-w-7xl">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>

                  {/* Service Details */}
                  <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl font-black ${isEven ? 'text-hugo-black/10' : 'text-white/10'}`}>
                        0{index + 1}
                      </div>
                      <div className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border ${isEven ? 'bg-gray-100 text-hugo-black border-gray-200' : 'bg-white/10 text-white border-white/20'}`}>
                        {service.slogan}
                      </div>
                    </div>

                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${isEven ? 'text-hugo-black' : 'text-white'}`}>
                      {service.title}
                    </h2>

                    <p className={`text-xl leading-relaxed font-light ${isEven ? 'text-hugo-black/70' : 'text-white/70'}`}>
                      {service.description}
                    </p>

                    <div className={`h-px w-full ${isEven ? 'bg-hugo-black/10' : 'bg-white/10'} my-8`}></div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-start gap-3"
                        >
                          <Check size={20} className={`mt-0.5 shrink-0 ${isEven ? 'text-hugo-gold' : 'text-hugo-gold'}`} />
                          <span className={`font-medium ${isEven ? 'text-hugo-black/80' : 'text-white/80'}`}>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-8 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isEven ? 'text-hugo-black/40' : 'text-white/40'}`}>
                          Starting from
                        </p>
                        <p className={`text-2xl font-bold ${isEven ? 'text-hugo-black' : 'text-white'}`}>
                          {service.pricing}
                        </p>
                      </div>
                      <Link href={`/services/${service.slug}`}>
                        <button className={`group relative px-8 py-4 overflow-hidden rounded-2xl font-semibold transition-all duration-300 ${isEven ? 'bg-hugo-black text-white hover:bg-gray-900 shadow-xl' : 'bg-white text-hugo-black hover:bg-gray-100 shadow-xl'}`}>
                          <span className="relative z-10 flex items-center gap-2">
                            View details
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                          </span>
                          <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? 'from-transparent via-white/10 to-transparent' : 'from-transparent via-black/5 to-transparent'} translate-x-[-100%] group-hover:animate-shine`}></div>
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Visual Showcase */}
                  <div className="flex-1 w-full">
                    <div className={`relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl group`}>
                      <Image
                        src={serviceImages[service.slug] || "/images/Gigmote Asset 1.jpg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Luxury Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                      {/* Stylized Badge or floating element over image */}
                      <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-white text-sm font-semibold tracking-wide flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-hugo-gold animate-pulse"></div>
                          Best for: {service.bestFor?.join(", ")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MaskSection>
          );
        })}
      </div>

      {/* Expansive Edge-to-Edge Image Gallery */}
      <section className="py-0 relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-hugo-black">
        <div className="absolute inset-0 flex">
          {[
            "/images/A connected global map glowing with nodes representing remote team members, digital lines connecting cities around the world, concept of global collaboration and outsourcing, futuristic but minimal de.jpg",
            "/images/AI Curiosity lab in the rainforset jungle of africa in a call centre setting- bright setting, icons flying , glass office setting (2).jpg",
            "/images/Gigmote Asset 5.jpg"
          ].map((src, i) => (
            <div key={i} className="flex-1 relative h-full group border-r border-white/10 last:border-0 overflow-hidden">
              <Image
                src={src}
                alt={`Gallery image ${i}`}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-hugo-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {/* Center overlay text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-black text-white mix-blend-overlay opacity-90 tracking-tighter uppercase drop-shadow-2xl">
              Scale Now
            </h2>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <MaskSection variant="slideUp" className="py-32 bg-hugo-cream relative overflow-hidden">
        <BackgroundMotion variant="light" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <FadeInOnScroll>
            <div className="inline-block p-1 bg-white rounded-full shadow-sm border border-hugo-black/5 mb-8">
              <div className="px-6 py-2 bg-hugo-black text-white text-xs font-bold uppercase tracking-widest rounded-full">
                Get Started Today
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-hugo-black leading-[1.05]">
              Need targeted support <br /><span className="text-hugo-gold italic">fast?</span>
            </h2>
            <p className="text-2xl text-hugo-black/60 mb-12 font-light max-w-2xl mx-auto">
              Submit a request. We'll instantly map the right mix of human capital and automation tools for your division.
            </p>
          </FadeInOnScroll>
        </div>
      </MaskSection>

      <ContactForm />

      <Footer />
    </main>
  );
}
