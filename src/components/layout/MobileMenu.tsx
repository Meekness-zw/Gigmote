"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

// Body scroll lock when menu is open
function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (locked) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [locked]);
}

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/hire-a-dev", label: "Hire a Dev" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useLockBodyScroll(isOpen);

  useEffect(() => setMounted(true), []);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-hugo-black text-white hover:bg-hugo-black/90 transition-colors z-[60]"
        aria-label="Open menu"
      >
        <div className="w-6 h-4 flex flex-col justify-between">
          <span className="block h-0.5 w-full bg-current rounded-full origin-center" />
          <span className="block h-0.5 w-full bg-current rounded-full origin-center" />
          <span className="block h-0.5 w-full bg-current rounded-full origin-center" />
        </div>
      </button>

      {/* Menu rendered via portal to body — avoids navbar/layout affecting fixed position */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
          <>
            {/* Backdrop — blur + fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[9998] bg-hugo-black/70 backdrop-blur-md"
              onClick={handleClose}
              aria-hidden
            />

            {/* Menu panel — anchored to bottom, slides up from below */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{
                duration: 0.55,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="fixed left-0 right-0 bottom-0 z-[9999] rounded-t-[2rem] md:rounded-t-[3rem] bg-hugo-cream border-t-2 border-hugo-black/10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden max-h-[85vh]"
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-hugo-gold/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-hugo-teal/15 blur-2xl" />

              <div className="relative px-6 pt-8 pb-8 overflow-y-auto">
                {/* Close button — morphing X */}
                <motion.button
                  onClick={handleClose}
                  className="absolute top-6 right-6 w-14 h-14 rounded-full bg-hugo-black text-white flex items-center justify-center hover:bg-hugo-black/90 transition-colors"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Menu links — stagger from bottom with staggered slide-up */}
                <nav className="flex flex-col gap-1 pt-4 pb-8">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 40, x: -20 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + idx * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={handleClose}
                        className="block py-4 px-5 rounded-2xl text-2xl font-bold text-hugo-black hover:bg-hugo-gold/20 hover:text-hugo-black transition-colors active:scale-[0.98]"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA — sticky at bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-4 pb-8"
                >
                  <Link href="/contact" onClick={handleClose}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full font-bold text-lg py-5"
                    >
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}
