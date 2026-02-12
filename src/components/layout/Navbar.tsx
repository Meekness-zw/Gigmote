import Link from "next/link";
import { Button } from "../ui/Button";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-hugo-cream/90 backdrop-blur-md transition-all duration-300 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-hugo-gold group">
                    gigmote<span className="text-hugo-black">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/industries">Industries</NavLink>
                    <NavLink href="/how-it-works">How It Works</NavLink>
                    <NavLink href="/pricing">Pricing</NavLink>
                    <NavLink href="/case-studies">Case Studies</NavLink>
                    <NavLink href="/company">About</NavLink>
                    <NavLink href="/careers">Careers</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </div>

                {/* CTA */}
                <div className="flex items-center space-x-4">
                    <Link href="/#contact">
                        <Button variant="primary" size="sm" className="hidden md:inline-flex">
                            Book Consultation
                        </Button>
                    </Link>
                    {/* Mobile Menu Toggle could go here */}
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="text-hugo-black/80 hover:text-hugo-black font-medium text-sm transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-hugo-gold after:transition-all after:duration-300 hover:after:w-full"
    >
        {children}
    </Link>
);
