import Link from "next/link";
import { Button } from "../ui/Button";
import { AnimatedNavbarLogo } from "../ui/AnimatedNavbarLogo";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
    return (
        <header className="fixed top-0 w-full z-50">
            {/* Clone-style announcement bar */}
            <div className="bg-hugo-cream-warm border-b border-hugo-black/5">
                <div className="max-w-7xl mx-auto px-6 py-2.5 text-center">
                    <p className="text-sm font-medium text-hugo-black/80">
                        Gigmote is hiring! <Link href="/about" className="underline hover:text-hugo-black">Explore careers</Link>
                    </p>
                </div>
            </div>
            <nav className="bg-hugo-cream/95 backdrop-blur-md border-b border-hugo-black/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
                {/* Logo — animated spiral like clone */}
                <AnimatedNavbarLogo />

                {/* Desktop Navigation — clone-style gap */}
                <div className="hidden md:flex items-center gap-x-12">
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/industries">Industries</NavLink>
                    <NavLink href="/hire-a-dev">Hire a Dev</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/pricing">Pricing</NavLink>
                </div>

                {/* CTA + Mobile menu */}
                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden md:block">
                        <Button variant="primary" size="sm" className="font-bold">
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

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-hugo-black/85 hover:text-hugo-black font-bold text-base transition-colors relative group"
    >
        <span className="relative inline-block">
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hugo-gold group-hover:w-full transition-all duration-300" />
        </span>
    </Link>
);
