"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/Button";
import { AnimatedNavbarLogo } from "../ui/AnimatedNavbarLogo";
import { MobileMenu } from "./MobileMenu";
import { usePathname } from "next/navigation";

type DropdownItem = {
    href: string;
    label: string;
    description?: string;
};

const servicesItems: DropdownItem[] = [
    {
        href: "/services",
        label: "All services",
        description: "Staffing, BPO, AI business solutions",
    },
    {
        href: "/hire-a-dev",
        label: "Hire a Developer",
        description: "Top 1% remote engineering talent",
    },
    {
        href: "/industries",
        label: "Industries",
        description: "How we serve each vertical",
    },
];

export const Navbar = () => {
    return (
        <header className="fixed top-0 w-full z-50">
            {/* Clone-style announcement bar */}
            <div className="bg-hugo-cream-warm border-b border-hugo-black/5">
                <div className="max-w-7xl mx-auto px-6 py-2.5 text-center">
                    <p className="text-sm font-medium text-hugo-black/80">
                        Gigmote is hiring! <Link href="/jobs" className="underline hover:text-hugo-black">Explore open roles</Link>
                    </p>
                </div>
            </div>
            <nav className="bg-hugo-cream/95 backdrop-blur-md border-b border-hugo-black/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
                    <AnimatedNavbarLogo />

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-x-10">
                        <NavLink href="/about">About</NavLink>
                        <NavDropdown label="Services" items={servicesItems} matchPaths={["/services", "/hire-a-dev", "/industries"]} />
                        <NavLink href="/case-studies">Case Studies</NavLink>
                        <NavLink href="/jobs">Jobs</NavLink>
                        <NavLink href="/training">Training</NavLink>
                        <NavLink href="/pricing">Pricing</NavLink>
                    </div>

                    {/* CTA + Mobile menu */}
                    <div className="flex items-center gap-3">
                        <Link href="/join-gigmote" className="hidden lg:block">
                            <Button variant="outline" size="sm" className="border-hugo-black/20 text-hugo-black hover:bg-hugo-black hover:text-white">
                                Join Gigmote
                            </Button>
                        </Link>
                        <Link href="/contact" className="hidden md:block">
                            <Button variant="primary" size="sm">
                                Get Started
                            </Button>
                        </Link>
                        <MobileMenu />
                    </div>
                </div>
            </nav>
        </header>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
        <Link
            href={href}
            className={`text-hugo-black/85 hover:text-hugo-black font-bold text-base transition-colors relative group ${isActive ? "text-hugo-black" : ""}`}
        >
            <span className="relative inline-block">
                {children}
                <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-hugo-gold transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
            </span>
        </Link>
    );
};

const NavDropdown = ({
    label,
    items,
    matchPaths,
}: {
    label: string;
    items: DropdownItem[];
    matchPaths: string[];
}) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isActive = matchPaths.some((p) => pathname === p || pathname.startsWith(p + "/"));

    const handleOpen = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpen(true);
    };
    const handleClose = () => {
        closeTimer.current = setTimeout(() => setOpen(false), 120);
    };

    useEffect(() => {
        return () => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
        };
    }, []);

    return (
        <div
            className="relative"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            onFocus={handleOpen}
            onBlur={handleClose}
        >
            <button
                type="button"
                aria-expanded={open}
                aria-haspopup="menu"
                className={`inline-flex items-center gap-1 text-hugo-black/85 hover:text-hugo-black font-bold text-base transition-colors relative group ${isActive ? "text-hugo-black" : ""}`}
            >
                <span className="relative inline-block">
                    {label}
                    <span
                        className={`absolute -bottom-0.5 left-0 h-0.5 bg-hugo-gold transition-all duration-300 ${isActive || open ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                </span>
                <ChevronDown
                    size={14}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                        role="menu"
                    >
                        <div className="w-72 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-hugo-black/5 overflow-hidden p-2">
                            {items.map((item) => {
                                const itemActive =
                                    pathname === item.href || pathname.startsWith(item.href + "/");
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        role="menuitem"
                                        className={`block px-4 py-3 rounded-xl transition-colors ${itemActive
                                            ? "bg-hugo-gold/15"
                                            : "hover:bg-hugo-cream"
                                            }`}
                                    >
                                        <div className="text-sm font-bold text-hugo-black">
                                            {item.label}
                                        </div>
                                        {item.description && (
                                            <div className="text-xs text-hugo-black/60 mt-0.5 font-medium">
                                                {item.description}
                                            </div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
