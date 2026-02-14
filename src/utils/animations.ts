import { Variants, Transition } from "framer-motion";

// ─── GSAP-inspired eases (cubic-bezier) ─────────────────────────────────────
// Smooth, professional timing that matches GSAP's feel
export const eases = {
    /** Default smooth deceleration (GSAP power1.out) */
    smooth: [0.25, 0.46, 0.45, 0.94] as const,
    /** Stronger deceleration (power2.out) */
    smoothStrong: [0.33, 1, 0.68, 1] as const,
    /** Snappy exit (power3.out) */
    snap: [0.38, 1, 0.78, 1] as const,
    /** Slight overshoot (back.out) */
    back: [0.34, 1.56, 0.64, 1] as const,
    /** Quick start, smooth end (expo.out) */
    expo: [0.19, 1, 0.22, 1] as const,
    /** Circular ease out */
    circ: [0, 0.55, 0.45, 1] as const,
    /** Ease in-out for symmetric motion */
    inOut: [0.65, 0, 0.35, 1] as const,
} as const;

// ─── Reusable transitions ───────────────────────────────────────────────────
export const transitions = {
    /** Standard entrance: 0.5s, smooth out */
    entrance: { duration: 0.5, ease: eases.smooth } as Transition,
    /** Slightly longer for hero / big elements */
    entranceSlow: { duration: 0.7, ease: eases.expo } as Transition,
    /** Quick UI feedback */
    quick: { duration: 0.25, ease: eases.snap } as Transition,
    /** Hover / interactive */
    hover: { duration: 0.35, ease: eases.smooth } as Transition,
    /** Stagger delay step (use with staggerChildren) */
    staggerStep: 0.08,
    staggerStepSlow: 0.12,
} as const;

// ─── Animation variants (Framer Motion) ──────────────────────────────────────
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: eases.smooth }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: transitions.staggerStep,
            delayChildren: 0.15
        }
    }
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: eases.back }
    }
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: eases.smoothStrong }
    }
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: eases.smoothStrong }
    }
};

/** GSAP-style "from" reveal: element starts lower and fades in */
export const revealFromBottom: Variants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: eases.expo }
    }
};

/** Scale up with slight overshoot (back ease) */
export const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: eases.back }
    }
};

/** Stagger with slower delay for lists / grids */
export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: transitions.staggerStepSlow,
            delayChildren: 0.2
        }
    }
};

// Continuous floating animation
export const float = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// SVG draw animation (for underlines, arrows, etc.)
export const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 1.2, ease: eases.expo },
            opacity: { duration: 0.25 }
        }
    }
};

// Card hover: lift + subtle scale (GSAP-style hover)
export const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
        scale: 1.02,
        y: -6,
        transition: { duration: 0.35, ease: eases.smooth }
    }
};

/** Button / CTA tap: quick scale down then back */
export const tapScale = {
    scale: 0.98,
    transition: { duration: 0.15, ease: eases.snap }
};

// ─── Advanced Animation Variants (Premium Site Style) ──────────────────────────

/** Text reveal: words slide up and fade in */
export const textReveal: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

export const textRevealWord: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: eases.expo }
    }
};

/** Split text reveal: letters animate individually */
export const splitTextReveal: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
            delayChildren: 0.1
        }
    }
};

export const splitTextLetter: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.5, ease: eases.expo }
    }
};

/** Parallax scroll effect */
export const parallaxScroll = {
    y: [0, -50],
    transition: {
        duration: 1,
        ease: "linear"
    }
};

/** Image reveal with clip-path */
export const imageReveal: Variants = {
    hidden: { 
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        scale: 1.1
    },
    visible: {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        transition: { duration: 0.8, ease: eases.expo }
    }
};

/** Scale on scroll (for images/backgrounds) */
export const scaleOnScroll: Variants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1, ease: eases.smooth }
    }
};

/** Rotate on scroll */
export const rotateOnScroll: Variants = {
    hidden: { rotate: -5, opacity: 0 },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: eases.smooth }
    }
};

/** Blur to focus */
export const blurReveal: Variants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: {
        filter: "blur(0px)",
        opacity: 1,
        transition: { duration: 0.8, ease: eases.smooth }
    }
};

/** Slide in from sides with rotation */
export const slideRotate: Variants = {
    hidden: { x: -100, rotate: -10, opacity: 0 },
    visible: {
        x: 0,
        rotate: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: eases.expo }
    }
};

/** Magnetic hover effect (use with whileHover) */
export const magneticHover = {
    x: [0, 10, -10, 0],
    y: [0, -10, 10, 0],
    transition: {
        duration: 0.6,
        ease: eases.smooth
    }
};

/** Gradient shift animation */
export const gradientShift = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear"
    }
};
