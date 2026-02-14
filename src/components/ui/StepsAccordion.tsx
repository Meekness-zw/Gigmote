"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface StepItem {
  title: string;
  content: string;
}

interface StepsAccordionProps {
  steps: StepItem[];
  className?: string;
}

/**
 * Expandable steps — like the clone's data-component="Steps" (steps-item, js-dd).
 */
export function StepsAccordion({ steps, className = "" }: StepsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {steps.map((step, idx) => {
        const isOpen = openIndex === idx;
        return (
          <motion.div
            key={idx}
            initial={false}
            className="rounded-2xl border-2 border-hugo-black/10 bg-white overflow-hidden"
            onClick={() => setOpenIndex(isOpen ? null : idx)}
          >
            <button
              type="button"
              className="w-full text-left py-5 px-6 md:py-6 md:px-8 flex items-center justify-between gap-4"
              aria-expanded={isOpen}
            >
              <h4 className="font-bold text-hugo-black pr-8">{step.title}</h4>
              <motion.span
                className="shrink-0 w-10 h-10 rounded-full bg-hugo-black text-white flex items-center justify-center"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl leading-none">+</span>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 md:px-8 pb-6 pt-0 text-hugo-black/80 leading-relaxed">
                    {step.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
