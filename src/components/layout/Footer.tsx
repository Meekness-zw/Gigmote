import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/Button";

export const Footer = () => {
    return (
        <footer className="bg-hugo-black text-white pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-tight text-white">
                            gigmote<span className="text-hugo-gold">.</span>
                        </Link>
                        <p className="text-white/60 leading-relaxed">
                            Whether 5 or 500 agents, we help assemble reliable, high-impact teams that scale  so you can focus on building.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-hugo-gold hover:text-hugo-black transition-colors flex items-center justify-center" aria-label="Instagram">
                                <Instagram className="w-5 h-5" strokeWidth={2} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-hugo-gold hover:text-hugo-black transition-colors flex items-center justify-center" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" strokeWidth={2} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-hugo-gold hover:text-hugo-black transition-colors flex items-center justify-center" aria-label="Twitter">
                                <Twitter className="w-5 h-5" strokeWidth={2} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-4 text-white/60">
                            <li>
                                <Link
                                    href="/services/bpo-matchmaking-advisory"
                                    className="hover:text-white transition-colors"
                                >
                                    BPO Consulting
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/global-staffing"
                                    className="hover:text-white transition-colors"
                                >
                                    Global Staffing & Recruitment
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/ai-business-solutions"
                                    className="hover:text-white transition-colors"
                                >
                                    AI Business Solutions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA  clone-style */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold">Stay in the loop</h4>
                        <p className="text-white/60 text-base">Join our newsletter for the latest insights on scaling global teams.</p>
                        <div className="flex items-center gap-3">
                            <input
                                placeholder="Enter your email"
                                className="h-12 bg-white/10 border-2 border-white/10 rounded-full px-5 text-base text-white placeholder:text-white/50 focus:outline-none focus:border-hugo-gold w-full"
                            />
                            <Button size="sm" variant="secondary" className="h-12 shrink-0 font-bold px-5">Go</Button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© 2024 Gigmote Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
